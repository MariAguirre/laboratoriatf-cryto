import { NuxtAxiosInstance } from "@nuxtjs/axios";
import { AxiosResponse } from "axios";

export type Response<T> = Promise<AxiosResponse<T>> 

export default interface HTTPClientRepository extends NuxtAxiosInstance {}