import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({name:'StorePage'})
@Component({
  selector: 'page-store',
  templateUrl: 'store.html',
})
export class StorePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StorePage');
  }

    goToLogin() {
      this.navCtrl.setRoot('LoginPage');
    }

}
