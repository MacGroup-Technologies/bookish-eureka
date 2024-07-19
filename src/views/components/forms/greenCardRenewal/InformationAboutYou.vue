<script lang="ts" setup>
import { ref, type Ref, computed } from 'vue'
import { isEmpty, omit } from 'lodash'

import { COUNTRIES_AND_STATES as COUNTRIES } from '@/utils/countries_and_state'

import AppButton from '@/components/Button.vue'

const props = defineProps<{
  tab: string
}>()

const emit = defineEmits(['update-tab', 'next'])
const data: Ref<any> = ref({})

const states = computed(() => {
  if (props.tab === 'mailing') {
    if (isEmpty(data.value.country)) {
      return []
    } else {
      return COUNTRIES.find((item) => item.name === data.value.country)
    }
  } else {
    if (isEmpty(data.value.physical_country)) {
      return []
    } else {
      return COUNTRIES.find((item) => item.name === data.value.physical_country)
    }
  }
})

const sendData = function () {

  const payload = omit(data.value, ['legally_changed_name', 'gender'])

  switch (data.value.legally_changed_name) {
    case 'yes':
      payload.name_change_yes = true;
      break;
    case 'no':
      payload.name_change_no = true
      break;
    
    case 'n/a':
      payload.name_change_na = true
      break;
  }


  switch (data.value.gender) {
    case 'male':
      payload.gender_male = true;
      break;

    case 'female':
      payload.gender_female = true;
      break;
  }

  emit('next', payload)
}
</script>

