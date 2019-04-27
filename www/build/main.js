webpackJsonp([6],{

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebAuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_config__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_auth0_js__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_auth0_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_auth0_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_widget_util__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__HcService__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Import AUTH_CONFIG, Auth0Cordova, and auth0.js




var WebAuthService = (function () {
    function WebAuthService(zone, storage, hcService, widgetUtil) {
        var _this = this;
        this.zone = zone;
        this.storage = storage;
        this.hcService = hcService;
        this.widgetUtil = widgetUtil;
        this.authConfig = __WEBPACK_IMPORTED_MODULE_2__auth_config__["a" /* AUTH_CONFIG */];
        this.Auth0 = new __WEBPACK_IMPORTED_MODULE_3_auth0_js__["WebAuth"](this.authConfig);
        this.loading = true;
        this.storage.get('profile').then(function (user) { return _this.user = user; });
        this.storage.get('access_token').then(function (token) { return _this.accessToken = token; });
        this.storage.get('expires_at').then(function (exp) {
            _this.loggedIn = Date.now() < JSON.parse(exp);
            _this.loading = false;
        });
    }
    WebAuthService.prototype.loginWeb = function () {
        var _this = this;
        this.hcService.getAuth0Config(localStorage.getItem('baseUrl')).subscribe(function (result) {
            _this.authConfig.clientID = result.config.clientId;
            _this.authConfig.clientId = result.config.clientId;
            _this.authConfig.audience = result.config.audience;
            _this.authConfig.domain = result.config.domain.split('//')[1];
            _this.authConfig.scope = __WEBPACK_IMPORTED_MODULE_2__auth_config__["a" /* AUTH_CONFIG */].scope;
            _this.authConfig.redirectUri = window.location.protocol + '//' + window.location.host + '/';
            _this.authConfig.responseType = __WEBPACK_IMPORTED_MODULE_2__auth_config__["a" /* AUTH_CONFIG */].responseType;
            _this.Auth0 = new __WEBPACK_IMPORTED_MODULE_3_auth0_js__["WebAuth"](_this.authConfig);
            _this.Auth0.authorize();
        }, function (error) {
            console.log(error);
        });
    };
    WebAuthService.prototype.handleAuthentication = function () {
        var _this = this;
        this.Auth0.parseHash(function (err, authResult) {
            if (authResult && authResult.accessToken && authResult.idToken) {
                window.location.hash = '';
                _this.setSession(authResult);
            }
            else if (err) {
                _this.widgetUtil.showToast('Something Went Wrong! Please try again');
                console.log(err);
            }
        });
    };
    WebAuthService.prototype.setSession = function (authResult) {
        // Set the time that the Access Token will expire at
        var expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
    };
    WebAuthService.prototype.logout = function () {
        // Remove tokens and expiry time from localStorage
        localStorage.clear();
        // Go back to the home route
    };
    WebAuthService.prototype.isAuthenticated = function () {
        // Check whether the current time is past the
        // Access Token's expiry time
        var expiresAt = JSON.parse(localStorage.getItem('expires_at') || '{}');
        return new Date().getTime() < expiresAt;
    };
    WebAuthService.prototype.getProfile = function () {
        this.hcService.userProfile(localStorage.getItem('baseUrl')).subscribe(function (result) {
            localStorage.setItem('profile', JSON.stringify(result));
        });
    };
    WebAuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__HcService__["a" /* HcService */], __WEBPACK_IMPORTED_MODULE_4__shared_widget_util__["a" /* WidgetUtils */]])
    ], WebAuthService);
    return WebAuthService;
}());

