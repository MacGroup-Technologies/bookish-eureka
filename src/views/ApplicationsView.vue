<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';

import GreenCardIndex from './components/GreenCardRenewalIndex.vue'

const { query } = useRoute()

const form = computed(() => {
  switch(query.form) {
    case 'green-card-renewal':
      return GreenCardIndex
    default:
      return ''
  }
})
</script>
<template>
  <section class="flex flex-col items-center">
    <div class="md:w-page px-5 py-10" v-if="form">
      <component :is="form" />
    </div>
    <div class="md:page h-[60vh] flex items-center text-2xl" v-else>
      We are working on this page, give us a minute
    </div>
  </section>
</template>