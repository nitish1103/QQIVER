import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import { SplashScreen   } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import {LoginPageModule} from "../pages/login/login.module";

import {WidgetUtils} from "../shared/widget.util";
import {HcService} from "../shared/HcService";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
/*
import {AuthInterceptor} from "../interceptor/auth.interceptor";
*/

import {CollectFailedRequestService} from "../shared/CollectFailedRequestService";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {MultiViewControlService} from "../shared/MultiViewControlService";
import {DashboardPageModule} from "../pages/dashboard/dashboard.module";
import {LoginPage} from "../pages/login/login";
import {NativeAuthService} from '../shared/native.auth.service';
import { WebAuthService } from "../shared/web.auth.service";
import { IonicStorageModule} from "@ionic/storage";
import {DashboardPage} from "../pages/dashboard/dashboard";

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DashboardPageModule,
    IonicModule.forRoot(MyApp),
    LoginPageModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    DashboardPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HcService,
    MultiViewControlService,
    CollectFailedRequestService,
   /* {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},*/
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WidgetUtils,
    NativeAuthService,
    WebAuthService
  ]
})
export class AppModule {
}
export function createTranslateLoader(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}


