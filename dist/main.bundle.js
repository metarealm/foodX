webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__frontpage_frontpage_component__ = __webpack_require__("../../../../../src/app/frontpage/frontpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__not_found_component__ = __webpack_require__("../../../../../src/app/not-found.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { MainviewareaComponent }    from './main/mainviewarea/mainviewarea.component';



var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__frontpage_frontpage_component__["a" /* FrontpageComponent */] },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_2__main_main_component__["a" /* MainComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_4__not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=C:/Users/maitreyee/Documents/CODE/foodX/src/app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n<!--<main-list></main-list>-->"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=C:/Users/maitreyee/Documents/CODE/foodX/src/app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_mdl_core__ = __webpack_require__("../../../../@angular-mdl/core/components/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__main_videos_list_videos_list_component__ = __webpack_require__("../../../../../src/app/main/videos-list/videos-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__main_videos_playlist_videos_playlist_component__ = __webpack_require__("../../../../../src/app/main/videos-playlist/videos-playlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__main_video_player_video_player_component__ = __webpack_require__("../../../../../src/app/main/video-player/video-player.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__main_filter_filter_component__ = __webpack_require__("../../../../../src/app/main/filter/filter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__main_solr_search_solr_search_component__ = __webpack_require__("../../../../../src/app/main/solr-search/solr-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_youtube_player__ = __webpack_require__("../../../../ng2-youtube-player/modules/ng2-youtube-player.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__not_found_component__ = __webpack_require__("../../../../../src/app/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_services_youtube_api_service__ = __webpack_require__("../../../../../src/app/shared/services/youtube-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_services_youtube_player_service__ = __webpack_require__("../../../../../src/app/shared/services/youtube-player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shared_services_playlist_store_service__ = __webpack_require__("../../../../../src/app/shared/services/playlist-store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__shared_services_notification_service__ = __webpack_require__("../../../../../src/app/shared/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_services_indexDataService__ = __webpack_require__("../../../../../src/app/shared/services/indexDataService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_services_facetService__ = __webpack_require__("../../../../../src/app/shared/services/facetService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__shared_pipes_video_duration_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/video-duration.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__shared_pipes_video_likes_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/video-likes.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__shared_pipes_video_views_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/video-views.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__shared_pipes_playlist_item_name_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/playlist-item-name.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__shared_directives_lazy_scroll_lazy_scroll_directive__ = __webpack_require__("../../../../../src/app/shared/directives/lazy-scroll/lazy-scroll.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__frontpage_frontpage_component__ = __webpack_require__("../../../../../src/app/frontpage/frontpage.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// Components









// Services






// Pipes






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_mdl_core__["a" /* MdlModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* JsonpModule */],
            __WEBPACK_IMPORTED_MODULE_15_ng2_youtube_player__["a" /* YoutubePlayerModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__main_main_component__["a" /* MainComponent */],
            __WEBPACK_IMPORTED_MODULE_10__main_videos_list_videos_list_component__["a" /* VideosListComponent */],
            __WEBPACK_IMPORTED_MODULE_12__main_video_player_video_player_component__["a" /* VideoPlayerComponent */],
            __WEBPACK_IMPORTED_MODULE_11__main_videos_playlist_videos_playlist_component__["a" /* VideosPlaylistComponent */],
            __WEBPACK_IMPORTED_MODULE_16__not_found_component__["a" /* PageNotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_9__main_main_component__["a" /* MainComponent */],
            __WEBPACK_IMPORTED_MODULE_23__shared_pipes_video_duration_pipe__["a" /* VideoDurationPipe */],
            __WEBPACK_IMPORTED_MODULE_24__shared_pipes_video_likes_pipe__["a" /* VideoLikesPipe */],
            __WEBPACK_IMPORTED_MODULE_25__shared_pipes_video_views_pipe__["a" /* VideoViewsPipe */],
            __WEBPACK_IMPORTED_MODULE_26__shared_pipes_playlist_item_name_pipe__["a" /* PlaylistItemNamePipe */],
            __WEBPACK_IMPORTED_MODULE_27__shared_directives_lazy_scroll_lazy_scroll_directive__["a" /* LazyScroll */],
            __WEBPACK_IMPORTED_MODULE_13__main_filter_filter_component__["a" /* FilterComponent */],
            __WEBPACK_IMPORTED_MODULE_14__main_solr_search_solr_search_component__["a" /* SolrSearchComponent */],
            __WEBPACK_IMPORTED_MODULE_28__frontpage_frontpage_component__["a" /* FrontpageComponent */]
        ],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_17__shared_services_youtube_api_service__["a" /* YoutubeApiService */],
            __WEBPACK_IMPORTED_MODULE_18__shared_services_youtube_player_service__["a" /* YoutubePlayerService */],
            __WEBPACK_IMPORTED_MODULE_19__shared_services_playlist_store_service__["a" /* PlaylistStoreService */],
            __WEBPACK_IMPORTED_MODULE_20__shared_services_notification_service__["a" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_21__shared_services_indexDataService__["a" /* IndexDataService */],
            __WEBPACK_IMPORTED_MODULE_22__shared_services_facetService__["a" /* FacetService */],
        ]
    })
], AppModule);

//# sourceMappingURL=C:/Users/maitreyee/Documents/CODE/foodX/src/app.module.js.map

/***/ }),

/***/ "../../../../../src/app/frontpage/frontpage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans);", ""]);