<template>
  <section class="">
    <div class="" v-if="tab === 'name'">
      <h2 class="border-b font-bold text-2xl text-primary pb-2">Your Full Name</h2>
      <form @submit.prevent="emit('update-tab', 'mailing')" class="py-5 md:w-2/3">
        <label for="a_number" class="flex flex-col gap-2 mb-5">
          <span>Alien Registration Number (A-Number)</span>
          <input
            type="text"
            id="a_number"
            v-model="data.a_number"
            class="p-2 border focus:outline-primary rounded-md"
            placeholder="9 Character long Alien Number"
            maxlength="9"
            minlength="9"
            required
          />
        </label>

        <label for="uscis_number" class="flex flex-col gap-2 mb-5">
          <span>USCIS Online Account Number (if any)</span>
          <input
            type="number"
            id="uscis_number"
            v-model="data.uscis_number"
            class="p-2 border focus:outline-primary rounded-md"
            placeholder="12 Character long USCIS Online Account Number"
            maxlength="12"
            minlength="12"
          />
        </label>

        <div class="text-red border-l-2 border-red px-2 mb-5">
          <b>NOTE: Your Card will be issued in this name.</b>
        </div>

        <label for="family_name" class="flex flex-col gap-2 mb-5">
          <span>Family Name (Last Name)</span>
          <input
            type="text"
            id="family_name"
            v-model="data.family_name"
            class="p-2 border focus:outline-primary rounded-md"
            placeholder="Family Name [eg. Rodriquez]"
            required
          />
        </label>

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

        <div>
          <span class="block mb-2"
            >Has your name legally changed since the issuance of your Permanent Resident Card?</span
          >
          <div class="flex gap-3">
            <label
              for="name_changed"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="name_changed"
                value="yes"
                v-model="data.legally_changed_name"
                name="changed_name"
                required
              />
              <span>Yes</span>
            </label>

            <label
              for="name_not_changed"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="name_not_changed"
                value="no"
                v-model="data.legally_changed_name"
                name="changed_name"
                required
              />
              <span>No</span>
            </label>

            <label
              for="name_n/a"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input type="radio" id="name_n/a" value="n/a" v-model="data.legally_changed_name"
              name="changed_name"
              required />
              <span>N/A - I have never recieved my previous card</span>
            </label>
          </div>
        </div>

        <div class="mt-5" v-if="data.legally_changed_name === 'yes'" id="5a">
          <b
            >Provide your name exactly as it is printed on your current Permanent Residential
            Card.</b
          >
          <div class="text-red border-l-2 border-red px-2 my-3">
            <b>NOTE: Attach all evidence of your legal name change with this application</b>
          </div>
          <label for="section_5a_family_name" class="flex flex-col gap-2 mb-5">
            <span>Family Name</span>
            <input
              type="text"
              id="section_5a_family_name"
              v-model="data.name_change_family_name"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="Middle Name [eg. Juan]"
            />
          </label>

          <label for="section_5a_given_name" class="flex flex-col gap-2 mb-5">
            <span>Given Name</span>
            <input
              type="text"
              id="section_5a_given_name"
              v-model="data.name_change_given_name"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="Middle Name [eg. Juan]"
            />
          </label>

          <label for="section_5a_middle_name" class="flex flex-col gap-2 mb-5">
            <span>Middle Name</span>
            <input
              type="text"
              id="section_5a_middle_name"
              v-model="data.name_change_middle_name"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="Middle Name [eg. Juan]"
            />
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
    <div class="" v-else-if="tab === 'mailing'">
      <h2 class="border-b font-bold text-2xl text-primary pb-2">Mailing Address</h2>
      <form @submit.prevent="emit('update-tab', 'physical')" class="py-5 md:w-2/3">
        <label for="mailing_name" class="flex flex-col gap-2 mb-5">
          <span>In Care of Name</span>
          <input
            type="text"
            id="mailing_name"
            v-model="data.mailing_name"
            class="p-2 border focus:outline-primary rounded-md"
            placeholder="In Care of Name"
            required
          />
        </label>

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
              v-model="data.apt"
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
              v-model="data.ste"
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
              v-model="data.flr"
              required
            />
            <span>Flr.</span>
          </label>
        </div>

        <div class="flex gap-5 mb-5">
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
        </div>

        <div class="flex gap-5 mb-5">
          <label for="province" class="flex flex-col gap-2 w-1/2">
            <span>Province</span>
            <input
              type="text"
              id="province"
              v-model="data.province"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="Province"
            />
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

        <div class="flex gap-5 mb-5">
          <label for="state" class="flex flex-col gap-2 md:w-1/2">
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

          <label for="country" class="flex flex-col gap-2 w-1/2">
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
    <div class="" v-else-if="tab === 'physical'">
      <h2 class="border-b font-bold text-2xl text-primary pb-2">Physical Address</h2>
      <form @submit.prevent="emit('update-tab', 'additional')" class="py-5 md:w-2/3">
        <div class="text-red border-l-2 border-red px-2 mb-5">
          <b>NOTE: Provide this information only if different than mailing address.</b>
        </div>
        <label for="street_number_and_name" class="flex flex-col gap-2 mb-5">
          <span>Street Number and Name</span>
          <input
            type="text"
            id="street_number_and_name"
            v-model="data.physical_street_name_number"
            class="p-2 border focus:outline-primary rounded-md"
            placeholder="Street Number and Name"
            required
          />
        </label>

        <div class="flex gap-5 mb-5">
          <label for="apt" class="flex flex-col gap-2 w-1/6">
            <span>Apt.</span>
            <input
              type="text"
              id="apt"
              v-model="data.physical_apt"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="02A"
              required
            />
          </label>

          <label for="street" class="flex flex-col gap-2 w-2/6">
            <span>Ste.</span>
            <input
              type="text"
              id="street"
              v-model="data.physical_ste"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="Dover"
              required
            />
          </label>

          <label for="floor" class="flex flex-col gap-2 w-3/6">
            <span>Flr.</span>
            <input
              type="text"
              id="floor"
              v-model="data.physical_flr"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="23"
              required
            />
          </label>
        </div>

        <div class="flex gap-5 mb-5">
          <label for="postal_code" class="flex flex-col gap-2 w-1/2">
            <span>Postal Code</span>
            <input
              type="text"
              id="postal_code"
              v-model="data.physical_postal_code"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="Postal Code"
            />
          </label>

          <label for="zip_code" class="flex flex-col gap-2 w-1/2">
            <span>Zip Code</span>
            <input
              type="text"
              id="zip_code"
              v-model="data.physical_zip_code"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="Zip Code"
            />
          </label>
        </div>

        <div class="flex gap-5 mb-5">
          <label for="province" class="flex flex-col gap-2 w-1/2">
            <span>Province</span>
            <input
              type="text"
              id="province"
              v-model="data.physical_province"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="Province"
            />
          </label>

          <label for="city" class="flex flex-col gap-2 md:w-1/2">
            <span>City or Town</span>
            <input
              type="text"
              id="city"
              v-model="data.physical_city_town"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="City [eg. Brooklyn]"
              required
            />
          </label>
        </div>

        <div class="flex gap-5 mb-5">
          <label for="state" class="flex flex-col gap-2 md:w-1/2">
            <span>State</span>
            <select
              id="state"
              v-model="data.physical_state"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="Please Select"
              required
              :disabled="isEmpty(data.physical_country)"
            >
              <option v-for="(state, index) in states!.states!" :key="index" :value="state.name">
                {{ state.name }}
              </option>
            </select>
          </label>

          <label for="country" class="flex flex-col gap-2 w-1/2">
            <span>Country</span>
            <select
              id="country"
              v-model="data.physical_country"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="Please Select your mailing country"
              required
            >
              <option v-for="(country, index) in COUNTRIES" :key="index" :value="country.name">
                {{ country.name }}
              </option>
            </select>
          </label>
        </div>

        <div class="flex flex-col md:flex-row justify-between gap-5">
          <AppButton
            @click="emit('update-tab', 'additional')"
            mode="button"
            type="outline"
            size="large"
            color="primary"
            class="mt-5 bg-white text-primary border-2 border-primary"
          >
            Use Same Information as Mailing Address
          </AppButton>

          <AppButton
            mode="submit"
            type="solid"
            size="large"
            color="primary"
            class="mt-5 bg-primary text-white"
          >
            Continue
          </AppButton>
        </div>
      </form>
    </div>
    <div class="" v-else-if="tab === 'additional'">
      <h2 class="border-b font-bold text-2xl text-primary pb-2">Additional Information</h2>
      <form @submit.prevent="sendData()" class="py-5 md:w-2/3">
        <div class="mb-5">
          <span class="block mb-2">Gender</span>
          <div class="flex gap-3">
            <label
              for="male"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input type="radio" id="male" value="male" name="gender" v-model="data.gender" required />
              <span>Male</span>
            </label> 

            <label
              for="female"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input type="radio" id="female" value="female" name="gender" v-model="data.gender" required />
              <span>Female</span>
            </label>
          </div>
        </div>

        <label for="date_of_birth" class="flex flex-col gap-2 mb-5">
          <span>Date of Birth</span>
          <input
            type="date"
            id="date_of_birth"
            v-model="data.dob"
            class="p-2 border focus:outline-primary rounded-md"
            placeholder="MM/DD/YY"
            required
          />
        </label>

        <div class="flex gap-5 mb-5">
          <label for="birth_city" class="flex flex-col gap-2 w-1/2">
            <span>City/Town/Village of Birth</span>
            <input
              type="text"
              id="birth_city"
              v-model="data.birth_city_town"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="City/Town/Village of Birth"
              required
            />
          </label>

          <label for="country_of_birth" class="flex flex-col gap-2 w-1/2">
            <span>Country of Birth</span>
            <select
              id="country_of_birth"
              v-model="data.birth_country"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="Please Select your country of Birth"
              required
            >
              <option v-for="(country, index) in COUNTRIES" :key="index" :value="country.name">
                {{ country.name }}
              </option>
            </select>
          </label>
        </div>
        
        <h3 class="font-semibold">Mother's Name</h3>
        <label for="mother_first_name" class="flex flex-col gap-2 mb-5">
          <span>Given Name (First Name)</span>
          <input
            type="text"
            id="mother_first_name"
            v-model="data.mother_first_name"
            class="p-2 border focus:outline-primary rounded-md"
            placeholder="Mother's First Name"
            required
          />
        </label>

        <h3 class="font-semibold">Father's Name</h3>
        <label for="father_first_name" class="flex flex-col gap-2 mb-5">
          <span>Given Name (First Name)</span>
          <input
            type="text"
            id="father_first_name"
            v-model="data.father_first_name"
            class="p-2 border focus:outline-primary rounded-md"
            placeholder="Father's First Name"
            required
          />
        </label>

        <div class="flex gap-5 mb-5">
          <label for="class_of_admission" class="flex flex-col gap-2 w-1/2">
            <span>Class of Admission</span>
            <input
              type="text"
              id="class_of_admission"
              v-model="data.class_of_admission"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="Class of Admission"
              required
            />
          </label>

          <label for="date_of_admission" class="flex flex-col gap-2 w-1/2">
            <span>Date of Admission</span>
            <input
              type="date"
              id="date_of_admission"
              v-model="data.date_of_admission"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="Date of Admission"
              required
            />
          </label>
        </div>

        <label for="ssn" class="flex flex-col gap-2">
          <span>US. Social Security Number (if any)</span>
          <input
            type="text"
            id="ssn"
            v-model="data.ssn"
            class="p-2 border focus:outline-primary rounded-md"
            placeholder="Social Security Number (if any)"
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
  </section>
</template>
