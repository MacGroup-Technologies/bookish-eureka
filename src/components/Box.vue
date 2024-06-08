<template>
  <div class="flex items-center justify-between p-5 rounded-[20px] bg-white border border-slate group">
    <div class="">
      <h3 class="md:text-2xl text-primary font-semibold mb-1"><slot name="heading"></slot></h3>
      <slot name="body"></slot>
    </div>
    <svg class="group-hover:translate-x-2 transition-transform ease-in-out !w-[32px] !h-[32px] md:w-[48px] md:h-[48px]" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M22.5854 11.0858C23.3665 10.3047 24.6328 10.3047 25.4138 11.0858L36.4138 22.0858C37.1949 22.8668 37.1949 24.1332 36.4138 24.9142L25.4138 35.9142C24.6328 36.6953 23.3665 36.6953 22.5854 35.9142C21.8044 35.1332 21.8044 33.8668 22.5854 33.0858L32.1712 23.5L22.5854 13.9142C21.8044 13.1332 21.8044 11.8668 22.5854 11.0858Z"
        fill="#8C92AB"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.0858 11.0858C11.8668 10.3047 13.1332 10.3047 13.9142 11.0858L24.9142 22.0858C25.6953 22.8668 25.6953 24.1332 24.9142 24.9142L13.9142 35.9142C13.1332 36.6953 11.8668 36.6953 11.0858 35.9142C10.3047 35.1332 10.3047 33.8668 11.0858 33.0858L20.6716 23.5L11.0858 13.9142C10.3047 13.1332 10.3047 11.8668 11.0858 11.0858Z"
        fill="#8C92AB"
      />
    </svg>
  </div>
</template>
