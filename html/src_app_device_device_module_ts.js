(self["webpackChunkionic_angular_web3_login"] = self["webpackChunkionic_angular_web3_login"] || []).push([["src_app_device_device_module_ts"],{

/***/ 4793:
/*!*************************************************!*\
  !*** ./src/app/device/device-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DevicePageRoutingModule": () => (/* binding */ DevicePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _device_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./device.page */ 6702);




const routes = [
    {
        path: '',
        component: _device_page__WEBPACK_IMPORTED_MODULE_0__.DevicePage
    }
];
let DevicePageRoutingModule = class DevicePageRoutingModule {
};
DevicePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DevicePageRoutingModule);



/***/ }),

/***/ 3620:
/*!*****************************************!*\
  !*** ./src/app/device/device.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DevicePageModule": () => (/* binding */ DevicePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _device_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./device-routing.module */ 4793);
/* harmony import */ var _device_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./device.page */ 6702);







let DevicePageModule = class DevicePageModule {
};
DevicePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _device_routing_module__WEBPACK_IMPORTED_MODULE_0__.DevicePageRoutingModule
        ],
        declarations: [_device_page__WEBPACK_IMPORTED_MODULE_1__.DevicePage]
    })
], DevicePageModule);



/***/ }),

/***/ 6702:
/*!***************************************!*\
  !*** ./src/app/device/device.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DevicePage": () => (/* binding */ DevicePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_device_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./device.page.html */ 5843);
/* harmony import */ var _device_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./device.page.scss */ 8698);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6215);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ 1628);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 6797);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 8002);











