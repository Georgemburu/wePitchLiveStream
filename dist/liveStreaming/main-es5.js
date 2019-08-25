(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"container\">\n  <!-- header -->\n  <app-header></app-header>\n  \n<router-outlet></router-outlet>\n</main>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/bottom/bottom.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/bottom/bottom.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bottom\">\n    <div class=\"chats_div\">\n        <ul>\n            <li>\n                <img src=\"../../assets/images/pic.png\"/> <span>Continue Your Workout. I Will Tip</span>\n            </li>\n            <li>\n                <img src=\"../../assets/images/pic.png\"/> <span>Graig77-Tipped You <span class=\"green\">$5</span></span>\n            </li>\n        </ul>\n        <div class=\"chats_footer\">\n                <ng-container *ngIf=\"page=='broadcaster'; else elseTemplateer\">\n                        <p>Total Tips Collected-<span class=\"green\">$7:00</span></p>\n                    </ng-container>\n                    <ng-template #elseTemplateer>\n                            <input type=\"text\" class=\"chats_input\" placeholder=\"Type Your Message To Justin Zumoff Here\">\n                            <div class=\"buttonsDiv\">\n                                <button class=\"btn_blue\">Send A Tip</button>\n                                <button class=\"btn_blue\">Send</button>\n                            </div>\n                    </ng-template>\n\n            \n        </div>\n    </div>\n    <div class=\"stats_div\">\n        <ng-container *ngIf=\"page=='broadcaster'; else elseTemplatee\">\n                <div>\n                        <p>Will Do One Hour Pitch</p>\n                    </div>\n        </ng-container>\n        <ng-template #elseTemplatee>\n                <div class=\"remainingTime_div\">\n                        <p>Time Remaining 15:32</p>\n                    </div>\n                    <div>\n                        <p class=\"blue\">Topic For Goal</p>\n                        <p>Will Do One Hour Pitch</p>\n                    </div>\n        </ng-template>\n        \n\n        \n        <div class=\"stats_imageDiv\">\n            <img src=\"../../assets/images/bottle1.jpeg\"/>\n            <p class=\"completionState\">\n                <span>\n                        <span>0%</span>\n                        <span>completed</span>\n                </span>\n                \n            </p>\n        </div>\n        <div>\n            <p>Raised $0-Total $10:00</p>\n        </div>\n        <div class=\"chats_footer statsF\">\n            <ng-container *ngIf=\"page=='broadcaster'; else elseTemplate\">\n                <p class=\"setAGoalBtn\">Set A Goal</p>\n            </ng-container>\n            <ng-template #elseTemplate>\n                    <div class=\"sendContribDiv\">\n                            <input type=\"text\">\n                            <button class=\"btn_blue\">Send Contribution</button>\n                        </div>\n            </ng-template>\n            \n            \n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/broadcast-page/broadcast-page.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/broadcast-page/broadcast-page.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-video></app-video>\n<app-bottom></app-bottom>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n    <div class=\"humberger_Div\">\n        <div></div>\n        <div></div>\n        <div></div>\n    </div>\n    <div class=\"brand_Div\">\n        <p>we<span class=\"blue\">p</span>itch</p>\n    </div>\n    <div class=\"notificationBell_DIv\">\n\n            <!-- <div>Icons made by <a href=\"https://www.flaticon.com/authors/chanut\" title=\"Chanut\">Chanut</a> from <a href=\"https://www.flaticon.com/\"             title=\"Flaticon\">www.flaticon.com</a> is licensed by <a href=\"http://creativecommons.org/licenses/by/3.0/\"             title=\"Creative Commons BY 3.0\" target=\"_blank\">CC 3.0 BY</a></div> -->\n    </div>\n</header>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/playback-page/playback-page.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/playback-page/playback-page.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"playback\">\n    <div class=\"title_div\">Recent Videos</div>\n    <div class=\"videos_list_area\">\n        <ul>\n            <li *ngFor=\"let file of FILES\" (click)=\"handleVideoFileClick($event)\">{{ file }}</li>\n        </ul>\n    </div>\n\n    <div class=\"video_modal show_not\" id=\"video_modal\">\n        <span class=\"close_modal_icon\" (click)=\"handleCloseModal($event)\">X</span>\n        <video style=\"width: 300px; height: 500px;\" controls id=\"playback_video_elem\">\n\n        </video>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/startpage/startpage.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/startpage/startpage.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"startuppage\">\n    <div>\n        <nav>\n            <a routerLink=\"broadcaster\" (click)=\"handleNavClick('broadcast')\">Broadcast</a>\n            <a routerLink=\"viewer\" (click)=\"handleNavClick('viewer')\">View</a>\n            <a routerLink=\"playback\" (click)=\"handleNavClick('playback')\">Playback</a>\n        </nav>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/video/video.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/video/video.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"video_div\">\n    <div class=\"video_info\">\n        <div class=\"video_duration\">\n            <p>Duration Time-1:00</p>\n        </div>\n        <div class=\"video_title\">\n            <p>Live Video</p>\n        </div>\n        <div class=\"video_archiveOpt\">\n            <p><span><input type=\"checkbox\"/></span><span>Archive THis LiveStream</span></p>\n\n            <div class=\"video_cancel\">\n                    <div class=\"circle\">\n                        <div></div>\n                        <div></div>\n                    </div>\n                </div>\n        </div>\n        \n    </div>\n</div> -->\n<div class=\"video_div\">\n    <div class=\"video_info\">\n        <span>Duration Time-1:00</span>\n        <span class=\"video_title\">Live VIdeo</span>\n        <span class=\"archive_area\">\n            <input type=\"checkbox\" name=\"\" id=\"checkbox\" (click)=\"checkboxClick($event)\"/>\n            <!-- <button>a</button> -->\n            <ng-container *ngIf=\"page=='broadcaster'; else elseTemplate\">\n                <span class=\"archive_txt\"><span>Archive</span><span>This</span><span>liveStram</span></span>\n                \n            </ng-container>\n            <ng-template #elseTemplate>\n                <span class=\"archive_txt\"><span>Save</span><span>To</span><span>Favourite</span></span>\n                \n            </ng-template>\n            \n            <div class=\"video_cancel\">\n                    <div class=\"circle\">\n                        <div></div>\n                        <div></div>\n                    </div>\n                </div> \n        </span>\n    </div>\n\n    <!-- video -->\n    <div width=\"100%\" height=\"40vh\" class=\"main_video_div\">\n        <video width=\"100%\" height=\"100%\" style=\"z-index: 100;\" controls autoplay></video>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _startpage_startpage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startpage/startpage.component */ "./src/app/startpage/startpage.component.ts");
/* harmony import */ var _broadcast_page_broadcast_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./broadcast-page/broadcast-page.component */ "./src/app/broadcast-page/broadcast-page.component.ts");
/* harmony import */ var _playback_page_playback_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./playback-page/playback-page.component */ "./src/app/playback-page/playback-page.component.ts");






