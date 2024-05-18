import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  const lang = ref<'es'|'en'>('en')

  const setLanguage = function (language: 'en' | 'es') {
    lang.value = language
  }

  return { lang, setLanguage }
})
