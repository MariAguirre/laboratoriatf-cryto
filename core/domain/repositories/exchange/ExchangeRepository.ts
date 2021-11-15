import { JSONObject } from "~/types/common";
import { Response } from "../http/HTTPClientRepository";

export default interface ExchangeRepository {
    exchangePublic(data: JSONObject): Response<JSONObject>;
}