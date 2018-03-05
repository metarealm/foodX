webpackJsonp([2],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./about/about.module": [
		"../../../../../src/app/about/about.module.ts",
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__frontpage_frontpage_component__ = __webpack_require__("../../../../../src/app/frontpage/frontpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_components_not_found_component__ = __webpack_require__("../../../../../src/app/shared/components/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_components_login_callback_component__ = __webpack_require__("../../../../../src/app/shared/components/login-callback.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__frontpage_frontpage_component__["a" /* FrontpageComponent */] },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_2__main_main_component__["a" /* MainComponent */] },
    { path: 'loginCallback', component: __WEBPACK_IMPORTED_MODULE_5__shared_components_login_callback_component__["a" /* LoginCallbackComponent */] },
    {
        path: 'about',
        loadChildren: './about/about.module#AboutModule',
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_4__shared_components_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(appRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=/Users/bhabanidas/Work/foodX/src/app-routing.module.js.map

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Component */])({
        selector: 'app-root',
        template: '<router-outlet></router-outlet>',
        styles: ['']
    })
], AppComponent);

//# sourceMappingURL=/Users/bhabanidas/Work/foodX/src/app.component.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_components_not_found_component__ = __webpack_require__("../../../../../src/app/shared/components/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_components_user_information_component__ = __webpack_require__("../../../../../src/app/shared/components/user-information.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_components_login_callback_component__ = __webpack_require__("../../../../../src/app/shared/components/login-callback.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shared_services_youtube_api_service__ = __webpack_require__("../../../../../src/app/shared/services/youtube-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__shared_services_youtube_player_service__ = __webpack_require__("../../../../../src/app/shared/services/youtube-player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_services_playlist_store_service__ = __webpack_require__("../../../../../src/app/shared/services/playlist-store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_services_notification_service__ = __webpack_require__("../../../../../src/app/shared/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__shared_services_indexDataService__ = __webpack_require__("../../../../../src/app/shared/services/indexDataService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__shared_services_facetService__ = __webpack_require__("../../../../../src/app/shared/services/facetService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__shared_pipes_video_duration_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/video-duration.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__shared_pipes_video_likes_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/video-likes.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__shared_pipes_video_views_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/video-views.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__shared_pipes_playlist_item_name_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/playlist-item-name.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__shared_directives_lazy_scroll_lazy_scroll_directive__ = __webpack_require__("../../../../../src/app/shared/directives/lazy-scroll/lazy-scroll.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__frontpage_frontpage_component__ = __webpack_require__("../../../../../src/app/frontpage/frontpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__shared_components_go_home_component__ = __webpack_require__("../../../../../src/app/shared/components/go-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__shared_components_search_configuration_component__ = __webpack_require__("../../../../../src/app/shared/components/search-configuration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__shared_components_user_accounts_component__ = __webpack_require__("../../../../../src/app/shared/components/user-accounts.component.ts");
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
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
            __WEBPACK_IMPORTED_MODULE_16__shared_components_not_found_component__["a" /* PageNotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_9__main_main_component__["a" /* MainComponent */],
            __WEBPACK_IMPORTED_MODULE_26__shared_pipes_video_duration_pipe__["a" /* VideoDurationPipe */],
            __WEBPACK_IMPORTED_MODULE_27__shared_pipes_video_likes_pipe__["a" /* VideoLikesPipe */],
            __WEBPACK_IMPORTED_MODULE_28__shared_pipes_video_views_pipe__["a" /* VideoViewsPipe */],
            __WEBPACK_IMPORTED_MODULE_29__shared_pipes_playlist_item_name_pipe__["a" /* PlaylistItemNamePipe */],
            __WEBPACK_IMPORTED_MODULE_30__shared_directives_lazy_scroll_lazy_scroll_directive__["a" /* LazyScroll */],
            __WEBPACK_IMPORTED_MODULE_13__main_filter_filter_component__["a" /* FilterComponent */],
            __WEBPACK_IMPORTED_MODULE_14__main_solr_search_solr_search_component__["a" /* SolrSearchComponent */],
            __WEBPACK_IMPORTED_MODULE_31__frontpage_frontpage_component__["a" /* FrontpageComponent */],
            __WEBPACK_IMPORTED_MODULE_17__shared_components_user_information_component__["a" /* UserInformationComponent */],
            __WEBPACK_IMPORTED_MODULE_18__shared_components_login_callback_component__["a" /* LoginCallbackComponent */],
            __WEBPACK_IMPORTED_MODULE_32__shared_components_go_home_component__["a" /* GoHomeComponent */],
            __WEBPACK_IMPORTED_MODULE_33__shared_components_search_configuration_component__["a" /* SearchConfigurationComponent */],
            __WEBPACK_IMPORTED_MODULE_34__shared_components_user_accounts_component__["a" /* UserAccountsComponent */]
        ],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_19__shared_services_youtube_api_service__["a" /* YoutubeApiService */],
            __WEBPACK_IMPORTED_MODULE_20__shared_services_youtube_player_service__["a" /* YoutubePlayerService */],
            __WEBPACK_IMPORTED_MODULE_21__shared_services_playlist_store_service__["a" /* PlaylistStoreService */],
            __WEBPACK_IMPORTED_MODULE_22__shared_services_notification_service__["a" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_23__shared_services_indexDataService__["a" /* IndexDataService */],
            __WEBPACK_IMPORTED_MODULE_24__shared_services_facetService__["a" /* FacetService */],
            __WEBPACK_IMPORTED_MODULE_25__auth_auth_service__["a" /* AuthService */]
        ]
    })
], AppModule);

//# sourceMappingURL=/Users/bhabanidas/Work/foodX/src/app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth-config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AUTH_CONFIG; });

