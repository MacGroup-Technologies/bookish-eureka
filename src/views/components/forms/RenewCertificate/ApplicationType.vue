<script lang="ts" setup>
import { computed, ref, type Ref } from 'vue'
import { isEmpty } from 'lodash'
import AppButton from '@/components/Button.vue'

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
    <div class="" v-if="tab === 'application'">
      <h2 class="border-b font-bold text-2xl text-primary pb-2">Type of Application</h2>
  <!--------------applicatio tab  --------------->
      <div class="text-red border-l-2 border-red px-2 mt-5 mb-5">
        <b>NOTE:Select only one box</b>
      </div>
      <span class="block font-bold">I am applying for a:</span>

      <form @submit.prevent="emit('add-tabs', 'basis')" class="py-5 md:w-2/3">
        <div class="mt-2 flex gap-3">
          <label
            for="new_certificate_of_citizenship"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="new_certificate_of_citizenship"
              name="application"
              v-model="data.application"
              required
            />
            <span>New Certificate of Citizenship</span>
          </label>

          <label
            for="new_certificate_of_naturalization"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="new_certificate_of_naturalization"
              name="application"
              v-model="data.application"
              required
            />
            <span>New Certificate of Naturalization</span>
          </label>
        </div>

        <div class="mt-5 flex gap-3">
          <label
            for="new_certificate_of_repatriation"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="new_certificate_of_repatriation"
              name="application"
              v-model="data.application"
              required
            />
            <span>New Certificate of Repatriation</span>
          </label>

          <label
            for="new_declaration_of_intention"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="new_declaration_of_intention"
              name="application"
              v-model="data.application"
              required
            />
            <span>New Declaration of Intention</span>
          </label>
        </div>
        <div class="mt-5 flex gap-3">
          <label
            for="special_certificate_of_naturalization"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="special_certificate_of_naturalization"
              name="application"
              v-model="data.application"
              required
            />
            <span>Special Certificate of Naturalization to Obtain Recognition </span>
          </label>
        </div>

        <!-------------btn for application tab ------------>
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

    <!------------basis tab  ------->
    <div class="" v-else-if="tab === 'basis'">
      <h2 class="border-b font-bold text-2xl text-primary pb-2">Basis for My Application</h2>
      <form @submit.prevent="sendData()" class="py-5 md:w-2/3">

      </form>
    </div>
  </section>
</template>
