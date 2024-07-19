<script lang="ts" setup>
import { type Ref, ref, computed } from 'vue'
import { isEmpty, omit } from 'lodash'

import { COUNTRIES_AND_STATES as COUNTRIES } from '@/utils/countries_and_state'
import { useUserStore } from '@/stores/userStore'

import AppButton from '@/components/Button.vue'

const props = defineProps<{
  tab: string
}>()

const { currentForm } = useUserStore()
const emit = defineEmits(['next', 'update-tab'])
const data: Ref<any> = ref({ ...currentForm })

const states = computed(() => {
  if (props.tab !== 'mailing') {
    if (isEmpty(data.value.country)) {
      return []
    } else {
      return COUNTRIES.find((item) => item.name === data.value.country)
    }
  } else {
    if (isEmpty(data.value.mailing_country)) {
      return []
    } else {
      return COUNTRIES.find((item) => item.name === data.value.mailing_country)
    }
  }
})

const sendData = function () {
  emit('next', data.value)
}
</script>
<template>
  <section>
    <div class="" v-if="tab === 'current-residence'">
      <h2 class="border-b font-bold text-2xl text-primary pb-2">
        Information About Your Residence
      </h2>
      <form @submit.prevent="emit('update-tab', 'residence-history')" class="py-5 md:w-2/3">
        <label for="in_care_of" class="flex flex-col gap-2 mb-5">
          <span>In Care of Name (If any)</span>
          <input
            type="text"
            id="in_care_of"
            v-model="data.in_care_of_name"
            class="p-2 border focus:outline-primary rounded-md"
            placeholder="In Care of Name"
          />
        </label>

        <div class="flex items-end gap-5 mb-5">
          <label for="street_name" class="flex flex-col gap-2 w-1/2">
            <span>Street Number and Name</span>
            <input
              type="text"
              id="street_name"
              v-model="data.street_name_number"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="Street Number and Name"
              required
            />
          </label>

          <div class="w-1/2 flex gap-3 items-end">
            <div class="w-1/2 grid grid-cols-3 gap-2">
              <label
                for="apt"
                class="flex flex-col items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
              >
                <span>Apt.</span>
                <input type="checkbox" id="apt" :value="true" v-model="data.apt" />
              </label>

              <label
                for="ste"
                class="flex flex-col items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
              >
                <span>Ste.</span>
                <input type="checkbox" id="ste" :value="true" v-model="data.ste" />
              </label>

              <label
                for="flr"
                class="flex flex-col items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
              >
                <span>Flr.</span>
                <input type="checkbox" id="flr" :value="true" v-model="data.flr" />
              </label>
            </div>

            <label for="street_number" class="flex flex-col gap-2 w-1/2">
              <span>Number</span>
              <input
                type="text"
                id="street_number"
                v-model="data.number"
                class="p-2 border focus:outline-primary rounded-md"
                placeholder="Number"
                required
              />
            </label>
          </div>
        </div>

        <div class="flex gap-5 mb-5">
          <label for="postal_code" class="flex flex-col gap-2 w-1/2">
            <span>Postal Code</span>
            <input
              type="text"
              id="postal_code"
              v-model="data.postal_code"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="Postal Code"
            />
          </label>

          <label for="zip_code" class="flex flex-col gap-2 w-1/2">
            <span>Zip Code</span>
            <input
              type="text"
              id="zip_code"
              v-model="data.zip_code"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="Zip Code"
            />
          </label>
        </div>

        <div class="flex gap-5 mb-5">
          <label for="province" class="flex flex-col gap-2 w-1/2">
            <span>Province</span>
            <input
              type="text"
              id="province"
              v-model="data.province"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="Province"
            />
          </label>

          <label for="city" class="flex flex-col gap-2 md:w-1/2">
            <span>City or Town</span>
            <input
              type="text"
              id="city"
              v-model="data.city_town"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="City [eg. Brooklyn]"
              required
            />
          </label>
        </div>

        <div class="flex gap-5 mb-5">
          <label for="state" class="flex flex-col gap-2 md:w-1/2">
            <span>State</span>
            <select
              id="state"
              v-model="data.state"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="Please Select"
              required
            >
              <option selected disabled v-if="isEmpty(data.country)">Select Country First</option>
              <option v-for="(state, index) in states!.states!" :key="index" :value="state.name">
                {{ state.name }}
              </option>
            </select>
          </label>

          <label for="country" class="flex flex-col gap-2 w-1/2">
            <span>Country</span>
            <select
              id="country"
              v-model="data.country"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="Please Select your mailing country"
              required
            >
              <option v-for="(country, index) in COUNTRIES" :key="index" :value="country.name">
                {{ country.name }}
              </option>
            </select>
          </label>
        </div>

        <label for="date_of_residence" class="flex flex-col gap-2 mb-5">
          <span>Date of Resisence: From</span>
          <input
            type="date"
            id="date_of_residence"
            v-model="data.date_of_residency"
            class="p-2 border focus:outline-primary rounded-md"
            placeholder="MM/DD/YY"
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
    </div>

    <div class="" v-else-if="tab === 'residence-history'">
      <h2 class="border-b font-bold text-2xl text-primary pb-2">Residence History</h2>
      <form @submit.prevent="emit('update-tab', 'mailing')" class="py-5 md:w-2/3">
        <div class="text-orange-500 border-l-2 border-orange-500 px-2 mb-5">
          List every location where you have lived during the last 5 years
        </div>

        <div class="p-5 pt-0 mb-5 border-b">
          <label for="street_1" class="flex flex-col gap-2 my-3">
            <span>Physical Address</span>
            <textarea
              id="street_1"
              v-model="data.street_name_number2"
              class="p-2 border w-full mt-2 focus:outline-primary rounded-md"
              placeholder="Street Number and Name"
            ></textarea>
          </label>

          <div class="flex gap-5 mb-5">
            <label for="zip_code_1" class="flex flex-col gap-2 w-1/2">
              <span>Postal Code</span>
              <input
                type="text"
                id="zip_code_1"
                v-model="data.postal_code2"
                class="p-2 border focus:outline-primary rounded-md"
                placeholder="Zip Code"
              />
            </label>

            <label for="city_or_town_1" class="flex flex-col gap-2 w-1/2">
              <span>City/Town</span>
              <input
                type="text"
                id="city_or_town_1"
                v-model="data.city_town2"
                class="p-2 border focus:outline-primary rounded-md"
                placeholder="City or Town"
              />
            </label>
          </div>

          <div class="flex gap-5 mb-5">
            <label for="state_1" class="flex flex-col gap-2 w-1/2">
              <span>State/Province</span>
              <input
                type="text"
                id="state_1"
                v-model="data.province2"
                class="p-2 border focus:outline-primary rounded-md"
                placeholder="State/Province"
              />
            </label>

            <label for="country" class="flex flex-col gap-2 w-1/2">
              <span>Country</span>
              <select
                id="country"
                v-model="data.country2"
                class="p-2 border focus:outline-primary rounded-md"
                placeholder="Please Select your mailing country"
              >
                <option v-for="(country, index) in COUNTRIES" :key="index" :value="country.name">
                  {{ country.name }}
                </option>
              </select>
            </label>
          </div>

          <span class="font-semibold">Duration of Residence</span>
          <div class="flex gap-5">
            <label for="residence_date_from_1" class="flex flex-col w-1/2">
              <span>From</span>
              <input
                type="date"
                id="residence_date_from_1"
                v-model="data.date_of_residency_start2"
                class="p-2 border focus:outline-primary rounded-md"
              />
            </label>

            <label for="residence_date_to_1" class="flex flex-col w-1/2">
              <span>To</span>
              <input
                type="date"
                id="residence_date_to_1"
                v-model="data.date_of_residency_end2"
                class="p-2 border focus:outline-primary rounded-md"
              />
            </label>
          </div>
        </div>

        <div class="p-5 mb-5 border-b bg-primary/5">
          <label for="street_2" class="flex flex-col gap-2 my-3">
            <span>Physical Address</span>
            <textarea
              id="street_2"
              v-model="data.street_name_number3"
              class="p-2 border w-full mt-2 focus:outline-primary rounded-md"
              placeholder="Street Number and Name"
            ></textarea>
          </label>

          <div class="flex gap-5 mb-5">
            <label for="zip_code_2" class="flex flex-col gap-2 w-1/2">
              <span>Postal Code</span>
              <input
                type="text"
                id="zip_code_2"
                v-model="data.postal_code3"
                class="p-2 border focus:outline-primary rounded-md"
                placeholder="Zip Code"
              />
            </label>

            <label for="city_or_town_2" class="flex flex-col gap-2 w-1/2">
              <span>City/Town</span>
              <input
                type="text"
                id="city_or_town_2"
                v-model="data.city_town3"
                class="p-2 border focus:outline-primary rounded-md"
                placeholder="City or Town"
              />
            </label>
          </div>

          <div class="flex gap-5 mb-5">
            <label for="state_2" class="flex flex-col gap-2 w-1/2">
              <span>State/Province</span>
              <input
                type="text"
                id="state_2"
                v-model="data.province3"
                class="p-2 border focus:outline-primary rounded-md"
                placeholder="State/Province"
              />
            </label>

            <label for="country" class="flex flex-col gap-2 w-1/2">
              <span>Country</span>
              <select
                id="country"
                v-model="data.country3"
                class="p-2 border focus:outline-primary rounded-md"
                placeholder="Please Select your mailing country"
              >
                <option v-for="(country, index) in COUNTRIES" :key="index" :value="country.name">
                  {{ country.name }}
                </option>
              </select>
            </label>
          </div>

          <span class="font-semibold">Duration of Residence</span>
          <div class="flex gap-5">
            <label for="residence_date_from_2" class="flex flex-col w-1/2">
              <span>From</span>
              <input
                type="date"
                id="residence_date_from_2"
                v-model="data.date_of_residency_start3"
                class="p-2 border focus:outline-primary rounded-md"
              />
            </label>

            <label for="residence_date_to_2" class="flex flex-col w-1/2">
              <span>To</span>
              <input
                type="date"
                id="residence_date_to_2"
                v-model="data.date_of_residency_end3"
                class="p-2 border focus:outline-primary rounded-md"
              />
            </label>
          </div>
        </div>

        <div class="p-5 border-b bg-primary/10">
          <label for="street_3" class="flex flex-col gap-2 my-3">
            <span>Physical Address</span>
            <textarea
              id="street_3"
              v-model="data.street_name_number4"
              class="p-2 border w-full mt-2 focus:outline-primary rounded-md"
              placeholder="Street Number and Name"
            ></textarea>
          </label>

          <div class="flex gap-5 mb-5">
            <label for="zip_code_3" class="flex flex-col gap-2 w-1/2">
              <span>Postal Code</span>
              <input
                type="text"
                id="zip_code_3"
                v-model="data.postal_code4"
                class="p-2 border focus:outline-primary rounded-md"
                placeholder="Postal Code"
              />
            </label>

            <label for="city_or_town_3" class="flex flex-col gap-2 w-1/2">
              <span>City/Town</span>
              <input
                type="text"
                id="city_or_town_3"
                v-model="data.city_town4"
                class="p-2 border focus:outline-primary rounded-md"
                placeholder="City or Town"
              />
            </label>
          </div>

          <div class="flex gap-5 mb-5">
            <label for="state_3" class="flex flex-col gap-2 w-1/2">
              <span>State/Province</span>
              <input
                type="text"
                id="state_3"
                v-model="data.province4"
                class="p-2 border focus:outline-primary rounded-md"
                placeholder="State/Province"
              />
            </label>

            <label for="country" class="flex flex-col gap-2 w-1/2">
              <span>Country</span>
              <select
                id="country"
                v-model="data.country4"
                class="p-2 border focus:outline-primary rounded-md"
                placeholder="Please Select your mailing country"
              >
                <option v-for="(country, index) in COUNTRIES" :key="index" :value="country.name">
                  {{ country.name }}
                </option>
              </select>
            </label>
          </div>

          <span class="font-semibold">Duration of Residence</span>
          <div class="flex gap-5">
            <label for="residence_date_from_3" class="flex flex-col w-1/2">
              <span>From</span>
              <input
                type="date"
                id="residence_date_from_3"
                v-model="data.date_of_residency_start4"
                class="p-2 border focus:outline-primary rounded-md"
              />
            </label>

            <label for="residence_date_to_3" class="flex flex-col w-1/2">
              <span>To</span>
              <input
                type="date"
                id="residence_date_to_3"
                v-model="data.date_of_residency_start4"
                class="p-2 border focus:outline-primary rounded-md"
              />
            </label>
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
    </div>

    <div class="" v-else>
      <h2 class="border-b font-bold text-2xl text-primary pb-2">Mailing Address</h2>
      <form @submit.prevent="sendData()" class="py-5 md:w-2/3">
        <div class="mb-5">
          <span class="block mb-2">
            Is your current physical address also your current mailing address?
          </span>
          <div class="flex gap-3">
            <label
              for="yes"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="yes"
                name="current_address_is_mailing"
                v-model="data.physical_address_is_malling_address_yes"
                :checked="data.physical_address_is_malling_address_yes"
                :value="data.physical_address_is_malling_address_yes ? false : true"
                @change="
                  data.physical_address_is_malling_address_yes
                    ? (data.physical_address_is_malling_address_no = false)
                    : (data.physical_address_is_malling_address_no = true)
                "
                required
              />
              <span>Yes</span>
            </label>

            <label
              for="no"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input
                type="radio"
                id="no"
                name="current_address_is_mailing"
                v-model="data.physical_address_is_malling_address_no"
                :checked="data.physical_address_is_malling_address_no"
                :value="data.physical_address_is_malling_address_no ? false : true"
                @change="
                  data.physical_address_is_malling_address_no
                    ? (data.physical_address_is_malling_address_yes = false)
                    : (data.physical_address_is_malling_address_yes = true)
                "
                required
              />
              <span>No</span>
            </label>
          </div>
        </div>

        <div class="" v-if="data.physical_address_is_malling_address_no === true">
          <label for="in_care_of" class="flex flex-col gap-2 mb-5">
            <span>In Care of Name (If any)</span>
            <input
              type="text"
              id="in_care_of"
              v-model="data.mailing_in_care_of_name"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="In Care of Name"
            />
          </label>

          <div class="flex items-end gap-5 mb-5">
            <label for="street_name" class="flex flex-col gap-2 w-1/2">
              <span>Street Number and Name</span>
              <input
                type="text"
                id="street_name"
                v-model="data.mailing_street_name_number"
                class="p-2 border focus:outline-primary rounded-md"
                placeholder="Street Number and Name"
                required
              />
            </label>

            <div class="w-1/2 flex gap-3 items-end">
              <div class="w-1/2 grid grid-cols-3 gap-2">
                <label
                  for="apt"
                  class="flex flex-col items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
                >
                  <span>Apt.</span>
                  <input type="checkbox" id="apt" :value="true" v-model="data.mailing_apt" />
                </label>

                <label
                  for="ste"
                  class="flex flex-col items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
                >
                  <span>Ste.</span>
                  <input type="checkbox" id="ste" :value="true" v-model="data.mailing_ste" />
                </label>

                <label
                  for="flr"
                  class="flex flex-col items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
                >
                  <span>Flr.</span>
                  <input type="checkbox" id="flr" :value="true" v-model="data.mailing_flr" />
                </label>
              </div>

              <label for="street_number" class="flex flex-col gap-2 w-1/2">
                <span>Number</span>
                <input
                  type="text"
                  id="street_number"
                  v-model="data.mailing_number"
                  class="p-2 border focus:outline-primary rounded-md"
                  placeholder="Number"
                  required
                />
              </label>
            </div>
          </div>

          <div class="flex gap-5 mb-5">
            <label for="postal_code" class="flex flex-col gap-2 w-1/2">
              <span>Postal Code</span>
              <input
                type="text"
                id="postal_code"
                v-model="data.mailing_postal_code"
                class="p-2 border focus:outline-primary rounded-md"
                placeholder="Postal Code"
              />
            </label>

            <label for="zip_code" class="flex flex-col gap-2 w-1/2">
              <span>Zip Code</span>
              <input
                type="text"
                id="zip_code"
                v-model="data.mailing_zip_code"
                class="p-2 border focus:outline-primary rounded-md"
                placeholder="Zip Code"
              />
            </label>
          </div>

          <div class="flex gap-5 mb-5">
            <label for="province" class="flex flex-col gap-2 w-1/2">
              <span>Province</span>
              <input
                type="text"
                id="province"
                v-model="data.mailing_province"
                class="p-2 border focus:outline-primary rounded-md"
                placeholder="Province"
              />
            </label>

            <label for="city" class="flex flex-col gap-2 md:w-1/2">
              <span>City or Town</span>
              <input
                type="text"
                id="city"
                v-model="data.mailing_city_town"
                class="p-2 border focus:outline-primary rounded-md"
                placeholder="City [eg. Brooklyn]"
                required
              />
            </label>
          </div>

          <div class="flex gap-5 mb-5">
            <label for="state" class="flex flex-col gap-2 md:w-1/2">
              <span>State</span>
              <select
                id="state"
                v-model="data.mailing_state"
                class="p-2 border focus:outline-primary rounded-md"
                placeholder="Please Select"
                required
              >
                <option selected disabled v-if="isEmpty(data.mailing_country)">
                  Select Country First
                </option>
                <option v-for="(state, index) in states!.states!" :key="index" :value="state.name">
                  {{ state.name }}
                </option>
              </select>
            </label>

            <label for="country" class="flex flex-col gap-2 w-1/2">
              <span>Country</span>
              <select
                id="country"
                v-model="data.mailing_country"
                class="p-2 border focus:outline-primary rounded-md"
                placeholder="Please Select your mailing country"
                required
              >
                <option v-for="(country, index) in COUNTRIES" :key="index" :value="country.name">
                  {{ country.name }}
                </option>
              </select>
            </label>
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
    </div>
  </section>
</template>
