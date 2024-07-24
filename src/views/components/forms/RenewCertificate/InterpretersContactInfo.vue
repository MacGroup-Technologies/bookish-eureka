<script lang="ts" setup>
import { ref, type Ref, computed } from 'vue'
import { isEmpty, omit } from 'lodash'

import { COUNTRIES_AND_STATES as COUNTRIES } from '@/utils/countries_and_state'

import AppButton from '@/components/Button.vue'

const props = defineProps<{
  tab: string
}>()

const emit = defineEmits(['add-tabs', 'next'])
const data: Ref<any> = ref({})

const states = computed(() => {
  if (props.tab === 'interpreter-mailing') {
    if (isEmpty(data.value.interpreter_country)) {
      return []
    } else {
      return COUNTRIES.find((item) => item.name === data.value.interpreter_country)
    }
  } else {
    return []
  }
})

const sendData = function () {
  const payload = omit(data.value, ['legally_changed_name', 'gender'])

  emit('next', payload)
}
</script>
<template>
  <section class="">
    <div class="" v-if="tab === 'interpreter-fullname'">
      <h2 class="border-b font-bold text-2xl text-primary pb-2">Interpreter's Full Name</h2>
      <form @submit.prevent="emit('add-tabs', 'interpreter-mailing')" class="py-5 md:w-2/3">
        <label for="first_name" class="flex flex-col gap-2 mb-5">
          <span>Interpreter's First Name (Last Name)</span>
          <input
            type="text"
            id="first_name"
            v-model="data.interpreter_first_name"
            class="p-2 border focus:outline-primary rounded-md"
            placeholder="Interpreter's First Name"
            required
          />
        </label>

        <label for="last_name" class="flex flex-col gap-2 mb-5">
          <span>Interpreter's Given Name (First Name)</span>
          <input
            type="text"
            id="last_name"
            v-model="data.interpreter_last_name"
            class="p-2 border focus:outline-primary rounded-md"
            placeholder="Interpreter's Last Name"
            required
          />
        </label>

        <label for="business_name" class="flex flex-col gap-2 mb-5">
          <span>Interpreter's Business or Organization Name (if any)</span>
          <input
            type="text"
            id="business_name"
            v-model="data.interpreter_business_organization"
            class="p-2 border focus:outline-primary rounded-md"
            placeholder="Interpreter's Business or Organization Name"
          />
        </label>

        <AppButton
          mode="submit"
          type="solid"
          size="large"
          color="primary"
          class="mt-5 bg-primary text-white"
        >
          Continue
        </AppButton>
      </form>
    </div>

    <div class="" v-else-if="tab === 'interpreter-mailing'">
      <h2 class="border-b font-bold text-2xl text-primary pb-2">Interpreter's Mailing Address</h2>
      <form @submit.prevent="emit('add-tabs', 'interpreter-contact')" class="py-5 md:w-2/3">
        <label for="street_name" class="flex flex-col gap-2 mb-5">
          <span>Street Number and Name</span>
          <input
            type="text"
            id="street_name"
            v-model="data.interpreter_street_number_name"
            class="p-2 border focus:outline-primary rounded-md"
            placeholder="Street Number and Name"
            required
          />
        </label>

        <div class="flex gap-5 mb-5">
          <label
            for="apt"
            class="flex items-center gap-2 border p-3 rounded-md cursor-pointer w-2/6"
          >
            <input
              type="checkbox"
              id="apt"
              :value="true"
              name="apt"
              v-model="data.interpreter_apt"
            />
            <span>Apt.</span>
          </label>

          <label
            for="street"
            class="flex items-center gap-2 border p-3 rounded-md cursor-pointer w-2/6"
          >
            <input
              type="checkbox"
              id="street"
              :value="true"
              name="street"
              v-model="data.interpreter_ste"
            />
            <span>Ste.</span>
          </label>

          <label
            for="flr"
            class="flex items-center gap-2 border p-3 rounded-md cursor-pointer w-2/6"
          >
            <input
              type="checkbox"
              id="flr"
              :value="true"
              name="floor"
              v-model="data.interpreter_flr"
              required
            />
            <span>Flr.</span>
          </label>
        </div>

        <label for="number" class="flex flex-col gap-2 mb-5">
          <span>Number</span>
          <input
            type="number"
            id="number"
            v-model="data.number"
            class="p-2 border focus:outline-primary rounded-md"
            placeholder="Number"
            required
          />
        </label>

        <div class="flex gap-5 mb-5">
          <label for="city_or_town" class="flex flex-col gap-2 w-1/2">
            <span>City or Town</span>
            <input
              type="text"
              id="city_or_town"
              v-model="data.interpreter_city_town"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="City or Town"
              required
            />
          </label>

          <label for="province" class="flex flex-col gap-2 w-1/2">
            <span>Province</span>
            <input
              type="text"
              id="province"
              v-model="data.interpreter_province"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="Province"
              required
            />
          </label>
        </div>

        <div class="flex gap-5 mb-5">
          <label for="zip_code" class="flex flex-col gap-2 w-1/2">
            <span>Zip Code</span>
            <input
              type="text"
              id="zip_code"
              v-model="data.interpreter_zip_code"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="Zip Code"
              required
            />
          </label>

          <label for="zip_code" class="flex flex-col gap-2 w-1/2">
            <span>Postal Code</span>
            <input
              type="text"
              id="postal_code"
              v-model="data.interpreter_postal_code"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="Postal Code"
              required
            />
          </label>
        </div>

        <div class="flex gap-5 mb-5">
            <label for="country" class="flex flex-col gap-2 w-1/2">
            <span>Country</span>
            <select
              id="country"
              v-model="data.interpreter_country"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="Please Select your mailing country"
              required
            >
              <option v-for="(country, index) in COUNTRIES" :key="index" :value="country.name">
                {{ country.name }}
              </option>
            </select>
          </label>

          <label for="state" class="flex flex-col gap-2 md:w-1/2">
            <span>State</span>
            <select
              id="state"
              v-model="data.interpreter_state"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="Please Select"
              required
              :disabled="isEmpty(data.interpreter_country)"
            >
              <option v-for="(state, index) in states!.states!" :key="index" :value="state.name">
                {{ state.name }}
              </option>
            </select>
          </label>

        </div>

        <AppButton
          mode="submit"
          type="solid"
          size="large"
          color="primary"
          class="mt-5 bg-primary text-white"
        >
          Continue
        </AppButton>
      </form>
    </div>

    <div class="" v-else-if="tab === 'interpreter-contact'">
      <h2 class="border-b font-bold text-2xl text-primary pb-2">Interpreter's Contact</h2>
      <form @submit.prevent="emit('add-tabs', 'interpreter-certification')" class="py-5 md:w-2/3">
        <label for="tel_number" class="flex flex-col gap-2 mb-5">
          <span>Interpreter's Daytime Telephone Number</span>
          <input
            type="tel"
            id="tel_number"
            v-model="data.interpreter_phone_number"
            class="p-2 border focus:outline-primary rounded-md"
            placeholder="Interpreter's Daytime Telephone Number"
            required
          />
        </label>

        <label for="mobile_number" class="flex flex-col gap-2 mb-5">
          <span>Interpreter's Mobile Telephone Number (if any)</span>
          <input
            type="tel"
            id="mobile_number"
            v-model="data.interpreter_mobile_number"
            class="p-2 border focus:outline-primary rounded-md"
            placeholder="Interpreter's Mobile Telephone Number (if any)"
          />
        </label>

        <label for="email" class="flex flex-col gap-2 mb-5">
          <span>Interpreter's Email Address (if any)</span>
          <input
            type="email"
            id="email"
            v-model="data.interpreter_email"
            class="p-2 border focus:outline-primary rounded-md"
            placeholder="john.doe@mail.com"
          />
        </label>

        <AppButton
          mode="submit"
          type="solid"
          size="large"
          color="primary"
          class="mt-5 bg-primary text-white"
        >
          Continue
        </AppButton>
      </form>
    </div>

    <div class="" v-else-if="tab === 'interpreter-certification'">
      <h2 class="border-b font-bold text-2xl text-primary pb-2">Interpreter's Contact</h2>
      <form @submit.prevent="emit('add-tabs', 'interpreter-signature')" class="py-5 md:w-2/3">
        <b>I certify, under penalty of perjury, that:</b>
        I am fluent in English and
        <input
          type="text"
          class="border rounded-sm p-1"
          placeholder="Language"
          v-model="data.other_language"
          required
        />
        which is the same language provided in this application, and I have read to this
        applicant in the identified language every question and instruction on this application and
        his or her answer to every question. The applicant informed me that he or she understands
        every instruction, question, and answer on the application, including the Applicant's
        Certification, and has verified the accuracy of every answer.
        <AppButton
          mode="submit"
          type="solid"
          size="large"
          color="primary"
          class="mt-5 bg-primary text-white"
        >
          Continue
        </AppButton>
      </form>
    </div>

    <div class="" v-else>
      <h2 class="border-b font-bold text-2xl text-primary pb-2">Interpreter's Contact</h2>
      <form @submit.prevent="sendData()" class="py-5 md:w-2/3">
        <label for="signature" class="flex flex-col gap-2 mb-5">
          <span>Interpreter's Signature</span>
          <input
            type="text"
            id="signature"
            class="p-2 border focus:outline-primary rounded-md"
            placeholder="Interpreter's Signature"
          />
        </label>

        <label for="signature_date" class="flex flex-col gap-2 mb-5">
          <span>Date of Signature</span>
          <input
            type="date"
            id="signature_date"
            v-model="data.interpreter_signature_date"
            class="p-2 border focus:outline-primary rounded-md"
            placeholder="Date of Signature"
            required
          />
        </label>

        <div class="text-red border-l-2 border-red px-2 mb-5">
          Please make sure every detail is properly captured before submitting
        </div>

        <AppButton
          mode="submit"
          type="solid"
          size="large"
          color="primary"
          class="mt-5 bg-primary text-white"
        >
          Submit Application
        </AppButton>
      </form>
    </div>
  </section>
</template>
