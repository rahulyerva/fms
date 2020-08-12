(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container-fulid margin-top-50px\">\r\n    <toaster-container [toasterconfig]=\"config\"></toaster-container>\r\n  <div class=\"col-sm-2 padding-lr-0 hidden-xs\" *ngIf=\"authService.loggedIn()\">\r\n    <app-sidemenu></app-sidemenu>\r\n  </div>\r\n  <div [ngClass]=\"{'col-sm-10': authService.loggedIn(), 'col-sm-12': !authService.loggedIn()}\" id=\"contentContainer\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_common_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/common/auth.service */ "./src/app/services/common/auth.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.title = 'client';
        this.config = new angular2_toaster__WEBPACK_IMPORTED_MODULE_2__["ToasterConfig"]({
            positionClass: 'toast-bottom-right',
            animation: 'fade'
        });
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_common_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/index.js");
/* harmony import */ var ngx_qrcode2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-qrcode2 */ "./node_modules/ngx-qrcode2/index.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_common_header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/common/header/header.component */ "./src/app/components/common/header/header.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_user_user_user_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/user/user/user.component */ "./src/app/components/user/user/user.component.ts");
/* harmony import */ var _components_user_usergroup_usergroup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/user/usergroup/usergroup.component */ "./src/app/components/user/usergroup/usergroup.component.ts");
/* harmony import */ var _components_machine_machine_machine_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/machine/machine/machine.component */ "./src/app/components/machine/machine/machine.component.ts");
/* harmony import */ var _components_common_sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/common/sidemenu/sidemenu.component */ "./src/app/components/common/sidemenu/sidemenu.component.ts");
/* harmony import */ var _components_machine_machinegroup_machinegroup_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/machine/machinegroup/machinegroup.component */ "./src/app/components/machine/machinegroup/machinegroup.component.ts");
/* harmony import */ var _components_machine_area_area_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/machine/area/area.component */ "./src/app/components/machine/area/area.component.ts");
/* harmony import */ var _components_machine_line_line_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/machine/line/line.component */ "./src/app/components/machine/line/line.component.ts");
/* harmony import */ var _components_machine_reasons_reasons_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/machine/reasons/reasons.component */ "./src/app/components/machine/reasons/reasons.component.ts");
/* harmony import */ var _components_common_label_label_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/common/label/label.component */ "./src/app/components/common/label/label.component.ts");
/* harmony import */ var _components_common_tablelist_tablelist_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/common/tablelist/tablelist.component */ "./src/app/components/common/tablelist/tablelist.component.ts");
/* harmony import */ var _components_settings_import_import_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/settings/import/import.component */ "./src/app/components/settings/import/import.component.ts");
/* harmony import */ var _components_settings_settings_settings_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/settings/settings/settings.component */ "./src/app/components/settings/settings/settings.component.ts");
/* harmony import */ var _components_machine_template_template_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/machine/template/template.component */ "./src/app/components/machine/template/template.component.ts");
/* harmony import */ var _components_machine_steps_steps_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/machine/steps/steps.component */ "./src/app/components/machine/steps/steps.component.ts");
/* harmony import */ var _components_machine_part_part_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/machine/part/part.component */ "./src/app/components/machine/part/part.component.ts");
/* harmony import */ var _components_machine_document_document_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/machine/document/document.component */ "./src/app/components/machine/document/document.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _services_common_auth_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./services/common/auth.service */ "./src/app/services/common/auth.service.ts");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./services/user/user.service */ "./src/app/services/user/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































