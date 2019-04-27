// Need of this file: Use of Hardcoded status code is not a good practice instead of this we should define each status code with its significance
// http-status-codes module is also available https://www.npmjs.com/package/http-status-codes
// Angular core lib doesn't contain such module (Reason: keeping the sizing on the minimum as possible because Angular runs on browser)
// Reference: https://gitter.im/angular/angular?at=5a951144888332ee3ad93465


export enum HttpStatusCode {

  INTERNET_ERROR = 0,
  UNAUTHORIZED = 401

}
