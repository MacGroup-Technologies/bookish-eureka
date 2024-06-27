<script setup lang="ts">
import { computed, ref, watch, type Component } from 'vue'
import { useRoute } from 'vue-router'
import { useAppStore } from '@/stores/app'
import { useTranslate } from '@/composables/useTranslate'
import { onClickOutside } from '@vueuse/core'

import AppLogo from '@/components/icons/AppLogo.vue'
import USAFlag from '@/components/icons/USA.vue'
import SpainFlag from '@/components/icons/Spain.vue'

import DropDown from '@/components/DropDown.vue'
import AppButton from '@/components/Button.vue'

const route = useRoute()

const announcement = ref(true)
const hamburger = ref(false)
const menu = ref(false)

const hamburgerTarget = ref(null)
const menuTarget = ref(null)

const lang: { label: string; slot: Component; abbr: 'en' | 'es' }[] = [
  {
    label: 'English',
    slot: USAFlag,
    abbr: 'en'
  },
  {
    label: 'Español',
    slot: SpainFlag,
    abbr: 'es'
  }
]

const selectedLang = computed({
  set(option: { label: string; slot: Component; abbr: 'en' | 'es' } | any) {
    useAppStore().setLanguage(option !== null ? option.abbr : 'en')
  },
  get() {
    return lang.filter((item) => {
      if (item.abbr === useAppStore().lang) {
        return item
      }
    })[0]
  }
})

const setLang = function (option: { label: string; slot: Component; abbr: 'en' | 'es' } | any) {
  selectedLang.value = option
}

const handleDropDown = function (
  option:
    | string[]
    | { label: string; slot: any }[]
    | { label: string; slot: any; subtext: string }[]
) {
  console.log(option)
}

onClickOutside(hamburgerTarget, () => {
  hamburger.value = false
})

onClickOutside(menuTarget, () => {
  menu.value = false
})

watch(route, () => {
  hamburger.value  = false
  menu.value = false
})
</script>