var appRoutes = [
    { path: '', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_32__["AuthGuard"]] },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_32__["AuthGuard"]] },
    { path: 'user', component: _components_user_user_user_component__WEBPACK_IMPORTED_MODULE_16__["UserComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_32__["AuthGuard"]] },
    { path: 'usergroup', component: _components_user_usergroup_usergroup_component__WEBPACK_IMPORTED_MODULE_17__["UsergroupComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_32__["AuthGuard"]] },
    { path: 'machine', component: _components_machine_machine_machine_component__WEBPACK_IMPORTED_MODULE_18__["MachineComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_32__["AuthGuard"]] },
    { path: 'machinegroup', component: _components_machine_machinegroup_machinegroup_component__WEBPACK_IMPORTED_MODULE_20__["MachinegroupComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_32__["AuthGuard"]] },
    { path: 'area', component: _components_machine_area_area_component__WEBPACK_IMPORTED_MODULE_21__["AreaComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_32__["AuthGuard"]] },
    { path: 'line', component: _components_machine_line_line_component__WEBPACK_IMPORTED_MODULE_22__["LineComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_32__["AuthGuard"]] },
    { path: 'reasons', component: _components_machine_reasons_reasons_component__WEBPACK_IMPORTED_MODULE_23__["ReasonsComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_32__["AuthGuard"]] },
    { path: 'import', component: _components_settings_import_import_component__WEBPACK_IMPORTED_MODULE_26__["ImportComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_32__["AuthGuard"]] },
    { path: 'settings', component: _components_settings_settings_settings_component__WEBPACK_IMPORTED_MODULE_27__["SettingsComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_32__["AuthGuard"]] },
    { path: 'document', component: _components_machine_document_document_component__WEBPACK_IMPORTED_MODULE_31__["DocumentComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_32__["AuthGuard"]] },
    { path: 'part', component: _components_machine_part_part_component__WEBPACK_IMPORTED_MODULE_30__["PartComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_32__["AuthGuard"]] },
    { path: 'steps', component: _components_machine_steps_steps_component__WEBPACK_IMPORTED_MODULE_29__["StepsComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_32__["AuthGuard"]] },
    { path: 'template', component: _components_machine_template_template_component__WEBPACK_IMPORTED_MODULE_28__["TemplateComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_32__["AuthGuard"]] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                _components_common_header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
                _components_user_user_user_component__WEBPACK_IMPORTED_MODULE_16__["UserComponent"],
                _components_user_usergroup_usergroup_component__WEBPACK_IMPORTED_MODULE_17__["UsergroupComponent"],
                _components_machine_machine_machine_component__WEBPACK_IMPORTED_MODULE_18__["MachineComponent"],
                _components_common_sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_19__["SidemenuComponent"],
                _components_machine_machinegroup_machinegroup_component__WEBPACK_IMPORTED_MODULE_20__["MachinegroupComponent"],
                _components_machine_area_area_component__WEBPACK_IMPORTED_MODULE_21__["AreaComponent"],
                _components_machine_line_line_component__WEBPACK_IMPORTED_MODULE_22__["LineComponent"],
                _components_machine_reasons_reasons_component__WEBPACK_IMPORTED_MODULE_23__["ReasonsComponent"],
                _components_common_label_label_component__WEBPACK_IMPORTED_MODULE_24__["LabelComponent"],
                _components_common_tablelist_tablelist_component__WEBPACK_IMPORTED_MODULE_25__["TablelistComponent"],
                _components_settings_import_import_component__WEBPACK_IMPORTED_MODULE_26__["ImportComponent"],
                _components_settings_settings_settings_component__WEBPACK_IMPORTED_MODULE_27__["SettingsComponent"],
                _components_machine_template_template_component__WEBPACK_IMPORTED_MODULE_28__["TemplateComponent"],
                _components_machine_steps_steps_component__WEBPACK_IMPORTED_MODULE_29__["StepsComponent"],
                _components_machine_part_part_component__WEBPACK_IMPORTED_MODULE_30__["PartComponent"],
                _components_machine_document_document_component__WEBPACK_IMPORTED_MODULE_31__["DocumentComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                ngx_qrcode2__WEBPACK_IMPORTED_MODULE_7__["NgxQRCodeModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_10__["FileUploadModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__["ModalModule"].forRoot(),
                angular2_toaster__WEBPACK_IMPORTED_MODULE_8__["ToasterModule"].forRoot(),
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes),
            ],
            providers: [
                _services_common_auth_service__WEBPACK_IMPORTED_MODULE_33__["AuthService"],
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_32__["AuthGuard"],
                _services_user_user_service__WEBPACK_IMPORTED_MODULE_34__["UserService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/common/header/header.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/common/header/header.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-color{\r\n    background-color: #00adff;\r\n    border-color: #00adff;\r\n}\r\n.navbar-color .navbar-brand{\r\n    color: #fff;\r\n}\r\n.navbar-color li > a{\r\n    color: #fff;\r\n    cursor: pointer;\r\n}\r\n.navbar-color .navbar-nav > li > a:hover, .navbar-color .navbar-nav > li > a:focus {\r\n    background-color: transparent;\r\n    color: #FFF;\r\n}\r\n.navbar-color .navbar-toggle .icon-bar{\r\n    background-color: #fff;\r\n}\r\n.img-logo{\r\n    padding: 0!important;\r\n}\r\n.img-logo img{\r\n    width: 60px;\r\n    height: 30px;\r\n    margin: 10px; \r\n}\r\n.dropdown-menu li a:focus,.dropdown-menu li a:hover{\r\n    background-color: transparent;\r\n    color: #FFF;\r\n}\r\n.nav-name{\r\n    float: right;\r\n    color: white;\r\n    padding: 15px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21tb24vaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLFdBQVc7QUFDZjtBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb21tb24vaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci1jb2xvcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGFkZmY7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMGFkZmY7XHJcbn1cclxuLm5hdmJhci1jb2xvciAubmF2YmFyLWJyYW5ke1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLm5hdmJhci1jb2xvciBsaSA+IGF7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm5hdmJhci1jb2xvciAubmF2YmFyLW5hdiA+IGxpID4gYTpob3ZlciwgLm5hdmJhci1jb2xvciAubmF2YmFyLW5hdiA+IGxpID4gYTpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG59XHJcbi5uYXZiYXItY29sb3IgLm5hdmJhci10b2dnbGUgLmljb24tYmFye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG4uaW1nLWxvZ297XHJcbiAgICBwYWRkaW5nOiAwIWltcG9ydGFudDtcclxufVxyXG5cclxuLmltZy1sb2dvIGltZ3tcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4OyBcclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnUgbGkgYTpmb2N1cywuZHJvcGRvd24tbWVudSBsaSBhOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxufVxyXG5cclxuLm5hdi1uYW1le1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/common/header/header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/common/header/header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-color margin-bottom-0 hidden-sm hidden-xs navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" *ngIf=\"authService.loggedIn()\" class=\"navbar-toggle collapsed\" (click)=\"isCollapsed = !isCollapsed\"\r\n        [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"navbar\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a class=\"navbar-brand img-logo\" href=\"#\" (click)=\"updateMenu('home')\"><img src=\"assets/images/logo.png\"></a>\r\n    </div>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbar\" [ngbCollapse]=\"isCollapsed\">\r\n      <ul class=\"nav navbar-nav navbar-left\">\r\n        <li *ngIf=\"authService.loggedIn() && authService.hasPrevillage('home')\" [routerLinkActive]=\"['active']\"\r\n          [routerLinkActiveOptions]=\"{ exact : true }\" (click)=\"updateMenu('home')\"><a>Home</a></li>\r\n        <li *ngIf=\"authService.loggedIn() && authService.hasPrevillage('user')\" [routerLinkActive]=\"['active']\"\r\n          [routerLinkActiveOptions]=\"{ exact : true }\" (click)=\"updateMenu('user')\"><a>User</a></li>\r\n        <li *ngIf=\"authService.loggedIn() && authService.hasPrevillage('machine')\" [routerLinkActive]=\"['active']\"\r\n          [routerLinkActiveOptions]=\"{ exact : true }\" (click)=\"updateMenu('machine')\"><a>Machine</a></li>\r\n        <li *ngIf=\"authService.loggedIn() && authService.hasPrevillage('machine')\" [routerLinkActive]=\"['active']\"\r\n          [routerLinkActiveOptions]=\"{ exact : true }\" (click)=\"updateMenu('settings')\"><a>Settings</a></li>\r\n      </ul>\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li *ngIf=\"authService.loggedIn()\"><a href=\"#\">{{name}}</a></li>\r\n        <li *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>\r\n      </ul>\r\n    </div>\r\n    <!--/.nav-collapse -->\r\n  </div>\r\n</nav>\r\n\r\n<nav class=\"navbar navbar-color margin-bottom-0 hidden-md hidden-lg\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" *ngIf=\"authService.loggedIn()\" class=\"navbar-toggle collapsed\" (click)=\"isCollapsed = !isCollapsed\"\r\n        [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"navbar\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <span class=\"nav-name\">{{name}}</span>\r\n      <a class=\"navbar-brand img-logo\" href=\"#\"><img src=\"assets/images/logo.png\"></a>\r\n    </div>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbar\" [ngbCollapse]=\"isCollapsed\">\r\n      <ul class=\"nav navbar-nav navbar-left\">\r\n        <li *ngIf=\"authService.loggedIn() && authService.checkPrivilege('home')\" [routerLinkActive]=\"['active']\"\r\n          [routerLinkActiveOptions]=\"{ exact : true }\" (click)=\"isCollapsed = !isCollapsed\"><a [routerLink]=\"['/home']\">Home</a></li>\r\n        <li class=\"dropdown\">\r\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">User\r\n            <span class=\"caret\"></span></a>\r\n          <ul class=\"dropdown-menu\">\r\n            <li *ngIf=\"authService.loggedIn() && authService.checkPrivilege('user')\" [routerLinkActive]=\"['active']\"\r\n              [routerLinkActiveOptions]=\"{ exact : true }\" (click)=\"isCollapsed = !isCollapsed\"><a [routerLink]=\"['/user']\">User</a></li>\r\n            <li *ngIf=\"authService.loggedIn()  && authService.checkPrivilege('usergroup')\" [routerLinkActive]=\"['active']\"\r\n              [routerLinkActiveOptions]=\"{ exact : true }\" (click)=\"isCollapsed = !isCollapsed\"><a [routerLink]=\"['/usergroup']\">User\r\n                group</a></li>\r\n          </ul>\r\n        </li>\r\n        <li class=\"dropdown\">\r\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Machine\r\n            <span class=\"caret\"></span></a>\r\n          <ul class=\"dropdown-menu\">\r\n            <li *ngIf=\"authService.loggedIn()  && authService.checkPrivilege('area')\" [routerLinkActive]=\"['active']\"\r\n              [routerLinkActiveOptions]=\"{ exact : true }\" (click)=\"isCollapsed = !isCollapsed\"><a [routerLink]=\"['/area']\">Area</a></li>\r\n            <li *ngIf=\"authService.loggedIn()  && authService.checkPrivilege('line')\" [routerLinkActive]=\"['active']\"\r\n              [routerLinkActiveOptions]=\"{ exact : true }\" (click)=\"isCollapsed = !isCollapsed\"><a [routerLink]=\"['/line']\">Line</a></li>\r\n            <li *ngIf=\"authService.loggedIn()  && authService.checkPrivilege('reasons')\" [routerLinkActive]=\"['active']\"\r\n              [routerLinkActiveOptions]=\"{ exact : true }\" (click)=\"isCollapsed = !isCollapsed\"><a [routerLink]=\"['/reasons']\">Reasons</a></li>\r\n            <li *ngIf=\"authService.loggedIn()  && authService.checkPrivilege('machinegroup')\" [routerLinkActive]=\"['active']\"\r\n              [routerLinkActiveOptions]=\"{ exact : true }\" (click)=\"isCollapsed = !isCollapsed\"><a [routerLink]=\"['/machinegroup']\">Machine\r\n                group</a></li>\r\n            <li *ngIf=\"authService.loggedIn()  && authService.checkPrivilege('machine')\" [routerLinkActive]=\"['active']\"\r\n              [routerLinkActiveOptions]=\"{ exact : true }\" (click)=\"isCollapsed = !isCollapsed\"><a [routerLink]=\"['/machine']\">Machine</a></li>\r\n            <li *ngIf=\"authService.loggedIn()  && authService.checkPrivilege('document')\" [routerLinkActive]=\"['active']\"\r\n              [routerLinkActiveOptions]=\"{ exact : true }\" (click)=\"isCollapsed = !isCollapsed\"><a [routerLink]=\"['/document']\">Documents</a></li>\r\n            <li *ngIf=\"authService.loggedIn()  && authService.checkPrivilege('part')\" [routerLinkActive]=\"['active']\"\r\n              [routerLinkActiveOptions]=\"{ exact : true }\" (click)=\"isCollapsed = !isCollapsed\"><a [routerLink]=\"['/part']\">Part</a></li>\r\n            <li *ngIf=\"authService.loggedIn()  && authService.checkPrivilege('steps')\" [routerLinkActive]=\"['active']\"\r\n              [routerLinkActiveOptions]=\"{ exact : true }\" (click)=\"isCollapsed = !isCollapsed\"><a [routerLink]=\"['/steps']\">Step Group</a></li>\r\n            <li *ngIf=\"authService.loggedIn()  && authService.checkPrivilege('template')\" [routerLinkActive]=\"['active']\"\r\n              [routerLinkActiveOptions]=\"{ exact : true }\" (click)=\"isCollapsed = !isCollapsed\"><a [routerLink]=\"['/template']\">Template</a></li>\r\n          </ul>\r\n        </li>\r\n        <li class=\"dropdown\">\r\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Settings\r\n            <span class=\"caret\"></span></a>\r\n          <ul class=\"dropdown-menu\">\r\n            <li *ngIf=\"authService.loggedIn()  && authService.checkPrivilege('settings')\" [routerLinkActive]=\"['active']\"\r\n              [routerLinkActiveOptions]=\"{ exact : true }\" (click)=\"isCollapsed = !isCollapsed\"><a [routerLink]=\"['/settings']\">Settings</a></li>\r\n            <li *ngIf=\"authService.loggedIn()  && authService.checkPrivilege('import')\" [routerLinkActive]=\"['active']\"\r\n              [routerLinkActiveOptions]=\"{ exact : true }\" (click)=\"isCollapsed = !isCollapsed\"><a [routerLink]=\"['/import']\">Import</a></li>\r\n          </ul>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>\r\n      </ul>\r\n    </div>\r\n    <!--/.nav-collapse -->\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/components/common/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/common/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_common_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/common/auth.service */ "./src/app/services/common/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.isCollapsed = true;
        //this.updateMenu("home");
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        console.log("Logout");
        this.router.navigate(['/']);
        this.isCollapsed = !this.isCollapsed;
        return false;
    };
    HeaderComponent.prototype.updateMenu = function (route) {
        var menu = this.authService.getSideMenuPage(route);
        this.router.navigate([menu.name]);
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/common/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/common/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_services_common_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/common/label/label.component.css":
/*!*************************************************************!*\
  !*** ./src/app/components/common/label/label.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tbW9uL2xhYmVsL2xhYmVsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/common/label/label.component.html":
/*!**************************************************************!*\
  !*** ./src/app/components/common/label/label.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  label works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/common/label/label.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/common/label/label.component.ts ***!
  \************************************************************/
/*! exports provided: LabelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelComponent", function() { return LabelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LabelComponent = /** @class */ (function () {
    function LabelComponent() {
    }
    LabelComponent.prototype.ngOnInit = function () {
    };
    LabelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-label',
            template: __webpack_require__(/*! ./label.component.html */ "./src/app/components/common/label/label.component.html"),
            styles: [__webpack_require__(/*! ./label.component.css */ "./src/app/components/common/label/label.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LabelComponent);
    return LabelComponent;
}());



/***/ }),

/***/ "./src/app/components/common/sidemenu/sidemenu.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/common/sidemenu/sidemenu.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".side-navbar{\r\n    padding: 0;\r\n    background-color: #333836;\r\n    color: #FFF;\r\n    position: fixed;\r\n    width: 16.66666667%;\r\n    height: 100%;\r\n}\r\n.side-navbar .list-group-item{\r\n    background-color: #d3d3d3!important;\r\n    margin-bottom: 5px;\r\n    border-radius: 0;\r\n    cursor: pointer;\r\n    color: black!important;\r\n    text-decoration: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21tb24vc2lkZW1lbnUvc2lkZW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVix5QkFBeUI7SUFDekIsV0FBVztJQUNYLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksbUNBQW1DO0lBQ25DLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbW1vbi9zaWRlbWVudS9zaWRlbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGUtbmF2YmFye1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM4MzY7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxNi42NjY2NjY2NyU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLnNpZGUtbmF2YmFyIC5saXN0LWdyb3VwLWl0ZW17XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNkM2QzIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogYmxhY2shaW1wb3J0YW50O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/common/sidemenu/sidemenu.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/common/sidemenu/sidemenu.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"side-navbar\">\r\n    <ul class=\"list-group\" *ngIf=\"authService.isRouteDisplay('home')\">\r\n        <li *ngIf=\"authService.loggedIn()  && authService.checkPrivilege('home')\" [routerLinkActive]=\"['active']\"\r\n            [routerLinkActiveOptions]=\"{ exact : true }\" class=\"list-group-item\" [routerLink]=\"['/home']\">Regular Maintenance</li>\r\n    </ul>\r\n    <ul class=\"list-group\" *ngIf=\"authService.isRouteDisplay('machine')\">\r\n        <li *ngIf=\"authService.loggedIn()  && authService.checkPrivilege('machine')\" [routerLinkActive]=\"['active']\"\r\n            [routerLinkActiveOptions]=\"{ exact : true }\" class=\"list-group-item\" [routerLink]=\"['/machine']\">Machine</li>\r\n        <li *ngIf=\"authService.loggedIn()  && authService.checkPrivilege('machinegroup')\" [routerLinkActive]=\"['active']\"\r\n            [routerLinkActiveOptions]=\"{ exact : true }\" class=\"list-group-item\" [routerLink]=\"['/machinegroup']\">Machine\r\n            group</li>\r\n        <li *ngIf=\"authService.loggedIn()  && authService.checkPrivilege('area')\" [routerLinkActive]=\"['active']\"\r\n            [routerLinkActiveOptions]=\"{ exact : true }\" class=\"list-group-item\" [routerLink]=\"['/area']\">Area</li>\r\n        <li *ngIf=\"authService.loggedIn()  && authService.checkPrivilege('line')\" [routerLinkActive]=\"['active']\"\r\n            [routerLinkActiveOptions]=\"{ exact : true }\" class=\"list-group-item\" [routerLink]=\"['/line']\">Line</li>\r\n        <li *ngIf=\"authService.loggedIn()  && authService.checkPrivilege('reasons')\" [routerLinkActive]=\"['active']\"\r\n            [routerLinkActiveOptions]=\"{ exact : true }\" class=\"list-group-item\" [routerLink]=\"['/reasons']\">Reasons</li>\r\n        <li *ngIf=\"authService.loggedIn()  && authService.checkPrivilege('document')\" [routerLinkActive]=\"['active']\"\r\n            [routerLinkActiveOptions]=\"{ exact : true }\" class=\"list-group-item\" [routerLink]=\"['/document']\">Documents</li>\r\n        <li *ngIf=\"authService.loggedIn()  && authService.checkPrivilege('part')\" [routerLinkActive]=\"['active']\"\r\n            [routerLinkActiveOptions]=\"{ exact : true }\" class=\"list-group-item\" [routerLink]=\"['/part']\">Part</li>\r\n        <li *ngIf=\"authService.loggedIn()  && authService.checkPrivilege('steps')\" [routerLinkActive]=\"['active']\"\r\n            [routerLinkActiveOptions]=\"{ exact : true }\" class=\"list-group-item\" [routerLink]=\"['/steps']\">Step Group</li>\r\n        <li *ngIf=\"authService.loggedIn()  && authService.checkPrivilege('template')\" [routerLinkActive]=\"['active']\"\r\n            [routerLinkActiveOptions]=\"{ exact : true }\" class=\"list-group-item\" [routerLink]=\"['/template']\">Template</li>\r\n    </ul>\r\n    <ul class=\"list-group\" *ngIf=\"authService.isRouteDisplay('user')\">\r\n        <li *ngIf=\"authService.loggedIn() && authService.checkPrivilege('user')\" [routerLinkActive]=\"['active']\"\r\n            [routerLinkActiveOptions]=\"{ exact : true }\" class=\"list-group-item\" [routerLink]=\"['/user']\">User</li>\r\n        <li *ngIf=\"authService.loggedIn()  && authService.checkPrivilege('usergroup')\" [routerLinkActive]=\"['active']\"\r\n            [routerLinkActiveOptions]=\"{ exact : true }\" class=\"list-group-item\" [routerLink]=\"['/usergroup']\">User\r\n            group</li>\r\n    </ul>\r\n    <ul class=\"list-group\" *ngIf=\"authService.isRouteDisplay('settings')\">\r\n        <li *ngIf=\"authService.loggedIn() && authService.checkPrivilege('settings')\" [routerLinkActive]=\"['active']\"\r\n            [routerLinkActiveOptions]=\"{ exact : true }\" class=\"list-group-item\" [routerLink]=\"['/settings']\">Settings</li>\r\n        <li *ngIf=\"authService.loggedIn()  && authService.checkPrivilege('import')\" [routerLinkActive]=\"['active']\"\r\n            [routerLinkActiveOptions]=\"{ exact : true }\" class=\"list-group-item\" [routerLink]=\"['/import']\">Import</li>\r\n    </ul>\r\n</div>"

/***/ }),

/***/ "./src/app/components/common/sidemenu/sidemenu.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/common/sidemenu/sidemenu.component.ts ***!
  \******************************************************************/
/*! exports provided: SidemenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidemenuComponent", function() { return SidemenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_common_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/common/auth.service */ "./src/app/services/common/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidemenuComponent = /** @class */ (function () {
    function SidemenuComponent(authService) {
        this.authService = authService;
    }
    SidemenuComponent.prototype.ngOnInit = function () {
    };
    SidemenuComponent.prototype.onResize = function (event) {
        this.resizeSideMenu();
    };
    SidemenuComponent.prototype.ngAfterViewInit = function () {
        this.resizeSideMenu();
    };
    SidemenuComponent.prototype.resizeSideMenu = function () {
        this.headerHeight = document.getElementsByClassName("navbar-color")[0]["offsetHeight"];
        this.windowHeight = window.innerHeight;
        document.getElementsByClassName("side-navbar")[0]["style"]["height"] = (this.windowHeight - this.headerHeight) + "px";
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SidemenuComponent.prototype, "onResize", null);
    SidemenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidemenu',
            template: __webpack_require__(/*! ./sidemenu.component.html */ "./src/app/components/common/sidemenu/sidemenu.component.html"),
            styles: [__webpack_require__(/*! ./sidemenu.component.css */ "./src/app/components/common/sidemenu/sidemenu.component.css")]
        }),
        __metadata("design:paramtypes", [_services_common_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], SidemenuComponent);
    return SidemenuComponent;
}());



/***/ }),

/***/ "./src/app/components/common/tablelist/tablelist.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/components/common/tablelist/tablelist.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tbW9uL3RhYmxlbGlzdC90YWJsZWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/common/tablelist/tablelist.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/common/tablelist/tablelist.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  tablelist works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/common/tablelist/tablelist.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/common/tablelist/tablelist.component.ts ***!
  \********************************************************************/
/*! exports provided: TablelistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablelistComponent", function() { return TablelistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TablelistComponent = /** @class */ (function () {
    function TablelistComponent() {
    }
    TablelistComponent.prototype.ngOnInit = function () {
    };
    TablelistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tablelist',
            template: __webpack_require__(/*! ./tablelist.component.html */ "./src/app/components/common/tablelist/tablelist.component.html"),
            styles: [__webpack_require__(/*! ./tablelist.component.css */ "./src/app/components/common/tablelist/tablelist.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TablelistComponent);
    return TablelistComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <h2 class=\"pull-left\">Regular Maintenance</h2>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"form-group\">\r\n      <label>Choose Machine</label>\r\n      <select class=\"form-control\" [(ngModel)]=\"rMaintenance.machineId\" name=\"machineId\" (change)=\"machineNameChange($event)\">\r\n        <option value=\"\">--Select Machine--</option>\r\n        <option *ngFor=\"let c of machines\" value=\"{{c._id}}\">{{c.name}}</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"form-group\">\r\n      <label>Schedule</label>\r\n      <select class=\"form-control\" [(ngModel)]=\"rMaintenance.schedule\" name=\"schedule\">\r\n        <option value=\"\">--Select Schedule--</option>\r\n        <option value=\"week\">Every week</option>\r\n        <option value=\"month\">Every month</option>\r\n        <option value=\"year\">Every year</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-2\">\r\n    <button class=\"btn btn-primary form-control\" type=\"button\" (click)=\"update()\">Save</button>\r\n  </div>\r\n  <div class=\"col-sm-2\">\r\n    <button class=\"btn btn-primary form-control\" type=\"button\" (click)=\"cancel()\">Cancel</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_common_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/common/auth.service */ "./src/app/services/common/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_machine_machine_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/machine/machine.service */ "./src/app/services/machine/machine.service.ts");
/* harmony import */ var _services_home_maintenance_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/home/maintenance.service */ "./src/app/services/home/maintenance.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomeComponent = /** @class */ (function () {
    function HomeComponent(authService, router, machineService, maintenanceService, toasterService) {
        var _this = this;
        this.authService = authService;
        this.router = router;
        this.machineService = machineService;
        this.maintenanceService = maintenanceService;
        this.toasterService = toasterService;
        this.rMaintenance = {
            _id: "0",
            machineName: "",
            machineId: "",
            schedule: ""
        };
        var menu = this.authService.getSideMenuPage("home");
        this.router.navigate([menu.name]);
        this.machineService.getMachines().subscribe(function (data) {
            _this.machines = data;
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.update = function () {
        var _this = this;
        this.rMaintenance.machineName = this.machines.filter(function (el) {
            return el._id === _this.rMaintenance.machineId;
        })[0].name;
        this.maintenanceService.updateMaintenance(this.rMaintenance).subscribe(function (data) {
            var toast = {
                type: 'success',
                title: 'Success',
                body: 'Regular Maintenance updated successfully.',
                showCloseButton: true
            };
            _this.toasterService.pop(toast);
        });
    };
    HomeComponent.prototype.machineNameChange = function (event) {
        var _this = this;
        console.log(event.target.value);
        this.maintenanceService.getRMaintenanceByMachineId(event.target.value).subscribe(function (data) {
            console.log(data);
            if (data["length"] > 0) {
                _this.rMaintenance._id = data[0]._id;
                _this.rMaintenance.schedule = data[0].schedule;
            }
            else {
                _this.rMaintenance._id = "0";
                _this.rMaintenance.schedule = "";
            }
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_common_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_machine_machine_service__WEBPACK_IMPORTED_MODULE_3__["MachineService"],
            _services_home_maintenance_service__WEBPACK_IMPORTED_MODULE_4__["MaintenanceService"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_5__["ToasterService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-4 col-sm-offset-4\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <h2 class=\"page-header text-center\"><i class=\"fa fa-lock\" aria-hidden=\"true\"></i> Login</h2>\r\n      <form (submit)=\"onLoginSubmit()\">\r\n        <div class=\"form-group\">\r\n          <label>Username</label>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label>Password</label>\r\n          <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-4 col-sm-offset-4\">\r\n            <input type=\"submit\" class=\"btn btn-primary form-control\" value=\"Login\">\r\n          </div>\r\n        </div>\r\n      </form>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4 col-sm-offset-4  margin-top-20px\">\r\n          <input type=\"submit\" class=\"btn btn-primary form-control\" (click)=\"openModal(template)\" value=\"Forgot Password\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<ng-template #template>\r\n  <div class=\"modal-body\">\r\n    <div class=\"modal-header\">\r\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"closeModal()\"><span aria-hidden=\"true\">&times;</span></button>\r\n      <h4 class=\"modal-title\" id=\"myModalLabel\">Forgot Password</h4>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label>Username</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"fusername\" name=\"fusername\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"closeModal()\">Close</button>\r\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"sendMail()\">Send</button>\r\n    </div>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_common_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/common/auth.service */ "./src/app/services/common/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, toasterService, modalService) {
        this.authService = authService;
        this.router = router;
        this.toasterService = toasterService;
        this.modalService = modalService;
        this.username = "";
        this.password = "";
        this.fusername = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template, { class: 'modal-md' });
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        if (this.username !== "" && this.password !== "") {
            var user = {
                username: this.username,
                password: this.password
            };
            this.authService.authenticateUser(user).subscribe(function (data) {
                console.log(data);
                if (data["success"]) {
                    _this.authService.storeUserData(data["token"], data["user"], data["privillages"]);
                    console.log("Logged In");
                    _this.router.navigate(['home']);
                }
                else {
                    var toast = {
                        type: 'error',
                        title: 'Error',
                        body: 'Invalid Username/Password.',
                        showCloseButton: true
                    };
                    _this.toasterService.pop(toast);
                    console.log("Login falied.");
                    _this.router.navigate(['/']);
                }
            });
        }
        else {
            var toast = {
                type: 'error',
                title: 'Error',
                body: 'Please fill the all the details.',
                showCloseButton: true
            };
            this.toasterService.pop(toast);
        }
    };
    LoginComponent.prototype.sendMail = function () {
        var _this = this;
        this.authService.forgotPassword(this.fusername).subscribe(function (data) {
            var toast = {
                type: 'success',
                title: 'Success',
                body: 'An email has been sent. please check your email for temporary password.',
                showCloseButton: true
            };
            _this.toasterService.pop(toast);
            _this.modalRef.hide();
        });
    };
    LoginComponent.prototype.closeModal = function () {
        this.modalRef.hide();
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_common_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/machine/area/area.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/machine/area/area.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFjaGluZS9hcmVhL2FyZWEuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/machine/area/area.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/machine/area/area.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"isList\">\r\n  <div class=\"col-sm-12\">\r\n    <h2 class=\"pull-left\">Area List</h2>\r\n    <button class=\"btn btn-primary pull-right margin-top-20px\" type=\"button\" (click)=\"new()\">New</button>\r\n  </div>\r\n  <div class=\"col-sm-3\" *ngFor=\"let area of areas\">\r\n    <div class=\"border-style\" (click)=\"populate(area)\">\r\n      <p>Name : {{area.name}}</p>\r\n      <p>Description: {{area.description}}</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"!isList\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <h2 class=\"pull-left\">Area</h2>\r\n      <button class=\"btn btn-primary pull-right margin-top-20px\" type=\"button\" (click)=\"back()\">Back to List</button>\r\n    </div>\r\n  </div>\r\n  <div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n      <h3 class=\"panel-title\">Area Details</h3>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n      <form>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-4\">\r\n            <div class=\"form-group\">\r\n              <label>Name</label>\r\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"area.name\" name=\"name\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-4\">\r\n            <div class=\"form-group\">\r\n              <label>Description</label>\r\n              <textarea class=\"form-control\" rows=\"3\" [(ngModel)]=\"area.description\" name=\"description\"></textarea>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <div class=\"panel panel-default\">\r\n      <div class=\"panel-heading\">\r\n        <h3 class=\"panel-title\">Add Lines</h3>\r\n      </div>\r\n      <div class=\"panel-body\">\r\n          <form>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-4\">\r\n                  <div class=\"form-group\">\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"search\" name=\"search\" (input)=\"onSearchChange($event.target.value)\">\r\n                    <div *ngIf=\"showResults\" id=\"txtSearch\" class=\"auto-complete-style\">\r\n                      <p *ngFor=\"let result of searchResults\" (click)=\"selectedItem(result)\" class=\"border-bottom\">{{result.name}}</p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-2\">\r\n                  <div class=\"form-group\">\r\n                    <input type=\"button\" class=\"form-control btn btn-primary\" (click)=\"addLineToArea(search)\" value=\"Add\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </form>\r\n            <div>\r\n              <table class=\"table\">\r\n                <tr>\r\n                  <th>Line Name</th>\r\n                  <th>Delete</th>\r\n                </tr>\r\n                <tr *ngFor=\"let line of area.lines\">\r\n                    <td>{{line.name}}</td>\r\n                    <td><button type=\"button\" (click)=\"deleteLine(line)\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></button></td>\r\n                </tr>\r\n              </table>\r\n            </div>\r\n      </div>\r\n    </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-2\" *ngIf=\"isNew\">\r\n      <button class=\"btn btn-primary form-control\" type=\"button\" (click)=\"save()\">Save</button>\r\n    </div>\r\n    <div class=\"col-sm-2\" *ngIf=\"!isNew\">\r\n      <button class=\"btn btn-primary form-control\" type=\"button\" (click)=\"update()\">Update</button>\r\n    </div>\r\n    <div class=\"col-sm-2\" *ngIf=\"!isNew\">\r\n      <button class=\"btn btn-primary form-control\" type=\"button\" (click)=\"delete()\">Delete</button>\r\n    </div>\r\n    <div class=\"col-sm-2\" *ngIf=\"isNew\">\r\n      <button class=\"btn btn-primary form-control\" type=\"button\" (click)=\"cancel()\">Cancel</button>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/machine/area/area.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/machine/area/area.component.ts ***!
  \***********************************************************/
/*! exports provided: AreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaComponent", function() { return AreaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_machine_area_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/machine/area.service */ "./src/app/services/machine/area.service.ts");
/* harmony import */ var _services_machine_line_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/machine/line.service */ "./src/app/services/machine/line.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AreaComponent = /** @class */ (function () {
    function AreaComponent(areaService, lineService, toasterService) {
        this.areaService = areaService;
        this.lineService = lineService;
        this.toasterService = toasterService;
        this.area = {
            "name": "",
            "description": "",
            "lines": []
        };
        this.isList = true;
        this.isNew = true;
        this.getAreas();
    }
    AreaComponent.prototype.ngOnInit = function () {
    };
    AreaComponent.prototype.new = function () {
        this.isList = false;
        this.isNew = true;
        this.area = {
            "name": "",
            "description": "",
            "lines": []
        };
    };
    AreaComponent.prototype.back = function () {
        this.isList = true;
    };
    AreaComponent.prototype.populate = function (area) {
        this.isList = false;
        this.isNew = false;
        this.area = area;
    };
    AreaComponent.prototype.onSearchChange = function (value) {
        var _this = this;
        if (value.length > 2) {
            this.lineService.getLineName(value).subscribe(function (data) {
                _this.showResults = true;
                _this.searchResults = data;
                console.log(data);
            });
        }
    };
    AreaComponent.prototype.selectedItem = function (item) {
        this.search = item.name;
        this.showResults = false;
    };
    AreaComponent.prototype.addLineToArea = function (searchTerm) {
        var line = this.searchResults.filter(function (el) {
            return el.name === searchTerm;
        })[0];
        this.search = "";
        this.area.lines.push(line);
    };
    AreaComponent.prototype.deleteLine = function (line) {
        this.area.lines = this.area.lines.filter(function (el) {
            return el._id !== line._id;
        });
    };
    AreaComponent.prototype.getAreas = function () {
        var _this = this;
        this.areaService.getAreas().subscribe(function (data) {
            _this.areas = data;
        });
    };
    AreaComponent.prototype.save = function () {
        var _this = this;
        if (this.area.name !== "" && this.area.description !== "") {
            this.areaService.addArea(this.area).subscribe(function (data) {
                var toast = {
                    type: 'success',
                    title: 'Success',
                    body: 'Area saved successfully.',
                    showCloseButton: true
                };
                _this.toasterService.pop(toast);
                _this.isList = true;
                _this.getAreas();
            });
        }
        else {
            var toast = {
                type: 'error',
                title: 'Error',
                body: 'Please fill the all the details.',
                showCloseButton: true
            };
            this.toasterService.pop(toast);
        }
    };
    AreaComponent.prototype.delete = function () {
        var _this = this;
        this.areaService.deleteArea(this.area["_id"]).subscribe(function (data) {
            var toast = {
                type: 'success',
                title: 'Success',
                body: 'Area deleted successfully.',
                showCloseButton: true
            };
            _this.toasterService.pop(toast);
            _this.isList = true;
            _this.getAreas();
        });
    };
    AreaComponent.prototype.update = function () {
        var _this = this;
        this.areaService.updateArea(this.area).subscribe(function (data) {
            var toast = {
                type: 'success',
                title: 'Success',
                body: 'Area updated successfully.',
                showCloseButton: true
            };
            _this.toasterService.pop(toast);
            _this.isList = true;
            _this.getAreas();
        });
    };
    AreaComponent.prototype.cancel = function () {
        this.isList = true;
    };
    AreaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-area',
            template: __webpack_require__(/*! ./area.component.html */ "./src/app/components/machine/area/area.component.html"),
            styles: [__webpack_require__(/*! ./area.component.css */ "./src/app/components/machine/area/area.component.css")]
        }),
        __metadata("design:paramtypes", [_services_machine_area_service__WEBPACK_IMPORTED_MODULE_1__["AreaService"],
            _services_machine_line_service__WEBPACK_IMPORTED_MODULE_2__["LineService"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]])
    ], AreaComponent);
    return AreaComponent;
}());



/***/ }),

/***/ "./src/app/components/machine/document/document.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/machine/document/document.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFjaGluZS9kb2N1bWVudC9kb2N1bWVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/machine/document/document.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/machine/document/document.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"isList\">\r\n  <div class=\"col-sm-12\">\r\n    <h2 class=\"pull-left\">Document List</h2>\r\n    <button class=\"btn btn-primary pull-right margin-top-20px\" type=\"button\" (click)=\"new()\">New</button>\r\n  </div>\r\n  <div class=\"col-sm-3\" *ngFor=\"let pdocument of documents\">\r\n    <div class=\"border-style\" (click)=\"populate(pdocument)\">\r\n      <p>Name : {{pdocument.name}}</p>\r\n      <p>Description: {{pdocument.description}}</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"!isList\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <h2 class=\"pull-left\">Document</h2>\r\n      <button class=\"btn btn-primary pull-right margin-top-20px\" type=\"button\" (click)=\"back()\">Back to List</button>\r\n    </div>\r\n  </div>\r\n  <form>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group\">\r\n          <label>Name</label>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"document.name\" name=\"name\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group\">\r\n          <label>Description</label>\r\n          <textarea class=\"form-control\" rows=\"3\" [(ngModel)]=\"document.description\" name=\"description\"></textarea>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-8\">\r\n        <div class=\"form-group\">\r\n          <label>Upload file</label>\r\n          <div id=\"fileSelector\">\r\n            <input type=\"file\" name=\"fileUplaod\" id=\"fileUpload\" ng2FileSelect [uploader]=\"uploader\" (click)=\"fileUpload()\">\r\n          </div>\r\n          <div *ngIf=\"!isFileUploadDone\">\r\n            <div class=\"row uploadList\" *ngFor=\"let item of uploader.queue\">\r\n              <div class=\"col-sm-4\">{{item.file.name}}</div>\r\n              <div class=\"col-sm-4\">\r\n                <div class=\"progress\">\r\n                  <div class=\"progress-bar bg-success\" [ngStyle]=\"{'width':item.progress+'%'}\"></div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-4\">\r\n                <button type=\"button\" class=\"btn btn-dark\" (click)=\"item.upload()\">Upload</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"files.length > 0\">\r\n      <div class=\"col-sm-8\">\r\n        <div class=\"row uploadList\" *ngFor=\"let file of files\">\r\n          <div class=\"col-sm-4\">{{file}}</div>\r\n          <div class=\"col-sm-4 col-offset-sm-4\">\r\n            <button type=\"button\" class=\"btn btn-dark\" (click)=\"deleteFile(file)\">Delete</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-2\" *ngIf=\"isNew\">\r\n        <button class=\"btn btn-primary form-control\" type=\"button\" (click)=\"save()\">Save</button>\r\n      </div>\r\n      <div class=\"col-sm-2\" *ngIf=\"!isNew\">\r\n        <button class=\"btn btn-primary form-control\" type=\"button\" (click)=\"update()\">Update</button>\r\n      </div>\r\n      <div class=\"col-sm-2\" *ngIf=\"!isNew\">\r\n        <button class=\"btn btn-primary form-control\" type=\"button\" (click)=\"delete()\">Delete</button>\r\n      </div>\r\n      <div class=\"col-sm-2\" *ngIf=\"isNew\">\r\n        <button class=\"btn btn-primary form-control\" type=\"button\" (click)=\"cancel()\">Cancel</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/components/machine/document/document.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/machine/document/document.component.ts ***!
  \*******************************************************************/
/*! exports provided: DocumentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentComponent", function() { return DocumentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_common_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/common/auth.service */ "./src/app/services/common/auth.service.ts");
/* harmony import */ var _services_machine_document_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/machine/document.service */ "./src/app/services/machine/document.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DocumentComponent = /** @class */ (function () {
    function DocumentComponent(authService, documentService, toasterService) {
        var _this = this;
        this.authService = authService;
        this.documentService = documentService;
        this.toasterService = toasterService;
        this.document = {
            "name": "",
            "description": "",
            "originalFileName": "",
            "uploadFileName": ""
        };
        this.files = [];
        this.isFileUploadDone = false;
        this.isList = true;
        this.isNew = true;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploader"]({ url: this.authService.prepEndpoint('document/upload') });
        this.uploader.onBeforeUploadItem = function (item) {
            item.withCredentials = false;
        };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            _this.isFileUploadDone = true;
            var res = JSON.parse(response);
            _this.files.push(res.originalname);
            _this.document.uploadFileName = res.uploadName;
            _this.document.originalFileName = res.originalname;
        };
        this.getDocuments();
    }
    DocumentComponent.prototype.ngOnInit = function () {
    };
    DocumentComponent.prototype.new = function () {
        this.isList = false;
        this.isNew = true;
        this.document = {
            "name": "",
            "description": "",
            "originalFileName": "",
            "uploadFileName": ""
        };
        this.files = [];
    };
    DocumentComponent.prototype.back = function () {
        this.isList = true;
    };
    DocumentComponent.prototype.populate = function (document) {
        this.isList = false;
        this.isNew = false;
        this.document = document;
        this.files = [];
        if (document.originalFileName !== "" && document.uploadFileName != "") {
            this.files.push(document.originalFileName);
        }
    };
    DocumentComponent.prototype.fileUpload = function () {
        this.uploader.queue.pop();
        this.isFileUploadDone = false;
    };
    DocumentComponent.prototype.deleteFile = function (file) {
        var index = this.files.indexOf(file);
        if (index !== -1) {
            this.files.splice(index, 1);
        }
        this.document.originalFileName = "";
        this.document.uploadFileName = "";
    };
    DocumentComponent.prototype.getDocuments = function () {
        var _this = this;
        this.documentService.getDocuments().subscribe(function (data) {
            _this.documents = data;
        });
    };
    DocumentComponent.prototype.save = function () {
        var _this = this;
        if (this.document.name !== "" && this.document.description !== "") {
            this.documentService.addDocument(this.document).subscribe(function (data) {
                var toast = {
                    type: 'success',
                    title: 'Success',
                    body: 'Document saved successfully.',
                    showCloseButton: true
                };
                _this.toasterService.pop(toast);
                _this.isList = true;
                _this.getDocuments();
            });
        }
        else {
            var toast = {
                type: 'error',
                title: 'Error',
                body: 'Please fill the all the details.',
                showCloseButton: true
            };
            this.toasterService.pop(toast);
        }
    };
    DocumentComponent.prototype.delete = function () {
        var _this = this;
        this.documentService.deleteDocument(this.document["_id"]).subscribe(function (data) {
            var toast = {
                type: 'success',
                title: 'Success',
                body: 'Document deleted successfully.',
                showCloseButton: true
            };
            _this.toasterService.pop(toast);
            _this.isList = true;
            _this.getDocuments();
        });
    };
    DocumentComponent.prototype.update = function () {
        var _this = this;
        this.documentService.updateDocument(this.document).subscribe(function (data) {
            var toast = {
                type: 'success',
                title: 'Success',
                body: 'Document updated successfully.',
                showCloseButton: true
            };
            _this.toasterService.pop(toast);
            _this.isList = true;
            _this.getDocuments();
        });
    };
    DocumentComponent.prototype.cancel = function () {
        this.isList = true;
    };
    DocumentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-document',
            template: __webpack_require__(/*! ./document.component.html */ "./src/app/components/machine/document/document.component.html"),
            styles: [__webpack_require__(/*! ./document.component.css */ "./src/app/components/machine/document/document.component.css")]
        }),
        __metadata("design:paramtypes", [_services_common_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_machine_document_service__WEBPACK_IMPORTED_MODULE_3__["DocumentService"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_4__["ToasterService"]])
    ], DocumentComponent);
    return DocumentComponent;
}());



/***/ }),

/***/ "./src/app/components/machine/line/line.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/machine/line/line.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFjaGluZS9saW5lL2xpbmUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/machine/line/line.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/machine/line/line.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"isList\">\r\n    <div class=\"col-sm-12\">\r\n      <h2 class=\"pull-left\">Line List</h2>\r\n      <button class=\"btn btn-primary pull-right margin-top-20px\" type=\"button\" (click)=\"new()\">New</button>\r\n    </div>\r\n    <div class=\"col-sm-3\" *ngFor=\"let line of lines\">\r\n      <div class=\"border-style\" (click)=\"populate(line)\">\r\n        <p>Name : {{line.name}}</p>\r\n        <p>Description: {{line.description}}</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"!isList\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <h2 class=\"pull-left\">Line</h2>\r\n        <button class=\"btn btn-primary pull-right margin-top-20px\" type=\"button\" (click)=\"back()\">Back to List</button>\r\n      </div>\r\n    </div>\r\n    <form>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"form-group\">\r\n            <label>Name</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"line.name\" name=\"name\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"form-group\">\r\n            <label>Description</label>\r\n            <textarea class=\"form-control\" rows=\"3\" [(ngModel)]=\"line.description\" name=\"description\"></textarea>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-2\" *ngIf=\"isNew\">\r\n          <button class=\"btn btn-primary form-control\" type=\"button\" (click)=\"save()\">Save</button>\r\n        </div>\r\n        <div class=\"col-sm-2\" *ngIf=\"!isNew\">\r\n          <button class=\"btn btn-primary form-control\" type=\"button\" (click)=\"update()\">Update</button>\r\n        </div>\r\n        <div class=\"col-sm-2\" *ngIf=\"!isNew\">\r\n          <button class=\"btn btn-primary form-control\" type=\"button\" (click)=\"delete()\">Delete</button>\r\n        </div>\r\n        <div class=\"col-sm-2\" *ngIf=\"isNew\">\r\n          <button class=\"btn btn-primary form-control\" type=\"button\" (click)=\"cancel()\">Cancel</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>"

/***/ }),

/***/ "./src/app/components/machine/line/line.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/machine/line/line.component.ts ***!
  \***********************************************************/
/*! exports provided: LineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineComponent", function() { return LineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_machine_line_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/machine/line.service */ "./src/app/services/machine/line.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LineComponent = /** @class */ (function () {
    function LineComponent(lineService, toasterService) {
        this.lineService = lineService;
        this.toasterService = toasterService;
        this.line = {
            "name": "",
            "description": ""
        };
        this.isList = true;
        this.isNew = true;
        this.getLines();
    }
    LineComponent.prototype.ngOnInit = function () {
    };
    LineComponent.prototype.new = function () {
        this.isList = false;
        this.isNew = true;
        this.line = {
            "name": "",
            "description": ""
        };
    };
    LineComponent.prototype.back = function () {
        this.isList = true;
    };
    LineComponent.prototype.populate = function (line) {
        this.isList = false;
        this.isNew = false;
        this.line = line;
    };
    LineComponent.prototype.getLines = function () {
        var _this = this;
        this.lineService.getLines().subscribe(function (data) {
            _this.lines = data;
        });
    };
    LineComponent.prototype.save = function () {
        var _this = this;
        if (this.line.name !== "" && this.line.description !== "") {
            this.lineService.addLine(this.line).subscribe(function (data) {
                var toast = {
                    type: 'success',
                    title: 'Success',
                    body: 'Line saved successfully.',
                    showCloseButton: true
                };
                _this.toasterService.pop(toast);
                _this.isList = true;
                _this.getLines();
            });
        }
        else {
            var toast = {
                type: 'error',
                title: 'Error',
                body: 'Please fill the all the details.',
                showCloseButton: true
            };
            this.toasterService.pop(toast);
        }
    };
    LineComponent.prototype.delete = function () {
        var _this = this;
        this.lineService.deleteLine(this.line["_id"]).subscribe(function (data) {
            var toast = {
                type: 'success',
                title: 'Success',
                body: 'Line deleted successfully.',
                showCloseButton: true
            };
            _this.toasterService.pop(toast);
            _this.isList = true;
            _this.getLines();
        });
    };
    LineComponent.prototype.update = function () {
        var _this = this;
        this.lineService.updateLine(this.line).subscribe(function (data) {
            var toast = {
                type: 'success',
                title: 'Success',
                body: 'Line updated successfully.',
                showCloseButton: true
            };
            _this.toasterService.pop(toast);
            _this.isList = true;
            _this.getLines();
        });
    };
    LineComponent.prototype.cancel = function () {
        this.isList = true;
    };
    LineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-line',
            template: __webpack_require__(/*! ./line.component.html */ "./src/app/components/machine/line/line.component.html"),
            styles: [__webpack_require__(/*! ./line.component.css */ "./src/app/components/machine/line/line.component.css")]
        }),
        __metadata("design:paramtypes", [_services_machine_line_service__WEBPACK_IMPORTED_MODULE_1__["LineService"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_2__["ToasterService"]])
    ], LineComponent);
    return LineComponent;
}());



/***/ }),

/***/ "./src/app/components/machine/machine/machine.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/machine/machine/machine.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFjaGluZS9tYWNoaW5lL21hY2hpbmUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/machine/machine/machine.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/machine/machine/machine.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"isList\">\r\n  <div class=\"col-sm-12\">\r\n    <h2 class=\"pull-left\">Machine List</h2>\r\n    <button class=\"btn btn-primary pull-right margin-top-20px\" type=\"button\" (click)=\"new()\">New</button>\r\n  </div>\r\n  <div class=\"col-sm-3\" *ngFor=\"let machine of machines\">\r\n    <div class=\"border-style\" (click)=\"populate(machine)\">\r\n      <p>Name : {{machine.name}}</p>\r\n      <p>Area: {{machine.area.name}}</p>\r\n      <p>Line: {{machine.line.name}}</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"!isList\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <h2 class=\"pull-left\">Machine</h2>\r\n      <button class=\"btn btn-primary pull-right margin-top-20px\" type=\"button\" (click)=\"back()\">Back to List</button>\r\n    </div>\r\n  </div>\r\n  <form>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group\">\r\n          <label>Name</label>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"machine.name\" name=\"name\">\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group\">\r\n          <label>Machine group</label>\r\n          <select class=\"form-control\" [(ngModel)]=\"machine.machinegroup\" name=\"machinegroup\">\r\n              <option value=\"\">--Select Machine Group--</option>\r\n              <option *ngFor=\"let machinegroup of machinegroupList\" value=\"{{machinegroup._id}}\">{{machinegroup.name}}</option>\r\n            </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group\">\r\n          <label>Company Name</label>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"machine.company\" name=\"company\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group\">\r\n          <label>Date Of Install</label>\r\n          <input type=\"text\" placeholder=\"Datepicker\" class=\"form-control\" [bsConfig]=\"{ dateInputFormat: 'MM-DD-YYYY', containerClass: 'theme-red' }\"\r\n            bsDatepicker  [(ngModel)]=\"machine.dateOfInstall\" name=\"dateOfInstall\">\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group\">\r\n          <label>Area</label>\r\n          <select class=\"form-control\" [(ngModel)]=\"machine.area._id\" name=\"area\">\r\n            <option value=\"\">--Select Area--</option>\r\n            <option *ngFor=\"let area of areaList\" value=\"{{area._id}}\">{{area.name}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group\">\r\n          <label>Line</label>\r\n          <select class=\"form-control\" [(ngModel)]=\"machine.line._id\" name=\"line\">\r\n            <option value=\"\">--Select Line--</option>\r\n            <option *ngFor=\"let line of lineList\" value=\"{{line._id}}\">{{line.name}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group\">\r\n          <label>Barcode</label>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"machine.barcode\" name=\"barcode\">\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group\">\r\n          <label>Model</label>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"machine.model\" name=\"model\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n  \r\n  <div class=\"row\">\r\n    <div class=\"col-sm-2\" *ngIf=\"isNew\">\r\n      <button class=\"btn btn-primary form-control\" type=\"button\" (click)=\"save()\">Save</button>\r\n    </div>\r\n    <div class=\"col-sm-2\" *ngIf=\"!isNew\">\r\n      <button class=\"btn btn-primary form-control\" type=\"button\" (click)=\"update()\">Update</button>\r\n    </div>\r\n    <div class=\"col-sm-2\" *ngIf=\"!isNew\">\r\n      <button class=\"btn btn-primary form-control\" type=\"button\" (click)=\"delete()\">Delete</button>\r\n    </div>\r\n    <div class=\"col-sm-2\" *ngIf=\"isNew\">\r\n      <button class=\"btn btn-primary form-control\" type=\"button\" (click)=\"cancel()\">Cancel</button>\r\n    </div>\r\n    <div class=\"col-sm-2\">\r\n        <button type=\"button\" class=\"btn btn-primary form-control\" data-toggle=\"modal\" data-target=\"#qrModal\" (click)=\"generateQR()\">Show QR</button>\r\n    </div>\r\n  </div>\r\n<!-- Button trigger modal -->\r\n\r\n  \r\n  <!-- Modal -->\r\n  <div class=\"modal fade\" id=\"qrModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n    <div class=\"modal-dialog modal-sm\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n          <h4 class=\"modal-title\" id=\"myModalLabel\">QR Code for {{machine.name}}</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div *ngIf=\"machine.name!=='' && machine.area!=='' && machine.line!==''\" class=\"text-center\">\r\n            <ngx-qrcode qrc-element-type=\"img\" [qrc-value]=\"machine.qrCode\" id=\"print-section\"></ngx-qrcode>\r\n          </div>\r\n          <div *ngIf=\"machine.name==='' && machine.area==='' && machine.line===''\" class=\"text-center\">\r\n              <h2>Please fill Machine Name, Area and Line</h2>\r\n            </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n          <button type=\"button\" class=\"btn btn-primary\"  *ngIf=\"machine.name!=='' && machine.area!=='' && machine.line!==''\" (click)=\"print()\">Print</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/machine/machine/machine.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/machine/machine/machine.component.ts ***!
  \*****************************************************************/
/*! exports provided: MachineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachineComponent", function() { return MachineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_machine_machine_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/machine/machine.service */ "./src/app/services/machine/machine.service.ts");
/* harmony import */ var _services_machine_area_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/machine/area.service */ "./src/app/services/machine/area.service.ts");
/* harmony import */ var _services_machine_line_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/machine/line.service */ "./src/app/services/machine/line.service.ts");
/* harmony import */ var _services_machine_machinegroup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/machine/machinegroup.service */ "./src/app/services/machine/machinegroup.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MachineComponent = /** @class */ (function () {
    function MachineComponent(machineService, areaService, lineService, machinegroupService, toasterService) {
        var _this = this;
        this.machineService = machineService;
        this.areaService = areaService;
        this.lineService = lineService;
        this.machinegroupService = machinegroupService;
        this.toasterService = toasterService;
        this.machine = {
            "name": "",
            "machinegroup": "",
            "company": "",
            "model": "",
            "dateOfInstall": "",
            "qrCode": "",
            "area": {},
            "line": {},
            "barcode": ""
        };
        this.isList = true;
        this.isNew = true;
        this.getMachines();
        this.areaService.getAreas().subscribe(function (data) {
            _this.areaList = data;
        });
        this.lineService.getLines().subscribe(function (data) {
            _this.lineList = data;
        });
        this.machinegroupService.getMachineGroups().subscribe(function (data) {
            _this.machinegroupList = data;
        });
    }
    MachineComponent.prototype.ngOnInit = function () {
    };
    MachineComponent.prototype.new = function () {
        this.isList = false;
        this.isNew = true;
        this.machine = {
            "name": "",
            "machinegroup": "",
            "company": "",
            "model": "",
            "dateOfInstall": "",
            "qrCode": "",
            "area": {},
            "line": {},
            "barcode": ""
        };
    };
    MachineComponent.prototype.back = function () {
        this.isList = true;
    };
    MachineComponent.prototype.populate = function (machine) {
        this.isList = false;
        this.isNew = false;
        this.machine = machine;
        this.machine.area = machine.area;
        this.machine.line = machine.line;
        this.machine.machinegroup = machine.machinegroup._id;
    };
    MachineComponent.prototype.getMachines = function () {
        var _this = this;
        this.machineService.getMachines().subscribe(function (data) {
            _this.machines = data;
        });
    };
    MachineComponent.prototype.generateQR = function () {
        this.machine.qrCode = "{ machineName :" + this.machine.name + ",area:" + this.machine.area["_id"] + ",line:" + this.machine.line["_id"] + "}";
    };
    MachineComponent.prototype.save = function () {
        var _this = this;
        if (this.machine.name !== "" && this.machine.machinegroup !== ""
            && this.machine.dateOfInstall !== "" && this.machine.area["_id"] !== "" && this.machine.line["_id"] !== "") {
            this.machineService.addMachine(this.machine).subscribe(function (data) {
                var toast = {
                    type: 'success',
                    title: 'Success',
                    body: 'Machine saved successfully.',
                    showCloseButton: true
                };
                _this.toasterService.pop(toast);
                _this.isList = true;
                _this.getMachines();
            });
        }
        else {
            var toast = {
                type: 'error',
                title: 'Error',
                body: 'Please fill the all the details.',
                showCloseButton: true
            };
            this.toasterService.pop(toast);
        }
    };
    MachineComponent.prototype.delete = function () {
        var _this = this;
        this.machineService.deleteMachine(this.machine["_id"]).subscribe(function (data) {
            var toast = {
                type: 'success',
                title: 'Success',
                body: 'Machine deleted successfully.',
                showCloseButton: true
            };
            _this.toasterService.pop(toast);
            _this.isList = true;
            _this.getMachines();
        });
    };
    MachineComponent.prototype.update = function () {
        var _this = this;
        this.machineService.updateMachine(this.machine).subscribe(function (data) {
            var toast = {
                type: 'success',
                title: 'Success',
                body: 'Machine updated successfully.',
                showCloseButton: true
            };
            _this.toasterService.pop(toast);
            _this.isList = true;
            _this.getMachines();
        });
    };
    MachineComponent.prototype.print = function () {
        var printContents, popupWin;
        printContents = document.getElementById('print-section').innerHTML;
        popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
        popupWin.document.open();
        popupWin.document.write("\n      <html>\n        <head>\n          <title>Print tab</title>\n          <style>\n          //........Customized style.......\n          </style>\n        </head>\n    <body onload=\"window.print();window.close()\">" + printContents + "</body>\n      </html>");
        popupWin.document.close();
    };
    MachineComponent.prototype.cancel = function () {
        this.isList = true;
    };
    MachineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-machine',
            template: __webpack_require__(/*! ./machine.component.html */ "./src/app/components/machine/machine/machine.component.html"),
            styles: [__webpack_require__(/*! ./machine.component.css */ "./src/app/components/machine/machine/machine.component.css")]
        }),
        __metadata("design:paramtypes", [_services_machine_machine_service__WEBPACK_IMPORTED_MODULE_1__["MachineService"],
            _services_machine_area_service__WEBPACK_IMPORTED_MODULE_2__["AreaService"],
            _services_machine_line_service__WEBPACK_IMPORTED_MODULE_3__["LineService"],
            _services_machine_machinegroup_service__WEBPACK_IMPORTED_MODULE_4__["MachinegroupService"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_5__["ToasterService"]])
    ], MachineComponent);
    return MachineComponent;
}());



