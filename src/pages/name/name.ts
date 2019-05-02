import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({name:'NamePage'})
@Component({
  selector: 'page-name',
  templateUrl: 'name.html',
})
export class NamePage {
  congratsLogo : string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.congratsLogo = 'assets/imgs/img/name.png';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NamePage');
  }

  goToStore() {
    this.navCtrl.setRoot('StorePage')
  }

}
