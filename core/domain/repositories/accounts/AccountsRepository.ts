import { JSONObject } from "~/types/common";

export default interface TransaccionRepository {
  getAccount(data: JSONObject, accessToken: string): Promise<any>;
}