/***/ }),

/***/ "./src/app/components/machine/machinegroup/machinegroup.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/machine/machinegroup/machinegroup.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFjaGluZS9tYWNoaW5lZ3JvdXAvbWFjaGluZWdyb3VwLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/machine/machinegroup/machinegroup.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/machine/machinegroup/machinegroup.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"isList\">\r\n  <div class=\"col-sm-12\">\r\n    <h2 class=\"pull-left\">Machine group List</h2>\r\n    <button class=\"btn btn-primary pull-right margin-top-20px\" type=\"button\" (click)=\"new()\">New</button>\r\n  </div>\r\n  <div class=\"col-sm-3\" *ngFor=\"let machinegroup of machinegroups\">\r\n    <div class=\"border-style\" (click)=\"populate(machinegroup)\">\r\n      <p>Name : {{machinegroup.name}}</p>\r\n      <p>Description: {{machinegroup.description}}</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"!isList\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <h2 class=\"pull-left\">Machine Group</h2>\r\n      <button class=\"btn btn-primary pull-right margin-top-20px\" type=\"button\" (click)=\"back()\">Back to List</button>\r\n    </div>\r\n  </div>\r\n  <form>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group\">\r\n          <label>Name</label>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"machinegroup.name\" name=\"name\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group\">\r\n          <label>Description</label>\r\n          <textarea class=\"form-control\" rows=\"3\" [(ngModel)]=\"machinegroup.description\" name=\"description\"></textarea>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-2\" *ngIf=\"isNew\">\r\n        <button class=\"btn btn-primary form-control\" type=\"button\" (click)=\"save()\">Save</button>\r\n      </div>\r\n      <div class=\"col-sm-2\" *ngIf=\"!isNew\">\r\n        <button class=\"btn btn-primary form-control\" type=\"button\" (click)=\"update()\">Update</button>\r\n      </div>\r\n      <div class=\"col-sm-2\" *ngIf=\"!isNew\">\r\n        <button class=\"btn btn-primary form-control\" type=\"button\" (click)=\"delete()\">Delete</button>\r\n      </div>\r\n      <div class=\"col-sm-2\" *ngIf=\"isNew\">\r\n        <button class=\"btn btn-primary form-control\" type=\"button\" (click)=\"cancel()\">Cancel</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/components/machine/machinegroup/machinegroup.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/machine/machinegroup/machinegroup.component.ts ***!
  \***************************************************************************/
