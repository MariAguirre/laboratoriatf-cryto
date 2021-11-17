import { JSONObject } from "~/types/common";


export default interface Utils2Repository {
    findUtils(): Promise<JSONObject>;
}