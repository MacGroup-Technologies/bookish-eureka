<script setup lang="ts">
import AppButton from '@/components/Button.vue'
</script>

<template>
  <main>
    <div class="flex flex-col items-center">
      <div class="md:h-[90vh] px-5 py-10 md:w-page flex flex-col md:flex-row gap-16 md:gap-48 justify-between items-center bg-white">
        <div class="md:w-2/3">
          <h1 class="capitalize text-3xl md:text-5xl font-bold text-primary md:w-[70%]">
            Your <span class="text-red">Immigration Journey</span> starts here
          </h1>
          <p class="my-5 text-xl opacity-75">
            Unlock the Doors to Your Dream Life in a New Homeland with Our Simplified Immigration
            Solutions and Expert Guidance.
          </p>
          <div class="flex flex-col md:flex-row gap-5 md:gap-10">
            <AppButton type="solid" color="" size="large" class="bg-link text-white">
              Get Started Now
            </AppButton>
            <AppButton
              type="outline"
              color=""
              size="large"
              class="border-[2px] border-link text-link"
            >
              Learn More
            </AppButton>
          </div>
          <div class="my-5 md:my-16 flex items-center gap-5">
            <div class="font-bold text-4xl text-primary">50,000+</div>
            <p class="text-red md:w-[100px]">Customers Trust Us</p>
          </div>
        </div>
        <div class="md:w-1/3">
          <img src="@/assets/imgs/black_lady_with_a_microphone.webp" class="md:w-full h-auto" />
        </div>
      </div>
    </div>
  </main>
</template>