var routes = [
    { path: "", component: _startpage_startpage_component__WEBPACK_IMPORTED_MODULE_3__["StartpageComponent"] },
    { path: "broadcaster", component: _broadcast_page_broadcast_page_component__WEBPACK_IMPORTED_MODULE_4__["BroadcastPageComponent"] },
    { path: "viewer", component: _broadcast_page_broadcast_page_component__WEBPACK_IMPORTED_MODULE_4__["BroadcastPageComponent"] },
    { path: "playback", component: _playback_page_playback_page_component__WEBPACK_IMPORTED_MODULE_5__["PlaybackPageComponent"] }
];
///:session-id
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'liveStreaming';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _videocamera_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./videocamera.service */ "./src/app/videocamera.service.ts");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chat.service */ "./src/app/chat.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _video_video_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./video/video.component */ "./src/app/video/video.component.ts");
/* harmony import */ var _bottom_bottom_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bottom/bottom.component */ "./src/app/bottom/bottom.component.ts");
/* harmony import */ var _startpage_startpage_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./startpage/startpage.component */ "./src/app/startpage/startpage.component.ts");
/* harmony import */ var _broadcast_page_broadcast_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./broadcast-page/broadcast-page.component */ "./src/app/broadcast-page/broadcast-page.component.ts");
/* harmony import */ var _playback_page_playback_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./playback-page/playback-page.component */ "./src/app/playback-page/playback-page.component.ts");













