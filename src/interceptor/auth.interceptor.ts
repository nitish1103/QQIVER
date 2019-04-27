import { Injectable } from "@angular/core";
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import  'rxjs/add/operator/do';
import {App, ToastController} from "ionic-angular";
import {HttpStatusCode} from "../shared/HttpStatusCode";
/*

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private app: App,private toastCtrl: ToastController){};

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let cloneRequest =req.clone();

    let authenticationToken = localStorage.getItem('token');
    if(authenticationToken != null) {
      cloneRequest = cloneRequest.clone({
        headers: req.headers.set('Bearer',authenticationToken).append('Content-Type', 'application/json')
      });
    }


    return next.handle(cloneRequest).do((event: HttpEvent<any>) => {},
      (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === HttpStatusCode.UNAUTHORIZED) {
          localStorage.removeItem('token');
          console.log('Token cleared successfully ');
          //Store failed request and component name in session storgae
          sessionStorage.setItem('_PREVIOUS_REQUEST_',JSON.stringify(cloneRequest));
          sessionStorage.setItem('_PREVIOUS_SCREEN_',this.app.getActiveNavs().pop().getActive().name);
          console.log('Request cached successfully');

          //Redirect user to login screen
          this.app.getRootNav().push('LoginPage');
        }
        if(err.status === HttpStatusCode.INTERNET_ERROR) {
          let toast = this.toastCtrl.create({
            //TODO: It should be internationalized
            message: 'There is some problem with internet',
            duration: 3000
          });
          toast.present();
        }
      }
    });

  }
}
*/
