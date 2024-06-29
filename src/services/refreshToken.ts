import axios from 'axios';
import { AxiosHttp } from '@/config/AxiosHttp';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL + '/authorization',
});

const axiosHttp = new AxiosHttp(axiosInstance);
export function getRefreshToken(payload: string) {
  return axiosHttp.post<any>('/token/refresh/', { refresh: payload } as any);
}
