import { JSONObject } from "~/types/common";
import { Response } from "../http/HTTPClientRepository";

export default interface MarketsRepository {
    findAll(): Promise<JSONObject[]>;
}