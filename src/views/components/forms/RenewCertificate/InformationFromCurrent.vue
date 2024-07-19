<script lang="ts" setup>
import { ref, type Ref } from 'vue'

import { COUNTRIES_AND_STATES as COUNTRIES } from '@/utils/countries_and_state'
import AppButton from '@/components/Button.vue'

const emit = defineEmits(['next'])
const data: Ref<any> = ref({})

const sendData = function () {
  emit('next', data.value)
}
</script>

<template>
  <section>
    <!------------heading text  -------->
    <h2 class="border-b font-bold text-2xl text-primary pb-2">
      Information From Current Certificate or Declaration
    </h2>

    <!------------------------------ FORM  ------------------------>
    <form @submit.prevent="sendData()" class="py-5 md:w-2/3">
      <div class="text-red border-l-2 border-red px-2 mb-5">
        <b
          >NOTE: Provide your full name exactly as it is printed on the certificate or
          declaration.</b
        >
      </div>

      <h2 class="font-bold mb-2">Your Full Name</h2>
      <!---------------Lastname -------------------------->
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

      <div class="flex gap-5 items-end mb-5">
        <!----------------------------------DOB --------------------->

        <label for="date_of_birth" class="flex flex-col gap-2 w-1/2">
          <span>Date of Birth on Certificate or Declaration</span>
          <input
            type="date"
            id="date_of_birth"
            v-model="data.dob"
            class="p-2 border focus:outline-primary rounded-md"
            required
          />
        </label>

        <!--------------------------Countries  ------------------------------>
        <label for="country" class="flex flex-col gap-2 w-1/2">
          <span>Country of Former Citizenship or Nationality</span>
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

      <div class="flex gap-5 items-end mb-5">
        <!------------cert and declaration number-------------->

        <label for="d_number" class="flex flex-col gap-2 w-1/2">
          <span>Certificate or Declaration Number</span>
          <input
            type="text"
            id="d_number"
            v-model="data.declaration"
            class="p-2 border focus:outline-primary rounded-md"
            placeholder="Certificate or Declaration Number"
            required
          />
        </label>

        <!-------------------------A-number  --------------->
        <label for="a_number" class="flex flex-col gap-2 w-1/2">
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
      </div>

      <h3 class="font-bold text-red border-l-2 border-red px-2 mb-5">
        NOTE: Provide information about who issued your last certificate or declaration along with
        the date it was issued.
      </h3>

      <h2 class="font-bold pb-2">Certificate or Declaration Issuance</h2>

      <label for="uscis_number" class="flex flex-col gap-2 mb-5">
        <span>U.S. Citizenship and Immigration Services (USCIS) Office or Name of Court</span>
        <input
          type="text"
          id="uscis_number"
          v-model="data.uscis_number"
          class="p-2 border focus:outline-primary rounded-md"
          placeholder="U.S. Citizenship and Immigration Services (USCIS) Office"
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
  </section>
</template>
