import axios from 'axios';
import { AxiosHttp } from './AxiosHttp';
import { useUserStore } from '@/stores/userStore';
import { getRefreshToken } from '@/services/refreshToken';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

let request: any;
let retry = 0;

function retryRequest() {
  return axiosInstance(request).catch(error => {
    return Promise.reject(error);
  });
}

async function getNewToken() {
  const userStore = useUserStore();

  try {
    const response: any = await getRefreshToken(userStore.auth.refresh_token);
    userStore.setAuth(response.data);
    // Retry the request and wait for it to complete before returning
    return await retryRequest();
  } catch (error) {
    console.log(error);
    return error;
  }
}

axiosInstance.interceptors.request.use(config => {
  request = config;
  const userStore = useUserStore();
  config.headers.Authorization = `Bearer ${userStore.auth.access_token}`;
  config.headers.Accept = 'application/json';
  return config;
});

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    if (error.response.status === 401) {
      // Get new Token and then retry the request
      if (retry < 2) {
        retry++;
        // Retry the request and wait for it to complete before returning
        return await getNewToken();
      }
    }
    // If retries are exhausted or the error is not related to 401, return the error
    return Promise.reject(error);
  },
);

export const axiosHttp = new AxiosHttp(axiosInstance);
