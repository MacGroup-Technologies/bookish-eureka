<script lang="ts" setup>
import { computed, ref, type Ref } from 'vue'
import { isEmpty } from 'lodash'

import AppButton from '@/components/Button.vue'
import { COUNTRIES_AND_STATES as COUNTRIES } from '@/utils/countries_and_state'

const props = defineProps<{
  tab: string
}>()

const emit = defineEmits(['add-tabs', 'next'])

const data: Ref<any> = ref({})

const sendData = function () {
  emit('next', data.value)
}
const states = computed(() => {
  if (isEmpty(data.value.country)) {
    return []
  } else {
    return COUNTRIES.find((item) => item.name === data.value.country)
  }
})
</script>

<template>
  <section>
    <div class="" v-if="tab === 'specialcertificate'">
      <h2 class="border-b font-bold text-2xl text-primary pb-2">
        Certificate of Recognition as a Citizen
      </h2>
      <form @submit.prevent="emit('add-tabs', 'uscis')" class="py-5 md:w-2/3">
        <div class="mt-2 flex flex-col gap-3">
          <!--------------------------Countries  ------------------------------>
          <label for="country" class="flex flex-col gap-2 w-1/2">
            <span>Name of Foreign Country </span>
            <select
              id="country"
              v-model="data.foreign_country"
              class="p-2 border focus:outline-primary rounded-md"
              required
            >
              <option v-for="(country, index) in COUNTRIES" :key="index" :value="country.name">
                {{ country.name }}
              </option>
            </select>
          </label>

          <span class="block font-bold mt-2">Information About Foreign Official</span>
          <div class="text-red border-l-2 border-red px-2 mb-3">
            <b
              >NOTE:Provide the following information about the official of a foreign country who
              has requested this certificate (if known).</b
            >
          </div>

          <!---------------Names ------------------->
          <!---------------Lastname -------------------------->
          <div class="flex gap-5">
            <label for="last_name" class="flex flex-col gap-2 mb-5">
              <span>Family Name (Last Name)</span>
              <input
                type="text"
                id="last_name"
                v-model="data.family_name"
                class="p-2 border focus:outline-primary rounded-md"
                placeholder="Family Name [eg. Rodriquez]"
                required
              />
            </label>

            <!-----------------------fname ---------------------->
            <label for="given_name" class="flex flex-col gap-2 mb-5">
              <span>Given Name (First Name)</span>
              <input
                type="text"
                id="given_name"
                v-model="data.given_name"
                class="p-2 border focus:outline-primary rounded-md"
                placeholder="Given Name [eg. Pedro]"
                required
              />
            </label>

            <!-----------------------------Middle name -------------------------->
            <label for="middle_name" class="flex flex-col gap-2 mb-5">
              <span>Middle Name</span>
              <input
                type="text"
                id="middle_name"
                v-model="data.middle_name"
                class="p-2 border focus:outline-primary rounded-md"
                placeholder="Middle Name [eg. Juan]"
              />
            </label>
          </div>

          <div class="flex gap-5">
            <!---------official title ------------>
            <label for="official_title" class="flex flex-col gap-2 w-full mb-5">
              <span>Official Title</span>
              <input
                type="text"
                id="official_title"
                v-model="data.official_title"
                class="p-2 border focus:outline-primary rounded-md"
                placeholder="Official Title"
                required
              />
            </label>

            <!----------govt agency -------->
            <label for="govt_agency" class="flex flex-col w-full gap-2 mb-5">
              <span>Name of Government Agency</span>
              <input
                type="text"
                id="govt_agency"
                v-model="data.govt_agency"
                class="p-2 border focus:outline-primary rounded-md"
                placeholder="Government Agency"
                required
              />
            </label>
          </div>

          <!-------foreign official's address ------------>
          <label for="street_number_and_name" class="flex flex-col gap-2 mb-5">
            <span>Street Number and Name</span>
            <input
              type="text"
              id="street_number_and_name"
              v-model="data.street_name_number"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="Street Number and Name"
              required
            />
          </label>

          <div class="flex gap-5">
            <label
              for="apt"
              class="flex flex-col-reverse items-center gap-2 border py-1 px-3 rounded-md cursor-pointer w-1/12 mb-5"
            >
              <input type="checkbox" id="apt" v-model="data.apt" required />
              <span>Apt.</span>
            </label>

            <label
              for="street"
              class="flex flex-col-reverse items-center gap-2 border py-1 px-3 rounded-md cursor-pointer w-1/12 mb-5"
            >
              <input type="checkbox" id="str" v-model="data.ste" required />
              <span>Ste.</span>
            </label>
            <label
              for="floor"
              class="flex flex-col-reverse items-center gap-2 border py-1 px-3 rounded-md cursor-pointer w-1/12 mb-5"
            >
              <input type="checkbox" id="flr" v-model="data.flr" required />
              <span>Flr.</span>
            </label>

            <!------------Number  --------------->
            <label for="number" class="flex flex-col gap-2 w-full mb-5">
              <span>Number</span>
              <input
                type="text"
                id="number"
                v-model="data.number"
                class="p-2 border focus:outline-primary rounded-md"
                placeholder="Number"
                required
              />
            </label>
          </div>

          <!-----country, city, state --------->
          <div class="flex gap-5 mb-5">
            <label for="country" class="flex flex-col gap-2 w-1/3">
              <span>Country</span>
              <select
                id="country"
                v-model="data.country"
                class="p-2 border focus:outline-primary rounded-md"
                placeholder="Please Select your mailing country"
                required
              >
                <option v-for="(country, index) in COUNTRIES" :key="index" :value="country.name">
                  {{ country.name }}
                </option>
              </select>
            </label>

            <!-------------state  -------------->
            <label for="state" class="flex flex-col gap-2 md:w-1/3">
              <span>State</span>
              <select
                id="state"
                v-model="data.state"
                class="p-2 border focus:outline-primary rounded-md"
                placeholder="Please Select"
                required
                :disabled="isEmpty(data.country)"
              >
                <option v-for="(state, index) in states!.states!" :key="index" :value="state.name">
                  {{ state.name }}
                </option>
              </select>
            </label>

            <label for="city" class="flex flex-col gap-2 md:w-1/2">
              <span>City or Town</span>
              <input
                type="text"
                id="city"
                v-model="data.city_town"
                class="p-2 border focus:outline-primary rounded-md"
                placeholder="City [eg. Brooklyn]"
                required
              />
            </label>
          </div>

          <!-----province, zipcode, postalcode --------->
          <div class="flex gap-5 mb-5">
            <label for="province" class="flex flex-col gap-2 w-1/3">
              <span>Province</span>
              <input
                type="text"
                id="province"
                v-model="data.province"
                class="p-2 border focus:outline-primary rounded-md"
                placeholder="Province"
              />
            </label>

            <label for="zip_code" class="flex flex-col gap-2 w-1/2">
              <span>Zip Code</span>
              <input
                type="text"
                id="zip_code"
                v-model="data.zip_code"
                class="p-2 border focus:outline-primary rounded-md"
                placeholder="Zip Code"
              />
            </label>

            <label for="postal_code" class="flex flex-col gap-2 w-1/2">
              <span>Postal Code</span>
              <input
                type="text"
                id="postal_code"
                v-model="data.postal_code"
                class="p-2 border focus:outline-primary rounded-md"
                placeholder="Postal Code"
              />
            </label>
          </div>
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

    <!------------basis tab  ------->
    <div class="" v-else-if="tab === 'uscis'">
      <h2 class="border-b font-bold text-2xl text-primary pb-2">
        USCIS or Consular Official's Certification
      </h2>
      <form @submit.prevent="sendData()" class="py-5 md:w-2/3">
        <span class="block font-bold mb-5"
          >Select all applicable boxes and provide explanations where requested.</span>
          <div class="text-red border-l-2 border-red px-2 mb-3">
            <b
              >NOTE: The USCIS or consular official's certification will be completed after USCIS adjudicates your Form N-565, if it is approved.  You do not need to obtain this signature before filling this application.</b
            >
          </div>

        <div class="flex gap-5 items-start mt-5 mb-5">
            <label for="uscis" class="flex flex-col gap-2 mb-5">
              <span>USCIS or Consular Official's Signature</span>
              <input
                type="text"
                id="uscis"
                v-model="data.uscis_signature"
                class="p-2 border focus:outline-primary rounded-md"
                placeholder="USCIS or Consular Signature"
                required
              />
            </label>

         <label for="date_of_signature" class="flex flex-col gap-2 w-1/2">
          <span>Date of Signature</span>
          <input
            type="date"
            id="date_of_signature"
            v-model="data.date_of_signature"
            class="p-2 border focus:outline-primary rounded-md"
            required
          />
        </label>
        </div>
      </form>
    </div>
  </section>
</template>
