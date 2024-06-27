<script lang="ts" setup>
import { ref } from 'vue'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide'

import '@splidejs/vue-splide/css'

const splide = ref()
</script>
<template>
  <Splide
    ref="splide"
    :has-track="false"
    class="bg-primary mt-16 md:h-[50vh] rounded relative max-w-[100%]"
    :options="{ rewind: true, autoplay: true }"
    aria-label="Testimonials"
  >
    <SplideTrack>
      <SplideSlide>
        <div class="md:h-[50vh] md:w-5/6 pt-16 pb-[100px] md:pb-[20px] px-10 text-left text-white flex flex-col justify-between">
          <p class="font-[300]">
            I was overwhelmed by the complexity of the U.S. citizenship process, but Immigration
            Document Preparation Services made it feel manageable. From helping me fill out the
            N-400 form to providing study materials for the citizenship test, they were with me
            every step of the way. I'm thrilled to say that I am now a proud U.S. citizen, and I
            couldn't have done it without their support.
          </p>
          <div class="flex gap-3">
            <img src="@/assets/imgs/avataaars.png" class="w-[70px] rounded-full" />
            <h3 class="text-[24px] opacity-75">Jane Doe</h3>
          </div>
        </div>
      </SplideSlide>
    </SplideTrack>
    <div class="absolute top-5 right-5 flex gap-5">
      <svg
        @click="splide.go('<')"
        class="w-[32px] cursor-pointer"
        viewBox="0 0 65 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M62.0891 22.2596C59.8678 12.8041 52.4818 5.42316 43.0249 3.20821C36.1952 1.6086 29.0881 1.61099 22.2595 3.21517C12.804 5.43646 5.42305 12.8224 3.2081 22.2793C1.6085 29.109 1.61088 36.2162 3.21506 43.0448C5.43635 52.5002 12.8223 59.8812 22.2792 62.0961C29.1089 63.6957 36.2161 63.6934 43.0446 62.0892C52.5001 59.8679 59.8811 52.482 62.096 43.025C63.6956 36.1954 63.6932 29.0882 62.0891 22.2596Z"
          stroke="#FFFCFC"
          stroke-width="2.40991"
        />
        <path
          d="M44.5679 32.6471L20.7353 32.6551M20.7353 32.6551L29.2441 24.1406M20.7353 32.6551L29.2498 41.1639"
          stroke="#FFFCFC"
          stroke-width="2.40991"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <svg
        @click="splide.go('>')"
        class="w-[32px] cursor-pointer"
        viewBox="0 0 65 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.91095 22.2596C5.13223 12.8041 12.5182 5.42316 21.9751 3.20821C28.8048 1.6086 35.9119 1.61099 42.7405 3.21517C52.196 5.43646 59.577 12.8224 61.7919 22.2793C63.3915 29.109 63.3891 36.2162 61.7849 43.0448C59.5637 52.5002 52.1777 59.8812 42.7208 62.0961C35.8911 63.6957 28.7839 63.6934 21.9554 62.0892C12.4999 59.8679 5.11894 52.482 2.90399 43.025C1.30437 36.1954 1.30675 29.0882 2.91095 22.2596Z"
          stroke="#FFFCFC"
          stroke-width="2.40991"
        />
        <path
          d="M20.432 32.6471L44.2646 32.6551M44.2646 32.6551L35.7558 24.1406M44.2646 32.6551L35.7501 41.1639"
          stroke="#FFFCFC"
          stroke-width="2.40991"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <svg
      class="fill-white/50 w-[140px] absolute bottom-0 right-5"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M6.67,26.06c.09,0,8.77-.14,8.77-11.89A7.22,7.22,0,1,0,5.67,20.9v4.16A1,1,0,0,0,6.67,26.06ZM3,14.17a5.22,5.22,0,1,1,10.44,0c0,7.5-3.88,9.31-5.77,9.75V20.17a1,1,0,0,0-.75-1A5.21,5.21,0,0,1,3,14.17Z"
        ></path>
        <path
          d="M22.22,26.06c.09,0,8.78-.14,8.78-11.89a7.22,7.22,0,1,0-9.78,6.73v4.16A1,1,0,0,0,22.22,26.06ZM18.56,14.17a5.22,5.22,0,1,1,10.44,0c0,7.5-3.89,9.31-5.78,9.75V20.17a1,1,0,0,0-.75-1A5.21,5.21,0,0,1,18.56,14.17Z"
        ></path>
      </g>
    </svg>
  </Splide>
</template>

<style>
.splide__arrows {
  display: none !important;
}
</style>
