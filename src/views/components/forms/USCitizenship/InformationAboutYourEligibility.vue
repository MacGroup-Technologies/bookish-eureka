<script lang="ts" setup>
import { ref, type Ref } from 'vue'
import { isEmpty } from 'lodash';
import { useUserStore } from '@/stores/userStore';

import AppButton from '@/components/Button.vue'

const { currentForm }  = useUserStore()
const emit = defineEmits(['next'])
const data: Ref<any> = ref({ ...currentForm })

const sendData = function () {
  if (!isEmpty(data.value.other_reasons_txt)) {
    data.value.other_reasons = true
  }
  emit('next', data.value)
}
</script>
<template>
  <div class="">
    <h2 class="border-b font-bold text-2xl text-primary pb-2">
      Information About Your Eligibility
    </h2>

    <div class="text-red border-l-2 border-red px-2 mt-5">
      NOTE: If your parent (including legal adoptive parent) is a U.S. citizen by birth, or was
      naturalized before you reached your 18th birthday, you may not need to file Form N-400 as you
      may already be a U.S. citizen. Before you file this application, please visit the
      <a href="www.uscis.gov/N-600" target="_blank" class="text-primary underline">USCIS website</a>
      for Form N-600, Application for Certificate of Citizenship.
    </div>

    <form @submit.prevent="sendData" class="py-5 md:w-2/3">
      <label for="a_number" class="flex flex-col gap-2 mb-5">
        <span>Enter Your 9 Digit A-Number</span>
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

      <div>
        <span class="block mb-2"> Reason for Filing </span>

        <div class="flex flex-col gap-3">
          <label
            for="general_provision"
            class="flex items-center gap-2 border p-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="general_provision"
              :value="true"
              name="reason"
              v-model="data.general_provision"
            />
            <span> General Provision </span>
          </label>

          <label
            for="spouse_of_us_citizen"
            class="flex items-center gap-2 border p-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="spouse_of_us_citizen"
              :value="true"
              name="reason"
              v-model="data.spouse_of_us_citizen"
              required
            />
            <span> Spouse of U.S Citizens </span>
          </label>

          <label for="vawa" class="flex items-center gap-2 border p-3 rounded-md cursor-pointer">
            <input
              type="radio"
              id="vawa"
              :value="true"
              name="reason"
              v-model="data.vawa"
              required
            />
            <span>
              Spouse of U.S Citizens
              <i
                >Eligibility for the Spouse, Former Spouse, or Child of a U.S Citizen under the
                Violence against Women Act (VAWA)</i
              >
            </span>
          </label>

          <label
            for="spouse_of_us_citizen_outside_us"
            class="flex items-center gap-2 border p-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="spouse_of_us_citizen_outside_us"
              :value="true"
              name="reason"
              v-model="data.spouse_of_us_citizen_outside_us"
              required
            />
            <span> Spouse of U.S Citizen in Qualified Employment Outside the United States. </span>
          </label>

          <div class="" v-if="data.spouse_of_us_citizen_outside_us">
            If your residential address is outside of the United States and you are filing under
            Immigration and Nationality Act (INA) section 319(b), select the USICS field office
            where you would like to have your naturalization interview. You can find a USCIS field
            office
            <a href="https://uscis.gov/field-offices" target="_blank" class="text-primary underline"
              >here</a
            >.

            <label for="spouse_of_us_citizen_outside_us_txt" class="flex flex-col gap-2 mt-5">
              <input
                type="text"
                id="spouse_of_us_citizen_outside_us_txt"
                v-model="data.spouse_of_us_citizen_outside_us_txt"
                class="p-2 border focus:outline-primary rounded-md"
              />
            </label>
          </div>

          <label
            for="military_service"
            class="flex items-center gap-2 border p-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="military_service"
              :value="true"
              name="reason"
              v-model="data.military_service"
              required
            />
            <span> Military Service During Period of Hostilities </span>
          </label>

          <label
            for="one_year_honorable_minister"
            class="flex items-center gap-2 border p-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="one_year_honorable_minister"
              :value="true"
              name="reason"
              v-model="data.one_year_honorable_minister"
              required
            />
            <span> At Least One Year of Honorable Military Service at Any Time </span>
          </label>

          <label for="other_reasons_txt" class="flex items-center gap-2 mt-5">
            <span>Other Reasons for Filling Not Listed Above</span>
            <input
              type="text"
              id="other_reasons_txt"
              v-model="data.other_reasons_txt"
              class="p-2 border focus:outline-primary rounded-md w-full"
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
</template>
