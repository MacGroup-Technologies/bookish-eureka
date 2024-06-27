<!-- eslint-disable vue/no-parsing-error -->
<script lang="ts" setup>
defineProps<{
  type: 'solid' | 'outline'
  color?: string
  size: 'large' | 'medium' | 'small'
  mode?: 'submit' | 'button' | 'reset'
  loading?: boolean
}>()
</script>
<template>
  <button
    class="hover:opacity-75 rounded-[5px] flex gap-3 items-center justify-center disabled:cursor-not-allowed disabled:bg-gray-800"
    :class="size === 'large' ? 'px-10 py-3' : size === 'medium' ? 'px-5 py-3' : 'px-3 py-2'"
    :type="mode"
    :disabled="loading"
  >
    <svg
      v-if="loading"
      class="w-[24px] animate-spin"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M20.0001 12C20.0001 13.3811 19.6425 14.7386 18.9623 15.9405C18.282 17.1424 17.3022 18.1477 16.1182 18.8587C14.9341 19.5696 13.5862 19.9619 12.2056 19.9974C10.825 20.0328 9.45873 19.7103 8.23975 19.0612"
          stroke="currentColor"
          stroke-width="3.55556"
          stroke-linecap="round"
        ></path>
      </g>
    </svg>
    <slot></slot>
  </button>
</template>
