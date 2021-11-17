import AnalyticRepository from "~/core/domain/repositories/analytic/AnalyticRepository";
import ComplianceRepository from "~/core/domain/repositories/compliance/ComplianceRepository";
import CustomerRepository from "~/core/domain/repositories/customer/CustomerRepository";
import HTTPClientRepository from "~/core/domain/repositories/http/HTTPClientRepository";
import SharedValuesRepository from "~/core/domain/repositories/shared/SharedValuesRepository";
import UtilsRepository from "~/core/domain/repositories/utils/UtilsRepository";
import AnalyticService from "../http/AnalyticService";
import ComplianceService from "../http/ComplianceService";
import CustomerService from "../http/CustomerService";
import KuzzleService from "../http/KuzzleService";
import UtilService from "../http/UtilService";
import MarketsService from '../http/MarketsService';
import MarketsRepository from "~/core/domain/repositories/markets/MarketsRepository";
import LoginService from "../http/LoginService"
import LoginRepository from "~/core/domain/repositories/login/LoginRepository" 
import Utils2Service from "../http/Utils2Service";
import Utils2Repository from "~/core/domain/repositories/utils2/Utils2Repository";


export function loadHTTPServices(api: HTTPClientRepository) {
    const services = {
        customer: new CustomerService(api),
        compliance: new ComplianceService(api),
        kuzzle: new KuzzleService(api),
        analytic: new AnalyticService(api),
        utils: new UtilService(api),
        markets: new MarketsService(api),
        login: new LoginService(api),
        utils2: new Utils2Service(api),
      };
    return services;
}

export type LoadHTTPServicesType = {
  customer: CustomerRepository,
  compliance: ComplianceRepository,
  kuzzle: SharedValuesRepository,
  analytic: AnalyticRepository,
  utils: UtilsRepository,
  markets: MarketsRepository,
  login: LoginRepository
  utils2: Utils2Repository
}