<template>
  <section class="bg-white text-black overflow-x-hidden min-h-[100vh]" translate="no">
    <div
      class="bg-black text-slate text-center p-3 relative flex md:justify-center items-start md:items-center"
      v-if="announcement"
    >
      <span
        class="inline-flex rounded-full text-xs md:text-md px-2 md:py-2 md:px-5 md:mr-3 bg-primary-10 text-black capitalize"
      >
        {{ useTranslate('new') }}
      </span>
      <div class="text-xs md:text-base">
        {{ useTranslate('$announcement') }}
        <router-link to="" class="capitalize underline">
          {{ useTranslate('learn more') }}
        </router-link>
      </div>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="absolute top-0 right-10 translate-y-[50%] hover:opacity-75 cursor-pointer"
        @click="announcement = !announcement"
      >
        <path
          d="M6.2253 4.81096C5.83477 4.42044 5.20161 4.42044 4.81108 4.81096C4.42056 5.20149 4.42056 5.83465 4.81108 6.22518L10.5858 11.9999L4.81114 17.7746C4.42062 18.1651 4.42062 18.7983 4.81114 19.1888C5.20167 19.5793 5.83483 19.5793 6.22535 19.1888L12 13.4141L17.7747 19.1888C18.1652 19.5793 18.7984 19.5793 19.1889 19.1888C19.5794 18.7983 19.5794 18.1651 19.1889 17.7746L13.4142 11.9999L19.189 6.22518C19.5795 5.83465 19.5795 5.20149 19.189 4.81096C18.7985 4.42044 18.1653 4.42044 17.7748 4.81096L12 10.5857L6.2253 4.81096Z"
          fill="white"
        />
      </svg>
    </div>
    <header>
      <div class="bg-primary text-white flex md:justify-center">
        <div
          class="w-full md:w-page flex justify-between items-center gap-3 py-5 px-5 sticky top-0 z-10 bg-primary"
          :class="{ '!fixed top-0 right-0 left-0 z-[20]': hamburger }"
        >
          <router-link to="/" class="flex items-center gap-3">
            <AppLogo class="w-[32px] md:w-[70px]" />
            <div class="uppercase">
              <div class="text-base md:text-[32px] font-bold">
                {{ useTranslate('immigration') }}
              </div>
              <div class="text-[8px] md:text-base md:font-bold">{{ useTranslate('$dps') }}</div>
            </div>
          </router-link>
          <div class="text-white flex justify-between items-center gap-5">
            <DropDown :title="selectedLang" :options="lang" @select="setLang" />
            <div class="hidden md:flex items-center justify-between gap-3">
              <router-link to="/auth/login">
                <AppButton type="outline" size="large" color="primary" class="!border">
                  Login
                </AppButton>
              </router-link>
              <router-link to="/auth/signup">
                <AppButton type="solid" size="large" color="primary" class="bg-slate text-grey">
                  Get Started
                </AppButton>
              </router-link>
            </div>
          </div>
          <div class="md:hidden" ref="hamburgerTarget">
            <div class="w-[25px] flex flex-col gap-[3px] md:hidden" @click="hamburger = !hamburger">
              <div
                class="bg-white h-[3px] px-1 rounded transition-transform ease-in-out"
                :class="{ 'hamburger--active': hamburger }"
              />
              <div
                class="bg-white h-[3px] px-1 rounded transition-transform ease-in-out"
                :class="{ 'hamburger--active hamburger--last': hamburger }"
              />
              <div
                class="bg-white h-[3px] px-1 rounded transition-all ease-in-out w-2/3"
                :class="{ hidden: hamburger }"
              />
            </div>
            <div
              class="hidden md:hidden bg-primary fixed top-[85px] bottom-0 right-0 left-0 z-[15] p-5"
              :class="{ '!flex flex-col gap-5': hamburger }"
            >
              <router-link to="/auth/login" class="w-full block">
                <AppButton type="outline" size="large" color="primary" class="w-full !border">
                  Login
                </AppButton>
              </router-link>
              <router-link to="/auth/signup" class="w-full block">
                <AppButton type="solid" size="large" color="primary" class="w-full bg-slate text-grey">
                  Get Started
                </AppButton>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex items-stretch justify-center border-b-[1.5px] border-grey/10 relative"
        ref="menuTarget"
      >
        <div
          class="md:hidden flex items-center justify-between w-full px-5 py-2 bg-[#FFFCFC]"
          @click="menu = !menu"
        >
          <div class="w-2/3 pb-[1px] px-1 bg-black" />
          <div class="flex items-center">
            Menu
            <svg
              class="w-[24px] transition-transform ease-in-out"
              :class="{ 'rotate-180 transition-transform': menu }"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.29279 9.29308C5.48031 9.10561 5.73462 9.0003 5.99979 9.0003C6.26495 9.0003 6.51926 9.10561 6.70679 9.29308L11.9998 14.5861L17.2928 9.29308C17.385 9.19757 17.4954 9.12139 17.6174 9.06898C17.7394 9.01657 17.8706 8.98898 18.0034 8.98783C18.1362 8.98668 18.2678 9.01198 18.3907 9.06226C18.5136 9.11254 18.6253 9.18679 18.7192 9.28069C18.8131 9.37458 18.8873 9.48623 18.9376 9.60913C18.9879 9.73202 19.0132 9.8637 19.012 9.99648C19.0109 10.1293 18.9833 10.2605 18.9309 10.3825C18.8785 10.5045 18.8023 10.6148 18.7068 10.7071L12.7068 16.7071C12.5193 16.8946 12.265 16.9999 11.9998 16.9999C11.7346 16.9999 11.4803 16.8946 11.2928 16.7071L5.29279 10.7071C5.10532 10.5196 5 10.2652 5 10.0001C5 9.73492 5.10532 9.48061 5.29279 9.29308Z"
                fill="#313545"
              />
            </svg>
          </div>
        </div>
        <div
          class="bg-white hidden md:w-page md:flex md:!flex-nowrap items-stretch gap-2 text-black"
          :class="{ '!flex flex-col px-5 absolute z-[9] top-[50px] left-0 right-0 shadow': menu }"
        >
          <router-link
            to="about-us"
            :class="{ 'bg-primary text-white' : route.path === '/about-us' }"
            class="md:flex-shrink-0 flex items-center p-3 text-sm md:text-base text-black hover:bg-primary hover:text-white transition ease-in-out"
          >
            About Us
          </router-link>
          <DropDown
            class="md:flex-shrink-0 py-[10px] !px-[10px] hover:bg-primary hover:text-white"
            title="Form Services"
            @select="handleDropDown"
            :options="[
              {
                label: 'U.S Citizenship',
                slot: null,
                subtext: 'Form N-400'
              },
              {
                label: 'Certificate of Citizenship',
                slot: null,
                subtext: 'Form N-600'
              },
              {
                label: 'Renew Certificate of Citizenship',
                slot: null,
                subtext: 'Form N-565'
              },
              {
                label: 'Pass the U.S Citizenship Test',
                slot: null,
                subtext: 'Interview / Civics / Test DVD'
              },
              {
                label: 'Green Card Renewal',
                slot: null,
                subtext: 'Form I-90'
              },
              {
                label: 'Removal of Conditions for Residence',
                slot: null,
                subtext: 'Form I-751'
              },
              {
                label: 'Adjustment of Status',
                slot: null,
                subtext: 'Form I-485'
              },
              {
                label: 'Green Card for Family Member',
                slot: null,
                subtext: 'Form I-130'
              },
              {
                label: 'Employment Authorisation Card (EAD)',
                slot: null,
                subtext: 'Form I-756'
              },
              {
                label: 'Deferred Action for Childhood Arrivals',
                slot: null,
                subtext: 'Form I-821d (DACA)'
              }
            ]"
          />
          <DropDown
            class="md:flex-shrink-0 py-[10px] !px-[10px] hover:bg-primary hover:text-white"
            title="Apply For Citizenship"
            @select="handleDropDown"
            :options="[
              'Apply for Citizenship',
              'Naturalisation Guide',
              'Citizenship Test',
              'Citizenship Certificate'
            ]"
          />
          <DropDown
            class="md:flex-shrink-0 py-[10px] !px-[10px] hover:bg-primary hover:text-white"
            title="Green Card"
            @select="handleDropDown"
            :options="[
              'Green Card Renewal',
              'Get a Green Card',
              'Green Card Replacement',
              'Removal Conditions on Green Card'
            ]"
          />
          <DropDown
            class="md:flex-shrink-0 py-[10px] !px-[10px] hover:bg-primary hover:text-white"
            title="Resources"
            @select="handleDropDown"
            :options="[
              'USCIS Case Status',
              'B1 Business Visa eBook',
              'B2 Tourist Visa eBook',
              'USCIS Processing Times'
            ]"
          />
          <DropDown
            class="md:flex-shrink-0 py-[10px] !px-[10px] hover:bg-primary hover:text-white"
            title="Help"
            @select="handleDropDown"
            :options="[
              'How to Renew a Green Card?',
              'How To Apply for U.S Citizenship?',
              'How to Work in the U.S?',
              'How to Get a Green Card?',
              'How to Get a U.S Visa?'
            ]"
          />
          <router-link
            to=""
            class="md:flex-shrink-0 flex items-center gap-3 p-3 text-sm md:text-base text-black hover:bg-primary hover:text-white transition ease-in-out"
          >
            Immigration Questions
            <svg
              class="w-[32px] md:w-[48px]"
              viewBox="0 0 48 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_4288_1682)">
                <rect x="0.428589" y="0.182617" width="47" height="30" rx="6" fill="#E9B305" />
                <g filter="url(#filter0_d_4288_1682)">
                  <path
                    d="M20.1223 11.8031C20.0608 11.8031 20.0085 11.7904 19.9655 11.765C19.9224 11.7395 19.8886 11.6949 19.864 11.6313L19.329 10.333L17.9821 9.722C17.9206 9.69654 17.8775 9.66154 17.8529 9.61698C17.8283 9.57243 17.816 9.51834 17.816 9.45469C17.816 9.39105 17.8283 9.33695 17.8529 9.2924C17.8775 9.24785 17.9206 9.21285 17.9821 9.18739L19.329 8.59551L19.864 7.35445C19.8886 7.29081 19.9224 7.24626 19.9655 7.2208C20.0085 7.19535 20.0608 7.18262 20.1223 7.18262C20.1838 7.18262 20.2361 7.19535 20.2791 7.2208C20.3222 7.24626 20.356 7.29081 20.3806 7.35445L20.9157 8.59551L22.2625 9.18739C22.324 9.21285 22.3671 9.24785 22.3917 9.2924C22.4163 9.33695 22.4286 9.39105 22.4286 9.45469C22.4286 9.51834 22.4163 9.57243 22.3917 9.61698C22.3671 9.66154 22.324 9.69654 22.2625 9.722L20.9157 10.333L20.3806 11.6313C20.356 11.6949 20.3222 11.7395 20.2791 11.765C20.2361 11.7904 20.1838 11.8031 20.1223 11.8031ZM20.1223 23.1826C20.0731 23.1826 20.0239 23.1699 19.9747 23.1444C19.9255 23.119 19.8886 23.0744 19.864 23.0108L19.329 21.7697L18.0005 21.1778C17.939 21.1524 17.896 21.1174 17.8714 21.0728C17.8468 21.0283 17.8345 20.9742 17.8345 20.9105C17.8345 20.8469 17.8468 20.7928 17.8714 20.7483C17.896 20.7037 17.939 20.6687 18.0005 20.6432L19.329 20.0514L19.864 18.7339C19.8886 18.6703 19.9224 18.6257 19.9655 18.6003C20.0085 18.5748 20.0608 18.5621 20.1223 18.5621C20.1838 18.5621 20.2361 18.5748 20.2791 18.6003C20.3222 18.6257 20.356 18.6703 20.3806 18.7339L20.9157 20.0514L22.2441 20.6432C22.3056 20.6687 22.3486 20.7037 22.3732 20.7483C22.3978 20.7928 22.4101 20.8469 22.4101 20.9105C22.4101 20.9742 22.3978 21.0283 22.3732 21.0728C22.3486 21.1174 22.3056 21.1524 22.2441 21.1778L20.9157 21.7697L20.3806 23.0108C20.356 23.0744 20.3191 23.119 20.2699 23.1444C20.2207 23.1699 20.1715 23.1826 20.1223 23.1826ZM12.0227 19.8795C11.9243 19.8795 11.829 19.8509 11.7367 19.7936C11.6445 19.7363 11.5737 19.6568 11.5245 19.5549L10.3253 16.901L7.74224 15.6981C7.64384 15.6472 7.56697 15.574 7.51161 15.4786C7.45626 15.3831 7.42859 15.2844 7.42859 15.1826C7.42859 15.0808 7.45626 14.9821 7.51161 14.8867C7.56697 14.7912 7.64384 14.718 7.74224 14.6671L10.3253 13.4642L11.5245 10.8294C11.5737 10.7148 11.6445 10.6289 11.7367 10.5716C11.829 10.5144 11.9243 10.4857 12.0227 10.4857C12.1211 10.4857 12.2164 10.5144 12.3087 10.5716C12.4009 10.6289 12.4716 10.7085 12.5208 10.8103L13.7386 13.4642L16.3031 14.6671C16.4138 14.718 16.4969 14.7912 16.5522 14.8867C16.6076 14.9821 16.6352 15.0808 16.6352 15.1826C16.6352 15.2844 16.6076 15.3831 16.5522 15.4786C16.4969 15.574 16.4138 15.6472 16.3031 15.6981L13.7386 16.901L12.5208 19.5549C12.4716 19.6695 12.4009 19.7522 12.3087 19.8031C12.2164 19.8541 12.1211 19.8795 12.0227 19.8795Z"
                    fill="white"
                  />
                </g>
                <path
                  d="M28.7006 9.75862H30.8286L35.2286 21.1826H33.0846L32.0126 18.1586H27.4526L26.3806 21.1826H24.3166L28.7006 9.75862ZM27.9966 16.6386H31.4846L29.7726 11.7266H29.7246L27.9966 16.6386ZM36.3165 9.75862H38.3165V21.1826H36.3165V9.75862Z"
                  fill="white"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_4288_1682"
                  x="-33.5214"
                  y="-1.26738"
                  width="96.9"
                  height="97.9"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="32.5" />
                  <feGaussianBlur stdDeviation="20.475" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.262745 0 0 0 0 0.0941176 0 0 0 0 1 0 0 0 0.28 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_4288_1682"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_4288_1682"
                    result="shape"
                  />
                </filter>
                <clipPath id="clip0_4288_1682">
                  <rect x="0.428589" y="0.182617" width="47" height="30" rx="6" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </router-link>
          <router-link
            to="contact-us"
            class="md:flex-shrink-0 flex items-center p-3 text-sm md:text-base text-black hover:bg-primary hover:text-white transition ease-in-out"
          >
            Contatct Us
          </router-link>
        </div>
      </div>
    </header>
    <RouterView />
  </section>
</template>

<style scoped>
.hamburger--active {
  transition: transform 0.3s ease-in-out;
  transform: rotate(45deg);
}

.hamburger--last {
  transform: rotate(-45deg) translate(3px, -5px);
}
</style>
