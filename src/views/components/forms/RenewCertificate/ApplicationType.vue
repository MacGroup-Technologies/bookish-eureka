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
    <div class="" v-if="tab === 'application'">
      <h2 class="border-b font-bold text-2xl text-primary pb-2">Type of Application</h2>
  <!--------------application tab  --------------->
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
        <!----------- this section is linked to part E  ----------->
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
        <span class="block font-bold mb-5">Select all applicable boxes and provide explanations where requested.</span>

        <div class="flex flex-col gap-3 items-start mb-5">
        <!----------- stolen certificate is linked to part 9 -->
        <label
            for="stolen_certificate"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer "
          >
            <input type="checkbox"
             id="stolen_certificate"
             v-model="data.stolen_certificate"
             required />
            <span>My Certificate or Declaration was Lost, Stolen, or Destroyed</span>
          </label>
          <!-----------explanation for stolen certificate   ------------>
          <label
            for="explanation_stolen_certificate"
            class="font-bold py-1 px-3 cursor-pointer "
          >
          <span>Provide an explanation of when, where, and how this happened.</span>
         </label>
            <textarea
            class="border rounded-md p-3" 
            rows="4"
            cols="58"
            id="explanation_stolen_certificate"
            v-model="data.explanation_stolen_certificate"
             required 
             ></textarea>
            
        <!---------Mutilated certificate or declaration  -------------->
        <!--------- This section is linked to part 9 Mr. Bolu  -------------->
          <label
            for="mutilated_certificate"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer "
          >
            <input type="checkbox"
             id="mutilated_certificate"
             v-model="data.mutilated_certificate"
             required />
            <span>Mutilated Certificate or Declaration</span>
          </label>
<!---------------typo or clerical error  ------------->
<!------------this is linked to part 4  ---------------->
          <label
            for="typo_error"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer "
          >
            <input type="checkbox"
             id="typo_error"
             v-model="data.typo_error"
             required />
            <span>Typographical or Clerical Error by USCIS </span>
          </label>

          <!----------------change of name  ----------------->
          <!----------------linked to part 5  ----------------->
          <label
            for="name_change"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer "
          >
            <input type="checkbox"
             id="name_change"
             v-model="data.name_change"
             required />
            <span>Change of Name</span>
          </label>

           <!----------------change of DOB  ----------------->
          <!----------------linked to part 6  ----------------->
          <label
            for="dob_change"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer "
          >
            <input type="checkbox"
             id="dob_change"
             v-model="data.dob_change"
             required />
            <span>Replacement of Certificate of Citizenship Due to Change in Date Of Birth</span>
          </label>

           <!----------------change of gender  ----------------->
          <!----------------linked to part 7  ----------------->
          <label
            for="gender_change"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer "
          >
            <input type="checkbox"
             id="gender_change"
             v-model="data.gender_change"
             required />
            <span>Change of Gender</span>
          </label>

           <!----------------reason not listed above  ----------------->
          <!----------------linked to part 9  ----------------->

          <label
            for="reason_not_listed"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer "
          >
            <input type="checkbox"
             id="reason_not_listed"
             v-model="data.reason_not_listed"
             required />
            <span>Reason for Application not Listed Above</span>
          </label>
           <!-----------explanation for reason not listed above   ------------>
           <label
            for="explanation_reason_not_listed"
            class="font-bold py-1 px-3 cursor-pointer "
          >
          <span>Provide an explanation</span>
         </label>
            <textarea
            class="border rounded-md p-3" 
            rows="4"
            cols="58"
            id="explanation_reason_not_listed"
            v-model="data.explanation_reason_not_listed"
             required 
             ></textarea>
        </div>

        <!-- btn -->
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
  </section>
</template>
