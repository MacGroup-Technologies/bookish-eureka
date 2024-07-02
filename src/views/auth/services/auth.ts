import axios from 'axios';
import { AxiosHttp } from '@/config/AxiosHttp'

import { useUserStore } from '@/stores/userStore'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL + '/authorization',
});

const axiosHttp = new AxiosHttp(axiosInstance);

export const logUserIn = async function (payload: { email: string, password: string }) {
  return await axiosHttp.post('/login/', { ...payload })
}

export const signUserUp = async function (payload: { email: string, password: '', first_name: string, last_name: string }) {
  return await axiosHttp.post('/register/', { ...payload })
}

export const logOutUser = async function () {
  const { auth } = useUserStore()
  return await axiosHttp.post('/logout/', { refresh: auth.access_token }, { headers: { Authorization: `Bearer ${auth.access_token}` } })
}