/*! exports provided: MachinegroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachinegroupComponent", function() { return MachinegroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_machine_machinegroup_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/machine/machinegroup.service */ "./src/app/services/machine/machinegroup.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MachinegroupComponent = /** @class */ (function () {
    function MachinegroupComponent(machinegroupService, toasterService) {
        this.machinegroupService = machinegroupService;
        this.toasterService = toasterService;
        this.machinegroup = {
            "name": "",
            "description": ""
        };
        this.isList = true;
        this.isNew = true;
        this.getAllMachineGroups();
    }
    MachinegroupComponent.prototype.ngOnInit = function () {
    };
    MachinegroupComponent.prototype.new = function () {
        this.isList = false;
        this.isNew = true;
        this.machinegroup = {
            "name": "",
            "description": ""
        };
    };
    MachinegroupComponent.prototype.back = function () {
        this.isList = true;
    };
    MachinegroupComponent.prototype.populate = function (machinegroup) {
        this.isList = false;
        this.isNew = false;
        this.machinegroup = machinegroup;
    };
    MachinegroupComponent.prototype.getAllMachineGroups = function () {
        var _this = this;
        this.machinegroupService.getMachineGroups().subscribe(function (data) {
            _this.machinegroups = data;
        });
    };
    MachinegroupComponent.prototype.save = function () {
        var _this = this;
        if (this.machinegroup.name !== "" && this.machinegroup.description !== "") {
            this.machinegroupService.addMachineGroup(this.machinegroup).subscribe(function (data) {
                var toast = {
                    type: 'success',
                    title: 'Success',
                    body: 'Machine group saved successfully.',
                    showCloseButton: true
                };
                _this.toasterService.pop(toast);
                _this.isList = true;
                _this.getAllMachineGroups();
            });
        }
        else {
            var toast = {
                type: 'error',
                title: 'Error',
                body: 'Please fill the all the details.',
                showCloseButton: true
            };
            this.toasterService.pop(toast);
        }
    };
    MachinegroupComponent.prototype.delete = function () {
        var _this = this;
        this.machinegroupService.deleteMachineGroup(this.machinegroup["_id"]).subscribe(function (data) {
            var toast = {
                type: 'success',
                title: 'Success',
                body: 'Machine group deleted successfully.',
                showCloseButton: true
            };
            _this.toasterService.pop(toast);
            _this.isList = true;
            _this.getAllMachineGroups();
        });
    };
    MachinegroupComponent.prototype.update = function () {
        var _this = this;
        this.machinegroupService.updateMachineGroup(this.machinegroup).subscribe(function (data) {
            var toast = {
                type: 'success',
                title: 'Success',
                body: 'Machine group updated successfully.',
                showCloseButton: true
            };
            _this.toasterService.pop(toast);
            _this.isList = true;
            _this.getAllMachineGroups();
        });
    };
    MachinegroupComponent.prototype.cancel = function () {
        this.isList = true;
    };
    MachinegroupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-machinegroup',
            template: __webpack_require__(/*! ./machinegroup.component.html */ "./src/app/components/machine/machinegroup/machinegroup.component.html"),
            styles: [__webpack_require__(/*! ./machinegroup.component.css */ "./src/app/components/machine/machinegroup/machinegroup.component.css")]
        }),
        __metadata("design:paramtypes", [_services_machine_machinegroup_service__WEBPACK_IMPORTED_MODULE_1__["MachinegroupService"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_2__["ToasterService"]])
    ], MachinegroupComponent);
    return MachinegroupComponent;
}());



/***/ }),

/***/ "./src/app/components/machine/part/part.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/machine/part/part.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFjaGluZS9wYXJ0L3BhcnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/machine/part/part.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/machine/part/part.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"isList\">\r\n  <div class=\"col-sm-12\">\r\n    <h2 class=\"pull-left\">Part List</h2>\r\n    <button class=\"btn btn-primary pull-right margin-top-20px\" type=\"button\" (click)=\"new()\">New</button>\r\n  </div>\r\n  <div class=\"col-sm-3\" *ngFor=\"let part of parts\">\r\n    <div class=\"border-style\" (click)=\"populate(part)\">\r\n      <p>Name : {{part.name}}</p>\r\n      <p>Description: {{part.description}}</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"!isList\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <h2 class=\"pull-left\">Part</h2>\r\n      <button class=\"btn btn-primary pull-right margin-top-20px\" type=\"button\" (click)=\"back()\">Back to List</button>\r\n    </div>\r\n  </div>\r\n  <form>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group\">\r\n          <label>Name</label>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"part.name\" name=\"name\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group\">\r\n          <label>Description</label>\r\n          <textarea class=\"form-control\" rows=\"3\" [(ngModel)]=\"part.description\" name=\"description\"></textarea>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group\">\r\n          <label>Serial part</label>\r\n          <div class=\"radio\">\r\n            <label><input type=\"radio\" value=\"yes\" name=\"isSerial\" [(ngModel)]=\"part.isSerial\"> Yes</label>\r\n          </div>\r\n          <div class=\"radio\">\r\n            <label><input type=\"radio\" value=\"no\" name=\"isSerial\" [(ngModel)]=\"part.isSerial\"> No</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"form-group\">\r\n            <label>Available Quantity</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"part.availableQuantity\" name=\"availableQuantity\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-2\" *ngIf=\"isNew\">\r\n        <button class=\"btn btn-primary form-control\" type=\"button\" (click)=\"save()\">Save</button>\r\n      </div>\r\n      <div class=\"col-sm-2\" *ngIf=\"!isNew\">\r\n        <button class=\"btn btn-primary form-control\" type=\"button\" (click)=\"update()\">Update</button>\r\n      </div>\r\n      <div class=\"col-sm-2\" *ngIf=\"!isNew\">\r\n        <button class=\"btn btn-primary form-control\" type=\"button\" (click)=\"delete()\">Delete</button>\r\n      </div>\r\n      <div class=\"col-sm-2\" *ngIf=\"isNew\">\r\n        <button class=\"btn btn-primary form-control\" type=\"button\" (click)=\"cancel()\">Cancel</button>\r\n      </div>\r\n      <div class=\"col-sm-2\">\r\n          <button type=\"button\" class=\"btn btn-primary form-control\" data-toggle=\"modal\" data-target=\"#qrModal\" (click)=\"generateQR()\">Show QR</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n\r\n    <!-- Modal -->\r\n    <div class=\"modal fade\" id=\"qrModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n        <div class=\"modal-dialog modal-sm\" role=\"document\">\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n              <h4 class=\"modal-title\" id=\"myModalLabel\">QR Code for {{part.name}}</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              <div *ngIf=\"part.name!==''\" class=\"text-center\">\r\n                <ngx-qrcode qrc-element-type=\"img\" [qrc-value]=\"part.qrCode\" id=\"print-section\"></ngx-qrcode>\r\n              </div>\r\n              <div *ngIf=\"part.name===''\" class=\"text-center\">\r\n                  <h2>Please fill Part name</h2>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n              <button type=\"button\" class=\"btn btn-primary\"  *ngIf=\"part.name!==''\" (click)=\"print()\">Print</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/machine/part/part.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/machine/part/part.component.ts ***!
  \***********************************************************/
