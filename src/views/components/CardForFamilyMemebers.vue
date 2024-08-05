<script lang="ts" setup>
import { ref, watch, computed, type Ref } from 'vue'
import { isEmpty } from 'lodash'

import AppButton from '@/components/Button.vue'

import Beneficiary from './forms/CardForFamilyMembers/RelationshipWithBeneficiary.vue'
import InformationAboutYou from './forms/CardForFamilyMembers/InformationAboutYou.vue'
import BiographicInformation from './forms/CardForFamilyMembers/BiographicInformation.vue'
import InformationAboutBeneficiary from './forms/CardForFamilyMembers/InformationAboutBeneficiary.vue'
import OtherInformation from './forms/CardForFamilyMembers/OtherInformation.vue'
import PetitionersDetails from './forms/CardForFamilyMembers/PetitionersDetails.vue'
import InterpretersInformation from './forms/CardForFamilyMembers/InterpretersContactInformation.vue'


const accordion = ref(1)
const tab = ref('name')
const formData: Ref<any> = ref({})
// const downloadUrl = ref('')

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


watch(accordion, () => {
  switch (accordion.value) {
    case 2:
      tab.value = 'petitioner'
      break
    case 8:
      tab.value = 'specialcertificate'
      break
    case 9:
      tab.value = 'statement'
      break
    case 10:
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

    <div class="flex items-start md:h-[80vh] overflow-auto" v-if="isEmpty">
      <div class="hidden md:block md:w-1/4">
        <!-----------------accordion 1  ----------------->
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
        <div class="" v-show="accordion === 2">
          <div
            class="bg-primary-10 text-grey font-semibold p-3 flex items-center justify-between cursor-pointer border-b"
            :class="{ '!text-primary': tab === 'petitioner' }"
            @click="tab = 'petitioner'"
          >
            Application Type
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
    </div>
    </section>
</template>