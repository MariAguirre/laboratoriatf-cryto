//@ts-nocheck
import HTTPClientRepository from "~/core/domain/repositories/http/HTTPClientRepository";
import LoginRepository from "~/core/domain/repositories/login/LoginRepository";


export default class LoginService implements LoginRepository {
  axios: HTTPClientRepository;
  constructor(axios: HTTPClientRepository) {
    this.axios = axios;
  }

  async login(data) {
    return await this.axios.post(
      "/customers/login",
      data
    ).catch(error => {
      return error.response
    });
  }
}
