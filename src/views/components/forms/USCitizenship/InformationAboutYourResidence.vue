<script lang="ts" setup>
import AppButton from '@/components/Button.vue'
</script>
<template>
  <section>
    <h2 class="border-b font-bold text-2xl text-primary pb-2">Information About Your Residence</h2>
    <form @submit.prevent="sendData()" class="py-5 md:w-2/3">
      
    </form>
  </section>
</template>