/*! exports provided: PartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartComponent", function() { return PartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _services_machine_part_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/machine/part.service */ "./src/app/services/machine/part.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PartComponent = /** @class */ (function () {
    function PartComponent(partService, toasterService) {
        this.partService = partService;
        this.toasterService = toasterService;
        this.part = {
            "name": "",
            "description": "",
            "isSerial": "",
            "availableQuantity": "",
            "qrCode": ""
        };
        this.isList = true;
        this.isNew = true;
        this.getParts();
    }
    PartComponent.prototype.ngOnInit = function () {
    };
    PartComponent.prototype.new = function () {
        this.isList = false;
        this.isNew = true;
        this.part = {
            "name": "",
            "description": "",
            "isSerial": "",
            "availableQuantity": "",
            "qrCode": ""
        };
    };
    PartComponent.prototype.back = function () {
        this.isList = true;
    };
    PartComponent.prototype.populate = function (part) {
        this.isList = false;
        this.isNew = false;
        this.part = part;
    };
    PartComponent.prototype.getParts = function () {
        var _this = this;
        this.partService.getParts().subscribe(function (data) {
            _this.parts = data;
        });
    };
    PartComponent.prototype.save = function () {
        var _this = this;
        if (this.part.name !== "" && this.part.description !== "") {
            this.partService.addPart(this.part).subscribe(function (data) {
                var toast = {
                    type: 'success',
                    title: 'Success',
                    body: 'Part saved successfully.',
                    showCloseButton: true
                };
                _this.toasterService.pop(toast);
                _this.isList = true;
                _this.getParts();
            });
        }
        else {
            var toast = {
                type: 'error',
                title: 'Error',
                body: 'Please fill the all the details.',
                showCloseButton: true
            };
            this.toasterService.pop(toast);
        }
    };
    PartComponent.prototype.delete = function () {
        var _this = this;
        this.partService.deletePart(this.part["_id"]).subscribe(function (data) {
            var toast = {
                type: 'success',
                title: 'Success',
                body: 'Part deleted successfully.',
                showCloseButton: true
            };
            _this.toasterService.pop(toast);
            _this.isList = true;
            _this.getParts();
        });
    };
    PartComponent.prototype.update = function () {
        var _this = this;
        this.partService.updatePart(this.part).subscribe(function (data) {
            var toast = {
                type: 'success',
                title: 'Success',
                body: 'Part updated successfully.',
                showCloseButton: true
            };
            _this.toasterService.pop(toast);
            _this.isList = true;
            _this.getParts();
        });
    };
    PartComponent.prototype.cancel = function () {
        this.isList = true;
    };
    PartComponent.prototype.generateQR = function () {
        this.part.qrCode = "{ partName :" + this.part.name + "}";
    };
    PartComponent.prototype.print = function () {
        var printContents, popupWin;
        printContents = document.getElementById('print-section').innerHTML;
        popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
        popupWin.document.open();
        popupWin.document.write("\n      <html>\n        <head>\n          <title>Print tab</title>\n          <style>\n          //........Customized style.......\n          </style>\n        </head>\n    <body onload=\"window.print();window.close()\">" + printContents + "</body>\n      </html>");
        popupWin.document.close();
    };
    PartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-part',
            template: __webpack_require__(/*! ./part.component.html */ "./src/app/components/machine/part/part.component.html"),
            styles: [__webpack_require__(/*! ./part.component.css */ "./src/app/components/machine/part/part.component.css")]
        }),
        __metadata("design:paramtypes", [_services_machine_part_service__WEBPACK_IMPORTED_MODULE_2__["PartService"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_1__["ToasterService"]])
    ], PartComponent);
    return PartComponent;
}());



/***/ }),

/***/ "./src/app/components/machine/reasons/reasons.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/machine/reasons/reasons.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFjaGluZS9yZWFzb25zL3JlYXNvbnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/machine/reasons/reasons.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/machine/reasons/reasons.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"isList\">\r\n    <div class=\"col-sm-12\">\r\n      <h2 class=\"pull-left\">Reasons List</h2>\r\n      <button class=\"btn btn-primary pull-right margin-top-20px\" type=\"button\" (click)=\"new()\">New</button>\r\n    </div>\r\n    <div class=\"col-sm-3\" *ngFor=\"let reason of reasons\">\r\n      <div class=\"border-style\" (click)=\"populate(reason)\">\r\n        <p>Name : {{reason.name}}</p>\r\n        <p>Description: {{reason.description}}</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"!isList\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <h2 class=\"pull-left\">Reason</h2>\r\n        <button class=\"btn btn-primary pull-right margin-top-20px\" type=\"button\" (click)=\"back()\">Back to List</button>\r\n      </div>\r\n    </div>\r\n    <form>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"form-group\">\r\n            <label>Name</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"reason.name\" name=\"name\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"form-group\">\r\n            <label>Description</label>\r\n            <textarea class=\"form-control\" rows=\"3\" [(ngModel)]=\"reason.description\" name=\"description\"></textarea>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-2\" *ngIf=\"isNew\">\r\n          <button class=\"btn btn-primary form-control\" type=\"button\" (click)=\"save()\">Save</button>\r\n        </div>\r\n        <div class=\"col-sm-2\" *ngIf=\"!isNew\">\r\n          <button class=\"btn btn-primary form-control\" type=\"button\" (click)=\"update()\">Update</button>\r\n        </div>\r\n        <div class=\"col-sm-2\" *ngIf=\"!isNew\">\r\n          <button class=\"btn btn-primary form-control\" type=\"button\" (click)=\"delete()\">Delete</button>\r\n        </div>\r\n        <div class=\"col-sm-2\" *ngIf=\"isNew\">\r\n          <button class=\"btn btn-primary form-control\" type=\"button\" (click)=\"cancel()\">Cancel</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>"

/***/ }),

/***/ "./src/app/components/machine/reasons/reasons.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/machine/reasons/reasons.component.ts ***!
  \*****************************************************************/
/*! exports provided: ReasonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReasonsComponent", function() { return ReasonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_machine_reason_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/machine/reason.service */ "./src/app/services/machine/reason.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReasonsComponent = /** @class */ (function () {
    function ReasonsComponent(reasonService, toasterService) {
        this.reasonService = reasonService;
        this.toasterService = toasterService;
        this.reason = {
            "name": "",
            "description": ""
        };
        this.isList = true;
        this.isNew = true;
        this.getAllReasons();
    }
    ReasonsComponent.prototype.ngOnInit = function () {
    };
    ReasonsComponent.prototype.new = function () {
        this.isList = false;
        this.isNew = true;
        this.reason = {
            "name": "",
            "description": ""
        };
    };
    ReasonsComponent.prototype.back = function () {
        this.isList = true;
    };
    ReasonsComponent.prototype.populate = function (reason) {
        this.isList = false;
        this.isNew = false;
        this.reason = reason;
    };
    ReasonsComponent.prototype.getAllReasons = function () {
        var _this = this;
        this.reasonService.getAllReasons().subscribe(function (data) {
            _this.reasons = data;
        });
    };
    ReasonsComponent.prototype.save = function () {
        var _this = this;
        if (this.reason.name !== "" && this.reason.description !== "") {
            this.reasonService.addReason(this.reason).subscribe(function (data) {
                var toast = {
                    type: 'success',
                    title: 'Success',
                    body: 'Reason saved successfully.',
                    showCloseButton: true
                };
                _this.toasterService.pop(toast);
                _this.isList = true;
                _this.getAllReasons();
            });
        }
        else {
            var toast = {
                type: 'error',
                title: 'Error',
                body: 'Please fill the all the details.',
                showCloseButton: true
            };
            this.toasterService.pop(toast);
        }
    };
    ReasonsComponent.prototype.delete = function () {
        var _this = this;
        this.reasonService.deleteReason(this.reason["_id"]).subscribe(function (data) {
            var toast = {
                type: 'success',
                title: 'Success',
                body: 'Reason deleted successfully.',
                showCloseButton: true
            };
            _this.toasterService.pop(toast);
            _this.isList = true;
            _this.getAllReasons();
        });
    };
    ReasonsComponent.prototype.update = function () {
        var _this = this;
        this.reasonService.updateReason(this.reason).subscribe(function (data) {
            var toast = {
                type: 'success',
                title: 'Success',
                body: 'Reason updated successfully.',
                showCloseButton: true
            };
            _this.toasterService.pop(toast);
            _this.isList = true;
            _this.getAllReasons();
        });
    };
    ReasonsComponent.prototype.cancel = function () {
        this.isList = true;
    };
    ReasonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reasons',
            template: __webpack_require__(/*! ./reasons.component.html */ "./src/app/components/machine/reasons/reasons.component.html"),
            styles: [__webpack_require__(/*! ./reasons.component.css */ "./src/app/components/machine/reasons/reasons.component.css")]
        }),
        __metadata("design:paramtypes", [_services_machine_reason_service__WEBPACK_IMPORTED_MODULE_1__["ReasonService"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_2__["ToasterService"]])
    ], ReasonsComponent);
    return ReasonsComponent;
}());



/***/ }),

/***/ "./src/app/components/machine/steps/steps.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/machine/steps/steps.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFjaGluZS9zdGVwcy9zdGVwcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/machine/steps/steps.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/machine/steps/steps.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"isList\">\r\n  <div class=\"col-sm-12\">\r\n    <h2 class=\"pull-left\">Step Group List</h2>\r\n    <button class=\"btn btn-primary pull-right margin-top-20px\" type=\"button\" (click)=\"new()\">New</button>\r\n  </div>\r\n  <div class=\"col-sm-3\" *ngFor=\"let stepgroup of stepgroups\">\r\n    <div class=\"border-style\" (click)=\"populate(stepgroup)\">\r\n      <p>Name : {{stepgroup.name}}</p>\r\n      <p>Description: {{stepgroup.description}}</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"!isList\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <h2 class=\"pull-left\">Step Group</h2>\r\n      <button class=\"btn btn-primary pull-right margin-top-20px\" type=\"button\" (click)=\"back()\">Back to List</button>\r\n    </div>\r\n  </div>\r\n  <form>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group\">\r\n          <label>Step Group Name</label>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"stepgroup.name\" name=\"name\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group\">\r\n          <label>Description</label>\r\n          <textarea class=\"form-control\" rows=\"3\" [(ngModel)]=\"stepgroup.description\" name=\"description\"></textarea>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-2\">\r\n        <button type=\"button\" class=\"btn btn-primary form-control\"  (click)=\"openModal(template, true, null)\">Add Step</button>\r\n      </div>\r\n    </div>\r\n    <div class=\"row margin-top-20px\">\r\n      <div class=\"col-sm-12\">\r\n        <table class=\"table\">\r\n          <tr>\r\n            <th>Step Name</th>\r\n            <th>Edit</th>\r\n            <th>Delete</th>\r\n          </tr>\r\n          <tr *ngFor=\"let step of stepgroup.steps\">\r\n            <td>{{step.name}}</td>\r\n            <td><button type=\"button\" (click)=\"openModal(template, false, step)\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></button></td>\r\n            <td><button type=\"button\" (click)=\"deleteStep(step)\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></button></td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-2\" *ngIf=\"isNew\">\r\n        <button class=\"btn btn-primary form-control\" type=\"button\" (click)=\"save()\">Save</button>\r\n      </div>\r\n      <div class=\"col-sm-2\" *ngIf=\"!isNew\">\r\n        <button class=\"btn btn-primary form-control\" type=\"button\" (click)=\"update()\">Update</button>\r\n      </div>\r\n      <div class=\"col-sm-2\" *ngIf=\"!isNew\">\r\n        <button class=\"btn btn-primary form-control\" type=\"button\" (click)=\"delete()\">Delete</button>\r\n      </div>\r\n      <div class=\"col-sm-2\" *ngIf=\"isNew\">\r\n        <button class=\"btn btn-primary form-control\" type=\"button\" (click)=\"cancel()\">Cancel</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n\r\n  <ng-template #template>\r\n    <div class=\"modal-body\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"closeModal()\"><span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\" id=\"myModalLabel\">Add Step to Step group</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12\">\r\n            <div class=\"form-group\">\r\n              <label>Step Name</label>\r\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"step.name\" name=\"name\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12\">\r\n            <div class=\"form-group\">\r\n              <label>Description</label>\r\n              <textarea class=\"form-control\" rows=\"3\" [(ngModel)]=\"step.description\" name=\"description\"></textarea>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div>\r\n          <div>\r\n            <h4>Add Document</h4>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-4\">\r\n              <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"documentsearch\" name=\"documentsearch\" (input)=\"onSearchChange($event.target.value, 'document')\">\r\n                <div *ngIf=\"documentshowResults\" id=\"txtSearch\" class=\"auto-complete-style\">\r\n                  <p *ngFor=\"let result of documentsearchResults\" (click)=\"selectedItem(result,'document')\" class=\"border-bottom\">{{result.name}}</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-2\">\r\n              <div class=\"form-group\">\r\n                <input type=\"button\" class=\"form-control btn btn-primary\" (click)=\"addDocumentToStep(documentsearch)\" value=\"Add\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <table class=\"table\">\r\n              <tr>\r\n                <th>Document Name</th>\r\n                <th>Delete</th>\r\n              </tr>\r\n              <tr *ngFor=\"let document of step.documents\">\r\n                <td>{{document.name}}</td>\r\n                <td><button type=\"button\" (click)=\"deleteDocument(document)\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></button></td>\r\n              </tr>\r\n            </table>\r\n          </div>\r\n        </div>\r\n        <div>\r\n            <div>\r\n              <h4>Add Part</h4>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-4\">\r\n                <div class=\"form-group\">\r\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"partsearch\" name=\"partsearch\" (input)=\"onSearchChange($event.target.value,'step')\">\r\n                  <div *ngIf=\"partshowResults\" id=\"txtSearch\" class=\"auto-complete-style\">\r\n                    <p *ngFor=\"let result of partsearchResults\" (click)=\"selectedItem(result,'step')\" class=\"border-bottom\">{{result.name}}</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-2\">\r\n                <div class=\"form-group\">\r\n                  <input type=\"button\" class=\"form-control btn btn-primary\" (click)=\"addPartToStep(partsearch)\" value=\"Add\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div>\r\n              <table class=\"table\">\r\n                <tr>\r\n                  <th>Part Name</th>\r\n                  <th>Delete</th>\r\n                </tr>\r\n                <tr *ngFor=\"let part of step.parts\">\r\n                  <td>{{part.name}}</td>\r\n                  <td><button type=\"button\" (click)=\"deletePart(part)\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></button></td>\r\n                </tr>\r\n              </table>\r\n            </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"closeModal()\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"addStepToStepGroup()\" *ngIf=\"(step._id === undefined)\">Add Step</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"updateStepToStepGroup()\" *ngIf=\"!(step._id === undefined)\">Update Step</button>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n</div>"

/***/ }),

/***/ "./src/app/components/machine/steps/steps.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/machine/steps/steps.component.ts ***!
  \*************************************************************/
/*! exports provided: StepsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepsComponent", function() { return StepsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_machine_stepgroup_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/machine/stepgroup.service */ "./src/app/services/machine/stepgroup.service.ts");
/* harmony import */ var _services_machine_document_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/machine/document.service */ "./src/app/services/machine/document.service.ts");
/* harmony import */ var _services_machine_part_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/machine/part.service */ "./src/app/services/machine/part.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StepsComponent = /** @class */ (function () {
    /*Auto complete variables end */
    function StepsComponent(stepgroupService, documentService, partService, toasterService, modalService) {
        this.stepgroupService = stepgroupService;
        this.documentService = documentService;
        this.partService = partService;
        this.toasterService = toasterService;
        this.modalService = modalService;
        this.stepgroup = {
            "name": "",
            "description": "",
            "steps": []
        };
        this.step = {
            "name": "",
            "description": "",
            "parts": [],
            "documents": []
        };
        this.isList = true;
        this.isNew = true;
        this.getStepGroups();
    }
    StepsComponent.prototype.ngOnInit = function () {
    };
    StepsComponent.prototype.openModal = function (template, isNew, step) {
        var _this = this;
        if (isNew) {
            this.step = {
                "name": "",
                "description": "",
                "parts": [],
                "documents": []
            };
        }
        else {
            this.stepgroupService.getStepById(step._id).subscribe(function (data) {
                _this.step = data["data"];
            });
        }
        this.modalRef = this.modalService.show(template, { class: 'modal-md' });
    };
    StepsComponent.prototype.new = function () {
        this.isList = false;
        this.isNew = true;
        this.stepgroup = {
            "name": "",
            "description": "",
            "steps": []
        };
        this.step = {
            "name": "",
            "description": "",
            "parts": [],
            "documents": []
        };
    };
    StepsComponent.prototype.back = function () {
        this.isList = true;
    };
    StepsComponent.prototype.populate = function (stepgroup) {
        this.isList = false;
        this.isNew = false;
        this.stepgroup = stepgroup;
    };
    StepsComponent.prototype.getStepGroups = function () {
        var _this = this;
        this.stepgroupService.getAllStepgroups().subscribe(function (data) {
            _this.stepgroups = data;
        });
    };
    StepsComponent.prototype.save = function () {
        var _this = this;
        if (this.stepgroup.name !== "" && this.stepgroup.description !== "") {
            this.stepgroupService.addStepgroup(this.stepgroup).subscribe(function (data) {
                var toast = {
                    type: 'success',
                    title: 'Success',
                    body: 'Stepgroup saved successfully.',
                    showCloseButton: true
                };
                _this.toasterService.pop(toast);
                _this.isList = true;
                _this.getStepGroups();
            });
        }
        else {
            var toast = {
                type: 'error',
                title: 'Error',
                body: 'Please fill the all the details.',
                showCloseButton: true
            };
            this.toasterService.pop(toast);
        }
    };
    StepsComponent.prototype.delete = function () {
        var _this = this;
        this.stepgroupService.deleteStepgroup(this.stepgroup["_id"]).subscribe(function (data) {
            var toast = {
                type: 'success',
                title: 'Success',
                body: 'Stepgroup deleted successfully.',
                showCloseButton: true
            };
            _this.toasterService.pop(toast);
            _this.isList = true;
            _this.getStepGroups();
        });
    };
    StepsComponent.prototype.update = function () {
        var _this = this;
        this.stepgroupService.updateStepgroup(this.stepgroup).subscribe(function (data) {
            var toast = {
                type: 'success',
                title: 'Success',
                body: 'Stepgroup updated successfully.',
                showCloseButton: true
            };
            _this.toasterService.pop(toast);
            _this.isList = true;
            _this.getStepGroups();
        });
    };
    StepsComponent.prototype.cancel = function () {
        this.isList = true;
    };
    /*Auto complete methods start */
    StepsComponent.prototype.onSearchChange = function (value, modulename) {
        var _this = this;
        if (value.length > 2 && modulename === "document") {
            this.documentService.getDocumentName(value).subscribe(function (data) {
                _this.documentshowResults = true;
                _this.documentsearchResults = data;
                console.log(data);
            });
        }
        else if (value.length > 2) {
            this.partService.getPartName(value).subscribe(function (data) {
                _this.partshowResults = true;
                _this.partsearchResults = data;
                console.log(data);
            });
        }
    };
    StepsComponent.prototype.selectedItem = function (item, modulename) {
        if (modulename === "document") {
            this.documentsearch = item.name;
            this.documentshowResults = false;
        }
        else {
            this.partsearch = item.name;
            this.partshowResults = false;
        }
    };
    StepsComponent.prototype.addDocumentToStep = function (searchTerm) {
        var document = this.documentsearchResults.filter(function (el) {
            return el.name === searchTerm;
        })[0];
        this.documentsearch = "";
        this.step.documents.push(document);
    };
    StepsComponent.prototype.addPartToStep = function (searchTerm) {
        var part = this.partsearchResults.filter(function (el) {
            return el.name === searchTerm;
        })[0];
        this.partsearch = "";
        this.step.parts.push(part);
    };
    StepsComponent.prototype.deleteDocument = function (document) {
        this.step.documents = this.step.documents.filter(function (el) {
            return el._id !== document._id;
        });
    };
    StepsComponent.prototype.deletePart = function (part) {
        this.step.parts = this.step.parts.filter(function (el) {
            return el._id !== part._id;
        });
    };
    StepsComponent.prototype.addStepToStepGroup = function () {
        var _this = this;
        this.stepgroupService.addStep(this.step).subscribe(function (data) {
            _this.stepgroup.steps.push(data["data"]);
            _this.modalRef.hide();
        });
    };
    StepsComponent.prototype.updateStepToStepGroup = function () {
        var _this = this;
        this.stepgroupService.updateStep(this.step).subscribe(function (data) {
            var stepid = _this.stepgroup.steps.filter(function (el) {
                return (el._id === _this.step["_id"]);
            })[0];
            stepid = _this.step;
            _this.modalRef.hide();
        });
    };
    StepsComponent.prototype.closeModal = function () {
        this.modalRef.hide();
    };
    StepsComponent.prototype.deleteStep = function (step) {
        var _this = this;
        this.stepgroupService.deleteStep(step["_id"]).subscribe(function (data) {
            _this.stepgroup.steps = _this.stepgroup.steps.filter(function (el) {
                return el._id !== step._id;
            });
        });
    };
    StepsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-steps',
            template: __webpack_require__(/*! ./steps.component.html */ "./src/app/components/machine/steps/steps.component.html"),
            styles: [__webpack_require__(/*! ./steps.component.css */ "./src/app/components/machine/steps/steps.component.css")]
        }),
        __metadata("design:paramtypes", [_services_machine_stepgroup_service__WEBPACK_IMPORTED_MODULE_1__["StepgroupService"],
            _services_machine_document_service__WEBPACK_IMPORTED_MODULE_2__["DocumentService"],
            _services_machine_part_service__WEBPACK_IMPORTED_MODULE_3__["PartService"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_4__["ToasterService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"]])
    ], StepsComponent);
    return StepsComponent;
}());



