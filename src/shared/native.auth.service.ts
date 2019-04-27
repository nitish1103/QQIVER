import { Injectable, NgZone } from '@angular/core';
import { Storage } from '@ionic/storage';

// Import AUTH_CONFIG, Auth0Cordova, and auth0.js
import { AUTH_CONFIG } from './auth.config';
import Auth0Cordova from '@auth0/cordova';
import * as auth0 from 'auth0-js';
import { WidgetUtils } from '../shared/widget.util';
import {HcService} from "./HcService";

@Injectable()
export class NativeAuthService {
  authConfig: any = AUTH_CONFIG;
  Auth0 = new auth0.WebAuth(this.authConfig);
  Client = new Auth0Cordova(this.authConfig);
  accessToken: string;
  user: any;
  loggedIn: boolean;
  loading = true;

  constructor(
    public zone: NgZone, private storage: Storage, private hcService: HcService, private widgetUtil: WidgetUtils) {
    this.storage.get('profile').then(user => this.user = user);
    this.storage.get('access_token').then(token => this.accessToken = token);
    this.storage.get('expires_at').then(exp => {
      this.loggedIn = Date.now() < JSON.parse(exp);
      this.loading = false;
    });
  }

  login() {
    this.loading = true;
    const options = {
      scope: 'openid profile offline_access'
    };
    // Authorize login request with Auth0: open login page and get auth results
    this.hcService.getAuth0Config(localStorage.getItem('baseUrl')).subscribe((result: any) => {
      this.authConfig.clientID = result.config.clientId;
      this.authConfig.clientId = result.config.clientId;
      this.authConfig.audience = result.config.audience;
      this.authConfig.domain = result.config.domain.split('//')[1];
      this.authConfig.scope = AUTH_CONFIG.scope;
      this.authConfig.redirectUri = AUTH_CONFIG.redirectUri;
      this.authConfig.responseType = AUTH_CONFIG.responseType;
      this.Client = new Auth0Cordova(this.authConfig);
      this.Auth0 = new auth0.WebAuth(this.authConfig);
      this.Client.authorize(options, (err, authResult) => {
        if (err) {
          throw err;
        }
        // Set access token
        this.storage.set('access_token', authResult.accessToken);
        this.accessToken = authResult.accessToken;
        this.hcService.getHcTokenFromSsoToken(localStorage.getItem('baseUrl'), authResult.idToken).subscribe((result: any) => {
          localStorage.setItem('token', result.token);
        }, (error) => {
          this.widgetUtil.showToast('Please try again');
        });

        // Set access token expiration
        const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        this.storage.set('expires_at', expiresAt);
        // Set logged in
        this.loading = false;
        this.loggedIn = true;
        // Fetch user's profile info
        this.Auth0.client.userInfo(this.accessToken, (err, profile) => {
          if (err) {
            throw err;
          }
          this.storage.set('profile', profile).then(val =>
            this.zone.run(() => this.user = profile)
          );
        });
      });
    }, (error) => {
      console.log(error);
    });
    // Authorize login request with Auth0: open login page and get auth results
  }

  logout() {
    this.storage.remove('profile');
    this.storage.remove('access_token');
    this.storage.remove('expires_at');
    localStorage.clear();
    this.accessToken = null;
    this.user = null;
    this.loggedIn = false;
  }
}