//# sourceMappingURL=web.auth.service.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_HcService__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_util_util__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeUntil__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subscription__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Subscription__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_MultiViewControlService__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DashboardPage = (function () {
    function DashboardPage(navCtrl, app, navParams, hcService, popOverCtrl, navProxy, toastCtrl) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.navParams = navParams;
        this.hcService = hcService;
        this.popOverCtrl = popOverCtrl;
        this.navProxy = navProxy;
        this.toastCtrl = toastCtrl;
        this.productImage = '../../assets/imgs/notfound.png';
        this.companyLogo = 'assets/imgs/logo.png';
        this.userLogo = 'https://d1n0ct03c4fobh.cloudfront.net/images/default_avatar.png';
        this.sliderImage = '../../assets/imgs/sliderimage';
        this.cakeImage = '../../assets/imgs/cakedemo.jpeg';
        this.cakeCategoryImage = 'http://www.shemakesandbakes.com/uploads/1/1/0/6/11067272/2660520_orig.jpg';
        this.flowerCategoryImage = 'https://777flowers.florist/media/catalog/category/Peonies_Flowers_Category.jpg';
        this.combosCategoryImage = 'https://boxofcake.com/wp-content/uploads/2018/12/surprising-heartilicious-combo-9993510co-080218-A.jpg';
        this.flowerImage = '../../assets/imgs/banner-2.png';
        this.giftImage = '../../assets/imgs/slider.jpg';
        this.cakeIcon = 'https://png.pngtree.com/svg/20170815/e152547c9e.png';
        this.birthdayIcon = 'https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/239602/580/386/m1/fpnw/wm0/happy-birthday-.jpg?1416307997&s=9c1748916c0f11bc73b47cc7d1ea9a54';
        this.flowerIcon = 'data:image/png;base64,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';
        this.giftIcon = 'data:image/png;base64,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';
        this.selectedFacility = '';
        this.facilityList = [];
        this.subscriptions = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subscription__["Subscription"]();
        this.userData = '';
        this.inventoryList = [];
        this.showSearchSpinner = false;
        this.paramsData = {};
    }
    DashboardPage.prototype.ionViewDidLoad = function () {
        localStorage.setItem('selectedFacility', this.selectedFacility);
        if (localStorage.getItem('profile') != null) {
            this.userData = JSON.parse(localStorage.getItem('profile'));
            this.facilityList = JSON.parse(localStorage.getItem('profile')).facilities;
            if (this.facilityList.length) {
                this.getSelectedFacility();
                localStorage.setItem('selectedFacility', JSON.stringify(this.facilityList[0]));
            }
        }
        if (localStorage.getItem('inventoryItems') != null) {
            this.inventoryList = JSON.parse(localStorage.getItem('inventoryItems'));
        }
    };
    DashboardPage.prototype.importInventory = function () {
        var _this = this;
        this.hcService.importInventoryCount(localStorage.getItem('baseUrl'), {
            facilityId: this.facilityList[0]['facilityId'],
            inventoryCountRegister: this.inventoryList
        }).subscribe(function (result) {
            _this.showToast('Imported Successfully', 'success-toast');
            localStorage.removeItem('inventoryItems');
            _this.app.getRootNav().setRoot('DashboardPage');
        }, function (error) {
            _this.showToast(error.error._ERROR_MESSAGE_, 'success-toast');
            console.log('-----------------', error);
        });
    };
    DashboardPage.prototype.getSelectedFacility = function () {
        if (this.facilityList.length >= 1) {
            if (Object(__WEBPACK_IMPORTED_MODULE_3_ionic_angular_util_util__["p" /* isUndefined */])(localStorage.getItem('selectedFacility')) || localStorage.getItem('selectedFacility') == null) {
                this.selectedFacility = this.facilityList[0]['facilityId'];
            }
            else {
                this.selectedFacility = localStorage.getItem('selectedFacility');
            }
        }
    };
    DashboardPage.prototype.logout = function () {
        localStorage.clear();
        this.navCtrl.setRoot('LoginPage');
    };
    DashboardPage.prototype.addCount = function () {
        this.navCtrl.push('ProductDetailPage');
    };
    DashboardPage.prototype.deleteItem = function (item) {
        console.log(item);
        var inventoryItems = JSON.parse(localStorage.getItem('inventoryItems'));
        inventoryItems = inventoryItems.filter(function (inventory) { return (inventory.skuId != item.sku && inventory.quantity != item.quantity && inventory.locationId != item.location); });
        localStorage.setItem('inventoryItems', JSON.stringify(inventoryItems));
        this.ionViewDidLoad();
    };
    DashboardPage.prototype.ionViewWillUnload = function () {
        this.subscriptions.unsubscribe();
    };
    DashboardPage.prototype.goToLogin = function () {
        this.navCtrl.setRoot('LoginPage');
    };
    DashboardPage.prototype.showToast = function (message, cssClass) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 5000,
            cssClass: cssClass,
        });
        toast.present();
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"/home/nitish/QQIVER/src/pages/dashboard/dashboard.html"*/'\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle class="custom">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title style="margin-left: -32px;">\n      The Prezent\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button>\n        <ion-icon name="appstore"></ion-icon>\n      </button>\n      <button ion-button>\n        <ion-icon name="search"></ion-icon>\n      </button>\n      <button ion-button>\n        <ion-icon name="cart"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <!--<div class="search-bar-wrapper">\n    <ion-searchbar\n      #productQuery\n      [(ngModel)]="productId"\n      placeholder="Search"\n    >\n    </ion-searchbar>\n  </div>-->\n</ion-header>\n\n<ion-menu [content]="mycontent">\n  <ion-content>\n    <div class="title">\n      <img [src]="userLogo" height="60" style="margin: 5px;">\n      <ion-grid>\n        <ion-row style="margin-left: 2px;margin-top: -1px;margin-bottom: -13px;font-size: 16px;">\n          <ion-col col-11>\n            <strong><a (click)="goToLogin()">Log In</a> . <a>Sign Up</a></strong>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <ion-list no-lines style="border-bottom: 1px solid grey;">\n      <button ion-item (click)="addCount()">\n        Cakes\n        <ion-icon name="arrow-dropright" style="float: right;"></ion-icon>\n      </button>\n      <button ion-item (click)="ionViewDidLoad()">\n        Flowers\n        <ion-icon name="arrow-dropright" style="float: right;"></ion-icon>\n      </button>\n      <button ion-item (click)="ionViewDidLoad()">\n        My Combos\n        <ion-icon name="arrow-dropright" style="float: right;"></ion-icon>\n      </button>\n      <button ion-item (click)="ionViewDidLoad()">\n        Personalized\n        <ion-icon name="arrow-dropright" style="float: right;"></ion-icon>\n      </button>\n      <button ion-item (click)="ionViewDidLoad()">\n        Soft Toys\n        <ion-icon name="arrow-dropright" style="float: right;"></ion-icon>\n      </button>\n      <button ion-item (click)="ionViewDidLoad()">\n        Chocolates\n        <ion-icon name="arrow-dropright" style="float: right;"></ion-icon>\n      </button>\n    </ion-list>\n    <hr>\n    <ion-list no-lines style="border-bottom: 1px solid grey;">\n      <button ion-item (click)="addCount()">\n        <ion-icon name="briefcase"></ion-icon>\n        Wishlist\n      </button>\n      <button ion-item (click)="ionViewDidLoad()">\n        <ion-icon name="reorder"></ion-icon>\n        Orders\n      </button>\n      <button ion-item (click)="ionViewDidLoad()">\n        <ion-icon name="person"></ion-icon>\n        Account\n      </button>\n    </ion-list>\n    <hr>\n    <ion-list no-lines style="border-bottom: 1px solid grey;">\n      <button ion-item (click)="addCount()">\n        FAQs\n      </button>\n      <button ion-item (click)="ionViewDidLoad()">\n        Contact Us\n      </button>\n      <button ion-item (click)="ionViewDidLoad()">\n        More\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav #mycontent [root]=""></ion-nav>\n\n<ion-content>\n  <ion-row class="slider">\n    <ion-col col-4>\n      <ion-card>\n        <img [src]="cakeImage">\n        <p style="text-align: center">Cakes</p>\n      </ion-card>\n    </ion-col>\n    <ion-col col-4>\n      <ion-card>\n        <img [src]="flowerImage">\n        <p style="text-align: center">Flowers</p>\n      </ion-card>\n    </ion-col>\n    <ion-col col-4>\n      <ion-card>\n        <img [src]="giftImage">\n        <p style="text-align: center">Gifts</p>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n  <hr>\n  <ion-card class="category">\n    <span class="categoryName">\n      Cakes\n    </span>\n    <img [src]="cakeCategoryImage">\n    <ion-item class="offer" text-center>\n      MIN 20% OFF\n      <p style="margin-top: 5px;"><a>SHOP NOW</a></p>\n    </ion-item>\n  </ion-card>\n  <ion-card class="category">\n    <span class="categoryName">\n      Flowers\n    </span>\n    <img [src]="flowerCategoryImage">\n    <ion-item class="offer" text-center>\n      MIN 20% OFF\n      <p style="margin-top: 5px;"><a>SHOP NOW</a></p>\n    </ion-item>\n  </ion-card>\n  <ion-card class="category">\n    <span class="categoryName">\n      My Combos\n    </span>\n    <img [src]="combosCategoryImage">\n    <ion-item class="offer" text-center>\n      MIN 20% OFF\n      <p style="margin-top: 5px;"><a>SHOP NOW</a></p>\n    </ion-item>\n  </ion-card>\n  <ion-row class="deal-row">\n    <div class="deal">\n      Deals of the day\n      <span class="timer">23H 23M 23S</span>\n    </div>\n  </ion-row>\n  <ion-card>\n    <ion-card-title>Category Store</ion-card-title>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-3>\n            <ion-card>\n              <img [src]="cakeImage">\n              <p style="text-align: center">Cakes</p>\n            </ion-card>\n          </ion-col>\n          <ion-col col-3>1.2</ion-col>\n          <ion-col col-3>1.3</ion-col>\n          <ion-col col-3>1.4</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-3>2.1</ion-col>\n          <ion-col col-3>2.2</ion-col>\n          <ion-col col-3>2.3</ion-col>\n          <ion-col col-3>2.4</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-3>3.1</ion-col>\n          <ion-col col-3>3.2</ion-col>\n          <ion-col col-3>3.3</ion-col>\n          <ion-col col-3>3.4</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-3>4.1</ion-col>\n          <ion-col col-3>4.2</ion-col>\n          <ion-col col-3>4.3</ion-col>\n          <ion-col col-3>4.4</ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/nitish/QQIVER/src/pages/dashboard/dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__shared_HcService__["a" /* HcService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_6__shared_MultiViewControlService__["a" /* MultiViewControlService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiViewControlService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_DetailPage__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_util_util__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MultiViewControlService = (function () {
    function MultiViewControlService() {
        this._masterNav = null;
        this._detailNav = null;
        this._isOn = false;
    }
    Object.defineProperty(MultiViewControlService.prototype, "masterNav", {
        get: function () {
            return this._masterNav;
        },
        set: function (value) {
            this._masterNav = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiViewControlService.prototype, "detailNav", {
        get: function () {
            return this._detailNav;
        },
        set: function (value) {
            this._detailNav = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiViewControlService.prototype, "isOn", {
        get: function () {
            return this._isOn;
        },
        set: function (value) {
            this._isOn = value;
        },
        enumerable: true,
        configurable: true
    });
    MultiViewControlService.prototype.pushDetail = function (page, params) {
        if (this.isOn) {
            this.detailNav.setRoot(page, params);
        }
        else {
            this.masterNav.push(page, params);
        }
    };
    MultiViewControlService.prototype.pushMaster = function (page, params) {
        this.masterNav.push(page, params);
    };
    MultiViewControlService.prototype.onSplitPaneChanged = function (isOn) {
        // set local 'isOn' flag...
        this.isOn = isOn;
        // if the nav controllers have been instantiated...
        if (this.masterNav && this.detailNav) {
            (isOn) ? this.activateSplitView() :
                this.deactivateSplitView();
        }
    };
    MultiViewControlService.prototype.activateSplitView = function () {
        var currentView = this.masterNav.getActive();
        if (currentView != null) {
            if (currentView.component.prototype instanceof __WEBPACK_IMPORTED_MODULE_1__pages_DetailPage__["a" /* _DetailPage */]) {
                // if the current view is a 'Detail' page...
                // - remove it from the 'master' nav stack...
                this.masterNav.pop();
                // - and add it to the 'detail' nav stack...
                this.detailNav.setRoot(currentView.component, currentView.data);
            }
        }
    };
    MultiViewControlService.prototype.deactivateSplitView = function () {
        var detailView = this.detailNav.getActive();
        var masterView = this.masterNav.getActive();
        if (Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular_util_util__["p" /* isUndefined */])(detailView.data.paramsData) || detailView.data.paramsData == null) {
            var index = this.masterNav.getViews().length;
            this.masterNav.setRoot(masterView.component, masterView.data);
        }
        else {
            this.detailNav.setRoot('ListProductsPage');
            if (detailView.component.prototype instanceof __WEBPACK_IMPORTED_MODULE_1__pages_DetailPage__["a" /* _DetailPage */]) {
                // if the current detail view is a 'Detail' page...
                var index = this.masterNav.getViews().length;
                // add it to the master view...
                this.masterNav.insert(index, detailView.component, detailView.data);
            }
        }
    };
    MultiViewControlService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], MultiViewControlService);
    return MultiViewControlService;
}());

