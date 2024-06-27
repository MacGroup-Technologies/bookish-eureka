<script lang="ts" setup>
import { ref } from 'vue'

const activeTab = ref(1)
</script>
<template>
  <div class="text-left">
    <div class="border-t">
      <div
        class="flex justify-between items-center py-3 cursor-pointer"
        @click="activeTab === 1 ? (activeTab = 0) : (activeTab = 1)"
      >
        <h3 class="text-xl">What is the difference between a Green Card and U.S. citizenship?</h3>
        <div
          class="p-4 rounded-full bg-primary-10 transition-colors ease-in-out"
          :class="{ 'rotate-45 !bg-primary': activeTab === 1 }"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23 12H1M12 23L12 1"
              stroke="#A6ACC4"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>
      <p class="py-3 opacity-75 md:w-5/6" v-show="activeTab === 1">
        You can check the status of your immigration case online using the USCIS Case Status Online
        tool. Simply enter your receipt number (found on your receipt notice) to track the progress
        of your application or petition. If you have questions about your case status or need
        assistance interpreting the information provided, our team is here to help.
      </p>
    </div>
    
    <div class="border-t">
      <div
        class="flex justify-between items-center py-3 cursor-pointer"
        @click="activeTab === 2 ? (activeTab = 0) : (activeTab = 2)"
      >
        <h3 class="text-xl">How long does it take to process a visa application?</h3>
        <div
          class="p-4 rounded-full bg-primary-10 transition-colors ease-in-out"
          :class="{ 'rotate-45 !bg-primary': activeTab === 2 }"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23 12H1M12 23L12 1"
              stroke="#A6ACC4"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>
      <p class="py-3 opacity-75 md:w-5/6" v-show="activeTab === 2">
        You can check the status of your immigration case online using the USCIS Case Status Online
        tool. Simply enter your receipt number (found on your receipt notice) to track the progress
        of your application or petition. If you have questions about your case status or need
        assistance interpreting the information provided, our team is here to help.
      </p>
    </div>
    
    <div class="border-t">
      <div
        class="flex justify-between items-center py-3 cursor-pointer"
        @click="activeTab === 3 ? (activeTab = 0) : (activeTab = 3)"
      >
        <h3 class="text-xl">What are the eligibility requirements for naturalization?</h3>
        <div
          class="p-4 rounded-full bg-primary-10 transition-colors ease-in-out"
          :class="{ 'rotate-45 !bg-primary': activeTab === 3 }"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23 12H1M12 23L12 1"
              stroke="#A6ACC4"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>
      <p class="py-3 opacity-75 md:w-5/6" v-show="activeTab === 3">
        You can check the status of your immigration case online using the USCIS Case Status Online
        tool. Simply enter your receipt number (found on your receipt notice) to track the progress
        of your application or petition. If you have questions about your case status or need
        assistance interpreting the information provided, our team is here to help.
      </p>
    </div>
    
    <div class="border-t">
      <div
        class="flex justify-between items-center py-3 cursor-pointer"
        @click="activeTab === 4 ? (activeTab = 0) : (activeTab = 4)"
      >
        <h3 class="text-xl">Can I apply for adjustment of status if I entered the United States illegally?</h3>
        <div
          class="p-4 rounded-full bg-primary-10 transition-colors ease-in-out"
          :class="{ 'rotate-45 !bg-primary': activeTab === 4 }"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23 12H1M12 23L12 1"
              stroke="#A6ACC4"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>
      <p class="py-3 opacity-75 md:w-5/6" v-show="activeTab === 4">
        You can check the status of your immigration case online using the USCIS Case Status Online
        tool. Simply enter your receipt number (found on your receipt notice) to track the progress
        of your application or petition. If you have questions about your case status or need
        assistance interpreting the information provided, our team is here to help.
      </p>
    </div>
    
    <div class="border-y">
      <div
        class="flex justify-between items-center py-3 cursor-pointer"
        @click="activeTab === 5 ? (activeTab = 0) : (activeTab = 5)"
      >
        <h3 class="text-xl">How can I check the status of my immigration case?</h3>
        <div
          class="p-4 rounded-full bg-primary-10 transition-colors ease-in-out"
          :class="{ 'rotate-45 !bg-primary': activeTab === 5 }"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23 12H1M12 23L12 1"
              stroke="#A6ACC4"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>
      <p class="py-3 opacity-75 md:w-5/6" v-show="activeTab === 5">
        You can check the status of your immigration case online using the USCIS Case Status Online
        tool. Simply enter your receipt number (found on your receipt notice) to track the progress
        of your application or petition. If you have questions about your case status or need
        assistance interpreting the information provided, our team is here to help.
      </p>
    </div>
  </div>
</template>
