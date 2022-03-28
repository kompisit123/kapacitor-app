(self["webpackChunkionic_angular_web3_login"] = self["webpackChunkionic_angular_web3_login"] || []).push([["src_app_home_home_module_ts"],{

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 9764);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 2610);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 476);






let HomePage = class HomePage {
    constructor(authService, navCtrl) {
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.isAuthenticating = false;
    }
    login() {
        this.isAuthenticating = true;
        this.authService.signInWithMetaMask().subscribe(() => {
            this.isAuthenticating = false;
            this.navCtrl.navigateForward('/dashboard');
        }, (err) => {
            console.log(err);
            this.isAuthenticating = false;
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 2610:
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: linear-gradient(90deg, #06010a 0%, #370446 35%, #0b070e 100%);\n}\nion-content h6 {\n  font-size: 16px;\n  font-family: \"kanit\";\n  color: #f3f0f5;\n  padding-left: 15px;\n}\nion-content #logo {\n  width: 60px;\n}\nion-content .footttext {\n  font-size: 14px;\n  text-align: center;\n  margin-top: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0EsMkVBQUE7QUFEQTtBQUdDO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBREg7QUFJQztFQUlDLFdBQUE7QUFMRjtBQVNBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFQRiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcblxuLy8tLWJhY2tncm91bmQ6IzE3MTYxODtcbi0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDYwMTBhIDAlLCAjMzcwNDQ2IDM1JSwgIzBiMDcwZSAxMDAlKTtcbiBcbiBoNntcbiAgIGZvbnQtc2l6ZToxNnB4O1xuICAgZm9udC1mYW1pbHk6IFwia2FuaXRcIjtcbiAgIGNvbG9yOiAjZjNmMGY1O1xuICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuIH1cblxuICNsb2dve1xuICAvLyBtYXJnaW4tbGVmdDogYXV0bztcbiAgLy8gbWFyZ2luLXJpZ2h0OiBhdXRvO1xuIC8vcGFkZGluZy1sZWZ0OiA0MHB4O1xuICB3aWR0aDogNjBweDtcbn1cblxuXG4uZm9vdHR0ZXh0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDMycHg7XG59XG4gIFxuXG59XG5cbiBcblxuXG4gICJdfQ== */");

/***/ }),

/***/ 9764:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- <ion-content>\n  <div class=\"container\">\n    <svg\n      xmlns:ev=\"http://www.w3.org/2001/xml-events\"\n      xmlns=\"http://www.w3.org/2000/svg\"\n      xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n      version=\"1.1\"\n      id=\"Layer_1\"\n      x=\"0px\"\n      y=\"0px\"\n      viewBox=\"0 0 318.6 318.6\"\n      style=\"enable-background: new 0 0 318.6 318.6\"\n      xml:space=\"preserve\"\n    >\n      <style type=\"text/css\">\n        .st0 {\n          fill: #e2761b;\n          stroke: #e2761b;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n        }\n        .st1 {\n          fill: #e4761b;\n          stroke: #e4761b;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n        }\n        .st2 {\n          fill: #d7c1b3;\n          stroke: #d7c1b3;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n        }\n        .st3 {\n          fill: #233447;\n          stroke: #233447;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n        }\n        .st4 {\n          fill: #cd6116;\n          stroke: #cd6116;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n        }\n        .st5 {\n          fill: #e4751f;\n          stroke: #e4751f;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n        }\n        .st6 {\n          fill: #f6851b;\n          stroke: #f6851b;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n        }\n        .st7 {\n          fill: #c0ad9e;\n          stroke: #c0ad9e;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n        }\n        .st8 {\n          fill: #161616;\n          stroke: #161616;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n        }\n        .st9 {\n          fill: #763d16;\n          stroke: #763d16;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n        }\n      </style>\n      <polygon class=\"st0\" points=\"274.1,35.5 174.6,109.4 193,65.8 \" />\n      <g>\n        <polygon class=\"st1\" points=\"44.4,35.5 143.1,110.1 125.6,65.8  \" />\n        <polygon\n          class=\"st1\"\n          points=\"238.3,206.8 211.8,247.4 268.5,263 284.8,207.7  \"\n        />\n        <polygon\n          class=\"st1\"\n          points=\"33.9,207.7 50.1,263 106.8,247.4 80.3,206.8  \"\n        />\n        <polygon\n          class=\"st1\"\n          points=\"103.6,138.2 87.8,162.1 144.1,164.6 142.1,104.1  \"\n        />\n        <polygon\n          class=\"st1\"\n          points=\"214.9,138.2 175.9,103.4 174.6,164.6 230.8,162.1  \"\n        />\n        <polygon class=\"st1\" points=\"106.8,247.4 140.6,230.9 111.4,208.1  \" />\n        <polygon class=\"st1\" points=\"177.9,230.9 211.8,247.4 207.1,208.1  \" />\n      </g>\n      <g>\n        <polygon\n          class=\"st2\"\n          points=\"211.8,247.4 177.9,230.9 180.6,253 180.3,262.3  \"\n        />\n        <polygon\n          class=\"st2\"\n          points=\"106.8,247.4 138.3,262.3 138.1,253 140.6,230.9  \"\n        />\n      </g>\n      <polygon class=\"st3\" points=\"138.8,193.5 110.6,185.2 130.5,176.1 \" />\n      <polygon class=\"st3\" points=\"179.7,193.5 188,176.1 208,185.2 \" />\n      <g>\n        <polygon class=\"st4\" points=\"106.8,247.4 111.6,206.8 80.3,207.7  \" />\n        <polygon class=\"st4\" points=\"207,206.8 211.8,247.4 238.3,207.7  \" />\n        <polygon\n          class=\"st4\"\n          points=\"230.8,162.1 174.6,164.6 179.8,193.5 188.1,176.1 208.1,185.2  \"\n        />\n        <polygon\n          class=\"st4\"\n          points=\"110.6,185.2 130.6,176.1 138.8,193.5 144.1,164.6 87.8,162.1  \"\n        />\n      </g>\n      <g>\n        <polygon class=\"st5\" points=\"87.8,162.1 111.4,208.1 110.6,185.2  \" />\n        <polygon class=\"st5\" points=\"208.1,185.2 207.1,208.1 230.8,162.1  \" />\n        <polygon\n          class=\"st5\"\n          points=\"144.1,164.6 138.8,193.5 145.4,227.6 146.9,182.7  \"\n        />\n        <polygon\n          class=\"st5\"\n          points=\"174.6,164.6 171.9,182.6 173.1,227.6 179.8,193.5  \"\n        />\n      </g>\n      <polygon\n        class=\"st6\"\n        points=\"179.8,193.5 173.1,227.6 177.9,230.9 207.1,208.1 208.1,185.2 \"\n      />\n      <polygon\n        class=\"st6\"\n        points=\"110.6,185.2 111.4,208.1 140.6,230.9 145.4,227.6 138.8,193.5 \"\n      />\n      <polygon\n        class=\"st7\"\n        points=\"180.3,262.3 180.6,253 178.1,250.8 140.4,250.8 138.1,253 138.3,262.3 106.8,247.4 117.8,256.4   140.1,271.9 178.4,271.9 200.8,256.4 211.8,247.4 \"\n      />\n      <polygon\n        class=\"st8\"\n        points=\"177.9,230.9 173.1,227.6 145.4,227.6 140.6,230.9 138.1,253 140.4,250.8 178.1,250.8 180.6,253 \"\n      />\n      <g>\n        <polygon\n          class=\"st9\"\n          points=\"278.3,114.2 286.8,73.4 274.1,35.5 177.9,106.9 214.9,138.2 267.2,153.5 278.8,140 273.8,136.4    281.8,129.1 275.6,124.3 283.6,118.2  \"\n        />\n        <polygon\n          class=\"st9\"\n          points=\"31.8,73.4 40.3,114.2 34.9,118.2 42.9,124.3 36.8,129.1 44.8,136.4 39.8,140 51.3,153.5 103.6,138.2    140.6,106.9 44.4,35.5  \"\n        />\n      </g>\n      <polygon\n        class=\"st6\"\n        points=\"267.2,153.5 214.9,138.2 230.8,162.1 207.1,208.1 238.3,207.7 284.8,207.7 \"\n      />\n      <polygon\n        class=\"st6\"\n        points=\"103.6,138.2 51.3,153.5 33.9,207.7 80.3,207.7 111.4,208.1 87.8,162.1 \"\n      />\n      <polygon\n        class=\"st6\"\n        points=\"174.6,164.6 177.9,106.9 193.1,65.8 125.6,65.8 140.6,106.9 144.1,164.6 145.3,182.8 145.4,227.6   173.1,227.6 173.3,182.8 \"\n      />\n    </svg>\n\n    <ion-button color=\"dark\" [disabled]=\"isAuthenticating\" (click)=\"login()\">\n      <ion-spinner *ngIf=\"isAuthenticating\"></ion-spinner>\n      Login with MetaMask\n    </ion-button>\n  </div>\n</ion-content> -->\n\n<ion-content class=\"ion-padding\">\n\n  <ion-grid>\n  <ion-row>\n      <div id=\"msg\">\n        <ion-img id=\"logo\" src=\"/assets/img/logo.svg\"></ion-img>\n    </div>\n  </ion-row>\n  <ion-row>\n      <h6>Kapacitor</h6>\n  </ion-row>\n</ion-grid>\n\n\n  <ion-grid>\n      <div class=\"container\">\n        <svg\n          xmlns:ev=\"http://www.w3.org/2001/xml-events\"\n          xmlns=\"http://www.w3.org/2000/svg\"\n          xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n          version=\"1.1\"\n          id=\"Layer_1\"\n          x=\"0px\"\n          y=\"0px\"\n          viewBox=\"0 0 318.6 318.6\"\n          style=\"enable-background: new 0 0 318.6 318.6\"\n          xml:space=\"preserve\"\n        >\n          <style type=\"text/css\">\n            .st0 {\n              fill: #e2761b;\n              stroke: #e2761b;\n              stroke-linecap: round;\n              stroke-linejoin: round;\n            }\n            .st1 {\n              fill: #e4761b;\n              stroke: #e4761b;\n              stroke-linecap: round;\n              stroke-linejoin: round;\n            }\n            .st2 {\n              fill: #d7c1b3;\n              stroke: #d7c1b3;\n              stroke-linecap: round;\n              stroke-linejoin: round;\n            }\n            .st3 {\n              fill: #233447;\n              stroke: #233447;\n              stroke-linecap: round;\n              stroke-linejoin: round;\n            }\n            .st4 {\n              fill: #cd6116;\n              stroke: #cd6116;\n              stroke-linecap: round;\n              stroke-linejoin: round;\n            }\n            .st5 {\n              fill: #e4751f;\n              stroke: #e4751f;\n              stroke-linecap: round;\n              stroke-linejoin: round;\n            }\n            .st6 {\n              fill: #f6851b;\n              stroke: #f6851b;\n              stroke-linecap: round;\n              stroke-linejoin: round;\n            }\n            .st7 {\n              fill: #c0ad9e;\n              stroke: #c0ad9e;\n              stroke-linecap: round;\n              stroke-linejoin: round;\n            }\n            .st8 {\n              fill: #161616;\n              stroke: #161616;\n              stroke-linecap: round;\n              stroke-linejoin: round;\n            }\n            .st9 {\n              fill: #763d16;\n              stroke: #763d16;\n              stroke-linecap: round;\n              stroke-linejoin: round;\n            }\n          </style>\n          <polygon class=\"st0\" points=\"274.1,35.5 174.6,109.4 193,65.8 \" />\n          <g>\n            <polygon class=\"st1\" points=\"44.4,35.5 143.1,110.1 125.6,65.8  \" />\n            <polygon\n              class=\"st1\"\n              points=\"238.3,206.8 211.8,247.4 268.5,263 284.8,207.7  \"\n            />\n            <polygon\n              class=\"st1\"\n              points=\"33.9,207.7 50.1,263 106.8,247.4 80.3,206.8  \"\n            />\n            <polygon\n              class=\"st1\"\n              points=\"103.6,138.2 87.8,162.1 144.1,164.6 142.1,104.1  \"\n            />\n            <polygon\n              class=\"st1\"\n              points=\"214.9,138.2 175.9,103.4 174.6,164.6 230.8,162.1  \"\n            />\n            <polygon class=\"st1\" points=\"106.8,247.4 140.6,230.9 111.4,208.1  \" />\n            <polygon class=\"st1\" points=\"177.9,230.9 211.8,247.4 207.1,208.1  \" />\n          </g>\n          <g>\n            <polygon\n              class=\"st2\"\n              points=\"211.8,247.4 177.9,230.9 180.6,253 180.3,262.3  \"\n            />\n            <polygon\n              class=\"st2\"\n              points=\"106.8,247.4 138.3,262.3 138.1,253 140.6,230.9  \"\n            />\n          </g>\n          <polygon class=\"st3\" points=\"138.8,193.5 110.6,185.2 130.5,176.1 \" />\n          <polygon class=\"st3\" points=\"179.7,193.5 188,176.1 208,185.2 \" />\n          <g>\n            <polygon class=\"st4\" points=\"106.8,247.4 111.6,206.8 80.3,207.7  \" />\n            <polygon class=\"st4\" points=\"207,206.8 211.8,247.4 238.3,207.7  \" />\n            <polygon\n              class=\"st4\"\n              points=\"230.8,162.1 174.6,164.6 179.8,193.5 188.1,176.1 208.1,185.2  \"\n            />\n            <polygon\n              class=\"st4\"\n              points=\"110.6,185.2 130.6,176.1 138.8,193.5 144.1,164.6 87.8,162.1  \"\n            />\n          </g>\n          <g>\n            <polygon class=\"st5\" points=\"87.8,162.1 111.4,208.1 110.6,185.2  \" />\n            <polygon class=\"st5\" points=\"208.1,185.2 207.1,208.1 230.8,162.1  \" />\n            <polygon\n              class=\"st5\"\n              points=\"144.1,164.6 138.8,193.5 145.4,227.6 146.9,182.7  \"\n            />\n            <polygon\n              class=\"st5\"\n              points=\"174.6,164.6 171.9,182.6 173.1,227.6 179.8,193.5  \"\n            />\n          </g>\n          <polygon\n            class=\"st6\"\n            points=\"179.8,193.5 173.1,227.6 177.9,230.9 207.1,208.1 208.1,185.2 \"\n          />\n          <polygon\n            class=\"st6\"\n            points=\"110.6,185.2 111.4,208.1 140.6,230.9 145.4,227.6 138.8,193.5 \"\n          />\n          <polygon\n            class=\"st7\"\n            points=\"180.3,262.3 180.6,253 178.1,250.8 140.4,250.8 138.1,253 138.3,262.3 106.8,247.4 117.8,256.4   140.1,271.9 178.4,271.9 200.8,256.4 211.8,247.4 \"\n          />\n          <polygon\n            class=\"st8\"\n            points=\"177.9,230.9 173.1,227.6 145.4,227.6 140.6,230.9 138.1,253 140.4,250.8 178.1,250.8 180.6,253 \"\n          />\n          <g>\n            <polygon\n              class=\"st9\"\n              points=\"278.3,114.2 286.8,73.4 274.1,35.5 177.9,106.9 214.9,138.2 267.2,153.5 278.8,140 273.8,136.4    281.8,129.1 275.6,124.3 283.6,118.2  \"\n            />\n            <polygon\n              class=\"st9\"\n              points=\"31.8,73.4 40.3,114.2 34.9,118.2 42.9,124.3 36.8,129.1 44.8,136.4 39.8,140 51.3,153.5 103.6,138.2    140.6,106.9 44.4,35.5  \"\n            />\n          </g>\n          <polygon\n            class=\"st6\"\n            points=\"267.2,153.5 214.9,138.2 230.8,162.1 207.1,208.1 238.3,207.7 284.8,207.7 \"\n          />\n          <polygon\n            class=\"st6\"\n            points=\"103.6,138.2 51.3,153.5 33.9,207.7 80.3,207.7 111.4,208.1 87.8,162.1 \"\n          />\n          <polygon\n            class=\"st6\"\n            points=\"174.6,164.6 177.9,106.9 193.1,65.8 125.6,65.8 140.6,106.9 144.1,164.6 145.3,182.8 145.4,227.6   173.1,227.6 173.3,182.8 \"\n          />\n        </svg>\n    \n        <!-- <ion-button color=\"dark\" [disabled]=\"isAuthenticating\" (click)=\"login()\">\n          <ion-spinner *ngIf=\"isAuthenticating\"></ion-spinner>\n          Login with MetaMask\n        </ion-button> -->\n        \n      </div>\n  \n      <ion-row>\n        <ion-col size=\"12\">\n        <ion-button [disabled]=\"isAuthenticating\" class=\"ion-margin-top ion-margin-bottom\"  shape=\"round\" expand=\"full\"\n        color=\"primary\" (click)=\"login()\">Login with MetaMask </ion-button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\">\n        <p class=\"footttext\">Currently on Polygon Mumbai</p>\n        </ion-col>\n      </ion-row>\n  </ion-grid>\n\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map