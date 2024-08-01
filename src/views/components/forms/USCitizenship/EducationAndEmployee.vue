<script lang="ts" setup>
import { ref, type Ref } from 'vue'

import { COUNTRIES_AND_STATES as COUNTRIES } from '@/utils/countries_and_state'
import { useUserStore } from '@/stores/userStore'

import AppButton from '@/components/Button.vue'

defineProps<{ tab: string }>()

const { currentForm } = useUserStore()
const emit = defineEmits(['next'])
const data: Ref<any> = ref({ ...currentForm })

const sendData = function () {
  emit('next', data.value)
}
</script>
<template>
  <section class="">
    <h2 class="border-b font-bold text-2xl text-primary pb-2">
      Information About Your Employment And Schools You Attended
    </h2>
    <p class="mt-3 pl-2 text-red border-l-2 border-red">
      Provide information for the complete time period for all employment, including foreign
      government employment such as military, police, and intelligence services.
    </p>
    <p class="mt-3 pl-2 text-orange-600 border-l-2 border-orange-500">
      Begin by providing information about your most recent or current employment, studies, or
      unemployment. Provide the locations and dates where you worked, were self-employed, were
      unemployed, or have studied. If you worked for yourself and not for a specific employer, type
      or print “self-employed” for the employer name. If you were unemployed, type or print
      “unemployed.” If you are retired, type or print “retired.”
    </p>
    <form @submit.prevent="sendData()" class="py-5 md:w-2/3">
      <div class="border-b mb-5">
        <h3 class="font-semibold mb-2">Employee or School</h3>

        <label for="employ_school_name" class="flex flex-col gap-2 mb-5">
          <span>Name</span>
          <input
            type="text"
            id="employ_school_name"
            v-model="data.employ_school_name"
            class="p-2 border focus:outline-primary rounded-md"
            placeholder="Name of Employee or School"
          />
        </label>

        <div class="flex gap-5 items-end mb-5">
          <label for="employ_school_city" class="flex flex-col gap-2 w-1/2">
            <span>City/Town</span>
            <input
              type="text"
              id="employ_school_city"
              v-model="data.employ_school_city"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="Brooklyn"
            />
          </label>
          <label for="employ_school_zip" class="flex flex-col gap-2 w-1/2">
            <span>Zip Code/Postal Code</span>
            <input
              type="text"
              id="employ_school_zip"
              v-model="data.employ_school_zip"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="Zipcode of Employee or School"
            />
          </label>
        </div>

        <div class="flex gap-5 items-end mb-5">
          <label for="employ_school_state" class="flex flex-col gap-2 w-1/2">
            <span>State</span>
            <input
              type="text"
              id="employ_school_state"
              v-model="data.employ_school_state"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="New York"
            />
          </label>
          <label for="country" class="flex flex-col gap-2 w-1/2">
            <span>Country</span>
            <select
              id="country"
              v-model="data.employ_school_country"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="Please Select your country of birth"
            >
              <option v-for="(country, index) in COUNTRIES" :key="index" :value="country.name">
                {{ country.name }}
              </option>
            </select>
          </label>
        </div>

        <div class="flex gap-5 items-end mb-5">
          <label for="employ_school_start" class="flex flex-col gap-2 w-1/2">
            <span>From</span>
            <input
              type="date"
              id="employ_school_start"
              v-model="data.employ_school_start"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="New York"
            />
          </label>
          <label for="employ_school_end" class="flex flex-col gap-2 w-1/2">
            <span>To</span>
            <input
              type="text"
              id="employ_school_end"
              value="PRESENT"
              class="p-2 border focus:outline-primary rounded-md"
              disabled
            />
          </label>
        </div>

        <label for="employ_school_occupation" class="flex flex-col gap-2 mb-5">
          <span>Occupation or Field of Study</span>
          <input
            type="text"
            id="employ_school_occupation"
            v-model="data.employ_school_occupation"
            class="p-2 border focus:outline-primary rounded-md"
            placeholder="Occupation or Field of Study"
          />
        </label>
      </div>

      <div class="border-b mb-5">
        <h3 class="font-semibold mb-2">Employee or School</h3>

        <label for="employ_school_name2" class="flex flex-col gap-2 mb-5">
          <span>Name</span>
          <input
            type="text"
            id="employ_school_name2"
            v-model="data.employ_school_name2"
            class="p-2 border focus:outline-primary rounded-md"
            placeholder="Name of Employee or School"
          />
        </label>

        <div class="flex gap-5 items-end mb-5">
          <label for="employ_school_city2" class="flex flex-col gap-2 w-1/2">
            <span>City/Town</span>
            <input
              type="text"
              id="employ_school_city2"
              v-model="data.employ_school_city2"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="Brooklyn"
            />
          </label>
          <label for="employ_school_zip2" class="flex flex-col gap-2 w-1/2">
            <span>Zip Code/Postal Code</span>
            <input
              type="text"
              id="employ_school_zip2"
              v-model="data.employ_school_zip2"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="Zipcode of Employee or School"
            />
          </label>
        </div>

        <div class="flex gap-5 items-end mb-5">
          <label for="employ_school_state2" class="flex flex-col gap-2 w-1/2">
            <span>State</span>
            <input
              type="text"
              id="employ_school_state2"
              v-model="data.employ_school_state2"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="New York"
            />
          </label>
          <label for="country2" class="flex flex-col gap-2 w-1/2">
            <span>Country</span>
            <select
              id="country2"
              v-model="data.employ_school_country2"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="Please Select your country of birth"
            >
              <option v-for="(country, index) in COUNTRIES" :key="index" :value="country.name">
                {{ country.name }}
              </option>
            </select>
          </label>
        </div>

        <div class="flex gap-5 items-end mb-5">
          <label for="employ_school_start2" class="flex flex-col gap-2 w-1/2">
            <span>From</span>
            <input
              type="date"
              id="employ_school_start2"
              v-model="data.employ_school_start2"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="New York"
            />
          </label>
          <label for="employ_school_end2" class="flex flex-col gap-2 w-1/2">
            <span>To</span>
            <input
              type="date"
              id="employ_school_end2"
              v-model="data.employ_school_end2"
              class="p-2 border focus:outline-primary rounded-md"
            />
          </label>
        </div>

        <label for="employ_school_occupation2" class="flex flex-col gap-2 mb-5">
          <span>Occupation or Field of Study</span>
          <input
            type="text"
            id="employ_school_occupation2"
            v-model="data.employ_school_occupation2"
            class="p-2 border focus:outline-primary rounded-md"
            placeholder="Occupation or Field of Study"
          />
        </label>
      </div>

      <div class="border-b mb-5">
        <h3 class="font-semibold mb-2">Employee or School</h3>

        <label for="employ_school_name3" class="flex flex-col gap-2 mb-5">
          <span>Name</span>
          <input
            type="text"
            id="employ_school_name3"
            v-model="data.employ_school_name3"
            class="p-2 border focus:outline-primary rounded-md"
            placeholder="Name of Employee or School"
          />
        </label>

        <div class="flex gap-5 items-end mb-5">
          <label for="employ_school_city3" class="flex flex-col gap-2 w-1/2">
            <span>City/Town</span>
            <input
              type="text"
              id="employ_school_city3"
              v-model="data.employ_school_city3"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="Brooklyn"
            />
          </label>
          <label for="employ_school_zip3" class="flex flex-col gap-2 w-1/2">
            <span>Zip Code/Postal Code</span>
            <input
              type="text"
              id="employ_school_zip3"
              v-model="data.employ_school_zip3"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="Zipcode of Employee or School"
            />
          </label>
        </div>

        <div class="flex gap-5 items-end mb-5">
          <label for="employ_school_state3" class="flex flex-col gap-2 w-1/2">
            <span>State</span>
            <input
              type="text"
              id="employ_school_state3"
              v-model="data.employ_school_state3"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="New York"
            />
          </label>
          <label for="country3" class="flex flex-col gap-2 w-1/2">
            <span>Country</span>
            <select
              id="country3"
              v-model="data.employ_school_country3"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="Please Select your country of birth"
            >
              <option v-for="(country, index) in COUNTRIES" :key="index" :value="country.name">
                {{ country.name }}
              </option>
            </select>
          </label>
        </div>

        <div class="flex gap-5 items-end mb-5">
          <label for="employ_school_start3" class="flex flex-col gap-2 w-1/2">
            <span>From</span>
            <input
              type="date"
              id="employ_school_start3"
              v-model="data.employ_school_start3"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="New York"
            />
          </label>
          <label for="employ_school_end3" class="flex flex-col gap-2 w-1/2">
            <span>To</span>
            <input
              type="date"
              id="employ_school_end3"
              v-model="data.employ_school_end3"
              class="p-2 border focus:outline-primary rounded-md"
            />
          </label>
        </div>

        <label for="employ_school_occupation3" class="flex flex-col gap-2 mb-5">
          <span>Occupation or Field of Study</span>
          <input
            type="text"
            id="employ_school_occupation3"
            v-model="data.employ_school_occupation3"
            class="p-2 border focus:outline-primary rounded-md"
            placeholder="Occupation or Field of Study"
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
  </section>
</template>