var PROD_AUTH_CONFIG = {
    CLIENT_ID: 'JgPmVv4NkeKrx4igeWNXwCxeJRoxscyA',
    CLIENT_DOMAIN: 'bhabani.auth0.com',
    AUDIENCE: 'http://peeknmake.com',
    REDIRECT: 'http://peeknmake.com/loginCallback',
    SCOPE: 'openid profile email'
};
var DEV_AUTH_CONFIG = {
    CLIENT_ID: 'eKCAmr7JzR6jsQeVLzbXKE3CGtRBBzR2',
    CLIENT_DOMAIN: 'bhabani.auth0.com',
    AUDIENCE: 'http://localhost:3000',
    REDIRECT: 'http://localhost:3000/loginCallback',
    SCOPE: 'openid profile email'
};
var AUTH_CONFIG = (__WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].production) ? PROD_AUTH_CONFIG : DEV_AUTH_CONFIG;
//# sourceMappingURL=/Users/bhabanidas/Work/foodX/src/auth-config.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_auth0_js__ = __webpack_require__("../../../../auth0-js/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_auth0_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_auth0_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_config__ = __webpack_require__("../../../../../src/app/auth/auth-config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_Helper_user__ = __webpack_require__("../../../../../src/app/shared/Helper/user.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = (function () {
    function AuthService(router) {
        this.router = router;
        // Create Auth0 web auth instance
        this.auth0 = new __WEBPACK_IMPORTED_MODULE_2_auth0_js__["WebAuth"]({
            clientID: __WEBPACK_IMPORTED_MODULE_3__auth_config__["a" /* AUTH_CONFIG */].CLIENT_ID,
            domain: __WEBPACK_IMPORTED_MODULE_3__auth_config__["a" /* AUTH_CONFIG */].CLIENT_DOMAIN,
            responseType: 'token id_token',
            redirectUri: __WEBPACK_IMPORTED_MODULE_3__auth_config__["a" /* AUTH_CONFIG */].REDIRECT,
            audience: __WEBPACK_IMPORTED_MODULE_3__auth_config__["a" /* AUTH_CONFIG */].AUDIENCE,
            scope: __WEBPACK_IMPORTED_MODULE_3__auth_config__["a" /* AUTH_CONFIG */].SCOPE
        });
        this.user = new __WEBPACK_IMPORTED_MODULE_5__shared_Helper_user__["a" /* User */]("Guest", "Guest@sns.com");
        this.userChangeEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */](true);
        this.loggedIn$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](this.loggedIn);
        // If authenticated, set local profile property and update login status subject
        // If token is expired, log out to clear any data from localStorage
        if (this.authenticated) {
            this.userProfile = JSON.parse(localStorage.getItem('profile'));
            this.user = new __WEBPACK_IMPORTED_MODULE_5__shared_Helper_user__["a" /* User */](this.userProfile.name, this.userProfile.email);
            this.user.setPictureLink(this.userProfile.picture);
            this.setLoggedIn(true);
        }
        else {
            this.logout();
        }
    }
    AuthService.prototype.setLoggedIn = function (value) {
        // Update login status subject
        this.loggedIn$.next(value);
        this.loggedIn = value;
    };
    AuthService.prototype.getLoggedIn = function () {
        return this.loggedIn;
    };
    AuthService.prototype.login = function () {
        // Auth0 authorize request
        this.auth0.authorize();
    };
    AuthService.prototype.handleAuth = function () {
        var _this = this;
        // When Auth0 hash parsed, get profile
        this.auth0.parseHash(window.location.hash, function (err, authResult) {
            if (authResult && authResult.accessToken && authResult.idToken) {
                window.location.hash = '';
                _this._getProfile(authResult);
            }
            else if (err) {
                console.error("Error: " + err.error);
            }
            _this.router.navigate(['/']);
        });
    };
    AuthService.prototype._getProfile = function (authResult) {
        var _this = this;
        // Use access token to retrieve user's profile and set session
        this.auth0.client.userInfo(authResult.accessToken, function (err, profile) {
            _this._setSession(authResult, profile);
        });
    };
    AuthService.prototype._setSession = function (authResult, profile) {
        var expTime = authResult.expiresIn * 1000 + Date.now();
        // Save session data and update login status subject
        localStorage.setItem('token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('profile', JSON.stringify(profile));
        localStorage.setItem('expires_at', JSON.stringify(expTime));
        this.userProfile = profile;
        this.user = new __WEBPACK_IMPORTED_MODULE_5__shared_Helper_user__["a" /* User */](this.userProfile.name, this.userProfile.email);
        this.user.setPictureLink(this.userProfile.picture);
        this.userChangeEvent.emit(this.user);
        this.setLoggedIn(true);
    };
    AuthService.prototype.logout = function () {
        // Remove tokens and profile and update login status subject
        localStorage.removeItem('token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('profile');
        localStorage.removeItem('expires_at');
        this.userProfile = undefined;
        this.user = new __WEBPACK_IMPORTED_MODULE_5__shared_Helper_user__["a" /* User */]("Guest", "Guest@sns.com");
        this.userChangeEvent.emit(this.user);
        this.setLoggedIn(false);
    };
    Object.defineProperty(AuthService.prototype, "authenticated", {
        get: function () {
            // Check if current date is greater than expiration
            var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
            return Date.now() < expiresAt;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "loggedUser", {
        get: function () {
            return this.user;
        },
        enumerable: true,
        configurable: true
    });
    return AuthService;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]) === "function" && _a || Object)
], AuthService.prototype, "userChangeEvent", void 0);
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=/Users/bhabanidas/Work/foodX/src/auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/frontpage/frontpage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n.search {\n  width: 100%;\n  position: relative\n}\n\n.searchTerm {\n  float: left;\n  width: 100%;\n  /* border: 1px solid rgb(0, 0, 0);; */\n  padding: 3px;\n  height: 42px;\n  /* border-radius: 5px; */\n  outline: none;\n  /* color: #9DBFAF; */\n  font-size: 15px;\n}\n\n.searchButton {\n  position: absolute;  \n  right: -50px;\n    width: 60px;\n    height: 52px;\n  /* border: 1px solid rgb(98, 98, 100); */\n  background: rgb(255, 255, 255);\n  text-align: center;\n  color: rgb(54, 54, 54);\n  /* border-radius: 5px; */\n  cursor: pointer;\n  font-size: 20px;\n}\n.frontpage{\n    height: 100vh;\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    background-position: center; \n    background: url(" + __webpack_require__("../../../../../src/assets/mainpic.png") + ")  no-repeat center;\n}\n/*Resize the wrap to see the search bar change!*/\n.wrap-middle{\n      height: 50px;\n    width:50%;\n  position: absolute;\n   top: 35%;\n  left: 20%;\n  /*transform: translate(-50%, -50%); */\n  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */\n}\n\n.wrap-lower{\n    height: 50px;\n    max-height:25%;\n  width:80%;\nposition: absolute;\n top: 65%;\nleft: 10%;\n/*transform: translate(-50%, -50%); */\n/* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */\n}\n\n\n.dropbtn:hover, .dropbtn:focus {\n  background-color: #2980B9;\n}\n\n.suggestion-dropdown {\n    padding-left: 5px;\n  position: relative;\n  background-color: white;\n  display: inline-block;\n}\n\n.suggestion-dropdown-content {\n\n  float: left;\n  width: 99%;\n  padding: 1px;\n  display: none;\n  position: absolute;\n  /* background-color: #e7e3e3; */\n  min-width: 160px;\n  overflow: auto;\n  -webkit-transform: translate(0, 52px);\n          transform: translate(0, 52px); \n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n  z-index: 1;\n  list-style-type:none\n}\n\n.suggestion-dropdown-content li {\n  color: black;\n  padding: 2px 2px;\n  text-decoration: none;\n  display: block;\n}\n\n.suggestion-dropdown ul{\n    -webkit-padding-start: 5px; \n}\n.suggestion-dropdown li:hover {background-color: rgb(247, 242, 242)}\n\n.suggestion-show {display:block;}\n\n.sns-search-options {\n    min-height: 24px;\n    height: 20%;\n}\n\n.topLinks{\n    color : black;\n}\n\n.sns-search-type {\n    display: inline\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/frontpage/frontpage.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"frontpage mdl-layout mdl-js-layout mdl-layout--fixed-header\">\n    <div class=\"topLinks\" style=\"padding:25px\">\n        <app-search-configuration></app-search-configuration>\n        <app-user-information></app-user-information>\n    </div>\n\n    <div class=\"wrap-middle\">\n        <form [formGroup]=\"searchForm\" (ngSubmit)=\"gotoSearch()\">\n            <div id=\"search\" class=\"search\">\n                <div class=\"sns-search-options\">\n                    <div *ngIf=\"showSuggestDropDown\">\n                        <label class=\"mdl-radio mdl-js-radio mdl-js-ripple-effect\" for=\"option-1\">\n                            <input type=\"radio\" class=\"mdl-radio__button\" name=\"options\" checked>\n                            <span class=\"mdl-radio__label\">All</span>\n                        </label>\n                        <label class=\"mdl-radio mdl-js-radio mdl-js-ripple-effect\" for=\"option-2\">\n                            <input type=\"radio\" class=\"mdl-radio__button\" name=\"options\">\n                            <span class=\"mdl-radio__label\">Ingredients</span>\n                        </label>\n                        <label class=\"mdl-radio mdl-js-radio mdl-js-ripple-effect\" for=\"option-1\">\n                            <input type=\"radio\" class=\"mdl-radio__button\" name=\"options\">\n                            <span class=\"mdl-radio__label\">Recipe</span>\n                        </label>\n                        <label class=\"mdl-radio mdl-js-radio mdl-js-ripple-effect\" for=\"option-2\">\n                            <input type=\"radio\" class=\"mdl-radio__button\" name=\"options\">\n                            <span class=\"mdl-radio__label\">Advanced</span>\n                        </label>\n                    </div>\n                </div>\n                <div (click)=\"onSearchInputClick()\">\n                    <input type=\"text\" class=\"searchTerm\" #queryinput list=\"browsers\" (keyup)=\"suggest(queryinput.value)\" formControlName=\"query\"\n                        placeholder=\"search your recipe\" />\n                    <button type=\"submit\" class=\"searchButton\">\n                        <i class=\"material-icons\">search</i>\n                    </button>\n                </div>\n                <div *ngIf=\"showSuggestDropDown\">\n                    <div id=\"myDropdown\" class=\"suggestion-dropdown suggestion-dropdown-content suggestion-show\">\n                        <ul>\n                            <li *ngFor=\"let item of items\" (click)=\"searchItemSelected(item)\">\n                                <div class=\"\">{{item}}</div>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n\n            </div>\n        </form>\n        <app-user-accounts></app-user-accounts>\n    </div>\n\n    <div class=\"wrap-lower\">\n        --\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/frontpage/frontpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_indexDataService__ = __webpack_require__("../../../../../src/app/shared/services/indexDataService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
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
    function FrontpageComponent(fb, route, router, solrService, authService) {
        var _this = this;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.solrService = solrService;
        this.authService = authService;
        this.showSuggestDropDown = false;
        this.searchForm = this.fb.group({ query: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required] });
        this.searchtype = ['ingredients', 'recipe titles'];
        this._suggestTimeout = null;
        this.stateCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.filteredStates = this.stateCtrl.valueChanges
            .startWith(null)
            .map(function (name) { return _this.filterStates(name); });
    }
    FrontpageComponent.prototype.suggest = function (term) {
        var _this = this;
        if (this._suggestTimeout) {
            window.clearTimeout(this._suggestTimeout);
        }
        this._suggestTimeout = window.setTimeout(function () {
            _this._suggestTimeout = null;
            _this.solrService.suggest(term).then(function (items) {
                _this.items = items;
            });
        }, 100);
    };
    FrontpageComponent.prototype.onSearchInputClick = function () {
        this.showSuggestDropDown = true;
    };
    FrontpageComponent.prototype.searchItemSelected = function (item) {
        this.searchForm.value.query = item;
        this.showSuggestDropDown = false;
        this.gotoSearch();
    };
    FrontpageComponent.prototype.filterStates = function (val) {
        return val ? this.searchtype.filter(function (s) { return s.toLowerCase().indexOf(val.toLowerCase()) === 0; })
            : this.searchtype;
    };
    FrontpageComponent.prototype.gotoSearch = function () {
        var searchTerm = this.searchForm.value.query;
        this.router.navigate(['/search', { recipe: searchTerm }]);
    };
    FrontpageComponent.prototype.onClick = function (event) {
        if (this.showSuggestDropDown == false)
            return 0;
        var element = document.getElementById('search');
        if (!element.contains(event.target)) {
            this.showSuggestDropDown = false;
            console.log(" clicked outside");
        }
    };
    return FrontpageComponent;
}());
FrontpageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Component */])({
        host: { '(document:click)': 'onClick($event)', },
        selector: 'app-frontpage',
        template: __webpack_require__("../../../../../src/app/frontpage/frontpage.component.html"),
        styles: [__webpack_require__("../../../../../src/app/frontpage/frontpage.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_indexDataService__["a" /* IndexDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_indexDataService__["a" /* IndexDataService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__["a" /* AuthService */]) === "function" && _e || Object])
], FrontpageComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=/Users/bhabanidas/Work/foodX/src/frontpage.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/filter/filter.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".filterlist {\n  height: calc(100% - 100px);\n  width: 0.5%;\n  max-width: 20px;\n  position: fixed;\n  top: 80px;\n  overflow-x: hidden;\n}\n\n.filterlist.opened {\n  width: 20%;\n  max-width: 200px;\n  z-index: 993;\n  height: calc(100% - 100px);\n  box-shadow: none;\n  overflow: scroll;\n  -ms-overflow-style: none; \n  overflow: -moz-scrollbars-none;  \n}\n\n.filterlist.opened::-webkit-scrollbar { \n    display: none; \n}\n\n.behclick-panel  .list-group {\n  margin-bottom: 0px;\n  padding-left: 10px;\n  list-style-type: none;\n}\n.behclick-panel .list-group-item:first-child {\n    border-top-left-radius:0px;\n    border-top-right-radius:0px;\n}\n.behclick-panel .list-group-item {\n    border-right:0px;\n    border-left:0px;\n}\n.behclick-panel .list-group-item:last-child{\n    border-bottom-right-radius:0px;\n    border-bottom-left-radius:0px;\n}\n.behclick-panel .list-group-item {\n    padding: 1px;\n}\n.behclick-panel .panel-heading {\n    border-top-right-radius: 0px;\n    border-top-left-radius: 0px;\n    border-bottom: 1px solid darkslategrey;\n}\n.behclick-panel .panel-heading:last-child{\n    border-bottom: 0px;\n}\n.behclick-panel {\n    border-radius: 0px;\n    border-right: 0px;\n    border-left: 0px;\n    border-bottom: 0px;\n    box-shadow: 0 0px 0px rgba(0, 0, 0, 0);\n}\n.behclick-panel .radio, .checkbox {\n    margin: 0px;\n    padding-left: 0px;\n}\n.behclick-panel .panel-title > a, .panel-title > small, .panel-title > .small, .panel-title > small > a, .panel-title > .small > a {\n    outline: none;\n}\n.behclick-panel .panel-body > .panel-heading{\n    padding:2px 2px;\n}\n.behclick-panel .panel-body {\n    padding: 0px;\n}\n/* unvisited link */\n.behclick-panel a:link {\n    text-decoration:none;\n}\n\n/* visited link */\n.behclick-panel a:visited {\n  text-decoration:none;\n}\n\n/* mouse over link */\n.behclick-panel a:hover {\n  text-decoration:none;\n}\n\n/* selected link */\n.behclick-panel a:active {\n  text-decoration:none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/filter/filter.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid filterlist\" [ngClass]=\"{'opened': filterlistToggle}\">\n\t<div class=\"row\">\n\t\t<div class=\"col-xs-6 col-sm-3\">\n\t\t\t<div id=\"accordion\" class=\"panel panel-primary behclick-panel\">\n\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t<div class=\"panel-heading \">\n\t\t\t\t\t\t<h6 class=\"panel-title\">veg-nonveg</h6>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div id=\"collapse0\" class=\"panel-collapse collapse in\">\n\t\t\t\t\t\t<ul class=\"list-group\">\n\t\t\t\t\t\t\t<li class=\"list-group-item\" *ngFor=\"let facet of  contenttypefacets\">\n\t\t\t\t\t\t\t\t<div class=\"checkbox\">\n\t\t\t\t\t\t\t\t\t<!-- <label> -->\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" value=\"\"> {{facet.val}}\n\t\t\t\t\t\t\t\t\t<!-- </label> -->\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-heading \">\n\t\t\t\t\t\t<h6 class=\"panel-title\"> ingredients</h6>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div id=\"collapse0\" class=\"panel-collapse collapse in\">\n\t\t\t\t\t\t<ul class=\"list-group\">\n\t\t\t\t\t\t\t<li class=\"list-group-item\" *ngFor=\"let facet of  ingredientfacets\">\n\t\t\t\t\t\t\t\t<div class=\"checkbox\">\n\t\t\t\t\t\t\t\t\t<!-- <label> -->\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" value=\"\"> {{facet.val}}\n\t\t\t\t\t\t\t\t\t<!-- </label> -->\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-heading \">\n\t\t\t\t\t\t<h6 class=\"panel-title\">recipie country</h6>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div id=\"collapse0\" class=\"panel-collapse collapse in\">\n\t\t\t\t\t\t<ul class=\"list-group\">\n\t\t\t\t\t\t\t<li class=\"list-group-item\" *ngFor=\"let facet of  locationfacets\">\n\t\t\t\t\t\t\t\t<div class=\"checkbox\">\n\t\t\t\t\t\t\t\t\t<!-- <label> -->\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" value=\"\"> {{facet.val}}\n\t\t\t\t\t\t\t\t\t<!-- </label> -->\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-heading \">\n\t\t\t\t\t\t<h6 class=\"panel-title\">likes</h6>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div id=\"collapse0\" class=\"panel-collapse collapse in\">\n\t\t\t\t\t\t<ul class=\"list-group\">\n\t\t\t\t\t\t\t<li class=\"list-group-item\" *ngFor=\"let facet of  likefacets\">\n\t\t\t\t\t\t\t\t<div class=\"checkbox\">\n\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" value=\"\"> {{facet.val}}-{{facet.val+200}}\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], FilterComponent.prototype, "filterlistToggle", void 0);
FilterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Component */])({
        selector: 'filters',
        template: __webpack_require__("../../../../../src/app/main/filter/filter.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/filter/filter.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_indexDataService__["a" /* IndexDataService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_facetService__["a" /* FacetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_facetService__["a" /* FacetService */]) === "function" && _a || Object])
], FilterComponent);

var _a;
//# sourceMappingURL=/Users/bhabanidas/Work/foodX/src/filter.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.sns-go-home{\n    width:15%;\n    display: inline-block;\n}\n.sns-go-home:hover{\n    cursor: pointer;\n}\n\n.loader-video {\n  top: calc(50% - 35px);\n  left: calc(50% - 16px);\n}\n.mdl-layout {\n    -ms-overflow-style: none; \n    overflow: -moz-scrollbars-none;  \n}\n\n.mdl-layout::-webkit-scrollbar { \n    display: none; \n}\n\n.mdl-layout__header {\n  height: 75px;\n  width : 100%;\n  background-color: rgb(204, 204, 204);\n  position: fixed;\n}\n\n.mdl-layout__tab-bar{\n  height: 75%;\n  vertical-align : text-top;\n}\n.mdl-layout__tab{\n  height: 99%;\n    font-size: 10px;\n}\n\n.mdl-layout__content {\n  width: 97%;\n  top: 80px;\n  margin-left: 1%;\n  margin-top: 1%;\n}\n\n.mdl-layout__header-row {\n  width : 100%;\n  /*padding: 0 40px 0 16px;*/\n}\n\n.mdl-layout__drawer-button {\n\n  left: inherit;\n}\n\n.mdl-layout__content_moved {\n  width: 85%;\n  margin-left: 15%;\n}\n\n.blur-main-playlist-opened {\n  opacity: 0.4;\n  transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  -ms-transition: all 0.3s ease;\n  -webkit-transition: all 0.3s ease;\n  -o-transition: all 0.3s ease;\n}\n\n.mdl-js-snackbar {\n  bottom: 0;\n  z-index: 999;\n  right: 0;\n  left: 78%;\n  background-color: rgba(196, 48, 43, 0.85);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-layout mdl-js-layout mdl-layout--fixed-header\">\n\n    <header class=\"mdl-layout__header mdl-layout__header--waterfall\">\n        <div class=\"mdl-layout__header-row\">\n            <app-go-home-component class=\"sns-go-home\"></app-go-home-component>\n            <nav class=\"mdl-navigation\" style=\"width: 70%;\">\n                <solr-search #search (videosUpdated)=\"handleSearchVideo($event)\" [loadingInProgress]=\"loadingInProgress\" style=\"width: 100%;\"></solr-search>\n            </nav>\n            <app-user-information></app-user-information>\n        </div>\n        <div aria-expanded=\"false\" role=\"button\" tabindex=\"0\" class=\"mdl-layout__drawer-button\" (click)=\"toggleFilter()\">\n            <i class=\"material-icons\"></i>\n        </div>\n    </header>\n\n    <filters [filterlistToggle]=\"filterToggle\"></filters>\n\n    <main class=\"mdl-layout__content\" LazyScroll (OnScrollMethod)=\"searchMore()\" ScrollDistance=\"3\">\n        <div class=\"page-content\" [ngClass]=\"{'mdl-layout__content_moved': filterToggle}\">\n            <videos-list *ngIf=\"videoList.length\" class=\"mdl-grid\" (videoPlaylist)=\"checkAddToPlaylist($event)\" [videoList]=\"videoList\"\n                [loadingInProgress]=\"loadingInProgress\"></videos-list>\n            <div class=\"loader loader-video\" *ngIf=\"!videoList.length\">\n                <div class=\"loading\"></div>\n            </div>\n        </div>\n    </main>\n\n\n    <video-player #videoplayer ></video-player>\n\n    <div id=\"demo-toast-example\" class=\"mdl-js-snackbar mdl-snackbar\">\n        <div class=\"mdl-snackbar__text\"></div>\n        <button class=\"mdl-snackbar__action\" type=\"button\"></button>\n    </div>\n</div>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_Helper_searchObject__ = __webpack_require__("../../../../../src/app/shared/Helper/searchObject.ts");
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
    function MainComponent(route, router, youtubeService, youtubePlayer, playlistService, notificationService, indexDataService) {
        this.route = route;
        this.router = router;
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
    MainComponent.prototype.ngAfterViewInit = function () {
        this.searchParam = this.route.snapshot.paramMap.get('recipe');
        console.log('searhc param is ' + this.searchParam);
        var searObject = new __WEBPACK_IMPORTED_MODULE_8__shared_Helper_searchObject__["a" /* SearchObject */](0, this.searchParam);
        this.solrSearch.setSearchObject(searObject);
        this.solrSearch.doSearch();
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__solr_search_solr_search_component__["a" /* SolrSearchComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__solr_search_solr_search_component__["a" /* SolrSearchComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__solr_search_solr_search_component__["a" /* SolrSearchComponent */]) === "function" && _a || Object)
], MainComponent.prototype, "solrSearch", void 0);
MainComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Component */])({
        selector: 'main-list',
        template: __webpack_require__("../../../../../src/app/main/main.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/main.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_youtube_api_service__["a" /* YoutubeApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_youtube_api_service__["a" /* YoutubeApiService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_youtube_player_service__["a" /* YoutubePlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_youtube_player_service__["a" /* YoutubePlayerService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_playlist_store_service__["a" /* PlaylistStoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_playlist_store_service__["a" /* PlaylistStoreService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_services_notification_service__["a" /* NotificationService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6__shared_services_indexDataService__["a" /* IndexDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_services_indexDataService__["a" /* IndexDataService */]) === "function" && _h || Object])
], MainComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=/Users/bhabanidas/Work/foodX/src/main.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/solr-search/solr-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input[type=text] {\n    width: 40%;\n    box-sizing: border-box;\n    border: 2px solid #ccc;\n    border-radius: 4px;\n    font-size: 16px;\n    background-color: rgb(160, 158, 158);\n    background-position: 10px 10px; \n    background-repeat: no-repeat;\n    padding: 12px 20px 12px 40px;\n    transition: width 0.4s ease-in-out;\n}\n\ninput[type=text]:focus {\n    width: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/solr-search/solr-search.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"searchForm\" (ngSubmit)=\"doSearch()\">\n    <div class=\"mdl-textfield mdl-js-textfield\" style=\"width: 80%;\">\n        <input class=\"mdl-textfield__input\" (change)=\"selectedenvent()\" list=\"browsers\" #queryinput (keyup)=\"suggest(queryinput.value)\"\n            formControlName=\"query\" type=\"text\" id=\"query\" autocomplete=\"off\" />\n        <button type=\"submit\" class=\"mdl-button mdl-js-button mdl-button--icon\">\n            <i class=\"material-icons\">search</i>\n        </button>\n        <datalist id=\"browsers\">\n            <option *ngFor=\"let item of items\" value={{item}}></option>\n        </datalist>\n    </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/main/solr-search/solr-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_youtube_player_service__ = __webpack_require__("../../../../../src/app/shared/services/youtube-player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_notification_service__ = __webpack_require__("../../../../../src/app/shared/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_indexDataService__ = __webpack_require__("../../../../../src/app/shared/services/indexDataService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_facetService__ = __webpack_require__("../../../../../src/app/shared/services/facetService.ts");
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
        // this.searObject = new SearchObject(0, this.searchParam);
        // this.searObject = new SearchObject(0, 'indian')
        // this.search().then(data => { this.videosUpdated.emit(data); });
        this.solrService = solrService;
        this.fb = fb;
        this.youtubePlayer = youtubePlayer;
        this.notificationService = notificationService;
        this.facetService = facetService;
        this.videosUpdated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
        this.pagenum = 0;
        this.searchForm = this.fb.group({
            query: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required]
        });
    }
    SolrSearchComponent.prototype.setSearchObject = function (param) {
        var _this = this;
        this.searObject = param;
        this.queryinput.value = param.searchTerm;
        console.log("changing the search object to " + this.searObject.searchTerm);
        this.search().then(function (data) { _this.videosUpdated.emit(data); });
    };
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('queryinput'),
    __metadata("design:type", Object)
], SolrSearchComponent.prototype, "queryinput", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Output */])(),
    __metadata("design:type", Object)
], SolrSearchComponent.prototype, "videosUpdated", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], SolrSearchComponent.prototype, "loadingInProgress", void 0);
SolrSearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Component */])({
        selector: 'solr-search',
        template: __webpack_require__("../../../../../src/app/main/solr-search/solr-search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/solr-search/solr-search.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_4__shared_services_indexDataService__["a" /* IndexDataService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_indexDataService__["a" /* IndexDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_indexDataService__["a" /* IndexDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_youtube_player_service__["a" /* YoutubePlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_youtube_player_service__["a" /* YoutubePlayerService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_notification_service__["a" /* NotificationService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_facetService__["a" /* FacetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_services_facetService__["a" /* FacetService */]) === "function" && _e || Object])
], SolrSearchComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=/Users/bhabanidas/Work/foodX/src/solr-search.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/video-player/video-player.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n.player-containter {\n  transition: all 300ms ease-in-out;\n  width: 440px;\n  height: 250px;\n  position: fixed;\n  z-index: 992;\n  bottom: 16px;\n  right: 5px;\n  background-color: #000;\n  border: 3px solid rgba(79, 111, 144, 0.75);\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12);\n}\n\n.player-containter.minimized {\n  -webkit-transform: translate3d(-20%, 20%, 0) scale(0.6);\n          transform: translate3d(-20%, 20%, 0) scale(0.6);\n}\n\n.player-containter.super-minimized {\n  /* transform: translate3d(-42.5%, 46.5%, 0) scale(0.15); */\n  -webkit-transform: translate3d(30%, 46.5%, 0) scale(0.15);\n          transform: translate3d(30%, 46.5%, 0) scale(0.15);\n}\n\n.player-view-controls {\n  cursor: pointer;\n  position: absolute;\n  color: rgb(0, 0, 0);\n  background-color: rgb(133, 130, 130);\n  top: -27px;\n  right: -3px;\n  font-size: 30px;\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n\n.player-view-controls .minimize {\n  margin-left: 0px;\n}\n\n.player-controls-block {\n  margin-top: 5px;\n  text-align: center;\n  color: #fff;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.mdl-button--icon.play {\n  width: 42px;\n  height: 42px;\n}\n\n.mdl-button--icon.play i {\n  -webkit-transform: translate(-20px, -12px);\n          transform: translate(-20px, -12px);\n  font-size: 40px;\n}\n\n.mdl-button--icon.prev {\n  width: 30px;\n  height: 30px;\n}\n\n.mdl-button--icon.prev i {\n  -webkit-transform: translate(-15px, -12px);\n          transform: translate(-15px, -12px);\n  font-size: 28px;\n}\n\n.mdl-button--icon.next {\n  width: 30px;\n  height: 30px;\n}\n\n.mdl-button--icon.next i {\n  -webkit-transform: translate(-14px, -12px);\n          transform: translate(-14px, -12px);\n  font-size: 28px;\n}\n\n.repeat-shuffle-block {\n  margin-left: 40px;\n  position: absolute;\n  top: 10px;\n}\n\n.repeat-shuffle-block button.active {\n  background-color: rgba(196, 48, 43, 0.85);\n}\n\n.mute-block {\n  margin-left: -80px;\n  position: absolute;\n  top: 10px;\n}\n\n.mute-block button.active {\n  background-color: rgba(196, 48, 43, 0.85);\n}\n\n.playlist-drop-button {\n  position: absolute;\n  color: #fff;\n  right: 12px;\n  top: 10px;\n}\n\n.main-yt-player-block {\n  position: relative;\n  text-align: center;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.main-yt-player-block .material-icons {\n  position: absolute;\n  color: white;\n  font-size: 255px;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  cursor: pointer;\n  display: none;\n  text-shadow: 2px 2px 2px #000;\n}\n\n.main-yt-player-block:hover .material-icons {\n  display: block;\n}\n\n.player-fullscreen {\n  bottom: 50px;\n  left: 0;\n  width: 95%;\n  height: calc(100% - 114px);\n  border: none;\n  box-shadow: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/video-player/video-player.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-player-block\">\n  <div class=\"player-containter\" *ngIf=showPlayer [ngClass]=\"{'minimized': minPlayer, 'super-minimized': superMinPlayer, 'player-fullscreen': fullscreenActive}\">\n    <div class=\"player-view-controls\">\n      <!-- <i class=\"material-icons\" *ngIf=\"!minPlayer && !superMinPlayer && !fullscreenActive\" (click)=\"togglePlayer()\">arrow_drop_down</i>\n      <i class=\"material-icons\" *ngIf=\"minPlayer && !superMinPlayer && !fullscreenActive\" (click)=\"togglePlayer()\">arrow_drop_up</i> -->\n      <i class=\"material-icons minimize\" *ngIf=\"!superMinPlayer && !fullscreenActive\" (click)=\"minimizePlayer()\">remove</i>\n      <i class=\"material-icons close\"  (click)=\"closePlayer()\">close</i>\n    \n    </div>\n    <div class=\"main-yt-player-block\">\n      <i class=\"material-icons\" *ngIf=\"superMinPlayer\" (click)=\"minimizePlayer()\">zoom_out_map</i>\n      <div id=\"yt-player\"></div>\n    </div>\n  </div>\n</div>"

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
        this.minPlayer = false;
        this.superMinPlayer = true;
        this.playingEvent = 'pause';
        this.shuffle = false;
        this.repeat = false;
        this.fullscreenActive = false;
        this.showPlayer = true;
        this.repeatActive = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
        this.shuffleActive = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
        this.nextVideoEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
        this.prevVideoEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
        this.playFirstInPlaylist = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
        this.clearPlaylist = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
        this.exportPlaylist = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
        this.importPlaylist = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
        this.closePlaylist = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
        this.youtubePlayer.playPauseEvent.subscribe(function (event) {
            _this.superMinPlayer = !_this.superMinPlayer;
            _this.playingEvent = event;
        });
    }
    VideoPlayerComponent.prototype.ngAfterContentInit = function () {
        var doc = window.document;
        var playerApi = doc.createElement('script');
        playerApi.type = 'text/javascript';
        playerApi.src = 'https://www.youtube.com/iframe_api';
        doc.body.appendChild(playerApi);
        this.youtubePlayer.createPlayer();
    };
    VideoPlayerComponent.prototype.toggleFullscreen = function () {
        console.log(" toggle fullscreen called ");
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
    VideoPlayerComponent.prototype.closePlayer = function () {
        this.youtubePlayer.playVideo('');
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Output */])(),
    __metadata("design:type", Object)
], VideoPlayerComponent.prototype, "repeatActive", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Output */])(),
    __metadata("design:type", Object)
], VideoPlayerComponent.prototype, "shuffleActive", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Output */])(),
    __metadata("design:type", Object)
], VideoPlayerComponent.prototype, "nextVideoEvent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Output */])(),
    __metadata("design:type", Object)
], VideoPlayerComponent.prototype, "prevVideoEvent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Output */])(),
    __metadata("design:type", Object)
], VideoPlayerComponent.prototype, "playFirstInPlaylist", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Output */])(),
    __metadata("design:type", Object)
], VideoPlayerComponent.prototype, "clearPlaylist", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Output */])(),
    __metadata("design:type", Object)
], VideoPlayerComponent.prototype, "exportPlaylist", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Output */])(),
    __metadata("design:type", Object)
], VideoPlayerComponent.prototype, "importPlaylist", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Output */])(),
    __metadata("design:type", Object)
], VideoPlayerComponent.prototype, "closePlaylist", void 0);
VideoPlayerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Component */])({
        selector: 'video-player',
        template: __webpack_require__("../../../../../src/app/main/video-player/video-player.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/video-player/video-player.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_youtube_player_service__["a" /* YoutubePlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_youtube_player_service__["a" /* YoutubePlayerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_notification_service__["a" /* NotificationService */]) === "function" && _b || Object])
], VideoPlayerComponent);

var _a, _b;
//# sourceMappingURL=/Users/bhabanidas/Work/foodX/src/video-player.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/videos-list/videos-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".loader-progress {\n  position: relative;\n  width: 100%;\n  margin-bottom: 60px;\n  top: 0;\n  left: 0;\n}\n\n.loader-progress>.loading {\n  margin: 0 auto;\n}\n\n.demo-card-square.mdl-card {\n  height: 300;\n  width: 100%;\n}\n\n.custom-cell.mdl-cell--2-col {\n  width: calc(25% - 25px);\n}\n\n.custom-cell {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.demo-card-square>.mdl-card__title {\n  color: #fff;\n}\n\n.mdl-card__title {\n  position: relative;\n  transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  -ms-transition: all 0.3s ease;\n  -webkit-transition: all 0.3s ease;\n  -o-transition: all 0.3s ease;\n}\n\n.mdl-card--expand:hover {\n  box-shadow: inset 0 0 0 9999px rgba(0, 0, 0, 0.3);\n  background-size: 130% !important;\n  cursor: pointer;\n}\n\n.mdl-card__supporting-text {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding: 6px 2px 2px 2px;\n  color: rgb(196, 48, 43);\n  text-align: right;\n  width: 97%;\n}\n\n.mdl-card__supporting-text .material-icons {\n  cursor: pointer;\n  font-size: 20px;\n}\n\n.video-name-block {\n  font-size: 11px;\n  font-weight: normal;\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 40px;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.45);\n}\n\n.video-info-block {\n  font-size: 11px;\n  font-weight: normal;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  height: 30px;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.45);\n}\n\n.video-informations {\n  padding: 8px;\n  text-align: center;\n}\n\n.video-informations i {\n  font-size: 11px;\n}\n\n.video-play-button {\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n}\n\n.video-play-button i {\n  font-size: 50px;\n  visibility: hidden;\n}\n\n.mdl-card--expand:hover .video-play-button i {\n  visibility: visible;\n}\n\n.last-item {\n  margin-bottom: 45px;\n}\n\n@media (max-width: 479px) {\n  .custom-cell.mdl-cell--2-col {\n    width: calc(100% - 16px);\n  }\n}\n\n@media (max-width: 839px) and (min-width: 480px) {\n  .custom-cell.mdl-cell--2-col {\n    width: calc(50% - 16px);\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/videos-list/videos-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-cell custom-cell mdl-cell--2-col\" id=\"{{i + video.id}}\" *ngFor=\"let video of videoList; let i = index;\"\n  [ngClass]=\"{'last-item': i === videoList.length-1}\">\n  <div class=\"demo-card-square mdl-card mdl-shadow--2dp\">\n    <div class=\"mdl-card__title mdl-card--expand\" (click)=\"play(video)\" [ngStyle]=\"{'background': '#000 url(' + video.snippet.thumbnails.high.url + ') center center no-repeat', 'background-size': '90%'}\">\n      <div class=\"video-info-block\">\n        <div class=\"video-informations\">\n          <span style=\"float: left;\">\n\t\t\t\t\t\t<i class=\"material-icons\">thumb_up</i>\n\t\t\t\t\t\t{{ video.statistics.likeCount | videoLikes }}\n\t\t\t\t\t</span>\n          <span style=\"margin-left: 10px;\">\n\t\t\t\t\t\t<i class=\"material-icons\">remove_red_eye</i>\n\t\t\t\t\t\t{{ video.statistics.viewCount | videoViews}}\n\t\t\t\t\t</span>\n          <span style=\"margin-left: 10px; float: right;\">\n\t\t\t\t\t\t<i class=\"material-icons\">access_time</i>\n\t\t\t\t\t\t{{ video.contentDetails.duration | videoDuration }}\n\t\t\t\t\t</span>\n        </div>\n      </div>\n      <div class=\"video-play-button\">\n        <i class=\"material-icons\">play_circle_filled</i>\n      </div>\n    </div>\n    <div class=\"mdl-card__supporting-text\">\n      <div class=\"video-informations\">\n        {{ video.snippet.title | playlistItemName }}\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"loader loader-progress\" *ngIf=\"loadingInProgress\">\n  <div class=\"loading\"></div>\n</div>"

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
        this.videoPlaylist = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], VideosListComponent.prototype, "videoList", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], VideosListComponent.prototype, "loadingInProgress", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Output */])(),
    __metadata("design:type", Object)
], VideosListComponent.prototype, "videoPlaylist", void 0);
VideosListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Component */])({
        selector: 'videos-list',
        template: __webpack_require__("../../../../../src/app/main/videos-list/videos-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/videos-list/videos-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_youtube_player_service__["a" /* YoutubePlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_youtube_player_service__["a" /* YoutubePlayerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_playlist_store_service__["a" /* PlaylistStoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_playlist_store_service__["a" /* PlaylistStoreService */]) === "function" && _b || Object])
], VideosListComponent);

var _a, _b;
//# sourceMappingURL=/Users/bhabanidas/Work/foodX/src/videos-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/videos-playlist/videos-playlist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".playlist {\n  height: calc(100% - 113px);\n  width: 1%;\n  max-width: 20px;\n  position: fixed;\n  top: 100px;\n  background-color: rgba(204, 204, 204, 1);\n  overflow-x: hidden;\n  transition: 0.1s;\n  box-shadow: -2px 2px 2px 0 rgba(0, 0, 0, .14), -2px 3px 1px -2px rgba(0, 0, 0, .2), -2px 1px 5px 0 rgba(0, 0, 0, .12);\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.playlist.opened {\n  width: 20%;\n  max-width: 20%;\n  z-index: 993;\n  height: calc(100% - 114px);\n  box-shadow: none;\n}\n\n.playlist-thumbnail {\n  height: 55px;\n  width: 55px;\n  background: #000;\n  margin: 5px;\n  display: inline-block;\n  position: relative;\n}\n\n.playist-item.playing {\n  background: rgba(196, 48, 43, 0.95);\n}\n\n.playist-item-empty {\n  color: #fff;\n}\n\n.playist-item-empty .playlist-thumbnail {\n  text-align: center;\n}\n\n.playist-item-empty i {\n  margin-top: 10px;\n  font-size: 35px;\n}\n\n.playist-item:hover {\n  background: rgba(196, 48, 43, 0.5);\n  cursor: pointer;\n}\n\n.playist-item:hover .delete-from-playlist {\n  display: block;\n}\n\n.no-in-playlist {\n  color: #fff;\n  text-shadow: 2px 2px 2px #000;\n}\n\n.video-duration {\n  color: #fff;\n  text-shadow: 2px 2px 2px #000;\n  position: absolute;\n  bottom: -4px;\n  left: 1px;\n  font-size: 9px;\n}\n\n.opened-item-info {\n  display: inline-block;\n  color: rgba(255, 255, 255, 0.8);\n  position: absolute;\n  left: 70px;\n  margin-top: 8px;\n}\n\n.opened-item-info.closed {\n  display: none;\n}\n\n.delete-from-playlist {\n  position: absolute;\n  display: none;\n  bottom: 0;\n  right: 0;\n  color: #f44542;\n  background-color: rgba(0, 0, 0, 0.65);\n  font-size: 16px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/videos-playlist/videos-playlist.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"playlist\" class=\"playlist\" [ngClass]=\"{'opened': playlistToggle}\">\n    <div id=\"{{video.id}}\" class=\"playist-item\" *ngFor=\"let video of videoPlaylist; let i = index;\" (click)=\"play(video.id)\"\n        [ngClass]=\"{'playing': currentPlaying(video.id)}\">\n        <div class=\"playlist-thumbnail\" [ngStyle]=\"{'background': '#000 url(' + video.snippet.thumbnails.default.url + ') center center no-repeat', 'background-size': '100%'}\">\n            <span class=\"no-in-playlist\">{{ i + 1 }}</span>\n            <span class=\"video-duration\">{{ video.contentDetails.duration | videoDuration }}</span>\n            <i class=\"material-icons delete-from-playlist\" (click)=\"removeFromPlaylist(video)\">cancel</i>\n        </div>\n        <div class=\"opened-item-info\" [ngClass]=\"{'closed': !playlistToggle}\" *ngIf=\"playlistNames\">\n            {{ video.snippet.title | playlistItemName }}\n        </div>\n    </div>\n    <div class=\"playist-item-empty\" *ngIf=\"!videoPlaylist.length\">\n        <div class=\"opened-item-info\" [ngClass]=\"{'closed': !playlistToggle}\" *ngIf=\"playlistNames\">\n            Playlist is empty\n        </div>\n    </div>\n</div>å"

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], VideosPlaylistComponent.prototype, "playlistToggle", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], VideosPlaylistComponent.prototype, "videoPlaylist", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], VideosPlaylistComponent.prototype, "playlistNames", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], VideosPlaylistComponent.prototype, "repeat", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], VideosPlaylistComponent.prototype, "shuffle", void 0);
VideosPlaylistComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Component */])({
        selector: 'videos-playlist',
        template: __webpack_require__("../../../../../src/app/main/videos-playlist/videos-playlist.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/videos-playlist/videos-playlist.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_youtube_player_service__["a" /* YoutubePlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_youtube_player_service__["a" /* YoutubePlayerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_playlist_store_service__["a" /* PlaylistStoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_playlist_store_service__["a" /* PlaylistStoreService */]) === "function" && _b || Object])
], VideosPlaylistComponent);

var _a, _b;
//# sourceMappingURL=/Users/bhabanidas/Work/foodX/src/videos-playlist.component.js.map

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
//# sourceMappingURL=/Users/bhabanidas/Work/foodX/src/indexdata.js.map

/***/ }),

