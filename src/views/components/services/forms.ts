import { axiosHttp } from "@/config/axios";

export const submit_i90 = async function (payload: any) {
  return await axiosHttp.post('/applications/i90-form/', { ...payload })
}