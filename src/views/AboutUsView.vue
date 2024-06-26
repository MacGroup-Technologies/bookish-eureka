<script lang="ts" setup>
import { ref } from 'vue'

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
  <main class="flex flex-col items-center">
    <section class="md:w-page px-5">
      <div class="py-10">
        <h1 class="capitalize text-3xl md:text-4xl font-bold text-primary mb-3">
          About <span class="text-red">Us</span>
        </h1>
        <p class="md:w-1/2">
          Welcome to Temu Immigration Document Preparation Services, where your journey to a new
          beginning unfolds. Founded by experienced immigration experts, we dedicate ourselves to
          helping individuals and families navigate the complexities of the U.S. immigration system.
        </p>
      </div>

      <div class="flex flex-col md:flex-row items-center justify-between">
        <div class="md:w-1/2">
          <h3 class="text-3xl text-black font-bold mb-2">Our Mission</h3>
          <p class="">
            Our mission is to provide accessible, accurate, and reliable immigration assistance. We
            strive to empower our clients by offering the tools and support needed to successfully
            complete their immigration applications independently.
          </p>
        </div>
        <img src="@/assets/imgs/dart-board.webp" width="400px" />
      </div>

      <div class="flex flex-col md:flex-row items-center justify-between">
        <div class="md:w-1/2 md:order-2">
          <h3 class="text-3xl text-black font-bold mb-2">Our Vision</h3>
          <p class="">
            We envision a world where everyone has the opportunity to live, work, and thrive in
            their country of choice. At Temu Immigration Document Preparation Services, we commit to
            making the U.S. immigration process more understandable and accessible to people from
            all walks of life.
          </p>
        </div>
        <img src="@/assets/imgs/running-on-charts.webp" width="400px" class="md:order-1" />
      </div>
    </section>

    <section class="bg-slate flex items-center justify-center w-full">
      <div class="md:w-page px-5 py-20">
        <div class="relative">
          <h2 class="text-3xl font-bold bg-[#f0f2f6]">Our Values</h2>
          <div class="bg-[#C1C7DE] pt-[2px] absolute top-5 left-[200px] right-0"></div>
        </div>
        <div class="py-10 grid gap-5 grid-cols-1 md:grid-cols-4">
          <div class="text-center">
            <svg
              class="inline h-[60px]"
              viewBox="0 0 100 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.5188 3.29327C7.89312 14.6542 -0.239358 29.6355 0.0053943 30.0311C0.169959 30.298 1.9287 31.4835 3.91425 32.6659L7.5233 34.816L8.91521 32.5941C9.68059 31.3715 12.9402 25.6591 16.1578 19.8993C19.3755 14.1396 22.5346 8.55753 23.1779 7.49535L24.3478 5.56366L20.6238 3.15683C18.5754 1.83313 16.6976 0.75 16.4511 0.75C16.2045 0.75 15.335 1.89477 14.5188 3.29327ZM79.4092 3.13349L75.6823 5.54212L77.1418 8.08299C77.9443 9.48029 81.4863 15.7403 85.0134 21.9938C88.5405 28.2472 91.6797 33.6796 91.9909 34.0656C92.4056 34.5809 93.5013 34.2039 96.1236 32.6414C98.0864 31.4727 99.8278 30.2956 99.9941 30.0269C100.348 29.4536 84.5275 1.18924 83.6975 0.912171C83.3881 0.809243 81.4582 1.8086 79.4092 3.13349ZM43.4875 9.45276C41.3871 9.90876 39.5948 10.3582 39.5044 10.4527C38.8725 11.1104 33.6442 18.4398 32.3905 20.4259C31.5425 21.7688 30.849 23.5461 30.849 24.3755C30.849 25.6124 31.1374 25.8835 32.4551 25.8835C35.0313 25.8835 38.8737 23.6795 41.7593 20.5468C43.8388 18.2896 44.9895 17.5469 46.9122 17.222C49.1198 16.8492 49.9289 17.0987 54.3763 19.5229C60.604 22.9177 68.7951 28.2801 76.0766 33.7293C82.3229 38.4035 82.2325 38.397 86.002 34.4582L88.1952 32.1668L82.1123 21.232L76.0294 10.2971L73.3365 10.6364C71.6675 10.8471 68.3996 10.5108 64.7432 9.75257C57.8794 8.32954 49.2269 8.20746 43.4875 9.45276ZM17.8334 21.384C14.4601 27.4507 11.6996 32.6342 11.6996 32.9023C11.6996 33.171 12.5278 34.3947 13.5404 35.6233C15.271 37.7225 15.4577 37.8021 16.6653 36.9566C18.7358 35.5066 21.1516 35.8417 23.1695 37.8596L24.9725 39.6626L26.8228 38.1061C28.2602 36.8961 29.083 36.6274 30.5091 36.8997C32.7824 37.3342 35.6363 40.361 35.6363 42.3381C35.6363 43.4129 36.0426 43.9149 37.1341 44.189C39.0622 44.6731 41.6204 47.7125 41.6204 49.5191C41.6204 50.5897 42.0435 51.0146 43.4073 51.3144C46.8596 52.0726 48.4394 56.2262 46.7501 60.1015C46.4024 60.8986 46.7866 61.2427 48.604 61.7603C54.642 63.4802 58.8548 63.0517 60.1755 60.5844C60.6501 59.697 60.0361 59.226 56.0034 57.3829C51.0682 55.1269 50.0647 54.3017 51.0521 53.3143C51.4399 52.9265 53.5086 53.6614 57.0919 55.4608C60.0888 56.9664 63.3124 58.1979 64.2555 58.1979C66.2195 58.1979 68.1518 56.3937 67.8526 54.8396C67.7365 54.2364 64.9808 52.2275 61.4131 50.1457C57.9835 48.144 55.0663 46.1746 54.9316 45.7694C54.4277 44.2578 56.9573 45.1351 63.1634 48.6233C69.6084 52.2461 71.7339 52.8337 73.4448 51.4658C74.8631 50.3318 75.1503 48.2212 74.0199 47.2409C73.4795 46.773 70.4497 44.879 67.2877 43.0335C64.1251 41.1874 60.8936 39.1516 60.1067 38.5095C58.8554 37.4892 58.801 37.2935 59.6765 36.9524C60.3341 36.6963 63.4812 38.2216 68.843 41.3956C73.3341 44.0544 77.6217 46.2296 78.371 46.2296C81.0363 46.2296 82.6485 42.824 80.9663 40.7481C79.8144 39.3269 72.4634 33.6527 66.1555 29.316C58.9554 24.3659 49.6578 19.3009 47.7698 19.3009C46.8356 19.3009 45.1086 20.4463 42.9226 22.5156C37.5979 27.556 32.871 29.3477 29.9489 27.4328C27.517 25.8392 27.9287 23.1661 31.4013 17.9993L34.3473 13.6159L30.7712 12.8793C28.8036 12.4742 26.6104 11.7339 25.8965 11.2337C25.1826 10.734 24.4567 10.3312 24.2825 10.339C24.109 10.3468 21.2073 15.3172 17.8334 21.384ZM16.259 40.5046C14.4039 42.9365 14.2555 45.0507 15.8395 46.484C17.5785 48.0584 19.5168 47.4288 21.4598 44.6588C22.9876 42.4805 23.1031 42.0228 22.4424 40.7691C20.8446 37.7369 18.448 37.6346 16.259 40.5046ZM24.626 44.3536C22.4532 47.2715 20.6759 50.2336 20.6759 50.9362C20.6759 52.5483 22.6925 54.6074 24.2718 54.6074C25.918 54.6074 33.2312 44.7509 33.2378 42.5236C33.2426 40.8223 31.3756 39.0486 29.5791 39.0486C29.0124 39.0486 26.8557 41.3585 24.626 44.3536ZM31.7496 49.8788C27.8425 55.0162 27.4619 56.0095 28.6833 57.8742C29.3691 58.9208 30.2176 59.3948 31.4043 59.3948C32.8423 59.3948 33.637 58.7102 36.1779 55.2825C39.4272 50.8997 39.9257 48.8429 38.1323 47.22C36.1318 45.4092 34.6932 46.0082 31.7496 49.8788ZM38.3567 56.1897C35.7949 59.545 35.5758 61.9273 37.7014 63.3204C39.6995 64.6291 41.0914 64.0379 43.3217 60.9321C45.3953 58.0448 45.719 55.7995 44.2708 54.3507C42.5342 52.6147 40.6349 53.2054 38.3567 56.1897Z"
                fill="#1847ED"
              />
            </svg>
            <h3 class="font-bold text-xl my-3">Compassion</h3>
            <p class="opacity-85">
              We treat every client with respect and understanding, recognizing the personal nature
              of immigration.
            </p>
          </div>

          <div class="text-center">
            <svg
              class="inline h-[60px]"
              viewBox="0 0 100 96"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M71.7792 67.4573L80.9042 95.549L50.0167 73.099L71.7792 67.4573ZM100 36.7906H61.8125L50.0208 0.453125L38.1875 36.799L0 36.749L30.925 59.2365L19.0917 95.5448L50.0167 73.099L69.1125 59.2365L100 36.7906Z"
                fill="#1847ED"
              />
            </svg>

            <h3 class="font-bold text-xl my-3">Integrity</h3>
            <p class="opacity-85">
              We render our services with unwavering honesty, transparency, and fairness in all our
              interactions.
            </p>
          </div>

          <div class="text-center">
            <svg
              class="inline h-[60px]"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M39.348 1.12228C38.7634 1.78862 37.7819 3.32772 37.1675 4.54196C35.6658 7.50656 35.0403 7.81964 29.8058 8.22208L25.3035 8.56841L25.1227 12.0317C24.8214 17.7947 24.4509 18.5102 20.4369 21.0779C18.2127 22.5006 16.6542 23.9954 16.6667 24.6943C16.6785 25.3489 17.4563 27.1318 18.3949 28.6557C20.5574 32.1668 20.5463 33.8776 18.336 37.3791C16.143 40.8528 16.3384 42.0441 19.4207 43.9794C24.3767 47.0923 24.9572 47.9837 24.9572 52.4867C24.9572 57.2121 25.4053 57.7087 29.4782 57.4975C33.8648 57.271 35.6893 58.3017 37.8151 62.2076C40.0296 66.2763 41.1967 66.5464 45.3908 63.9635C48.8631 61.8245 50.2304 61.8245 53.7027 63.9635C57.8968 66.5464 59.0639 66.2763 61.2784 62.2076C63.4042 58.3017 65.2286 57.271 69.6153 57.4975C73.6881 57.7087 74.1363 57.2121 74.1363 52.4867C74.1363 47.9837 74.7168 47.0923 79.6728 43.9794C82.7551 42.0441 82.9504 40.8528 80.7575 37.3791C78.5472 33.8776 78.5361 32.1668 80.6986 28.6557C81.6372 27.1318 82.415 25.3489 82.4268 24.6943C82.4393 23.9954 80.8808 22.5006 78.6566 21.0779C74.6426 18.5102 74.2721 17.7947 73.9708 12.0317L73.79 8.56841L69.0528 8.22208C64.004 7.85289 63.4104 7.45807 60.8282 2.74449C59.1561 -0.306689 57.9107 -0.526956 54.0899 1.55311C49.9658 3.79734 48.9483 3.80635 45.1469 1.63346C41.5693 -0.411974 40.7555 -0.483318 39.348 1.12228ZM43.2193 12.3988C37.1114 14.2836 30.7326 20.9276 29.0453 27.1616C27.9356 31.2628 28.6034 38.4534 30.4244 42.0206C32.6028 46.2867 36.1125 49.9135 39.9672 51.8827C42.7912 53.3249 44.2853 53.5915 49.5467 53.5915C54.8082 53.5915 56.3023 53.3249 59.1263 51.8827C62.9373 49.9357 66.427 46.3539 68.7335 42.0206C71.011 37.742 71.0242 27.9062 68.7592 23.6532C64.7279 16.0852 58.7841 12.2458 50.6121 11.9306C47.7403 11.8198 44.4134 12.0303 43.2193 12.3988ZM42.6201 18.1805C38.4932 20.1269 36.6119 22.0421 34.7127 26.2313C32.1041 31.9846 33.1161 38.7304 37.3247 43.647C40.5297 47.3922 44.2943 49.0588 49.5467 49.0588C59.0155 49.0588 65.8389 42.0663 65.8174 32.385C65.8098 28.8995 63.3481 23.1594 60.894 20.9061C56.1028 16.5056 48.5576 15.3808 42.6201 18.1805ZM25.8154 77.3153C22.2897 85.2199 19.4076 92.078 19.4103 92.5539C19.418 93.7342 20.1231 93.6538 24.6531 91.9589C29.765 90.0464 30.9397 90.604 32.9069 95.8766C33.7533 98.1444 34.8422 100 35.3264 100C35.8105 100 39.1284 93.4827 42.6991 85.5164C46.2698 77.5508 49.3036 70.9206 49.4408 70.7828C49.5786 70.6456 52.6589 77.1629 56.2857 85.2663C59.9125 93.3698 63.2636 100 63.7325 100C64.2014 100 65.3596 98.064 66.3064 95.6979C67.3621 93.0588 68.541 91.2323 69.3548 90.9739C70.0849 90.7426 72.406 91.1976 74.5131 91.9866C78.9683 93.6531 79.6755 93.7307 79.6832 92.5539C79.6901 91.3583 66.9721 62.9425 66.4297 62.9425C66.1894 62.9425 65.6027 63.8838 65.1261 65.0343C62.9103 70.3845 57.2907 72.0753 52.5148 68.8301C51.1136 67.8777 49.7774 67.0985 49.5467 67.0985C49.3161 67.0985 47.9799 67.8777 46.5787 68.8301C41.8028 72.0753 36.1832 70.3845 33.9674 65.0343C33.4908 63.8838 32.9041 62.9425 32.6638 62.9425C32.4227 62.9425 29.3411 69.4106 25.8154 77.3153Z"
                fill="#1847ED"
              />
            </svg>

            <h3 class="font-bold text-xl my-3">Excellence</h3>
            <p class="opacity-85">
              We aim for the highest quality in all our services, ensuring that our tools and
              resources are the best available.
            </p>
          </div>

          <div class="text-center">
            <svg
              class="inline h-[60px]"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M55 15C55 12.2386 52.7615 10 50 10C47.2385 10 45 12.2386 45 15V20C45 22.7614 47.2385 25 50 25C52.7615 25 55 22.7614 55 20V15Z"
                fill="#1847ED"
              />
              <path
                d="M78.284 28.7865C80.2365 26.8339 80.2365 23.6681 78.284 21.7154C76.3315 19.7628 73.1655 19.7628 71.213 21.7154L67.6775 25.251C65.725 27.2036 65.725 30.3694 67.6775 32.322C69.63 34.2747 72.796 34.2747 74.7485 32.322L78.284 28.7865Z"
                fill="#1847ED"
              />
              <path
                d="M90 49.999C90 52.7605 87.7615 54.999 85 54.999H80C77.2385 54.999 75 52.7605 75 49.999C75 47.2376 77.2385 44.999 80 44.999H85C87.7615 44.999 90 47.2376 90 49.999Z"
                fill="#1847ED"
              />
              <path
                d="M25.251 32.322C27.2036 34.2747 30.3694 34.2747 32.322 32.322C34.2747 30.3694 34.2747 27.2036 32.322 25.251L28.7865 21.7154C26.8339 19.7628 23.6681 19.7628 21.7154 21.7154C19.7628 23.668 19.7628 26.8339 21.7154 28.7865L25.251 32.322Z"
                fill="#1847ED"
              />
              <path
                d="M25.0001 49.999C25.0001 52.7605 22.7615 54.999 20.0001 54.999H15.0001C12.2387 54.999 10.0001 52.7605 10.0001 49.999C10.0001 47.2376 12.2387 44.999 15.0001 44.999H20.0001C22.7615 44.999 25.0001 47.2376 25.0001 49.999Z"
                fill="#1847ED"
              />
              <path
                d="M40 80V75H60V80C60 85.523 55.523 90 50 90C44.4771 90 40 85.523 40 80Z"
                fill="#1847ED"
              />
              <path
                d="M60.0045 70.001C60.0775 68.2995 61.038 66.7695 62.384 65.7065C67.023 62.044 70 56.37 70 50.001C70 38.9553 61.0455 30.001 50 30.001C38.9543 30.001 30 38.9553 30 50.001C30 56.37 32.9773 62.044 37.616 65.7065C38.9621 66.7695 39.9226 68.2995 39.9956 70.001H60.0045Z"
                fill="#1847ED"
              />
            </svg>

            <h3 class="font-bold text-xl my-3">Innovation</h3>
            <p class="opacity-85">
              We continually improve our services and software to meet the evolving needs of our
              clients.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="md:w-page px-5 py-10 md:py-20 bg-white">
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
    </section>

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
          process. Join our community of subscribers today and stay informed every step of the way.
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
  </main>
</template>
