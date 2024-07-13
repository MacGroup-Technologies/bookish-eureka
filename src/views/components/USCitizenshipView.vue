<script lang="ts" setup>
import { ref, watch, computed, type Ref } from 'vue'
import { isEmpty } from 'lodash'

import { useNotification } from '@kyvg/vue3-notification'
import { submit_i90 } from './services/forms'

import AppButton from '@/components/Button.vue'

import InformationAboutYourEligibility from './forms/USCitizenship/InformationAboutYourEligibility.vue'

import ApplicationType from './forms/greenCardRenewal/ApplicationType.vue'
import ProcessingInformation from './forms/greenCardRenewal/ProcessingInformation.vue'
import Accomodations from './forms/greenCardRenewal/Accomodations.vue'
import ApplicantStatement from './forms/greenCardRenewal/ApplicantStatement.vue'
import InterpreterContactInformation from './forms/greenCardRenewal/InterpreterContactInformation.vue'

const { notify } = useNotification()

const accordion = ref(1)
const tab = ref('name')
const formData: Ref<any> = ref({})
const downloadUrl = ref('')

const component = computed(() => {
  switch (accordion.value) {
    case 1:
      return InformationAboutYourEligibility
    case 2:
      return ApplicationType
    case 3:
      return ProcessingInformation
    case 4:
      return Accomodations
    case 5:
      return ApplicantStatement
    case 6:
      return InterpreterContactInformation
    default:
      return ''
  }
})

const updateTab = function (newTab: string) {
  tab.value = newTab
}

const handleNextSection = function (data: any) {
  console.log(data)
  formData.value = { ...formData.value, ...data }
  if (accordion.value === 6) {
    submitForm()
  } else {
    accordion.value++
  }
}

const submitForm = async function () {
  console.log('Form submitted with: ', formData.value)
  try {
    const response: any = await submit_i90(formData.value)

    notify({
      title: 'Success!',
      text: response.data.data.message,
      type: 'success'
    })

    downloadUrl.value = response.data.data.download_url
  } catch (error: any) {
    notify({
      title: 'An error occurred',
      text: error.response.data.message ?? error.message,
      type: 'error'
    })
    console.log(error)
  }
}

watch(accordion, () => {
  switch (accordion.value) {
    case 1:
      tab.value = ''
      break
    case 2:
      tab.value = 'status'
      break
    case 3:
      tab.value = 'processing'
      break
    case 4:
      tab.value = 'disabilities'
      break
    case 5:
      tab.value = 'statement'
      break
    case 6:
      tab.value = 'interpreter-fullname'
      break
    default:
      break
  }
})
</script>

