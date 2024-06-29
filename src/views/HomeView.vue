<script setup lang="ts">
import { ref } from 'vue';

import AppButton from '@/components/Button.vue'
import AppBox from '@/components/Box.vue'
import TestimonialSection from '@/components/Testimonial.vue'
import FqaSection from '@/components/fqa.vue'

const email = ref('');

const submitEmail = async function () {
  try {
    console.log(email.value)    
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <main>
    <section class="flex flex-col items-center">
      <div
        class="md:h-[90vh] px-5 py-10 md:w-page flex flex-col md:flex-row gap-16 md:gap-48 justify-between items-center bg-white"
      >
        <div class="md:w-2/3">
          <h1 class="capitalize text-3xl md:text-5xl font-bold text-primary md:w-[70%]">
            Your <span class="text-red">Immigration Journey</span> starts here
          </h1>
          <p class="my-5 text-xl opacity-75">
            Unlock the Doors to Your Dream Life in a New Homeland with Our Simplified Immigration
            Solutions and Expert Guidance.
          </p>
          <div class="flex flex-col md:flex-row gap-5 md:gap-10">
            <router-link to="/auth/signup" class="block">
              <AppButton type="solid" color="" size="large" class="w-full bg-link text-white">
                Get Started Now
              </AppButton>
            </router-link>
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

      <div class="bg-slate w-full flex flex-col items-center">
        <div class="md:w-page px-5 py-10 md:py-20">
          <div class="md:w-2/3 my-0 mx-auto text-center">
            <h2 class="font-bold text-3xl">Popular Preparation Services</h2>
            <p class="mt-3 mb-5 opacity-85">
              Discover our top services for smooth immigration. From Green Card renewal to U.S.
              citizenship, we've got you covered. Simplify your journey with us.
            </p>
            <router-link to="/uscis-forms" class="inline-block">
              <AppButton
                type="outline"
                size="small"
                color=""
                class="bg-white flex gap-3 mx-auto my-0 border-[3px] border-primary-light text-primary-light"
              >
                <svg
                  width="24"
                  height="26"
                  viewBox="0 0 24 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.5722 17.8399C13.1362 18.7337 11.4409 19.25 9.625 19.25C4.44733 19.25 0.25 15.0527 0.25 9.875C0.25 4.69733 4.44733 0.5 9.625 0.5C14.8027 0.5 19 4.69733 19 9.875C19 12.3321 18.0547 14.5685 16.508 16.2402L23.6339 23.3661C24.122 23.8543 24.122 24.6457 23.6339 25.1339C23.1457 25.622 22.3543 25.622 21.8661 25.1339L14.5722 17.8399ZM16.5 9.875C16.5 13.672 13.422 16.75 9.625 16.75C5.82804 16.75 2.75 13.672 2.75 9.875C2.75 6.07804 5.82804 3 9.625 3C13.422 3 16.5 6.07804 16.5 9.875Z"
                    fill="currentColor"
                  />
                </svg>
                Search Immigration Form
              </AppButton>
            </router-link>
          </div>
          <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
            <router-link to="/green-card-renewal">
              <AppBox>
                <template #heading> Green Card Renewal or Replacement </template>
                <template #body>
                  <p class="opacity-75">Form I-90 Preparation Service</p>
                </template>
              </AppBox>
            </router-link>

            <router-link to="">
              <AppBox>
                <template #heading> U.S. Citizenship Form </template>
                <template #body>
                  <p class="opacity-75">N-400 Preparation Service</p>
                </template>
              </AppBox>
            </router-link>

            <router-link to="">
              <AppBox>
                <template #heading> Replace Certificate of Citizenship </template>
                <template #body>
                  <p class="opacity-75">Form N-565 Preparation Service</p>
                </template>
              </AppBox>
            </router-link>

            <router-link to="">
              <AppBox>
                <template #heading> B-2 Tourist Visa </template>
                <template #body>
                  <p class="opacity-75">Application Guide Package</p>
                </template>
              </AppBox>
            </router-link>

            <router-link to="">
              <AppBox>
                <template #heading> Employment Authorization Document (EAD) </template>
                <template #body>
                  <p class="opacity-75">Form I-765 Preparation Service</p>
                </template>
              </AppBox>
            </router-link>

            <router-link to="">
              <AppBox>
                <template #heading> Petition for Alien Relative (Green Card) </template>
                <template #body>
                  <p class="opacity-75">Form I-130 Preparation Service</p>
                </template>
              </AppBox>
            </router-link>
          </div>
        </div>
      </div>

      <div class="md:w-page px-5 py-10 md:py-20">
        <div class="md:w-2/3 my-0 mx-auto text-center">
          <h2 class="font-bold text-3xl">Other Immigration Form Packages and Services</h2>
          <p class="mt-3 mb-5 opacity-85">
            Discover tailored solutions for your immigration needs. From travel documents to family
            sponsorship, we're here to help. Simplify your journey with us.
          </p>
          <router-link
            to="/immigration-form-packages-and-services"
            class="inline-block w-1/2 md:w-1/4"
          >
            <AppButton
              type="outline"
              size="small"
              color=""
              class="bg-white flex gap-3 mx-auto my-0 border-[3px] border-primary-light text-primary-light w-full"
            >
              View All
            </AppButton>
          </router-link>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-28 my-10">
          <div class="">
            <div class="bg-slate rounded-[30px] flex items-center justify-center p-10">
              <img
                src="@/assets/imgs/USA_permanent_resident_card.webp"
                class="w-[450px]"
                width="450px"
              />
            </div>
            <div class="my-10 text-center">
              <h3 class="text-2xl font-bold">
                <span class="text-primary">I-90</span>
                Green Card Renewal / Replacement
              </h3>
              <p class="opacity-85 my-3">
                Renew or replace your Green Card effortlessly with our I-90 service. Stay on track
                with your permanent resident status.
              </p>
            </div>
            <div class="flex items-center justify-center">
              <router-link to="/green-card-renewal" class="md:w-1/3">
                <AppButton
                  size="large"
                  type="solid"
                  color=""
                  class="bg-primary-light text-white w-full"
                >
                  Start Now
                </AppButton>
              </router-link>
            </div>
          </div>

          <div class="">
            <div class="bg-slate rounded-[30px] flex items-center justify-center p-10">
              <img
                src="@/assets/imgs/Immigration_documents_and_USA_flag.webp"
                class="w-[350px]"
                width="350px"
              />
            </div>
            <div class="my-10 text-center">
              <h3 class="text-2xl font-bold">
                <span class="text-primary">N-400</span>
                U.S Citizenship (Naturalization)
              </h3>
              <p class="opacity-85 my-3">
                Achieve your dream of U.S. citizenship with our N-400 preparation service. From
                eligibility assessment to interview preparation, we're here to support you.
              </p>
            </div>
            <div class="flex items-center justify-center">
              <router-link to="/us-citizenship-naturalization" class="md:w-1/3">
                <AppButton
                  size="large"
                  type="solid"
                  color=""
                  class="bg-primary-light text-white w-full"
                >
                  Start Now
                </AppButton>
              </router-link>
            </div>
          </div>

          <div class="">
            <div class="bg-slate rounded-[30px] flex items-center justify-center p-10">
              <img
                src="@/assets/imgs/Immigration_documents_and_USA_flag.webp"
                class="w-[350px]"
                width="350px"
              />
            </div>
            <div class="my-10 text-center">
              <h3 class="text-2xl font-bold">
                <span class="text-primary">I-821D</span>
                Deferred Action Renewal (DACA)
              </h3>
              <p class="opacity-85 my-3">
                Renew your DACA status smoothly with our I-821D preparation service. We'll assist
                you through the renewal process, ensuring your continued eligibility for Deferred
                Action.
              </p>
            </div>
            <div class="flex items-center justify-center">
              <router-link to="/deferref-action-renewal" class="md:w-1/3">
                <AppButton
                  size="large"
                  type="solid"
                  color=""
                  class="bg-primary-light text-white w-full"
                >
                  Start Now
                </AppButton>
              </router-link>
            </div>
          </div>

          <div class="">
            <div class="bg-slate rounded-[30px] flex items-center justify-center p-10">
              <img
                src="@/assets/imgs/USA_employment_authorization_card.webp"
                class="w-[550px]"
                width="550px"
              />
            </div>
            <div class="my-10 text-center">
              <h3 class="text-2xl font-bold">
                <span class="text-primary">I-765</span>
                Employment Authorisation
              </h3>
              <p class="opacity-85 my-3">
                Secure your employment authorisation with our I-765 preparation service. We'll guide
                you through the application process, ensuring timely submission and accuracy.
              </p>
            </div>
            <div class="flex items-center justify-center">
              <router-link to="/employment-authorisation" class="md:w-1/3">
                <AppButton
                  size="large"
                  type="solid"
                  color=""
                  class="bg-primary-light text-white w-full"
                >
                  Start Now
                </AppButton>
              </router-link>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-center mt-32">
          <router-link
            to="/immigration-form-packages-and-services"
            class="inline-block w-1/2 md:w-1/4"
          >
            <AppButton
              type="outline"
              size="small"
              color=""
              class="bg-white flex gap-3 mx-auto my-0 border-[3px] border-primary-light text-primary-light w-full"
            >
              View All
            </AppButton>
          </router-link>
        </div>
      </div>

      <div class="bg-slate w-full flex flex-col items-center">
        <div class="md:w-page py-10 md:py-20 px-5">
          <div class="md:w-2/3 my-0 mx-auto text-center">
            <h2 class="font-bold text-3xl">Immigration Resources</h2>
            <p class="mt-3 mb-5 opacity-85">
              We understand that navigating the immigration process can be daunting. That's why
              we're committed to providing you with the resources you need to make informed
              decisions and progress confidently toward your immigration goals.
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-28 my-10">
            <div class="">
              <div class="bg-[#EDEDEE] rounded-[30px] flex items-center justify-center p-10">
                <img
                  src="@/assets/imgs/form_placeholder.webp"
                  class="w-[450px] rounded-3xl"
                  width="450px"
                />
              </div>
              <div class="my-10 text-center">
                <h3 class="text-2xl font-bold">Understanding Visa Types</h3>
                <p class="opacity-85 my-3">
                  Deciding which visa best suits your needs is a crucial step in your immigration
                  journey. Our comprehensive guide to visa types provides detailed information on
                  the various categories available, from work visas and student visas to
                  family-based visas and more. Gain insights into eligibility criteria, application
                  processes, and key considerations to ensure you select the visa that aligns with
                  your goals and aspirations.
                </p>
              </div>
              <div class="flex items-center justify-center">
                <router-link to="/resources/understanding-visa-types" class="md:w-1/3">
                  <AppButton
                    size="large"
                    type="solid"
                    color=""
                    class="bg-primary-light text-white w-full"
                  >
                    Learn More
                  </AppButton>
                </router-link>
              </div>
            </div>

            <div class="">
              <div class="bg-[#EDEDEE] rounded-[30px] flex items-center justify-center p-10">
                <img
                  src="@/assets/imgs/form_placeholder.webp"
                  class="w-[450px] rounded-3xl"
                  width="450px"
                />
              </div>
              <div class="my-10 text-center">
                <h3 class="text-2xl font-bold">Navigating the Citizenship Process</h3>
                <p class="opacity-85 my-3">
                  Becoming a U.S. citizen is a significant milestone that offers numerous benefits
                  and opportunities. Our detailed guide to the citizenship process walks you through
                  each stage, from obtaining your Green Card to applying for naturalization. Learn
                  about eligibility requirements, the citizenship test and interview, and the rights
                  and responsibilities of U.S. citizens. With our guidance, you'll be well-prepared
                  to embark on this transformative journey toward citizenship.
                </p>
              </div>
              <div class="flex items-center justify-center">
                <router-link to="/resources/navigating-the-citizenship-process" class="md:w-1/3">
                  <AppButton
                    size="large"
                    type="solid"
                    color=""
                    class="bg-primary-light text-white w-full"
                  >
                    Learn More
                  </AppButton>
                </router-link>
              </div>
            </div>

            <div class="">
              <div class="bg-[#EDEDEE] rounded-[30px] flex items-center justify-center p-10">
                <img
                  src="@/assets/imgs/form_placeholder.webp"
                  class="w-[450px] rounded-3xl"
                  width="450px"
                />
              </div>
              <div class="my-10 text-center">
                <h3 class="text-2xl font-bold">Adjustment of Status Made Simple</h3>
                <p class="opacity-85 my-3">
                  For individuals already residing in the United States, adjusting your status to
                  obtain permanent residency is a crucial step toward building a stable and secure
                  future. Our comprehensive resource on adjustment of status outlines the process in
                  clear, easy-to-understand terms. Discover the necessary forms, supporting
                  documents, and procedural steps involved in applying for lawful permanent
                  residence. With our guidance, you can navigate this process with confidence and
                  peace of mind.
                </p>
              </div>
              <div class="flex items-center justify-center">
                <router-link to="/resources/adjustment-of-status" class="md:w-1/3">
                  <AppButton
                    size="large"
                    type="solid"
                    color=""
                    class="bg-primary-light text-white w-full"
                  >
                    Learn More
                  </AppButton>
                </router-link>
              </div>
            </div>

            <div class="">
              <div class="bg-[#EDEDEE] rounded-[30px] flex items-center justify-center p-10">
                <img
                  src="@/assets/imgs/form_placeholder.webp"
                  class="w-[450px] rounded-3xl"
                  width="450px"
                />
              </div>
              <div class="my-10 text-center">
                <h3 class="text-2xl font-bold">Adjustment of Status Made Simple</h3>
                <p class="opacity-85 my-3">
                  For individuals already residing in the United States, adjusting your status to
                  obtain permanent residency is a crucial step toward building a stable and secure
                  future. Our comprehensive resource on adjustment of status outlines the process in
                  clear, easy-to-understand terms. Discover the necessary forms, supporting
                  documents, and procedural steps involved in applying for lawful permanent
                  residence. With our guidance, you can navigate this process with confidence and
                  peace of mind.
                </p>
              </div>
              <div class="flex items-center justify-center">
                <router-link to="/resources/adjustment-of-status" class="md:w-1/3">
                  <AppButton
                    size="large"
                    type="solid"
                    color=""
                    class="bg-primary-light text-white w-full"
                  >
                    Learn More
                  </AppButton>
                </router-link>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-center mt-32">
            <router-link to="/resources" class="inline-block w-1/2 md:w-1/4">
              <AppButton
                type="outline"
                size="small"
                color=""
                class="bg-white flex gap-3 mx-auto my-0 border-[3px] border-primary-light text-primary-light w-full"
              >
                View All
              </AppButton>
            </router-link>
          </div>
        </div>
      </div>

      <div class="md:w-page px-5 py-10 md:py-20">
        <div class="md:w-2/3 my-0 mx-auto text-center">
          <h2 class="font-bold text-3xl">Trusted by Our Clients</h2>
          <p class="mt-3 mb-5 opacity-85">
            We take pride in helping individuals and families achieve their immigration goals. But
            don't just take our word for it—here's what some of our satisfied clients have to say
            about their experience with us:
          </p>
          <div class="px-5 w-full">
            <TestimonialSection />
          </div>
        </div>
      </div>

      <div class="md:w-page px-5 py-10 md:py-20">
        <div class="md:w-2/3 my-0 mx-auto text-center">
          <h2 class="font-bold text-3xl">Frequently asked questions</h2>
          <p class="mt-3 mb-5 opacity-85">Your Immigration Questions Answered</p>
          <div class="px-5 w-full">
            <FqaSection />
          </div>
        </div>
      </div>

      <div class="md:w-page px-5 py-10 md:py-20">
        <div class="bg-black text-white rounded text-center p-10 md:p-20">
          <h3 class="font-bold text-3xl">Stay Informed with Our Newsletter</h3>
          <p class="md:w-2/3 my-10 mx-auto">
            Sign up for our newsletter to receive the latest updates, news, and insights on
            immigration trends, policy changes, and helpful tips for navigating the immigration
            process. Join our community of subscribers today and stay informed every step of the
            way.
          </p>
          <form @submit.prevent="submitEmail()" class="md:w-2/3 my-0 mx-auto">
            <div
              class="w-full bg-white rounded-[8px] overflow-hidden flex p-2 border-2 border-transparent focus-within:border-primary-light"
            >
              <input
                v-model="email"
                type="email"
                class="text-lg w-full focus:outline-none px-2 text-black"
                placeholder="Enter your email"
                required
              />
              <AppButton type="solid" color="" size="medium" class="bg-primary-light" mode="submit"
                >Subscribe</AppButton
              >
            </div>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>
