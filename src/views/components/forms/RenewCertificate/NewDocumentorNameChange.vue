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
    <!-------------Heading text  ----------------->
    <h2 class="border-b font-bold text-2xl text-primary pb-2">
      Application for a New Document Due to Change of Name
    </h2>
    <!-----linked to part 9  ------>
    <div class="text-red border-l-2 border-red px-2 mt-3 mb-3">
      <b>NOTE: After completing this section, go to Part 9.</b>
    </div>

    <!-------------------Form  ------------------------>
    <form @submit.prevent="sendData()" class="py-5 md:w-2/3">
      <span class="block font-bold mb-5">Change of Name Due To (Select only one option): </span>
      <div class="flex gap-3 items-start mb-5">
        <!----------- cause of name change -->
        <!----------marriage ---------->
        <label
          for="name_change_marriage"
          class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
        >
          <input
            type="radio"
            id="name_change_marriage"
            name="name_change"
            v-model="data.name_change"
            required
          />
          <span>Marriage, Divorce, or Annulment</span>
        </label>

        <label
          for="name_change_court_order"
          class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
        >
          <input
            type="radio"
            id="name_change_court_order"
            name="name_change"
            v-model="data.name_change"
            required
          />
          <span>Court Order</span>
        </label>
      </div>

      <div class="flex gap-3 items-start mb-5">
        <label for="date_of_event" class="flex flex-col gap-2 w-1/2">
          <span>Date of Event</span>
          <input
            type="date"
            id="date_of_event"
            v-model="data.date_of_event"
            class="p-2 border focus:outline-primary rounded-md"
            required
          />
        </label>
        <label for="date_of_order" class="flex flex-col gap-2 w-1/2">
          <span>Date of Court Order</span>
          <input
            type="date"
            id="date_of_order"
            v-model="data.date_of_order"
            class="p-2 border focus:outline-primary rounded-md"
            required
          />
        </label>
      </div>

      <!--------note  ------->
      <div class="text-red border-l-2 border-red px-2 mt-3 mb-3">
        <b
          >NOTE: If you selected A, attach a copy of your marriage certificate, annulment decree, or
          divorce decree. If you selected B, attach a copy of either the original or certified court
          document.
        </b>
      </div>

      <!---------- new legal name  ------>
      <h2 class="font-bold mb-2">New Legal Name</h2>
      <div class="flex gap-3 items-start mb-5">
        <!---------------Lastname -------------------------->
        <label for="last_name" class="flex flex-col gap-2 mb-5">
          <span>Family Name (Last Name)</span>
          <input
            type="text"
            id="last_name"
            v-model="data.family_name"
            class="p-2 border focus:outline-primary rounded-md"
            placeholder="Family Name [eg. Rodriquez]"
            required
          />
        </label>

        <!-----------------------fname ---------------------->
        <label for="given_name" class="flex flex-col gap-2 mb-5">
          <span>Given Name (First Name)</span>
          <input
            type="text"
            id="given_name"
            v-model="data.given_name"
            class="p-2 border focus:outline-primary rounded-md"
            placeholder="Given Name [eg. Pedro]"
            required
          />
        </label>

        <!-----------------------------Middle name -------------------------->
        <label for="middle_name" class="flex flex-col gap-2 mb-5">
          <span>Middle Name</span>
          <input
            type="text"
            id="middle_name"
            v-model="data.middle_name"
            class="p-2 border focus:outline-primary rounded-md"
            placeholder="Middle Name [eg. Juan]"
          />
        </label>
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
  </section>
</template>
