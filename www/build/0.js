webpackJsonp([0],{

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListProductsPageModule", function() { return ListProductsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_products__ = __webpack_require__(542);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ListProductsPageModule = (function () {
    function ListProductsPageModule() {
    }
    ListProductsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__list_products__["a" /* ListProductsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__list_products__["a" /* ListProductsPage */]),
            ],
        })
    ], ListProductsPageModule);
    return ListProductsPageModule;
}());

//# sourceMappingURL=list-products.module.js.map

/***/ }),

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListProductsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_HcService__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MasterPage__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_MultiViewControlService__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_util_util__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Subscription__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Subscription__);
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








var ListProductsPage = (function (_super) {
    __extends(ListProductsPage, _super);
    function ListProductsPage(navCtrl, app, navParams, hcService, navProxy) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.app = app;
        _this.navParams = navParams;
        _this.hcService = hcService;
        _this.navProxy = navProxy;
        _this.productsList = [];
        _this.productsListAvailable = false;
        _this.paramsData = {};
        _this.paramsDataAvailable = false;
        _this.subscriptions = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subscription__["Subscription"]();
        return _this;
    }
    ListProductsPage.prototype.ionViewDidLoad = function () {
        if (Object(__WEBPACK_IMPORTED_MODULE_5_ionic_angular_util_util__["p" /* isUndefined */])(this.navParams.get('paramsData'))) {
            this.paramsDataAvailable = false;
            this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard__["a" /* DashboardPage */]);
        }
        else {
            this.paramsData = this.navParams.get('paramsData');
            if (this.paramsData['moveToLocation'].enumId === 'REC_INSPECTION_BAY') {
                this.getRecievingBayProducts();
            }
            else if (this.paramsData['moveToLocation'].enumId === 'FLT_BULK') {
                this.getBulkToPickProducts();
            }
            else if (this.paramsData['moveToLocation'].enumId === 'Stock Move Needed') {
                this.getStockMoveNeededProducts();
            }
            this.paramsDataAvailable = true;
        }
    };
    ListProductsPage.prototype.getRecievingBayProducts = function () {
        var _this = this;
        this.productsListAvailable = false;
        this.subscriptions.add(this.hcService.getRecievingBayProducts(localStorage.getItem('baseUrl'), this.paramsData['facilityId']).subscribe(function (result) {
            _this.productsList = result.moveByPflInfoList;
            _this.productsListAvailable = true;
        }, function (error) {
            console.log(error);
            _this.productsListAvailable = true;
        }));
    };
    ListProductsPage.prototype.getBulkToPickProducts = function () {
        var _this = this;
        this.productsListAvailable = false;
        this.subscriptions.add(this.hcService.getBulkToPickProducts(localStorage.getItem('baseUrl'), this.paramsData['facilityId']).subscribe(function (result) {
            _this.productsList = result.moveByPflInfoList;
            _this.productsListAvailable = true;
        }, function (error) {
            console.log(error);
            _this.productsListAvailable = true;
        }));
    };
    ListProductsPage.prototype.getStockMoveNeededProducts = function () {
        var _this = this;
        this.productsListAvailable = false;
        this.subscriptions.add(this.hcService.getStockMoveNeededProducts(localStorage.getItem('baseUrl'), this.paramsData['facilityId']).subscribe(function (result) {
            _this.productsList = result.moveByOisgirInfoList;
            _this.productsListAvailable = true;
        }, function (error) {
            console.log(error);
            _this.productsListAvailable = true;
        }));
    };
    ListProductsPage.prototype.onProductSelect = function (product) {
        var paramData = product;
        paramData.moveToLocation = this.paramsData['moveToLocation'];
        this.navProxy.pushDetail('ProductDetailPage', { paramsData: paramData });
    };
    ListProductsPage.prototype.gotToDasboard = function () {
        this.app.getRootNav().setRoot('DashboardPage');
    };
    ListProductsPage.prototype.ionViewWillUnload = function () {
        this.subscriptions.unsubscribe();
    };
    ListProductsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list-products',template:/*ion-inline-start:"/home/nitish/QQIVER/src/pages/list-products/list-products.html"*/'<!--<ion-header>\n  <ion-navbar>\n    <ion-title *ngIf="paramsDataAvailable">\n      <ion-icon name="arrow-round-back" (click)="gotToDasboard()"></ion-icon>\n      {{paramsData.moveToLocation.description}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>-->\n\n\n<ion-content *ngIf="paramsDataAvailable">\n  <ion-list>\n    <button ion-item *ngFor="let product of productsList" (click)="onProductSelect(product)">\n      <h2>\n        {{ product.product.productId }}\n      </h2>\n      <p>\n        {{ product.product.productName }}\n      </p>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/nitish/QQIVER/src/pages/list-products/list-products.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__shared_HcService__["a" /* HcService */], __WEBPACK_IMPORTED_MODULE_4__shared_MultiViewControlService__["a" /* MultiViewControlService */]])
    ], ListProductsPage);
    return ListProductsPage;
}(__WEBPACK_IMPORTED_MODULE_3__MasterPage__["a" /* _MasterPage */]));

//# sourceMappingURL=list-products.js.map

/***/ }),

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _MasterPage; });
//TODO: Need to be discuss with team
var _MasterPage = (function () {
    function _MasterPage() {
    }
    return _MasterPage;
}());

//# sourceMappingURL=_MasterPage.js.map

/***/ })

});
//# sourceMappingURL=0.js.map