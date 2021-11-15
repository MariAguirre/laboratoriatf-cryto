import { JSONObject } from "~/types/common";
import { Response } from "../http/HTTPClientRepository";

export default interface ComplianceRepository {
    saveAddress(customerId: string,data: JSONObject): Response<void>
    saveOccupation(customerId: string,data: JSONObject): Response<void>
    savePep(customerId: string,data: JSONObject): Response<void>
    listOfRequirements(profileId:string, isCompany: boolean): Response<JSONObject>
}