// import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
// const config: SocketIoConfig = {url: 'http://localhost:8080',options:{}}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _video_video_component__WEBPACK_IMPORTED_MODULE_8__["VideoComponent"],
                _bottom_bottom_component__WEBPACK_IMPORTED_MODULE_9__["BottomComponent"],
                _startpage_startpage_component__WEBPACK_IMPORTED_MODULE_10__["StartpageComponent"],
                _broadcast_page_broadcast_page_component__WEBPACK_IMPORTED_MODULE_11__["BroadcastPageComponent"],
                _playback_page_playback_page_component__WEBPACK_IMPORTED_MODULE_12__["PlaybackPageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            ],
            providers: [
                _videocamera_service__WEBPACK_IMPORTED_MODULE_3__["VideocameraService"],
                _chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bottom/bottom.component.scss":
/*!**********************************************!*\
  !*** ./src/app/bottom/bottom.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bottom {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  height: 100%;\n  color: white;\n}\n\n.chats_div {\n  position: relative;\n  border-right: 1px solid white;\n  height: 100%;\n}\n\n.chats_div ul {\n  padding-left: 6px;\n  font-size: 0.8rem;\n  padding-top: 4px;\n}\n\n.chats_div ul li {\n  display: flex;\n  margin-bottom: 1rem;\n}\n\n.chats_div ul li img {\n  min-width: 3rem;\n  max-width: 3rem;\n  margin-right: 4px;\n  min-height: 3rem;\n  max-height: 3rem;\n}\n\n.chats_div ul li span {\n  padding-top: 6px;\n}\n\n.stats_div {\n  border-left: 1px solid white;\n  height: 25rem;\n  position: relative;\n  text-align: center;\n  padding-top: 1rem;\n}\n\n.green {\n  color: green !important;\n}\n\n.chats_footer {\n  position: absolute;\n  bottom: 0px;\n  padding: 0 0.5rem;\n  right: 0;\n  left: 0;\n}\n\n.statsF {\n  display: flex;\n  justify-content: center;\n  position: absolute;\n  right: 0;\n  left: 0;\n}\n\n.setAGoalBtn {\n  background-color: #040479;\n  padding: 0.5rem 0.5rem;\n  border-radius: 4px;\n  margin-left: 3rem;\n}\n\n.setAGoalBtn:hover {\n  cursor: pointer;\n}\n\n.stats_imageDiv {\n  position: relative;\n}\n\n.stats_imageDiv img {\n  width: 10rem;\n  mix-blend-mode: screen;\n  margin: 1rem 0;\n}\n\n.stats_imageDiv .completionState {\n  position: absolute;\n  color: black;\n  display: grid;\n  grid-template-columns: 1fr;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n}\n\n.stats_imageDiv .completionState span {\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n}\n\n.completionState > span:nth-child(1) {\n  font-size: 14px;\n}\n\n.chats_input {\n  width: 100%;\n}\n\n.buttonsDiv {\n  display: flex;\n  justify-content: space-between;\n}\n\n.btn_blue {\n  background-color: blue;\n  color: white;\n  border: none;\n  outline: none;\n  padding: 0.5rem;\n  border-radius: 6px;\n}\n\n.sendContribDiv {\n  display: flex;\n}\n\n.sendContribDiv input {\n  width: 10rem;\n}\n\n.remainingTime_div {\n  margin-bottom: 0.5rem;\n}\n\n.blue {\n  color: blue;\n}\n\n@media screen and (max-width: 670px) {\n  .sendContribDiv {\n    display: flex;\n    flex-direction: column;\n  }\n  .sendContribDiv input {\n    width: 10rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dlb3JnZS9EZXNrdG9wL1BvQy9saXZlU3RyZWFtaW5nL3NyYy9hcHAvYm90dG9tL2JvdHRvbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYm90dG9tL2JvdHRvbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFFQSxZQUFBO0FDQUo7O0FERUE7RUFDSSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREFJO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDRVI7O0FERFE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNHWjs7QURGWTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDSWhCOztBRERZO0VBQ0ksZ0JBQUE7QUNHaEI7O0FERUE7RUFDSSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURDQTtFQUNJLHVCQUFBO0FDRUo7O0FEQUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0FDR0o7O0FEREE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0FDSUo7O0FER0E7RUFDSSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0FKOztBREVJO0VBQ0ksZUFBQTtBQ0FSOztBRElBO0VBQ0ksa0JBQUE7QUNESjs7QURFSTtFQUNJLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNBUjs7QURFSTtFQUNJLGtCQUFBO0VBR0EsWUFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7QUNGUjs7QURHTztFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNEWDs7QURPQTtFQUNJLGVBQUE7QUNKSjs7QURhQTtFQUNJLFdBQUE7QUNWSjs7QURhQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQ1ZKOztBRGFBO0VBQ0ksc0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNWSjs7QURjQTtFQUNJLGFBQUE7QUNYSjs7QURnQkk7RUFDSSxZQUFBO0FDZFI7O0FEbUJBO0VBQ0kscUJBQUE7QUNoQko7O0FEbUJBO0VBQ0ksV0FBQTtBQ2hCSjs7QURtQkE7RUFDSTtJQUNJLGFBQUE7SUFLQSxzQkFBQTtFQ3BCTjtFRHFCTTtJQUNJLFlBQUE7RUNuQlY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2JvdHRvbS9ib3R0b20uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm90dG9tIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgLy8gaGVpZ2h0OiA0cmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi5jaGF0c19kaXYge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdWwge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDZweDtcbiAgICAgICAgZm9udC1zaXplOiAuOHJlbTtcbiAgICAgICAgcGFkZGluZy10b3A6IDRweDtcbiAgICAgICAgbGl7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAzcmVtO1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogM3JlbTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAzcmVtO1xuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDNyZW07XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4uc3RhdHNfZGl2IHtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHdoaXRlO1xuICAgIGhlaWdodDogMjVyZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcbn1cbi5ncmVlbiB7XG4gICAgY29sb3I6IGdyZWVuICFpbXBvcnRhbnQ7XG59XG4uY2hhdHNfZm9vdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgcGFkZGluZzogMCAuNXJlbTtcbiAgICByaWdodDogMDtcbiAgICBsZWZ0OiAwO1xufVxuLnN0YXRzRiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogMDtcbiAgICAvLyB0b3A6IDA7XG4gICAgLy8gYm90dG9tOiAwO1xuICAgIC8vICBwIHtcbiAgICAvLyAgICAgIG1hcmdpbjogYXV0bztcbiAgICAvLyAgfVxufVxuLnNldEFHb2FsQnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNCwgNCwgMTIxKTtcbiAgICBwYWRkaW5nOiAuNXJlbSAuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDNyZW07XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbn1cblxuLnN0YXRzX2ltYWdlRGl2IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwcmVtO1xuICAgICAgICBtaXgtYmxlbmQtbW9kZTogc2NyZWVuO1xuICAgICAgICBtYXJnaW46IDFyZW0gMDtcbiAgICB9XG4gICAgLmNvbXBsZXRpb25TdGF0ZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgLy8gdG9wOiA0cmVtO1xuICAgICAgICAvLyByaWdodDogNWVtO1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgc3BhbiB7XG4gICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICB9XG4gICAgfVxufVxuXG5cbi5jb21wbGV0aW9uU3RhdGUgPiBzcGFuOm50aC1jaGlsZCgxKXtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG4vLyAuY29tcGxldGlvblN0YXRlIHtcbiAgICBcbi8vIH1cblxuXG5cbi8vIFVTRVJcbi5jaGF0c19pbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLy8gbWFyZ2luLWJvdHRvbTogLjVyZW07XG59XG4uYnV0dG9uc0RpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5idG5fYmx1ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6bm9uZTtcbiAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG5cbn1cblxuLnNlbmRDb250cmliRGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC8vIG1hcmdpbi10b3A6IDVyZW07XG4gICAgLy8gZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIC8vIGhlaWdodDogMXJlbTtcbiAgICAvLyBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgICBpbnB1dCB7XG4gICAgICAgIHdpZHRoOiAxMHJlbTtcbiAgICB9XG59XG5cblxuLnJlbWFpbmluZ1RpbWVfZGl2IHtcbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbn1cblxuLmJsdWUge1xuICAgIGNvbG9yOiBibHVlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZChtYXgtd2lkdGg6IDY3MHB4KXtcbiAgICAuc2VuZENvbnRyaWJEaXYge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAvLyBtYXJnaW4tdG9wOiA1cmVtO1xuICAgICAgICAvLyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgICAgIC8vIGhlaWdodDogMXJlbTtcbiAgICAgICAgLy8gcGFkZGluZy1ib3R0b206IDFyZW07XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uIDogY29sdW1uO1xuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICB3aWR0aDogMTByZW07XG4gICAgICAgIH1cbiAgICB9XG59IiwiLmJvdHRvbSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jaGF0c19kaXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHdoaXRlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uY2hhdHNfZGl2IHVsIHtcbiAgcGFkZGluZy1sZWZ0OiA2cHg7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBwYWRkaW5nLXRvcDogNHB4O1xufVxuLmNoYXRzX2RpdiB1bCBsaSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4uY2hhdHNfZGl2IHVsIGxpIGltZyB7XG4gIG1pbi13aWR0aDogM3JlbTtcbiAgbWF4LXdpZHRoOiAzcmVtO1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgbWluLWhlaWdodDogM3JlbTtcbiAgbWF4LWhlaWdodDogM3JlbTtcbn1cbi5jaGF0c19kaXYgdWwgbGkgc3BhbiB7XG4gIHBhZGRpbmctdG9wOiA2cHg7XG59XG5cbi5zdGF0c19kaXYge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHdoaXRlO1xuICBoZWlnaHQ6IDI1cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDFyZW07XG59XG5cbi5ncmVlbiB7XG4gIGNvbG9yOiBncmVlbiAhaW1wb3J0YW50O1xufVxuXG4uY2hhdHNfZm9vdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbiAgcGFkZGluZzogMCAwLjVyZW07XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xufVxuXG4uc3RhdHNGIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG59XG5cbi5zZXRBR29hbEJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNDA0Nzk7XG4gIHBhZGRpbmc6IDAuNXJlbSAwLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luLWxlZnQ6IDNyZW07XG59XG4uc2V0QUdvYWxCdG46aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zdGF0c19pbWFnZURpdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zdGF0c19pbWFnZURpdiBpbWcge1xuICB3aWR0aDogMTByZW07XG4gIG1peC1ibGVuZC1tb2RlOiBzY3JlZW47XG4gIG1hcmdpbjogMXJlbSAwO1xufVxuLnN0YXRzX2ltYWdlRGl2IC5jb21wbGV0aW9uU3RhdGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiBibGFjaztcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbn1cbi5zdGF0c19pbWFnZURpdiAuY29tcGxldGlvblN0YXRlIHNwYW4ge1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5jb21wbGV0aW9uU3RhdGUgPiBzcGFuOm50aC1jaGlsZCgxKSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNoYXRzX2lucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5idXR0b25zRGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uYnRuX2JsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5zZW5kQ29udHJpYkRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uc2VuZENvbnRyaWJEaXYgaW5wdXQge1xuICB3aWR0aDogMTByZW07XG59XG5cbi5yZW1haW5pbmdUaW1lX2RpdiB7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cblxuLmJsdWUge1xuICBjb2xvcjogYmx1ZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjcwcHgpIHtcbiAgLnNlbmRDb250cmliRGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLnNlbmRDb250cmliRGl2IGlucHV0IHtcbiAgICB3aWR0aDogMTByZW07XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/bottom/bottom.component.ts":
/*!********************************************!*\
  !*** ./src/app/bottom/bottom.component.ts ***!
  \********************************************/
/*! exports provided: BottomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomComponent", function() { return BottomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BottomComponent = /** @class */ (function () {
    function BottomComponent() {
    }
    BottomComponent.prototype.ngOnInit = function () {
        if (document.URL.toLowerCase().includes('broadcaster')) {
            // show broadcasters 
            this.page = 'broadcaster';
        }
        else {
            //  show viewer
            this.page = 'viewer';
        }
    };
    BottomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bottom',
            template: __webpack_require__(/*! raw-loader!./bottom.component.html */ "./node_modules/raw-loader/index.js!./src/app/bottom/bottom.component.html"),
            styles: [__webpack_require__(/*! ./bottom.component.scss */ "./src/app/bottom/bottom.component.scss")]
        })
    ], BottomComponent);
    return BottomComponent;
}());