// module
exports.push([module.i, "body{\r\n  background: #f2f2f2;\r\n  font-family: 'Open Sans', sans-serif;\r\n}\r\n\r\n.search {\r\n  width: 100%;\r\n  position: relative\r\n}\r\n\r\n.searchTerm {\r\n  float: left;\r\n  width: 100%;\r\n  border: 3px solid #00B4CC;\r\n  padding: 5px;\r\n  height: 20px;\r\n  border-radius: 5px;\r\n  outline: none;\r\n  color: #9DBFAF;\r\n}\r\n\r\n.searchTerm:focus{\r\n  color: #00B4CC;\r\n}\r\n\r\n.searchButton {\r\n  position: absolute;  \r\n  right: -50px;\r\n  width: 40px;\r\n  height: 36px;\r\n  border: 1px solid #00B4CC;\r\n  background: #00B4CC;\r\n  text-align: center;\r\n  color: #fff;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n  font-size: 20px;\r\n}\r\n\r\n/*Resize the wrap to see the search bar change!*/\r\n.wrap{\r\n  width: 30%;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/frontpage/frontpage.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<md-input-container>\n  <input mdInput placeholder=\"State\" [mdAutocomplete]=\"auto\" [formControl]=\"stateCtrl\">\n</md-input-container>\n\n<md-autocomplete #auto=\"mdAutocomplete\">\n  <md-option *ngFor=\"let state of filteredStates | async\" [value]=\"state\">\n    {{ state }}\n  </md-option>\n</md-autocomplete>\n\n  <md-input-container class=\"example-full-width\">\n    <input mdInput placeholder=\"recipe \" type=\"search\" value=\"Google\">\n  </md-input-container>-->\n\n  <div class=\"wrap\">\n   <div class=\"search\">\n      <input type=\"text\" class=\"searchTerm\" placeholder=\"search your recipe\">\n      <button type=\"submit\" class=\"searchButton\">\n        <i class=\"material-icons\">search</i>\n     </button>\n   </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/frontpage/frontpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FrontpageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FrontpageComponent = (function () {
    function FrontpageComponent() {
        var _this = this;
        this.searchtype = [
            'ingredients',
            'recipe titles'
        ];
        this.stateCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
        this.filteredStates = this.stateCtrl.valueChanges
            .startWith(null)
            .map(function (name) { return _this.filterStates(name); });
    }
    FrontpageComponent.prototype.filterStates = function (val) {
        return val ? this.searchtype.filter(function (s) { return s.toLowerCase().indexOf(val.toLowerCase()) === 0; })
            : this.searchtype;
    };
    return FrontpageComponent;
}());
FrontpageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-frontpage',
        template: __webpack_require__("../../../../../src/app/frontpage/frontpage.component.html"),
        styles: [__webpack_require__("../../../../../src/app/frontpage/frontpage.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FrontpageComponent);

//# sourceMappingURL=C:/Users/maitreyee/Documents/CODE/foodX/src/frontpage.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/filter/filter.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".filterlist {\r\n  height: calc(100% - 113px);\r\n  width: 0.5%;\r\n  max-width: 20px;\r\n  position: fixed;\r\n  top: 100px;\r\n  /*background-color: rgba(204, 204, 204, 1);*/\r\n  overflow-x: hidden;\r\n  transition: 0.1s;\r\n  box-shadow: -2px 2px 2px 0 rgba(0, 0, 0, .14), -2px 3px 1px -2px rgba(0, 0, 0, .2), -2px 1px 5px 0 rgba(0, 0, 0, .12);\r\n  -webkit-touch-callout: none;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\na{\r\n  color: black;\r\n}\r\n.filterlist.opened {\r\n  width: 20%;\r\n  max-width: 20%;\r\n  z-index: 993;\r\n  height: calc(100% - 114px);\r\n  box-shadow: none;\r\n}\r\n\r\n\r\n.behclick-panel  .list-group {\r\n  margin-bottom: 0px;\r\n}\r\n.behclick-panel .list-group-item:first-child {\r\nborder-top-left-radius:0px;\r\nborder-top-right-radius:0px;\r\n}\r\n.behclick-panel .list-group-item {\r\nborder-right:0px;\r\nborder-left:0px;\r\n}\r\n.behclick-panel .list-group-item:last-child{\r\nborder-bottom-right-radius:0px;\r\nborder-bottom-left-radius:0px;\r\n}\r\n.behclick-panel .list-group-item {\r\npadding: 5px;\r\n}\r\n.behclick-panel .panel-heading {\r\n/* \t\t\t\tpadding: 10px 15px;\r\n                      border-bottom: 1px solid transparent; */\r\nborder-top-right-radius: 0px;\r\nborder-top-left-radius: 0px;\r\nborder-bottom: 1px solid darkslategrey;\r\n}\r\n.behclick-panel .panel-heading:last-child{\r\n/* border-bottom: 0px; */\r\n}\r\n.behclick-panel {\r\nborder-radius: 0px;\r\nborder-right: 0px;\r\nborder-left: 0px;\r\nborder-bottom: 0px;\r\nbox-shadow: 0 0px 0px rgba(0, 0, 0, 0);\r\n}\r\n.behclick-panel .radio, .checkbox {\r\nmargin: 0px;\r\npadding-left: 10px;\r\n}\r\n.behclick-panel .panel-title > a, .panel-title > small, .panel-title > .small, .panel-title > small > a, .panel-title > .small > a {\r\noutline: none;\r\n}\r\n.behclick-panel .panel-body > .panel-heading{\r\npadding:10px 10px;\r\n}\r\n.behclick-panel .panel-body {\r\npadding: 0px;\r\n}\r\n/* unvisited link */\r\n.behclick-panel a:link {\r\n  text-decoration:none;\r\n}\r\n\r\n/* visited link */\r\n.behclick-panel a:visited {\r\n  text-decoration:none;\r\n}\r\n\r\n/* mouse over link */\r\n.behclick-panel a:hover {\r\n  text-decoration:none;\r\n}\r\n\r\n/* selected link */\r\n.behclick-panel a:active {\r\n  text-decoration:none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/filter/filter.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid filterlist\" [ngClass]=\"{'opened': filterlistToggle}\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xs-6 col-sm-3\">\r\n\t\t\t<div id=\"accordion\" class=\"panel panel-primary behclick-panel\">\r\n\t\t\t\t<div class=\"panel-body\">\r\n\r\n\r\n\t\t\t\t\t<div class=\"panel-heading \">\r\n\t\t\t\t\t\t<h4 class=\"panel-title\">\r\n\t\t\t\t\t\t\t<a data-toggle=\"collapse\" href=\"#collapse0\">\r\n\t\t\t\t\t\t\t\t<i class=\"indicator fa fa-caret-down\" aria-hidden=\"true\"></i> Type(veg-nonveg)\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</h4>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div id=\"collapse0\" class=\"panel-collapse collapse in\">\r\n\t\t\t\t\t\t<ul class=\"list-group\">\r\n\t\t\t\t\t\t\t<li class=\"list-group-item\" *ngFor=\"let facet of  contenttypefacets\">\r\n\t\t\t\t\t\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" value=\"\">\r\n\t\t\t\t\t\t\t\t\t\t{{facet.val}}-({{facet.count}})\r\n\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t<div class=\"panel-heading \">\r\n\t\t\t\t\t\t<h4 class=\"panel-title\">\r\n\t\t\t\t\t\t\t<a data-toggle=\"collapse\" href=\"#collapse0\">\r\n\t\t\t\t\t\t\t\t<i class=\"indicator fa fa-caret-down\" aria-hidden=\"true\"></i> ingredients\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</h4>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div id=\"collapse0\" class=\"panel-collapse collapse in\">\r\n\t\t\t\t\t\t<ul class=\"list-group\">\r\n\t\t\t\t\t\t\t<li class=\"list-group-item\" *ngFor=\"let facet of  ingredientfacets\">\r\n\t\t\t\t\t\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" value=\"\">\r\n\t\t\t\t\t\t\t\t\t\t{{facet.val}}-({{facet.count}})\r\n\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\r\n\r\n\r\n\t\t\t\t\t<div class=\"panel-heading \">\r\n\t\t\t\t\t\t<h4 class=\"panel-title\">\r\n\t\t\t\t\t\t\t<a data-toggle=\"collapse\" href=\"#collapse0\">\r\n\t\t\t\t\t\t\t\t<i class=\"indicator fa fa-caret-down\" aria-hidden=\"true\"></i> recipie country\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</h4>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div id=\"collapse0\" class=\"panel-collapse collapse in\">\r\n\t\t\t\t\t\t<ul class=\"list-group\">\r\n\t\t\t\t\t\t\t<li class=\"list-group-item\" *ngFor=\"let facet of  locationfacets\">\r\n\t\t\t\t\t\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" value=\"\">\r\n\t\t\t\t\t\t\t\t\t\t{{facet.val}}-({{facet.count}})\r\n\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t<div class=\"panel-heading \">\r\n\t\t\t\t\t\t<h4 class=\"panel-title\">\r\n\t\t\t\t\t\t\t<a data-toggle=\"collapse\" href=\"#collapse0\">\r\n\t\t\t\t\t\t\t\t<i class=\"indicator fa fa-caret-down\" aria-hidden=\"true\"></i> likes\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</h4>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div id=\"collapse0\" class=\"panel-collapse collapse in\">\r\n\t\t\t\t\t\t<ul class=\"list-group\">\r\n\t\t\t\t\t\t\t<li class=\"list-group-item\" *ngFor=\"let facet of  likefacets\">\r\n\t\t\t\t\t\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" value=\"\">\r\n\t\t\t\t\t\t\t\t\t\t{{facet.val}}-{{facet.val+200}}({{facet.count}})\r\n\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/main/filter/filter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_indexDataService__ = __webpack_require__("../../../../../src/app/shared/services/indexDataService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_facetService__ = __webpack_require__("../../../../../src/app/shared/services/facetService.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FilterComponent = (function () {
    function FilterComponent(dataService) {
        var _this = this;
        this.dataService = dataService;
        this.subscription = this.dataService.facet$.subscribe(function (message) {
            console.log(' facet data ');
            console.log(message['likes']['buckets']);
            _this.likefacets = message['likes']['buckets'];
            _this.locationfacets = message['Recipelocation']['buckets'];
            _this.ingredientfacets = message['Ingredients']['buckets'];
            _this.contenttypefacets = message['contenttype']['buckets'];
        });
    }
    FilterComponent.prototype.getFilterVideos = function () {
    };
    FilterComponent.prototype.ngOnInit = function () {
        this.getFilterVideos();
    };
    FilterComponent.prototype.onSelect = function (video) {
        this.selectedVideo = video;
    };
    return FilterComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", Object)
], FilterComponent.prototype, "filterlistToggle", void 0);
FilterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'filters',
        template: __webpack_require__("../../../../../src/app/main/filter/filter.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/filter/filter.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_indexDataService__["a" /* IndexDataService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_facetService__["a" /* FacetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_facetService__["a" /* FacetService */]) === "function" && _a || Object])
], FilterComponent);

