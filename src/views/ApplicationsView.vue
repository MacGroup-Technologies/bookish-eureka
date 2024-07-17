<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import { computed, watch } from 'vue';

import GreenCardIndex from './components/GreenCardRenewalIndex.vue'
import USCitizenshipView from './components/USCitizenshipView.vue';
import RenewCertificateOfCitizenship from './components/RenewCertificateOfCitizenship.vue';

const { query } = useRoute()
const route = useRoute()
const router = useRouter()

const form = computed(() => {
  switch(query.form) {
    case 'green-card-renewal':
      return GreenCardIndex
    case 'u.s-citizenship':
      return USCitizenshipView;
    case 'renew-certificate-of-citizenship':
      return RenewCertificateOfCitizenship
    default:
      return ''
  }
})

watch(route, () => {
  router.go()
}, { deep: true })
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