/***/ }),

/***/ "./src/app/broadcast-page/broadcast-page.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/broadcast-page/broadcast-page.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jyb2FkY2FzdC1wYWdlL2Jyb2FkY2FzdC1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/broadcast-page/broadcast-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/broadcast-page/broadcast-page.component.ts ***!
  \************************************************************/
/*! exports provided: BroadcastPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BroadcastPageComponent", function() { return BroadcastPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BroadcastPageComponent = /** @class */ (function () {
    function BroadcastPageComponent() {
        this.page = "";
    }
    BroadcastPageComponent.prototype.ngOnInit = function () {
    };
    BroadcastPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-broadcast-page',
            template: __webpack_require__(/*! raw-loader!./broadcast-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/broadcast-page/broadcast-page.component.html"),
            styles: [__webpack_require__(/*! ./broadcast-page.component.scss */ "./src/app/broadcast-page/broadcast-page.component.scss")]
        })
    ], BroadcastPageComponent);
    return BroadcastPageComponent;
}());



/***/ }),

/***/ "./src/app/chat.service.ts":
/*!*********************************!*\
  !*** ./src/app/chat.service.ts ***!
  \*********************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _videocamera_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./videocamera.service */ "./src/app/videocamera.service.ts");



var ChatService = /** @class */ (function () {
    function ChatService(wsService) {
        this.wsService = wsService;
        this.messages = wsService
            .connect();
        // .next((response:any):any =>{
        //   return response;
        // })
    }
    ChatService.prototype.sendMsg = function (msg) {
        this.messages.next(msg);
    };
    ChatService.prototype.sendVideo = function (data) {
        console.log('sending video', data);
        this.wsService.sendVideo(data);
    };
    ChatService.prototype.streamLive = function (cb) {
        this.wsService.streamLive(function (data) {
            cb(data);
        });
    };
    ChatService.prototype.sendStreamPackets = function (data) {
        this.wsService.sendStreamPackets(data);
    };
    ChatService.prototype.receiveStreamPackets = function (cb) {
        this.wsService.receiveStreamPackets(function (data) {
            cb(data);
        });
    };
    ChatService.prototype.fetchVideo = function (url, cb) {
        this.wsService.fetchVideo(url, cb);
    };
    ChatService.prototype.sendVideoForArchive = function (video) {
        this.wsService.sendVideoForArchive(video);
    };
    ChatService.prototype.showPlaybacksAvailable = function () {
        this.wsService.showPlaybacksAvailable();
    };
    ChatService.prototype.playbackVideoFiles = function (cb) {
        this.wsService.playbackVideoFiles(cb);
    };
    ChatService.ctorParameters = function () { return [
        { type: _videocamera_service__WEBPACK_IMPORTED_MODULE_2__["VideocameraService"] }
    ]; };
    ChatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  height: 10vh;\n  background-color: #0f0f0f;\n  display: flex;\n  padding: 0 1rem;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid white;\n  color: white;\n}\nheader .humberger_Div {\n  width: 3rem;\n}\nheader .humberger_Div div {\n  height: 0.5rem;\n  width: 100%;\n  background-color: white;\n  margin: 0.5em 0;\n  border-radius: 6px;\n}\nheader .humberger_Div:hover {\n  cursor: pointer;\n}\n.blue {\n  color: blue;\n}\n.brand_Div p {\n  font-size: 4rem;\n  font-family: \"Nanum Brush Script\", cursive;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dlb3JnZS9EZXNrdG9wL1BvQy9saXZlU3RyZWFtaW5nL3NyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFFQSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQ0FKO0FEQ0k7RUFDSSxXQUFBO0FDQ1I7QURDUTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNDWjtBRENRO0VBQ0ksZUFBQTtBQ0NaO0FER0E7RUFDSSxXQUFBO0FDQUo7QURJSTtFQUNHLGVBQUE7RUFFSCwwQ0FBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlciB7XG4gICAgaGVpZ2h0OiAxMHZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNSwgMTUsIDE1KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC8vIHBhZGRpbmc6IC41cmVtIC41cmVtO1xuICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIC5odW1iZXJnZXJfRGl2IHtcbiAgICAgICAgd2lkdGg6IDNyZW07XG4gICAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgICAgICBkaXYge1xuICAgICAgICAgICAgaGVpZ2h0OiAuNXJlbTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBtYXJnaW46IC41ZW0gMDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgfVxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgIH1cbn1cbi5ibHVlIHtcbiAgICBjb2xvcjogYmx1ZTtcbn1cblxuLmJyYW5kX0RpdiB7XG4gICAgcCB7XG4gICAgICAgZm9udC1zaXplOiA0cmVtO1xuICAgIC8vIGZvbnQtZmFtaWx5OiAnUmVlbmllIEJlYW5pZScsIGN1cnNpdmU7XG4gICAgZm9udC1mYW1pbHk6ICdOYW51bSBCcnVzaCBTY3JpcHQnLCBjdXJzaXZlO1xuICAgIH1cbn0iLCJoZWFkZXIge1xuICBoZWlnaHQ6IDEwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZjBmMGY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDAgMXJlbTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmhlYWRlciAuaHVtYmVyZ2VyX0RpdiB7XG4gIHdpZHRoOiAzcmVtO1xufVxuaGVhZGVyIC5odW1iZXJnZXJfRGl2IGRpdiB7XG4gIGhlaWdodDogMC41cmVtO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogMC41ZW0gMDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuaGVhZGVyIC5odW1iZXJnZXJfRGl2OmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYmx1ZSB7XG4gIGNvbG9yOiBibHVlO1xufVxuXG4uYnJhbmRfRGl2IHAge1xuICBmb250LXNpemU6IDRyZW07XG4gIGZvbnQtZmFtaWx5OiBcIk5hbnVtIEJydXNoIFNjcmlwdFwiLCBjdXJzaXZlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/playback-page/playback-page.component.scss":
/*!************************************************************!*\
  !*** ./src/app/playback-page/playback-page.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".playback {\n  color: white;\n  padding: 2em;\n}\n\n.title_div {\n  width: 100%;\n  text-align: center;\n  text-decoration: underline;\n}\n\n.videos_list_area {\n  box-shadow: 0px 0px 0px 1px inset white;\n}\n\n.videos_list_area ul {\n  list-style: none;\n}\n\n.videos_list_area ul li {\n  padding: 0.4em;\n  cursor: pointer;\n}\n\n.videos_list_area ul li:hover {\n  text-decoration: underline;\n}\n\n.show_not {\n  display: none;\n  visibility: hidden;\n}\n\n.video_modal {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: #726f6f;\n  opacity: 1;\n  display: flex;\n}\n\n.video_modal video {\n  margin: auto;\n}\n\n.video_modal .close_modal_icon {\n  color: red;\n  font-size: 2em;\n  position: absolute;\n  background-color: black;\n  padding: 0.3em;\n  border: 1px solid white;\n  right: 2em;\n  opacity: 1;\n  top: 1em;\n  border-radius: 6px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dlb3JnZS9EZXNrdG9wL1BvQy9saXZlU3RyZWFtaW5nL3NyYy9hcHAvcGxheWJhY2stcGFnZS9wbGF5YmFjay1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wbGF5YmFjay1wYWdlL3BsYXliYWNrLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRENBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7QUNFSjs7QURBQTtFQUNJLHVDQUFBO0FDR0o7O0FEQUk7RUFDSSxnQkFBQTtBQ0VSOztBREFRO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNFWjs7QURBYTtFQUNHLDBCQUFBO0FDRWhCOztBREdBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0FDQUo7O0FERUE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FDQ0o7O0FEQ0k7RUFDSSxZQUFBO0FDQ1I7O0FERUk7RUFDSSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL3BsYXliYWNrLXBhZ2UvcGxheWJhY2stcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wbGF5YmFjayB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDJlbTtcbn1cbi50aXRsZV9kaXYge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbi52aWRlb3NfbGlzdF9hcmVhIHtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAxcHggaW5zZXQgd2hpdGU7XG4gICAgXG5cbiAgICB1bCB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG5cbiAgICAgICAgbGkge1xuICAgICAgICAgICAgcGFkZGluZzogLjRlbTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAgICAgICY6aG92ZXJ7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuLnNob3dfbm90IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi52aWRlb19tb2RhbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTE0LCAxMTEsIDExMSk7XG4gICAgb3BhY2l0eTogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgdmlkZW8ge1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxuXG4gICAgLmNsb3NlX21vZGFsX2ljb24ge1xuICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICBmb250LXNpemU6IDJlbTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgcGFkZGluZzogLjNlbTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgICAgIHJpZ2h0OiAyZW07XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRvcDogMWVtO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG59XG4iLCIucGxheWJhY2sge1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDJlbTtcbn1cblxuLnRpdGxlX2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4udmlkZW9zX2xpc3RfYXJlYSB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDFweCBpbnNldCB3aGl0ZTtcbn1cbi52aWRlb3NfbGlzdF9hcmVhIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi52aWRlb3NfbGlzdF9hcmVhIHVsIGxpIHtcbiAgcGFkZGluZzogMC40ZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi52aWRlb3NfbGlzdF9hcmVhIHVsIGxpOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5zaG93X25vdCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLnZpZGVvX21vZGFsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3MjZmNmY7XG4gIG9wYWNpdHk6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4udmlkZW9fbW9kYWwgdmlkZW8ge1xuICBtYXJnaW46IGF1dG87XG59XG4udmlkZW9fbW9kYWwgLmNsb3NlX21vZGFsX2ljb24ge1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDJlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMC4zZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICByaWdodDogMmVtO1xuICBvcGFjaXR5OiAxO1xuICB0b3A6IDFlbTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/playback-page/playback-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/playback-page/playback-page.component.ts ***!
  \**********************************************************/
/*! exports provided: PlaybackPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaybackPageComponent", function() { return PlaybackPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chat.service */ "./src/app/chat.service.ts");



var PlaybackPageComponent = /** @class */ (function () {
    function PlaybackPageComponent(chatService) {
        this.chatService = chatService;
    }
    PlaybackPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('playback initialized');
        this.chatService.showPlaybacksAvailable();
        this.chatService.playbackVideoFiles(function (files) {
            console.log(files);
            _this.FILES = JSON.parse(files);
        });
        this.modal = document.getElementById('video_modal');
    };
    PlaybackPageComponent.prototype.handleVideoFileClick = function (e) {
        console.log(e);
        var fileText = e.target.innerText;
        this.video_title = fileText;
        // open modal
        this.OPEN_MODAL = true;
        this.modal.classList.remove('show_not');
        console.log(e.target.classList);
        var playback_video_elem = document.getElementById('playback_video_elem');
        playback_video_elem.setAttribute('src', "http://localhost:8080/getPlaybackVideo/" + this.video_title);
        // playback_video_elem.src = `http://localhost:8080/getPlaybackVideo/${this.video_title}`
        console.log(playback_video_elem);
    };
    PlaybackPageComponent.prototype.handleCloseModal = function (e) {
        //close modal
        this.OPEN_MODAL = false;
        this.modal.classList.add('show_not');
    };
    PlaybackPageComponent.ctorParameters = function () { return [
        { type: _chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"] }
    ]; };
    PlaybackPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-playback-page',
            template: __webpack_require__(/*! raw-loader!./playback-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/playback-page/playback-page.component.html"),
            styles: [__webpack_require__(/*! ./playback-page.component.scss */ "./src/app/playback-page/playback-page.component.scss")]
        })
    ], PlaybackPageComponent);
    return PlaybackPageComponent;
}());



