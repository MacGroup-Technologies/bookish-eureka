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
        <!-------------Heading  ----------------->
    <h2 class="border-b font-bold text-2xl text-primary pb-2">Change of Gender</h2>
    <!----------linked to part 9 Mr Bolu  ------->
    <div class="text-red border-l-2 border-red px-2 mt-3 mb-3">
      <b>NOTE: After completing this section, go to Part 9.</b>
    </div>

     <!-------------------Form  ------------------------>
     <form @submit.prevent="sendData()" class="py-5 md:w-2/3">
      <span class="block font-bold mb-5">
         My gender officially changed through (select all applicable boxes):
      </span>

      <div class="flex flex-col gap-3 items-start mb-5">
        <!----------- gender change -->
        <!----------gender change court order ---------->
        <label
          for="gender_change_court_order"
          class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
        >
          <input
            type="checkbox"
            id="gender_change_court_order"
            name="gender_change_court_order"
            v-model="data.gender_change_court_order"
            required
          />
          <span>Court Order</span>
        </label>

        <label
          for="us_issued_doc"
          class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
        >
          <input
            type="checkbox"
            id="gender_issued_doc"
            name="gender_issued_doc"
            v-model="data.gender_issued_doc"
            required
          />
          <span>Gender Change Government-Issued Document</span>
        </label>

        <!---- gender change cert from health professional ----->
        <label
          for="certificate_from_health_care"
          class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
        >
          <input
            type="checkbox"
            id="gender_certificate_from_health_care"
            name="gender_certificate_from_health_care"
            v-model="data.gender_certificate_from_health_care"
            required
          />
          <span>Gender Certificate from Licensed Health Care Professional</span>
        </label> 
      </div>

      <div class="text-red border-l-2 border-red px-2 mt-3 mb-3">
      <b>NOTE:  If you selected A, attach a copy of either the original or certified court document.  If you selected B, attach a copy of the document.  If you selected C, attach the certification letter</b>
    </div>
    <span class="block font-bold mb-5">
       Current Gender Designation
    </span>
    <div class="flex gap-3 items-start mb-5">
        <!----------- New Gender-->
        <label
          for="male"
          class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
        >
          <input
            type="radio"
            id="male"
            name="new_gender"
            v-model="data.new_gender"
            required
          />
          <span>Male</span>
        </label>

        <label
          for="female"
          class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
        >
          <input
            type="radio"
            id="female"
            name="new_gender"
            v-model="data.new_gender"
            required
          />
          <span>Female</span>
        </label>
      </div>
      </form>

    </section>
</template>