<template>
  <section class="rounded-md overflow-hidden">
    <div class="text-white font-bold text-xl bg-primary p-5">
      Application for Naturalization [N-400]
    </div>

    <div class="flex items-start md:h-[80vh] overflow-auto" v-if="isEmpty(downloadUrl)">
      <div class="hidden md:block md:w-1/4">
        <div
          class="bg-primary-10 text-grey font-semibold p-3 flex items-center justify-between cursor-pointer text-lg"
          :class="{ '!bg-primary text-white': accordion === 1 }"
          @click="accordion = 1"
        >
          Information About Your Eligibility
          <svg
            width="30"
            height="31"
            viewBox="0 0 30 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.6159 24.2004C11.3815 23.966 11.2499 23.6481 11.2499 23.3167C11.2499 22.9852 11.3815 22.6673 11.6159 22.4329L18.2321 15.8167L11.6159 9.20042C11.4965 9.08512 11.4012 8.94718 11.3357 8.79468C11.2702 8.64217 11.2357 8.47815 11.2343 8.31217C11.2329 8.1462 11.2645 7.9816 11.3273 7.82798C11.3902 7.67436 11.483 7.5348 11.6004 7.41743C11.7177 7.30006 11.8573 7.20725 12.0109 7.1444C12.1645 7.08154 12.3291 7.04992 12.4951 7.05136C12.6611 7.0528 12.8251 7.08729 12.9776 7.1528C13.1301 7.21831 13.2681 7.31353 13.3834 7.43292L20.8834 14.9329C21.1177 15.1673 21.2493 15.4852 21.2493 15.8167C21.2493 16.1481 21.1177 16.466 20.8834 16.7004L13.3834 24.2004C13.149 24.4348 12.8311 24.5664 12.4996 24.5664C12.1682 24.5664 11.8503 24.4348 11.6159 24.2004Z"
              fill="currentColor"
            />
          </svg>
        </div>

        <div
          class="bg-primary-10 text-grey font-semibold p-3 flex items-center justify-between cursor-pointer text-lg"
          :class="{ '!bg-primary text-white': accordion === 2 }"
          @click="accordion = 2"
        >
          Application Type
          <svg
            :class="{ 'rotate-90': accordion === 2 }"
            width="30"
            height="31"
            viewBox="0 0 30 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.6159 24.2004C11.3815 23.966 11.2499 23.6481 11.2499 23.3167C11.2499 22.9852 11.3815 22.6673 11.6159 22.4329L18.2321 15.8167L11.6159 9.20042C11.4965 9.08512 11.4012 8.94718 11.3357 8.79468C11.2702 8.64217 11.2357 8.47815 11.2343 8.31217C11.2329 8.1462 11.2645 7.9816 11.3273 7.82798C11.3902 7.67436 11.483 7.5348 11.6004 7.41743C11.7177 7.30006 11.8573 7.20725 12.0109 7.1444C12.1645 7.08154 12.3291 7.04992 12.4951 7.05136C12.6611 7.0528 12.8251 7.08729 12.9776 7.1528C13.1301 7.21831 13.2681 7.31353 13.3834 7.43292L20.8834 14.9329C21.1177 15.1673 21.2493 15.4852 21.2493 15.8167C21.2493 16.1481 21.1177 16.466 20.8834 16.7004L13.3834 24.2004C13.149 24.4348 12.8311 24.5664 12.4996 24.5664C12.1682 24.5664 11.8503 24.4348 11.6159 24.2004Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div class="" v-show="accordion === 2">
          <div
            class="bg-primary-10 text-grey font-semibold p-3 flex items-center justify-between cursor-pointer border-b"
            :class="{ '!text-primary': tab === 'status' }"
            @click="tab = 'status'"
          >
            Status
            <svg
              width="30"
              height="31"
              viewBox="0 0 30 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6159 24.2004C11.3815 23.966 11.2499 23.6481 11.2499 23.3167C11.2499 22.9852 11.3815 22.6673 11.6159 22.4329L18.2321 15.8167L11.6159 9.20042C11.4965 9.08512 11.4012 8.94718 11.3357 8.79468C11.2702 8.64217 11.2357 8.47815 11.2343 8.31217C11.2329 8.1462 11.2645 7.9816 11.3273 7.82798C11.3902 7.67436 11.483 7.5348 11.6004 7.41743C11.7177 7.30006 11.8573 7.20725 12.0109 7.1444C12.1645 7.08154 12.3291 7.04992 12.4951 7.05136C12.6611 7.0528 12.8251 7.08729 12.9776 7.1528C13.1301 7.21831 13.2681 7.31353 13.3834 7.43292L20.8834 14.9329C21.1177 15.1673 21.2493 15.4852 21.2493 15.8167C21.2493 16.1481 21.1177 16.466 20.8834 16.7004L13.3834 24.2004C13.149 24.4348 12.8311 24.5664 12.4996 24.5664C12.1682 24.5664 11.8503 24.4348 11.6159 24.2004Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <div
            class="bg-primary-10 text-grey font-semibold p-3 flex items-center justify-between cursor-pointer border-b"
            :class="{ '!text-primary': tab === 'reason-a' }"
            @click="tab = 'reason-a'"
          >
            Reason for Application (Section A)
            <svg
              width="30"
              height="31"
              viewBox="0 0 30 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6159 24.2004C11.3815 23.966 11.2499 23.6481 11.2499 23.3167C11.2499 22.9852 11.3815 22.6673 11.6159 22.4329L18.2321 15.8167L11.6159 9.20042C11.4965 9.08512 11.4012 8.94718 11.3357 8.79468C11.2702 8.64217 11.2357 8.47815 11.2343 8.31217C11.2329 8.1462 11.2645 7.9816 11.3273 7.82798C11.3902 7.67436 11.483 7.5348 11.6004 7.41743C11.7177 7.30006 11.8573 7.20725 12.0109 7.1444C12.1645 7.08154 12.3291 7.04992 12.4951 7.05136C12.6611 7.0528 12.8251 7.08729 12.9776 7.1528C13.1301 7.21831 13.2681 7.31353 13.3834 7.43292L20.8834 14.9329C21.1177 15.1673 21.2493 15.4852 21.2493 15.8167C21.2493 16.1481 21.1177 16.466 20.8834 16.7004L13.3834 24.2004C13.149 24.4348 12.8311 24.5664 12.4996 24.5664C12.1682 24.5664 11.8503 24.4348 11.6159 24.2004Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <div
            class="bg-primary-10 text-grey font-semibold p-3 flex items-center justify-between cursor-pointer border-b"
            :class="{ '!text-primary': tab === 'reason-b' }"
            @click="tab = 'reason-b'"
          >
            Reason for Application (Section B)
            <svg
              width="30"
              height="31"
              viewBox="0 0 30 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6159 24.2004C11.3815 23.966 11.2499 23.6481 11.2499 23.3167C11.2499 22.9852 11.3815 22.6673 11.6159 22.4329L18.2321 15.8167L11.6159 9.20042C11.4965 9.08512 11.4012 8.94718 11.3357 8.79468C11.2702 8.64217 11.2357 8.47815 11.2343 8.31217C11.2329 8.1462 11.2645 7.9816 11.3273 7.82798C11.3902 7.67436 11.483 7.5348 11.6004 7.41743C11.7177 7.30006 11.8573 7.20725 12.0109 7.1444C12.1645 7.08154 12.3291 7.04992 12.4951 7.05136C12.6611 7.0528 12.8251 7.08729 12.9776 7.1528C13.1301 7.21831 13.2681 7.31353 13.3834 7.43292L20.8834 14.9329C21.1177 15.1673 21.2493 15.4852 21.2493 15.8167C21.2493 16.1481 21.1177 16.466 20.8834 16.7004L13.3834 24.2004C13.149 24.4348 12.8311 24.5664 12.4996 24.5664C12.1682 24.5664 11.8503 24.4348 11.6159 24.2004Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>

        <div
          class="bg-primary-10 text-grey font-semibold p-3 flex items-center justify-between cursor-pointer text-lg"
          :class="{ '!bg-primary text-white': accordion === 3 }"
          @click="accordion = 3"
        >
          Processing Information
          <svg
            :class="{ 'rotate-90': accordion === 3 }"
            width="30"
            height="31"
            viewBox="0 0 30 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.6159 24.2004C11.3815 23.966 11.2499 23.6481 11.2499 23.3167C11.2499 22.9852 11.3815 22.6673 11.6159 22.4329L18.2321 15.8167L11.6159 9.20042C11.4965 9.08512 11.4012 8.94718 11.3357 8.79468C11.2702 8.64217 11.2357 8.47815 11.2343 8.31217C11.2329 8.1462 11.2645 7.9816 11.3273 7.82798C11.3902 7.67436 11.483 7.5348 11.6004 7.41743C11.7177 7.30006 11.8573 7.20725 12.0109 7.1444C12.1645 7.08154 12.3291 7.04992 12.4951 7.05136C12.6611 7.0528 12.8251 7.08729 12.9776 7.1528C13.1301 7.21831 13.2681 7.31353 13.3834 7.43292L20.8834 14.9329C21.1177 15.1673 21.2493 15.4852 21.2493 15.8167C21.2493 16.1481 21.1177 16.466 20.8834 16.7004L13.3834 24.2004C13.149 24.4348 12.8311 24.5664 12.4996 24.5664C12.1682 24.5664 11.8503 24.4348 11.6159 24.2004Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div class="" v-show="accordion === 3">
          <div
            class="bg-primary-10 text-grey font-semibold p-3 flex items-center justify-between cursor-pointer border-b"
            :class="{ '!text-primary': tab === 'processing' }"
            @click="tab = 'processing'"
          >
            Processing Information
            <svg
              width="30"
              height="31"
              viewBox="0 0 30 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6159 24.2004C11.3815 23.966 11.2499 23.6481 11.2499 23.3167C11.2499 22.9852 11.3815 22.6673 11.6159 22.4329L18.2321 15.8167L11.6159 9.20042C11.4965 9.08512 11.4012 8.94718 11.3357 8.79468C11.2702 8.64217 11.2357 8.47815 11.2343 8.31217C11.2329 8.1462 11.2645 7.9816 11.3273 7.82798C11.3902 7.67436 11.483 7.5348 11.6004 7.41743C11.7177 7.30006 11.8573 7.20725 12.0109 7.1444C12.1645 7.08154 12.3291 7.04992 12.4951 7.05136C12.6611 7.0528 12.8251 7.08729 12.9776 7.1528C13.1301 7.21831 13.2681 7.31353 13.3834 7.43292L20.8834 14.9329C21.1177 15.1673 21.2493 15.4852 21.2493 15.8167C21.2493 16.1481 21.1177 16.466 20.8834 16.7004L13.3834 24.2004C13.149 24.4348 12.8311 24.5664 12.4996 24.5664C12.1682 24.5664 11.8503 24.4348 11.6159 24.2004Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <div
            class="bg-primary-10 text-grey font-semibold p-3 flex items-center justify-between cursor-pointer border-b"
            :class="{ '!text-primary': tab === 'biographic' }"
            @click="tab = 'biographic'"
          >
            Biographic Information
            <svg
              width="30"
              height="31"
              viewBox="0 0 30 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6159 24.2004C11.3815 23.966 11.2499 23.6481 11.2499 23.3167C11.2499 22.9852 11.3815 22.6673 11.6159 22.4329L18.2321 15.8167L11.6159 9.20042C11.4965 9.08512 11.4012 8.94718 11.3357 8.79468C11.2702 8.64217 11.2357 8.47815 11.2343 8.31217C11.2329 8.1462 11.2645 7.9816 11.3273 7.82798C11.3902 7.67436 11.483 7.5348 11.6004 7.41743C11.7177 7.30006 11.8573 7.20725 12.0109 7.1444C12.1645 7.08154 12.3291 7.04992 12.4951 7.05136C12.6611 7.0528 12.8251 7.08729 12.9776 7.1528C13.1301 7.21831 13.2681 7.31353 13.3834 7.43292L20.8834 14.9329C21.1177 15.1673 21.2493 15.4852 21.2493 15.8167C21.2493 16.1481 21.1177 16.466 20.8834 16.7004L13.3834 24.2004C13.149 24.4348 12.8311 24.5664 12.4996 24.5664C12.1682 24.5664 11.8503 24.4348 11.6159 24.2004Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>

        <div
          class="bg-primary-10 text-grey font-semibold p-3 flex items-center justify-between cursor-pointer text-lg"
          :class="{ '!bg-primary text-white': accordion === 4 }"
          @click="accordion = 4"
        >
          Accomodations for Individuals with Disabilities and/or Impairements
          <svg
            :class="{ 'rotate-90': accordion === 4 }"
            width="30"
            height="31"
            viewBox="0 0 30 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.6159 24.2004C11.3815 23.966 11.2499 23.6481 11.2499 23.3167C11.2499 22.9852 11.3815 22.6673 11.6159 22.4329L18.2321 15.8167L11.6159 9.20042C11.4965 9.08512 11.4012 8.94718 11.3357 8.79468C11.2702 8.64217 11.2357 8.47815 11.2343 8.31217C11.2329 8.1462 11.2645 7.9816 11.3273 7.82798C11.3902 7.67436 11.483 7.5348 11.6004 7.41743C11.7177 7.30006 11.8573 7.20725 12.0109 7.1444C12.1645 7.08154 12.3291 7.04992 12.4951 7.05136C12.6611 7.0528 12.8251 7.08729 12.9776 7.1528C13.1301 7.21831 13.2681 7.31353 13.3834 7.43292L20.8834 14.9329C21.1177 15.1673 21.2493 15.4852 21.2493 15.8167C21.2493 16.1481 21.1177 16.466 20.8834 16.7004L13.3834 24.2004C13.149 24.4348 12.8311 24.5664 12.4996 24.5664C12.1682 24.5664 11.8503 24.4348 11.6159 24.2004Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div class="" v-show="accordion === 4">
          <div
            class="bg-primary-10 text-grey font-semibold p-3 flex items-center justify-between cursor-pointer border-b"
            :class="{ '!text-primary': tab === 'disabilities' }"
            @click="tab = 'disabilities'"
          >
            Disablities and/or Impairment
            <svg
              width="30"
              height="31"
              viewBox="0 0 30 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6159 24.2004C11.3815 23.966 11.2499 23.6481 11.2499 23.3167C11.2499 22.9852 11.3815 22.6673 11.6159 22.4329L18.2321 15.8167L11.6159 9.20042C11.4965 9.08512 11.4012 8.94718 11.3357 8.79468C11.2702 8.64217 11.2357 8.47815 11.2343 8.31217C11.2329 8.1462 11.2645 7.9816 11.3273 7.82798C11.3902 7.67436 11.483 7.5348 11.6004 7.41743C11.7177 7.30006 11.8573 7.20725 12.0109 7.1444C12.1645 7.08154 12.3291 7.04992 12.4951 7.05136C12.6611 7.0528 12.8251 7.08729 12.9776 7.1528C13.1301 7.21831 13.2681 7.31353 13.3834 7.43292L20.8834 14.9329C21.1177 15.1673 21.2493 15.4852 21.2493 15.8167C21.2493 16.1481 21.1177 16.466 20.8834 16.7004L13.3834 24.2004C13.149 24.4348 12.8311 24.5664 12.4996 24.5664C12.1682 24.5664 11.8503 24.4348 11.6159 24.2004Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>

        <div
          class="bg-primary-10 text-grey font-semibold p-3 flex items-center justify-between cursor-pointer text-lg"
          :class="{ '!bg-primary text-white': accordion === 5 }"
          @click="accordion = 5"
        >
          Applicant's Statement, Contact Information, Certification, and Signature
          <svg
            :class="{ 'rotate-90': accordion === 5 }"
            width="30"
            height="31"
            viewBox="0 0 30 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.6159 24.2004C11.3815 23.966 11.2499 23.6481 11.2499 23.3167C11.2499 22.9852 11.3815 22.6673 11.6159 22.4329L18.2321 15.8167L11.6159 9.20042C11.4965 9.08512 11.4012 8.94718 11.3357 8.79468C11.2702 8.64217 11.2357 8.47815 11.2343 8.31217C11.2329 8.1462 11.2645 7.9816 11.3273 7.82798C11.3902 7.67436 11.483 7.5348 11.6004 7.41743C11.7177 7.30006 11.8573 7.20725 12.0109 7.1444C12.1645 7.08154 12.3291 7.04992 12.4951 7.05136C12.6611 7.0528 12.8251 7.08729 12.9776 7.1528C13.1301 7.21831 13.2681 7.31353 13.3834 7.43292L20.8834 14.9329C21.1177 15.1673 21.2493 15.4852 21.2493 15.8167C21.2493 16.1481 21.1177 16.466 20.8834 16.7004L13.3834 24.2004C13.149 24.4348 12.8311 24.5664 12.4996 24.5664C12.1682 24.5664 11.8503 24.4348 11.6159 24.2004Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div class="" v-show="accordion === 5">
          <div
            class="bg-primary-10 text-grey font-semibold p-3 flex items-center justify-between cursor-pointer border-b"
            :class="{ '!text-primary': tab === 'statement' }"
            @click="tab = 'statement'"
          >
            Applicant's Statement
            <svg
              width="30"
              height="31"
              viewBox="0 0 30 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6159 24.2004C11.3815 23.966 11.2499 23.6481 11.2499 23.3167C11.2499 22.9852 11.3815 22.6673 11.6159 22.4329L18.2321 15.8167L11.6159 9.20042C11.4965 9.08512 11.4012 8.94718 11.3357 8.79468C11.2702 8.64217 11.2357 8.47815 11.2343 8.31217C11.2329 8.1462 11.2645 7.9816 11.3273 7.82798C11.3902 7.67436 11.483 7.5348 11.6004 7.41743C11.7177 7.30006 11.8573 7.20725 12.0109 7.1444C12.1645 7.08154 12.3291 7.04992 12.4951 7.05136C12.6611 7.0528 12.8251 7.08729 12.9776 7.1528C13.1301 7.21831 13.2681 7.31353 13.3834 7.43292L20.8834 14.9329C21.1177 15.1673 21.2493 15.4852 21.2493 15.8167C21.2493 16.1481 21.1177 16.466 20.8834 16.7004L13.3834 24.2004C13.149 24.4348 12.8311 24.5664 12.4996 24.5664C12.1682 24.5664 11.8503 24.4348 11.6159 24.2004Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <div
            class="bg-primary-10 text-grey font-semibold p-3 flex items-center justify-between cursor-pointer border-b"
            :class="{ '!text-primary': tab === 'contact' }"
            @click="tab = 'contact'"
          >
            Applicant's Contact Information
            <svg
              width="30"
              height="31"
              viewBox="0 0 30 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6159 24.2004C11.3815 23.966 11.2499 23.6481 11.2499 23.3167C11.2499 22.9852 11.3815 22.6673 11.6159 22.4329L18.2321 15.8167L11.6159 9.20042C11.4965 9.08512 11.4012 8.94718 11.3357 8.79468C11.2702 8.64217 11.2357 8.47815 11.2343 8.31217C11.2329 8.1462 11.2645 7.9816 11.3273 7.82798C11.3902 7.67436 11.483 7.5348 11.6004 7.41743C11.7177 7.30006 11.8573 7.20725 12.0109 7.1444C12.1645 7.08154 12.3291 7.04992 12.4951 7.05136C12.6611 7.0528 12.8251 7.08729 12.9776 7.1528C13.1301 7.21831 13.2681 7.31353 13.3834 7.43292L20.8834 14.9329C21.1177 15.1673 21.2493 15.4852 21.2493 15.8167C21.2493 16.1481 21.1177 16.466 20.8834 16.7004L13.3834 24.2004C13.149 24.4348 12.8311 24.5664 12.4996 24.5664C12.1682 24.5664 11.8503 24.4348 11.6159 24.2004Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <div
            class="bg-primary-10 text-grey font-semibold p-3 flex items-center justify-between cursor-pointer border-b"
            :class="{ '!text-primary': tab === 'certification' }"
            @click="tab = 'certification'"
          >
            Applicant's Certification
            <svg
              width="30"
              height="31"
              viewBox="0 0 30 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6159 24.2004C11.3815 23.966 11.2499 23.6481 11.2499 23.3167C11.2499 22.9852 11.3815 22.6673 11.6159 22.4329L18.2321 15.8167L11.6159 9.20042C11.4965 9.08512 11.4012 8.94718 11.3357 8.79468C11.2702 8.64217 11.2357 8.47815 11.2343 8.31217C11.2329 8.1462 11.2645 7.9816 11.3273 7.82798C11.3902 7.67436 11.483 7.5348 11.6004 7.41743C11.7177 7.30006 11.8573 7.20725 12.0109 7.1444C12.1645 7.08154 12.3291 7.04992 12.4951 7.05136C12.6611 7.0528 12.8251 7.08729 12.9776 7.1528C13.1301 7.21831 13.2681 7.31353 13.3834 7.43292L20.8834 14.9329C21.1177 15.1673 21.2493 15.4852 21.2493 15.8167C21.2493 16.1481 21.1177 16.466 20.8834 16.7004L13.3834 24.2004C13.149 24.4348 12.8311 24.5664 12.4996 24.5664C12.1682 24.5664 11.8503 24.4348 11.6159 24.2004Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <div
            class="bg-primary-10 text-grey font-semibold p-3 flex items-center justify-between cursor-pointer border-b"
            :class="{ '!text-primary': tab === 'signature' }"
            @click="tab = 'signature'"
          >
            Applicant's Signature
            <svg
              width="30"
              height="31"
              viewBox="0 0 30 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6159 24.2004C11.3815 23.966 11.2499 23.6481 11.2499 23.3167C11.2499 22.9852 11.3815 22.6673 11.6159 22.4329L18.2321 15.8167L11.6159 9.20042C11.4965 9.08512 11.4012 8.94718 11.3357 8.79468C11.2702 8.64217 11.2357 8.47815 11.2343 8.31217C11.2329 8.1462 11.2645 7.9816 11.3273 7.82798C11.3902 7.67436 11.483 7.5348 11.6004 7.41743C11.7177 7.30006 11.8573 7.20725 12.0109 7.1444C12.1645 7.08154 12.3291 7.04992 12.4951 7.05136C12.6611 7.0528 12.8251 7.08729 12.9776 7.1528C13.1301 7.21831 13.2681 7.31353 13.3834 7.43292L20.8834 14.9329C21.1177 15.1673 21.2493 15.4852 21.2493 15.8167C21.2493 16.1481 21.1177 16.466 20.8834 16.7004L13.3834 24.2004C13.149 24.4348 12.8311 24.5664 12.4996 24.5664C12.1682 24.5664 11.8503 24.4348 11.6159 24.2004Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>

        <div
          class="bg-primary-10 text-grey font-semibold p-3 flex items-center justify-between cursor-pointer text-lg"
          :class="{ '!bg-primary text-white': accordion === 6 }"
          @click="accordion = 6"
        >
          Interpreter's Contact Information, Certification, and Signature
          <svg
            :class="{ 'rotate-90': accordion === 6 }"
            width="30"
            height="31"
            viewBox="0 0 30 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.6159 24.2004C11.3815 23.966 11.2499 23.6481 11.2499 23.3167C11.2499 22.9852 11.3815 22.6673 11.6159 22.4329L18.2321 15.8167L11.6159 9.20042C11.4965 9.08512 11.4012 8.94718 11.3357 8.79468C11.2702 8.64217 11.2357 8.47815 11.2343 8.31217C11.2329 8.1462 11.2645 7.9816 11.3273 7.82798C11.3902 7.67436 11.483 7.5348 11.6004 7.41743C11.7177 7.30006 11.8573 7.20725 12.0109 7.1444C12.1645 7.08154 12.3291 7.04992 12.4951 7.05136C12.6611 7.0528 12.8251 7.08729 12.9776 7.1528C13.1301 7.21831 13.2681 7.31353 13.3834 7.43292L20.8834 14.9329C21.1177 15.1673 21.2493 15.4852 21.2493 15.8167C21.2493 16.1481 21.1177 16.466 20.8834 16.7004L13.3834 24.2004C13.149 24.4348 12.8311 24.5664 12.4996 24.5664C12.1682 24.5664 11.8503 24.4348 11.6159 24.2004Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div class="" v-show="accordion === 6">
          <div
            class="bg-primary-10 text-grey font-semibold p-3 flex items-center justify-between cursor-pointer border-b"
            :class="{ '!text-primary': tab === 'interpreter-fullname' }"
            @click="tab = 'interpreter-fullname'"
          >
            Interpreter's Full Name
            <svg
              width="30"
              height="31"
              viewBox="0 0 30 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6159 24.2004C11.3815 23.966 11.2499 23.6481 11.2499 23.3167C11.2499 22.9852 11.3815 22.6673 11.6159 22.4329L18.2321 15.8167L11.6159 9.20042C11.4965 9.08512 11.4012 8.94718 11.3357 8.79468C11.2702 8.64217 11.2357 8.47815 11.2343 8.31217C11.2329 8.1462 11.2645 7.9816 11.3273 7.82798C11.3902 7.67436 11.483 7.5348 11.6004 7.41743C11.7177 7.30006 11.8573 7.20725 12.0109 7.1444C12.1645 7.08154 12.3291 7.04992 12.4951 7.05136C12.6611 7.0528 12.8251 7.08729 12.9776 7.1528C13.1301 7.21831 13.2681 7.31353 13.3834 7.43292L20.8834 14.9329C21.1177 15.1673 21.2493 15.4852 21.2493 15.8167C21.2493 16.1481 21.1177 16.466 20.8834 16.7004L13.3834 24.2004C13.149 24.4348 12.8311 24.5664 12.4996 24.5664C12.1682 24.5664 11.8503 24.4348 11.6159 24.2004Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <div
            class="bg-primary-10 text-grey font-semibold p-3 flex items-center justify-between cursor-pointer border-b"
            :class="{ '!text-primary': tab === 'interpreter-mailing' }"
            @click="tab = 'interpreter-mailing'"
          >
            Interpreter's Mailing Address
            <svg
              width="30"
              height="31"
              viewBox="0 0 30 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6159 24.2004C11.3815 23.966 11.2499 23.6481 11.2499 23.3167C11.2499 22.9852 11.3815 22.6673 11.6159 22.4329L18.2321 15.8167L11.6159 9.20042C11.4965 9.08512 11.4012 8.94718 11.3357 8.79468C11.2702 8.64217 11.2357 8.47815 11.2343 8.31217C11.2329 8.1462 11.2645 7.9816 11.3273 7.82798C11.3902 7.67436 11.483 7.5348 11.6004 7.41743C11.7177 7.30006 11.8573 7.20725 12.0109 7.1444C12.1645 7.08154 12.3291 7.04992 12.4951 7.05136C12.6611 7.0528 12.8251 7.08729 12.9776 7.1528C13.1301 7.21831 13.2681 7.31353 13.3834 7.43292L20.8834 14.9329C21.1177 15.1673 21.2493 15.4852 21.2493 15.8167C21.2493 16.1481 21.1177 16.466 20.8834 16.7004L13.3834 24.2004C13.149 24.4348 12.8311 24.5664 12.4996 24.5664C12.1682 24.5664 11.8503 24.4348 11.6159 24.2004Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <div
            class="bg-primary-10 text-grey font-semibold p-3 flex items-center justify-between cursor-pointer border-b"
            :class="{ '!text-primary': tab === 'interpreter-contact' }"
            @click="tab = 'interpreter-contact'"
          >
            Interpreter's Contact Information
            <svg
              width="30"
              height="31"
              viewBox="0 0 30 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6159 24.2004C11.3815 23.966 11.2499 23.6481 11.2499 23.3167C11.2499 22.9852 11.3815 22.6673 11.6159 22.4329L18.2321 15.8167L11.6159 9.20042C11.4965 9.08512 11.4012 8.94718 11.3357 8.79468C11.2702 8.64217 11.2357 8.47815 11.2343 8.31217C11.2329 8.1462 11.2645 7.9816 11.3273 7.82798C11.3902 7.67436 11.483 7.5348 11.6004 7.41743C11.7177 7.30006 11.8573 7.20725 12.0109 7.1444C12.1645 7.08154 12.3291 7.04992 12.4951 7.05136C12.6611 7.0528 12.8251 7.08729 12.9776 7.1528C13.1301 7.21831 13.2681 7.31353 13.3834 7.43292L20.8834 14.9329C21.1177 15.1673 21.2493 15.4852 21.2493 15.8167C21.2493 16.1481 21.1177 16.466 20.8834 16.7004L13.3834 24.2004C13.149 24.4348 12.8311 24.5664 12.4996 24.5664C12.1682 24.5664 11.8503 24.4348 11.6159 24.2004Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <div
            class="bg-primary-10 text-grey font-semibold p-3 flex items-center justify-between cursor-pointer border-b"
            :class="{ '!text-primary': tab === 'interpreter-certification' }"
            @click="tab = 'interpreter-certification'"
          >
            Interpreter's Certification
            <svg
              width="30"
              height="31"
              viewBox="0 0 30 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6159 24.2004C11.3815 23.966 11.2499 23.6481 11.2499 23.3167C11.2499 22.9852 11.3815 22.6673 11.6159 22.4329L18.2321 15.8167L11.6159 9.20042C11.4965 9.08512 11.4012 8.94718 11.3357 8.79468C11.2702 8.64217 11.2357 8.47815 11.2343 8.31217C11.2329 8.1462 11.2645 7.9816 11.3273 7.82798C11.3902 7.67436 11.483 7.5348 11.6004 7.41743C11.7177 7.30006 11.8573 7.20725 12.0109 7.1444C12.1645 7.08154 12.3291 7.04992 12.4951 7.05136C12.6611 7.0528 12.8251 7.08729 12.9776 7.1528C13.1301 7.21831 13.2681 7.31353 13.3834 7.43292L20.8834 14.9329C21.1177 15.1673 21.2493 15.4852 21.2493 15.8167C21.2493 16.1481 21.1177 16.466 20.8834 16.7004L13.3834 24.2004C13.149 24.4348 12.8311 24.5664 12.4996 24.5664C12.1682 24.5664 11.8503 24.4348 11.6159 24.2004Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <div
            class="bg-primary-10 text-grey font-semibold p-3 flex items-center justify-between cursor-pointer"
            :class="{ '!text-primary': tab === 'interpreter-signature' }"
            @click="tab = 'interpreter-signature'"
          >
            Interpreter's Signature
            <svg
              width="30"
              height="31"
              viewBox="0 0 30 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6159 24.2004C11.3815 23.966 11.2499 23.6481 11.2499 23.3167C11.2499 22.9852 11.3815 22.6673 11.6159 22.4329L18.2321 15.8167L11.6159 9.20042C11.4965 9.08512 11.4012 8.94718 11.3357 8.79468C11.2702 8.64217 11.2357 8.47815 11.2343 8.31217C11.2329 8.1462 11.2645 7.9816 11.3273 7.82798C11.3902 7.67436 11.483 7.5348 11.6004 7.41743C11.7177 7.30006 11.8573 7.20725 12.0109 7.1444C12.1645 7.08154 12.3291 7.04992 12.4951 7.05136C12.6611 7.0528 12.8251 7.08729 12.9776 7.1528C13.1301 7.21831 13.2681 7.31353 13.3834 7.43292L20.8834 14.9329C21.1177 15.1673 21.2493 15.4852 21.2493 15.8167C21.2493 16.1481 21.1177 16.466 20.8834 16.7004L13.3834 24.2004C13.149 24.4348 12.8311 24.5664 12.4996 24.5664C12.1682 24.5664 11.8503 24.4348 11.6159 24.2004Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="md:w-3/4 p-5">
        <component :is="component" :tab="tab" @update-tab="updateTab" @next="handleNextSection" />
      </div>
    </div>
    <div class="p-5 text-center" v-else>
      <img
        src="@/assets/imgs/Immigration_documents_and_USA_flag.webp"
        class="w-[150px] inline-block"
        width="150px"
      />

      <h2 class="font-bold text-primary text-2xl mt-5">Your Form has been prepared</h2>
      <p class="">Click the button below to download a copy</p>
      <a :href="downloadUrl" target="_blank" class="inline-block mt-4">
        <AppButton type="solid" size="medium" class="bg-primary text-white">
          <svg
            class="w-[24px]"
            viewBox="0 0 512 512"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            fill="currentColor"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="add" fill="currentColor" transform="translate(85.333333, 42.666667)">
                  <path
                    d="M75.9466667,285.653333 C63.8764997,278.292415 49.6246897,275.351565 35.6266667,277.333333 L1.42108547e-14,277.333333 L1.42108547e-14,405.333333 L28.3733333,405.333333 L28.3733333,356.48 L40.5333333,356.48 C53.1304778,357.774244 65.7885986,354.68506 76.3733333,347.733333 C85.3576891,340.027178 90.3112817,328.626053 89.8133333,316.8 C90.4784904,304.790173 85.3164923,293.195531 75.9466667,285.653333 L75.9466667,285.653333 Z M53.12,332.373333 C47.7608867,334.732281 41.8687051,335.616108 36.0533333,334.933333 L27.7333333,334.933333 L27.7333333,298.666667 L36.0533333,298.666667 C42.094796,298.02451 48.1897668,299.213772 53.5466667,302.08 C58.5355805,305.554646 61.3626692,311.370371 61.0133333,317.44 C61.6596233,323.558965 58.5400493,329.460862 53.12,332.373333 L53.12,332.373333 Z M150.826667,277.333333 L115.413333,277.333333 L115.413333,405.333333 L149.333333,405.333333 C166.620091,407.02483 184.027709,403.691457 199.466667,395.733333 C216.454713,383.072462 225.530463,362.408923 223.36,341.333333 C224.631644,323.277677 218.198313,305.527884 205.653333,292.48 C190.157107,280.265923 170.395302,274.806436 150.826667,277.333333 L150.826667,277.333333 Z M178.986667,376.32 C170.098963,381.315719 159.922142,383.54422 149.76,382.72 L144.213333,382.72 L144.213333,299.946667 L149.333333,299.946667 C167.253333,299.946667 174.293333,301.653333 181.333333,308.053333 C189.877212,316.948755 194.28973,329.025119 193.493333,341.333333 C194.590843,354.653818 189.18793,367.684372 178.986667,376.32 L178.986667,376.32 Z M254.506667,405.333333 L283.306667,405.333333 L283.306667,351.786667 L341.333333,351.786667 L341.333333,329.173333 L283.306667,329.173333 L283.306667,299.946667 L341.333333,299.946667 L341.333333,277.333333 L254.506667,277.333333 L254.506667,405.333333 L254.506667,405.333333 Z M234.666667,7.10542736e-15 L9.52127266e-13,7.10542736e-15 L9.52127266e-13,234.666667 L42.6666667,234.666667 L42.6666667,192 L42.6666667,169.6 L42.6666667,42.6666667 L216.96,42.6666667 L298.666667,124.373333 L298.666667,169.6 L298.666667,192 L298.666667,234.666667 L341.333333,234.666667 L341.333333,106.666667 L234.666667,7.10542736e-15 L234.666667,7.10542736e-15 Z"
                    id="document-pdf"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
          Download Document
        </AppButton>
      </a>
    </div>
  </section>
</template>
