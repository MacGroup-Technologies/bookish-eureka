import { ref, type Ref } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore('userStore', () => {
  const auth: Ref<{ access_token: string, refresh_token: string }> = ref({ access_token: '', refresh_token: '' });
  const user: Ref<{ email: string, first_name: string, last_name: string }> = ref({ email: '', first_name: '', last_name: '' });

  const setAuth = function (payload: { access_token: string, refresh_token: string }) {
    auth.value = payload
  }

  const setUser = function (payload: { email: string, first_name: string, last_name: string }) {
    user.value = payload
  }

  const logUserOut = function () {
    auth.value = { access_token: '', refresh_token: '' }
    user.value = { email: '', first_name: '', last_name: '' }
  }

  return { auth, user, setAuth, setUser, logUserOut };
});