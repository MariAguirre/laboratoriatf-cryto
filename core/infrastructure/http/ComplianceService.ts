import ComplianceRepository from "~/core/domain/repositories/compliance/ComplianceRepository";
import HTTPClientRepository, { Response } from "~/core/domain/repositories/http/HTTPClientRepository";
import { JSONObject } from "~/types/common";

export default class ComplianceService implements ComplianceRepository {
  axios: HTTPClientRepository;
  constructor(axios: HTTPClientRepository) {
    this.axios = axios;
  }

  saveAddress(customerId: string, data: JSONObject): Response<void> {
    const userId = customerId;
    return this.axios.put(
      `/v2/compliance/additional-information/${userId}/address`,
      data
    );
  }
  saveOccupation(customerId: string, data: JSONObject): Response<void> {
    const userId = customerId;
    return this.axios.put(
      `/v2/compliance/additional-information/${userId}/economy-activity`,
      data
    );
  }
  savePep(customerId: string, data: JSONObject): Response<void> {
    const userId = customerId;
    return this.axios.put(
      `/v2/compliance/additional-information/${userId}/pep`,
      data
    );
  }
  listOfRequirements(
    profileId: string,
    isCompany: boolean
  ): Response<JSONObject> {
    let endpoint;
    if (isCompany) {
      endpoint = `/v2/compliance/companies/${profileId}/can-operate`;
    } else {
      endpoint = `/v2/compliance/customers/${profileId}/can-operate`;
    }
    return this.axios.get(endpoint);
  }
}
