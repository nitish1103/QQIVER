import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BoardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({name:'Board'})
@Component({
  selector: 'page-board',
  templateUrl: 'board.html',
})
export class BoardPage {

    boatImage : string;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.boatImage = 'assets/imgs/img/board-profile-bitmap.png';
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BoardPage');
  }

    goToChat() {
        this.navCtrl.setRoot('ChatPage');
    }

}
