<!-- eslint-disable vue/no-parsing-error -->
<script lang="ts" setup>
defineProps<{
  type: 'solid' | 'outline'
  color: string
  size: 'large' | 'medium' | 'small'
  mode?: ''
}>()
</script>
<template>
  <button
    class="hover:opacity-75 rounded-[5px] flex items-center justify-center"
    :class="size === 'large' ? 'px-10 py-3' : size === 'medium' ? 'px-5 py-3' : 'px-3 py-2'"
  >
    <slot></slot>
  </button>
</template>
