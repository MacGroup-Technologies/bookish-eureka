<script lang="ts" setup>
import { computed, ref, type Ref } from 'vue'
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
</script>

<template>
  <section>
    <div class="" v-if="tab === 'petitioner'">
      <h2 class="border-b font-bold text-2xl text-primary pb-2">
        Information About You (Petitioner)
      </h2>
      <form @submit.prevent="emit('add-tabs', 'fullname')" class="py-5 md:w-2/3">
        <div class="mt-2 flex flex-col gap-3">
          <!-------------------------A-number  --------------->
          <label for="a_number" class="flex flex-col gap-2 mb-5">
            <span>Alien Registration Number (A-Number)(if any)</span>
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
              type="text"
              id="uscis_number"
              v-model="data.uscis_number"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="USCIS Online Account Number"
            />
          </label>

          <label for="sss_number" class="flex flex-col gap-2 mb-5">
            <span>U.S. Social Security Number (if any)</span>
            <input
              type="text"
              id="sss_number"
              v-model="data.sss_number"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="U.S. Social Security Number"
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

    <!-----------Fullname tab  ---------->
    <div class="" v-else-if="tab === 'fullname'">
      <h2 class="border-b font-bold text-2xl text-primary pb-2">Your Fullname</h2>
      <form @submit.prevent="emit('add-tabs', 'othernames')" class="py-5 md:w-2/3">
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

     <!-----------Other names tab  ---------->
     <div class="" v-else-if="tab === 'othernames'">
      <h2 class="border-b font-bold text-2xl text-primary pb-2">Other Names Used (if any)</h2>
      <form @submit.prevent="emit('add-tabs', 'otherinfo')" class="py-5 md:w-2/3">
        <label for="otherfamily_name" class="flex flex-col gap-2 mb-5">
          <span>Family Name (Last Name)</span>
          <input
            type="text"
            id="otherfamily_name"
            v-model="data.otherfamily_name"
            class="p-2 border focus:outline-primary rounded-md"
            placeholder="Family Name [eg. Rodriquez]"
            required
          />
        </label>

        <label for="othergiven_name" class="flex flex-col gap-2 mb-5">
          <span>Given Name (First Name)</span>
          <input
            type="text"
            id="othergiven_name"
            v-model="data.othergiven_name"
            class="p-2 border focus:outline-primary rounded-md"
            placeholder="Given Name [eg. Pedro]"
            required
          />
        </label>

        <label for="othermiddle_name" class="flex flex-col gap-2 mb-5">
          <span>Middle Name</span>
          <input
            type="text"
            id="othermiddle_name"
            v-model="data.othermiddle_name"
            class="p-2 border focus:outline-primary rounded-md"
            placeholder="Middle Name [eg. Juan]"
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

     <!-----------Other information tab  ---------->
     <div class="" v-else-if="tab === 'otherinfo'">
      <h2 class="border-b font-bold text-2xl text-primary pb-2">Other Information</h2>
      <form @submit.prevent="emit('add-tabs', 'mailing')" class="py-5 md:w-2/3">
        <label for="city" class="flex flex-col gap-2 mb-5 md:w-1/2">
            <span>City/Town/Village of Birth</span>
            <input
              type="text"
              id="city"
              v-model="data.city_town"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="City [eg. Brooklyn]"
              required
            />
          </label>

          <label for="country" class="flex flex-col gap-2 mb-5 w-1/2">
            <span>Country of Birth</span>
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

        <span class="block mb-5">Sex</span>
        <div class="flex gap-3">
            <label
              for="male"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input type="radio" id="male" value="male" name="sex" v-model="data.sex" required />
              <span>Male</span>
            </label> 

            <label
              for="female"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input type="radio" id="female" value="female" name="sex" v-model="data.sex" required />
              <span>Female</span>
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

     <!-----------Mailing address tab  ---------->
     <div class="" v-else-if="tab === 'mailing'">
      <h2 class="border-b font-bold text-2xl text-primary pb-2">Mailing Address</h2>
      <form @submit.prevent="emit('add-tabs', 'address')" class="py-5 md:w-2/3">
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
