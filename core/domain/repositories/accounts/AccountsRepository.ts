export default interface TransaccionRepository {
  getAccount(accessToken: string, params: any): Promise<any>;
}