/***/ }),

/***/ "./src/app/components/machine/template/template.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/machine/template/template.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFjaGluZS90ZW1wbGF0ZS90ZW1wbGF0ZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/machine/template/template.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/machine/template/template.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"isList\">\r\n  <div class=\"col-sm-12\">\r\n    <h2 class=\"pull-left\">Template List</h2>\r\n    <button class=\"btn btn-primary pull-right margin-top-20px\" type=\"button\" (click)=\"new()\">New</button>\r\n  </div>\r\n  <div class=\"col-sm-3\" *ngFor=\"let template of templates\">\r\n    <div class=\"border-style\" (click)=\"populate(template)\">\r\n      <p>Name : {{template.name}}</p>\r\n      <p>Description: {{template.description}}</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"!isList\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <h2 class=\"pull-left\">Template</h2>\r\n      <button class=\"btn btn-primary pull-right margin-top-20px\" type=\"button\" (click)=\"back()\">Back to List</button>\r\n    </div>\r\n  </div>\r\n  <form>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group\">\r\n          <label>Name</label>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"template.name\" name=\"name\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group\">\r\n          <label>Equipent</label>\r\n          <select class=\"form-control\" [(ngModel)]=\"template.machine\" name=\"machine\">\r\n            <option value=\"\">--Select Machine--</option>\r\n            <option *ngFor=\"let equipent of equipentList\" value=\"{{equipent._id}}\">{{equipent.name}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group\">\r\n          <label>Reason</label>\r\n          <select class=\"form-control\" [(ngModel)]=\"template.reason\" name=\"reason\">\r\n            <option value=\"\">--Select Reason--</option>\r\n            <option *ngFor=\"let reason of reasonList\" value=\"{{reason._id}}\">{{reason.name}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group\">\r\n          <label>Description</label>\r\n          <textarea class=\"form-control\" rows=\"3\" [(ngModel)]=\"template.description\" name=\"description\"></textarea>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div>\r\n      <div class=\"panel panel-default\">\r\n        <div class=\"panel-heading\">\r\n          <h3 class=\"panel-title\">Add Step Group</h3>\r\n        </div>\r\n        <div class=\"panel-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-4\">\r\n              <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"search\" name=\"search\" (input)=\"onSearchChange($event.target.value)\">\r\n                <div *ngIf=\"showResults\" id=\"txtSearch\" class=\"auto-complete-style\">\r\n                  <p *ngFor=\"let result of searchResults\" (click)=\"selectedItem(result)\" class=\"border-bottom\">{{result.name}}</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-2\">\r\n              <div class=\"form-group\">\r\n                <input type=\"button\" class=\"form-control btn btn-primary\" (click)=\"addStepGrpToTemplate(search)\" value=\"Add\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <table class=\"table\">\r\n              <tr>\r\n                <th>Step Group Name</th>\r\n                <th>Delete</th>\r\n              </tr>\r\n              <tr *ngFor=\"let step of template.stepgroups\">\r\n                <td>{{step.name}}</td>\r\n                <td><button type=\"button\" (click)=\"deleteStepGrp(step)\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></button></td>\r\n              </tr>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-2\" *ngIf=\"isNew\">\r\n        <button class=\"btn btn-primary form-control\" type=\"button\" (click)=\"save()\">Save</button>\r\n      </div>\r\n      <div class=\"col-sm-2\" *ngIf=\"!isNew\">\r\n        <button class=\"btn btn-primary form-control\" type=\"button\" (click)=\"update()\">Update</button>\r\n      </div>\r\n      <div class=\"col-sm-2\" *ngIf=\"!isNew\">\r\n        <button class=\"btn btn-primary form-control\" type=\"button\" (click)=\"delete()\">Delete</button>\r\n      </div>\r\n      <div class=\"col-sm-2\" *ngIf=\"isNew\">\r\n        <button class=\"btn btn-primary form-control\" type=\"button\" (click)=\"cancel()\">Cancel</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/components/machine/template/template.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/machine/template/template.component.ts ***!
  \*******************************************************************/
/*! exports provided: TemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateComponent", function() { return TemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_machine_machine_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/machine/machine.service */ "./src/app/services/machine/machine.service.ts");
/* harmony import */ var _services_machine_reason_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/machine/reason.service */ "./src/app/services/machine/reason.service.ts");
/* harmony import */ var _services_machine_template_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/machine/template.service */ "./src/app/services/machine/template.service.ts");
/* harmony import */ var _services_machine_stepgroup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/machine/stepgroup.service */ "./src/app/services/machine/stepgroup.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TemplateComponent = /** @class */ (function () {
    /*Auto complete variables end */
    function TemplateComponent(machineService, reasonService, templateService, stepgroupService, toasterService) {
        var _this = this;
        this.machineService = machineService;
        this.reasonService = reasonService;
        this.templateService = templateService;
        this.stepgroupService = stepgroupService;
        this.toasterService = toasterService;
        this.template = {
            "name": "",
            "description": "",
            "reason": "",
            "machine": "",
            "stepgroups": []
        };
        this.isList = true;
        this.isNew = true;
        this.machineService.getMachines().subscribe(function (data) {
            _this.equipentList = data;
        });
        this.reasonService.getAllReasons().subscribe(function (data) {
            _this.reasonList = data;
        });
        this.getTemplates();
    }
    TemplateComponent.prototype.ngOnInit = function () {
    };
    TemplateComponent.prototype.new = function () {
        this.isList = false;
        this.isNew = true;
        this.template = {
            "name": "",
            "description": "",
            "reason": "",
            "machine": "",
            "stepgroups": []
        };
    };
    TemplateComponent.prototype.back = function () {
        this.isList = true;
    };
    TemplateComponent.prototype.populate = function (template) {
        this.isList = false;
        this.isNew = false;
        this.template = template;
    };
    TemplateComponent.prototype.getTemplates = function () {
        var _this = this;
        this.templateService.getAllTemplates().subscribe(function (data) {
            _this.templates = data;
        });
    };
    TemplateComponent.prototype.save = function () {
        var _this = this;
        if (this.template.name !== "" && this.template.description !== "") {
            this.templateService.addTemplate(this.template).subscribe(function (data) {
                var toast = {
                    type: 'success',
                    title: 'Success',
                    body: 'Template saved successfully.',
                    showCloseButton: true
                };
                _this.toasterService.pop(toast);
                _this.isList = true;
                _this.getTemplates();
            });
        }
        else {
            var toast = {
                type: 'error',
                title: 'Error',
                body: 'Please fill the all the details.',
                showCloseButton: true
            };
            this.toasterService.pop(toast);
        }
    };
    TemplateComponent.prototype.delete = function () {
        var _this = this;
        this.templateService.deleteTemplate(this.template["_id"]).subscribe(function (data) {
            var toast = {
                type: 'success',
                title: 'Success',
                body: 'Template deleted successfully.',
                showCloseButton: true
            };
            _this.toasterService.pop(toast);
            _this.isList = true;
            _this.getTemplates();
        });
    };
    TemplateComponent.prototype.update = function () {
        var _this = this;
        this.templateService.updateTemplate(this.template).subscribe(function (data) {
            var toast = {
                type: 'success',
                title: 'Success',
                body: 'Template updated successfully.',
                showCloseButton: true
            };
            _this.toasterService.pop(toast);
            _this.isList = true;
            _this.getTemplates();
        });
    };
    TemplateComponent.prototype.cancel = function () {
        this.isList = true;
    };
    /*Auto complete methods start */
    TemplateComponent.prototype.onSearchChange = function (value) {
        var _this = this;
        if (value.length > 2) {
            this.stepgroupService.getStepGroupName(value).subscribe(function (data) {
                _this.showResults = true;
                _this.searchResults = data;
                console.log(data);
            });
        }
    };
    TemplateComponent.prototype.selectedItem = function (item) {
        this.search = item.name;
        this.showResults = false;
    };
    TemplateComponent.prototype.addStepGrpToTemplate = function (searchTerm) {
        var stepgroup = this.searchResults.filter(function (el) {
            return el.name === searchTerm;
        })[0];
        this.search = "";
        this.template.stepgroups.push(stepgroup);
    };
    TemplateComponent.prototype.deleteStepGrp = function (stepgroup) {
        this.template.stepgroups = this.template.stepgroups.filter(function (el) {
            return el._id !== stepgroup._id;
        });
    };
    TemplateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-template',
            template: __webpack_require__(/*! ./template.component.html */ "./src/app/components/machine/template/template.component.html"),
            styles: [__webpack_require__(/*! ./template.component.css */ "./src/app/components/machine/template/template.component.css")]
        }),
        __metadata("design:paramtypes", [_services_machine_machine_service__WEBPACK_IMPORTED_MODULE_1__["MachineService"],
            _services_machine_reason_service__WEBPACK_IMPORTED_MODULE_2__["ReasonService"],
            _services_machine_template_service__WEBPACK_IMPORTED_MODULE_3__["TemplateService"],
            _services_machine_stepgroup_service__WEBPACK_IMPORTED_MODULE_4__["StepgroupService"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_5__["ToasterService"]])
    ], TemplateComponent);
    return TemplateComponent;
}());



/***/ }),

/***/ "./src/app/components/settings/import/import.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/settings/import/import.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".font-size-20px{\r\n    font-size: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZXR0aW5ncy9pbXBvcnQvaW1wb3J0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZXR0aW5ncy9pbXBvcnQvaW1wb3J0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9udC1zaXplLTIwcHh7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/settings/import/import.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/settings/import/import.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <h2 class=\"pull-left\">Import</h2>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-4\">\r\n        <div class=\"form-group\">\r\n            <label>Choose Module</label>\r\n            <select class=\"form-control\" [(ngModel)]=\"module\" name=\"module\" (change)=\"modulechange($event)\">\r\n                <option value=\"\">--Select Module--</option>\r\n                <option *ngFor=\"let m of moduleList\" value=\"{{m.value}}\">{{m.key}}</option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row\" *ngIf=\"module!==''\">\r\n    <div class=\"col-sm-4\">\r\n        <div class=\"form-group\">\r\n            <div class=\"panel panel-default\">\r\n                <div class=\"panel-body\">\r\n                    <div class=\"pull-left\">\r\n                        <label class=\"font-size-20px\">{{sample.moduleName}}</label>\r\n                    </div>\r\n                    <div class=\"pull-right\">\r\n                        <a href=\"{{sample.url}}\" class=\"btn btn-primary\">Download Sample Excel</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row\" *ngIf=\"module!==''\">\r\n    <div class=\"col-sm-4\">\r\n        <div class=\"form-group\">\r\n            <label>Upload file</label>\r\n            <input type=\"file\" (change)=\"onFileChange($event)\" multiple=\"false\" #txtFile/>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-4\">\r\n        <h2>Import History</h2>\r\n        <div class=\"form-group\">\r\n            <div class=\"panel panel-default\" *ngFor=\"let importH of importHistory\">\r\n                <div class=\"panel-body\">\r\n                    <p>Module Name : {{importH.moduleName}}</p>\r\n                    <p>Date: {{importH.date}}</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/settings/import/import.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/settings/import/import.component.ts ***!
  \****************************************************************/
/*! exports provided: ImportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportComponent", function() { return ImportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_settings_import_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/settings/import.service */ "./src/app/services/settings/import.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ImportComponent = /** @class */ (function () {
    function ImportComponent(importService, toasterService) {
        var _this = this;
        this.importService = importService;
        this.toasterService = toasterService;
        this.moduleList = [
            {
                "value": "machine",
                "key": "Machine"
            }
        ];
        this.module = "";
        this.sample = {
            "moduleName": "",
            "url": ""
        };
        this.modules = [
            {
                name: "machine",
                data: {
                    "moduleName": "Machine",
                    "url": "https://fms-2018.herokuapp.com/import/download"
                }
            }
        ];
        this.wopts = { bookType: 'xlsx', type: 'array' };
        this.fileName = 'SheetJS.xlsx';
        this.data = [];
        this.importService.getImportHistory().subscribe(function (data) {
            console.log(data);
            _this.importHistory = data;
        });
    }
    ImportComponent.prototype.ngOnInit = function () {
    };
    ImportComponent.prototype.modulechange = function (event) {
        console.log(event.target.value);
        var m = this.modules.filter(function (el) {
            return el.name === event.target.value;
        });
        this.sample.moduleName = m[0].data.moduleName;
        this.sample.url = m[0].data.url;
    };
    ImportComponent.prototype.onFileChange = function (evt) {
        var _this = this;
        /* wire up file reader */
        var target = (evt.target);
        if (target.files.length !== 1)
            throw new Error('Cannot use multiple files');
        var reader = new FileReader();
        reader.onload = function (e) {
            /* read workbook */
            var bstr = e.target.result;
            var wb = xlsx__WEBPACK_IMPORTED_MODULE_1__["read"](bstr, { type: 'binary' });
            /* grab first sheet */
            for (var i = 0; i < wb.SheetNames.length; i++) {
                var wsname = wb.SheetNames[i];
                var ws = wb.Sheets[wsname];
                _this.data = xlsx__WEBPACK_IMPORTED_MODULE_1__["utils"].sheet_to_json(ws);
            }
            _this.data.forEach(function (element) {
                element.dateOfInstall = _this.convertExcelDate(element.dateOfInstall);
            });
            console.log(_this.data);
            var importdata = {
                "moduleName": "machine",
                "data": _this.data
            };
            _this.importService.createImport(importdata).subscribe(function (data) {
                var toast = {
                    type: 'success',
                    title: 'Success',
                    body: 'Machine imported successfully.',
                    showCloseButton: true
                };
                _this.toasterService.pop(toast);
                _this.myInputVariable.nativeElement.value = "";
                _this.importService.getImportHistory().subscribe(function (data) {
                    console.log(data);
                    _this.importHistory = data;
                });
            });
        };
        reader.readAsBinaryString(target.files[0]);
    };
    ImportComponent.prototype.convertExcelDate = function (excelDate) {
        var date = new Date((excelDate - (25567 + 2)) * 86400 * 1000);
        return date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('txtFile'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ImportComponent.prototype, "myInputVariable", void 0);
    ImportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-import',
            template: __webpack_require__(/*! ./import.component.html */ "./src/app/components/settings/import/import.component.html"),
            styles: [__webpack_require__(/*! ./import.component.css */ "./src/app/components/settings/import/import.component.css")]
        }),
        __metadata("design:paramtypes", [_services_settings_import_service__WEBPACK_IMPORTED_MODULE_2__["ImportService"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]])
    ], ImportComponent);
    return ImportComponent;
}());



/***/ }),

