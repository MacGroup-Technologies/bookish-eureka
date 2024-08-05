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
        >I am filing this petition for my (Select only one box):</span
      >

      <div class="flex gap-3">
        <label for="spouse" class="flex items-center gap-2 border p-3 rounded-md cursor-pointer">
          <input
            type="radio"
            id="spouse"
            value="spouse"
            name="relationship"
            v-model="data.relationship"
            required
          />
          <span>Spouse</span>
        </label>

        <!-----------parent  ------------>
        <label for="parent" class="flex items-center gap-2 border p-3 rounded-md cursor-pointer">
          <input
            type="radio"
            id="parent"
            value="parent"
            name="relationship"
            v-model="data.relationship"
            required
          />
          <span>Parent</span>
        </label>
        <!-----------brother or sister------->
        <label for="sibling" class="flex items-center gap-2 border p-3 rounded-md cursor-pointer">
          <input
            type="radio"
            id="sibling"
            value="sibling"
            name="relationship"
            v-model="data.relationship"
            required
          />
          <span>Brother/Sister</span>
        </label>

        <!-----------child----------------->
        <label for="child" class="flex items-center gap-2 border p-3 rounded-md cursor-pointer">
          <input
            type="radio"
            id="child"
            value="child"
            name="relationship"
            v-model="data.relationship"
            required
          />
          <span>Child</span>
        </label>
      </div>
      <label for="street_number_and_name" class="flex flex-col gap-2 mb-5">
          <span>Street Number and Name</span>
          <input
            type="text"
            id="street_number_and_name"
            v-model="data.street_name_number"
            class="p-2 border focus:outline-primary rounded-md"
            placeholder="Street Number and Name"
            required
          />
        </label><label for="street_number_and_name" class="flex flex-col gap-2 mb-5">
          <span>Street Number and Name</span>
          <input
            type="text"
            id="street_number_and_name"
            v-model="data.street_name_number"
            class="p-2 border focus:outline-primary rounded-md"
            placeholder="Street Number and Name"
            required
          />
        </label><label for="street_number_and_name" class="flex flex-col gap-2 mb-5">
          <span>Street Number and Name</span>
          <input
            type="text"
            id="street_number_and_name"
            v-model="data.street_name_number"
            class="p-2 border focus:outline-primary rounded-md"
            placeholder="Street Number and Name"
            required
          />
        </label>
      <!----------- selected child or parent ------------->
      <div v-if="data.relationship === 'parent' || data.relationship === 'child'" id="1a">
        <span class="block my-5 font-bold"
          >If you are filing this petition for your child or parent (Select only one box) that
          describes your relationship.
        </span>

        <!------child birth -------------->
        <label
          for="childbirth"
          class="flex items-center gap-2 border p-3 rounded-md cursor-pointer"
        >
          <input
            type="radio"
            id="childbirth"
            value="childbirth"
            name="childparentrelationship"
            v-model="data.childparentrelationship"
            required
          />
          <span
            >Child was born to parents who were married to each other at the time of the child's
            birth</span
          >
        </label>

        <!------child birth -------------->
        <label for="step" class="flex items-center gap-3 mt-5 border p-3 rounded-md cursor-pointer">
          <input
            type="radio"
            id="step"
            value="step"
            name="childparentrelationship"
            v-model="data.childparentrelationship"
            required
          />
          <span>Step-child or Step-parent</span>
        </label>

        <!------ not child birth -------------->
        <label
          for="notchildbirth"
          class="flex items-center gap-2 mt-5 border p-3 rounded-md cursor-pointer"
        >
          <input
            type="radio"
            id="notchildbirth"
            value="notchildbirth"
            name="childparentrelationship"
            v-model="data.childparentrelationship"
            required
          />
          <span
            >Child was born to parents who were not married to each other at the time of the child's
            birth</span
          >
        </label>

        <!------child was adopted -------------->
        <label
          for="adopted"
          class="flex items-center gap-2 mt-5 border p-3 rounded-md cursor-pointer"
        >
          <input
            type="radio"
            id="adopted"
            value="adopted"
            name="childparentrelationship"
            v-model="data.childparentrelationship"
            required
          />
          <span>Child was adopted (not an orphan or hague)</span>
        </label>
      </div>

      <!--------------brother or sister  ----------------->
      <div v-else-if="(data.relationship = 'sibling')">
        <span class="block font-bold mt-5">Are you related by adoption</span>
        <div class="flex gap-3 mt-5">
          <label
            for="relatedbyadoptionyes"
            class="flex items-center gap-2 border p-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="relatedbyadoptionyes"
              value="yes"
              name="relatedbyadoption"
              v-model="data.relatedbyadoption"
              required
            />
            <span>Yes</span>
          </label>

          <label
            for="relatedbyadoptionno"
            class="flex items-center gap-2 border p-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="relatedbyadoptionno"
              value="yes"
              name="relatedbyadoption"
              v-model="data.relatedbyadoption"
              required
            />
            <span>No</span>
          </label>
        </div>
      </div>

      <!-----------lawful permanent resident----------------->
      <div class="flex gap-3 mt-5">
        <label
          for="permanentresident"
          class="flex items-center gap-2 border p-3 rounded-md cursor-pointer"
        >
          <input
            type="radio"
            id="permanentresident"
            value="permanentresident"
            name="relationship"
            v-model="data.relationship"
            required
          />
          <span>Did you gain Lawful Permanent Resident Status or Citizenship through Adoption</span>
        </label>
      </div>

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
