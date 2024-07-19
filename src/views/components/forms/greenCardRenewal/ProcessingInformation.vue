<script lang="ts" setup>
import { ref, type Ref } from 'vue'
import { useRoute } from 'vue-router'
import { omit } from 'lodash'

import AppButton from '@/components/Button.vue'

defineProps<{
  tab: string
}>()

const route = useRoute()
const emit = defineEmits(['update-tab', 'next'])
const data: Ref<any> = ref({})

const sendData = function () {
  const payload = omit(data.value, ['filed_for_i_407', 'deportation', 'ethinic', 'eye', 'hair'])

  switch (data.value.filed_for_i_407) {
    case 'yes':
      payload.ever_filed_form_abandonment_by_alien_of_status_yes = true
      break

    case 'no':
      payload.ever_filed_form_abandonment_by_alien_of_status_no = true
      break

    default:
      break
  }

  switch (data.value.deportation) {
    case 'yes':
      payload.ever_exclusion_deportation_removal_proceedings_yes = true
      break

    case 'no':
      payload.ever_exclusion_deportation_removal_proceedings_no = true
      break

    default:
      break
  }

  
  switch (data.value.ethinic) {
    case 'latino':
      payload.ethnicity_hispanic_latino = true
      break

    case 'not_latino':
      payload.ethnicity_not_hispanic_latino = true
      break

    default:
      break
  }

  switch (data.value.eye) {
    case 'black':
      payload.eye_color_black = true
      break;

    case 'blue':
      payload.eye_color_blue = true
      break;

    case 'brown':
      payload.eye_color_brown = true
      break;

    case 'gray':
      payload.eye_color_gray = true
      break;

    case 'green':
      payload.eye_color_green = true
      break;

    case 'hazel':
      payload.eye_color_hazel = true
      break;

    case 'maroon':
      payload.eye_color_maroon = true
      break;

    case 'pink':
      payload.eye_color_pink = true
      break;

    case 'unknown':
      payload.eye_color_unknown = true
      break;

    default:
      break
  }

  switch (data.value.hair) {
    case 'black':
      payload.hair_color_black = true
      break;

    case 'bald':
      payload.hair_color_bald = true
      break;

    case 'brown':
      payload.hair_color_brown = true
      break;

    case 'gray':
      payload.hair_color_gray = true
      break;

    case 'blonde':
      payload.hair_color_blonde = true
      break;

    case 'red':
      payload.hair_color_red = true
      break;

    case 'sandy':
      payload.hair_color_sandy = true
      break;

    case 'white':
      payload.hair_color_white = true
      break;

    case 'unknown':
      payload.hair_color_unknown = true
      break;

    default:
      break
  }

  emit('next', payload)
}
</script>