var _a;
//# sourceMappingURL=C:/Users/maitreyee/Documents/CODE/foodX/src/filter.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".loader-video {\r\n  top: calc(50% - 35px);\r\n  left: calc(50% - 16px);\r\n}\r\n\r\n.mdl-layout__header {\r\n  height: 75px;\r\n  width : 100%;\r\n  /*background-color: rgb(204, 204, 204);*/\r\n}\r\n\r\n.mdl-layout__tab-bar{\r\n  height: 75%;\r\n  vertical-align : text-top;\r\n}\r\n.mdl-layout__tab{\r\n  height: 99%;\r\n    font-size: 10px;\r\n}\r\n\r\n.mdl-layout__content {\r\n  width: 97%;\r\n  margin-left: 3%;\r\n  margin-top: 1%;\r\n}\r\n\r\n.mdl-layout__header-row {\r\n  width : 100%;\r\n  /*padding: 0 40px 0 16px;*/\r\n}\r\n\r\n.mdl-layout__drawer-button {\r\n\r\n  left: inherit;\r\n}\r\n\r\n.mdl-layout__content_moved {\r\n  width: 80%;\r\n  margin-left: 20%;\r\n}\r\n\r\n.blur-main-playlist-opened {\r\n  opacity: 0.4;\r\n  transition: all 0.3s ease;\r\n  -moz-transition: all 0.3s ease;\r\n  -ms-transition: all 0.3s ease;\r\n  -webkit-transition: all 0.3s ease;\r\n  -o-transition: all 0.3s ease;\r\n}\r\n\r\n.mdl-js-snackbar {\r\n  bottom: 0;\r\n  z-index: 999;\r\n  right: 0;\r\n  left: 78%;\r\n  background-color: rgba(196, 48, 43, 0.85);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-layout mdl-layout--fixed-header mdl-layout--fixed-tabs\">\r\n  <header class=\"mdl-layout__header\">\r\n\r\n    <div class=\"mdl-layout__header-row\">\r\n      <div class=\"mdl-layout-title\" style=\"width: 15%;\">\r\n        <!--img src=\"assets/logo.png\" style=\"height: 35px;\"-->\r\n      </div>\r\n      <nav class=\"mdl-navigation\" style=\"width: 100%;\">\r\n        <solr-search #search (videosUpdated)=\"handleSearchVideo($event)\" [loadingInProgress]=\"loadingInProgress\" style=\"width: 100%;\"></solr-search>\r\n      </nav>\r\n    </div>\r\n\r\n    <!--<nav class=\"mdl-layout__tab-bar mdl-js-ripple-effect\">\r\n      <a class=\"mdl-layout__tab is-active\" routerLink=\"/video\" routerLinkActive=\"active\"> video </a>\r\n      <a class=\"mdl-layout__tab\" routerLink=\"/audio\" routerLinkActive=\"active\">audio</a>\r\n    </nav>-->\r\n\r\n  </header>\r\n\r\n  <div aria-expanded=\"false\" role=\"button\" tabindex=\"0\" class=\"mdl-layout__drawer-button\" (click)=\"toggleFilter()\">\r\n    <i class=\"material-icons\"></i>\r\n  </div>\r\n\r\n  <!-- <videos-playlist [repeat]=\"repeat\" [shuffle]=\"shuffle\" [playlistToggle]=\"playlistToggle\" [playlistNames]=\"playlistNames\" [videoPlaylist]=\"videoPlaylist\"></videos-playlist> -->\r\n  <filters [filterlistToggle]=\"filterToggle\"></filters>\r\n\r\n  <!--<router-outlet></router-outlet>-->\r\n\r\n  <main class=\"mdl-layout__content\" LazyScroll (OnScrollMethod)=\"searchMore()\" ScrollDistance=\"3\">\r\n    <div class=\"page-content\" [ngClass]=\"{'mdl-layout__content_moved': filterToggle}\">\r\n      <videos-list *ngIf=\"videoList.length\" class=\"mdl-grid\" (videoPlaylist)=\"checkAddToPlaylist($event)\" [videoList]=\"videoList\"\r\n        [loadingInProgress]=\"loadingInProgress\"></videos-list>\r\n      <div class=\"loader loader-video\" *ngIf=\"!videoList.length\">\r\n        <div class=\"loading\"></div>\r\n      </div>\r\n    </div>\r\n  </main>\r\n</div>\r\n\r\n<video-player #videoplayer (closePlaylist)=\"closePlaylist()\" (importPlaylist)=\"importPlaylist($event)\" (exportPlaylist)=\"exportPlaylist()\"\r\n  (clearPlaylist)=\"clearPlaylist()\" (playFirstInPlaylist)=\"playFirstInPlaylist()\" (repeatActive)=\"repeatActive($event)\" (shuffleActive)=\"shuffleActive($event)\"\r\n  (nextVideoEvent)=\"nextVideo($event)\" (prevVideoEvent)=\"prevVideo($event)\"></video-player>\r\n\r\n<div id=\"demo-toast-example\" class=\"mdl-js-snackbar mdl-snackbar\">\r\n  <div class=\"mdl-snackbar__text\"></div>\r\n  <button class=\"mdl-snackbar__action\" type=\"button\"></button>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__solr_search_solr_search_component__ = __webpack_require__("../../../../../src/app/main/solr-search/solr-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_youtube_api_service__ = __webpack_require__("../../../../../src/app/shared/services/youtube-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_youtube_player_service__ = __webpack_require__("../../../../../src/app/shared/services/youtube-player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_playlist_store_service__ = __webpack_require__("../../../../../src/app/shared/services/playlist-store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_notification_service__ = __webpack_require__("../../../../../src/app/shared/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_indexDataService__ = __webpack_require__("../../../../../src/app/shared/services/indexDataService.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MainComponent = (function () {
    function MainComponent(youtubeService, youtubePlayer, playlistService, notificationService, indexDataService) {
        this.youtubeService = youtubeService;
        this.youtubePlayer = youtubePlayer;
        this.playlistService = playlistService;
        this.notificationService = notificationService;
        this.indexDataService = indexDataService;
        this.videoList = [];
        this.videoPlaylist = [];
        this.loadingInProgress = false;
        this.playlistToggle = false;
        this.filterToggle = false;
        this.playlistNames = false;
        this.pageLoadingFinished = false;
        this.repeat = false;
        this.shuffle = false;
        this.videoPlaylist = this.playlistService.retrieveStorage().playlists;
    }
    MainComponent.prototype.AfterViewInit = function () {
        this.componentHandler.upgradeAllRegistered();
    };
    MainComponent.prototype.playFirstInPlaylist = function () {
        if (this.videoPlaylist[0])
            this.youtubePlayer.playVideo(this.videoPlaylist[0].id);
    };
    MainComponent.prototype.handleSearchVideo = function (videos) {
        this.videoList = videos;
        this.filterToggle = true;
        console.log(this.videoList);
    };
    MainComponent.prototype.checkAddToPlaylist = function (video) {
        var _this = this;
        if (!this.videoPlaylist.some(function (e) { return e.id === video.id; })) {
            this.videoPlaylist.push(video);
            this.playlistService.addToPlaylist(video);
            var inPlaylist_1 = this.videoPlaylist.length - 1;
            setTimeout(function () {
                try {
                    var topPos = document.getElementById(_this.videoPlaylist[inPlaylist_1].id).offsetTop;
                    var playlistEl = document.getElementById('playlist');
                    playlistEl.scrollTop = topPos - 100;
                }
                catch (exp) {
                    console.log("ignor this error until implementing the playlist");
                }
            });
        }
    };
    MainComponent.prototype.repeatActive = function (val) {
        this.repeat = val;
        this.shuffle = false;
    };
    MainComponent.prototype.shuffleActive = function (val) {
        this.shuffle = val;
        this.repeat = false;
    };
    MainComponent.prototype.togglePlaylist = function () {
        var _this = this;
        this.playlistToggle = !this.playlistToggle;
        setTimeout(function () {
            _this.playlistNames = !_this.playlistNames;
        }, 100);
    };
    MainComponent.prototype.toggleFilter = function () {
        this.filterToggle = !this.filterToggle;
    };
    MainComponent.prototype.searchMore = function () {
        var _this = this;
        if (this.loadingInProgress || this.pageLoadingFinished || this.videoList.length < 1)
            return;
        this.loadingInProgress = true;
        // this.indexDataService.searchNext({'test':'test'})
        this.solrSearch.search()
            .then(function (data) {
            _this.loadingInProgress = false;
            if (data.length < 1 || data.status === 400) {
                setTimeout(function () {
                    _this.pageLoadingFinished = true;
                    setTimeout(function () {
                        _this.pageLoadingFinished = false;
                    }, 10000);
                });
                return;
            }
            data.forEach(function (val) {
                _this.videoList.push(val);
            });
        }).catch(function (error) {
            _this.loadingInProgress = false;
        });
    };
    MainComponent.prototype.nextVideo = function () {
        var current = this.youtubePlayer.getCurrentVideo();
        var inPlaylist = undefined;
        this.videoPlaylist.forEach(function (video, index) {
            if (video.id === current) {
                inPlaylist = index;
            }
        });
        if (inPlaylist !== undefined) {
            var topPos = document.getElementById(this.videoPlaylist[inPlaylist].id).offsetTop;
            var playlistEl = document.getElementById('playlist');
            if (this.shuffle) {
                var shuffled = this.videoPlaylist[this.getShuffled(inPlaylist)].id;
                this.youtubePlayer.playVideo(shuffled);
                playlistEl.scrollTop = document.getElementById(shuffled).offsetTop - 100;
            }
            else {
                if (this.videoPlaylist.length - 1 === inPlaylist) {
                    this.youtubePlayer.playVideo(this.videoPlaylist[0].id);
                    playlistEl.scrollTop = 0;
                }
                else {
                    this.youtubePlayer.playVideo(this.videoPlaylist[inPlaylist + 1].id);
                    playlistEl.scrollTop = topPos - 100;
                }
            }
        }
    };
    MainComponent.prototype.prevVideo = function () {
        var current = this.youtubePlayer.getCurrentVideo();
        var inPlaylist = undefined;
        this.videoPlaylist.forEach(function (video, index) {
            if (video.id === current) {
                inPlaylist = index;
            }
        });
        if (inPlaylist !== undefined) {
            var topPos = document.getElementById(this.videoPlaylist[inPlaylist].id).offsetTop;
            var playlistEl = document.getElementById('playlist');
            if (this.shuffle) {
                var shuffled = this.videoPlaylist[this.getShuffled(inPlaylist)].id;
                this.youtubePlayer.playVideo(shuffled);
                playlistEl.scrollTop = document.getElementById(shuffled).offsetTop - 100;
            }
            else {
                if (inPlaylist === 0) {
                    this.youtubePlayer.playVideo(this.videoPlaylist[this.videoPlaylist.length - 1].id);
                    playlistEl.scrollTop = playlistEl.offsetHeight;
                }
                else {
                    this.youtubePlayer.playVideo(this.videoPlaylist[inPlaylist - 1].id);
                    playlistEl.scrollTop = topPos - 230;
                }
            }
        }
    };
    MainComponent.prototype.getShuffled = function (index) {
        var i = Math.floor(Math.random() * this.videoPlaylist.length);
        return i !== index ? i : this.getShuffled(index);
    };
    MainComponent.prototype.closePlaylist = function () {
        this.playlistToggle = false;
        this.playlistNames = false;
    };
    MainComponent.prototype.clearPlaylist = function () {
        this.videoPlaylist = [];
        this.playlistService.clearPlaylist();
        this.notificationService.showNotification("Playlist cleared.");
    };
    MainComponent.prototype.exportPlaylist = function () {
        if (this.videoPlaylist.length < 1) {
            this.notificationService.showNotification("Nothing to export.");
            return;
        }
        var data = JSON.stringify(this.videoPlaylist);
        var a = document.createElement("a");
        var file = new Blob([data], { type: "text/json" });
        a.href = URL.createObjectURL(file);
        a.download = "playlist.json";
        a.click();
        this.notificationService.showNotification("Playlist exported.");
    };
    MainComponent.prototype.importPlaylist = function (playlist) {
        this.videoPlaylist = playlist;
        this.playlistService.importPlaylist(this.videoPlaylist);
    };
    return MainComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__solr_search_solr_search_component__["a" /* SolrSearchComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__solr_search_solr_search_component__["a" /* SolrSearchComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__solr_search_solr_search_component__["a" /* SolrSearchComponent */]) === "function" && _a || Object)
], MainComponent.prototype, "solrSearch", void 0);
MainComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'main-list',
        template: __webpack_require__("../../../../../src/app/main/main.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/main.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_youtube_api_service__["a" /* YoutubeApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_youtube_api_service__["a" /* YoutubeApiService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_youtube_player_service__["a" /* YoutubePlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_youtube_player_service__["a" /* YoutubePlayerService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_playlist_store_service__["a" /* PlaylistStoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_playlist_store_service__["a" /* PlaylistStoreService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_services_notification_service__["a" /* NotificationService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__shared_services_indexDataService__["a" /* IndexDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_services_indexDataService__["a" /* IndexDataService */]) === "function" && _f || Object])
], MainComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=C:/Users/maitreyee/Documents/CODE/foodX/src/main.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/solr-search/solr-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input[type=text] {\r\n    width: 40%;\r\n    box-sizing: border-box;\r\n    border: 2px solid #ccc;\r\n    border-radius: 4px;\r\n    font-size: 16px;\r\n    background-color : blue;\r\n    background-position: 10px 10px; \r\n    background-repeat: no-repeat;\r\n    padding: 12px 20px 12px 40px;\r\n    transition: width 0.4s ease-in-out;\r\n}\r\n\r\ninput[type=text]:focus {\r\n    width: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/solr-search/solr-search.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"searchForm\" (ngSubmit)=\"doSearch($event)\">\r\n\r\n\r\n  <div class=\"mdl-textfield mdl-js-textfield\" style=\"width: 60%;\">\r\n    <input class=\"mdl-textfield__input\" (change)=\"selectedenvent()\" list=\"browsers\" #queryinput (keyup)=\"suggest(queryinput.value)\"\r\n      formControlName=\"query\" type=\"text\" id=\"query\" autocomplete=\"off\" />\r\n    <button type=\"submit\" class=\"mdl-button mdl-js-button mdl-button--icon\">\r\n\t\t<i class=\"material-icons\">search</i>\r\n    </button>\r\n    <datalist id=\"browsers\">\r\n    <!--<select>-->\r\n  <option *ngFor=\"let item of items\" value={{item}}></option>\r\n  <!--</select>-->\r\n    </datalist>\r\n  </div>\r\n\r\n</form>\r\n\r\n\r\n<!--<input list=\"browsers\" name=\"browser\">-->\r\n\r\n<!--<input #term (keyup)=\"search(term.value)\" />\r\n<ul>\r\n  <li *ngFor=\"let item of items | async\">{{item}}</li>\r\n  <li *ngFor=\"let item of items\">{{item}}</li>\r\n</ul>-->"

/***/ }),