/***/ "../../../../../src/app/shared/Helper/searchObject.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchObject; });
var SearchObject = (function () {
    function SearchObject(pageNum, searchTerm) {
        this._pageNum = 0;
        this._noOfRow = 14;
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

//# sourceMappingURL=/Users/bhabanidas/Work/foodX/src/searchObject.js.map

/***/ }),

/***/ "../../../../../src/app/shared/Helper/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(name, email) {
        this._userName = "Guest";
        // private location : string;
        this._gender = "female";
        this._pictureLink = "/assets/user.jpg";
        this._userName = name;
        this._email = email;
    }
    Object.defineProperty(User.prototype, "userName", {
        get: function () {
            return this._userName;
        },
        set: function (userName) {
            this._userName = userName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "eMail", {
        get: function () {
            return this._email;
        },
        set: function (email) {
            this._email = email;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "gender", {
        get: function () {
            return this._gender;
        },
        set: function (gender) {
            this._gender = gender;
        },
        enumerable: true,
        configurable: true
    });
    User.prototype.setPictureLink = function (pic) {
        this._pictureLink = pic;
    };
    Object.defineProperty(User.prototype, "pictureLink", {
        get: function () {
            return this._pictureLink;
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());

//# sourceMappingURL=/Users/bhabanidas/Work/foodX/src/user.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/go-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoHomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GoHomeComponent = (function () {
    function GoHomeComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    GoHomeComponent.prototype.ngOnInit = function () {
    };
    GoHomeComponent.prototype.goHome = function () {
        console.log("Going to the front page route");
        this.router.navigate(['/']);
    };
    return GoHomeComponent;
}());
GoHomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Component */])({
        selector: 'app-go-home-component',
        template: "<div  (click)=\"goHome()\"  style=\"display:inline-block\">\n    <i style=\"width:20%\" class=\"material-icons\">home</i>\n    <div class=\"mdl-layout-title\" style=\"font-family:cursive\">Shake & Stir</div>\n    </div>"
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], GoHomeComponent);

var _a, _b;
//# sourceMappingURL=/Users/bhabanidas/Work/foodX/src/go-home.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/login-callback.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginCallbackComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginCallbackComponent = (function () {
    function LoginCallbackComponent(authService) {
        this.authService = authService;
    }
    LoginCallbackComponent.prototype.ngOnInit = function () {
        this.authService.handleAuth();
    };
    return LoginCallbackComponent;
}());
LoginCallbackComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Component */])({
        selector: 'app-callback',
        template: "<p>Loading... </p>",
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], LoginCallbackComponent);

