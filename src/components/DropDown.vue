<script lang="ts" setup>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

const props = defineProps<{
  title: string | { label: string; slot: any }
  options: string[] | { label: string; slot: any }[] | { label: string, slot: any, subtext: string }[]
}>()

const emit = defineEmits(['select', 'close'])
const show = ref(false)
const target = ref(null)

const select = function (option: typeof props.options[0]) {
  show.value = false
  emit('select', option)
}

onClickOutside(target, () => {
  show.value = false
})
</script>
<template>
  <div class="group relative" ref="target">
    <div class="flex justify-between items-center md:gap-3 cursor-pointer md:px-[5px] md:py-[5px]" @click="show = !show">
      <div class="flex items-center gap-2 md:gap-3 text-sm md:text-base">
        <component :is="title.slot" v-if="typeof title === 'object'" class="w-[15px]" />
        {{ typeof title === 'string' ? title : title.label }}
      </div>
      <svg
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="transition-transform ease-in-out w-[12px] md:w-[24px]"
        :class="{ 'rotate-180 transition-transform': show }"
      >
        <path
          d="M5.29303 9.88439C5.48056 9.69692 5.73487 9.5916 6.00003 9.5916C6.26519 9.5916 6.5195 9.69692 6.70703 9.88439L12 15.1774L17.293 9.88439C17.3853 9.78888 17.4956 9.7127 17.6176 9.66029C17.7396 9.60788 17.8709 9.58029 18.0036 9.57914C18.1364 9.57799 18.2681 9.60329 18.391 9.65357C18.5139 9.70385 18.6255 9.7781 18.7194 9.872C18.8133 9.96589 18.8876 10.0775 18.9379 10.2004C18.9881 10.3233 19.0134 10.455 19.0123 10.5878C19.0111 10.7206 18.9835 10.8518 18.9311 10.9738C18.8787 11.0958 18.8025 11.2061 18.707 11.2984L12.707 17.2984C12.5195 17.4859 12.2652 17.5912 12 17.5912C11.7349 17.5912 11.4806 17.4859 11.293 17.2984L5.29303 11.2984C5.10556 11.1109 5.00024 10.8566 5.00024 10.5914C5.00024 10.3262 5.10556 10.0719 5.29303 9.88439Z"
          fill="currentColor"
        />
      </svg>
    </div>
    <div
      class="absolute z-10 top-[60px] left-0 md:-right-10 bg-white text-primary shadow flex flex-col p-[1px] max-h-[50vh] md:w-[270px] overflow-y-auto scrollbar-thin"
      v-show="show"
    >
      <div
        class="hover:bg-primary hover:text-white cursor-pointer border-b last:border-none px-3 py-5"
        v-for="(option, index) in options"
        :key="index"
        @click="select(option)"
      >
        <div class="flex gap-5 font-semibold">
          <component :is="option.slot" v-if="typeof option === 'object'" />
          {{ typeof option === 'string' ? option : option.label }}
        </div>
        <p class="text-sm text-gray-400" v-if="option.subtext !== null">
          {{ option.subtext! }}
        </p>
      </div>
    </div>
  </div>
</template>
