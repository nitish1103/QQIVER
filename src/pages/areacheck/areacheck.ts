import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AreacheckPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({name:'AreaCheck'})
@Component({
  selector: 'page-areacheck',
  templateUrl: 'areacheck.html',
})
export class AreacheckPage {
  areaCheck :string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.areaCheck = 'assets/imgs/img/areaCheck.png';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AreacheckPage');
  }

  goToNamePage() {
    this.navCtrl.setRoot('NamePage');
  }

}
