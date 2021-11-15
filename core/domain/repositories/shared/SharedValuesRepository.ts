import { JSONObject } from "~/types/common";

export default interface SharedValuesRepository {
    listCountries(): Promise<JSONObject[]>
    listUbigeos(): Promise<JSONObject[]>
    listOccupations(): Promise<JSONObject[]>
    listActivitiesAndsSectors(): Promise<JSONObject[]>
}