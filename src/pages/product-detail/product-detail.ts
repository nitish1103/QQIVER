import {Component, OnDestroy} from '@angular/core';
import {App, IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {_DetailPage} from "../_DetailPage";
import {isUndefined} from "ionic-angular/util/util";
import {HcService} from "../../shared/HcService";
import {WidgetUtils} from "../../shared/widget.util";
import {Subscription} from "rxjs/Subscription";
import {DashboardPage} from "../dashboard/dashboard";
import {WebAuthService} from "../../shared/web.auth.service";
import {NativeAuthService} from "../../shared/native.auth.service";

@IonicPage({name :'ProductDetailPage'})
@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html',
})
export class ProductDetailPage extends _DetailPage{

  facilityList : Array<Object> = [];
  inventoryList : Array<String> = [];
  facilityName : string = "";
  subscriptions = new Subscription();


  constructor(public navCtrl: NavController, public navParams: NavParams, private hcSercvice: HcService, private widget : WidgetUtils
  , private app : App, private toastCtrl: ToastController) {
    super();
  }

  ionViewDidLoad(){
    this.facilityList = JSON.parse(localStorage.getItem('profile')).facilities;
    this.facilityName = this.facilityList[0]['name'];
  }

  saveLocation(quantity, sku, location) {
    if (localStorage.getItem('inventoryItems')) {
      let inventoryItems = JSON.parse(localStorage.getItem('inventoryItems'));
      let inventoryItem = {
        "quantity":quantity,
        "skuId":sku,
        "locationId":location
      };
      inventoryItems = inventoryItems.filter(inventory => (inventory.sku != inventoryItem.skuId && inventory.location != inventoryItem.locationId));
      inventoryItems.push(inventoryItem);
      localStorage.setItem('inventoryItems', JSON.stringify(inventoryItems));
      this.showToast('Logged Successfully', 'success-toast');
      this.app.getRootNav().setRoot('ProductDetailPage');
    } else {
      let inventoryItems = [{
        "quantity":quantity,
        "skuId":sku,
        "locationId":location
      }];
      localStorage.setItem('inventoryItems', JSON.stringify(inventoryItems));
      this.showToast('Logged Successfully', 'success-toast');
      this.app.getRootNav().setRoot('ProductDetailPage');
    }
  }

  ionViewWillUnload(){
    this.subscriptions.unsubscribe();
  }

  gotToDasboard(){
    this.app.getRootNav().setRoot('DashboardPage');
  }

  showToast(message, cssClass) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 5000,
      cssClass: cssClass,
    });
    toast.present();
  }

}
