<script lang="ts" setup>
import { ref, type Ref } from 'vue'

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
    <h2 class="border-b font-bold text-2xl text-primary pb-2">Time Outside The United States</h2>
    <p class="mt-3 pl-2 text-red border-l-2 border-red">
      Do not include day trips (where the entire trip was completed within 24 hours) in the table.
      If you have taken any trips outside the United States that lasted more than 6 months, see the
      Required Evidence - Continuous Residence section of the Instructions for evidence you should
      provide.
    </p>
    <form @submit.prevent="sendData()" class="py-5 md:w-2/3">
      <div class="pb-5 mb-5 border-b">
        <div class="flex gap-5 items-end mb-5">
          <label for="time_outside_us_left" class="flex flex-col gap-2 w-1/2">
            <span>Date You left the United States</span>
            <input
              type="date"
              id="time_outside_us_left"
              v-model="data.time_outside_us_left"
              class="p-2 border focus:outline-primary rounded-md"
            />
          </label>
          <label for="time_outside_us_returned" class="flex flex-col gap-2 w-1/2">
            <span>Date You returned to the United States</span>
            <input
              type="date"
              id="time_outside_us_returned"
              v-model="data.time_outside_us_returned"
              class="p-2 border focus:outline-primary rounded-md"
            />
          </label>
        </div>

        <label for="time_outside_us_country" class="flex flex-col gap-2">
          <span>Countries to which you travelled</span>
          <textarea
            type="text"
            id="time_outside_us_country"
            v-model="data.time_outside_us_country"
            class="p-2 border focus:outline-primary rounded-md"
            placeholder="Countries to which you travelled"
          ></textarea>
        </label>
      </div>

      <div class="pb-5 mb-5 border-b">
        <div class="flex gap-5 items-end mb-5">
          <label for="time_outside_us_left2" class="flex flex-col gap-2 w-1/2">
            <span>Date You left the United States</span>
            <input
              type="date"
              id="time_outside_us_left2"
              v-model="data.time_outside_us_left2"
              class="p-2 border focus:outline-primary rounded-md"
            />
          </label>
          <label for="time_outside_us_returned2" class="flex flex-col gap-2 w-1/2">
            <span>Date You returned to the United States</span>
            <input
              type="date"
              id="time_outside_us_returned2"
              v-model="data.time_outside_us_returned2"
              class="p-2 border focus:outline-primary rounded-md"
            />
          </label>
        </div>

        <label for="time_outside_us_country2" class="flex flex-col gap-2">
          <span>Countries to which you travelled</span>
          <textarea
            type="text"
            id="time_outside_us_country2"
            v-model="data.time_outside_us_country2"
            class="p-2 border focus:outline-primary rounded-md"
            placeholder="Countries to which you travelled"
          ></textarea>
        </label>
      </div>

      <div class="pb-5 mb-5 border-b">
        <div class="flex gap-5 items-end mb-5">
          <label for="time_outside_us_left3" class="flex flex-col gap-2 w-1/2">
            <span>Date You left the United States</span>
            <input
              type="date"
              id="time_outside_us_left3"
              v-model="data.time_outside_us_left3"
              class="p-2 border focus:outline-primary rounded-md"
            />
          </label>
          <label for="time_outside_us_returned3" class="flex flex-col gap-2 w-1/2">
            <span>Date You returned to the United States</span>
            <input
              type="date"
              id="time_outside_us_returned3"
              v-model="data.time_outside_us_returned3"
              class="p-2 border focus:outline-primary rounded-md"
            />
          </label>
        </div>

        <label for="time_outside_us_country3" class="flex flex-col gap-2">
          <span>Countries to which you travelled</span>
          <textarea
            type="text"
            id="time_outside_us_country3"
            v-model="data.time_outside_us_country3"
            class="p-2 border focus:outline-primary rounded-md"
            placeholder="Countries to which you travelled"
          ></textarea>
        </label>
      </div>

      <div class="pb-5 mb-5 border-b">
        <div class="flex gap-5 items-end mb-5">
          <label for="time_outside_us_left4" class="flex flex-col gap-2 w-1/2">
            <span>Date You left the United States</span>
            <input
              type="date"
              id="time_outside_us_left4"
              v-model="data.time_outside_us_left4"
              class="p-2 border focus:outline-primary rounded-md"
            />
          </label>
          <label for="time_outside_us_returned4" class="flex flex-col gap-2 w-1/2">
            <span>Date You returned to the United States</span>
            <input
              type="date"
              id="time_outside_us_returned4"
              v-model="data.time_outside_us_returned4"
              class="p-2 border focus:outline-primary rounded-md"
            />
          </label>
        </div>

        <label for="time_outside_us_country4" class="flex flex-col gap-2">
          <span>Countries to which you travelled</span>
          <textarea
            type="text"
            id="time_outside_us_country4"
            v-model="data.time_outside_us_country4"
            class="p-2 border focus:outline-primary rounded-md"
            placeholder="Countries to which you travelled"
          ></textarea>
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
