//@ts-nocheck
import Cookies from "js-cookie";
import localStorage from "localStorage";
import CustomerRepository from "~/core/domain/repositories/customer/CustomerRepository";
import HTTPClientRepository, { Response } from "~/core/domain/repositories/http/HTTPClientRepository";
import { JSONObject } from "~/types/common";

export default class CustomerService implements CustomerRepository {
  axios: HTTPClientRepository;
  constructor(axios: HTTPClientRepository) {
    this.axios = axios;
  }

  async register(data, device) {
    const res = await this.axios.post("/v2/profile/customers/register", data, {
      headers: { "k-device": device }
    });
    Object.assign(this.axios.defaults, {
      headers: { Authorization: res.data.id, "k-device": device }
    });
    if (
      process.env.NUXT_ENV_ENVIRONMENT === "production" ||
      process.env.NUXT_ENV_ENVIRONMENT === "qa"
    ) {
      Cookies.set("Auth", res.data.id, {
        expires: 120,
        domain: "kambista.com",
        secure: true
      });
    } else {
      Cookies.set("Auth", res.data.id, {
        expires: 120
      });
    }
    return res;
  }
  
  async registerCompany(data) : Response<void> {
    return this.axios.post("/v2/profile/companies/", data);
  }
  
  async login(data, kDevice) {
    const res = await this.axios.post("/v2/profile/customers/login", data, {
      headers: { "k-device": kDevice }
    });
    Object.assign(this.axios.defaults, {
      headers: {
        Authorization: res.data.data.id,
        "k-device": kDevice
      }
    });
    if (
      process.env.NUXT_ENV_ENVIRONMENT === "production" ||
      process.env.NUXT_ENV_ENVIRONMENT === "qa"
    ) {
      Cookies.set("Auth", res.data.data.id, {
        expires: 120,
        domain: "kambista.com",
        secure: true
      });
    } else {
      Cookies.set("Auth", res.data.data.id, {
        expires: 120
      });
    }
    return res;
  }

  async getAccount(customerId) : Response<JSONObject> {
    let endpoint = `/v2/profile/customers/${customerId}`;
    const res = await this.axios.get(endpoint);
    localStorage.setItem("authUser", JSON.stringify(res.data));
    return res;
  }

  async getMe(filters = null) : Response<JSONObject> {
    let endpoint = '/v1/profile/customers/me'
    if (filters) {
      endpoint = `${endpoint}?${filters}`
    }
    return this.axios.get(`${endpoint}`);
  }

  async getCompanies() {
    return this.axios.get("/v1/profile/customers/me/company");
  }
  async requestChangePassword(data): Response<void> {
    return this.axios.post(
      "/v2/profile/customers/request-change-password/",
      data
    );
  }
  async resetPassword(data, accessToken): Response<void> {
    return this.axios.post("/v2/profile/customers/reset-password", data, {
      headers: { Authorization: accessToken }
    });
  }
  async reSendVerifyCode(): Response<void> {
    return this.axios.post(
      "/v2/profile/customers/send-verification-email-code"
    );
  }
  async confirmEmailWithCode(data) : Response<void> {
    return this.axios.post("/v2/profile/customers/validate-email", data);
  }
  async logOut() {
    let res = null;
    res = await this.axios.post("/v2/profile/customers/logout");
    delete this.axios.defaults.headers.Authorization;
    localStorage.removeItem("Auth");
    localStorage.removeItem("authUser");
    localStorage.removeItem("k-device");
    localStorage.removeItem("authUser");
    localStorage.removeItem("vuex");
    localStorage.removeItem("creditsPage");
    localStorage.removeItem("personal");
    localStorage.removeItem("company");
    localStorage.removeItem("canOperate");
    localStorage.removeItem("profileDetails");
    if (
      process.env.NUXT_ENV_ENVIRONMENT === "production" ||
      process.env.NUXT_ENV_ENVIRONMENT === "qa"
    ) {
      Cookies.remove("Auth", { domain: "kambista.com" });
    } else {
      Cookies.remove("Auth");
    }
    return res;
  }
  //step 02 of customers personal-information
  async savePersonalData(data) : Response<void> {
    return this.axios.post("/v2/profile/customers/personal-data", data);
  }
  // listar perfiles del usuario
  async listProfiles(customerId) : Response<JSONObject> {
    return this.axios.get(`/v2/profile/customers/${customerId}/profiles`);
  }

  // listar los requerimientos por perfil

  async complianceCanOperate(userId) : Response<JSONObject> {
    return this.axios.get(`/v2/compliance/customers/${userId}/can-operate`);
  }
}
