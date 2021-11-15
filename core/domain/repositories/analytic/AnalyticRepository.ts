import { JSONObject } from "~/types/common";
import { Response } from "../http/HTTPClientRepository";
export default interface AnalyticRepository {
    profileAnalytics(companyId: string, device: string): Response<JSONObject>
}