//# sourceMappingURL=MultiViewControlService.js.map

/***/ }),

/***/ 173:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 173;

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/areacheck/areacheck.module": [
		535,
		5
	],
	"../pages/dashboard/dashboard.module": [
		216
	],
	"../pages/landing/landing.module": [
		537,
		4
	],
	"../pages/list-products/list-products.module": [
		536,
		0
	],
	"../pages/login/login.module": [
		218
	],
	"../pages/name/name.module": [
		538,
		3
	],
	"../pages/product-detail/product-detail.module": [
		539,
		2
	],
	"../pages/slider/slider.module": [
		540,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 215;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DashboardPageModule = (function () {
    function DashboardPageModule() {
    }
    DashboardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dashboard__["a" /* DashboardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__dashboard__["a" /* DashboardPage */]),
            ],
        })
    ], DashboardPageModule);
    return DashboardPageModule;
}());

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */]
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_widget_util__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_HcService__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_native_auth_service__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_web_auth_service__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginPage = (function () {
    function LoginPage(navCtrl, dialog, hcService, translate, platform, nativeAuth, webAuthService, widgetUtil) {
        this.navCtrl = navCtrl;
        this.dialog = dialog;
        this.hcService = hcService;
        this.translate = translate;
        this.platform = platform;
        this.nativeAuth = nativeAuth;
        this.webAuthService = webAuthService;
        this.widgetUtil = widgetUtil;
        this.tokenChecked = false;
        this.tokenChecked = false;
        this.companyLogo = 'assets/imgs/logo.png';
        /*setTimeout(() => {
          if (localStorage.getItem('id_token') === null) {
            localStorage.clear();
            this.tokenChecked = true;
          } else {
            this.hcService.getHcTokenFromSsoToken(localStorage.getItem('baseUrl'), localStorage.getItem('id_token')).subscribe((result: any) => {
    
              if(result.token) {
                localStorage.setItem('token', result.token);
                this.tokenChecked = true;
                this.navCtrl.setRoot(DashboardPage);
                this.getProfile();
              } else {
                this.tokenChecked = true;
                this.retryLogin();
              }
            }, (error) => {
              this.tokenChecked = true;
              this.retryLogin();
            });
          }
        }, 1500);
      }
    
      retryLogin() {
        this.widgetUtil.showToast('Please try again');
        localStorage.clear();
        this.navCtrl.setRoot(LoginPage);
      }
      goToDashboard() {
        this.navCtrl.setRoot('DashboardPage');
      }
    
      loginSSO() {
        if (localStorage.getItem('baseUrl') === null) {
          this.dialog.showToast(this.translate.instant('tenantUrlRequired'));
        } else {
          if (this.platform.is('core') || this.platform.is('mobileweb')) {
            this.webAuthService.loginWeb();
          } else {
            this.nativeAuth.login();
          }
        }
      }
    
    
      showPrompt() {
        this.dialog.showPrompt();
      }
    
      getProfile(){
        this.hcService.userProfile(localStorage.getItem('baseUrl')).subscribe((result: any) => {
          localStorage.setItem('profile', JSON.stringify(result));
          this.navCtrl.setRoot(DashboardPage);
        });
      }*/
    }
    LoginPage.prototype.goToDashboard = function () {
        this.navCtrl.setRoot('DashboardPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/nitish/QQIVER/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title style="text-align: center">\n      The Prezent\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n  <ion-content>\n  <ion-card col-lg-3 offset-lg-4 col-md-6 offset-md-3>\n    <ion-card-header style="border-bottom: none!important;">\n      <ion-card-title style="text-align: center">\n        Welcome to <strong>The Prezent</strong>\n        <p style="opacity: .6">Login to get perzonalized experience</p>\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <form>\n        <div class="form-group">\n          <input type="text" class="form-control"  placeholder="Email Id" autocomplete="off" autofocus="off">\n        </div>\n        <div class="form-group">\n          <input type="password" class="form-control"  placeholder="Password" autocomplete="off" autofocus="off">\n        </div>\n      </form>\n      <ion-grid>\n        <button ion-button (click)="loginSSO()" style="background-color: #d83f87;">CONTINUE</button>\n      </ion-grid>\n    </ion-card-content>\n    <div style="text-align: center">\n      <h2>OR</h2>\n    </div>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6>\n          <button ion-button style="background-color: #4267b2;margin-left: 15px;"> Login with FB</button>\n        </ion-col>\n        <ion-col col-6>\n          <button ion-button style="background-color: #D44638;"> Login with G+</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n</ion-content>\n<ion-footer style="text-align: center;padding: 20px; cursor: pointer">\n  <a (click)="goToDashboard()">SKIP</a>\n</ion-footer>\n'/*ion-inline-end:"/home/nitish/QQIVER/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__shared_widget_util__["a" /* WidgetUtils */], __WEBPACK_IMPORTED_MODULE_3__shared_HcService__["a" /* HcService */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__shared_native_auth_service__["a" /* NativeAuthService */], __WEBPACK_IMPORTED_MODULE_6__shared_web_auth_service__["a" /* WebAuthService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_widget_util__["a" /* WidgetUtils */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NativeAuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_config__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth0_cordova__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth0_cordova___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__auth0_cordova__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_auth0_js__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_auth0_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_auth0_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_widget_util__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__HcService__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Import AUTH_CONFIG, Auth0Cordova, and auth0.js





var NativeAuthService = (function () {
    function NativeAuthService(zone, storage, hcService, widgetUtil) {
        var _this = this;
        this.zone = zone;
        this.storage = storage;
        this.hcService = hcService;
        this.widgetUtil = widgetUtil;
        this.authConfig = __WEBPACK_IMPORTED_MODULE_2__auth_config__["a" /* AUTH_CONFIG */];
        this.Auth0 = new __WEBPACK_IMPORTED_MODULE_4_auth0_js__["WebAuth"](this.authConfig);
        this.Client = new __WEBPACK_IMPORTED_MODULE_3__auth0_cordova___default.a(this.authConfig);
        this.loading = true;
        this.storage.get('profile').then(function (user) { return _this.user = user; });
        this.storage.get('access_token').then(function (token) { return _this.accessToken = token; });
        this.storage.get('expires_at').then(function (exp) {
            _this.loggedIn = Date.now() < JSON.parse(exp);
            _this.loading = false;
        });
    }
    NativeAuthService.prototype.login = function () {
        var _this = this;
        this.loading = true;
        var options = {
            scope: 'openid profile offline_access'
        };
        // Authorize login request with Auth0: open login page and get auth results
        this.hcService.getAuth0Config(localStorage.getItem('baseUrl')).subscribe(function (result) {
            _this.authConfig.clientID = result.config.clientId;
            _this.authConfig.clientId = result.config.clientId;
            _this.authConfig.audience = result.config.audience;
            _this.authConfig.domain = result.config.domain.split('//')[1];
            _this.authConfig.scope = __WEBPACK_IMPORTED_MODULE_2__auth_config__["a" /* AUTH_CONFIG */].scope;
            _this.authConfig.redirectUri = __WEBPACK_IMPORTED_MODULE_2__auth_config__["a" /* AUTH_CONFIG */].redirectUri;
            _this.authConfig.responseType = __WEBPACK_IMPORTED_MODULE_2__auth_config__["a" /* AUTH_CONFIG */].responseType;
            _this.Client = new __WEBPACK_IMPORTED_MODULE_3__auth0_cordova___default.a(_this.authConfig);
            _this.Auth0 = new __WEBPACK_IMPORTED_MODULE_4_auth0_js__["WebAuth"](_this.authConfig);
            _this.Client.authorize(options, function (err, authResult) {
                if (err) {
                    throw err;
                }
                // Set access token
                _this.storage.set('access_token', authResult.accessToken);
                _this.accessToken = authResult.accessToken;
                _this.hcService.getHcTokenFromSsoToken(localStorage.getItem('baseUrl'), authResult.idToken).subscribe(function (result) {
                    localStorage.setItem('token', result.token);
                }, function (error) {
                    _this.widgetUtil.showToast('Please try again');
                });
                // Set access token expiration
                var expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
                _this.storage.set('expires_at', expiresAt);
                // Set logged in
                _this.loading = false;
                _this.loggedIn = true;
                // Fetch user's profile info
                _this.Auth0.client.userInfo(_this.accessToken, function (err, profile) {
                    if (err) {
                        throw err;
                    }
                    _this.storage.set('profile', profile).then(function (val) {
                        return _this.zone.run(function () { return _this.user = profile; });
                    });
                });
            });
        }, function (error) {
            console.log(error);
        });
        // Authorize login request with Auth0: open login page and get auth results
    };
    NativeAuthService.prototype.logout = function () {
        this.storage.remove('profile');
        this.storage.remove('access_token');
        this.storage.remove('expires_at');
        localStorage.clear();
        this.accessToken = null;
        this.user = null;
        this.loggedIn = false;
    };
    NativeAuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_6__HcService__["a" /* HcService */], __WEBPACK_IMPORTED_MODULE_5__shared_widget_util__["a" /* WidgetUtils */]])
    ], NativeAuthService);
    return NativeAuthService;
}());

//# sourceMappingURL=native.auth.service.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AUTH_CONFIG; });
// Change this filename to auth.config.ts
var AUTH_CONFIG = {
    // Needed for Auth0 (capitalization: ID):
    clientID: 'Wx25ZebBNgyCUsGvyoyCCSO1krDnbGZY',
    // Needed for Auth0Cordova (capitalization: Id):
    clientId: 'Wx25ZebBNgyCUsGvyoyCCSO1krDnbGZY',
    domain: 'qa-ware2goproject.auth0.com',
    packageIdentifier: 'co.hotwax.picking',
    responseType: 'token id_token',
    redirectUri: 'https://ware2go.hotwaxsystems.com/stockmove/',
    audience: 'urn:ware2go-api',
    scope: 'openid profile name email'
};
//# sourceMappingURL=auth.config.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _DetailPage; });
//TODO: Need to be discuss with team
var _DetailPage = (function () {
    function _DetailPage() {
    }
    return _DetailPage;
}());

//# sourceMappingURL=_DetailPage.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(336);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* unused harmony export createTranslateLoader */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login_module__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_widget_util__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_HcService__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_CollectFailedRequestService__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ngx_translate_http_loader__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_MultiViewControlService__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_dashboard_dashboard_module__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_login_login__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_native_auth_service__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_web_auth_service__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_storage__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_dashboard_dashboard__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










/*
import {AuthInterceptor} from "../interceptor/auth.interceptor";
*/










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_14__pages_dashboard_dashboard_module__["DashboardPageModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/areacheck/areacheck.module#AreacheckPageModule', name: 'AreaCheck', segment: 'areacheck', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-products/list-products.module#ListProductsPageModule', name: 'ListProductsPage', segment: 'list-products', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/landing/landing.module#LandingPageModule', name: 'LandingPage', segment: 'landing', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/name/name.module#NamePageModule', name: 'NamePage', segment: 'name', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product-detail/product-detail.module#ProductDetailPageModule', name: 'ProductDetailPage', segment: 'product-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/slider/slider.module#SliderPageModule', name: 'Slider', segment: 'slider', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login_module__["LoginPageModule"],
                __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_9__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_18__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_dashboard_dashboard__["a" /* DashboardPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_8__shared_HcService__["a" /* HcService */],
                __WEBPACK_IMPORTED_MODULE_13__shared_MultiViewControlService__["a" /* MultiViewControlService */],
                __WEBPACK_IMPORTED_MODULE_10__shared_CollectFailedRequestService__["a" /* CollectFailedRequestService */],
                /* {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},*/
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__shared_widget_util__["a" /* WidgetUtils */],
                __WEBPACK_IMPORTED_MODULE_16__shared_native_auth_service__["a" /* NativeAuthService */],
                __WEBPACK_IMPORTED_MODULE_17__shared_web_auth_service__["a" /* WebAuthService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

function createTranslateLoader(httpClient) {
    return new __WEBPACK_IMPORTED_MODULE_12__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](httpClient, './assets/i18n/', '.json');
}
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 418:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 420:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 456:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 457:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HcService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HcService = (function () {
    function HcService(http) {
        this.http = http;
        this.baseUrlPrefix = 'https://';
        this.baseUrlSuffix = '/hcapi/';
        this.loginServiceRoute = 'getAuthenticationToken';
    }
    HcService.prototype.login = function (url, username, password) {
        return this.http.post(this.baseUrlPrefix + url + this.baseUrlSuffix + this.loginServiceRoute, {}, { params: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpParams */]().set('USERNAME', username).append('PASSWORD', password),
            observe: 'response' });
    };
    HcService.prototype.getHcTokenFromSsoToken = function (url, ssoToken) {
        if (url.startsWith('https://')) {
            this.url = url;
            localStorage.setItem('baseUrl', this.url);
        }
        else {
            this.url = this.baseUrlPrefix + url + this.baseUrlSuffix;
            localStorage.setItem('baseUrl', this.url);
        }
        return this.http.post(this.url + '/getHcTokenFromSsoToken', {}, { params: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpParams */]().set('accessToken', ssoToken) });
    };
    HcService.prototype.logout = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('profile');
        sessionStorage.clear();
    };
    HcService.prototype.processRequest = function (request) {
        var body = request.body;
        var url = request.url;
        var parmas = request.params;
        // TODO: We should use 'request' method instead of 'GET' or 'POST'. At present we are getting some internal error in http.js method ((method.toUpperCase))
        return this.http.post(url, body, parmas);
    };
    HcService.prototype.updateUserPassword = function (url, currentPassword, newPassword, newPasswordVerify) {
        return this.http.post(url + 'updateUserPassword', {}, { params: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpParams */]().set('currentPassword', currentPassword).append('newPassword', newPassword).append('newPasswordVerify', newPasswordVerify),
            observe: 'response' });
    };
    HcService.prototype.userProfile = function (url) {
        return this.http.get(url + 'user-profile');
    };
    HcService.prototype.getAuth0Config = function (url) {
        if (url.startsWith('https://')) {
            this.url = url;
            localStorage.setItem('baseUrl', this.url);
        }
        else {
            this.url = this.baseUrlPrefix + url + this.baseUrlSuffix;
            localStorage.setItem('baseUrl', this.url);
        }
        return this.http.post(this.url + 'getAuth0ClientConfig', {});
    };
    HcService.prototype.getRecievingBayProducts = function (url, facilityId) {
        return this.http.post(url + 'findStockMovesFromReceiving', { facilityId: facilityId });
    };
    HcService.prototype.getBulkToPickProducts = function (url, facilityId) {
        return this.http.post(url + 'findStockMovesRecommended', { facilityId: facilityId });
    };
    HcService.prototype.getAllProducts = function (url, facilityId) {
        return this.http.post(url + 'findStockMovesForAllLocation', { facilityId: facilityId });
    };
    HcService.prototype.getStockMoveNeededProducts = function (url, facilityId) {
        return this.http.post(url + 'findStockMovesNeeded', { facilityId: facilityId });
    };
    HcService.prototype.importInventoryCount = function (url, body) {
        return this.http.post(url + 'importInventoryCount', body);
    };
    HcService.prototype.processStockMove = function (url, body) {
        return this.http.post(url + 'processPhysicalStockMove', body);
    };
    HcService.prototype.searchProducts = function (url, body) {
        return this.http.post(url + 'searchproducts', body);
    };
    HcService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], HcService);
    return HcService;
}());

