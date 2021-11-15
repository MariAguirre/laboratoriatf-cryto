import AnalitycRepository from "~/core/domain/repositories/analytic/AnalyticRepository";
import HTTPClientRepository, { Response } from "~/core/domain/repositories/http/HTTPClientRepository";
import { JSONObject } from "~/types/common";

export default class AnalyticService implements AnalitycRepository {
  axios: HTTPClientRepository;
  constructor(axios: HTTPClientRepository) {
    this.axios = axios;
  }

  profileAnalytics(companyId: string, device: string): Response<JSONObject> {
    let endpoint;
    if (companyId) {
      endpoint = `/v1/analytics/profile-details/${companyId}`;
    } else {
      endpoint = "/v1/analytics/profile-details";
    }
    return this.axios.get(endpoint, {
      headers: { "k-device": device }
    });
  }


}
