<script lang="ts" setup>
import { ref, watch, computed, type Ref } from 'vue'
import { isEmpty } from 'lodash'


import { useNotification } from '@kyvg/vue3-notification'
import { useUserStore } from '@/stores/userStore';
// import { submit_i30 } from './services/forms'
import AppButton from '@/components/Button.vue'

import Beneficiary from './forms/CardForFamilyMembers/RelationshipWithBeneficiary.vue'
import InformationAboutYou from './forms/CardForFamilyMembers/InformationAboutYou.vue'
import BiographicInformation from './forms/CardForFamilyMembers/BiographicInformation.vue'
import InformationAboutBeneficiary from './forms/CardForFamilyMembers/InformationAboutBeneficiary.vue'
import OtherInformation from './forms/CardForFamilyMembers/OtherInformation.vue'
import PetitionersDetails from './forms/CardForFamilyMembers/PetitionersDetails.vue'
import InterpretersInformation from './forms/CardForFamilyMembers/InterpretersContactInformation.vue'

const { notify } = useNotification()
const { setCurrentForm } = useUserStore()


const accordion = ref(1)
const tab = ref('name')
const formData: Ref<any> = ref({})
const downloadUrl = ref('')


const component = computed(() => {
  switch (accordion.value) {
    case 1:
      return Beneficiary
    case 2:
      return InformationAboutYou
    case 3:
      return BiographicInformation
    case 4:
      return InformationAboutBeneficiary
    case 5:
      return OtherInformation
    case 6:
      return PetitionersDetails
    case 7:
      return InterpretersInformation
    default:
      return ''
  }
})

