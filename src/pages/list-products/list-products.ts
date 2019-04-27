import {Component, OnDestroy} from '@angular/core';
import {App, IonicPage, NavController, NavParams} from 'ionic-angular';
import {HcService} from "../../shared/HcService";
import {_MasterPage} from "../_MasterPage";
import {MultiViewControlService} from "../../shared/MultiViewControlService";
import {ProductDetailPage} from "../product-detail/product-detail";
import {isUndefined} from "ionic-angular/util/util";
import {DashboardPage} from "../dashboard/dashboard";
import {Subscription} from "rxjs/Subscription";

@IonicPage(
  {name: 'ListProductsPage'}
)
@Component({
  selector: 'page-list-products',
  templateUrl: 'list-products.html',
})
export class ListProductsPage extends _MasterPage{

  productsList : Array<any> = [];
  productsListAvailable : boolean = false;
  paramsData : Object = {};
  paramsDataAvailable : boolean = false;
  subscriptions = new Subscription();

  constructor(private navCtrl: NavController, public app: App, public navParams: NavParams, private  hcService : HcService, private navProxy: MultiViewControlService) {
    super();
  }

  ionViewDidLoad(){
    if(isUndefined(this.navParams.get('paramsData'))){
      this.paramsDataAvailable = false;
      this.app.getRootNav().setRoot(DashboardPage);
    }else {
      this.paramsData = this.navParams.get('paramsData');
      if(this.paramsData['moveToLocation'].enumId === 'REC_INSPECTION_BAY'){
        this.getRecievingBayProducts();
      }else if(this.paramsData['moveToLocation'].enumId === 'FLT_BULK'){
        this.getBulkToPickProducts();
      }else if(this.paramsData['moveToLocation'].enumId === 'Stock Move Needed'){
        this.getStockMoveNeededProducts()
      }
      this.paramsDataAvailable = true;
    }
  }

  getRecievingBayProducts(){
    this.productsListAvailable = false;
    this.subscriptions.add(this.hcService.getRecievingBayProducts(localStorage.getItem('baseUrl'), this.paramsData['facilityId']).subscribe((result : any) => {
      this.productsList = result.moveByPflInfoList;
      this.productsListAvailable = true;
    }, (error) => {
      console.log(error);
      this.productsListAvailable = true;
    }));
  }

  getBulkToPickProducts(){
    this.productsListAvailable= false;
    this.subscriptions.add(this.hcService.getBulkToPickProducts(localStorage.getItem('baseUrl'), this.paramsData['facilityId']).subscribe((result : any) => {
      this.productsList = result.moveByPflInfoList;
      this.productsListAvailable = true;
    }, (error) => {
      console.log(error);
      this.productsListAvailable = true;
    }));
  }

  getStockMoveNeededProducts(){
    this.productsListAvailable= false;
    this.subscriptions.add(this.hcService.getStockMoveNeededProducts(localStorage.getItem('baseUrl'), this.paramsData['facilityId']).subscribe((result : any) => {
      this.productsList = result.moveByOisgirInfoList;
      this.productsListAvailable = true;
    }, (error) => {
      console.log(error);
      this.productsListAvailable = true;
    }));
  }

  onProductSelect(product) {
    let paramData = product;
    paramData.moveToLocation = this.paramsData['moveToLocation'];
    this.navProxy.pushDetail('ProductDetailPage', {paramsData: paramData});
  }

  gotToDasboard(){
    this.app.getRootNav().setRoot('DashboardPage');
  }

  ionViewWillUnload(){
    this.subscriptions.unsubscribe();
  }

}