var _a;
//# sourceMappingURL=/Users/bhabanidas/Work/foodX/src/login-callback.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/not-found.component.ts":
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Component */])({
        template: '<p>Page Not Fount!</p>'
    })
], PageNotFoundComponent);

//# sourceMappingURL=/Users/bhabanidas/Work/foodX/src/not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/search-configuration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchConfigurationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchConfigurationComponent = (function () {
    function SearchConfigurationComponent(router) {
        this.router = router;
        this.showConfig = false;
    }
    SearchConfigurationComponent.prototype.ngOnInit = function () {
    };
    SearchConfigurationComponent.prototype.setShowconfig = function () {
        console.log(" changing the showConfig value");
        this.showConfig = true;
        this.router.navigate(['/user-preferences']);
    };
    SearchConfigurationComponent.prototype.goToAboutPage = function () {
        this.router.navigate(['/about']);
    };
    return SearchConfigurationComponent;
}());
SearchConfigurationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Component */])({
        selector: 'app-search-configuration',
        template: "\n    <button type=\"button\" (click)=\"goToAboutPage()\" class=\"mdl-button mdl-js-button mdl-js-ripple-effect\">\n        <i class=\"material-icons\">help</i>\n        <span>about</span>\n    </button>\n    <button type=\"button\" (click)=\"setShowconfig()\" class=\"mdl-button mdl-js-button mdl-js-ripple-effect\">\n        <i class=\"material-icons\">settings</i>\n        <span>set Preferene</span>\n    </button>"
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], SearchConfigurationComponent);

