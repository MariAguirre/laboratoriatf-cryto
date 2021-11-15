import HTTPClientRepository, { Response } from "~/core/domain/repositories/http/HTTPClientRepository";
import UtilsRepository from "~/core/domain/repositories/utils/UtilsRepository";
import { JSONObject } from "~/types/common";

export default class UtilService implements UtilsRepository {
  axios: HTTPClientRepository;
  constructor(axios: HTTPClientRepository) {
    this.axios = axios;
  }

  getValueObjectById(id: string): Response<JSONObject> {
    return this.axios.get(`/v1utils/value-object/${id}`);
  }
}