/***/ "../../../../../src/app/main/solr-search/solr-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_youtube_player_service__ = __webpack_require__("../../../../../src/app/shared/services/youtube-player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_notification_service__ = __webpack_require__("../../../../../src/app/shared/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_indexDataService__ = __webpack_require__("../../../../../src/app/shared/services/indexDataService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_searchObject__ = __webpack_require__("../../../../../src/app/shared/searchObject.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_facetService__ = __webpack_require__("../../../../../src/app/shared/services/facetService.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SolrSearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SolrSearchComponent = (function () {
    function SolrSearchComponent(solrService, fb, youtubePlayer, notificationService, facetService) {
        var _this = this;
        this.solrService = solrService;
        this.fb = fb;
        this.youtubePlayer = youtubePlayer;
        this.notificationService = notificationService;
        this.facetService = facetService;
        this.videosUpdated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
        this.pagenum = 0;
        this.searObject = new __WEBPACK_IMPORTED_MODULE_5__shared_searchObject__["a" /* SearchObject */](0, 'indian');
        this.searchForm = this.fb.group({
            query: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]
        });
        this.search().then(function (data) { _this.videosUpdated.emit(data); });
    }
    SolrSearchComponent.prototype.suggest = function (term) {
        var _this = this;
        this.solrService.suggest(term).then(function (items) {
            _this.items = items;
        });
    };
    SolrSearchComponent.prototype.selectedenvent = function () {
        console.log(' selected event triggered');
    };
    SolrSearchComponent.prototype.doSearch = function () {
        var _this = this;
        if (this.loadingInProgress || (this.searchForm.value.query.trim().length === 0) ||
            (this.last_search && this.last_search === this.searchForm.value.query))
            return;
        this.videosUpdated.emit([]);
        this.last_search = this.searchForm.value.query;
        console.log(this.queryinput);
        this.queryinput.nativeElement.blur();
        // this.last_search = this.last_search + ' recipe';
        this.searObject.pageNum = 0;
        this.searObject.searchTerm = this.last_search;
        this.solrService.searchVideos(this.searObject)
            .then(function (data) {
            _this.pagenum = _this.pagenum + 1;
            if (data.length < 1)
                _this.notificationService.showNotification("No matches found.");
            _this.videosUpdated.emit(data);
        });
    };
    SolrSearchComponent.prototype.search = function () {
        var _this = this;
        this.searObject.pageNum = this.pagenum;
        return this.solrService.searchVideos(this.searObject)
            .then(function (data) {
            _this.pagenum = _this.pagenum + 1;
            if (data.length < 1)
                _this.notificationService.showNotification("No matches found.");
            return data;
        });
    };
    return SolrSearchComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* ViewChild */])('queryinput'),
    __metadata("design:type", Object)
], SolrSearchComponent.prototype, "queryinput", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Output */])(),
    __metadata("design:type", Object)
], SolrSearchComponent.prototype, "videosUpdated", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", Object)
], SolrSearchComponent.prototype, "loadingInProgress", void 0);
SolrSearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'solr-search',
        template: __webpack_require__("../../../../../src/app/main/solr-search/solr-search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/solr-search/solr-search.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_4__shared_services_indexDataService__["a" /* IndexDataService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_indexDataService__["a" /* IndexDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_indexDataService__["a" /* IndexDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_youtube_player_service__["a" /* YoutubePlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_youtube_player_service__["a" /* YoutubePlayerService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_notification_service__["a" /* NotificationService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__shared_services_facetService__["a" /* FacetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_services_facetService__["a" /* FacetService */]) === "function" && _e || Object])
], SolrSearchComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=C:/Users/maitreyee/Documents/CODE/foodX/src/solr-search.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/video-player/video-player.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-player-block {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 50px;\r\n  bottom: 0;\r\n  background-color: rgba(204, 204, 204, 1);\r\n  z-index: 992;\r\n}\r\n\r\n.player-containter {\r\n  transition: all 300ms ease-in-out;\r\n  width: 440px;\r\n  height: 250px;\r\n  position: fixed;\r\n  z-index: 992;\r\n  bottom: 16px;\r\n  right: 5px;\r\n  background-color: #000;\r\n  border: 3px solid rgba(79, 111, 144, 0.75);\r\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12);\r\n}\r\n\r\n.player-containter.minimized {\r\n  -webkit-transform: translate3d(-20%, 20%, 0) scale(0.6);\r\n          transform: translate3d(-20%, 20%, 0) scale(0.6);\r\n}\r\n\r\n.player-containter.super-minimized {\r\n  -webkit-transform: translate3d(-42.5%, 46.5%, 0) scale(0.15);\r\n          transform: translate3d(-42.5%, 46.5%, 0) scale(0.15);\r\n}\r\n\r\n.player-view-controls {\r\n  position: absolute;\r\n  color: white;\r\n  background-color: rgb(196, 48, 43);\r\n  top: -27px;\r\n  left: -3px;\r\n  font-size: 30px;\r\n  border-top-left-radius: 3px;\r\n  border-top-right-radius: 3px;\r\n}\r\n\r\n.player-view-controls i {\r\n  cursor: pointer;\r\n}\r\n\r\n.player-view-controls .minimize {\r\n  margin-left: -7px;\r\n}\r\n\r\n.player-controls-block {\r\n  margin-top: 5px;\r\n  text-align: center;\r\n  color: #fff;\r\n  -webkit-touch-callout: none;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n.mdl-button--icon.play {\r\n  width: 42px;\r\n  height: 42px;\r\n}\r\n\r\n.mdl-button--icon.play i {\r\n  -webkit-transform: translate(-20px, -12px);\r\n          transform: translate(-20px, -12px);\r\n  font-size: 40px;\r\n}\r\n\r\n.mdl-button--icon.prev {\r\n  width: 30px;\r\n  height: 30px;\r\n}\r\n\r\n.mdl-button--icon.prev i {\r\n  -webkit-transform: translate(-15px, -12px);\r\n          transform: translate(-15px, -12px);\r\n  font-size: 28px;\r\n}\r\n\r\n.mdl-button--icon.next {\r\n  width: 30px;\r\n  height: 30px;\r\n}\r\n\r\n.mdl-button--icon.next i {\r\n  -webkit-transform: translate(-14px, -12px);\r\n          transform: translate(-14px, -12px);\r\n  font-size: 28px;\r\n}\r\n\r\n.repeat-shuffle-block {\r\n  margin-left: 40px;\r\n  position: absolute;\r\n  top: 10px;\r\n}\r\n\r\n.repeat-shuffle-block button.active {\r\n  background-color: rgba(196, 48, 43, 0.85);\r\n}\r\n\r\n.mute-block {\r\n  margin-left: -80px;\r\n  position: absolute;\r\n  top: 10px;\r\n}\r\n\r\n.mute-block button.active {\r\n  background-color: rgba(196, 48, 43, 0.85);\r\n}\r\n\r\n.playlist-drop-button {\r\n  position: absolute;\r\n  color: #fff;\r\n  right: 12px;\r\n  top: 10px;\r\n}\r\n\r\n.main-yt-player-block {\r\n  position: relative;\r\n  text-align: center;\r\n  -webkit-touch-callout: none;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n.main-yt-player-block .material-icons {\r\n  position: absolute;\r\n  color: white;\r\n  font-size: 255px;\r\n  left: 0;\r\n  right: 0;\r\n  margin: 0 auto;\r\n  cursor: pointer;\r\n  display: none;\r\n  text-shadow: 2px 2px 2px #000;\r\n}\r\n\r\n.main-yt-player-block:hover .material-icons {\r\n  display: block;\r\n}\r\n\r\n.player-fullscreen {\r\n  bottom: 50px;\r\n  left: 0;\r\n  width: 95%;\r\n  height: calc(100% - 114px);\r\n  border: none;\r\n  box-shadow: none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/video-player/video-player.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-player-block\">\r\n  <div class=\"player-controls-block\">\r\n    <span class=\"mute-block\">\r\n\t\t\t<button id=\"fullscreen_tip\" class=\"mdl-button mdl-js-button mdl-button--icon\" [ngClass]=\"{'active': fullscreenActive}\" (click)=\"toggleFullscreen()\">\r\n\t\t\t\t<i class=\"material-icons\">fullscreen</i>\r\n\t\t\t</button>\r\n\t\t\t<div class=\"mdl-tooltip mdl-tooltip--top\" data-mdl-for=\"fullscreen_tip\">\r\n\t\t\t\tFullscreen\r\n\t\t\t</div>\r\n\t\t</span>\r\n    <button id=\"prev_tip\" class=\"mdl-button mdl-js-button mdl-button--icon prev\" (click)=\"prevVideo()\">\r\n\t\t\t<i class=\"material-icons\">skip_previous</i>\r\n\t\t</button>\r\n    <div class=\"mdl-tooltip mdl-tooltip--top\" data-mdl-for=\"prev_tip\">\r\n      Previous\r\n    </div>\r\n    <button class=\"mdl-button mdl-js-button mdl-button--icon play\" (click)=\"playPause('play')\" *ngIf=\"playingEvent === 'pause'\">\r\n\t\t\t<i class=\"material-icons\">play_circle_filled</i>\r\n\t\t</button>\r\n    <button class=\"mdl-button mdl-js-button mdl-button--icon play\" (click)=\"playPause('pause')\" *ngIf=\"playingEvent === 'play'\">\r\n\t\t\t<i class=\"material-icons\">pause_circle_filled</i>\r\n\t\t</button>\r\n    <button id=\"next_tip\" class=\"mdl-button mdl-js-button mdl-button--icon next\" (click)=\"nextVideo()\">\r\n\t\t\t<i class=\"material-icons\">skip_next</i>\r\n\t\t</button>\r\n    <div class=\"mdl-tooltip mdl-tooltip--top\" data-mdl-for=\"next_tip\">\r\n      Next\r\n    </div>\r\n    <span class=\"repeat-shuffle-block\">\r\n      <button id=\"repeat_tip\" class=\"mdl-button mdl-js-button mdl-button--icon\" [ngClass]=\"{'active': repeat}\" (click)=\"toggleRepeat()\">\r\n\t\t\t\t<i class=\"material-icons\">repeat_one</i>\r\n\t\t\t</button>\r\n\t\t\t<div class=\"mdl-tooltip mdl-tooltip--top\" data-mdl-for=\"repeat_tip\">\r\n\t\t\t\tRepeat one\r\n\t\t\t</div>\r\n      <button id=\"shuffle_tip\" class=\"mdl-button mdl-js-button mdl-button--icon\" [ngClass]=\"{'active': shuffle}\" (click)=\"toggleShuffle()\">\r\n\t\t\t\t<i class=\"material-icons\">shuffle</i>\r\n\t\t\t</button>\r\n\t\t\t<div class=\"mdl-tooltip mdl-tooltip--top\" data-mdl-for=\"shuffle_tip\">\r\n\t\t\t\tShuffle\r\n\t\t\t</div>\r\n    </span>\r\n  </div>\r\n  <div class=\"player-containter\" [ngClass]=\"{'minimized': minPlayer, 'super-minimized': superMinPlayer, 'player-fullscreen': fullscreenActive}\">\r\n    <div class=\"player-view-controls\">\r\n      <!-- <i class=\"material-icons\" *ngIf=\"!minPlayer && !superMinPlayer && !fullscreenActive\" (click)=\"togglePlayer()\">arrow_drop_down</i>\r\n      <i class=\"material-icons\" *ngIf=\"minPlayer && !superMinPlayer && !fullscreenActive\" (click)=\"togglePlayer()\">arrow_drop_up</i> -->\r\n      <i class=\"material-icons minimize\" *ngIf=\"!superMinPlayer && !fullscreenActive\" (click)=\"minimizePlayer()\">remove</i>\r\n    </div>\r\n    <div class=\"main-yt-player-block\">\r\n      <i class=\"material-icons\" *ngIf=\"superMinPlayer\" (click)=\"minimizePlayer()\">zoom_out_map</i>\r\n      <div id=\"yt-player\"></div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <!-- <button id=\"demo-menu-top-right\" class=\"mdl-button mdl-js-button mdl-button--icon playlist-drop-button\" (click)=\"openClosedPlaylist()\">\r\n    <i class=\"material-icons\">more_vert</i>\r\n  </button>\r\n\r\n  <ul class=\"mdl-menu mdl-menu--top-right mdl-js-menu\" data-mdl-for=\"demo-menu-top-right\">\r\n    <li class=\"mdl-menu__item\" (click)=\"exportPlaylistAction()\">Export playlist</li>\r\n    <li class=\"mdl-menu__item\" (click)=\"importPlaylistAction()\">Import playlist</li>\r\n    <li class=\"mdl-menu__item\" (click)=\"clearPlaylistAction()\">Clear playlist</li>\r\n  </ul>\r\n  <input id=\"import_button\" style=\"display: none;\" type=\"file\" name=\"file\" accept=\".json, .txt\" (change)=\"handleInputChange($event)\"> -->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/main/video-player/video-player.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_youtube_player_service__ = __webpack_require__("../../../../../src/app/shared/services/youtube-player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_notification_service__ = __webpack_require__("../../../../../src/app/shared/services/notification.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoPlayerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VideoPlayerComponent = (function () {
    function VideoPlayerComponent(youtubePlayer, notificationService) {
        var _this = this;
        this.youtubePlayer = youtubePlayer;
        this.notificationService = notificationService;
        this.minPlayer = true;
        this.superMinPlayer = false;
        this.playingEvent = 'pause';
        this.shuffle = false;
        this.repeat = false;
        this.fullscreenActive = false;
        this.repeatActive = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
        this.shuffleActive = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
        this.nextVideoEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
        this.prevVideoEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
        this.playFirstInPlaylist = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
        this.clearPlaylist = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
        this.exportPlaylist = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
        this.importPlaylist = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
        this.closePlaylist = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
        this.youtubePlayer.playPauseEvent.subscribe(function (event) { return _this.playingEvent = event; });
    }
    VideoPlayerComponent.prototype.ngAfterContentInit = function () {
        var doc = window.document;
        var playerApi = doc.createElement('script');
        playerApi.type = 'text/javascript';
        playerApi.src = 'https://www.youtube.com/iframe_api';
        doc.body.appendChild(playerApi);
        // this.superMinPlayer = !this.superMinPlayer;
        this.youtubePlayer.createPlayer();
        //this.toggleFullscreen();
    };
    VideoPlayerComponent.prototype.toggleFullscreen = function () {
        this.minPlayer = false;
        this.superMinPlayer = false;
        this.fullscreenActive = !this.fullscreenActive;
        var width = this.fullscreenActive ? window.innerWidth - 70 : 440;
        var height = this.fullscreenActive ? window.innerHeight - 120 : 250;
        this.youtubePlayer.resizePlayer(width, height);
    };
    VideoPlayerComponent.prototype.playPause = function (event) {
        this.playingEvent = event;
        if (!this.youtubePlayer.getCurrentVideo()) {
            this.playFirstInPlaylist.emit();
            return;
        }
        event === 'pause' ? this.youtubePlayer.pausePlayingVideo() : this.youtubePlayer.playPausedVideo();
    };
    VideoPlayerComponent.prototype.nextVideo = function () {
        this.nextVideoEvent.emit();
    };
    VideoPlayerComponent.prototype.prevVideo = function () {
        this.prevVideoEvent.emit();
    };
    VideoPlayerComponent.prototype.togglePlayer = function () {
        this.minPlayer = !this.minPlayer;
        this.superMinPlayer = false;
    };
    VideoPlayerComponent.prototype.minimizePlayer = function () {
        this.superMinPlayer = !this.superMinPlayer;
    };
    VideoPlayerComponent.prototype.toggleRepeat = function () {
        this.repeat = !this.repeat;
        this.shuffle = false;
        this.repeatActive.emit(this.repeat);
    };
    VideoPlayerComponent.prototype.toggleShuffle = function () {
        this.shuffle = !this.shuffle;
        this.repeat = false;
        this.shuffleActive.emit(this.shuffle);
    };
    VideoPlayerComponent.prototype.openClosedPlaylist = function () {
        this.closePlaylist.emit();
    };
    VideoPlayerComponent.prototype.clearPlaylistAction = function () {
        this.clearPlaylist.emit();
    };
    VideoPlayerComponent.prototype.exportPlaylistAction = function () {
        this.exportPlaylist.emit();
    };
    VideoPlayerComponent.prototype.importPlaylistAction = function () {
        var import_button = document.getElementById('import_button');
        import_button.click();
    };
    VideoPlayerComponent.prototype.handleInputChange = function (e) {
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        if (file.type !== 'application/json') {
            this.notificationService.showNotification("File not supported.");
            return;
        }
        var reader = new FileReader();
        var me = this;
        reader.readAsText(file);
        reader.onload = function (ev) {
            var list;
            try {
                list = JSON.parse(ev.target['result']);
            }
            catch (exc) {
                list = null;
            }
            if (!list) {
                me.notificationService.showNotification("Playlist not valid.");
                return;
            }
            if (list.length < 1) {
                me.notificationService.showNotification("Nothing to import.");
                return;
            }
            me.importPlaylist.emit(list);
            me.notificationService.showNotification("Playlist imported.");
            document.getElementById('import_button')['value'] = "";
        };
    };
    return VideoPlayerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Output */])(),
    __metadata("design:type", Object)
], VideoPlayerComponent.prototype, "repeatActive", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Output */])(),
    __metadata("design:type", Object)
], VideoPlayerComponent.prototype, "shuffleActive", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Output */])(),
    __metadata("design:type", Object)
], VideoPlayerComponent.prototype, "nextVideoEvent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Output */])(),
    __metadata("design:type", Object)
], VideoPlayerComponent.prototype, "prevVideoEvent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Output */])(),
    __metadata("design:type", Object)
], VideoPlayerComponent.prototype, "playFirstInPlaylist", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Output */])(),
    __metadata("design:type", Object)
], VideoPlayerComponent.prototype, "clearPlaylist", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Output */])(),
    __metadata("design:type", Object)
], VideoPlayerComponent.prototype, "exportPlaylist", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Output */])(),
    __metadata("design:type", Object)
], VideoPlayerComponent.prototype, "importPlaylist", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Output */])(),
    __metadata("design:type", Object)
], VideoPlayerComponent.prototype, "closePlaylist", void 0);
VideoPlayerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'video-player',
        template: __webpack_require__("../../../../../src/app/main/video-player/video-player.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/video-player/video-player.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_youtube_player_service__["a" /* YoutubePlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_youtube_player_service__["a" /* YoutubePlayerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_notification_service__["a" /* NotificationService */]) === "function" && _b || Object])
], VideoPlayerComponent);

