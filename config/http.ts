//@ts-nocheck
import Cookies from "js-cookie";
import storage from "~/shared/ui/utils/storage";
import { NUXT_ENV_API_URL } from "./environments";

export const httpConfiguration = ($axios: any) => {
  const api = $axios.create({
    method: "get",
    headers: {
      "content-type": "application/json; charset=utf-8",
      Authorization: Cookies.get("Auth") || "",
      "k-device":
        storage.get("k-device") ||
        "023de6ec-1077-4fd8-853e-70e515ca8310"
    },
    timeout: 40000,
    withCredentials: false,
    responseType: "json",
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: 2000000,
    maxRedirects: 3
  });
  api.setBaseURL(NUXT_ENV_API_URL);
  return api;
};
