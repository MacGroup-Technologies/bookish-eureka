<script lang="ts" setup>
import { computed, ref, type Ref } from 'vue'

import AppButton from '@/components/Button.vue'

const emit = defineEmits(['next'])
const data: Ref<any> = ref({})

const sendData = function () {
  emit('next', data.value)
}
</script>

<template>
  <section>
     <!-------------Heading text  ----------------->
     <h2 class="border-b font-bold text-2xl text-primary pb-2">USCIS Error</h2>
     <div class="text-red border-l-2 border-red px-2 mt-3 mb-5">
        <b>NOTE:  After completing this section, go to Part 9.</b>
      </div>

<!-------------------Form  ------------------------>
    <form @submit.prevent="sendData()" class="py-5 md:w-2/3">
        <div class="flex gap-3 items-start mb-5">
        <!----------- typo or clerical error doc -->
        <!----------Name ---------->
        <label
            for="name_typo_error"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer "
          >
            <input type="checkbox"
             id="name_typo_error"
             v-model="data.name_typo_error"
             required />
            <span>Name</span>
          </label>

          <!----------DOB changes  --------->
          <label
            for="dob_typo_error"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer "
          >
            <input type="checkbox"
             id="dob_typo_error"
             v-model="data.dob_typo_error"
             required />
            <span>Date of Birth</span>
          </label>

           <!----------Gender  --------->
           <label
            for="gender_typo_error"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer "
          >
            <input type="checkbox"
             id="gender_typo_error"
             v-model="data.gender_typo_error"
             required />
            <span>Gender</span>
          </label>

           <!----------Other changes  --------->
           <label
            for="other_typo_error"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer "
          >
            <input type="checkbox"
             id="other_typo_error"
             v-model="data.other_typo_error"
             required />
            <span>Other</span>
          </label>
        </div>

         <!-----------explanation for changes  ---------->
         <label
            for="explanation_changes"
            class="font-bold py-1 px-2 cursor-pointer "
          >
          <span class="block">Provide an explanation of what is incorrect on your current certificate or declaration and attach copies of any documents supporting your request.</span>
         </label>
            <textarea
            class="border rounded-md p-3" 
            rows="4"
            cols="63"
            id="explanation_changes"
            v-model="data.explanation_changes"
            required 
             ></textarea>

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
