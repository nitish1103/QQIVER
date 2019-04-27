import { Injectable, NgZone } from '@angular/core';
import { Storage } from '@ionic/storage';

// Import AUTH_CONFIG, Auth0Cordova, and auth0.js
import { AUTH_CONFIG } from './auth.config';
import Auth0Cordova from '@auth0/cordova';
import * as auth0 from 'auth0-js';
import {WidgetUtils} from "../shared/widget.util";
import {HcService} from "./HcService";

@Injectable()
export class WebAuthService {
  authConfig: any = AUTH_CONFIG;
  Auth0 = new auth0.WebAuth(this.authConfig);
  accessToken: string;
  user: any;
  loggedIn: boolean;
  loading = true;

  constructor(
    public zone: NgZone, private storage: Storage, private hcService: HcService, private widgetUtil : WidgetUtils) {
    this.storage.get('profile').then(user => this.user = user);
    this.storage.get('access_token').then(token => this.accessToken = token);
    this.storage.get('expires_at').then(exp => {
      this.loggedIn = Date.now() < JSON.parse(exp);
      this.loading = false;
    });
  }

  loginWeb() {
    this.hcService.getAuth0Config(localStorage.getItem('baseUrl')).subscribe((result: any) => {
      this.authConfig.clientID = result.config.clientId;
      this.authConfig.clientId = result.config.clientId;
      this.authConfig.audience = result.config.audience;
      this.authConfig.domain = result.config.domain.split('//')[1];
      this.authConfig.scope = AUTH_CONFIG.scope;
      this.authConfig.redirectUri = window.location.protocol + '//' + window.location.host + '/';
      this.authConfig.responseType = AUTH_CONFIG.responseType;
      this.Auth0 = new auth0.WebAuth(this.authConfig);
      this.Auth0.authorize();
    }, (error) => {
      console.log(error);
    });
  }

  public handleAuthentication(): void {
    this.Auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
      } else if (err) {
        this.widgetUtil.showToast('Something Went Wrong! Please try again');
        console.log(err);
      }
    });
  }

  private setSession(authResult): void {
    // Set the time that the Access Token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.clear();
    // Go back to the home route
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // Access Token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at') || '{}');
    return new Date().getTime() < expiresAt;
  }

  getProfile(){
    this.hcService.userProfile(localStorage.getItem('baseUrl')).subscribe((result: any) => {
      localStorage.setItem('profile', JSON.stringify(result));
    });
  }

}
