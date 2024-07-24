<script lang="ts" setup>
import { computed, ref, type Ref } from 'vue'
import { isEmpty } from 'lodash'

import AppButton from '@/components/Button.vue'
import { COUNTRIES_AND_STATES as COUNTRIES } from '@/utils/countries_and_state'

const props = defineProps<{
  tab: string
}>()

const emit = defineEmits(['add-tabs', 'next'])

const data: Ref<any> = ref({})

const sendData = function () {
  emit('next', data.value)
}
const states = computed(() => {
  if (isEmpty(data.value.country)) {
    return []
  } else {
    return COUNTRIES.find((item) => item.name === data.value.country)
  }
})
</script>

<template>
  <section>
    <div class="" v-if="tab === 'statement'">
      <h2 class="border-b font-bold text-2xl text-primary pb-2">
        Applicant's Statement
      </h2>
      <div class="text-red border-l-2 border-red px-2 mb-3">
            <b
              >NOTE:  Read the Penalties section of the Form N-565 Instructions before completing this section. </b>
      </div>
          <div class="text-red border-l-2 border-red px-2 mb-3">
            <b>
                NOTE: By signing this application, you state under penalty of perjury (28 U.S.C. section 1746) that all information and documentation submitted with this application is complete, true, and correct.  You also authorize the release of any information from your records that USCIS may need to determine your eligibility for the immigration benefit you are seeking and consent to USCIS verifying such information. 
              </b>
          </div>
          <div class="text-red border-l-2 border-red px-2 mb-5">
            <b>Note: The Department of Homeland Security (DHS) has the authority to verify any information you submit to establish eligibility for the immigration benefit you are seeking at any time.  USCIS' legal authority to verify this information is in 8 U.S.C. sections 1103 and 1454 and 8 CFR parts 103 and 338.  To ensure compliance with applicable laws and authorities, USCIS may verify information before or after your case is decided.</b>
          </div>

      <form @submit.prevent="emit('add-tabs', 'contact')" class="py-5 md:w-2/3">
        <div class="mt-2 flex flex-col gap-3">
            <div class="text-red border-l-2 border-red px-2 mb-3">
            <b>NOTE: Select the box for either A or B in Item Number 1.  If not applicable, select the Applicant's Statement Regarding the Preparer box. </b>
      </div>
      <span class="block font-bold mb-5">
        <span class="block font-bold mb-5">Select all applicable boxes and provide explanations where requested.</span>

      </span>

       <label
        for="applicants_statement"
        class="flex items-center gap-2 border mb-3 py-1 px-3 rounded-md cursor-pointer w-full">
            <input
              type="radio"
              id="applicants_statement"
              name="applicants_statement"
              v-model="data.applicants_statement"
              required
            />
            <span>I can read and understand English, and I have read and understood every question and instruction on this application and my answer to every question</span>
          </label>

        <label
        for="applicants_statement"
        class="flex items-center gap-2 border mb-3 py-1 px-3 rounded-md cursor-pointer w-full">
            <input
              type="radio"
              id="applicants_statement"
              name="application"
              v-model="data.applicants_statement"
              required
            />
            <span class="block">The interpreter read every question, instruction and my answer to every question on this application to me in
              <input
                type="text"
                id="language"
                v-model="data.applicants_statement"
                class="p-2 border focus:outline-primary rounded-md"
                placeholder="Name of Language"
                required
              />
              , a language in which I am fluent, and I understood everything
         </span>
          </label>

          <!--------Number 2  --------------->
          <span class="block">Applicant's Statement Regarding the Preparer</span>
          <label
        for="regarding_the_preparer"
        class="flex items-center gap-2 border mb-3 py-1 px-3 rounded-md cursor-pointer w-full">
            <input
              type="radio"
              id="regarding_the_preparer"
              name="regarding_the_preparer"
              v-model="data.regarding_the_preparer"
              required
            />
            <span>At my request the preparer
              <input
                type="text"
                id="language"
                v-model="data.regarding_the_preparer"
                class="p-2 border focus:outline-primary rounded-md"
                placeholder="Name of the Preparer"
                required
              />
              prepared this application for me based only on the information I provided or authorized
         </span>
          </label>
        </div>
        
        <!-------btn for application prepare and interpreter tab ------->
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

    <!----------------  applicant's contact information  ------------->
    <div class="" v-else-if="tab === 'contact'">
      <h2 class="border-b font-bold text-2xl text-primary pb-2">
        Applicant's Contact Information
      </h2>
      <form @submit.prevent="emit('add-tabs', 'certification')" class="py-5 md:w-2/3">
        <div class="flex flex-col gap-3 items-start mb-5">
        <!----------daytime tel number --------->
          <label for="telephone_number" class="flex flex-col gap-2 w-full mb-5">
          <span>Applicant's Daytime Telephone Number</span>
          <input
            type="number"
            id="telephone_number"
            v-model="data.telephone_number"
            class="p-2 border focus:outline-primary rounded-md"
            placeholder="Telephone Number"
            required
          />
        </label>

        <!------ mobile tel number ------------->
        <label for="mobile_telephone_number" class="flex flex-col w-full gap-2 mb-5">
          <span>Applicant's Mobile Telephone Number (if any)</span>
          <input
            type="number"
            id="mobile_telephone_number"
            v-model="data.mobile_telephone_number"
            class="p-2 border focus:outline-primary rounded-md"
            placeholder="Mobile Telephone Number"
            required
          />
        </label>

          <!------ email address ------------->
          <label for="email_address" class="flex flex-col w-full gap-2 mb-5">
          <span>Applicant's Email Address (if any)</span>
          <input
            type="email"
            id="email_address"
            v-model="data.email_address"
            class="p-2 border focus:outline-primary rounded-md"
            placeholder="Email Address"
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

        <!----------------  applicant's certification  ------------->
    <div class="" v-else-if="tab === 'certification'">
      <h2 class="border-b font-bold text-2xl text-primary pb-2">
        Applicant's Certification
      </h2>
      <form @submit.prevent="emit('add-tabs', 'signature')" class="py-5 md:w-2/3">
        <div class="flex flex-col gap-3 items-start mb-5">
          <p class="">
            Copies of any documents I have submitted are exact photocopies of unaltered, original documents, and I understand that USCIS may require that I submit original documents to USCIS at a later date.  Furthermore, I authorize the release of any information from any and all of my records that USCIS may need to determine my eligibility for the immigration benefit that I seek.
          </p>
          <p class="font-bold">
            I furthermore authorize release of information contained in this application, in supporting documents, and in my USCIS records, to other entities and persons where necessary for the administration and enforcement of U.S. immigration law.
          </p>
          <div>
            <p>I understand that USCIS may require me to appear for an appointment to take my biometrics and, if I am required to appear, I will be required to sign an oath reaffirming that: </p>
            <ol class="m-3 leading-loose">
              <li><span class="m-2">1.</span>  I reviewed and provided or authorized all of the information in my application</li>
              <li><span class="m-2">2.</span>  I understood all of the information contained in, and submitted with, my application and,</li>
              <li><span class="m-2">3.</span> All of this information was complete, true, and correct at the time of filing</li>
            </ol>
          </div>

           <!-----------i certify-->
        <label
            for="certify"
            class="flex items-center gap-3 border py-1 px-3 rounded-md cursor-pointer "
          >
            <input type="checkbox"
             id="certify"
             v-model="data.certify"
             required />
            <span>I certify, under penalty of perjury, that I provided or authorized all of the information in my application, I understand all of the information contained in, and submitted with, my application, and that all of this information is complete, true, and correct.</span>
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

      <!--------applicant signature ---------->
    <div class="" v-else-if="tab === 'signature'">
      <h2 class="border-b font-bold text-2xl text-primary pb-2">Applicant's Signature</h2>
      <form @submit.prevent="sendData()" class="py-5 md:w-2/3">
        <!------- signature -------->
        <label for="signature" class="flex flex-col gap-2 mb-5">
          <span>Applicant's Signature</span>
          <input
            type="text"
            id="signature"
            v-model="data.signature"
            class="p-2 border focus:outline-primary rounded-md"
            placeholder="Signature"
          />
        </label>

        <!------date of signature ------>
        <label for="date_of_signature" class="flex flex-col gap-2 ">
          <span>Date of Signature</span>
          <input
            type="date"
            id="date_of_signature"
            v-model="data.date_of_signature"
            class="p-2 border focus:outline-primary rounded-md"
            required
          />
        </label>
      </form>
    </div>

  </section>
</template>
