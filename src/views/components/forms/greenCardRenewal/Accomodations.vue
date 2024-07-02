<script lang="ts" setup>
import { ref, type Ref } from 'vue'

import AppButton from '@/components/Button.vue'

const emit = defineEmits(['update-tab', 'next'])
const data: Ref<any> = ref({})

const sendData = function () {
  emit('next', data.value)
}
</script>
<template>
  <section class="">
    <h2 class="border-b font-bold text-2xl text-primary pb-2">Accomodations</h2>
    <form @submit.prevent="sendData()" class="py-5 md:w-2/3">
      <div class="mb-5">
        <span class="block mb-2">
          Are you requesting an accomodation because of your disabilities and/or impairments?
        </span>
        <div class="flex gap-3">
          <label
            for="impirement_yes"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="impirement_yes"
              :value="true"
              name="deportation"
              v-model="data.accommodation_because_disabilities"
              required
            />
            <span>Yes</span>
          </label>

          <label
            for="impirement_no"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="impirement_no"
              :value="false"
              name="deportation"
              v-model="data.accommodation_because_disabilities"
              required
            />
            <span>No</span>
          </label>
        </div>
      </div>

      <div class="mb-5" v-if="data.accommodation_because_disabilities">
        <span class="block mb-2">
        </span>
        <div class="flex gap-3 w-full">
          <label
            for="deaf"
            class="flex items-start w-full gap-2 border-t py-3 px-3 cursor-pointer"
          >
            <input
              type="checkbox"
              id="deaf"
              :value="true"
              v-model="data.deaf"
            />
            <div>
              I am deaf or hard of hearing and request the following accomodation (if you are requesting a sign-language interpreter, indicate for which langauge (for example, American Sign Language))
              <br />
              <textarea
                v-model="data.deaf_more"
                class="p-2 border w-full mt-2 focus:outline-primary rounded-md"
                placeholder="More text"
              />
            </div>
          </label>
        </div>

        <div class="flex gap-3 w-full">
          <label
            for="blind"
            class="flex items-start w-full gap-2 border-t py-3 px-3 cursor-pointer"
          >
            <input
              type="checkbox"
              id="blind"
              :value="true"
              v-model="data.blind"
            />
            <div>
              I am blind or have low vision and request the following accommodation:
              <br />
              <textarea
                v-model="data.blind_more"
                class="p-2 border w-full mt-2 focus:outline-primary rounded-md"
                placeholder="More text"
              />
            </div>
          </label>
        </div>

        <div class="flex gap-3 w-full">
          <label
            for="other"
            class="flex items-start w-full gap-2 border-t py-3 px-3 cursor-pointer"
          >
            <input
              type="checkbox"
              id="other"
              :value="true"
              v-model="data.other"
            />
            <div>
              I have another type of disabililty and/or impairment (Describe the nature of your disablity and/or impairment and the accommodation you are requesting)
              <br />
              <textarea
                v-model="data.other_more"
                class="p-2 border w-full mt-2 focus:outline-primary rounded-md"
                placeholder="More text"
              />
            </div>
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