var _a;
//# sourceMappingURL=/Users/bhabanidas/Work/foodX/src/search-configuration.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/user-accounts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserAccountsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserAccountsComponent = (function () {
    function UserAccountsComponent(authService) {
        var _this = this;
        this.authService = authService;
        this.isLoggedin = false;
        this.isLoggedin = authService.loggedIn;
        this.authService.userChangeEvent.subscribe(function (user) { return _this.isLoggedin = (user.userName == "Guest") ? false : true; });
    }
    UserAccountsComponent.prototype.ngOnInit = function () {
    };
    UserAccountsComponent.prototype.signOutUser = function () {
        this.authService.logout();
    };
    UserAccountsComponent.prototype.singInUser = function () {
        this.authService.login();
    };
    return UserAccountsComponent;
}());
UserAccountsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Component */])({
        selector: 'app-user-accounts',
        template: "\n    <div class=\"sns-link-account\">\n    <div class=\"sns-link-buttons\">\n        <button *ngIf=\"!isLoggedin\" (click)=\"singInUser()\" class=\"sns-link-button mdl-button mdl-js-button mdl-button--raised\">\n            <i class=\"material-icons\">assignment_ind</i>\n            <span>Sing in</span>\n        </button>\n        <button *ngIf=\"isLoggedin\" (click)=\"signOutUser()\" class=\"sns-link-button mdl-button mdl-js-button mdl-button--raised\">\n            <i class=\"material-icons\">assignment_ind</i>\n            <span>Sing out</span>\n        </button>\n        <button class=\"sns-link-button mdl-button mdl-js-button mdl-button--raised\">\n            <i class=\"material-icons\">phonelink_setup</i>\n            <span>Link Devices</span>\n        </button>\n    </div>\n    </div>\n    ",
        styles: ['.sns-link-account {margin-top: 20px;display:inline-block; width:100%}',
            '.sns-link-buttons{display: flex;justify-content: center}',
            '.sns-link-button{background-color: grey;color: white;margin:5px;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)}'
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], UserAccountsComponent);

var _a;
//# sourceMappingURL=/Users/bhabanidas/Work/foodX/src/user-accounts.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/user-information.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Helper_user__ = __webpack_require__("../../../../../src/app/shared/Helper/user.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInformationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserInformationComponent = (function () {
    function UserInformationComponent(authService) {
        var _this = this;
        this.authService = authService;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__Helper_user__["a" /* User */]("Guest", "Guest@sns.com");
        this.user = this.authService.loggedUser;
        this.authService.userChangeEvent.subscribe(function (user) { return _this.user = user; });
    }
    UserInformationComponent.prototype.ngOnInit = function () {
    };
    UserInformationComponent.prototype.signInAction = function () {
        if (this.user.userName == "Guest") {
            this.authService.login();
        }
        else {
            this.authService.logout();
        }
    };
    return UserInformationComponent;
}());
UserInformationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Component */])({
        selector: 'app-user-information',
        template: "\n    <div (click)=\"signInAction()\" style=\"padding-right:25px;float:right\">\n    <span class=\"mdl-chip mdl-chip--contact\">\n        <img class=\"mdl-chip__contact\" src={{user.pictureLink}}>\n        <span class=\"mdl-chip__text\">{{user.userName}}</span>\n    </span>\n    </div>\n    ",
        styles: ['.mdl-chip__contact{ max-height: 50px }',
            '.mdl-chip:hover { cursor: pointer }']
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], UserInformationComponent);