/***/ "./src/app/components/settings/settings/settings.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/components/settings/settings/settings.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/settings/settings/settings.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/settings/settings/settings.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <h2 class=\"pull-left\">Settings</h2>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"form-group\">\r\n      <label>Choose Category</label>\r\n      <select class=\"form-control\" [(ngModel)]=\"category\" name=\"category\" (change)=\"settingchange($event)\">\r\n        <option value=\"\">--Select Category--</option>\r\n        <option *ngFor=\"let c of categoryList\" value=\"{{c._id}}\">{{c.name}}</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\" *ngIf=\"category!==''\">\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"form-group\">\r\n      <label>Value</label>\r\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"settingValue\" name=\"settingValue\"/>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\" *ngIf=\"category!==''\">\r\n  <div class=\"col-sm-2\">\r\n    <button class=\"btn btn-primary form-control\" type=\"button\" (click)=\"save()\">Save</button>\r\n  </div>\r\n  <div class=\"col-sm-2\">\r\n    <button class=\"btn btn-primary form-control\" type=\"button\" (click)=\"cancel()\">Cancel</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/settings/settings/settings.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/settings/settings/settings.component.ts ***!
  \********************************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_settings_setting_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/settings/setting.service */ "./src/app/services/settings/setting.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(settingService, toasterService) {
        var _this = this;
        this.settingService = settingService;
        this.toasterService = toasterService;
        this.category = "";
        this.settingData = "";
        this.settingValue = "";
        this.settingService.getSettings().subscribe(function (data) {
            _this.categoryList = data;
        });
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent.prototype.settingchange = function (event) {
        console.log(event.target.value);
        this.settingData = this.categoryList.filter(function (el) {
            return el._id === event.target.value;
        })[0];
        this.settingValue = this.settingData["value"];
    };
    SettingsComponent.prototype.save = function () {
        var _this = this;
        this.settingData["value"] = this.settingValue;
        this.settingService.updateSetting(this.settingData).subscribe(function (data) {
            var toast = {
                type: 'success',
                title: 'Success',
                body: 'Setting updated successfully.',
                showCloseButton: true
            };
            _this.toasterService.pop(toast);
        });
    };
    SettingsComponent.prototype.cancel = function () {
    };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/components/settings/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/components/settings/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [_services_settings_setting_service__WEBPACK_IMPORTED_MODULE_1__["SettingService"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_2__["ToasterService"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user/user.component.css":
/*!*********************************************************!*\
  !*** ./src/app/components/user/user/user.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci91c2VyL3VzZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/user/user/user.component.html":
/*!**********************************************************!*\
  !*** ./src/app/components/user/user/user.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"isList\">\r\n  <div class=\"col-sm-12\">\r\n    <h2 class=\"pull-left\">User List</h2>\r\n    <button class=\"btn btn-primary pull-right margin-top-20px\" type=\"button\" (click)=\"new()\">New</button>\r\n  </div>\r\n  <div class=\"col-sm-3\" *ngFor=\"let user of users\">\r\n    <div class=\"border-style\" (click)=\"populate(user)\">\r\n      <p>Name : {{user.firstName + \" \" +user.lastName}}</p>\r\n      <p>Email : {{user.email}}</p>\r\n      <p>Date of Join : {{user.dateOfJoin}}</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"!isList\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <h2 class=\"pull-left\">User</h2>\r\n      <button class=\"btn btn-primary pull-right margin-top-20px\" type=\"button\" (click)=\"back()\">Back to List</button>\r\n    </div>\r\n  </div>\r\n  <form>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group\">\r\n          <label>First Name</label>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.firstName\" name=\"firstName\">\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group\">\r\n          <label>Last Name</label>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.lastName\" name=\"lastName\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group\">\r\n          <label>Email</label>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.email\" name=\"email\">\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group\">\r\n          <label>Phone</label>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.phone\" name=\"phone\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group\">\r\n          <label>Username</label>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.username\" name=\"username\">\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group\">\r\n          <label>Date of Join</label>\r\n          <input type=\"text\" placeholder=\"Datepicker\" class=\"form-control\" [bsConfig]=\"{ dateInputFormat: 'MM-DD-YYYY', containerClass: 'theme-red' }\"\r\n            bsDatepicker [(ngModel)]=\"user.dateOfJoin\" name=\"dateOfJoin\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group\">\r\n          <label>Password</label>\r\n          <input type=\"password\" class=\"form-control\" [(ngModel)]=\"user.password\" name=\"password\">\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group\">\r\n          <label>Confirm Password</label>\r\n          <input type=\"password\" class=\"form-control\" [(ngModel)]=\"user.cnfpassword\" name=\"cnfpassword\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-2\" *ngIf=\"isNew\">\r\n        <button class=\"btn btn-primary form-control\" type=\"button\" (click)=\"save()\">Save</button>\r\n      </div>\r\n      <div class=\"col-sm-2\" *ngIf=\"!isNew\">\r\n        <button class=\"btn btn-primary form-control\" type=\"button\" (click)=\"update()\">Update</button>\r\n      </div>\r\n      <div class=\"col-sm-2\" *ngIf=\"!isNew\">\r\n        <button class=\"btn btn-primary form-control\" type=\"button\" (click)=\"delete()\">Delete</button>\r\n      </div>\r\n      <div class=\"col-sm-2\" *ngIf=\"isNew\">\r\n        <button class=\"btn btn-primary form-control\" type=\"button\" (click)=\"cancel()\">Cancel</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/components/user/user/user.component.ts":
/*!********************************************************!*\
  !*** ./src/app/components/user/user/user.component.ts ***!
  \********************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserComponent = /** @class */ (function () {
    function UserComponent(userService, toasterService) {
        this.userService = userService;
        this.toasterService = toasterService;
        this.user = {
            "firstName": "",
            "lastName": "",
            "email": "",
            "phone": "",
            "username": "",
            "password": "",
            "dateOfJoin": "",
            "cnfpassword": ""
        };
        this.isList = true;
        this.isNew = true;
        this.getAllUsers();
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent.prototype.new = function () {
        this.isList = false;
        this.isNew = true;
        this.user = {
            "firstName": "",
            "lastName": "",
            "email": "",
            "phone": "",
            "username": "",
            "password": "",
            "dateOfJoin": "",
            "cnfpassword": ""
        };
    };
    UserComponent.prototype.back = function () {
        this.isList = true;
    };
    UserComponent.prototype.populate = function (user) {
        this.isList = false;
        this.isNew = false;
        this.user = user;
    };
    UserComponent.prototype.getAllUsers = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (data) {
            _this.users = data;
        });
    };
    UserComponent.prototype.save = function () {
        var _this = this;
        if (this.user.firstName !== "" &&
            this.user.lastName !== "" &&
            this.user.email !== "" &&
            this.user.phone !== "" &&
            this.user.username !== "" &&
            this.user.password !== "" &&
            this.user.dateOfJoin !== "" &&
            this.user.cnfpassword !== "") {
            if (this.user.password === this.user.cnfpassword) {
                this.userService.addUser(this.user).subscribe(function (data) {
                    var toast = {
                        type: 'success',
                        title: 'Success',
                        body: 'User saved successfully.',
                        showCloseButton: true
                    };
                    _this.toasterService.pop(toast);
                    _this.isList = true;
                    _this.getAllUsers();
                });
            }
            else {
                var toast = {
                    type: 'error',
                    title: 'Error',
                    body: 'Password mismatch.',
                    showCloseButton: true
                };
                this.toasterService.pop(toast);
            }
        }
        else {
            var toast = {
                type: 'error',
                title: 'Error',
                body: 'Please fill the all the details.',
                showCloseButton: true
            };
            this.toasterService.pop(toast);
        }
    };
    UserComponent.prototype.delete = function () {
        var _this = this;
        this.userService.deleteUser(this.user["_id"]).subscribe(function (data) {
            var toast = {
                type: 'success',
                title: 'Success',
                body: 'User deleted successfully.',
                showCloseButton: true
            };
            _this.toasterService.pop(toast);
            _this.isList = true;
            _this.getAllUsers();
        });
    };
    UserComponent.prototype.update = function () {
        var _this = this;
        this.userService.updateUser(this.user).subscribe(function (data) {
            var toast = {
                type: 'success',
                title: 'Success',
                body: 'User updated successfully.',
                showCloseButton: true
            };
            _this.toasterService.pop(toast);
            _this.isList = true;
            _this.getAllUsers();
        });
    };
    UserComponent.prototype.cancel = function () {
        this.isList = true;
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/components/user/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/components/user/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_2__["ToasterService"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/components/user/usergroup/usergroup.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/user/usergroup/usergroup.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci91c2VyZ3JvdXAvdXNlcmdyb3VwLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/user/usergroup/usergroup.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/user/usergroup/usergroup.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"isList\">\r\n  <div class=\"col-sm-12\">\r\n    <h2 class=\"pull-left\">User group List</h2>\r\n    <button class=\"btn btn-primary pull-right margin-top-20px\" type=\"button\" (click)=\"new()\">New</button>\r\n  </div>\r\n  <div class=\"col-sm-3\" *ngFor=\"let usergroup of usergroups\">\r\n    <div class=\"border-style\" (click)=\"populate(usergroup)\">\r\n      <p>Name : {{usergroup.name}}</p>\r\n      <p>Description: {{usergroup.description}}</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"!isList\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <h2 class=\"pull-left\">User group</h2>\r\n      <button class=\"btn btn-primary pull-right margin-top-20px\" type=\"button\" (click)=\"back()\">Back to List</button>\r\n    </div>\r\n  </div>\r\n  <div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n      <h3 class=\"panel-title\">User group Details</h3>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n      <form>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-4\">\r\n            <div class=\"form-group\">\r\n              <label>Group Name</label>\r\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"usergroup.name\" name=\"name\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-4\">\r\n            <div class=\"form-group\">\r\n              <label>Description</label>\r\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"usergroup.description\" name=\"description\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n      <h3 class=\"panel-title\">Select Privillages</h3>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n      <table class=\"table\">\r\n        <tr>\r\n          <th>Privillage Name</th>\r\n          <th>Select</th>\r\n        </tr>\r\n        <tr *ngFor=\"let privillage of privillagesList\">\r\n          <td>\r\n            {{ privillage.name }}\r\n          </td>\r\n          <td>\r\n            <button type=\"button\"  [ngClass]=\"{'btn-success': privillage.set }\" (click)=\"privillageSelected(privillage)\" ><i class=\"fa fa-check\" aria-hidden=\"true\"></i></button>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n  </div>\r\n  <div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n      <h3 class=\"panel-title\">Add Users</h3>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n      <form>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-4\">\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"search\" name=\"search\" (input)=\"onSearchChange($event.target.value)\">\r\n              <div *ngIf=\"showResults\" id=\"txtSearch\" class=\"auto-complete-style\">\r\n                  <p *ngFor=\"let result of searchResults\" (click)=\"selectedItem(result)\" class=\"border-bottom\">{{result.username}}</p>\r\n                </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-2\">\r\n            <div class=\"form-group\">\r\n              <input type=\"button\" class=\"form-control btn btn-primary\" (click)=\"addUserToUserGroup(search)\" value=\"Add\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n      <div>\r\n        <table class=\"table\">\r\n          <tr>\r\n            <th>Username</th>\r\n            <th>Delete</th>\r\n          </tr>\r\n          <tr *ngFor=\"let user of usergroup.users\">\r\n              <td>{{user.username}}</td>\r\n              <td><button type=\"button\" (click)=\"deleteUser(user)\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></button></td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-2\" *ngIf=\"isNew\">\r\n      <button class=\"btn btn-primary form-control\" type=\"button\" (click)=\"save()\">Save</button>\r\n    </div>\r\n    <div class=\"col-sm-2\" *ngIf=\"!isNew\">\r\n      <button class=\"btn btn-primary form-control\" type=\"button\" (click)=\"update()\">Update</button>\r\n    </div>\r\n    <div class=\"col-sm-2\" *ngIf=\"!isNew\">\r\n      <button class=\"btn btn-primary form-control\" type=\"button\" (click)=\"delete()\">Delete</button>\r\n    </div>\r\n    <div class=\"col-sm-2\" *ngIf=\"isNew\">\r\n      <button class=\"btn btn-primary form-control\" type=\"button\" (click)=\"cancel()\">Cancel</button>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/user/usergroup/usergroup.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/user/usergroup/usergroup.component.ts ***!
  \******************************************************************/
/*! exports provided: UsergroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsergroupComponent", function() { return UsergroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_common_privillages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/common/privillages */ "./src/app/services/common/privillages.ts");
/* harmony import */ var _services_user_usergroup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user/usergroup.service */ "./src/app/services/user/usergroup.service.ts");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UsergroupComponent = /** @class */ (function () {
    /*Auto complete variables end */
    function UsergroupComponent(privillages, usergroupService, userService, toasterService) {
        this.privillages = privillages;
        this.usergroupService = usergroupService;
        this.userService = userService;
        this.toasterService = toasterService;
        this.usergroup = {
            "name": "",
            "description": "",
            "users": [],
            "privillages": []
        };
        this.isList = true;
        this.isNew = true;
        this.getAllUserGroups();
        this.privillagesList = privillages.getPrivillages();
    }
    UsergroupComponent.prototype.ngOnInit = function () {
    };
    UsergroupComponent.prototype.new = function () {
        this.isList = false;
        this.isNew = true;
        this.usergroup = {
            "name": "",
            "description": "",
            "users": [],
            "privillages": []
        };
    };
    UsergroupComponent.prototype.back = function () {
        this.isList = true;
    };
    UsergroupComponent.prototype.populate = function (usergroup) {
        this.isList = false;
        this.isNew = false;
        this.usergroup = usergroup;
        this.updatePrivillages(this.usergroup.privillages);
    };
    UsergroupComponent.prototype.updatePrivillages = function (privillages) {
        this.privillagesList.forEach(function (element) {
            privillages.forEach(function (el) {
                if (el == element.name) {
                    element.set = true;
                }
            });
        });
    };
    UsergroupComponent.prototype.privillageSelected = function (priv) {
        if (this.usergroup.privillages.indexOf(priv.name) < 0) {
            this.usergroup.privillages.push(priv.name);
            priv.set = true;
        }
        else {
            this.usergroup.privillages.splice(this.usergroup.privillages.indexOf(priv.name), 1);
            priv.set = false;
        }
    };
    UsergroupComponent.prototype.getAllUserGroups = function () {
        var _this = this;
        this.usergroupService.getUserGroups().subscribe(function (data) {
            _this.usergroups = data;
        });
    };
    UsergroupComponent.prototype.save = function () {
        var _this = this;
        if (this.usergroup.name !== "" &&
            this.usergroup.description !== "") {
            this.usergroupService.addUserGroup(this.usergroup).subscribe(function (data) {
                var toast = {
                    type: 'success',
                    title: 'Success',
                    body: 'Usergroup saved successfully.',
                    showCloseButton: true
                };
                _this.toasterService.pop(toast);
                _this.isList = true;
                _this.getAllUserGroups();
            });
        }
        else {
            var toast = {
                type: 'error',
                title: 'Error',
                body: 'Please fill the all the details.',
                showCloseButton: true
            };
            this.toasterService.pop(toast);
        }
    };
    /*Auto complete methods start */
    UsergroupComponent.prototype.onSearchChange = function (value) {
        var _this = this;
        if (value.length > 2) {
            this.userService.getUserName(value).subscribe(function (data) {
                _this.showResults = true;
                _this.searchResults = data;
                console.log(data);
            });
        }
    };
    UsergroupComponent.prototype.selectedItem = function (item) {
        this.search = item.username;
        this.showResults = false;
    };
    UsergroupComponent.prototype.addUserToUserGroup = function (searchTerm) {
        var user = this.searchResults.filter(function (el) {
            return el.username === searchTerm;
        })[0];
        this.search = "";
        this.usergroup.users.push(user);
    };
    UsergroupComponent.prototype.deleteUser = function (user) {
        this.usergroup.users = this.usergroup.users.filter(function (el) {
            return el._id !== user._id;
        });
    };
    /*Auto complete methods end */
    UsergroupComponent.prototype.delete = function () {
        var _this = this;
        this.usergroupService.deleteUserGroup(this.usergroup["_id"]).subscribe(function (data) {
            var toast = {
                type: 'success',
                title: 'Success',
                body: 'Usergroup deleted successfully.',
                showCloseButton: true
            };
            _this.toasterService.pop(toast);
            _this.isList = true;
            _this.getAllUserGroups();
        });
    };
    UsergroupComponent.prototype.update = function () {
        var _this = this;
        this.usergroupService.updateUserGroup(this.usergroup).subscribe(function (data) {
            var toast = {
                type: 'success',
                title: 'Success',
                body: 'Usergroup updated successfully.',
                showCloseButton: true
            };
            _this.toasterService.pop(toast);
            _this.isList = true;
            _this.getAllUserGroups();
        });
    };
    UsergroupComponent.prototype.cancel = function () {
        this.isList = true;
    };
    UsergroupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-usergroup',
            template: __webpack_require__(/*! ./usergroup.component.html */ "./src/app/components/user/usergroup/usergroup.component.html"),
            styles: [__webpack_require__(/*! ./usergroup.component.css */ "./src/app/components/user/usergroup/usergroup.component.css")]
        }),
        __metadata("design:paramtypes", [_services_common_privillages__WEBPACK_IMPORTED_MODULE_1__["Privillages"],
            _services_user_usergroup_service__WEBPACK_IMPORTED_MODULE_2__["UsergroupService"],
            _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_4__["ToasterService"]])
    ], UsergroupComponent);
    return UsergroupComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_common_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/common/auth.service */ "./src/app/services/common/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.authService.loggedIn() && state.url !== "/") {
            return true;
        }
        else if (this.authService.loggedIn() && state.url === "/") {
            this.router.navigate(['home']);
            return true;
        }
        else if (!this.authService.loggedIn() && state.url !== "/") {
            this.router.navigate(['/']);
            return false;
        }
        else if (state.url === "/") {
            return true;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_common_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/common/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/common/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _privillages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./privillages */ "./src/app/services/common/privillages.ts");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(http, pri) {
        var _this = this;
        this.http = http;
        this.pri = pri;
        this.isDev = false;
        if (this.getUser() !== null && this.getUser() !== undefined) {
            this.getUserPrivillages().subscribe(function (data) {
                _this.privillages = data["privillages"];
            });
        }
    }
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
        var url = this.prepEndpoint('login/authenticate');
        return this.http.post(url, user, { headers: headers });
    };
    AuthService.prototype.storeUserData = function (token, user, privillages) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', (typeof (user) === "string") ? user : JSON.stringify(user));
        this.authToken = token;
        this.user = user;
        this.privillages = privillages;
    };
    AuthService.prototype.loggedIn = function () {
        this.loadToken();
        return Object(angular2_jwt__WEBPACK_IMPORTED_MODULE_2__["tokenNotExpired"])(null, this.authToken);
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.checkPrivilege = function (routename) {
        if (this.privillages.indexOf(routename) > -1)
            return true;
    };
    AuthService.prototype.getUserPrivillages = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.getToken()
        });
        var url = this.prepEndpoint('login/privillages/' + this.getUser().id);
        return this.http.get(url, { headers: headers });
    };
    AuthService.prototype.forgotPassword = function (username) {
        var user = {
            "username": username
        };
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
        var url = this.prepEndpoint('login/forgotPassword');
        return this.http.post(url, user, { headers: headers });
    };
    AuthService.prototype.hasPrevillage = function (homeroute) {
        var privi = this.privillages;
        var routes = this.pri.getPrivillages().filter(function (el) {
            return el.group === homeroute;
        });
        var count = routes.filter(function (el) {
            return privi.indexOf(el.name) > -1;
        }).length;
        return count > 0;
    };
    AuthService.prototype.getUser = function () {
        return JSON.parse(localStorage.getItem('user'));
    };
    AuthService.prototype.getSideMenuPage = function (route) {
        var routes = this.pri.getPrivillages().filter(function (el) {
            return el.group === route;
        });
        var pr = underscore__WEBPACK_IMPORTED_MODULE_4__["_"].sortBy(routes, 'order');
        var privi = this.privillages;
        var menu = pr.filter(function (el) {
            return privi.indexOf(el.name) > -1;
        })[0];
        this.storeRoute(route);
        return menu;
    };
    AuthService.prototype.storeRoute = function (route) {
        localStorage.setItem('current_route', route);
    };
    AuthService.prototype.isRouteDisplay = function (route) {
        if (route === localStorage.getItem('current_route')) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService.prototype.prepEndpoint = function (ep) {
        if (!this.isDev) {
            return ep;
        }
        else {
            return 'https://localhost:4200/' + ep;
        }
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _privillages__WEBPACK_IMPORTED_MODULE_3__["Privillages"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/common/privillages.ts":
/*!************************************************!*\
  !*** ./src/app/services/common/privillages.ts ***!
  \************************************************/
/*! exports provided: Privillages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Privillages", function() { return Privillages; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Privillages = /** @class */ (function () {
    function Privillages() {
    }
    Privillages.prototype.getPrivillages = function () {
        return [
            { "name": "usergroup", "set": false, "group": "user", "order": 1 },
            { "name": "user", "set": false, "group": "user", "order": 0 },
            { "name": "home", "set": false, "group": "home", "order": 0 },
            { "name": "machine", "set": false, "group": "machine", "order": 0 },
            { "name": "reasons", "set": false, "group": "machine", "order": 4 },
            { "name": "line", "set": false, "group": "machine", "order": 3 },
            { "name": "area", "set": false, "group": "machine", "order": 2 },
            { "name": "machinegroup", "set": false, "group": "machine", "order": 1 },
            { "name": "settings", "set": false, "group": "settings", "order": 1 },
            { "name": "import", "set": false, "group": "settings", "order": 2 },
            { "name": "document", "set": false, "group": "machine", "order": 5 },
            { "name": "part", "set": false, "group": "machine", "order": 6 },
            { "name": "steps", "set": false, "group": "machine", "order": 7 },
            { "name": "template", "set": false, "group": "machine", "order": 8 },
        ];
    };
    Privillages = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], Privillages);
    return Privillages;
}());



/***/ }),

