<script lang="ts" setup>
import { type Ref, ref } from 'vue'
import { isEmpty, omit } from 'lodash'

import { useUserStore } from '@/stores/userStore'

import AppButton from '@/components/Button.vue'

defineProps<{ tab: string }>()

const { currentForm } = useUserStore()
const emit = defineEmits(['next', 'update-tab'])
const data: Ref<any> = ref({ ...currentForm })

const sendData = function () {
  emit('next', data.value)
}
</script>
<template>
  <section>
    <div class="" v-if="tab === 'marital-history'">
      <h2 class="border-b font-bold text-2xl text-primary pb-2">Marital History</h2>
      <form @submit.prevent="emit('update-tab', 'current-marriage')" class="py-5 md:w-2/3">
        <div class="mb-5">
          <span class="block mb-2">What is your current marital status? </span>
          <div class="flex gap-3 flex-wrap">
            <label
              for="single"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="single"
                name="marital_status"
                v-model="data.single"
                :checked="data.single"
                :value="data.single ? false : true"
                @change="
                  data.single
                    ? ((data.married = false),
                      (data.divorced = false),
                      (data.widowed = false),
                      (data.separated = false),
                      (data.annulled = false))
                    : null
                "
                required
              />
              <span>Single, Never married</span>
            </label>

            <label
              for="married"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="married"
                name="marital_status"
                v-model="data.married"
                :checked="data.married"
                :value="data.married ? false : true"
                @change="
                  data.married
                    ? ((data.single = false),
                      (data.divorced = false),
                      (data.widowed = false),
                      (data.separated = false),
                      (data.annulled = false))
                    : null
                "
                required
              />
              <span>Married</span>
            </label>

            <label
              for="divorced"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="divorced"
                name="marital_status"
                v-model="data.divorced"
                :checked="data.divorced"
                :value="data.divorced ? false : true"
                @change="
                  data.divorced
                    ? ((data.married = false),
                      (data.single = false),
                      (data.widowed = false),
                      (data.separated = false),
                      (data.annulled = false))
                    : null
                "
                required
              />
              <span>Divorced</span>
            </label>

            <label
              for="widowed"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="widowed"
                name="marital_status"
                v-model="data.widowed"
                :checked="data.widowed"
                :value="data.widowed ? false : true"
                @change="
                  data.widowed
                    ? ((data.married = false),
                      (data.divorced = false),
                      (data.single = false),
                      (data.separated = false),
                      (data.annulled = false))
                    : null
                "
                required
              />
              <span>Widowed</span>
            </label>

            <label
              for="separated"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="separated"
                name="marital_status"
                v-model="data.separated"
                :checked="data.separated"
                :value="data.separated ? false : true"
                @change="
                  data.separated
                    ? ((data.married = false),
                      (data.divorced = false),
                      (data.widowed = false),
                      (data.single = false),
                      (data.annulled = false))
                    : null
                "
                required
              />
              <span>Separated</span>
            </label>

            <label
              for="marriage_annulled"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="marriage_annulled"
                name="marital_status"
                v-model="data.annulled"
                :checked="data.annulled"
                :value="data.annulled ? false : true"
                @change="
                  data.annulled
                    ? ((data.married = false),
                      (data.divorced = false),
                      (data.widowed = false),
                      (data.separated = false),
                      (data.single = false))
                    : null
                "
                required
              />
              <span>Marriage Annulled</span>
            </label>
          </div>
        </div>

        <div class="" v-if="data.single !== undefined && data.single !== true">
          <div class="mb-5" v-if="data.married">
            <span class="block mb-2"> Is your spouse a member of the U.S Armed Forces? </span>
            <div class="flex gap-3">
              <label
                for="armed_forces_yes"
                class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
              >
                <input
                  type="radio"
                  id="armed_forces_yes"
                  name="armed_forces"
                  :checked="data.spouse_us_army_yes"
                  :value="data.spouse_us_army_yes ? false : true"
                  v-model="data.spouse_us_army_yes"
                  @change="
                    data.spouse_us_army_yes
                      ? (data.spouse_us_army_no = false)
                      : (data.spouse_us_army_no = true)
                  "
                  required
                />
                <span>Yes</span>
              </label>

              <label
                for="armed_forces_no"
                class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
              >
                <input
                  type="radio"
                  id="armed_forces_no"
                  name="armed_forces"
                  :checked="data.spouse_us_army_no"
                  :value="data.spouse_us_army_no ? false : true"
                  v-model="data.spouse_us_army_no"
                  @change="
                    data.spouse_us_army_no
                      ? (data.spouse_us_army_yes = false)
                      : (data.spouse_us_army_yes = true)
                  "
                  required
                />
                <span>No</span>
              </label>
            </div>
          </div>

          <label for="times_married" class="flex flex-col gap-2 mb-5">
            <span class="block mb-2"> How many times have you been married? </span>
            <input
              type="text"
              id="times_married"
              v-model="data.times_married"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="Times married"
              required
            />
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
    </div>
    <div class="" v-else>
      <h2 class="border-b font-bold text-2xl text-primary pb-2">Current Marriage</h2>
      <form @submit.prevent="sendData()" class="py-5 md:w-2/3">
        <div class="" v-if="data.single">
          <div class="text-orange-500 border-l-2 border-orange-500 px-2 mb-5">
            Please click the button below to continue
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
        </div>
        <template v-else>
          <div class="" v-if="data.spouse_of_us_citizen || data.spouse_of_us_citizen_outside_us">
            <div class="text-orange-500 border-l-2 border-orange-500 px-2 mb-5">
              If you are currently married, including if you are legally seperated, provide the
              following information about your current spouse.
            </div>

            <div class="">
              <span class="font-semibold block mb-2">Current Spouse's Legal Name</span>
              <div class="flex gap-3 items-center">
                <label for="family_name" class="flex flex-col gap-2 mb-5">
                  <span>Family Name (Last Name)</span>
                  <input
                    type="text"
                    id="family_name"
                    v-model="data.spouse_family_name"
                    class="p-2 border focus:outline-primary rounded-md"
                    placeholder="Last Name"
                  />
                </label>

                <label for="first_name" class="flex flex-col gap-2 mb-5">
                  <span>Given Name (First Name)</span>
                  <input
                    type="text"
                    id="first_name"
                    v-model="data.spouse_given_name"
                    class="p-2 border focus:outline-primary rounded-md"
                    placeholder="First Name"
                  />
                </label>

                <label for="middle_name" class="flex flex-col gap-2 mb-5">
                  <span>Middle Name</span>
                  <input
                    type="text"
                    id="middle_name"
                    v-model="data.spouse_middle_name"
                    class="p-2 border focus:outline-primary rounded-md"
                    placeholder="Middle Name"
                  />
                </label>
              </div>
              <div class="flex gap-5 items-end mb-5">
                <label for="spouse_date_of_birth" class="flex flex-col gap-2 w-1/2">
                  <span>Current Spouse's Date of Birth</span>
                  <input
                    type="date"
                    id="spouse_date_of_birth"
                    v-model="data.spouse_date_of_birth"
                    class="p-2 border focus:outline-primary rounded-md"
                  />
                </label>

                <label for="date_of_marriage" class="flex flex-col gap-2 w-1/2">
                  <span>Date You Entered Marriage with Current Spouse</span>
                  <input
                    type="date"
                    id="date_of_marriage"
                    v-model="data.date_of_marriage"
                    class="p-2 border focus:outline-primary rounded-md"
                  />
                </label>
              </div>
            </div>

            <div class="my-5">
              Is your current spouse's present physical address the same as your physical address?

              <div class="flex gap-3 mt-2">
                <label
                  for="spouse_address_same_true"
                  class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
                >
                  <input
                    type="radio"
                    id="spouse_address_same_true"
                    name="spouse_address"
                    v-model="data.spouse_address_same_yes"
                    :checked="data.spouse_address_same_yes"
                    :value="data.spouse_address_same_yes ? false : true"
                    @change="
                      data.spouse_address_same_yes
                        ? (data.spouse_address_same_no = false)
                        : (data.spouse_address_same_no = true)
                    "
                    required
                  />
                  <span>Yes</span>
                </label>

                <label
                  for="spouse_address_same_false"
                  class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
                >
                  <input
                    type="radio"
                    id="spouse_address_same_false"
                    name="spouse_address"
                    v-model="data.spouse_address_same_no"
                    :checked="data.spouse_address_same_no"
                    :value="data.spouse_address_same_no ? false : true"
                    @change="
                      data.spouse_address_same_no
                        ? (data.spouse_address_same_yes = false)
                        : (data.spouse_address_same_yes = true)
                    "
                    required
                  />
                  <span>No</span>
                </label>
              </div>
            </div>

            <div class="my-5">
              When did your current spouse become a U.S citizen?
              <div class="flex gap-3 mt-2">
                <label
                  for="spouse_citizen_by_birth"
                  class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
                >
                  <input
                    type="radio"
                    id="spouse_citizen_by_birth"
                    name="spouse_citizenship"
                    v-model="data.spouse_citizen_by_birth"
                    :checked="data.spouse_citizen_by_birth"
                    :value="data.spouse_citizen_by_birth ? false : true"
                    @change="
                      data.spouse_citizen_by_birth
                        ? (data.spouse_citizen_others = false)
                        : (data.spouse_citizen_others = true)
                    "
                    required
                  />
                  <span>By Birth in the United States</span>
                </label>

                <label
                  for="spouse_citizen_others"
                  class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
                >
                  <input
                    type="radio"
                    id="spouse_citizen_others"
                    name="spouse_citizenship"
                    v-model="data.spouse_citizen_others"
                    :checked="data.spouse_citizen_others"
                    :value="data.spouse_citizen_others ? false : true"
                    @change="
                      data.spouse_citizen_others
                        ? (data.spouse_citizen_by_birth = false)
                        : (data.spouse_citizen_by_birth = true)
                    "
                    required
                  />
                  <span>Other</span>
                </label>
              </div>
            </div>

            <div class="my-5" v-if="data.spouse_citizen_others">
              <label for="date_spouse_citizen" class="flex flex-col gap-2">
                <span>Date your current spouse became a U.S citizen</span>
                <input
                  type="date"
                  id="date_spouse_citizen"
                  v-model="data.date_spouse_citizen"
                  class="p-2 border focus:outline-primary rounded-md"
                />
              </label>
            </div>
          </div>

          <div class="flex gap-5 items-end mb-5">
            <label for="spouse_a_number" class="flex flex-col gap-2 w-1/2">
              <span>Current Spouse's Alien Registration Number: A Number (if any)</span>
              <input
                type="number"
                id="spouse_a_number"
                v-model="data.spouse_a_number"
                class="p-2 border focus:outline-primary rounded-md"
                placeholder="Spouce A Number"
                maxlength="9"
                minlength="9"
              />
            </label>

            <label for="spouse_marry_number" class="flex flex-col gap-2 w-1/2">
              <span class="block mb-2"> How many times has your current spouse been married? </span>
              <input
                type="text"
                id="spouse_marry_number"
                v-model="data.spouse_marry_number"
                class="p-2 border focus:outline-primary rounded-md"
                placeholder="Times spouse has married"
                required
              />
            </label>
          </div>

          <label
            for="spouse_employer"
            class="flex flex-col gap-2"
            v-if="data.spouse_of_us_citizen_outside_us"
          >
            <span>Current Spouse's Current Employer or Company</span>
            <input
              type="number"
              id="spouse_employer"
              v-model="data.spouse_employer"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="Spouce's Employer"
              maxlength="9"
              minlength="9"
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
        </template>
      </form>
    </div>
  </section>
</template>