var _a;
//# sourceMappingURL=/Users/bhabanidas/Work/foodX/src/user-information.component.js.map

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
//# sourceMappingURL=/Users/bhabanidas/Work/foodX/src/constants.js.map

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
        this.OnScrollMethod = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
        this._element = this.element.nativeElement;
        if (!this.scrollTrigger) {
            this.scrollTrigger = 1;
        }
    }
    LazyScroll.prototype.onScroll = function () {
        var windowHeight = "innerHeight" in window ? window.innerHeight
            : document.documentElement.offsetHeight;
        var body = document.body, html = document.documentElement;
        var docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        var windowBottom = windowHeight + window.pageYOffset;
        if (windowBottom >= docHeight) {
            console.log('bottom reached');
            this.OnScrollMethod.emit(null);
        }
    };
    return LazyScroll;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])('ScrollDistance'),
    __metadata("design:type", Number)
], LazyScroll.prototype, "scrollTrigger", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Output */])(),
    __metadata("design:type", Object)
], LazyScroll.prototype, "OnScrollMethod", void 0);
LazyScroll = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Directive */])({
        selector: '[LazyScroll]',
        host: {
            '(window:scroll)': 'onScroll($event)'
        }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ElementRef */]) === "function" && _a || Object])
], LazyScroll);

