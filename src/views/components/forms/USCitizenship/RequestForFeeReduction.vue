<script lang="ts" setup>
import { ref, type Ref } from 'vue'
import { useUserStore } from '@/stores/userStore'

import AppButton from '@/components/Button.vue'

defineProps<{ tab: string }>()

const { currentForm } = useUserStore()
const emit = defineEmits(['next'])
const data: Ref<any> = ref({ ...currentForm })

const sendData = function () {
  emit('next', data.value)
}
</script>
<template>
  <section class="">
    <h2 class="border-b font-bold text-2xl text-primary pb-2">Request for a Fee Reduction</h2>
    <form @submit.prevent="sendData()" class="py-5 md:w-2/3">
      <p class="pl-2 text-red border-l-2 border-red">
        For information about fees, fee waiver, and reduced fees, see Form G-1055, Fee Schedule at
        <a href="https://www.uscis.gov/g-1055" class="text-primary underline" target="_blank">
          www.uscis.gov/g-1055 </a
        >. To apply for a reduced fee, complete the fields below
      </p>

      <div class="my-5">
        My household income is less than or equal to 400% of the Federal Poverty Guidelines (see
        Instructions for required documentation)

        <div class="flex gap-3 mt-2">
          <label
            for="part11_Q1_true"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="part11_Q1_true"
              name="part11_Q1"
              v-model="data.part11_Q1_yes"
              :checked="data.part11_Q1_yes"
              :value="data.part11_Q1_yes ? false : true"
              @change="
                data.part11_Q1_yes ? (data.part11_Q1_no = false) : (data.part11_Q1_no = true)
              "
              required
            />
            <span>Yes</span>
          </label>

          <label
            for="part11_Q1_false"
            class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
          >
            <input
              type="radio"
              id="part11_Q1_false"
              name="part11_Q1"
              v-model="data.part11_Q1_no"
              :checked="data.part11_Q1_no"
              :value="data.part11_Q1_no ? false : true"
              @change="
                data.part11_Q1_no ? (data.part11_Q1_yes = false) : (data.part11_Q1_yes = true)
              "
              required
            />
            <span>No</span>
          </label>
        </div>
      </div>

      <template v-if="data.part11_Q1_yes">
        <div class="flex items-end gap-5 mb-5 text-sm">
          <label for="part11_Q2" class="flex flex-col gap-2 md:w-1/3">
            <span class="block mb-2">Total Household income</span>
            <input
              type="number"
              id="part11_Q2"
              v-model="data.part11_Q2"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="Total Household income"
              required
            />
          </label>

          <label for="part11_Q3" class="flex flex-col gap-2 md:w-1/3">
            <span class="block mb-2">My Household size is</span>
            <input
              type="number"
              id="part11_Q3"
              v-model="data.part11_Q3"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="My Household size"
              required
            />
          </label>

          <label for="part11_Q4" class="flex flex-col gap-2 md:w-1/3">
            <span class="block mb-2"
              >Total number of household members earning income, including yourself</span
            >
            <input
              type="number"
              id="part11_Q4"
              v-model="data.part11_Q4"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="Total number of household members earning income"
              required
            />
          </label>
        </div>

        <div class="my-5">
          I am the head of the household

          <div class="flex gap-3 mt-2">
            <label
              for="part11_Q5_true"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="part11_Q5_true"
                name="part11_Q5"
                v-model="data.part11_Q5_yes"
                :checked="data.part11_Q5_yes"
                :value="data.part11_Q5_yes ? false : true"
                @change="
                  data.part11_Q5_yes ? (data.part11_Q5_no = false) : (data.part11_Q5_no = true)
                "
                required
              />
              <span>Yes</span>
            </label>

            <label
              for="part11_Q5_false"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="part11_Q5_false"
                name="part11_Q5"
                v-model="data.part11_Q5_no"
                :checked="data.part11_Q5_no"
                :value="data.part11_Q5_no ? false : true"
                @change="
                  data.part11_Q5_no ? (data.part11_Q5_yes = false) : (data.part11_Q5_yes = true)
                "
                required
              />
              <span>No</span>
            </label>
          </div>
        </div>

        <label for="part11_Q2" class="flex flex-col gap-2 mb-5" v-if="data.part11_Q5_no">
          <span class="block mb-2">Name of the head of the household</span>
          <input
            type="number"
            id="part11_Q2"
            v-model="data.part11_Q2"
            class="p-2 border focus:outline-primary rounded-md"
            placeholder="Name of the head of the household"
          />
        </label>
      </template>

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
