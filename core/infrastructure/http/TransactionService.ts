//@ts-nocheck
import HTTPClientRepository from "~/core/domain/repositories/http/HTTPClientRepository";
import TransactionRepository from "~/core/domain/repositories/login/TransactionRepository";


export default class TransactionService implements TransactionRepository {
  axios: HTTPClientRepository;
  constructor(axios: HTTPClientRepository) {
    this.axios = axios;
  }

  async createTransaction(data, accessToken): Promise<any> {
    return this.axios.post("/transactions", data, {
      headers: { Authorization: accessToken }
    });
  }
}
