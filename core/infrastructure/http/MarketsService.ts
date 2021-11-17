import HTTPClientRepository from "~/core/domain/repositories/http/HTTPClientRepository";
import MarketsRepository from "~/core/domain/repositories/markets/MarketsRepository";
import { JSONObject } from "~/types/common";

export default class MarketsService implements MarketsRepository {
  axios: HTTPClientRepository;
  constructor(axios: HTTPClientRepository) {
    this.axios = axios;
  }
  async findAll(): Promise<JSONObject[]> {
    const res = await this.axios.get("/markets");
    return res.data.data;
  }
}
