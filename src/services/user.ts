import { axiosHttp } from "@/config/axios";

export const getUserProfile = async function () {
  return await axiosHttp.get('/authorization/user_profile/')
}