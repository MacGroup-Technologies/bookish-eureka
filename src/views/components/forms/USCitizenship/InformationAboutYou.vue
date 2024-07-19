<script lang="ts" setup>
import { ref, type Ref } from 'vue'

import { COUNTRIES_AND_STATES as COUNTRIES } from '@/utils/countries_and_state'
import { useUserStore } from '@/stores/userStore'

import AppButton from '@/components/Button.vue'

defineProps<{ tab: string }>()

const { currentForm } = useUserStore()
const emit = defineEmits(['update-tab', 'next'])
const data: Ref<any> = ref({ ...currentForm })

const sendData = function () {
  emit('next', data.value)
}
</script>
<template>
  <section>
    <div class="" v-if="tab === 'info'">
      <h2 class="border-b font-bold text-2xl text-primary pb-2">Information About You</h2>
      <form @submit.prevent="emit('update-tab', 'social-security')" class="py-5 md:w-2/3">
        <div class="">
          <span class="font-semibold block mb-2">Your Current Legal Name</span>
          <label for="family_name" class="flex flex-col gap-2 mb-5">
            <span>Family Name (Last Name)</span>
            <input
              type="text"
              id="family_name"
              v-model="data.family_name"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="Last Name"
              required
            />
          </label>

          <div class="flex items-center gap-3">
            <label for="first_name" class="flex flex-col gap-2 mb-5 w-1/2">
              <span>Given Name (First Name)</span>
              <input
                type="text"
                id="first_name"
                v-model="data.given_name"
                class="p-2 border focus:outline-primary rounded-md"
                placeholder="First Name"
                required
              />
            </label>

            <label for="middle_name" class="flex flex-col gap-2 mb-5 w-1/2">
              <span>Middle Name (If applicable)</span>
              <input
                type="text"
                id="middle_name"
                v-model="data.middle_name"
                class="p-2 border focus:outline-primary rounded-md"
                placeholder="Middle Name"
              />
            </label>
          </div>
        </div>

        <div class="">
          <span class="font-semibold block mb-2">Other Names you have used since birth</span>
          <div class="flex gap-3 items-center">
            <label for="family_name" class="flex flex-col gap-2 mb-5">
              <span>Family Name (Last Name)</span>
              <input
                type="text"
                id="family_name"
                v-model="data.other_name_family_name"
                class="p-2 border focus:outline-primary rounded-md"
                placeholder="Last Name"
              />
            </label>

            <label for="first_name" class="flex flex-col gap-2 mb-5">
              <span>Given Name (First Name)</span>
              <input
                type="text"
                id="first_name"
                v-model="data.other_name_given_name"
                class="p-2 border focus:outline-primary rounded-md"
                placeholder="First Name"
              />
            </label>

            <label for="middle_name" class="flex flex-col gap-2 mb-5">
              <span>Middle Name</span>
              <input
                type="text"
                id="middle_name"
                v-model="data.other_name_middle_name"
                class="p-2 border focus:outline-primary rounded-md"
                placeholder="Middle Name"
              />
            </label>
          </div>
        </div>

        <div class="text-orange-500 border-l-2 border-orange-500 px-2 mb-5">
          <b>Name Change (Optional)</b><br />
          Read the instruction for this item before you decide whether you would like to legally
          change your name
        </div>

        <div class="">
          Would you like to legally change your name?

          <div class="flex gap-3 mt-2">
            <label
              for="true"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="true"
                name="change_name"
                v-model="data.change_name_yes"
                :checked="data.change_name_yes"
                :value="data.change_name_yes ? false : true"
                @change="
                  data.change_name_yes
                    ? (data.change_name_no = false)
                    : (data.change_name_no = true)
                "
                required
              />
              <span>Yes</span>
            </label>
            <label
              for="no"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="no"
                name="change_name"
                :checked="data.change_name_no"
                :value="data.change_name_no ? false : true"
                v-model="data.change_name_no"
                @change="
                  data.change_name_no
                    ? (data.change_name_yes = false)
                    : (data.change_name_yes = true)
                "
                required
              />
              <span>No</span>
            </label>
          </div>
        </div>

        <div class="mt-6" v-if="data.change_name_yes">
          <label for="family_name" class="flex flex-col gap-2 mb-5">
            <span>Family Name (Last Name)</span>
            <input
              type="text"
              id="family_name"
              v-model="data.new_last_name"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="Last Name"
              required
            />
          </label>

          <label for="first_name" class="flex flex-col gap-2 mb-5">
            <span>Given Name (First Name)</span>
            <input
              type="text"
              id="first_name"
              v-model="data.new_first_name"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="First Name"
              required
            />
          </label>

          <label for="middle_name" class="flex flex-col gap-2 mb-5">
            <span>Middle Name (If applicable)</span>
            <input
              type="text"
              id="middle_name"
              v-model="data.new_middle_name"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="Middle Name"
            />
          </label>
        </div>

        <label for="uscis_number" class="flex flex-col gap-2 my-5">
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

        <div class="mb-5">
          <span class="block mb-2">Gender</span>
          <div class="flex gap-3">
            <label
              for="male"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="male"
                name="gender"
                v-model="data.gender_male"
                :checked="data.gender_male"
                :value="data.gender_male ? false : true"
                @change="
                  data.gender_male
                    ? ((data.gender_female = false), (data.gender_others = false))
                    : null
                "
                required
              />
              <span>Male</span>
            </label>

            <label
              for="female"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="female"
                name="gender"
                v-model="data.gender_female"
                :checked="data.gender_female"
                :value="data.gender_female ? false : true"
                @change="
                  data.gender_female
                    ? ((data.gender_male = false), (data.gender_others = false))
                    : null
                "
                required
              />
              <span>Female</span>
            </label>

            <label
              for="other"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="other"
                name="gender"
                v-model="data.gender_others"
                :checked="data.gender_others"
                :value="data.gender_others ? false : true"
                @change="
                  data.gender_others
                    ? ((data.gender_male = false), (data.gender_female = false))
                    : null
                "
                required
              />
              <span>Another Gender Identity</span>
            </label>
          </div>
        </div>

        <div class="flex items-end gap-3">
          <label for="date_of_birth" class="flex flex-col gap-2 mb-5 w-1/2">
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

          <label for="date_of_lawful_residence" class="flex flex-col gap-2 mb-5 w-1/2">
            <span
              >If you are a lawful permanent resident, provide the date you became a lawful
              permanent resident</span
            >
            <input
              type="date"
              id="date_of_lawful_residence"
              v-model="data.date_of_residence"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="MM/DD/YY"
            />
          </label>
        </div>

        <div class="flex gap-3">
          <label for="country" class="flex flex-col gap-2 w-1/2">
            <span>Country of Birth</span>
            <select
              id="country"
              v-model="data.birth_country"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="Please Select your country of birth"
              required
            >
              <option v-for="(country, index) in COUNTRIES" :key="index" :value="country.name">
                {{ country.name }}
              </option>
            </select>
          </label>

          <label for="country_of_citizenship" class="flex flex-col gap-2 w-1/2">
            <span>Country of Citizenship or Nationality</span>
            <select
              id="country_of_citizenship"
              v-model="data.country_of_citizinship_nationality"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="Please Select your country of citizenship"
              required
            >
              <option v-for="(country, index) in COUNTRIES" :key="index" :value="country.name">
                {{ country.name }}
              </option>
            </select>
          </label>
        </div>

        <div class="my-5">
          Was one of your parents (including adoptive parents) a U.S citizen before your 18th
          birthday?

          <div class="flex gap-3 mt-2">
            <label
              for="citizens_true"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="citizens_true"
                name="citizens_of_usa"
                v-model="data.was_parent_us_yes"
                :checked="data.was_parent_us_yes"
                :value="data.was_parent_us_yes ? false : true"
                @change="
                  data.was_parent_us_yes
                    ? (data.was_parent_us_no = false)
                    : (data.was_parent_us_no = true)
                "
                required
              />
              <span>Yes</span>
            </label>

            <label
              for="citizens_false"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="citizens_false"
                name="citizens_of_usa"
                v-model="data.was_parent_us_no"
                :checked="data.was_parent_us_no"
                :value="data.was_parent_us_no ? false : true"
                @change="
                  data.was_parent_us_no
                    ? (data.was_parent_us_yes = false)
                    : (data.was_parent_us_yes = true)
                "
                required
              />
              <span>No</span>
            </label>
          </div>

          <p
            class="mt-3 pl-2 text-emerald-600 border-l-2 border-emerald-500"
            v-if="data.parents_citizens_of_the_usa"
          >
            You may already be a U.S citizen. If you are a U.S citizen, you should not complete this
            form.
          </p>
        </div>

        <div class="my-5">
          Do you have a physical or development disability or mental impairment that prevents you
          from demostrating your knowledge and understanding of the English language or civics
          requirements for naturalization?

          <div class="flex gap-3 mt-2">
            <label
              for="impairment_true"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="impairment_true"
                name="mental_impairement"
                v-model="data.physical_devlopmental_disability_yes"
                :checked="data.physical_devlopmental_disability_yes"
                :value="data.physical_devlopmental_disability_yes ? false : true"
                @change="
                  data.physical_devlopmental_disability_yes
                    ? (data.physical_devlopmental_disability_no = false)
                    : (data.physical_devlopmental_disability_no = true)
                "
                required
              />
              <span>Yes</span>
            </label>

            <label
              for="impairment_false"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="impairment_false"
                name="mental_impairement"
                v-model="data.physical_devlopmental_disability_no"
                :checked="data.physical_devlopmental_disability_no"
                :value="data.physical_devlopmental_disability_no ? false : true"
                @change="
                  data.physical_devlopmental_disability_no
                    ? (data.physical_devlopmental_disability_yes = false)
                    : (data.physical_devlopmental_disability_yes = true)
                "
                required
              />
              <span>No</span>
            </label>
          </div>

          <p
            class="mt-3 pl-2 text-orange-600 border-l-2 border-orange-500"
            v-if="data.physical_devlopmental_disability_yes"
          >
            Please submit a completed <b>Form N-648</b>, Medical Certification for Disability
            Exceptions, when you file your form N-400.
          </p>
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
    <div class="" v-else>
      <h2 class="border-b font-bold text-2xl text-primary pb-2">Social Security Update</h2>
      <form @submit.prevent="sendData()" class="py-5 md:w-2/3">
        <div class="">
          Do you want the Social Security Administration (SSA) to issue you an original or
          replacement Social Security card and update your immigration status with the SSA if and
          when you are naturalized?

          <div class="flex gap-3 mt-2">
            <label
              for="ssa_true"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="ssa_true"
                name="ssa_replacement"
                v-model="data.want_ssn_yes"
                :checked="data.want_ssn_yes"
                :value="data.want_ssn_yes ? false : true"
                @change="data.want_ssn_yes ? (data.want_ssn_no = false) : (data.want_ssn_no = true)"
                required
              />
              <span>Yes</span>
            </label>

            <label
              for="ssa_no"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="ssa_no"
                name="ssa_replacement"
                v-model="data.want_ssn_no"
                :checked="data.want_ssn_no"
                :value="data.want_ssn_no ? false : true"
                @change="
                  data.want_ssn_no ? (data.want_ssn_yes = false) : (data.want_ssn_yes = true)
                "
                required
              />
              <span>No</span>
            </label>
          </div>
        </div>

        <div class="mt-5" v-if="data.want_ssn_yes">
          <label for="a_number" class="flex flex-col gap-2 mb-5">
            <span>Provide your Social Security Number (SSN) <i>if any</i></span>
            <input
              type="number"
              id="a_number"
              v-model="data.ssn"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="9 Character long Social Security Number"
              maxlength="9"
              minlength="9"
            />
          </label>

          <div class="">
            <b>Consent for Disclosure:</b> I authorize disclosure of information from this
            application and USCIS systems to the SSA as required for the purpose of assigning me an
            SSN, issuing me an original or replacement Social Security card, and updating my
            immigration status with the SSA.

            <div class="flex gap-3 mt-2">
              <label
                for="ssa_closure_true"
                class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
              >
                <input
                  type="radio"
                  id="ssa_closure_true"
                  name="ssa_closure"
                  v-model="data.consent_for_disclosure_yes"
                  :checked="data.consent_for_disclosure_yes"
                  :value="data.consent_for_disclosure_yes ? false : true"
                  @change="
                    data.consent_for_disclosure_yes
                      ? (data.consent_for_disclosure_no = false)
                      : (data.consent_for_disclosure_no = true)
                  "
                  required
                />
                <span>Yes</span>
              </label>

              <label
                for="ssa_closure_no"
                class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
              >
                <input
                  type="radio"
                  id="ssa_closure_no"
                  name="ssa_closure"
                  v-model="data.consent_for_disclosure_no"
                  :checked="data.consent_for_disclosure_no"
                  :value="data.consent_for_disclosure_no ? false : true"
                  @change="
                    data.consent_for_disclosure_no
                      ? (data.consent_for_disclosure_yes = false)
                      : (data.consent_for_disclosure_yes = true)
                  "
                  required
                />
                <span>No</span>
              </label>
            </div>
          </div>

          <div class="text-red border-l-2 border-red px-2 mt-5">
            <b>NOTE:</b> You must answer Yes to the above to recieve a card
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
  </section>
</template>