const circleR = 80;
const circleDasharray = 2 * Math.PI * circleR;
let DevicePage = class DevicePage {
    constructor(http, storage, loadingController, alertController, router) {
        this.http = http;
        this.storage = storage;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.router = router;
        this.isLoading = false;
        this.time = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject('00:00');
        this.percent = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(100);
        this.circleR = circleR;
        this.circleDasharray = circleDasharray;
        this.energize = '0';
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.storage.get('address').then((result) => {
                this.address = result;
                console.log("address: " + result);
            });
            //Fetch data every 10000ms
            this.timerSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.timer)(0, 30000).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(() => {
                //this.loadData(); // load data contains the http request 
                console.log("Hey PowerEEx");
                this.dataCus(this.address);
            })).subscribe();
            this.fetchdata();
            this.storage.get('token').then((result) => {
                this.token = result;
                console.log("Access token: " + result);
            });
            this.storage.get('accesskey').then((result) => {
                this.accesskey = result;
                console.log("Access key: " + this.accesskey);
            });
            this.storage.get('energize').then((result) => {
                this.energize = result;
                console.log("Energize status: " + this.energize);
            }).then(() => {
                if (this.energize == '1') {
                    console.log("continour count ");
                    this.startTimer(this.timestart);
                }
                else {
                    console.log("Ready");
                }
            });
            this.storage.get('deviceId').then((result) => {
                this.deviceId = result;
                console.log("device Id: " + result);
            });
        });
    }
    fetchdata() {
        this.storage.get('remaintime').then((result) => {
            console.log(result);
            this.timestart = Number(result);
            this.clockstart(Number(result));
        });
    }
    clockstart(timestart) {
        //รับเวลามาแสดงค่า//
        let value = timestart * 60;
        let hours = Math.floor(value / 3600);
        let minutes = Math.floor((value % 3600) / 60);
        hours = String('00' + hours).slice(-2);
        minutes = String('00' + minutes).slice(-2);
        let seconds = String('00' + Math.floor(value - minutes * 60)).slice(-2);
        const text = hours + ':' + minutes + ':' + seconds;
        this.time.next(text);
    }
    present(time) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = true;
            return yield this.loadingController.create({
                duration: time,
                spinner: null,
                message: '<img src="/assets/img/barload.svg">',
                cssClass: 'custom-loading',
                translucent: true,
                showBackdrop: true,
                mode: 'md',
                keyboardClose: true,
            })
                .then(a => {
                a.present().then(() => {
                    if (!this.isLoading) {
                        a.dismiss();
                    }
                });
            });
        });
    }
    dismiss() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = false;
            return yield this.loadingController.dismiss();
        });
    }
    presentAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'simple-alert',
                header: 'STOP!',
                message: 'Press OK button when you want cut off the power supply or press Cancle to continue the power',
                mode: 'md',
                buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'cancel',
                        handler: (blah) => {
                            console.log('Confirm Cancel: Notthing');
                        }
                    }, {
                        text: 'Okay',
                        cssClass: 'ok',
                        handler: () => {
                            console.log('Confirm Okay');
                            this.present(2000);
                            clearInterval(this.interval);
                            // this.state = 'stop';
                        }
                    }]
            });
            yield alert.present();
        });
    }
    startTimer(duration) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.energize = '1';
            this.timerex = duration * 60;
            this.updateClockTimeValue();
            this.interval = setInterval(() => { this.updateClockTimeValue(); }, 1000);
        });
    }
    updateTimeValue() {
        let value = this.timer;
        let hours = Math.floor(value / 3600);
        let minutes = Math.floor((value % 3600) / 60);
        hours = String('00' + hours).slice(-2);
        minutes = String('00' + minutes).slice(-2);
        let seconds = String('0' + Math.floor(value - minutes * 60)).slice(-2);
        // const text = hours + ':' + minutes + ':' + seconds
        const text = seconds;
        this.time.next(text);
        //console.log(text);
        const totalTime = 10; //เซ็ตให้เวลาหมุนติ้ว เริ่มนับจาก 10วิ
        //const totalTime = this.timestart*60; 
        const percentage = ((totalTime - this.timer) / totalTime) * 100;
        this.percent.next(percentage);
        //console.log(this.timer)   // เวลาที่คงเหลือ นับถอยหลังไปเรื่อยๆ 
        --this.timer;
        if (this.timer < 0) {
            clearInterval(this.interval);
            // this.state = 'topup';
        }
    }
    percentageOffset(percent) {
        const percentFloat = percent / 100;
        return circleDasharray * (1 - percentFloat);
    }
    updateClockTimeValue() {
        let value = this.timerex;
        let hours = Math.floor(value / 3600);
        let minutes = Math.floor((value % 3600) / 60);
        hours = String('00' + hours).slice(-2);
        minutes = String('00' + minutes).slice(-2);
        let seconds = String('00' + Math.floor(value - minutes * 60)).slice(-2);
        const text = hours + ':' + minutes + ':' + seconds;
        this.time.next(text);
        --this.timerex;
        if (this.timerex < 0) {
            clearInterval(this.interval);
            // this.upremaintoSR(); //ส่งค่าเวลาไปเก็บในหน่วยความจำด้วย
        }
    }
    requestAccess() {
        console.log("Request Access");
        let body = { address: this.address,
            deviceId: this.deviceId
        };
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpHeaders({
            'Authorization': this.token
        });
        console.log(body);
        this.http.post('https://enx.bannaisoi.com/requestaccess', body, { headers: headers })
            .subscribe((res) => {
            console.log(res.message);
            // if(res.message == 'Out of service'){this.outServiceAlert()}
            if (res.message == 'Expire 2 min') {
                this.accesskey = res.accesskey;
                this.storage.set('accesskey', res.accesskey);
                console.log('Access key: ' + res.accesskey);
                if (res.energize) {
                    this.storage.set('energize', res.energize);
                    this.offPower();
                }
            }
        }, (error) => {
            console.log(error);
        });
    }
    onPower() {
        this.present(2000);
        var myHeaders = new Headers();
        myHeaders.append("authorization", this.accesskey);
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({
            "deviceId": this.deviceId,
            "energize": "1",
            "useAddress": this.address
        });
        this.requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        console.log("OK ON");
        this.startTimer(this.timestart);
        fetch("https://enx.bannaisoi.com/sentcommand", this.requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }
    offPower() {
        this.present(2000);
        var myHeaders = new Headers();
        myHeaders.append("authorization", this.accesskey);
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({
            "deviceId": this.deviceId,
            "energize": "0",
            "useAddress": this.address
        });
        this.requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        console.log("OK OFF");
        fetch("https://enx.bannaisoi.com/sentcommand", this.requestOptions)
            .then(response => response.text())
            .then(() => {
            this.router.navigateByUrl('dashboard');
        })
            .catch(error => console.log('error', error));
    }
    textcount() {
        this.onPower();
        this.energize = '1';
        this.timer = 10;
        this.updateTimeValue();
        this.interval = setInterval(() => { this.updateTimeValue(); }, 1000);
    }
    dataCus(walletaddress) {
        console.log("Request Customer data");
        let body = { address: walletaddress };
        console.log(body);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpHeaders({
            'Content-Type': 'application/json'
        });
        console.log(headers);
        this.http.post('https://chain.kapacitor.me/custormerdata', body, { headers: headers })
            .subscribe((res) => {
            console.log(res);
            this.clockstart(Number(res.remaintime));
            this.storage.set('remaintime', res.remaintime);
        }, (error) => {
            console.log(error);
        });
    }
    ngOnDestroy() {
        this.timerSubscription.unsubscribe();
    }
};
DevicePage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router }
];
DevicePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-device',
        template: _raw_loader_device_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_device_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DevicePage);



