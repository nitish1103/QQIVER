import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SliderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({name:'Slider'})
@Component({
  selector: 'page-slider',
  templateUrl: 'slider.html',
})
export class SliderPage {
  slider1 : string;
  slider2 : string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.slider1 =  'assets/imgs/img/slider1.png';
    this.slider2 =  'assets/imgs/img/slider2.png';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SliderPage');
  }

  goToAreaCheck() {
    this.navCtrl.setRoot('AreaCheck');
  }

}
