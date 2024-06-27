<script lang="ts" setup>
import { computed, ref, type Component } from 'vue'
import { useAppStore } from '@/stores/app'
import { useTranslate } from '@/composables/useTranslate'

import AppLogo from '@/components/icons/AppLogo.vue'
import USAFlag from '@/components/icons/USA.vue'
import SpainFlag from '@/components/icons/Spain.vue'
import DropDown from '@/components/DropDown.vue'

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

</script>

<template>
  <section class="min-h-[100vh] overflow-x-hidden bg-[#fffcfc]">
    <header>
      <div class="bg-primary text-white flex md:justify-center">
        <div
          class="w-full md:w-page flex justify-between items-center gap-3 py-5 px-5 sticky top-0 z-10 bg-primary"
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
          <DropDown :title="selectedLang" :options="lang" @select="setLang" />
        </div>
      </div>
    </header>
    <RouterView />
  </section>
</template>