/***/ }),

/***/ "./src/app/startpage/startpage.component.scss":
/*!****************************************************!*\
  !*** ./src/app/startpage/startpage.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".startuppage {\n  color: white;\n  display: flex;\n  width: 100vw;\n  height: 90vh;\n}\n.startuppage div {\n  margin: auto;\n}\n.startuppage div nav {\n  display: flex;\n  justify-content: space-evenly;\n}\n.startuppage div nav a {\n  color: white;\n  text-decoration: none;\n  margin: 0 0.5rem;\n}\n.startuppage div nav a:hover {\n  text-decoration: underline;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dlb3JnZS9EZXNrdG9wL1BvQy9saXZlU3RyZWFtaW5nL3NyYy9hcHAvc3RhcnRwYWdlL3N0YXJ0cGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc3RhcnRwYWdlL3N0YXJ0cGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNDSjtBREFJO0VBQ0ksWUFBQTtBQ0VSO0FESVE7RUFDSSxhQUFBO0VBQ0EsNkJBQUE7QUNEWjtBREdZO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNEaEI7QURHZ0I7RUFDSSwwQkFBQTtFQUNBLGVBQUE7QUNEcEIiLCJmaWxlIjoic3JjL2FwcC9zdGFydHBhZ2Uvc3RhcnRwYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXJ0dXBwYWdlIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiA5MHZoO1xuICAgIGRpdiB7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG59XG5cbi5zdGFydHVwcGFnZSB7XG4gICAgZGl2IHtcbiAgICAgICAgbmF2IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcblxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgLjVyZW07XG5cbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiLnN0YXJ0dXBwYWdlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogOTB2aDtcbn1cbi5zdGFydHVwcGFnZSBkaXYge1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5zdGFydHVwcGFnZSBkaXYgbmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG4uc3RhcnR1cHBhZ2UgZGl2IG5hdiBhIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG1hcmdpbjogMCAwLjVyZW07XG59XG4uc3RhcnR1cHBhZ2UgZGl2IG5hdiBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/startpage/startpage.component.ts":
/*!**************************************************!*\
  !*** ./src/app/startpage/startpage.component.ts ***!
  \**************************************************/
