<script lang="ts" setup>
import { computed, ref, type Ref } from 'vue'
import { isEmpty } from 'lodash'


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
         <form @submit.prevent="sendData()" class="py-5 md:w-2/3">
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
        <div class="flex gap-3 ">
            <label
              for="apt"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input type="radio" 
              id="apt" 
              v-model="data.apt_ftr_ste"
               required />
              <span>Apt</span>
            </label>

           <label
              for="street"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input type="radio" 
              id="street" 
              v-model="data.apt_ftr_ste"
               required />
              <span>Ste</span>
            </label>
          <label
              for="floor"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input type="radio" 
              id="floor"
              v-model="data.apt_flr_ste"
               required />
              <span>Flr</span>
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

        <!-----------marital status  ------------>
        <span class="block mb-2">Has your marital status changed since your last document was issued? </span>
          <div class="flex gap-3 mb-2">
            <label
              for="marital_status_yes"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input type="radio" 
              id="marital_status_yes" value="yes" 
              name="marital_status" 
              v-model="data.marital_status"
               required />
              <span>Yes</span>
            </label>

            <label
              for="marital_staus_no"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input type="radio" 
               id="marital_staus_no" value="No" 
               name="marital_status"
               v-model="data.marital_staus" 
               required />
              <span>No</span>
            </label>
          </div>

          <!---------- marital status yes -------------->
       <div v-if="data.marital_status === 'yes'" id="5a">
        <div class="text-red border-l-2 border-red px-2 mb-5">
          <span class="block mb-2 font-bold"
            >Provide your current marital status and attach a copy of your marriage certificate, annulment decree, divorce decree, or spouse's death certificate.</span
          >
        </div>
          <span class="block mb-2">Your Current Marital Status </span>
          <div class="mt-5 flex gap-3">
          <label
              for="marital_status_single"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input type="radio" 
              id="marital_status_single"  
              name="updated_marital_status" 
              v-model="data.updated_marital_status"
               required />
              <span>Single</span>
            </label>
<!--------------------------married  -------------->
            <label
              for="marital_status_married"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input type="radio" 
              id="marital_status_married"  
              name="updated_marital_status" 
              v-model="data.updated_marital_status"
               required />
              <span>Married</span>
            </label>
        <!---------------------divorced  ------->
        <label
              for="marital_status_divorced"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input type="radio" 
              id="marital_status_divorced"  
              name="updated_marital_status" 
              v-model="data.updated_marital_status"
               required />
              <span>Divorced</span>
            </label>
        </div>
        <!---------------------widowed  ------->

        <div class="mt-5 flex gap-3">
        <label
              for="marital_status_widowed"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input type="radio" 
              id="marital_status_widowed"  
              name="updated_marital_status" 
              v-model="data.updated_marital_status"
               required />
              <span>Widowed</span>
            </label>
        <!---------------------Marriage Annulled  ------->
        <label
              for="marital_status_marriage Annulled"
              class="flex items-center gap-2 border py-1 px-5 rounded-md cursor-pointer"
            >
              <input type="radio" 
              id="marital_status_marriage Annulled"  
              name="updated_marital_status" 
              v-model="data.updated_marital_status"
               required />
              <span>Marriage Annulled</span>
            </label>



          </div>
        </div>

        <!----------FIX: LINK SECTION TO PART  ----------->
        <span class="block mb-2">Since becoming a U.S. citizen, have you lost or renounced your U.S. citizenship in any manner?</span>
        <div class="text-red border-l-2 border-red px-2 mb-5">
             <b>NOTE:Provide an explanation or attach a seperate sheet of paper</b>
        </div>
          <div class="flex gap-3 mb-2">
            <label
              for="us_citizen_yes"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input type="radio" 
              id="us_citizen_yes" value="yes" 
              name="us_citizen" 
              v-model="data.us_citizen"
               required />
              <span>Yes</span>
            </label>

            <label
              for="us_citizen_no"
              class="flex items-center gap-2 border py-1 px-3 rounded-md cursor-pointer"
            >
              <input type="radio" 
               id="us_citizen_no" value="No" 
               name="us_citizen"
               v-model="data.us_citizen" 
               required />
              <span>No</span>
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