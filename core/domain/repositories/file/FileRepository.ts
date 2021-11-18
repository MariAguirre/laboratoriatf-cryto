import { JSONObject } from "~/types/common";

export default interface TransaccionRepository {
  uploadFile(data: JSONObject, accessToken: string): Promise<any>;
}