//# sourceMappingURL=HcService.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_web_auth_service__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth0_cordova__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth0_cordova___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__auth0_cordova__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, translate, webAuthService) {
        var _this = this;
        this.translate = translate;
        this.webAuthService = webAuthService;
        this.rootPage = 'LandingPage';
        this.webAuthService.handleAuthentication();
        /* if(localStorage.getItem('token')!= null){
           this.rootPage = 'DashboardPage';
         }*/
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.localizeApplication();
            window.handleOpenURL = function (url) {
                __WEBPACK_IMPORTED_MODULE_6__auth0_cordova___default.a.onRedirectUri(url);
            };
        });
    }
    //This function is used to localization/internationalization
    MyApp.prototype.localizeApplication = function () {
        var browserLanguage = this.translate.getBrowserLang();
        if (browserLanguage) {
            this.translate.setDefaultLang(browserLanguage);
        }
        else {
            this.translate.use('en');
        }
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/nitish/QQIVER/src/app/app.html"*/'<ion-nav #masterNav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/nitish/QQIVER/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_5__shared_web_auth_service__["a" /* WebAuthService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectFailedRequestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CollectFailedRequestService = (function () {
    function CollectFailedRequestService() {
        // We should not follow the cached request pattern.
        this.cachedRequest = null;
        this.targetScreen = null;
    }
    CollectFailedRequestService.prototype.collectFailedRequest = function (request) {
        this.cachedRequest = request;
        console.log('Request Cached successfully');
    };
    CollectFailedRequestService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
        // I don't see this class doing anything with collected failed request.
        //@Lalit:
        // @todo:
        /*@lalit: Function of this file is to collect the failed request and we are making it as a service according to the
        * best practice of angular so that if we require this file, we can inject it and use accordingly*/
        //we are processing failed request in HcService.ts because it is the only point in our SDK which is responsible for http request
    ], CollectFailedRequestService);
    return CollectFailedRequestService;
}());

