<script lang="ts" setup>
import { ref, type Ref, computed } from 'vue'
import { isEmpty, omit } from 'lodash'

import { COUNTRIES_AND_STATES as COUNTRIES } from '@/utils/countries_and_state'

import AppButton from '@/components/Button.vue'

const props = defineProps<{
  tab: string
}>()

const emit = defineEmits(['update-tab', 'next'])
const data: Ref<any> = ref({})

const states = computed(() => {
  if (props.tab === 'mailing') {
    if (isEmpty(data.value.country)) {
      return []
    } else {
      return COUNTRIES.find((item) => item.name === data.value.country)
    }
  } else {
    if (isEmpty(data.value.physical_country)) {
      return []
    } else {
      return COUNTRIES.find((item) => item.name === data.value.physical_country)
    }
  }
})

const sendData = function () {
  const payload = omit(data.value, ['understand_english'])

  switch (data.value.understand_english) {
    case 'yes':
      payload.applicant_able_understand_english = true
      break;
    case 'no':
      payload.applicant_request_interpreter = true
      break;
  
    default:
      break;
  }

  emit('next', payload)
}
</script>
<template>
  <section>
    {{ tab }}
    <div class="" v-if="tab === 'statement'">
      <h2 class="border-b font-bold text-2xl text-primary pb-2">Applicant Statement</h2>
      <form @submit.prevent="emit('update-tab', 'contact')" class="py-5 md:w-2/3">
        <div class="mb-5">
          <div class="flex flex-col gap-3">

            <label
              for="yes"
              class="flex items-start gap-2 border-t p-3 cursor-pointer"
            >
              <input
                type="radio"
                id="yes"
                value="yes"
                name="understand_english"
                v-model="data.understand_english"
                required
              />
              <div>
                I can read and understand English, and I have read and understand every question and instruction on this application and my answer to every question.
              </div>
            </label>

            <label
              for="no"
              class="flex items-start gap-2 border-t p-3 cursor-pointer"
            >
              <input
                type="radio"
                id="no"
                value="no"
                name="understand_english"
                v-model="data.understand_english"
                required
              />
              <div>
                The interpreter named in the <b>next section</b> read to me every question and instruction on this application and my answer to every question in
                <input type="text" class="border rounded-sm p-1" placeholder="Language of Interpreter" v-model="data.interpreter_read_language" />
                a language in which I am fluent and I understood everything
              </div>
            </label>
          </div>
        </div>

        <div class="mb-5">
          <div class="flex flex-col gap-3">

            <label
              for="my_request_true"
              class="flex items-start gap-2 border-t p-3 cursor-pointer"
            >
              <input
                type="radio"
                id="my_request_true"
                :value="true"
                name="my_request"
                v-model="data.my_request"
                required
              />
              <div>
                At my request, the preparer named,
                <input type="text" class="border rounded-sm p-1" placeholder="Name of Document Preparer" v-model="data.my_request_name" />
                prepared this application for me based only upon information I provided or authorized.
              </div>
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
    
    <div class="" v-else-if="tab === 'contact'">
      <h2 class="border-b font-bold text-2xl text-primary pb-2">Applicant Contact</h2>
      <form @submit.prevent="emit('update-tab', 'certification')" class="py-5 md:w-2/3">
        <label for="tel_number" class="flex flex-col gap-2 mb-5">
          <span>Applicant's Daytime Telephone Number</span>
          <input
            type="tel"
            id="tel_number"
            v-model="data.applicant_contact_phone_number"
            class="p-2 border focus:outline-primary rounded-md"
            placeholder="Applicant's Daytime Telephone Number"
            required
          />
        </label>

        <label for="mobile_number" class="flex flex-col gap-2 mb-5">
          <span>Applicant's Mobile Telephone Number (if any)</span>
          <input
            type="tel"
            id="mobile_number"
            v-model="data.applicant_contact_mobile_number"
            class="p-2 border focus:outline-primary rounded-md"
            placeholder="Applicant's Mobile Telephone Number (if any)"
          />
        </label>

        <label for="email" class="flex flex-col gap-2 mb-5">
          <span>Applicant's Email Address (if any)</span>
          <input
            type="email"
            id="email"
            v-model="data.applicant_contact_email"
            class="p-2 border focus:outline-primary rounded-md"
            placeholder="john.doe@mail.com"
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

    <div class="" v-else-if="tab === 'certification'">
      <h2 class="border-b font-bold text-2xl text-primary pb-2">Applicant Certification</h2>

      <div class="py-5 md:w-2/3">
        <div class="">
          Copies of any documents I have submitted are exact 
          photocopies of unaltered, original documents, and I understand 
          that USCIS may require that I submit original documents to 
          USCIS at a later date. Furthermore, I authorize the release of 
          any information from any of my records that USCIS may need 
          to determine my eligibility for the immigration benefit I seek.
        </div>

        <div class="my-2">
          I further authorize release of information contained in this 
          application, in supporting documents, and in my USCIS records 
          to other entities and persons where necessary for the 
          administration and enforcement of U.S. immigration laws.
        </div>

        <div class="">
          I understand that USCIS will require me to appear for an 
          appointment to take my biometrics (fingerprints, photograph, 
          and/or signature) and, at that time, I will be required to sign an 
          oath reaffirming that:

          <ol class="list-decimal list-inside ml-3">
            <li>
              I reviewed and provided or authorized all of the 
              information in my application;
            </li>
            <li>
               I understood all of the information contained in, and 
               submitted with, my application; and
            </li>
            <li>
              All of this information was complete, true, and correct 
              at the time of filing.
            </li>
          </ol>
        </div>

        <div class="my-2">
          I certify, under penalty of perjury, that I provided or authorized 
          all of the information in my application, I understand all of the 
          information contained in, and submitted with, my application, 
          and that all of this information is complete, true, and correct.
        </div>

        <AppButton
          @click="emit('update-tab', 'signature')"
          type="solid"
          size="large"
          color="primary"
          class="mt-5 bg-primary text-white"
        >
          Agree & Continue
        </AppButton>
      </div>
    </div>

    <div class="" v-else-if="tab === 'signature'">
      <h2 class="border-b font-bold text-2xl text-primary pb-2">Applicant Signature</h2>
      <form @submit.prevent="sendData()" class="py-5 md:w-2/3">
        <label for="signature" class="flex flex-col gap-2 mb-5">
          <span>Applicant's Signature</span>
          <input
            type="text"
            id="signature"
            class="p-2 border focus:outline-primary rounded-md"
            placeholder="Applicant's Signature"
          />
        </label>

        <label for="signature_date" class="flex flex-col gap-2 mb-5">
          <span>Date of Signature</span>
          <input
            type="date"
            id="signature_date"
            v-model="data.applicant_signature_date"
            class="p-2 border focus:outline-primary rounded-md"
            placeholder="Date of Signature"
            required
          />
        </label>

        <div class="text-red border-l-2 border-red px-2 mb-5">
          <b>NOTE TO ALL APPLICANTS:</b> If you do not completely fill 
          out this application or fail to submit required documents listed 
          in the Instructions, USCIS may deny your application.
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