/***/ }),

/***/ 8698:
/*!*****************************************!*\
  !*** ./src/app/device/device.page.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-header ion-toolbar, ion-header ion-item {\n  --background: #F6F6F6;\n  background: #F6F6F6;\n  padding: 0 10px;\n}\nion-header ion-toolbar .bordered {\n  --border-radius: 10px;\n  --box-shadow: 5px 5px 10px #d1d1d1, -5px -5px 10px #FFFFFF;\n}\nion-header ion-item h3 {\n  font-weight: 700;\n  font-size: 14px;\n}\nion-header ion-item p {\n  font-weight: 500;\n  font-size: 14px;\n}\nion-header ion-item ion-avatar {\n  --border-radius: 40%;\n}\n#progress-circle {\n  margin-top: -20px;\n  margin-bottom: 10px;\n  transform: rotate(-90deg);\n}\n.timer-text {\n  transform: rotate(90deg);\n  transform-origin: center;\n  font-size: 26px;\n  text-anchor: middle;\n  font-weight: 600;\n  fill: #8E44AD;\n}\n.header-tabs {\n  padding-left: 37px !important;\n  padding-bottom: 30px !important;\n}\n.header-tabs ion-button {\n  --padding-start: 15px;\n  --padding-end: 15px;\n}\n.header-tabs .tab-button {\n  --box-shadow: none;\n  color: var(--ion-color-grayprimary) !important;\n}\n.progress-banner {\n  background: var(--ion-color-primary);\n  padding-top: 12px;\n  padding-bottom: 12px;\n  border-radius: 20px;\n  margin: 0px;\n  margin-bottom: 16px;\n}\n.progress-banner ion-progress-bar {\n  height: 15px;\n  border-radius: 30px;\n  --buffer-background: var(--ion-color-primary-dark);\n  --progress-background: var(--ion-color-secondary);\n  border: none;\n}\n.progress-banner ion-item {\n  --background: var(--ion-color-primary);\n}\n.progress-banner ion-item ion-label {\n  color: white;\n  font-size: 18px;\n  font-weight: bold;\n}\n.progress-banner ion-item ion-note {\n  color: white;\n  font-size: 14px;\n  font-family: \"montserrat\";\n}\n.chart {\n  background: var(--ion-color-primary);\n  padding-top: 12px;\n  padding-bottom: 12px;\n  border-radius: 20px;\n}\n.chart ion-item {\n  --background: var(--ion-color-primary);\n}\n.chart ion-item ion-label {\n  color: white;\n  font-size: 28px;\n  display: contents;\n}\n.chart ion-item .unit {\n  color: var(--ion-color-grayprimary);\n  font-size: 20px;\n  margin-left: 15px;\n}\n.startstop {\n  justify-content: center;\n  position: relative;\n  top: 10px;\n}\nion-content {\n  --background: #8A56AC;\n}\nion-content .slides {\n  background: #F6F6F6;\n  margin-left: -16px;\n  margin-right: -16px;\n  margin-top: -18px;\n  padding: 10px 0px 0px 0px;\n  border-radius: 0 0 28px 28px;\n}\nion-content ion-card {\n  width: 100%;\n  box-shadow: none;\n  border-radius: 14px;\n  padding: 5px 5px 5px 5px;\n  background: rgba(255, 255, 255, 0.8);\n}\nion-content ion-card .main {\n  width: 60px;\n  height: 60px;\n  border-radius: 50px;\n  background: #FFFFFF;\n  box-shadow: 7px 7px 20px #dbdfe2, -7px -7px 20px #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nion-content ion-card .main img {\n  width: 30px;\n}\nion-content ion-card .files {\n  padding-top: 14px;\n}\nion-content .container {\n  padding: 6px 20px;\n  color: #FFFFFF;\n}\nion-content .container ion-item {\n  --background: #8A56AC;\n  padding: 0;\n  margin: 14px 0;\n  --border-radius: 14px;\n  color: #FFFFFF;\n  font-weight: 600;\n}\nion-content .container ion-item ion-label {\n  padding: 6px 0;\n}\nion-content .container ion-item ion-label h4 {\n  font-weight: 400;\n  font-size: 14px;\n}\nion-content .container ion-item ion-label h6 {\n  color: #FFFFFF;\n}\nion-content .container h2 {\n  padding-bottom: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldmljZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDRyxxQkFBQTtFQUNELG1CQUFBO0VBQ0EsZUFBQTtBQUROO0FBS007RUFDRSxxQkFBQTtFQUNBLDBEQUFBO0FBSFI7QUFRTTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQU5SO0FBU007RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFQUjtBQVVNO0VBQ0Usb0JBQUE7QUFSUjtBQWNFO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBWE47QUFhSTtFQUNFLHdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFWTjtBQWNJO0VBQ0UsNkJBQUE7RUFDQSwrQkFBQTtBQVhOO0FBYU07RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0FBWFY7QUFlTTtFQUNJLGtCQUFBO0VBQ0EsOENBQUE7QUFiVjtBQWtCRTtFQUNJLG9DQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBZk47QUFpQk07RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrREFBQTtFQUNBLGlEQUFBO0VBQ0EsWUFBQTtBQWZWO0FBa0JNO0VBQ0ksc0NBQUE7QUFoQlY7QUFrQlU7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBaEJkO0FBbUJVO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQWpCZDtBQXNCRTtFQUNJLG9DQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FBbkJOO0FBcUJNO0VBQ0ksc0NBQUE7QUFuQlY7QUFvQlU7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBbEJkO0FBcUJVO0VBQ0csbUNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFuQmI7QUF5QkU7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQXRCSjtBQTBCRTtFQUNHLHFCQUFBO0FBdkJMO0FBeUJLO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0FBdkJQO0FBMEJLO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLG9DQUFBO0FBeEJQO0FBeUJPO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0RBQUE7RUFHQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQXpCVDtBQTJCUztFQUNFLFdBQUE7QUF6Qlg7QUE2Qk87RUFDSSxpQkFBQTtBQTNCWDtBQWdDSztFQUVFLGlCQUFBO0VBQ0EsY0FBQTtBQS9CUDtBQWlDTztFQUNFLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQS9CVDtBQWlDUztFQUNFLGNBQUE7QUEvQlg7QUFnQ1c7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUE5QmI7QUFnQ1c7RUFDRSxjQUFBO0FBOUJiO0FBb0NPO0VBQ0UsbUJBQUE7QUFsQ1QiLCJmaWxlIjoiZGV2aWNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuXG4gICAgaW9uLXRvb2xiYXIsIGlvbi1pdGVtIHtcbiAgICAgICAtLWJhY2tncm91bmQ6ICNGNkY2RjY7XG4gICAgICBiYWNrZ3JvdW5kOiAjRjZGNkY2O1xuICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgIH1cbiAgXG4gICAgaW9uLXRvb2xiYXIge1xuICAgICAgLmJvcmRlcmVkIHtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAtLWJveC1zaGFkb3c6IDVweCA1cHggMTBweCAjZDFkMWQxLCAtNXB4IC01cHggMTBweCAjRkZGRkZGO1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgaW9uLWl0ZW0ge1xuICAgICAgaDMge1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG4gIFxuICAgICAgcCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cbiAgXG4gICAgICBpb24tYXZhdGFyIHtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA0MCU7XG4gICAgICB9XG4gICAgfVxuICBcbiAgfVxuICBcbiAgI3Byb2dyZXNzLWNpcmNsZXtcbiAgICAgIG1hcmdpbi10b3A6IC0yMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gICAgfVxuICAgIC50aW1lci10ZXh0IHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZToyNnB4O1xuICAgICAgdGV4dC1hbmNob3I6IG1pZGRsZTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBmaWxsOiAjOEU0NEFEIDtcbiAgICB9XG4gICAgXG4gIFxuICAgIC5oZWFkZXItdGFicyB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDM3cHggIWltcG9ydGFudDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4ICFpbXBvcnRhbnQ7XG4gIFxuICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xuICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDE1cHg7XG4gICAgICAgXG4gICAgICB9XG4gIFxuICAgICAgLnRhYi1idXR0b24ge1xuICAgICAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyYXlwcmltYXJ5KSAhaW1wb3J0YW50O1xuICAgICAgfVxuICB9XG4gIFxuICBcbiAgLnByb2dyZXNzLWJhbm5lciB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICBwYWRkaW5nLXRvcDogMTJweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgXG4gICAgICBpb24tcHJvZ3Jlc3MtYmFyIHtcbiAgICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgICAtLWJ1ZmZlci1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1kYXJrKTtcbiAgICAgICAgICAtLXByb2dyZXNzLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIH1cbiAgXG4gICAgICBpb24taXRlbSB7XG4gICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIFxuICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICB9XG4gIFxuICAgICAgICAgIGlvbi1ub3RlIHtcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIm1vbnRzZXJyYXRcIjtcbiAgICAgICAgICB9XG4gICAgICB9XG4gIH1cbiAgXG4gIC5jaGFydCB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICBwYWRkaW5nLXRvcDogMTJweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgXG4gICAgICBpb24taXRlbSB7XG4gICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xuICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgLnVuaXR7XG4gICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmF5cHJpbWFyeSk7XG4gICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgfVxuICBcbiAgXG4gIC5zdGFydHN0b3Age1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDEwcHg7XG4gICBcbiAgfVxuICBcbiAgaW9uLWNvbnRlbnQge1xuICAgICAtLWJhY2tncm91bmQ6ICM4QTU2QUM7O1xuICAgXG4gICAgIC5zbGlkZXMge1xuICAgICAgIGJhY2tncm91bmQ6ICNGNkY2RjYgO1xuICAgICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgICAgICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICAgICAgIG1hcmdpbi10b3A6IC0xOHB4O1xuICAgICAgIHBhZGRpbmc6IDEwcHggMHB4IDBweCAwcHg7XG4gICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDI4cHggMjhweDtcbiAgICAgfVxuICAgXG4gICAgIGlvbi1jYXJkIHtcbiAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gICAgICAgcGFkZGluZzogNXB4IDVweCA1cHggNXB4O1xuICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjgpO1xuICAgICAgIC5tYWluIHtcbiAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgICAgICBib3gtc2hhZG93OiAgN3B4IDdweCAyMHB4ICNkYmRmZTIsIFxuICAgICAgICAgICAgICAgIC03cHggLTdweCAyMHB4ICNmZmZmZmY7XG4gICAgICAgICAgICAgICBcbiAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICBcbiAgICAgICAgIGltZyB7XG4gICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgfSBcbiAgICAgICB9XG4gICBcbiAgICAgICAuZmlsZXMge1xuICAgICAgICAgICBwYWRkaW5nLXRvcDogMTRweDtcbiAgICAgICB9XG4gICBcbiAgICAgfVxuICAgXG4gICAgIC5jb250YWluZXIge1xuICAgICAgXG4gICAgICAgcGFkZGluZzogNnB4IDIwcHg7XG4gICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICBcbiAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAtLWJhY2tncm91bmQ6ICM4QTU2QUM7XG4gICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgbWFyZ2luOiAxNHB4IDA7XG4gICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDE0cHg7XG4gICAgICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICBcbiAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgIHBhZGRpbmc6IDZweCAwO1xuICAgICAgICAgICBoNCB7XG4gICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgaDYge1xuICAgICAgICAgICAgIGNvbG9yOiNGRkZGRkY7XG4gICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgIFxuICAgICAgIH1cbiAgIFxuICAgICAgIGgyIHtcbiAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgICAgfVxuICAgXG4gICAgIH1cbiAgIFxuICAgfSJdfQ== */");

