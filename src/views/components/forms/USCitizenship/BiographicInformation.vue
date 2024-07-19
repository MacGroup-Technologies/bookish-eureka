<script lang="ts" setup>
import { ref, type Ref } from 'vue'
import { omit } from 'lodash'

import { useUserStore } from '@/stores/userStore';

import AppButton from '@/components/Button.vue'

const { currentForm } = useUserStore()

const emit = defineEmits(['update-tab', 'next'])
const data: Ref<any> = ref({ ...currentForm })

const sendData = function () {
  
  const payload = omit(data.value, ['eye', 'hair'])

  switch (data.value.eye) {
    case 'black':
      payload.eye_color_black = true
      break

    case 'blue':
      payload.eye_color_blue = true
      break

    case 'brown':
      payload.eye_color_brown = true
      break

    case 'gray':
      payload.eye_color_gray = true
      break

    case 'green':
      payload.eye_color_green = true
      break

    case 'hazel':
      payload.eye_color_hazel = true
      break

    case 'maroon':
      payload.eye_color_maroon = true
      break

    case 'pink':
      payload.eye_color_pink = true
      break

    case 'unknown':
      payload.eye_color_unknown = true
      break

    default:
      break
  }

  switch (data.value.hair) {
    case 'black':
      payload.hair_color_black = true
      break

    case 'bald':
      payload.hair_color_bald = true
      break

    case 'brown':
      payload.hair_color_brown = true
      break

    case 'gray':
      payload.hair_color_gray = true
      break

    case 'blonde':
      payload.hair_color_blonde = true
      break

    case 'red':
      payload.hair_color_red = true
      break

    case 'sandy':
      payload.hair_color_sandy = true
      break

    case 'white':
      payload.hair_color_white = true
      break

    case 'unknown':
      payload.hair_color_unknown = true
      break

    default:
      break
  }

  emit('next', payload)
}
</script>
<template>
  <section class="">
    <h2 class="border-b font-bold text-2xl text-primary pb-2">Biographic Information</h2>
    <form @submit.prevent="sendData()" class="py-5 md:w-2/3">
      <div class="text-red border-l-2 border-red px-2 mb-5">
        NOTE: USCIS requires you to complete the categories below to conduct background checks.
      </div>

      <div class="mb-5">
        <span class="block mb-2"> Ethinicity (Select <b>only one</b>) </span>
        <div class="flex gap-3">
          <label
            for="hispanic"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="hispanic"
              name="ethinic"
              v-model="data.ethnicity_hispanic_latino"
              :checked="data.ethnicity_hispanic_latino"
              :value="data.ethnicity_hispanic_latino ? false : true"
              @change="
                data.ethnicity_hispanic_latino
                  ? (data.ethnicity_not_hispanic_latino = false)
                  : (data.ethnicity_not_hispanic_latino = true)
              "
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
              name="ethinic"
              v-model="data.ethnicity_not_hispanic_latino"
              :checked="data.ethnicity_not_hispanic_latino"
              :value="data.ethnicity_not_hispanic_latino ? false : true"
              @change="
                data.ethnicity_not_hispanic_latino
                  ? (data.ethnicity_hispanic_latino = false)
                  : (data.ethnicity_hispanic_latino = true)
              "
              required
            />
            <span>Not Hispanic or Latino</span>
          </label>
        </div>
      </div>

      <div class="mb-5">
        <span class="block mb-2"> Race (Select <b>all applicable</b>) </span>
        <div class="flex flex-wrap gap-3">
          <label
            for="white"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input type="checkbox" id="white" :value="true" v-model="data.ethnicity_white" />
            <span>White</span>
          </label>

          <label
            for="asian"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input type="checkbox" id="asian" :value="true" v-model="data.ethnicity_asian" />
            <span>Asian</span>
          </label>

          <label
            for="black"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input type="checkbox" id="black" :value="true" v-model="data.ethnicity_black" />
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
            <label for="feet" class="flex flex-col gap-2">
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
        <span class="block mb-2"> Eye Color (Select <b>only one</b>) </span>
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
            <input type="radio" id="blue_eye" value="blue" name="eye" v-model="data.eye" required />
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
            <input type="radio" id="gray_eye" value="gray" name="eye" v-model="data.eye" required />
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
            <input type="radio" id="Pink_eye" value="Pink" name="eye" v-model="data.eye" required />
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
        <span class="block mb-2"> Hair Color (Select <b>only one</b>) </span>
        <div class="flex flex-wrap gap-3">
          <label
            for="bald"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input type="radio" id="bald" value="bald" name="hair" v-model="data.hair" required />
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
            <input type="radio" id="sandy" value="sandy" name="hair" v-model="data.hair" required />
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
  </section>
</template>