const updateTab = function (newTab: string) {
  tab.value = newTab
}
const handleNextSection = function (data: any) {
  formData.value = { ...formData.value, ...data }
  if (accordion.value === 7) {
    submitForm()
  } else {
    accordion.value++
  }
}
const submitForm = async function () {
  console.log('Form submitted with: ', formData.value)
  try {
    const response: any = await submit_i30(formData.value)

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
    case 2:
      tab.value = 'petitioner'
      break
    case 4:
      tab.value = 'beneficiary'
      break
    case 6:
      tab.value = 'petitionerstatement'
      break
    case 7:
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
      Green Card Application for Family Member
    </div>

    <div class="flex items-start md:h-[80vh] overflow-auto" v-if="isEmpty(downloadUrl)">
      <div class="hidden md:block md:w-1/4">
        <!-----------------accordion One  ----------------->
        <div
          class="bg-primary-10 text-grey font-semibold p-3 flex items-center justify-between cursor-pointer text-lg"
          :class="{ '!bg-primary text-white': accordion === 1 }"
          @click="accordion = 1"
        >
          Relationship With Beneficiary
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

        <!--------------------Accordion two --------------------->
        <div
          class="bg-primary-10 text-grey font-semibold p-3 flex items-center justify-between cursor-pointer text-lg"
          :class="{ '!bg-primary text-white': accordion === 2 }"
          @click="accordion = 2"
        >
          Information About You (Petitioner)
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

        <!-----------accordion two tab   -->
        <!---------- info abt petitioner ------->
        <div class="" v-show="accordion === 2">
          <div
            class="bg-primary-10 text-grey font-semibold p-3 flex items-center justify-between cursor-pointer border-b"
            :class="{ '!text-primary': tab === 'petitioner' }"
            @click="tab = 'petitioner'"
          >
            Information About Petitioner
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
          <!------------------ fullname tab ---------->
          <div
            class="bg-primary-10 text-grey font-semibold p-3 flex items-center justify-between cursor-pointer border-b"
            :class="{ '!text-primary': tab === 'fullname' }"
            @click="tab = 'fullname'"
          >
            Fullname
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
          <!-------------------other names tab ----------------->
          <div
            class="bg-primary-10 text-grey font-semibold p-3 flex items-center justify-between cursor-pointer border-b"
            :class="{ '!text-primary': tab === 'othernames' }"
            @click="tab = 'othernames'"
          >
            Other Names Used (if any)
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
          <!-- -------------------other info tab -------------->
          <div
            class="bg-primary-10 text-grey font-semibold p-3 flex items-center justify-between cursor-pointer border-b"
            :class="{ '!text-primary': tab === 'otherinfo' }"
            @click="tab = 'otherinfo'"
          >
            Other Information
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

          <!-- -------------------mailing tab -------------->
          <div
            class="bg-primary-10 text-grey font-semibold p-3 flex items-center justify-between cursor-pointer border-b"
            :class="{ '!text-primary': tab === 'mailing' }"
            @click="tab = 'mailing'"
          >
            Mailing Address
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

          <!-- -------------------address history tab -------------->
          <div
            class="bg-primary-10 text-grey font-semibold p-3 flex items-center justify-between cursor-pointer border-b"
            :class="{ '!text-primary': tab === 'address' }"
            @click="tab = 'address'"
          >
            Address History
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

          <!-- ---------------Marital info tab -------------->
          <div
            class="bg-primary-10 text-grey font-semibold p-3 flex items-center justify-between cursor-pointer border-b"
            :class="{ '!text-primary': tab === 'maritalinfo' }"
            @click="tab = 'maritalinfo'"
          >
            Marital Information
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

          <!-- -------------------place of current marriage tab -------------->
          <div
            class="bg-primary-10 text-grey font-semibold p-3 flex items-center justify-between cursor-pointer border-b"
            :class="{ '!text-primary': tab === 'currentmarriage' }"
            @click="tab = 'currentmarriage'"
          >
            Place of Current Marriage (if married)
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

          <!-- -------------------names of spouses tab -------------->
          <div
            class="bg-primary-10 text-grey font-semibold p-3 flex items-center justify-between cursor-pointer border-b"
            :class="{ '!text-primary': tab === 'spouses' }"
            @click="tab = 'spouses'"
          >
            Names of All Your Spouses
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

          <!-- -------------------info abt your parentstab -------------->
          <div
            class="bg-primary-10 text-grey font-semibold p-3 flex items-center justify-between cursor-pointer border-b"
            :class="{ '!text-primary': tab === 'parent' }"
            @click="tab = 'parent'"
          >
            Information About Your Parents
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

          <!-- -------------------additional info about you tab -------------->
          <div
            class="bg-primary-10 text-grey font-semibold p-3 flex items-center justify-between cursor-pointer border-b"
            :class="{ '!text-primary': tab === 'otherinfo' }"
            @click="tab = 'otherinfo'"
          >
            Additional Information About You (petitioner)
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

          <!-- -------------------employment info tab -------------->
          <div
            class="bg-primary-10 text-grey font-semibold p-3 flex items-center justify-between cursor-pointer border-b"
            :class="{ '!text-primary': tab === 'employment' }"
            @click="tab = 'employment'"
          >
            Employment History
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
        <!------------------------Accordion three  --------------->
        <div
          class="bg-primary-10 text-grey font-semibold p-3 flex items-center justify-between cursor-pointer text-lg"
          :class="{ '!bg-primary text-white': accordion === 3 }"
          @click="accordion = 3"
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

        <!---------------------accordion four tab-------------------->
        <!---------- info abt beneficiary ------->
        <div
          class="bg-primary-10 text-grey font-semibold p-3 flex items-center justify-between cursor-pointer text-lg"
          :class="{ '!bg-primary text-white': accordion === 4 }"
          @click="accordion = 4"
        >
          Information About Beneficiary
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
            :class="{ '!text-primary': tab === 'beneficiary' }"
            @click="tab = 'beneficiary'"
          >
            Information About Beneficiary
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
          <!------------------beneficiary fullname tab ---------->
          <div
            class="bg-primary-10 text-grey font-semibold p-3 flex items-center justify-between cursor-pointer border-b"
            :class="{ '!text-primary': tab === 'beneficiaryfullname' }"
            @click="tab = 'beneficiaryfullname'"
          >
            Beneficiary Fullname
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
          <!-------------------beneficiary other names tab ----------------->
          <div
            class="bg-primary-10 text-grey font-semibold p-3 flex items-center justify-between cursor-pointer border-b"
            :class="{ '!text-primary': tab === 'beneficiaryothernames' }"
            @click="tab = 'beneficiaryothernames'"
          >
            Other Names Used (if any)
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

          <!-- -------------------beneficiary other info tab -------------->
          <div
            class="bg-primary-10 text-grey font-semibold p-3 flex items-center justify-between cursor-pointer border-b"
            :class="{ '!text-primary': tab === 'beneficiaryotherinfo' }"
            @click="tab = 'beneficiaryotherinfo'"
          >
            Beneficiary Other Information
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

          <!----------------beneficiary physical address tab --------->
          <div
            class="bg-primary-10 text-grey font-semibold p-3 flex items-center justify-between cursor-pointer border-b"
            :class="{ '!text-primary': tab === 'beneficiaryphysical' }"
            @click="tab = 'beneficiaryphysical'"
          >
            Beneficiary Physical Address
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

          <!--------beneficiary address and contact history tab --------->
          <div
            class="bg-primary-10 text-grey font-semibold p-3 flex items-center justify-between cursor-pointer border-b"
            :class="{ '!text-primary': tab === 'beneficiaryaddress' }"
            @click="tab = 'beneficiaryaddress'"
          >
            Beneficiary Other Address and Contact Information
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

          <!---------- information about beneficiary --------->
          <div
            class="bg-primary-10 text-grey font-semibold p-3 flex items-center justify-between cursor-pointer border-b"
            :class="{ '!text-primary': tab === 'beneficiaryinfo' }"
            @click="tab = 'beneficiaryinfo'"
          >
            Information About Beneficiary
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

          <!-- ---------------Beneficiary Marital info tab -------------->
          <div
            class="bg-primary-10 text-grey font-semibold p-3 flex items-center justify-between cursor-pointer border-b"
            :class="{ '!text-primary': tab === 'beneficiarymaritalinfo' }"
            @click="tab = 'beneficiarymaritalinfo'"
          >
            Beneficiary Marital Information
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

          <!-----------place of beneficiary current marriage tab --------->
          <div
            class="bg-primary-10 text-grey font-semibold p-3 flex items-center justify-between cursor-pointer border-b"
            :class="{ '!text-primary': tab === 'beneficiarycurrentmarriage' }"
            @click="tab = 'beneficiarycurrentmarriage'"
          >
            Place of Beneficiary Current Marriage (if married)
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

          <!-------------------names of beneficiary spouses tab -------------->
          <div
            class="bg-primary-10 text-grey font-semibold p-3 flex items-center justify-between cursor-pointer border-b"
            :class="{ '!text-primary': tab === 'beneficiaryspouses' }"
            @click="tab = 'beneficiaryspouses'"
          >
            Names of Beneficiary's Spouses (if any)
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

          <!-- -------------------info abt beneficiary's fam tab -------------->
          <div
            class="bg-primary-10 text-grey font-semibold p-3 flex items-center justify-between cursor-pointer border-b"
            :class="{ '!text-primary': tab === 'beneficiaryparent' }"
            @click="tab = 'beneficiaryparent'"
          >
            Information About Beneficiary's Family
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

          <!-- -------------------beneficiary's entry info tab -------------->
          <div
            class="bg-primary-10 text-grey font-semibold p-3 flex items-center justify-between cursor-pointer border-b"
            :class="{ '!text-primary': tab === 'beneficiaryentryinfo' }"
            @click="tab = 'beneficiaryentryinfo'"
          >
            Beneficiary's Entry Information
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

          <!--------------beneficiary employment info tab -------------->
          <div
            class="bg-primary-10 text-grey font-semibold p-3 flex items-center justify-between cursor-pointer border-b"
            :class="{ '!text-primary': tab === 'beneficiaryemployment' }"
            @click="tab = 'beneficiaryemployment'"
          >
            Beneficiary's Employment Information
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

          <!-------additional info about beneficiary tab -------------->
          <div
            class="bg-primary-10 text-grey font-semibold p-3 flex items-center justify-between cursor-pointer border-b"
            :class="{ '!text-primary': tab === 'additionalbeneficiaryinfo' }"
            @click="tab = 'additionalbeneficiaryinfo'"
          >
            Additional Information About Beneficiary
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

        <!------------------------Accordion five  --------------->
        <div
          class="bg-primary-10 text-grey font-semibold p-3 flex items-center justify-between cursor-pointer text-lg"
          :class="{ '!bg-primary text-white': accordion === 5 }"
          @click="accordion = 5"
        >
          Other Information
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

        <!-----------------accordion six tab ----------------------->
        <!----------  petitioners statement contact info  ------->
        <div
          class="bg-primary-10 text-grey font-semibold p-3 flex items-center justify-between cursor-pointer text-lg"
          :class="{ '!bg-primary text-white': accordion === 6 }"
          @click="accordion = 6"
        >
          Petitioner's Statement, Contact, Declaration and Signature
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
            :class="{ '!text-primary': tab === 'petitionerstatement' }"
            @click="tab = 'petitionerstatement'"
          >
            Petitioner's Statement
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
          <!------------------petitioners contact info tab ---------->
          <div
            class="bg-primary-10 text-grey font-semibold p-3 flex items-center justify-between cursor-pointer border-b"
            :class="{ '!text-primary': tab === 'petitionercontact' }"
            @click="tab = 'petitionercontact'"
          >
            Petitioner's Contact Information

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
          <!---------petitioner declaration other names tab -------------->
          <div
            class="bg-primary-10 text-grey font-semibold p-3 flex items-center justify-between cursor-pointer border-b"
            :class="{ '!text-primary': tab === 'petitionerdeclaration' }"
            @click="tab = 'petitionerdeclaration'"
          >
            Petitioner's Declaration and Certification
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

          <!------------petitioner signature other info tab -------------->
          <div
            class="bg-primary-10 text-grey font-semibold p-3 flex items-center justify-between cursor-pointer border-b"
            :class="{ '!text-primary': tab === 'petitionersignature ' }"
            @click="tab = 'petitionersignature '"
          >
            Petitioner's Signature
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

        <!-----------Accordion 7  ------------->

        <div
          class="bg-primary-10 text-grey font-semibold p-3 flex items-center justify-between cursor-pointer text-lg"
          :class="{ '!bg-primary text-white': accordion === 7 }"
          @click="accordion = 7"
        >
          Interpreter's Contact Information and Signature
          <svg
            :class="{ 'rotate-90': accordion === 7 }"
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
        <div class="" v-show="accordion === 7">
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