/***/ }),

/***/ 5843:
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/device/device.page.html ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\"> <ion-back-button defaultHref=\"dashboard\"></ion-back-button> </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" fullscreen>\n\n  <div class=\"slides ion-margin-bottom\">\n  <ion-row class=\"ion-justify-content-center\">\n    <svg\n    id=\"progress-circle\"\n    width=\"50vh\"\n    height=\"50vh\"\n    viewBox=\"0 0 200 200\"\n    >\n    <linearGradient id=\"linearColors1\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\" >\n        <stop offset=\"0%\" stop-color=\"#AC9BE2\"></stop>\n        <stop offset=\"100%\" stop-color=\"#ffa7b4\"></stop>\n    </linearGradient>\n    <circle\n      cx=\"50%\"\n      cy=\"50%\"\n      [attr.r]=\"circleR\"\n      fill=\"none\"\n      stroke=\"#f3f3f3\"\n      stroke-width=\"12\"\n    />\n  <circle\n    cx=\"50%\"\n    cy=\"50%\"\n    [attr.r]=\"circleR\"\n    fill=\"none\"\n    stroke=\"url(#linearColors1)\"\n    stroke-width=\"12\"\n    stroke-linecap=\"round\"\n    [attr.stroke-dasharray]=\"circleDasharray\"\n    [attr.stroke-dashoffset]=\"percentageOffset(percent | async)\"\n  />\n\n<text x=\"50%\" y=\"55%\" class=\"timer-text\">{{time| async}}</text>\n</svg>\n</ion-row>\n</div>\n\n<div class=\"container\">\n    <ion-row class=\"startstop\">\n      <ion-button *ngIf=\"energize==='0'\" size=\"medium\" shape=\"round\" class=\"ion-margin-bottom ion-margin-top\" color=\"tertiary\"  expand=\"full\" (click)=\"textcount()\">Start</ion-button>\n      <ion-button  *ngIf=\"energize==='1'\" size=\"medium\" shape=\"round\" class=\"ion-margin-bottom ion-margin-top\" color=\"tertiary\"  expand=\"full\" (click)=\"requestAccess()\">Stop</ion-button>\n    </ion-row>\n</div>\n\n\n</ion-content> \n");

/***/ })

}]);
//# sourceMappingURL=src_app_device_device_module_ts.js.map