var _a;
//# sourceMappingURL=/Users/bhabanidas/Work/foodX/src/lazy-scroll.directive.js.map

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
        name: 'playlistItemName'
    })
], PlaylistItemNamePipe);

//# sourceMappingURL=/Users/bhabanidas/Work/foodX/src/playlist-item-name.pipe.js.map

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
        name: 'videoDuration'
    })
], VideoDurationPipe);

//# sourceMappingURL=/Users/bhabanidas/Work/foodX/src/video-duration.pipe.js.map

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
        name: 'videoLikes'
    })
], VideoLikesPipe);

//# sourceMappingURL=/Users/bhabanidas/Work/foodX/src/video-likes.pipe.js.map

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
        name: 'videoViews'
    })
], VideoViewsPipe);

//# sourceMappingURL=/Users/bhabanidas/Work/foodX/src/video-views.pipe.js.map

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])()
], FacetService);

//# sourceMappingURL=/Users/bhabanidas/Work/foodX/src/facetService.js.map

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Jsonp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Jsonp */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__notification_service__["a" /* NotificationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__facetService__["a" /* FacetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__facetService__["a" /* FacetService */]) === "function" && _d || Object])
], IndexDataService);

var _a, _b, _c, _d;
//# sourceMappingURL=/Users/bhabanidas/Work/foodX/src/indexDataService.js.map

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], NotificationService);