//# sourceMappingURL=CollectFailedRequestService.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetUtils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetUtils = (function () {
    function WidgetUtils(loadingCtrl, toastCtrl, alertCtrl, translate) {
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.translate = translate;
    }
    WidgetUtils.prototype.showLoading = function (message) {
        this.loader = this.loadingCtrl.create({
            content: message
        });
        this.loader.present();
    };
    WidgetUtils.prototype.hideLoading = function () {
        this.loader.dismiss();
    };
    WidgetUtils.prototype.showToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 5000,
        });
        toast.present();
    };
    WidgetUtils.prototype.showPrompt = function () {
        // Internationalisation is table feature of enterprise sdk. Cannot move forward without it.
        // @Lalit: Resolved
        var prompt = this.alertCtrl.create({
            title: this.translate.instant('promptTitle'),
            message: this.translate.instant('promptMessage'),
            inputs: [
                {
                    name: this.translate.instant('url'),
                    placeholder: this.translate.instant('promptTitle'),
                    value: localStorage.getItem('baseUrl')
                },
            ],
            buttons: [
                {
                    text: this.translate.instant('cancel'),
                    handler: function (data) {
                    }
                },
                {
                    text: this.translate.instant('save'),
                    handler: function (data) {
                        localStorage.setItem('baseUrl', data.url);
                    }
                }
            ]
        });
        prompt.present();
    };
    WidgetUtils = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
    ], WidgetUtils);
    return WidgetUtils;
}());

//# sourceMappingURL=widget.util.js.map

/***/ })

},[316]);
//# sourceMappingURL=main.js.map