/*! exports provided: StartpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartpageComponent", function() { return StartpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StartpageComponent = /** @class */ (function () {
    function StartpageComponent() {
    }
    StartpageComponent.prototype.ngOnInit = function () {
    };
    StartpageComponent.prototype.handleBroadcastPage = function () {
    };
    StartpageComponent.prototype.handleNavClick = function (e) {
        console.log('clcikde', e);
        switch (e.toLowerCase()) {
            case "broadcast":
                this.handleBroadcastPage();
                break;
            case "viewer":
                break;
            case "playback":
                break;
            default:
                break;
        }
    };
    StartpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-startpage',
            template: __webpack_require__(/*! raw-loader!./startpage.component.html */ "./node_modules/raw-loader/index.js!./src/app/startpage/startpage.component.html"),
            styles: [__webpack_require__(/*! ./startpage.component.scss */ "./src/app/startpage/startpage.component.scss")]
        })
    ], StartpageComponent);
    return StartpageComponent;
}());



/***/ }),

/***/ "./src/app/video/video.component.scss":
/*!********************************************!*\
  !*** ./src/app/video/video.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".circle {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 50%;\n  border: 3px solid white !important;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  right: 0;\n}\n.circle div {\n  height: 3px;\n  width: 60%;\n  background-color: white;\n  position: absolute;\n  border-radius: 6px;\n}\n.circle div:nth-child(1) {\n  transform: rotate(45deg);\n}\n.circle div:nth-child(2) {\n  transform: rotate(-215deg);\n}\n.circle:hover {\n  cursor: pointer;\n}\n.video_div {\n  color: white;\n  padding: 0 0 0 1rem;\n}\n.video_info {\n  display: flex;\n  align-items: center;\n  justify-content: space-between !important;\n  font-size: 0.9rem;\n}\n@media screen and (max-width: 500px) {\n  .video_info {\n    justify-content: space-between !important;\n  }\n}\n.video_title {\n  font-weight: bolder;\n  margin-left: 1rem;\n  font-size: 1.2rem;\n}\n.archive_area {\n  display: flex;\n  margin-left: 1rem;\n}\n.archive_txt {\n  margin-left: 2px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.main_video_div {\n  height: 50vh;\n  margin-right: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dlb3JnZS9EZXNrdG9wL1BvQy9saXZlU3RyZWFtaW5nL3NyYy9hcHAvdmlkZW8vdmlkZW8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZGVvL3ZpZGVvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFFBQUE7QUNESjtBREVJO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNBUjtBREVRO0VBQ0ksd0JBQUE7QUNBWjtBREVRO0VBQ0ksMEJBQUE7QUNBWjtBREdJO0VBQ0ksZUFBQTtBQ0RSO0FES0E7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUNGSjtBRElBO0VBRUksYUFBQTtFQUNBLG1CQUFBO0VBTUEseUNBQUE7RUFDQSxpQkFBQTtBQ1BKO0FERUk7RUFMSjtJQU1RLHlDQUFBO0VDQ047QUFDRjtBRElBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDREo7QURHQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtBQ0FKO0FERUE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FDQ0o7QURHQTtFQUVJLFlBQUE7RUFFQSxpQkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvdmlkZW8vdmlkZW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jaXJjbGUge1xuICAgIHdpZHRoOiAycmVtO1xuICAgIGhlaWdodDogMnJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyOiAzcHggc29saWQgd2hpdGUgIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLy8gcGFkZGluZzogNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICByaWdodDogMDtcbiAgICBkaXYge1xuICAgICAgICBoZWlnaHQ6IDNweDtcbiAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuXG4gICAgICAgICY6bnRoLWNoaWxkKDEpe1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICB9XG4gICAgICAgICY6bnRoLWNoaWxkKDIpe1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTIxNWRlZyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG59XG5cbi52aWRlb19kaXYgIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMCAwIDAgMXJlbTtcbn1cbi52aWRlb19pbmZvIHtcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCl7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50OyBcblxuICAgIH1cbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDsgXG4gICAgZm9udC1zaXplOiAuOXJlbTtcbn1cbi52aWRlb190aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbn1cbi5hcmNoaXZlX2FyZWEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XG59XG4uYXJjaGl2ZV90eHQge1xuICAgIG1hcmdpbi1sZWZ0OiAycHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIFxufVxuXG4ubWFpbl92aWRlb19kaXYge1xuICAgIC8vIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTB2aDtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuICAgIG1hcmdpbi1yaWdodDogMWVtO1xufSIsIi5jaXJjbGUge1xuICB3aWR0aDogMnJlbTtcbiAgaGVpZ2h0OiAycmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHJpZ2h0OiAwO1xufVxuLmNpcmNsZSBkaXYge1xuICBoZWlnaHQ6IDNweDtcbiAgd2lkdGg6IDYwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuLmNpcmNsZSBkaXY6bnRoLWNoaWxkKDEpIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuLmNpcmNsZSBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTIxNWRlZyk7XG59XG4uY2lyY2xlOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udmlkZW9fZGl2IHtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwIDAgMCAxcmVtO1xufVxuXG4udmlkZW9faW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC52aWRlb19pbmZvIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDtcbiAgfVxufVxuXG4udmlkZW9fdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi5hcmNoaXZlX2FyZWEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLmFyY2hpdmVfdHh0IHtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5tYWluX3ZpZGVvX2RpdiB7XG4gIGhlaWdodDogNTB2aDtcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/video/video.component.ts":
/*!******************************************!*\
  !*** ./src/app/video/video.component.ts ***!
  \******************************************/
