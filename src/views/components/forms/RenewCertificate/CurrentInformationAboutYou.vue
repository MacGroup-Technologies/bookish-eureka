<script lang="ts" setup>
import { computed, ref, type Ref } from 'vue'
import { isEmpty, Omit } from 'lodash'


import { COUNTRIES_AND_STATES as COUNTRIES } from '@/utils/countries_and_state'
import AppButton from '@/components/Button.vue'

const emit = defineEmits(['next'])
const data: Ref<any> = ref({})

const sendData = function () {
  emit('next', data.value)
}
const states = computed(()=>{
    if (isEmpty(data.value.country)) {
      return []
    } else {
      return COUNTRIES.find((item) => item.name === data.value.country)
    }
}) 
</script>

<template>

    <section>
        <!-------------Heading text  ----------------->
        <h2 class="border-b font-bold text-2xl text-primary pb-2">
            Current Information About You
        </h2>
      
        <!-------------------Form  ------------------------>
         <form @submit.prevent="sendData" class="py-5 md:w-2/3">
            <!-----------form heading  ------------->
            <div class="text-red border-l-2 border-red px-2 mb-5">
             <b>NOTE: Your Full Legal Name (Do not provide a nickname).</b>
           </div>
           <!------------------------- form  ----------------->
           <label for="family_name" class="flex flex-col gap-2 mb-5">
          <span>Family Name (Last Name)</span>
          <input
            type="text"
            id="family_name"
            v-model="data.family_name"
            class="p-2 border focus:outline-primary rounded-md"
            placeholder="Family Name [eg. Rodriquez]"
            required
          />
        </label>

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

<!--------------------------other names used  ------------->
    <h2 class="font-bold pb-2">Other Names Used</h2>
    <div class="text-red border-l-2 border-red px-2 mb-5">
             <b>NOTE: Provide all other names you have ever used, including aliases, maiden name, and nicknames.  If you need extra space to complete this section, use the space provided in Part 12. Additional Information.</b>
    </div>
           <!----------------- other names set 1  -->

    <label for="other_family_name" class="flex flex-col gap-2 mb-5">
          <span>Family Name (Last Name)</span>
          <input
            type="text"
            id="other_family_name"
            v-model="data.Other_family_name"
            class="p-2 border focus:outline-primary rounded-md"
            placeholder="Family Name [eg. Rodriquez]"
            required
          />
        </label>

        <label for="other_given_name" class="flex flex-col gap-2 mb-5">
          <span>Given Name (First Name)</span>
          <input
            type="text"
            id="other_given_name"
            v-model="data.other_given_name"
            class="p-2 border focus:outline-primary rounded-md"
            placeholder="Given Name [eg. Pedro]"
            required
          />
        </label>

        <label for="other_middle_name" class="flex flex-col gap-2 mb-5">
          <span>Middle Name</span>
          <input
            type="text"
            id="other_middle_name"
            v-model="data.other_middle_name"
            class="p-2 border focus:outline-primary rounded-md"
            placeholder="Middle Name [eg. Juan]"
          />
        </label>

        <!----------------other names set 2  ---------------->
        <label for="other_family_name_two" class="flex flex-col gap-2 mb-5">
          <span>Family Name (Last Name)</span>
          <input
            type="text"
            id="other_family_name_two"
            v-model="data.Other_family_name_two"
            class="p-2 border focus:outline-primary rounded-md"
            placeholder="Family Name [eg. Rodriquez]"
            required
          />
        </label>

        <label for="other_given_name_two" class="flex flex-col gap-2 mb-5">
          <span>Given Name (First Name)</span>
          <input
            type="text"
            id="other_given_name_two"
            v-model="data.other_given_name_two"
            class="p-2 border focus:outline-primary rounded-md"
            placeholder="Given Name [eg. Pedro]"
            required
          />
        </label>

        <label for="other_middle_name_two" class="flex flex-col gap-2 mb-5">
          <span>Middle Name</span>
          <input
            type="text"
            id="other_middle_name_two"
            v-model="data.other_middle_name_two"
            class="p-2 border focus:outline-primary rounded-md"
            placeholder="Middle Name [eg. Juan]"
          />
        </label>

        <!--------------current mailing address -------------->
        <h2 class="font-bold pb-2">Current Mailing Address</h2>
        <label for="care_name" class="flex flex-col gap-2 mb-5">
          <span>In Care of Name</span>
          <input
            type="text"
            id="care_name"
            v-model="data.care_name"
            class="p-2 border focus:outline-primary rounded-md"
            placeholder="In Care of Name"
          />
        </label>

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
        </label>
<!----------------------apt ftr  ------------->
        <div class="flex gap-5 mb-5">
          <label for="apt" class="flex flex-col gap-2 w-1/6">
            <span>Apt.</span>
            <input
              type="text"
              id="apt"
              v-model="data.apt"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="02A"
              required
            />
          </label>

          <label for="street" class="flex flex-col gap-2 w-2/6">
            <span>Ste.</span>
            <input
              type="text"
              id="street"
              v-model="data.ste"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="Dover"
              required
            />
          </label>

          <label for="floor" class="flex flex-col gap-2 w-3/6">
            <span>Flr.</span>
            <input
              type="text"
              id="floor"
              v-model="data.flr"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="23"
              required
            />
          </label>
        </div>

        <!------------Number  --------------->
        <label for="number" class="flex flex-col gap-2 mb-5">
          <span>Number</span>
          <input
            type="text"
            id="number"
            v-model="data.number"
            class="p-2 border focus:outline-primary rounded-md"
            placeholder="Number"
            required
          />
        </label>

        <!--------------city or town, state and zipcode  ------------------->
        <div class="flex gap-5 mb-5">
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

          <!-------------state  -------------->
          <label for="state" class="flex flex-col gap-2 md:w-1/2">
            <span>State</span>
            <select
              id="state"
              v-model="data.state"
              class="p-2 border focus:outline-primary rounded-md"
              placeholder="Please Select"
              required
              :disabled="isEmpty(data.country)"
            >
              <option v-for="(state, index) in states!.states!" :key="index" :value="state.name">
                {{ state.name }}
              </option>
            </select>
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

        <!-----------province, postal code, country  ---------->
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

        </form>

            
    </section>
</template>