var _a, _b;
//# sourceMappingURL=C:/Users/maitreyee/Documents/CODE/foodX/src/video-player.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/videos-list/videos-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".loader-progress {\r\n  position: relative;\r\n  width: 100%;\r\n  margin-bottom: 60px;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n.loader-progress>.loading {\r\n  margin: 0 auto;\r\n}\r\n\r\n.demo-card-square.mdl-card {\r\n  height: 300;\r\n  width: 100%;\r\n}\r\n\r\n.custom-cell.mdl-cell--2-col {\r\n  width: calc(25% - 25px);\r\n}\r\n\r\n.custom-cell {\r\n  -webkit-touch-callout: none;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n.demo-card-square>.mdl-card__title {\r\n  color: #fff;\r\n}\r\n\r\n.mdl-card__title {\r\n  position: relative;\r\n  transition: all 0.3s ease;\r\n  -moz-transition: all 0.3s ease;\r\n  -ms-transition: all 0.3s ease;\r\n  -webkit-transition: all 0.3s ease;\r\n  -o-transition: all 0.3s ease;\r\n}\r\n\r\n.mdl-card--expand:hover {\r\n  box-shadow: inset 0 0 0 9999px rgba(0, 0, 0, 0.3);\r\n  background-size: 130% !important;\r\n  cursor: pointer;\r\n}\r\n\r\n.mdl-card__supporting-text {\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  padding: 6px 2px 2px 2px;\r\n  color: rgb(196, 48, 43);\r\n  text-align: right;\r\n  width: 97%;\r\n}\r\n\r\n.mdl-card__supporting-text .material-icons {\r\n  cursor: pointer;\r\n  font-size: 20px;\r\n}\r\n\r\n.video-name-block {\r\n  font-size: 11px;\r\n  font-weight: normal;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  height: 40px;\r\n  width: 100%;\r\n  background-color: rgba(0, 0, 0, 0.45);\r\n}\r\n\r\n.video-info-block {\r\n  font-size: 11px;\r\n  font-weight: normal;\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: 0;\r\n  height: 30px;\r\n  width: 100%;\r\n  background-color: rgba(0, 0, 0, 0.45);\r\n}\r\n\r\n.video-informations {\r\n  padding: 8px;\r\n  text-align: center;\r\n}\r\n\r\n.video-informations i {\r\n  font-size: 11px;\r\n}\r\n\r\n.video-play-button {\r\n  left: 0;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  margin: auto;\r\n}\r\n\r\n.video-play-button i {\r\n  font-size: 50px;\r\n  visibility: hidden;\r\n}\r\n\r\n.mdl-card--expand:hover .video-play-button i {\r\n  visibility: visible;\r\n}\r\n\r\n.last-item {\r\n  margin-bottom: 45px;\r\n}\r\n\r\n@media (max-width: 479px) {\r\n  .custom-cell.mdl-cell--2-col {\r\n    width: calc(100% - 16px);\r\n  }\r\n}\r\n\r\n@media (max-width: 839px) and (min-width: 480px) {\r\n  .custom-cell.mdl-cell--2-col {\r\n    width: calc(50% - 16px);\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/videos-list/videos-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-cell custom-cell mdl-cell--2-col\" id=\"{{i + video.id}}\" *ngFor=\"let video of videoList; let i = index;\"\r\n  [ngClass]=\"{'last-item': i === videoList.length-1}\">\r\n  <div class=\"demo-card-square mdl-card mdl-shadow--2dp\">\r\n    <div class=\"mdl-card__title mdl-card--expand\" (click)=\"play(video)\" [ngStyle]=\"{'background': '#000 url(' + video.snippet.thumbnails.high.url + ') center center no-repeat', 'background-size': '90%'}\">\r\n      <div class=\"video-info-block\">\r\n        <div class=\"video-informations\">\r\n          <span style=\"float: left;\">\r\n\t\t\t\t\t\t<i class=\"material-icons\">thumb_up</i>\r\n\t\t\t\t\t\t{{ video.statistics.likeCount | videoLikes }}\r\n\t\t\t\t\t</span>\r\n          <span style=\"margin-left: 10px;\">\r\n\t\t\t\t\t\t<i class=\"material-icons\">remove_red_eye</i>\r\n\t\t\t\t\t\t{{ video.statistics.viewCount | videoViews}}\r\n\t\t\t\t\t</span>\r\n          <span style=\"margin-left: 10px; float: right;\">\r\n\t\t\t\t\t\t<i class=\"material-icons\">access_time</i>\r\n\t\t\t\t\t\t{{ video.contentDetails.duration | videoDuration }}\r\n\t\t\t\t\t</span>\r\n        </div>\r\n      </div>\r\n      <!--<div class=\"video-name-block\">\r\n        <div class=\"video-informations\">\r\n          {{ video.snippet.title | playlistItemName }}\r\n        </div>\r\n      </div>-->\r\n      <div class=\"video-play-button\">\r\n        <i class=\"material-icons\">play_circle_filled</i>\r\n      </div>\r\n    </div>\r\n    <div class=\"mdl-card__supporting-text\">\r\n      <!--<i (click)=\"addToPlaylist(video)\" class=\"material-icons\">playlist_add</i>-->\r\n      <div class=\"video-informations\">\r\n        {{ video.snippet.title | playlistItemName }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"loader loader-progress\" *ngIf=\"loadingInProgress\">\r\n  <div class=\"loading\"></div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/main/videos-list/videos-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_youtube_player_service__ = __webpack_require__("../../../../../src/app/shared/services/youtube-player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_playlist_store_service__ = __webpack_require__("../../../../../src/app/shared/services/playlist-store.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideosListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VideosListComponent = (function () {
    function VideosListComponent(youtubePlayer, playlistService) {
        this.youtubePlayer = youtubePlayer;
        this.playlistService = playlistService;
        this.videoPlaylist = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
    }
    VideosListComponent.prototype.play = function (video) {
        console.log(video);
        this.youtubePlayer.playVideo(video.id);
        this.addToPlaylist(video);
    };
    VideosListComponent.prototype.addToPlaylist = function (video) {
        this.videoPlaylist.emit(video);
    };
    return VideosListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", Object)
], VideosListComponent.prototype, "videoList", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", Object)
], VideosListComponent.prototype, "loadingInProgress", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Output */])(),
    __metadata("design:type", Object)
], VideosListComponent.prototype, "videoPlaylist", void 0);
VideosListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'videos-list',
        template: __webpack_require__("../../../../../src/app/main/videos-list/videos-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/videos-list/videos-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_youtube_player_service__["a" /* YoutubePlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_youtube_player_service__["a" /* YoutubePlayerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_playlist_store_service__["a" /* PlaylistStoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_playlist_store_service__["a" /* PlaylistStoreService */]) === "function" && _b || Object])
], VideosListComponent);

