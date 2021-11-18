//@ts-nocheck
import HTTPClientRepository from "~/core/domain/repositories/http/HTTPClientRepository";
import FileRepository from "~/core/domain/repositories/file/FileRepository";

export default class FileService implements FileRepository {
  axios: HTTPClientRepository;
  constructor(axios: HTTPClientRepository) {
    this.axios = axios;
  }

  async uploadFile(data, accessToken): Promise<any> {
    return this.axios.post("/files/upload", data, {
      headers: { Authorization: accessToken }
    });
  }
}
