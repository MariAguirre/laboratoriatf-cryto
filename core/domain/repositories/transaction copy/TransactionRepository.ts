import { JSONObject } from "~/types/common";

export default interface TransaccionRepository {
  createTransaction(data: JSONObject, accessToken: string): Promise<JSONObject>;
}
