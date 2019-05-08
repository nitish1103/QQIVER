import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({name:'LoginPage'})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

    backButton : string;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.backButton = 'assets/imgs/img/backarrow.png';
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  goToMenu() {
      this.navCtrl.setRoot('StorePage');
  }

}