var _a, _b;
//# sourceMappingURL=C:/Users/maitreyee/Documents/CODE/foodX/src/videos-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/videos-playlist/videos-playlist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".playlist {\r\n  height: calc(100% - 113px);\r\n  width: 1%;\r\n  max-width: 20px;\r\n  position: fixed;\r\n  top: 100px;\r\n  background-color: rgba(204, 204, 204, 1);\r\n  overflow-x: hidden;\r\n  transition: 0.1s;\r\n  box-shadow: -2px 2px 2px 0 rgba(0, 0, 0, .14), -2px 3px 1px -2px rgba(0, 0, 0, .2), -2px 1px 5px 0 rgba(0, 0, 0, .12);\r\n  -webkit-touch-callout: none;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n.playlist.opened {\r\n  width: 20%;\r\n  max-width: 20%;\r\n  z-index: 993;\r\n  height: calc(100% - 114px);\r\n  box-shadow: none;\r\n}\r\n\r\n.playlist-thumbnail {\r\n  height: 55px;\r\n  width: 55px;\r\n  background: #000;\r\n  margin: 5px;\r\n  display: inline-block;\r\n  position: relative;\r\n}\r\n\r\n.playist-item.playing {\r\n  background: rgba(196, 48, 43, 0.95);\r\n}\r\n\r\n.playist-item-empty {\r\n  color: #fff;\r\n}\r\n\r\n.playist-item-empty .playlist-thumbnail {\r\n  text-align: center;\r\n}\r\n\r\n.playist-item-empty i {\r\n  margin-top: 10px;\r\n  font-size: 35px;\r\n}\r\n\r\n.playist-item:hover {\r\n  background: rgba(196, 48, 43, 0.5);\r\n  cursor: pointer;\r\n}\r\n\r\n.playist-item:hover .delete-from-playlist {\r\n  display: block;\r\n}\r\n\r\n.no-in-playlist {\r\n  color: #fff;\r\n  text-shadow: 2px 2px 2px #000;\r\n}\r\n\r\n.video-duration {\r\n  color: #fff;\r\n  text-shadow: 2px 2px 2px #000;\r\n  position: absolute;\r\n  bottom: -4px;\r\n  left: 1px;\r\n  font-size: 9px;\r\n}\r\n\r\n.opened-item-info {\r\n  display: inline-block;\r\n  color: rgba(255, 255, 255, 0.8);\r\n  position: absolute;\r\n  left: 70px;\r\n  margin-top: 8px;\r\n}\r\n\r\n.opened-item-info.closed {\r\n  display: none;\r\n}\r\n\r\n.delete-from-playlist {\r\n  position: absolute;\r\n  display: none;\r\n  bottom: 0;\r\n  right: 0;\r\n  color: #f44542;\r\n  background-color: rgba(0, 0, 0, 0.65);\r\n  font-size: 16px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/videos-playlist/videos-playlist.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"playlist\" class=\"playlist\" [ngClass]=\"{'opened': playlistToggle}\">\r\n  <div id=\"{{video.id}}\" class=\"playist-item\" *ngFor=\"let video of videoPlaylist; let i = index;\" (click)=\"play(video.id)\" [ngClass]=\"{'playing': currentPlaying(video.id)}\">\r\n    <div class=\"playlist-thumbnail\" [ngStyle]=\"{'background': '#000 url(' + video.snippet.thumbnails.default.url + ') center center no-repeat', 'background-size': '100%'}\">\r\n      <span class=\"no-in-playlist\">{{ i + 1 }}</span>\r\n      <span class=\"video-duration\">{{ video.contentDetails.duration | videoDuration }}</span>\r\n      <i class=\"material-icons delete-from-playlist\" (click)=\"removeFromPlaylist(video)\">cancel</i>\r\n    </div>\r\n    <div class=\"opened-item-info\" [ngClass]=\"{'closed': !playlistToggle}\" *ngIf=\"playlistNames\">\r\n      {{ video.snippet.title | playlistItemName }}\r\n    </div>\r\n  </div>\r\n  <div class=\"playist-item-empty\" *ngIf=\"!videoPlaylist.length\">\r\n    <!-- <div class=\"playlist-thumbnail\" [ngStyle]=\"{'background': '#000'}\">\r\n      <i class=\"material-icons\">block</i>\r\n    </div> -->\r\n    <div class=\"opened-item-info\" [ngClass]=\"{'closed': !playlistToggle}\" *ngIf=\"playlistNames\">\r\n      Playlist is empty\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/main/videos-playlist/videos-playlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_youtube_player_service__ = __webpack_require__("../../../../../src/app/shared/services/youtube-player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_playlist_store_service__ = __webpack_require__("../../../../../src/app/shared/services/playlist-store.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideosPlaylistComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VideosPlaylistComponent = (function () {
    function VideosPlaylistComponent(youtubePlayer, playlistService) {
        var _this = this;
        this.youtubePlayer = youtubePlayer;
        this.playlistService = playlistService;
        this.youtubePlayer.videoChangeEvent.subscribe(function (event) { return event ? _this.playNextVideo() : false; });
    }
    VideosPlaylistComponent.prototype.play = function (id) {
        this.youtubePlayer.playVideo(id);
    };
    VideosPlaylistComponent.prototype.currentPlaying = function (id) {
        return this.youtubePlayer.getCurrentVideo() === id;
    };
    VideosPlaylistComponent.prototype.removeFromPlaylist = function (video) {
        this.videoPlaylist.splice(this.videoPlaylist.indexOf(video), 1);
        this.playlistService.removeFromPlaylist(video);
    };
    VideosPlaylistComponent.prototype.playNextVideo = function () {
        var current = this.youtubePlayer.getCurrentVideo();
        var inPlaylist = undefined;
        if (this.repeat) {
            this.youtubePlayer.playVideo(current);
            return;
        }
        this.videoPlaylist.forEach(function (video, index) {
            if (video.id === current) {
                inPlaylist = index;
            }
        });
        if (inPlaylist !== undefined) {
            var topPos = document.getElementById(this.videoPlaylist[inPlaylist].id).offsetTop;
            var playlistEl = document.getElementById('playlist');
            if (this.shuffle) {
                var shuffled = this.videoPlaylist[this.getShuffled(inPlaylist)].id;
                this.youtubePlayer.playVideo(shuffled);
                playlistEl.scrollTop = document.getElementById(shuffled).offsetTop - 100;
            }
            else {
                if (this.videoPlaylist.length - 1 === inPlaylist) {
                    this.youtubePlayer.playVideo(this.videoPlaylist[0].id);
                    playlistEl.scrollTop = 0;
                }
                else {
                    this.youtubePlayer.playVideo(this.videoPlaylist[inPlaylist + 1].id);
                    playlistEl.scrollTop = topPos - 100;
                }
            }
        }
    };
    VideosPlaylistComponent.prototype.getShuffled = function (index) {
        var i = Math.floor(Math.random() * this.videoPlaylist.length);
        return i !== index ? i : this.getShuffled(index);
    };
    return VideosPlaylistComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", Object)
], VideosPlaylistComponent.prototype, "playlistToggle", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", Object)
], VideosPlaylistComponent.prototype, "videoPlaylist", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", Object)
], VideosPlaylistComponent.prototype, "playlistNames", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", Object)
], VideosPlaylistComponent.prototype, "repeat", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", Object)
], VideosPlaylistComponent.prototype, "shuffle", void 0);
VideosPlaylistComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'videos-playlist',
        template: __webpack_require__("../../../../../src/app/main/videos-playlist/videos-playlist.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/videos-playlist/videos-playlist.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_youtube_player_service__["a" /* YoutubePlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_youtube_player_service__["a" /* YoutubePlayerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_playlist_store_service__["a" /* PlaylistStoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_playlist_store_service__["a" /* PlaylistStoreService */]) === "function" && _b || Object])
], VideosPlaylistComponent);

