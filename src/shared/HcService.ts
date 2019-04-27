import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from "@angular/common/http";

@Injectable()
export class HcService {

  private baseUrlPrefix: string = 'https://';
  private baseUrlSuffix: string = '/hcapi/';
  private loginServiceRoute = 'getAuthenticationToken';

  private url: string;

  constructor(private http: HttpClient){
  }

  login (url: string, username: string, password: string): any {
    return this.http.post(this.baseUrlPrefix + url + this.baseUrlSuffix + this.loginServiceRoute,{},
      {params: new HttpParams().set('USERNAME', username).append('PASSWORD', password),
        observe: 'response'})
  }

  getHcTokenFromSsoToken(url, ssoToken) {
    if (url.startsWith('https://')) {
      this.url = url;
      localStorage.setItem('baseUrl', this.url);
    }
    else {
      this.url = this.baseUrlPrefix + url + this.baseUrlSuffix;
      localStorage.setItem('baseUrl', this.url);
    }
    return this.http.post(this.url + '/getHcTokenFromSsoToken', {},
      {params: new HttpParams().set('accessToken', ssoToken)});
  }


  logout () {
    localStorage.removeItem('token');
    localStorage.removeItem('profile');
    sessionStorage.clear();
  }

  processRequest (request): any {
    let body:any = request.body;
    let url: any = request.url;
    let parmas:any = request.params;
    // TODO: We should use 'request' method instead of 'GET' or 'POST'. At present we are getting some internal error in http.js method ((method.toUpperCase))
    return this.http.post(url,body,parmas);
  }

  updateUserPassword(url:string,currentPassword:string,newPassword:string,newPasswordVerify:string) {
     return this.http.post(url + 'updateUserPassword',{},
      {params: new HttpParams().set('currentPassword', currentPassword).append('newPassword', newPassword).append('newPasswordVerify',newPasswordVerify),
        observe: 'response'})
  }

  userProfile(url):any {
    return this.http.get(url + 'user-profile');
  }

  getAuth0Config(url) {
    if (url.startsWith('https://')) {
      this.url = url;
      localStorage.setItem('baseUrl', this.url);
    }
    else {
      this.url = this.baseUrlPrefix + url + this.baseUrlSuffix;
      localStorage.setItem('baseUrl', this.url);
    }
    return this.http.post(this.url + 'getAuth0ClientConfig', {});
  }



  getRecievingBayProducts(url, facilityId: string){
    return this.http.post( url  +'findStockMovesFromReceiving', {facilityId : facilityId})
  }

  getBulkToPickProducts(url, facilityId: string){
    return this.http.post(url +'findStockMovesRecommended', {facilityId : facilityId})
  }

  getAllProducts(url, facilityId: string){
    return this.http.post(url +'findStockMovesForAllLocation', {facilityId : facilityId})
  }

  getStockMoveNeededProducts(url, facilityId: string){
    return this.http.post(url + 'findStockMovesNeeded', {facilityId : facilityId})
  }

  importInventoryCount(url, body : Object){
    return this.http.post(url + 'importInventoryCount', body);
  }

  processStockMove(url, body : Object){
    return this.http.post(url + 'processPhysicalStockMove', body);
  }

  searchProducts(url, body: Object) {
    return this.http.post(url + 'searchproducts', body);
  }
}
