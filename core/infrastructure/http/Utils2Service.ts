import HTTPClientRepository from "~/core/domain/repositories/http/HTTPClientRepository";
import Utils2Repository from "~/core/domain/repositories/utils2/Utils2Repository";
import { JSONObject } from "~/types/common";

export default class Utils2Service implements Utils2Repository {
  axios: HTTPClientRepository;
  constructor(axios: HTTPClientRepository) {
    this.axios = axios;
  }
  async findUtils(): Promise<JSONObject> {
    const res = await this.axios.get("/utils");
    return res.data.data;
  }
}
