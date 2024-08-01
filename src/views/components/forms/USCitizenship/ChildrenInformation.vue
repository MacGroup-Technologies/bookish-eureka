<script lang="ts" setup>
import { ref, type Ref } from 'vue'
import { useUserStore } from '@/stores/userStore'

import AppButton from '@/components/Button.vue'

const { currentForm } = useUserStore()
const emit = defineEmits(['next'])
const data: Ref<any> = ref({ ...currentForm })

const sendData = function () {
  emit('next', data.value)
}
</script>
<template>
  <section>
    <h2 class="border-b font-bold text-2xl text-primary pb-2">Information About Your Children</h2>
    <form @submit.prevent="sendData()" class="py-5 md:w-2/3">
      <label for="children_under_18" class="flex flex-col gap-2 mb-5">
        <span class="block mb-2">Indicate your number of children under 18 years of age.</span>
        <input
          type="number"
          id="children_under_18"
          v-model="data.children_under_18"
          class="p-2 border focus:outline-primary rounded-md"
          placeholder="Number of children under 18 years of age"
          required
        />
      </label>

      <div class="border-b mb-5" v-if="data.children_under_18 > 0">
        <div class="flex gap-5 items-end mb-5">
          <label for="child_name" class="flex flex-col gap-2 w-1/2">
            <span class="block mb-2">Child's Name (First Name and Family Name)</span>
            <input
              type="text"
              id="child_name"
              v-model="data.child_name"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="John Doe"
              required
            />
          </label>

          <label for="child_dob" class="flex flex-col gap-2 w-1/2">
            <span class="block mb-2">Child's Date of Birth</span>
            <input
              type="date"
              id="child_dob"
              v-model="data.child_dob"
              class="p-2 border focus:outline-primary rounded-md"
              required
            />
          </label>
        </div>

        <div class="flex gap-5 items-end mb-5">
          <label for="child_residence" class="flex flex-col gap-2 w-1/2">
            <span class="block mb-2">Residence</span>
            <select
              id="child_residence"
              v-model="data.residence"
              class="p-2 border focus:outline-primary rounded-md"
              required
            >
              <option value="resides with me">Resides with me</option>
              <option value="does not reside with me">Does not reside with me</option>
              <option value="unknown/missing">Unknown/Missing</option>
            </select>
          </label>

          <label for="child_relationship" class="flex flex-col gap-2 w-1/2">
            <span class="block mb-2">Child's Relationship</span>
            <select
              type="number"
              id="child_relationship"
              v-model="data.relationship"
              class="p-2 border focus:outline-primary rounded-md"
              required
            >
              <option value="Biological child">Biological child</option>
              <option value="Step child">Step child</option>
              <option value="Legally adopted child">Legally adopted child</option>
            </select>
          </label>
        </div>

        <div class="mb-5">
          <span class="block mb-2">Are you providing support for this child?</span>
          <div class="flex gap-3">
            <label
              for="shild_support_yes"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="shild_support_yes"
                name="shild_support"
                :checked="data.child_support_yes"
                :value="data.child_support_yes ? false : true"
                v-model="data.child_support_yes"
                @change="
                  data.child_support_yes
                    ? (data.child_support_no = false)
                    : (data.child_support_no = true)
                "
                required
              />
              <span>Yes</span>
            </label>

            <label
              for="shild_support_no"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="shild_support_no"
                name="shild_support"
                :checked="data.child_support_no"
                :value="data.child_support_no ? false : true"
                v-model="data.child_support_no"
                @change="
                  data.child_support_no
                    ? (data.child_support_yes = false)
                    : (data.child_support_yes = true)
                "
                required
              />
              <span>No</span>
            </label>
          </div>
        </div>
      </div>

      <div class="" v-if="data.children_under_18 > 1">
        <h3 class="mb-3 font-semibold">Second Child</h3>
        <div class="flex gap-5 items-end mb-5">
          <label for="child_name" class="flex flex-col gap-2 w-1/2">
            <span class="block mb-2">Child's Name (First Name and Family Name)</span>
            <input
              type="text"
              id="child_name"
              v-model="data.child_name2"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="John Doe"
              required
            />
          </label>

          <label for="child_dob" class="flex flex-col gap-2 w-1/2">
            <span class="block mb-2">Child's Date of Birth</span>
            <input
              type="date"
              id="child_dob"
              v-model="data.child_dob2"
              class="p-2 border focus:outline-primary rounded-md"
              required
            />
          </label>
        </div>

        <div class="flex gap-5 items-end mb-5">
          <label for="child_residence" class="flex flex-col gap-2 w-1/2">
            <span class="block mb-2">Residence</span>
            <select
              id="child_residence"
              v-model="data.residence2"
              class="p-2 border focus:outline-primary rounded-md"
              required
            >
              <option value="resides with me">Resides with me</option>
              <option value="does not reside with me">Does not reside with me</option>
              <option value="unknown/missing">Unknown/Missing</option>
            </select>
          </label>

          <label for="child_relationship" class="flex flex-col gap-2 w-1/2">
            <span class="block mb-2">Child's Relationship</span>
            <select
              type="number"
              id="child_relationship"
              v-model="data.relationship2"
              class="p-2 border focus:outline-primary rounded-md"
              required
            >
              <option value="Biological child">Biological child</option>
              <option value="Step child">Step child</option>
              <option value="Legally adopted child">Legally adopted child</option>
            </select>
          </label>
        </div>

        <div class="mb-5">
          <span class="block mb-2">Are you providing support for this child?</span>
          <div class="flex gap-3">
            <label
              for="shild_support_yes"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="shild_support_yes"
                name="shild_support"
                :checked="data.child_support_yes2"
                :value="data.child_support_yes2 ? false : true"
                v-model="data.child_support_yes2"
                @change="
                  data.child_support_yes2
                    ? (data.child_support_no2 = false)
                    : (data.child_support_no2 = true)
                "
                required
              />
              <span>Yes</span>
            </label>

            <label
              for="shild_support_no"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="shild_support_no"
                name="shild_support"
                :checked="data.child_support_no2"
                :value="data.child_support_no2 ? false : true"
                v-model="data.child_support_no2"
                @change="
                  data.child_support_no2
                    ? (data.child_support_yes2 = false)
                    : (data.child_support_yes2 = true)
                "
                required
              />
              <span>No</span>
            </label>
          </div>
        </div>
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
