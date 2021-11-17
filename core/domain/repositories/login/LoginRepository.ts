import { JSONObject } from "~/types/common";


export default interface LoginRepository {
  login(data: JSONObject): Promise<void>;
}