/*! exports provided: VideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoComponent", function() { return VideoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chat.service */ "./src/app/chat.service.ts");



var VideoComponent = /** @class */ (function () {
    function VideoComponent(chatService) {
        this.chatService = chatService;
        this.chunks = [];
        this.checked = false;
    }
    VideoComponent.prototype.ngOnInit = function () {
        var _this = this;
        var video = document.querySelector('video');
        // video.src = 'http:localhost:8080/getLiveVideo'
        //       video.load()
        // this.chatService.messages.next('hello')
        // this.chatService.sendMsg("hello msg")
        if (document.URL.toLowerCase().includes('broadcaster')) {
            this.page = 'broadcaster';
            var video_1 = document.querySelector('video');
            var chunks = [];
            var FullvideoData_1 = [];
            this.FULLVIDEO = FullvideoData_1;
            if (navigator.mediaDevices) {
                navigator.mediaDevices.getUserMedia({ audio: true, video: { height: 500, width: 500 } }).then(function (stream) {
                    video_1.srcObject = stream;
                    video_1.play();
                    // setTimeout(()=>{
                    //   this.chatService.sendVideo(JSON.stringify(stream))
                    // },100)
                    var recorder = new MediaRecorder(stream);
                    // console.log('recorder',recorder)
                    video_1.addEventListener('pause', function () {
                        console.log('clicked pause');
                        recorder.stop();
                    });
                    recorder.start();
                    console.log('recorder recording', recorder);
                    recorder.ondataavailable = function (ev) {
                        if (ev.data.size > 0) {
                            console.log('data is available', ev);
                            _this.chunks.push(ev.data);
                            _this.chatService.sendVideo(ev.data);
                            console.log(stream);
                            FullvideoData_1.push(ev.data);
                            // send data via socket
                        }
                    };
                    var a;
                    a = setInterval(function () {
                        console.log(recorder.requestData());
                    }, 4000);
                    video_1.onpause = function () {
                        clearInterval(a);
                    };
                    // recorder.onstop = (ev)=>{
                    //   console.log('stopped recording')
                    //   console.log(this.chunks)
                    //   let blob = new Blob(this.chunks, { 'type' : 'video/mp4;' });
                    //   this.chunks = [];
                    //   // let videoURL = window.URL.createObjectURL(blob);
                    //   // console.log('videoURL', videoURL)
                    //   // video.src = videoURL
                    // }
                }).catch(function (error) {
                    console.log('error with media devices', error);
                });
            }
            var getFrame = function () {
                var canvas = document.createElement('canvas');
                canvas.width = video_1.videoWidth;
                canvas.height = video_1.videoHeight;
                canvas.getContext('2d').drawImage(video_1, 0, 0);
                var data = canvas.toDataURL('video/mp4');
                return data;
            };
            var getVideoFrame = function () {
            };
            // const FPS = 1;
            // setInterval(()=>{
            //   this.chatService.sendVideo(getFrame())
            // },1000/FPS)
            // ARCHIVE VIDEO
            // let checkedValue = false
            var checkbox = document.getElementById('checkbox');
            checkbox.addEventListener('change', function (e) {
                console.log('checked');
                // if(e.target.checked == true){
                //   //save the video to server.
                //   console.log('checked')
                //   if(FullvideoData.length>0){
                //     this.chatService.sendVideoForArchive(FullvideoData)
                //   }
                // }
                // console.log(e)
            });
        }
        else {
            //  show viewer
            this.page = 'viewer';
            var video_2 = document.querySelector('video');
            var main_video_div = document.querySelector('.main_video_div');
            // video.remove()
            var img = document.createElement('img');
            // main_video_div.appendChild(img)
            var videoChunks_1 = [];
            // let blob = new Blob(videoChunks,{'type':'video/webm; codecs=\"opus,vp8\"'})
            var vr = void 0;
            // let R = new MediaRecorder()
            //  let blob;
            video_2.srcObject = null;
            video_2.src = null;
            // video.preventDefault()
            // let blobArrays = []
            this.chatService.receiveStreamPackets(function (data) {
                // console.log('LIVE PACKET STREAMS', data)
                if (data.byteLength > 0) {
                    console.log('LIVE PACKET STREAMS', data);
                    // videoChunks = []
                    videoChunks_1.push(data);
                    // videoChunks = new ArrayBuffer(data)
                    console.log('video chunks', videoChunks_1);
                    // //  new
                    //   blobArrays.push(new Blob([new Uint8Array(data)],{'type':'video/webm; codecs=\"opus,vp8\"'}));
                    //   let currentTime = video.currentTime;
                    //   let blob = new Blob(blobArrays,{'type':'video/webm; codecs=\"opus,vp8\"'})
                    //   video.src = window.URL.createObjectURL(blob);
                    //   video.currentTime = currentTime;
                    //   video.play()
                    // // end new
                    // video.srcObject = null;
                    // video.src = null
                    // video.load()
                    // video.play()
                    // blob = new Blob(videoChunks, {'type':'video/webm; codecs=\"opus,vp8\"'})
                    // blob = new Blob([videoChunks, data],{'type':'video/webm; codecs=\"opus,vp8\"'})
                }
                // let blob = new Blob(videoChunks, {'type':'video/webm; codecs=\"opus,vp8\"'})
                var blob = new Blob(videoChunks_1, { 'type': 'video/webm' });
                video_2.onloadedmetadata = function (e) {
                    console.log('metadata loaded');
                    video_2.currentTime = seekingTime;
                };
                video_2.onloadeddata = function (e) {
                    console.log('data loaded', e);
                    video_2.play();
                };
                video_2.onplay = function (e) {
                    console.log('on play');
                    console.log('duration', video_2.duration);
                    console.log('ended', video_2.ended);
                    console.log('current time', video_2.currentTime);
                };
                var seekingTime = 0;
                video_2.ondurationchange = function (e) {
                    e.preventDefault();
                    // console.log('duration changed',e)
                    // console.log('duration',video.duration)
                    // console.log('ended',video.ended)
                    // console.log('current time',video.currentTime)
                    // video.currentTime = video.duration;
                    video_2.currentTime = seekingTime;
                    // seekingTime = video.duration-5;
                    // seekingTime += video.currentTime;
                    // seekingTime += 3
                    // console.log('current time',video.currentTime)
                };
                video_2.onseeking = function (e) {
                    // console.log('on SEEKING',e)
                    // console.log('duration',video.duration)
                    // console.log('ended',video.ended)
                    // console.log('current time',video.currentTime)
                };
                video_2.onplaying = function (e) {
                    // console.log('on playing',e)
                };
                video_2.onchange = function (e) {
                    video_2.pause();
                };
                var url = URL.createObjectURL(blob);
                video_2.src = url + '#t=' + seekingTime;
            });
        }
    };
    VideoComponent.prototype.checkboxClick = function (e) {
        console.log('ok');
        this.checked = !this.checked;
        if (this.checked == true && this.page == 'broadcaster') {
            // save to db archive for broadcaster
            // this.FULLVIDEO.forEach((buf)=>{
            // })
            this.chatService.sendVideoForArchive(new Blob(this.FULLVIDEO));
        }
        else if (this.checked == true && this.page == 'viewer') {
            //save to viewers favourites
        }
    };
    VideoComponent.ctorParameters = function () { return [
        { type: _chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"] }
    ]; };
    VideoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-video',
            template: __webpack_require__(/*! raw-loader!./video.component.html */ "./node_modules/raw-loader/index.js!./src/app/video/video.component.html"),
            styles: [__webpack_require__(/*! ./video.component.scss */ "./src/app/video/video.component.scss")]
        })
    ], VideoComponent);
    return VideoComponent;
}());



