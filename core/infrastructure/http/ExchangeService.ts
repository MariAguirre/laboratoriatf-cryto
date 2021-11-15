import ExchangeRepository from "~/core/domain/repositories/exchange/ExchangeRepository";
import HTTPClientRepository, { Response } from "~/core/domain/repositories/http/HTTPClientRepository";
import { JSONObject } from "~/types/common";

export default class ExchangeService implements ExchangeRepository {
  axios: HTTPClientRepository;
  constructor(axios: HTTPClientRepository) {
    this.axios = axios;
  }

  exchangePublic(data: JSONObject): Response<JSONObject> {
    return this.axios.get(`/v1/exchange/calculates`,{
      params: data
    })
  }
  
}
