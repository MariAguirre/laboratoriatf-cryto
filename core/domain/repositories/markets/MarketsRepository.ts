import { JSONObject } from "~/types/common";

export default interface MarketsRepository {
    findAll(): Promise<JSONObject[]>;
}