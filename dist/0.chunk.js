webpackJsonp([0],{

/***/ "../../../../../src/app/user-preference/user-preference-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_setting_user_setting_component__ = __webpack_require__("../../../../../src/app/user-preference/user-setting/user-setting.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPreferenceRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', redirectTo: 'aboutPeekNMake', pathMatch: 'full' },
    { path: 'aboutPeekNMake', component: __WEBPACK_IMPORTED_MODULE_2__user_setting_user_setting_component__["a" /* UserSettingComponent */] }
];
var UserPreferenceRoutingModule = (function () {
    function UserPreferenceRoutingModule() {
    }
    return UserPreferenceRoutingModule;
}());
UserPreferenceRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], UserPreferenceRoutingModule);

//# sourceMappingURL=/Users/bhabanidas/Work/foodX/src/user-preference-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/user-preference/user-preference.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_preference_routing_module__ = __webpack_require__("../../../../../src/app/user-preference/user-preference-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_setting_user_setting_component__ = __webpack_require__("../../../../../src/app/user-preference/user-setting/user-setting.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPreferenceModule", function() { return UserPreferenceModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UserPreferenceModule = (function () {
    function UserPreferenceModule() {
    }
    return UserPreferenceModule;
}());
UserPreferenceModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["h" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__user_preference_routing_module__["a" /* UserPreferenceRoutingModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__user_setting_user_setting_component__["a" /* UserSettingComponent */]]
    })
], UserPreferenceModule);

//# sourceMappingURL=/Users/bhabanidas/Work/foodX/src/user-preference.module.js.map

/***/ }),

/***/ "../../../../../src/app/user-preference/user-setting/user-setting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSettingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserSettingComponent = (function () {
    function UserSettingComponent() {
    }
    UserSettingComponent.prototype.ngOnInit = function () {
    };
    return UserSettingComponent;
}());
UserSettingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Component */])({
        selector: 'app-user-setting',
        template: "\n    <p>\n      user-setting Works!\n    </p>\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [])
], UserSettingComponent);

//# sourceMappingURL=/Users/bhabanidas/Work/foodX/src/user-setting.component.js.map

/***/ })

});
//# sourceMappingURL=0.chunk.js.map