import {Component, OnDestroy} from '@angular/core';
import {App, IonicPage, NavController, NavParams, PopoverController, ToastController} from 'ionic-angular';
import {HcService} from "../../shared/HcService";
import {isUndefined} from "ionic-angular/util/util";
import 'rxjs/add/operator/takeUntil';
import {Subscription} from "rxjs/Subscription";
import {MultiViewControlService} from "../../shared/MultiViewControlService";
import {ProductDetailPage} from "../product-detail/product-detail";
import {WebAuthService} from "../../shared/web.auth.service";
import {NativeAuthService} from "../../shared/native.auth.service";

@IonicPage({name : 'DashboardPage'})
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage{

  productImage:string = '../../assets/imgs/notfound.png';
  companyLogo:string = 'assets/imgs/logo.png';
  userLogo:string = 'https://d1n0ct03c4fobh.cloudfront.net/images/default_avatar.png';
  sliderImage:string = '../../assets/imgs/sliderimage';
  cakeImage:string = '../../assets/imgs/cakedemo.jpeg';
  cakeCategoryImage = 'http://www.shemakesandbakes.com/uploads/1/1/0/6/11067272/2660520_orig.jpg';
  flowerCategoryImage = 'https://777flowers.florist/media/catalog/category/Peonies_Flowers_Category.jpg';
  combosCategoryImage = 'https://boxofcake.com/wp-content/uploads/2018/12/surprising-heartilicious-combo-9993510co-080218-A.jpg';
  flowerImage:string = '../../assets/imgs/banner-2.png';
  giftImage:string = '../../assets/imgs/slider.jpg';
  cakeIcon:string = 'https://png.pngtree.com/svg/20170815/e152547c9e.png';
  birthdayIcon:string = 'https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/239602/580/386/m1/fpnw/wm0/happy-birthday-.jpg?1416307997&s=9c1748916c0f11bc73b47cc7d1ea9a54';
  flowerIcon:string = 'data:image/png;base64,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';
  giftIcon:string = 'data:image/png;base64,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';

  selectedFacility : string = '';
  facilityList : Array<Object> = [];
  subscriptions = new Subscription();
  userData : any = '';
  inventoryList : Array<Object> = [];
  showSearchSpinner: boolean = false;
  keywordText: string;
  paramsData : Object = {};
  paramsDataAvailable : boolean;


  constructor(public navCtrl: NavController, public app: App, public navParams: NavParams, private hcService : HcService, private popOverCtrl: PopoverController, private navProxy: MultiViewControlService, private toastCtrl: ToastController) {
  }

  ionViewDidLoad(){
    localStorage.setItem('selectedFacility', this.selectedFacility);
    if (localStorage.getItem('profile') != null) {
      this.userData = JSON.parse(localStorage.getItem('profile'));
      this.facilityList = JSON.parse(localStorage.getItem('profile')).facilities;
      if (this.facilityList.length){
        this.getSelectedFacility();
        localStorage.setItem('selectedFacility', JSON.stringify(this.facilityList[0]));
      }
    }
    if (localStorage.getItem('inventoryItems') != null) {
      this.inventoryList = JSON.parse(localStorage.getItem('inventoryItems'));
    }
  }

  importInventory(){
    this.hcService.importInventoryCount(localStorage.getItem('baseUrl'), {
        facilityId : this.facilityList[0]['facilityId'],
        inventoryCountRegister : this.inventoryList
      }).subscribe((result) => {
      this.showToast('Imported Successfully', 'success-toast');
       localStorage.removeItem('inventoryItems');
      this.app.getRootNav().setRoot('DashboardPage');
      }, (error) => {
      this.showToast(error.error._ERROR_MESSAGE_, 'success-toast');
        console.log('-----------------', error);
      });
  }


  getSelectedFacility(){
    if (this.facilityList.length >= 1){
      if (isUndefined(localStorage.getItem('selectedFacility')) || localStorage.getItem('selectedFacility') == null){
        this.selectedFacility = this.facilityList[0]['facilityId'];
      }else {
        this.selectedFacility = localStorage.getItem('selectedFacility');
      }
    }
  }

  logout() {
    localStorage.clear();
    this.navCtrl.setRoot('LoginPage');
  }

  addCount() {
    this.navCtrl.push('ProductDetailPage');
  }


  deleteItem(item) {
    console.log(item);
    let inventoryItems = JSON.parse(localStorage.getItem('inventoryItems'));
    inventoryItems = inventoryItems.filter(inventory => (inventory.skuId != item.sku && inventory.quantity != item.quantity && inventory.locationId != item.location));
    localStorage.setItem('inventoryItems', JSON.stringify(inventoryItems));
    this.ionViewDidLoad();
  }


  ionViewWillUnload(){
    this.subscriptions.unsubscribe();
  }

  goToLogin() {
    this.navCtrl.setRoot('LoginPage');
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
