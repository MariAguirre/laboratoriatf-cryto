import { JSONObject } from "~/types/common";
import { Response } from "../http/HTTPClientRepository";

export default interface UtilsRepository {
  getValueObjectById(id: string): Response<JSONObject>;
}
