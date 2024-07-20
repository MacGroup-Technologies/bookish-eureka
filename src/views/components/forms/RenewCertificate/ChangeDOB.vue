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
    <h2 class="border-b font-bold text-2xl text-primary pb-2">Date of Birth Change</h2>
    <!----------linked to part 9 Mr Bolu  ------->
    <div class="text-red border-l-2 border-red px-2 mt-3 mb-3">
      <b>NOTE: After completing this section, go to Part 9.</b>
    </div>

    <!-------------------Form  ------------------------>
    <form @submit.prevent="sendData()" class="py-5 md:w-2/3">
      <span class="block font-bold mb-5"
        >Change of Date of Birth Due To (Select all applicable boxes):</span
      >
      <div class="flex gap-3 items-start mb-5">
        <!----------- dob change -->
        <!----------court order ---------->
        <label
          for="dob_change_court_order"
          class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
        >
          <input
            type="checkbox"
            id="dob_change_court_order"
            name="dob_change_court_order"
            v-model="data.dob_change_court_order"
            required
          />
          <span>Court Order</span>
        </label>
    <!-------------- us govt issued doc  --------------->
        <label
          for="us_issued_doc"
          class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
        >
          <input
            type="checkbox"
            id="us_issued_doc"
            name="us_issued_doc"
            v-model="data.us_issued_doc"
            required
          />
          <span>U.S. Government-Issued Document</span>
        </label>
      </div>
<!------- dates of documents -------->
      <div class="flex gap-3 items-start mb-5">
        <label for="date_of_order" class="flex flex-col gap-2 ">
          <span>Date of Court Order</span>
          <input
            type="date"
            id="date_of_order"
            v-model="data.date_of_order"
            class="p-2 border focus:outline-primary rounded-md"
            required
          />
        </label>

        <label for="us_govt_issued_doc" class="flex flex-col gap-2 ">
          <span>Date of U.S. Government-Issued Document </span>
          <input
            type="date"
            id="us_govt_issued_doc"
            v-model="data.us_govt_issued_doc"
            class="p-2 border focus:outline-primary rounded-md"
            required
          />
        </label>
      </div>

      <div class="text-red border-l-2 border-red px-2 mt-3 mb-3">
      <b>NOTE:   If you selected A, attach a copy of either the original or certified court document.  If you selected B, attach a copy of the document (for example, birth certificate, certificate recognizing the foreign birth, certificate of birth abroad, or other similar vital records issued by the U.S. state where the child resided when the document was issued)</b>
    </div>

      <!------------- New Date of Birth  ---------->
      <label for="new_dob" class="flex flex-col gap-2 ">
          <span> New Date of Birth (as shown in the court order or U.S. Government-issued document) </span>
          <input
            type="date"
            id="new_dob"
            v-model="data.new_dob"
            class="p-2 border focus:outline-primary rounded-md"
            required
          />
        </label>

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