//# sourceMappingURL=/Users/bhabanidas/Work/foodX/src/notification.service.js.map

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], PlaylistStoreService);

//# sourceMappingURL=/Users/bhabanidas/Work/foodX/src/playlist-store.service.js.map

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__notification_service__["a" /* NotificationService */]) === "function" && _b || Object])
], YoutubeApiService);

var _a, _b;
//# sourceMappingURL=/Users/bhabanidas/Work/foodX/src/youtube-api.service.js.map

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
        this.notificationService = notificationService;
        this.isPlayerStarted = false;
        this.videoChangeEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */](true);
        this.playPauseEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */](true);
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
        var ytOptions = Object.assign({}, {
            width: 440,
            height: 250,
            videoId: '',
            playerVars: { iv_load_policy: 3, rel: 0 }
        }, {
            events: { onStateChange: function (ev) { _this.onPlayerStateChange(ev); } }
        });
        var interval = setInterval(function () {
            if ((typeof window['YT'] !== "undefined") && window['YT'] && window['YT'].Player) {
                _this.yt_player = new YT.Player('yt-player', ytOptions);
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
        console.log("from playVideo - Going to start playing a video");
        this.isPlayerStarted = true;
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
        this.yt_player.setSize(width, height);
    };
    return YoutubePlayerService;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]) === "function" && _a || Object)
], YoutubePlayerService.prototype, "videoChangeEvent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]) === "function" && _b || Object)
], YoutubePlayerService.prototype, "playPauseEvent", void 0);
YoutubePlayerService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__notification_service__["a" /* NotificationService */]) === "function" && _c || Object])
], YoutubePlayerService);

var _a, _b, _c;
//# sourceMappingURL=/Users/bhabanidas/Work/foodX/src/youtube-player.service.js.map

/***/ }),

/***/ "../../../../../src/assets/mainpic.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "mainpic.5b383e4058493af51008.png";

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
//# sourceMappingURL=/Users/bhabanidas/Work/foodX/src/environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/bhabanidas/Work/foodX/src/main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map