import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({name : 'LandingPage'})
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {
  companyLogo : string;
  giftGif : string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.companyLogo =  'assets/imgs/QQIVER.jpeg';
    this.giftGif =  'https://acegif.com/wp-content/uploads/gift-42.gif';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingPage');
  }

  goToLogin() {
    this.navCtrl.setRoot('LoginPage');
  }
  goToSlider() {
    this.navCtrl.setRoot('Slider');
  }

}
