//@ts-nocheck
import HTTPClientRepository from "~/core/domain/repositories/http/HTTPClientRepository";
import AccountsRepository from "~/core/domain/repositories/accounts/AccountsRepository";


export default class AccountsService implements AccountsRepository {
  axios: HTTPClientRepository;
  constructor(axios: HTTPClientRepository) {
    this.axios = axios;
  }

  async getAccount(accessToken, params): Promise<any> {
    return this.axios.get(`/accounts`, {
      params,
      headers: { Authorization: accessToken }
    });
  }
}
