import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({name:'ChatPage'})
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

  goToStore() {
    this.navCtrl.setRoot('StorePage');
  }

    goToProfile() {
        this.navCtrl.setRoot('ProfilePage');
    }

    goToBoard() {
        this.navCtrl.setRoot('Board');
    }

}