<template>
  <section class="">
    <div class="" v-if="tab === 'processing'">
      <h2 class="border-b font-bold text-2xl text-primary pb-2">Processing Information</h2>
      <form @submit.prevent="emit('update-tab', 'biographic')" class="py-5 md:w-2/3">
        <label for="adjustment_location" class="flex flex-col gap-2 mb-5">
          <span>Location where you applied for an immigration visa or adjustment of status</span>
          <input
            type="text"
            id="adjustment_location"
            v-model="data.immigrant_visa_adjustment_location"
            class="p-2 border focus:outline-primary rounded-md"
            placeholder="Location where you applied for an immigration visa or adjustment of status"
            required
          />
        </label>

        <label for="visa_location" class="flex flex-col gap-2 mb-5">
          <span
            >Location where your immigrant visa was issued or USCIS office where you were granted
            adjustment status</span
          >
          <input
            type="text"
            id="visa_location"
            v-model="data.immigrant_visa_issued_location"
            class="p-2 border focus:outline-primary rounded-md"
            placeholder="Location where your immigrant visa was issued or USCIS office where you were granted"
            required
          />
        </label>

        <div class="text-red border-l-2 border-red px-2 mb-5">
          Complete <b>the below</b>. If you entered the United States with an immigrant visa (If you
          were granted adjustment of status, then proceed
          <a href="#adjustment-status" class="underline">here</a>)
        </div>

        <label for="admission_time" class="flex flex-col gap-2 mb-5">
          <span>Destination in the United States at time of admission</span>
          <input
            type="text"
            id="admission_time"
            v-model="data.us_destination_at_admission"
            class="p-2 border focus:outline-primary rounded-md"
            placeholder="Destination in the United States at time of admission"
            required
          />
        </label>

        <label for="port_of_entry" class="flex flex-col gap-2 mb-5">
          <span
            ><b>Port of Entry where admitted to the United States:</b> City or Town and State</span
          >
          <input
            type="text"
            id="port_of_entry"
            v-model="data.port_of_entry_2"
            class="p-2 border focus:outline-primary rounded-md"
            placeholder="City or Town and State"
            required
          />
        </label>

        <a name="adjustment-status" id="adjustment-status"></a>
        <div
          class="p-2 rounded-sm"
          :class="{ 'bg-primary/5': route.hash === '#adjustment-status' }"
        >
          <div class="mb-5">
            <span class="block mb-2"
              >Have you ever been in exclusion, deportation, or removal proceedings or ordered
              removed from the United States?</span
            >
            <div class="flex gap-3">
              <label
                for="male"
                class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
              >
                <input
                  type="radio"
                  id="male"
                  value="Yes"
                  name="deportation"
                  v-model="data.deportation"
                />
                <span>Yes</span>
              </label>

              <label
                for="female"
                class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
              >
                <input
                  type="radio"
                  id="female"
                  value="No"
                  name="deportation"
                  v-model="data.deportation"
                />
                <span>No</span>
              </label>
            </div>
          </div>

          <div class="mb-5">
            <span class="block mb-2"
              >Since you were granted permanent residence, have you ever filed Form I-407,
              Abandonment by Alien of Status as Lawful Permanent Resident, or otherwise brrn
              determined to have abandoned your status?</span
            >
            <div class="flex gap-3">
              <label
                for="yes"
                class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
              >
                <input
                  type="radio"
                  id="yes"
                  value="Yes"
                  name="i407"
                  v-model="data.filed_for_i_407"
                />
                <span>Yes</span>
              </label>

              <label
                for="no"
                class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
              >
                <input type="radio" id="no" value="No" name="i407" v-model="data.filed_for_i_407" />
                <span>No</span>
              </label>
            </div>
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
    <div class="" v-else-if="tab === 'biographic'">
      <h2 class="border-b font-bold text-2xl text-primary pb-2">Biographic Information</h2>
      <form @submit.prevent="sendData" class="py-5 md:w-2/3">
        <div class="mb-5">
          <span class="block mb-2">
            Ethinicity (Select <b>only one</b>)
          </span>
          <div class="flex gap-3">
            <label
              for="hispanic"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="hispanic"
                value="latino"
                name="ethinic"
                v-model="data.ethinic"
                required
              />
              <span>Hispanic or Latino</span>
            </label>

            <label
              for="not_latino"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="not_latino"
                value="No"
                name="ethinic"
                v-model="data.ethinic"
                required
              />
              <span>Not Hispanic or Latino</span>
            </label>
          </div>
        </div>

        <div class="mb-5">
          <span class="block mb-2">
            Race (Select <b>all applicable</b>)
          </span>
          <div class="flex flex-wrap gap-3">
            <label
              for="white"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="checkbox"
                id="white"
                :value="true"
                v-model="data.ethnicity_white"
              />
              <span>White</span>
            </label>

            <label
              for="asian"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="checkbox"
                id="asian"
                :value="true"
                v-model="data.ethnicity_asian"
              />
              <span>Asian</span>
            </label>

            <label
              for="black"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="checkbox"
                id="black"
                :value="true"
                v-model="data.ethnicity_black"
              />
              <span>Black or African American</span>
            </label>

            <label
              for="indian"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="checkbox"
                id="indian"
                :value="true"
                v-model="data.ethnicity_american_indian"
              />
              <span>American Indian or Alaska Native</span>
            </label>

            <label
              for="hawaiian"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="checkbox"
                id="hawaiian"
                :value="true"
                v-model="data.ethnicity_native_hawaiian"
              />
              <span>Native Hawaiian or Other Pacific Islander</span>
            </label>
          </div>
        </div>

        <div class="flex gap-10">
          <div class="w-1/2">
            <span class="font-bold">Height</span>
            <div class="flex gap-5 mb-5">
              <label for="feet" class="flex flex-col gap-2 w-1/2">
                <span>Feet</span>
                <input
                  type="text"
                  id="feet"
                  v-model="data.height_feet"
                  class="p-2 border focus:outline-primary rounded-md"
                  placeholder="Height in Feet"
                />
              </label>
              
              <label for="inch" class="flex flex-col gap-2 w-1/2">
                <span>Inches</span>
                <input
                  type="text"
                  id="inch"
                  v-model="data.height_inch"
                  class="p-2 border focus:outline-primary rounded-md"
                  placeholder="Height in Inch"
                />
              </label>
            </div>
          </div>

          <div class="w-1/2">
            <span class="font-bold">Weight</span>
            <div class="flex gap-5 mb-5">
              <label for="feet" class="flex flex-col gap-2 ">
                <span>Pound</span>
                <input
                  type="text"
                  id="feet"
                  v-model="data.weight"
                  class="p-2 border focus:outline-primary rounded-md"
                  placeholder="Weight in Pounds"
                />
              </label>
            </div>
          </div>
        </div>

        <div class="mb-5">
          <span class="block mb-2">
            Eye Color (Select <b>only one</b>)
          </span>
          <div class="flex flex-wrap gap-3">
            <label
              for="black_eye"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="black_eye"
                value="black"
                name="eye"
                v-model="data.eye"
                required
              />
              <span>Black</span>
            </label>

            <label
              for="blue_eye"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="blue_eye"
                value="blue"
                name="eye"
                v-model="data.eye"
                required
              />
              <span>Blue</span>
            </label>
            
            <label
              for="brown_eye"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="brown_eye"
                value="brown"
                name="eye"
                v-model="data.eye"
                required
              />
              <span>Brown</span>
            </label>

            <label
              for="gray_eye"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="gray_eye"
                value="gray"
                name="eye"
                v-model="data.eye"
                required
              />
              <span>Grey</span>
            </label>

            <label
              for="green_eye"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="green_eye"
                value="green"
                name="eye"
                v-model="data.eye"
                required
              />
              <span>Green</span>
            </label>

            <label
              for="hazel_eye"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="hazel_eye"
                value="hazel"
                name="eye"
                v-model="data.eye"
                required
              />
              <span>Hazel</span>
            </label>

            <label
              for="Pink_eye"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="Pink_eye"
                value="Pink"
                name="eye"
                v-model="data.eye"
                required
              />
              <span>Pink</span>
            </label>

            <label
              for="maroon_eye"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="maroon_eye"
                value="maroon"
                name="eye"
                v-model="data.eye"
                required
              />
              <span>Maroon</span>
            </label>

            <label
              for="unknown_eye"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="unknown_eye"
                value="unknown"
                name="eye"
                v-model="data.eye"
                required
              />
              <span>Unknown/Other</span>
            </label>
          </div>
        </div>

        <div class="mb-5">
          <span class="block mb-2">
            Hair Color (Select <b>only one</b>)
          </span>
          <div class="flex flex-wrap gap-3">
            <label
              for="bald"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="bald"
                value="bald"
                name="hair"
                v-model="data.hair"
                required
              />
              <span>Bald (No hair)</span>
            </label>

            <label
              for="black_hair"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="black_hair"
                value="black"
                name="hair"
                v-model="data.hair"
                required
              />
              <span>Black</span>
            </label>
            
            <label
              for="brown_hair"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="brown_hair"
                value="brown"
                name="hair"
                v-model="data.hair"
                required
              />
              <span>Brown</span>
            </label>

            <label
              for="gray_hair"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="gray_hair"
                value="gray"
                name="hair"
                v-model="data.hair"
                required
              />
              <span>Grey</span>
            </label>

            <label
              for="blond_hair"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="blond_hair"
                value="blond"
                name="hair"
                v-model="data.hair"
                required
              />
              <span>Blonde</span>
            </label>

            <label
              for="red_hair"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="red_hair"
                value="red"
                name="hair"
                v-model="data.hair"
                required
              />
              <span>Red</span>
            </label>

            <label
              for="sandy"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="sandy"
                value="sandy"
                name="hair"
                v-model="data.hair"
                required
              />
              <span>Sandy</span>
            </label>

            <label
              for="white_hair"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="white_hair"
                value="white"
                name="hair"
                v-model="data.hair"
                required
              />
              <span>White</span>
            </label>

            <label
              for="unknown_eye"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="unknown_eye"
                value="unknown"
                name="eye"
                v-model="data.eye"
                required
              />
              <span>Unknown/Other</span>
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
  </section>
</template>