/***/ "./src/app/services/home/maintenance.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/home/maintenance.service.ts ***!
  \******************************************************/
/*! exports provided: MaintenanceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceService", function() { return MaintenanceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _common_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/auth.service */ "./src/app/services/common/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MaintenanceService = /** @class */ (function () {
    function MaintenanceService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    MaintenanceService.prototype.updateMaintenance = function (rMaintenance) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        var url = this.authService.prepEndpoint('maintenance/update/');
        url = url + ("" + rMaintenance._id);
        return this.http.put(url, rMaintenance, { headers: headers });
    };
    MaintenanceService.prototype.getRMaintenanceByMachineId = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        var url = this.authService.prepEndpoint('maintenance/machine/');
        return this.http.get(url + id, { headers: headers });
    };
    MaintenanceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _common_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], MaintenanceService);
    return MaintenanceService;
}());



/***/ }),

/***/ "./src/app/services/machine/area.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/machine/area.service.ts ***!
  \**************************************************/
/*! exports provided: AreaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaService", function() { return AreaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _common_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/auth.service */ "./src/app/services/common/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AreaService = /** @class */ (function () {
    function AreaService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    AreaService.prototype.addArea = function (area) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        var url = this.authService.prepEndpoint('area/create');
        return this.http.post(url, area, { headers: headers });
    };
    AreaService.prototype.updateArea = function (area) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        var url = this.authService.prepEndpoint('area/update/');
        url = url + ("" + area._id);
        return this.http.put(url, area, { headers: headers });
    };
    AreaService.prototype.deleteArea = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        var url = this.authService.prepEndpoint('area/delete/');
        return this.http.delete(url + id, { headers: headers });
    };
    AreaService.prototype.getAreas = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        var url = this.authService.prepEndpoint('area/all/');
        return this.http.get(url, { headers: headers });
    };
    AreaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _common_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AreaService);
    return AreaService;
}());



/***/ }),

/***/ "./src/app/services/machine/document.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/machine/document.service.ts ***!
  \******************************************************/
/*! exports provided: DocumentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentService", function() { return DocumentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _common_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/auth.service */ "./src/app/services/common/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DocumentService = /** @class */ (function () {
    function DocumentService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    DocumentService.prototype.addDocument = function (document) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        var url = this.authService.prepEndpoint('document/create');
        return this.http.post(url, document, { headers: headers });
    };
    DocumentService.prototype.updateDocument = function (document) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        var url = this.authService.prepEndpoint('document/update/');
        url = url + ("" + document._id);
        return this.http.put(url, document, { headers: headers });
    };
    DocumentService.prototype.deleteDocument = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        var url = this.authService.prepEndpoint('document/delete/');
        return this.http.delete(url + id, { headers: headers });
    };
    DocumentService.prototype.getDocuments = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        var url = this.authService.prepEndpoint('document/all/');
        return this.http.get(url, { headers: headers });
    };
    DocumentService.prototype.getDocumentName = function (searchTerm) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        var url = this.authService.prepEndpoint('document/get/');
        return this.http.get(url + searchTerm, { headers: headers });
    };
    DocumentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _common_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], DocumentService);
    return DocumentService;
}());



/***/ }),

/***/ "./src/app/services/machine/line.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/machine/line.service.ts ***!
  \**************************************************/
/*! exports provided: LineService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineService", function() { return LineService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _common_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/auth.service */ "./src/app/services/common/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LineService = /** @class */ (function () {
    function LineService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    LineService.prototype.addLine = function (line) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        var url = this.authService.prepEndpoint('line/create');
        return this.http.post(url, line, { headers: headers });
    };
    LineService.prototype.updateLine = function (line) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        var url = this.authService.prepEndpoint('line/update/');
        url = url + ("" + line._id);
        return this.http.put(url, line, { headers: headers });
    };
    LineService.prototype.deleteLine = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        var url = this.authService.prepEndpoint('line/delete/');
        return this.http.delete(url + id, { headers: headers });
    };
    LineService.prototype.getLines = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        var url = this.authService.prepEndpoint('line/all/');
        return this.http.get(url, { headers: headers });
    };
    LineService.prototype.getLineName = function (searchTerm) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        var url = this.authService.prepEndpoint('line/get/');
        return this.http.get(url + searchTerm, { headers: headers });
    };
    LineService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _common_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], LineService);
    return LineService;
}());



/***/ }),

/***/ "./src/app/services/machine/machine.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/machine/machine.service.ts ***!
  \*****************************************************/
/*! exports provided: MachineService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachineService", function() { return MachineService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _common_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/auth.service */ "./src/app/services/common/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MachineService = /** @class */ (function () {
    function MachineService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    MachineService.prototype.addMachine = function (machine) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        var url = this.authService.prepEndpoint('machine/create');
        return this.http.post(url, machine, { headers: headers });
    };
    MachineService.prototype.updateMachine = function (machine) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        var url = this.authService.prepEndpoint('machine/update/');
        url = url + ("" + machine._id);
        return this.http.put(url, machine, { headers: headers });
    };
    MachineService.prototype.deleteMachine = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        var url = this.authService.prepEndpoint('machine/delete/');
        return this.http.delete(url + id, { headers: headers });
    };
    MachineService.prototype.getMachines = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        var url = this.authService.prepEndpoint('machine/all/');
        return this.http.get(url, { headers: headers });
    };
    MachineService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _common_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], MachineService);
    return MachineService;
}());



/***/ }),

/***/ "./src/app/services/machine/machinegroup.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/services/machine/machinegroup.service.ts ***!
  \**********************************************************/
/*! exports provided: MachinegroupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachinegroupService", function() { return MachinegroupService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _common_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/auth.service */ "./src/app/services/common/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MachinegroupService = /** @class */ (function () {
    function MachinegroupService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    MachinegroupService.prototype.addMachineGroup = function (machinegroup) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        var url = this.authService.prepEndpoint('machinegroup/create');
        return this.http.post(url, machinegroup, { headers: headers });
    };
    MachinegroupService.prototype.updateMachineGroup = function (machinegroup) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        var url = this.authService.prepEndpoint('machinegroup/update/');
        url = url + ("" + machinegroup._id);
        return this.http.put(url, machinegroup, { headers: headers });
    };
    MachinegroupService.prototype.deleteMachineGroup = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        var url = this.authService.prepEndpoint('machinegroup/delete/');
        return this.http.delete(url + id, { headers: headers });
    };
    MachinegroupService.prototype.getMachineGroups = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        var url = this.authService.prepEndpoint('machinegroup/all');
        return this.http.get(url, { headers: headers });
    };
    MachinegroupService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _common_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], MachinegroupService);
    return MachinegroupService;
}());



/***/ }),

/***/ "./src/app/services/machine/part.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/machine/part.service.ts ***!
  \**************************************************/
/*! exports provided: PartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartService", function() { return PartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _common_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/auth.service */ "./src/app/services/common/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PartService = /** @class */ (function () {
    function PartService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    PartService.prototype.addPart = function (part) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        var url = this.authService.prepEndpoint('part/create');
        return this.http.post(url, part, { headers: headers });
    };
    PartService.prototype.updatePart = function (part) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        var url = this.authService.prepEndpoint('part/update/');
        url = url + ("" + part._id);
        return this.http.put(url, part, { headers: headers });
    };
    PartService.prototype.deletePart = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        var url = this.authService.prepEndpoint('part/delete/');
        return this.http.delete(url + id, { headers: headers });
    };
    PartService.prototype.getParts = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        var url = this.authService.prepEndpoint('part/all/');
        return this.http.get(url, { headers: headers });
    };
    PartService.prototype.getPartName = function (searchTerm) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        var url = this.authService.prepEndpoint('part/get/');
        return this.http.get(url + searchTerm, { headers: headers });
    };
    PartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _common_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], PartService);
    return PartService;
}());



/***/ }),

/***/ "./src/app/services/machine/reason.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/machine/reason.service.ts ***!
  \****************************************************/
/*! exports provided: ReasonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReasonService", function() { return ReasonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _common_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/auth.service */ "./src/app/services/common/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReasonService = /** @class */ (function () {
    function ReasonService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    ReasonService.prototype.addReason = function (reason) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        var url = this.authService.prepEndpoint('reason/create');
        return this.http.post(url, reason, { headers: headers });
    };
    ReasonService.prototype.updateReason = function (reason) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        var url = this.authService.prepEndpoint('reason/update/');
        url = url + ("" + reason._id);
        return this.http.put(url, reason, { headers: headers });
    };
    ReasonService.prototype.deleteReason = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        var url = this.authService.prepEndpoint('reason/delete/');
        return this.http.delete(url + id, { headers: headers });
    };
    ReasonService.prototype.getAllReasons = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        var url = this.authService.prepEndpoint('reason/all/');
        return this.http.get(url, { headers: headers });
    };
    ReasonService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _common_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], ReasonService);
    return ReasonService;
}());



/***/ }),

/***/ "./src/app/services/machine/stepgroup.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/machine/stepgroup.service.ts ***!
  \*******************************************************/
/*! exports provided: StepgroupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepgroupService", function() { return StepgroupService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _common_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/auth.service */ "./src/app/services/common/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StepgroupService = /** @class */ (function () {
    function StepgroupService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    StepgroupService.prototype.addStepgroup = function (stepgroup) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        var url = this.authService.prepEndpoint('stepgroup/create');
        return this.http.post(url, stepgroup, { headers: headers });
    };
    StepgroupService.prototype.updateStepgroup = function (stepgroup) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        var url = this.authService.prepEndpoint('stepgroup/update/');
        url = url + ("" + stepgroup._id);
        return this.http.put(url, stepgroup, { headers: headers });
    };
    StepgroupService.prototype.getStepGroupName = function (searchTerm) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        var url = this.authService.prepEndpoint('stepgroup/get/');
        return this.http.get(url + searchTerm, { headers: headers });
    };
    StepgroupService.prototype.deleteStepgroup = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        var url = this.authService.prepEndpoint('stepgroup/delete/');
        return this.http.delete(url + id, { headers: headers });
    };
    StepgroupService.prototype.getAllStepgroups = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        var url = this.authService.prepEndpoint('stepgroup/all');
        return this.http.get(url, { headers: headers });
    };
    StepgroupService.prototype.addStep = function (step) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        var url = this.authService.prepEndpoint('step/create');
        return this.http.post(url, step, { headers: headers });
    };
    StepgroupService.prototype.updateStep = function (step) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        var url = this.authService.prepEndpoint('step/update/');
        url = url + ("" + step._id);
        return this.http.put(url, step, { headers: headers });
    };
    StepgroupService.prototype.deleteStep = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        var url = this.authService.prepEndpoint('step/delete/');
        return this.http.delete(url + id, { headers: headers });
    };
    StepgroupService.prototype.getAllSteps = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        var url = this.authService.prepEndpoint('step/all');
        return this.http.get(url, { headers: headers });
    };
    StepgroupService.prototype.getStepById = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        var url = this.authService.prepEndpoint('step/getById/');
        return this.http.get(url + id, { headers: headers });
    };
    StepgroupService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _common_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], StepgroupService);
    return StepgroupService;
}());



/***/ }),

/***/ "./src/app/services/machine/template.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/machine/template.service.ts ***!
  \******************************************************/
/*! exports provided: TemplateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateService", function() { return TemplateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _common_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/auth.service */ "./src/app/services/common/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TemplateService = /** @class */ (function () {
    function TemplateService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    TemplateService.prototype.addTemplate = function (template) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        var url = this.authService.prepEndpoint('template/create');
        return this.http.post(url, template, { headers: headers });
    };
    TemplateService.prototype.updateTemplate = function (template) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        var url = this.authService.prepEndpoint('template/update/');
        url = url + ("" + template._id);
        return this.http.put(url, template, { headers: headers });
    };
    TemplateService.prototype.deleteTemplate = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        var url = this.authService.prepEndpoint('template/delete/');
        return this.http.delete(url + id, { headers: headers });
    };
    TemplateService.prototype.getAllTemplates = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        var url = this.authService.prepEndpoint('template/all');
        return this.http.get(url, { headers: headers });
    };
    TemplateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _common_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], TemplateService);
    return TemplateService;
}());



/***/ }),

/***/ "./src/app/services/settings/import.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/settings/import.service.ts ***!
  \*****************************************************/
/*! exports provided: ImportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportService", function() { return ImportService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _common_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/auth.service */ "./src/app/services/common/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ImportService = /** @class */ (function () {
    function ImportService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    ImportService.prototype.createImport = function (importdata) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        var url = this.authService.prepEndpoint('import/create');
        return this.http.post(url, importdata, { headers: headers });
    };
    ImportService.prototype.getImportHistory = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        var url = this.authService.prepEndpoint('import/importHistory');
        return this.http.get(url, { headers: headers });
    };
    ImportService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _common_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], ImportService);
    return ImportService;
}());



/***/ }),

/***/ "./src/app/services/settings/setting.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/settings/setting.service.ts ***!
  \******************************************************/
/*! exports provided: SettingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingService", function() { return SettingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _common_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/auth.service */ "./src/app/services/common/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingService = /** @class */ (function () {
    function SettingService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    SettingService.prototype.getSettings = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        var url = this.authService.prepEndpoint('settings/all');
        return this.http.get(url, { headers: headers });
    };
    SettingService.prototype.updateSetting = function (setting) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        var url = this.authService.prepEndpoint('settings/update/');
        url = url + ("" + setting._id);
        return this.http.put(url, setting, { headers: headers });
    };
    SettingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _common_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], SettingService);
    return SettingService;
}());



/***/ }),

/***/ "./src/app/services/user/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/user/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _common_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/auth.service */ "./src/app/services/common/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    UserService.prototype.addUser = function (user) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        var url = this.authService.prepEndpoint('users/create');
        return this.http.post(url, user, { headers: headers });
    };
    UserService.prototype.updateUser = function (user) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        var url = this.authService.prepEndpoint('users/update/');
        url = url + ("" + user._id);
        return this.http.put(url, user, { headers: headers });
    };
    UserService.prototype.deleteUser = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        var url = this.authService.prepEndpoint('users/delete/');
        return this.http.delete(url + id, { headers: headers });
    };
    UserService.prototype.getUsers = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        var url = this.authService.prepEndpoint('users/all/');
        return this.http.get(url, { headers: headers });
    };
    UserService.prototype.getUserName = function (searchTerm) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        var url = this.authService.prepEndpoint('users/get/');
        return this.http.get(url + searchTerm, { headers: headers });
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _common_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/user/usergroup.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/user/usergroup.service.ts ***!
  \****************************************************/
/*! exports provided: UsergroupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsergroupService", function() { return UsergroupService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _common_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/auth.service */ "./src/app/services/common/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsergroupService = /** @class */ (function () {
    function UsergroupService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    UsergroupService.prototype.addUserGroup = function (usergroup) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        var url = this.authService.prepEndpoint('usergroups/create');
        return this.http.post(url, usergroup, { headers: headers });
    };
    UsergroupService.prototype.updateUserGroup = function (usergroup) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        var url = this.authService.prepEndpoint('usergroups/update/');
        url = url + ("" + usergroup._id);
        return this.http.put(url, usergroup, { headers: headers });
    };
    UsergroupService.prototype.deleteUserGroup = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        var url = this.authService.prepEndpoint('usergroups/delete/');
        return this.http.delete(url + id, { headers: headers });
    };
    UsergroupService.prototype.getUserGroups = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', this.authService.getToken());
        var url = this.authService.prepEndpoint('usergroups/all/');
        return this.http.get(url, { headers: headers });
    };
    UsergroupService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _common_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], UsergroupService);
    return UsergroupService;
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
    production: false
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

module.exports = __webpack_require__(/*! D:\Projects\CS5551_Team_4_Project\Code\client\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map