/***/ }),

/***/ "./src/app/videocamera.service.ts":
/*!****************************************!*\
  !*** ./src/app/videocamera.service.ts ***!
  \****************************************/
/*! exports provided: VideocameraService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideocameraService", function() { return VideocameraService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");






var VideocameraService = /** @class */ (function () {
    function VideocameraService() {
    }
    VideocameraService.prototype.connect = function () {
        var _this = this;
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].wsUrl);
        var observable = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this.socket.on('message', function (data) {
                console.log('received a messge from websocket server');
                observer.next(data);
            });
            return function () {
                // this.socket.disconnect()
                _this.socket;
            };
        });
        var observer = {
            next: function (type, data) {
                _this.socket.emit(type, JSON.stringify(data));
            }
        };
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"].create(observer, observable);
    };
    VideocameraService.prototype.sendVideo = function (data) {
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].wsUrl);
        this.socket.emit('video', data);
    };
    VideocameraService.prototype.streamLive = function (cb) {
        this.socket.on('live', function (e) {
            console.log('received live stream', e);
            cb(e);
        });
    };
    VideocameraService.prototype.sendStreamPackets = function (data) {
        this.socket.emit('sendStreamPackets', data);
    };
    VideocameraService.prototype.receiveStreamPackets = function (cb) {
        this.socket.on('receiveStreamPackets', function (e) {
            console.log('received stream packets');
            cb(e);
        });
    };
    VideocameraService.prototype.fetchVideo = function (url, cb) {
        fetch(url, {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            mode: 'cors'
        }).then(function (data) { return data.blob(); }).then(function (dat) {
            console.log(dat);
            cb('', dat);
        }).catch(function (error) {
            console.log(error);
            cb(error, '');
        });
    };
    VideocameraService.prototype.sendVideoForArchive = function (video) {
        this.socket.emit('sendVideoForArchive', video);
    };
    VideocameraService.prototype.showPlaybacksAvailable = function () {
        this.socket.emit('showPlaybacksAvailable', {});
    };
    VideocameraService.prototype.playbackVideoFiles = function (cb) {
        this.socket.on('playbackVideoFiles', function (e) {
            cb(e);
        });
    };
    VideocameraService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], VideocameraService);
    return VideocameraService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    wsUrl: "http://localhost:8080"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/george/Desktop/PoC/liveStreaming/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map