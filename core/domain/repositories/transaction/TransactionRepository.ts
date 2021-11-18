import { JSONObject } from "~/types/common";

export default interface TransaccionRepository {
  createTransaction(data: JSONObject, accessToken: string): Promise<any>;
  checkTransaction(data: JSONObject, accessToken: string, id: string): Promise<any>;
}
