import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {TranslateService} from "@ngx-translate/core";
import {WebAuthService} from "../shared/web.auth.service";
import Auth0Cordova from '@auth0/cordova';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = 'LandingPage';

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private translate:TranslateService
  , private webAuthService : WebAuthService) {
    this.webAuthService.handleAuthentication();
   /* if(localStorage.getItem('token')!= null){
      this.rootPage = 'DashboardPage';
    }*/
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.localizeApplication();
      (window as any).handleOpenURL = (url: string) => {
        Auth0Cordova.onRedirectUri(url);
      };
    });
  }
  //This function is used to localization/internationalization
  localizeApplication() {
    let browserLanguage = this.translate.getBrowserLang();
    if( browserLanguage ) {
      this.translate.setDefaultLang(browserLanguage);
    }
    else {
      this.translate.use('en');
    }
 }
}

