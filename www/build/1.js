webpackJsonp([1],{

/***/ 540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderPageModule", function() { return SliderPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slider__ = __webpack_require__(547);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SliderPageModule = (function () {
    function SliderPageModule() {
    }
    SliderPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__slider__["a" /* SliderPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__slider__["a" /* SliderPage */]),
            ],
        })
    ], SliderPageModule);
    return SliderPageModule;
}());

//# sourceMappingURL=slider.module.js.map

/***/ }),

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SliderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SliderPage = (function () {
    function SliderPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.slider1 = 'assets/imgs/img/slider1.png';
        this.slider2 = 'assets/imgs/img/slider2.png';
    }
    SliderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SliderPage');
    };
    SliderPage.prototype.goToAreaCheck = function () {
        this.navCtrl.setRoot('AreaCheck');
    };
    SliderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-slider',template:/*ion-inline-start:"/home/nitish/QQIVER/src/pages/slider/slider.html"*/'<ion-content>\n  <ion-slides pager="true" style="height: 86%">\n    <ion-slide>\n      <img [src]="slider1" class="sliderImage">\n      <h1 style="font-weight: 800">You Order</h1>\n      <p>Register your board</p>\n      <p>and order a ding repair</p>\n    </ion-slide>\n    <ion-slide>\n      <img [src]="slider2" class="sliderImage">\n      <h1 style="font-weight: 800">We Collect</h1>\n      <p>Collection and delivery is free.</p>\n      <p>Just let us know eher you are.</p>\n    </ion-slide>\n    <ion-slide>\n      <img [src]="slider1" class="sliderImage">\n      <h1 style="font-weight: 800">We Repair</h1>\n      <p>We will repair your board</p>\n      <p>with the highest quality</p>\n      <p>standard and material</p>\n    </ion-slide>\n    <ion-slide>\n      <img [src]="slider1" class="sliderImage">\n      <h1 style="font-weight: 800">We Deliver</h1>\n      <p>We deliver your pristine board</p>\n      <p>back to you, anytime and</p>\n      <p>anywhere</p>\n    </ion-slide>\n  </ion-slides>\n  <ion-grid>\n    <button ion-button (click)="goToAreaCheck()">Next ></button>\n  </ion-grid>\n</ion-content>\n\n'/*ion-inline-end:"/home/nitish/QQIVER/src/pages/slider/slider.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SliderPage);
    return SliderPage;
}());

//# sourceMappingURL=slider.js.map

/***/ })

});
//# sourceMappingURL=1.js.map