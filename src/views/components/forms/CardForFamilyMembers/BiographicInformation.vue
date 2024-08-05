<script lang="ts" setup>
import { computed, ref, type Ref } from 'vue'
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
    <!----------note ------->
    <div class="text-red border-l-2 border-red px-2 mt-3 mb-3">
      <b>NOTE: You are the Petitioner, Your Relative is the Beneficiary.</b>
    </div>

    <!-------------------Form  ------------------------>
    <form @submit.prevent="sendData()" class="py-5 md:w-2/3">
      <span class="block font-bold mb-5"
        >Change of Date of Birth Due To (Select all applicable boxes):</span
      >
      <div class="flex gap-3 items-start mb-5"></div>
    </form>
    </section>
</template>

