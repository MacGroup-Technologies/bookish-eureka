<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/userStore';

import { useNotification } from '@kyvg/vue3-notification';
import { logUserIn as loginService } from './services/auth';
import { getUserProfile } from '@/services/user';

import AppButton from '@/components/Button.vue';

const { notify } = useNotification()
const { setAuth, setUser } = useUserStore()
const router = useRouter()

const loading = ref(false)
const isPassword = ref(true)
const auth = reactive({ email: '', password: '' })

const logUserIn = async function () {
  loading.value = true

  try {
    const response = await loginService(auth);
    setAuth({ refresh_token: response.data.data.refresh, access_token: response.data.data.access })

    const user = await getUserProfile()
    setUser(user.data.data)

    router.push('/')
  } catch (error) {
    console.log(error)
    notify({
      title: 'An Error Occurred',
      text: error.response.data.message ?? error.message,
      type: 'error'
    })
  }

  loading.value = false
}

</script>

<template>
  <section class="md:w-1/2 md:min-h-[70vh] p-5 my-10 mx-5 md:mx-auto border-2 rounded-[20px] bg-[#fff]">
    <h1 class="font-bold text-3xl text-center mb-7">Login to your account</h1>
    <form @submit.prevent="logUserIn()" class="md:w-2/3 my-0 mx-auto">
      <div class="text-black flex flex-col gap-1 mb-5">
        <label for="email" class="font-[600]">Email Address</label>
        <input
          v-model="auth.email"
          type="email"
          placeholder="John.doe@email.com"
          class="border bg-[#fff] text-lg p-2 rounded-[5px] focus:outline-primary-light"
          required
        />
      </div>

      <div class="text-black flex flex-col gap-1 mb-5">
        <label for="email" class="font-[600]">Password</label>
        <div class="relative mb-1">
          <input
            v-model="auth.password"
            :type="isPassword ? 'password' : 'text'"
            placeholder="Secret password"
            class="border bg-[#fff] text-lg p-2 rounded-[5px] w-full focus:outline-primary-light"
            required
          />
          <div class="absolute top-0 bottom-0 right-0 flex items-center pr-2 cursor-pointer" @click="isPassword = !isPassword">
            <svg
              v-if="!isPassword"
              class="w-[24px]"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M2.99902 3L20.999 21M9.8433 9.91364C9.32066 10.4536 8.99902 11.1892 8.99902 12C8.99902 13.6569 10.3422 15 11.999 15C12.8215 15 13.5667 14.669 14.1086 14.133M6.49902 6.64715C4.59972 7.90034 3.15305 9.78394 2.45703 12C3.73128 16.0571 7.52159 19 11.9992 19C13.9881 19 15.8414 18.4194 17.3988 17.4184M10.999 5.04939C11.328 5.01673 11.6617 5 11.9992 5C16.4769 5 20.2672 7.94291 21.5414 12C21.2607 12.894 20.8577 13.7338 20.3522 14.5"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>

            <svg
              v-else
              class="w-[24px]"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
          </div>
        </div>
        <router-link to="/auth/forgot-password" class="text-primary-light inline">Forgot Password?</router-link>
      </div>

      <AppButton type="solid" mode="submit" class="bg-primary-light text-white w-full" size="medium" :loading="loading">Login</AppButton>

      <div class="text-center mt-5">
        Don't have an account? <router-link to="/auth/signup" class="text-primary-light">Sign Up</router-link>
      </div>
    </form>
  </section>
</template>