var _a, _b;
//# sourceMappingURL=C:/Users/maitreyee/Documents/CODE/foodX/src/videos-playlist.component.js.map

/***/ }),

/***/ "../../../../../src/app/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
        this.title = 'app works!';
    }
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        template: '<p>Page Not Fount!</p>'
    })
], PageNotFoundComponent);

//# sourceMappingURL=C:/Users/maitreyee/Documents/CODE/foodX/src/not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/Helper/indexdata.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export IndexedData */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return indexDatas; });
var IndexedData = (function () {
    function IndexedData() {
    }
    return IndexedData;
}());

var indexDatas = [
    {
        id: 'wGUqCDzmSwY',
        title: 'Potato Pancake Recipe In Hindi - Indian Breakfast Recipe - Indian Recipe - Vegan Recipes - Ep-124'
    },
    {
        id: 'VgdSvWrXYk0',
        title: 'Dry Chilly Chicken - Spicy Indian Recipe'
    },
    {
        id: 'VKvwWeVy8Nw',
        title: 'Poha Recipe-How to make Kanda Poha-Easy Indian Breakfast Recipe-Savory Flattened Rice'
    },
    {
        id: '4q8GwxethQ0',
        title: 'Indian Style Macaroni Pasta Recipe | Kids Lunch Box / Indian Style Recipes'
    }
];
//# sourceMappingURL=C:/Users/maitreyee/Documents/CODE/foodX/src/indexdata.js.map

/***/ }),

/***/ "../../../../../src/app/shared/constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettings; });
var AppSettings = (function () {
    function AppSettings() {
    }
    return AppSettings;
}());

AppSettings.YOUTUBE_API_KEY = 'AIzaSyBgJ0KTiDr4VQKrAJ9-BmR7oMFMivAksEc';
AppSettings.SOLR_SERVER_PATH = 'http://ec2-34-209-114-162.us-west-2.compute.amazonaws.com:8983/solr/';
AppSettings.EXPRESS_API_PATH = 'localhost';
AppSettings.base_url = 'https://www.googleapis.com/youtube/v3/';
AppSettings.max_results = 12;
AppSettings.LOCATION_SERVICE_PATH = 'http://api.hostip.info/get_json.php';
//# sourceMappingURL=C:/Users/maitreyee/Documents/CODE/foodX/src/constants.js.map

/***/ }),

/***/ "../../../../../src/app/shared/directives/lazy-scroll/lazy-scroll.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LazyScroll; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LazyScroll = (function () {
    function LazyScroll(element) {
        this.element = element;
        this.OnScrollMethod = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
        this._element = this.element.nativeElement;
        if (!this.scrollTrigger) {
            this.scrollTrigger = 1;
        }
    }
    LazyScroll.prototype.onScroll = function () {
        this._count++;
        if (this._element.scrollTop + this._element.clientHeight >= this._element.scrollHeight) {
            this.OnScrollMethod.emit(null);
        }
        else {
            if (this._count % this.scrollTrigger === 0) {
                this.OnScrollMethod.emit(null);
            }
        }
    };
    return LazyScroll;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])('ScrollDistance'),
    __metadata("design:type", Number)
], LazyScroll.prototype, "scrollTrigger", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Output */])(),
    __metadata("design:type", Object)
], LazyScroll.prototype, "OnScrollMethod", void 0);
LazyScroll = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* Directive */])({
        selector: '[LazyScroll]',
        host: {
            '(scroll)': 'onScroll($event)'
        }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* ElementRef */]) === "function" && _a || Object])
], LazyScroll);

var _a;
//# sourceMappingURL=C:/Users/maitreyee/Documents/CODE/foodX/src/lazy-scroll.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/pipes/playlist-item-name.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistItemNamePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PlaylistItemNamePipe = (function () {
    function PlaylistItemNamePipe() {
    }
    PlaylistItemNamePipe.prototype.transform = function (value, args) {
        var dots = "...";
        if (value.length > 65) {
            value = value.substring(0, 62) + dots;
        }
        return value;
    };
    return PlaylistItemNamePipe;
}());
PlaylistItemNamePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'playlistItemName'
    })
], PlaylistItemNamePipe);

//# sourceMappingURL=C:/Users/maitreyee/Documents/CODE/foodX/src/playlist-item-name.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/shared/pipes/video-duration.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoDurationPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var VideoDurationPipe = (function () {
    function VideoDurationPipe() {
    }
    VideoDurationPipe.prototype.transform = function (value, args) {
        var time = value;
        if (!time) {
            return '...';
        }
        return ['PT', 'H', 'M', 'S'].reduce(function (prev, cur, i, arr) {
            var now = prev.rest.split(cur);
            if (cur !== 'PT' && cur !== 'H' && !prev.rest.match(cur)) {
                prev.new.push('00');
            }
            if (now.length === 1) {
                return prev;
            }
            prev.new.push(now[0]);
            return {
                rest: now[1].replace(cur, ''),
                new: prev.new
            };
        }, { rest: time, new: [] })
            .new.filter(function (_time) { return _time !== ''; })
            .map(function (_time) { return _time.length === 1 ? "0" + _time : _time; })
            .join(':');
    };
    return VideoDurationPipe;
}());
VideoDurationPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'videoDuration'
    })
], VideoDurationPipe);

//# sourceMappingURL=C:/Users/maitreyee/Documents/CODE/foodX/src/video-duration.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/shared/pipes/video-likes.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoLikesPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var VideoLikesPipe = (function () {
    function VideoLikesPipe() {
    }
    VideoLikesPipe.prototype.transform = function (value, args) {
        return parseInt(value).toLocaleString('en');
    };
    return VideoLikesPipe;
}());
VideoLikesPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'videoLikes'
    })
], VideoLikesPipe);

//# sourceMappingURL=C:/Users/maitreyee/Documents/CODE/foodX/src/video-likes.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/shared/pipes/video-views.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoViewsPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var VideoViewsPipe = (function () {
    function VideoViewsPipe() {
    }
    VideoViewsPipe.prototype.transform = function (value, args) {
        return parseInt(value).toLocaleString('en');
    };
    return VideoViewsPipe;
}());
VideoViewsPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'videoViews'
    })
], VideoViewsPipe);

//# sourceMappingURL=C:/Users/maitreyee/Documents/CODE/foodX/src/video-views.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/shared/searchObject.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchObject; });
var SearchObject = (function () {
    function SearchObject(pageNum, searchTerm) {
        this._pageNum = 0;
        this._noOfRow = 12;
        this._pageNum = pageNum;
        this._searchTerm = searchTerm;
    }
    Object.defineProperty(SearchObject.prototype, "pageNum", {
        get: function () {
            return this._pageNum;
        },
        set: function (pageNum) {
            this._pageNum = pageNum;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchObject.prototype, "searchTerm", {
        get: function () {
            return this._searchTerm;
        },
        set: function (searchTerm) {
            this._searchTerm = searchTerm;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchObject.prototype, "noOfRow", {
        get: function () {
            return this._noOfRow;
        },
        enumerable: true,
        configurable: true
    });
    return SearchObject;
}());

//# sourceMappingURL=C:/Users/maitreyee/Documents/CODE/foodX/src/searchObject.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/facetService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacetService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FacetService = (function () {
    function FacetService() {
        this.facetSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.facet$ = this.facetSource.asObservable();
    }
    FacetService.prototype.setFaets = function (facet) {
        this.facetSource.next(facet);
        console.log(this.facetSource);
    };
    return FacetService;
}());
FacetService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Injectable */])()
], FacetService);

