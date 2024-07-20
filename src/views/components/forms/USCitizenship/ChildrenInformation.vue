<script lang="ts" setup>
import { ref, type Ref } from 'vue'
import { useUserStore } from '@/stores/userStore'

import AppButton from '@/components/Button.vue'

const { currentForm } = useUserStore()
const emit = defineEmits(['next'])
const data: Ref<any> = ref({ ...currentForm })

const sendData = function () {
  emit('next', data.value)
}
</script>
<template>
  <section>
    <h2 class="border-b font-bold text-2xl text-primary pb-2">Information About Your Children</h2>
    <form @submit.prevent="sendData()" class="py-5 md:w-2/3">
      <label for="children_under_18" class="flex flex-col gap-2 mb-5">
        <span class="block mb-2">Indicate your number of children under 18 years of age.</span>
        <input
          type="number"
          id="children_under_18"
          v-model="data.children_under_18"
          class="p-2 border focus:outline-primary rounded-md"
          placeholder="number of children under 18 years of age"
          required
        />
      </label>
    </form>
  </section>
</template>
