import HTTPClientRepository from "~/core/domain/repositories/http/HTTPClientRepository";
import SharedValuesRepository from "~/core/domain/repositories/shared/SharedValuesRepository";
import { JSONObject } from "~/types/common";

export default class KuzzleService implements SharedValuesRepository {
  axios : HTTPClientRepository;
  constructor(axios: HTTPClientRepository) {
    this.axios = axios;
  }

  async listCountries() {
    const response = await this.axios.post(
      "/v1/kuzzle/ubigeo/countries/_search?size=300",
      {
        _source: {
          includes: ["code", "name"]
        },
        sort: [{ code: "asc" }]
      }
    );
    return response.data.result.hits.map((hit: JSONObject) => {
      return { id: hit._id, ...hit._source };
    });
  }

  async listUbigeos() {
    let departments: JSONObject[] = [];
    let provinces: JSONObject[] = [];
    let districts: JSONObject[] = [];
    const response = await this.axios.post(
      "/v1/kuzzle/ubigeo/peru/_search?size=2100",
      {
        _source: {
          includes: ["name", "code", "department", "district", "province"]
        },
        sort: [{ code: "asc" }]
      }
    );
    response.data.result.hits
      .map((hit: JSONObject) => {
        return { id: hit._id, ...hit._source };
      })
      .map((ubigeo: JSONObject) => {
        ubigeo.department === 1 && departments.push(ubigeo);
        ubigeo.province === 1 && provinces.push(ubigeo);
        ubigeo.district === 1 && districts.push(ubigeo);
      });

    return [departments, provinces, districts];
  }

  // listar las ocupaciones("code", "name", "testify":true,false)

  async listOccupations() {
    const response = await this.axios.post(
      "/v1/kuzzle/miscellaneous/occupation/_search?size=30",
      {
        _source: {
          includes: ["code", "name", "testify"]
        },
        sort: [{ code: "asc" }]
      }
    );
    return response.data.result.hits.map((hit: JSONObject) => {
      return { id: hit._id, ...hit._source };
    });
  }

  //  listar actividades con sectores
  async listActivitiesAndsSectors() {
    let sectors: JSONObject[] = [];
    let activities: JSONObject[] = [];
    const response = await this.axios.post(
      "/v1/kuzzle/miscellaneous/activities/_search?size=200",
      {
        _source: {
          includes: ["code", "name", "sector", "activity"]
        },
        sort: [{ code: "asc" }]
      }
    );

    response.data.result.hits
      .map((hit: JSONObject) => {
        return { id: hit._id, ...hit._source };
      })
      .map((sectorAndActivity: JSONObject) => {
        sectorAndActivity.sector === 1 && sectors.push(sectorAndActivity);
        sectorAndActivity.activity === 1 && activities.push(sectorAndActivity);
      });
    return [sectors, activities];
  }
}
