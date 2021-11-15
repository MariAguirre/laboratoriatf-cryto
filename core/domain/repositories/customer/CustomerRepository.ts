import { JSONObject } from "~/types/common";
import { Response } from "../http/HTTPClientRepository";

export default interface CustomerRepository {
  register(data: JSONObject, device: string): Promise<any>;
  registerCompany(data: JSONObject): Response<void>;
  login(data: JSONObject, kDevice: string): Promise<void>;
  getAccount(customerId: string): Response<JSONObject>;
  getMe(filters: JSONObject | null) : Response<JSONObject>;
  getCompanies(): Promise<JSONObject[]>;
  requestChangePassword(data: JSONObject): Response<void>;
  resetPassword(data: JSONObject, accessToken: string): Response<void>;
  reSendVerifyCode(): Response<void>;
  confirmEmailWithCode(data: JSONObject): Response<void>;
  logOut(): Promise<void>;
  savePersonalData(data: JSONObject): Response<void>;
  listProfiles(customerId: string): Response<JSONObject>;
  complianceCanOperate(userId: string): Response<JSONObject>;
}
