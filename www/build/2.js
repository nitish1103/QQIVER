webpackJsonp([2],{

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailPageModule", function() { return ProductDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_detail__ = __webpack_require__(546);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProductDetailPageModule = (function () {
    function ProductDetailPageModule() {
    }
    ProductDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__product_detail__["a" /* ProductDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__product_detail__["a" /* ProductDetailPage */]),
            ],
        })
    ], ProductDetailPageModule);
    return ProductDetailPageModule;
}());

//# sourceMappingURL=product-detail.module.js.map

/***/ }),

/***/ 546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DetailPage__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_HcService__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_widget_util__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subscription__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Subscription__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductDetailPage = (function (_super) {
    __extends(ProductDetailPage, _super);
    function ProductDetailPage(navCtrl, navParams, hcSercvice, widget, app, toastCtrl) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.hcSercvice = hcSercvice;
        _this.widget = widget;
        _this.app = app;
        _this.toastCtrl = toastCtrl;
        _this.facilityList = [];
        _this.inventoryList = [];
        _this.facilityName = "";
        _this.subscriptions = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subscription__["Subscription"]();
        return _this;
    }
    ProductDetailPage.prototype.ionViewDidLoad = function () {
        this.facilityList = JSON.parse(localStorage.getItem('profile')).facilities;
        this.facilityName = this.facilityList[0]['name'];
    };
    ProductDetailPage.prototype.saveLocation = function (quantity, sku, location) {
        if (localStorage.getItem('inventoryItems')) {
            var inventoryItems = JSON.parse(localStorage.getItem('inventoryItems'));
            var inventoryItem_1 = {
                "quantity": quantity,
                "skuId": sku,
                "locationId": location
            };
            inventoryItems = inventoryItems.filter(function (inventory) { return (inventory.sku != inventoryItem_1.skuId && inventory.location != inventoryItem_1.locationId); });
            inventoryItems.push(inventoryItem_1);
            localStorage.setItem('inventoryItems', JSON.stringify(inventoryItems));
            this.showToast('Logged Successfully', 'success-toast');
            this.app.getRootNav().setRoot('ProductDetailPage');
        }
        else {
            var inventoryItems = [{
                    "quantity": quantity,
                    "skuId": sku,
                    "locationId": location
                }];
            localStorage.setItem('inventoryItems', JSON.stringify(inventoryItems));
            this.showToast('Logged Successfully', 'success-toast');
            this.app.getRootNav().setRoot('ProductDetailPage');
        }
    };
    ProductDetailPage.prototype.ionViewWillUnload = function () {
        this.subscriptions.unsubscribe();
    };
    ProductDetailPage.prototype.gotToDasboard = function () {
        this.app.getRootNav().setRoot('DashboardPage');
    };
    ProductDetailPage.prototype.showToast = function (message, cssClass) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 5000,
            cssClass: cssClass,
        });
        toast.present();
    };
    ProductDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-product-detail',template:/*ion-inline-start:"/home/nitish/QQIVER/src/pages/product-detail/product-detail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      {{ facilityName }}\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="gotToDasboard()" class="custom">\n        Done\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content >\n  <ion-card col-lg-5 col-sm-10 col-10>\n    <ion-card-header text-center>\n      <ion-icon name="copy"></ion-icon> Count Log\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item>\n        <ion-label floating>Location Id</ion-label>\n        <ion-input type="text" #location ></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>SKU ID</ion-label>\n        <ion-input type="text" #sku></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Quantity</ion-label>\n        <ion-input type="text" #quantity></ion-input>\n      </ion-item>\n      <ion-buttons text-center>\n        <button ion-button (click)="saveLocation(quantity.value, sku.value, location.value)" [disabled]="!sku.value || !quantity.value || !location.value">\n          SAVE\n        </button>\n      </ion-buttons>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/nitish/QQIVER/src/pages/product-detail/product-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__shared_HcService__["a" /* HcService */], __WEBPACK_IMPORTED_MODULE_4__shared_widget_util__["a" /* WidgetUtils */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], ProductDetailPage);
    return ProductDetailPage;
}(__WEBPACK_IMPORTED_MODULE_2__DetailPage__["a" /* _DetailPage */]));

//# sourceMappingURL=product-detail.js.map

/***/ })

});
//# sourceMappingURL=2.js.map