//# sourceMappingURL=C:/Users/maitreyee/Documents/CODE/foodX/src/facetService.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/indexDataService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Helper_indexdata__ = __webpack_require__("../../../../../src/app/shared/Helper/indexdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants__ = __webpack_require__("../../../../../src/app/shared/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__notification_service__ = __webpack_require__("../../../../../src/app/shared/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__facetService__ = __webpack_require__("../../../../../src/app/shared/services/facetService.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var IndexDataService = (function () {
    function IndexDataService(jsonp, http, notificationService, facetService) {
        this.jsonp = jsonp;
        this.http = http;
        this.notificationService = notificationService;
        this.facetService = facetService;
    }
    IndexDataService.prototype.getIndexedData = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_4__Helper_indexdata__["a" /* indexDatas */]);
    };
    IndexDataService.prototype.suggest = function (term) {
        // let solrUrl = AppSettings.SOLR_SERVER_PATH + 'foodx/suggest';
        var solrUrl = '/api/suggest';
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        params.set('suggest', 'true'); // the user's search value
        params.set('suggest.build', 'true');
        params.set('wt', 'json');
        params.set('suggest.q', term);
        // params.set('json.wrf', 'JSONP_CALLBACK');
        return this.http
            .get(solrUrl, { search: params })
            .map(function (response) {
            var jsonRes = response.json();
            var suggestions = [];
            var suggestionObject = jsonRes['suggest']['default'][term]['suggestions'];
            for (var i = 0; i < suggestionObject.length; i++) {
                suggestions[i] = suggestionObject[i]['term'];
            }
            return suggestions;
        }).toPromise();
    };
    IndexDataService.prototype.searchVideos = function (args) {
        var _this = this;
        //let solrUrl = AppSettings.SOLR_SERVER_PATH + 'foodx/select';
        var solrUrl = '/api/select';
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        params.set('wt', 'json');
        params.set('rows', '' + args.noOfRow);
        params.set('q', 'RecipeTitle:' + args.searchTerm);
        //params.set('json.wrf', 'JSONP_CALLBACK');
        params.set('fl', 'youtubevideoID');
        params.set('start', '' + args.pageNum * args.noOfRow);
        params.set('json.facet', '{contenttype: { terms: { field: food_Content } },Recipelocation: { terms: { field: video_country } },Ingredients: { terms: { field: ingredients } },likes: { range: { field: likes, start: 0, end: 1000, gap: 200 } }}');
        console.log('going to search for ');
        console.log(args);
        return this.http
            .get(solrUrl, { search: params })
            .map(function (response) {
            console.log(response);
            var jsonRes = response.json();
            var suggestions = [];
            var suggestionObject = jsonRes['response']['docs'];
            _this.facetService.setFaets(jsonRes['facets']);
            console.log('number of search result for ' + args.searchTerm + '=' + suggestionObject.length);
            var ids = [];
            suggestionObject.forEach(function (item) {
                ids.push(item.youtubevideoID);
            });
            return _this.getVideos(ids);
        }).toPromise().catch(this.handleError);
    };
    IndexDataService.prototype.searchNext = function (args) {
        var _this = this;
        var solrUrl = __WEBPACK_IMPORTED_MODULE_5__constants__["a" /* AppSettings */].SOLR_SERVER_PATH + 'foodx/select';
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        params.set('rows', '' + __WEBPACK_IMPORTED_MODULE_5__constants__["a" /* AppSettings */].max_results);
        params.set('start', '' + args['pagenum'] * __WEBPACK_IMPORTED_MODULE_5__constants__["a" /* AppSettings */].max_results);
        params.set('wt', 'json');
        params.set('q', 'RecipeTitle:' + args['term']);
        // params.set('json.facet', '{likes : { range : {field : likes,start : 0,end : 1000,gap : 200}}}')
        params.set('json.wrf', 'JSONP_CALLBACK');
        return this.http.get(solrUrl, { search: params })
            .map(function (response) {
            var jsonRes = response.json();
            var suggestions = [];
            var suggestionObject = jsonRes['response']['docs'];
            var ids = [];
            _this.facetService.setFaets('facets');
            suggestionObject.forEach(function (item) {
                ids.push(item.youtubevideoID);
            });
            return _this.getVideos(ids);
        })
            .toPromise()
            .catch(this.handleError);
    };
    IndexDataService.prototype.getVideos = function (ids) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__constants__["a" /* AppSettings */].base_url + 'videos?id=' + ids.join(',') + '&maxResults=' + __WEBPACK_IMPORTED_MODULE_5__constants__["a" /* AppSettings */].max_results + '&type=video&part=snippet,contentDetails,statistics&key=' + __WEBPACK_IMPORTED_MODULE_5__constants__["a" /* AppSettings */].YOUTUBE_API_KEY)
            .map(function (results) {
            return results.json()['items'];
        })
            .toPromise()
            .catch(this.handleError);
    };
    IndexDataService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        // this.notificationService.showNotification(errMsg);
        return Promise.reject(errMsg);
    };
    return IndexDataService;
}());
IndexDataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Jsonp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Jsonp */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__notification_service__["a" /* NotificationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__facetService__["a" /* FacetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__facetService__["a" /* FacetService */]) === "function" && _d || Object])
], IndexDataService);

var _a, _b, _c, _d;
//# sourceMappingURL=C:/Users/maitreyee/Documents/CODE/foodX/src/indexDataService.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/notification.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotificationService = (function () {
    function NotificationService() {
        this.timeoutDuration = 3500;
    }
    NotificationService.prototype.showNotification = function (message) {
        var notification = document.querySelector('.mdl-js-snackbar');
        var data = {
            message: message,
            timeout: this.timeoutDuration
        };
        notification['MaterialSnackbar'].showSnackbar(data);
    };
    return NotificationService;
}());
NotificationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], NotificationService);

//# sourceMappingURL=C:/Users/maitreyee/Documents/CODE/foodX/src/notification.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/playlist-store.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistStoreService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PlaylistStoreService = (function () {
    function PlaylistStoreService() {
        this.ngxYTPlayer = 'ngx_yt_player';
        this.playlists_template = {
            "playlists": []
        };
    }
    PlaylistStoreService.prototype.init = function () {
        localStorage.setItem(this.ngxYTPlayer, JSON.stringify(this.playlists_template));
    };
    PlaylistStoreService.prototype.retrieveStorage = function () {
        var storedPlaylist = this.parse();
        if (!storedPlaylist) {
            this.init();
            storedPlaylist = this.parse();
        }
        return storedPlaylist;
    };
    PlaylistStoreService.prototype.addToPlaylist = function (video) {
        var store = this.parse();
        store.playlists.push(video);
        localStorage.setItem(this.ngxYTPlayer, JSON.stringify(store));
    };
    PlaylistStoreService.prototype.removeFromPlaylist = function (video) {
        var store = this.parse();
        store.playlists = store.playlists.filter(function (item) { return item.id !== video.id; });
        localStorage.setItem(this.ngxYTPlayer, JSON.stringify(store));
    };
    PlaylistStoreService.prototype.parse = function () {
        return JSON.parse(localStorage.getItem(this.ngxYTPlayer));
    };
    PlaylistStoreService.prototype.clearPlaylist = function () {
        this.init();
    };
    PlaylistStoreService.prototype.importPlaylist = function (videos) {
        var store = this.parse();
        store.playlists = videos;
        localStorage.setItem(this.ngxYTPlayer, JSON.stringify(store));
    };
    return PlaylistStoreService;
}());
PlaylistStoreService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], PlaylistStoreService);

//# sourceMappingURL=C:/Users/maitreyee/Documents/CODE/foodX/src/playlist-store.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/youtube-api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notification_service__ = __webpack_require__("../../../../../src/app/shared/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants__ = __webpack_require__("../../../../../src/app/shared/constants.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubeApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var YoutubeApiService = (function () {
    function YoutubeApiService(http, notificationService) {
        this.http = http;
        this.notificationService = notificationService;
    }
    YoutubeApiService.prototype.getVideos = function (ids) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__constants__["a" /* AppSettings */].base_url + 'videos?id=' + ids.join(',') + '&maxResults=' + __WEBPACK_IMPORTED_MODULE_5__constants__["a" /* AppSettings */].max_results + '&type=video&part=snippet,contentDetails,statistics&key=' + __WEBPACK_IMPORTED_MODULE_5__constants__["a" /* AppSettings */].YOUTUBE_API_KEY)
            .map(function (results) {
            return results.json()['items'];
        })
            .toPromise()
            .catch(this.handleError);
    };
    YoutubeApiService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        this.notificationService.showNotification(errMsg);
        return Promise.reject(errMsg);
    };
    return YoutubeApiService;
}());
YoutubeApiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__notification_service__["a" /* NotificationService */]) === "function" && _b || Object])
], YoutubeApiService);

var _a, _b;
//# sourceMappingURL=C:/Users/maitreyee/Documents/CODE/foodX/src/youtube-api.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/youtube-player.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__notification_service__ = __webpack_require__("../../../../../src/app/shared/services/notification.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubePlayerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var YoutubePlayerService = (function () {
    function YoutubePlayerService(notificationService) {
        var _this = this;
        this.notificationService = notificationService;
        this.ytOptions = Object.assign({}, {
            width: '440',
            height: '250',
            playerVars: { iv_load_policy: '3', rel: '0' }
        }, { events: { onStateChange: function (ev) { _this.onPlayerStateChange(ev); } }
        });
        this.videoChangeEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */](true);
        this.playPauseEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */](true);
    }
    Object.defineProperty(YoutubePlayerService, "win", {
        get: function () {
            return window;
        },
        enumerable: true,
        configurable: true
    });
    YoutubePlayerService.prototype.createPlayer = function () {
        var _this = this;
        this.ytOptions = Object.assign({}, {
            width: '440',
            height: '250',
            playerVars: { iv_load_policy: '3', rel: '0' }
        }, { events: { onStateChange: function (ev) { _this.onPlayerStateChange(ev); } }
        });
        var interval = setInterval(function () {
            if ((typeof window['YT'] !== "undefined") && window['YT'] && window['YT'].Player) {
                console.log('YT player set');
                _this.yt_player = new YT.Player('yt-player', _this.ytOptions);
                clearInterval(interval);
            }
        }, 100);
    };
    YoutubePlayerService.prototype.onPlayerStateChange = function (event) {
        var state = event.data;
        switch (state) {
            case 0:
                this.videoChangeEvent.emit(true);
                this.playPauseEvent.emit('pause');
                break;
            case 1:
                this.playPauseEvent.emit('play');
                break;
            case 2:
                this.playPauseEvent.emit('pause');
                break;
        }
    };
    YoutubePlayerService.prototype.playVideo = function (videoId) {
        if (!this.yt_player) {
            this.notificationService.showNotification("Player not ready.");
            return;
        }
        this.yt_player.loadVideoById(videoId);
        this.currentVideoId = videoId;
    };
    YoutubePlayerService.prototype.pausePlayingVideo = function () {
        this.yt_player.pauseVideo();
    };
    YoutubePlayerService.prototype.playPausedVideo = function () {
        this.yt_player.playVideo();
    };
    YoutubePlayerService.prototype.getCurrentVideo = function () {
        return this.currentVideoId;
    };
    YoutubePlayerService.prototype.resizePlayer = function (width, height) {
        console.log('resizing player to  - width =' + width + ' height =' + height);
        this.yt_player.setSize(width, height);
    };
    return YoutubePlayerService;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]) === "function" && _a || Object)
], YoutubePlayerService.prototype, "videoChangeEvent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]) === "function" && _b || Object)
], YoutubePlayerService.prototype, "playPauseEvent", void 0);
YoutubePlayerService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__notification_service__["a" /* NotificationService */]) === "function" && _c || Object])
], YoutubePlayerService);

var _a, _b, _c;
//# sourceMappingURL=C:/Users/maitreyee/Documents/CODE/foodX/src/youtube-player.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/maitreyee/Documents/CODE/foodX/src/environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");



if (__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].production) {
    // enableProdMode();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/maitreyee/Documents/CODE/foodX/src/main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map