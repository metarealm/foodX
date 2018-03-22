webpackJsonp(["map-view.module"],{

/***/ "./node_modules/@agm/core/core.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export coreDirectives */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgmCoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives_map__ = __webpack_require__("./node_modules/@agm/core/directives/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_circle__ = __webpack_require__("./node_modules/@agm/core/directives/circle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_info_window__ = __webpack_require__("./node_modules/@agm/core/directives/info-window.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_marker__ = __webpack_require__("./node_modules/@agm/core/directives/marker.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_polygon__ = __webpack_require__("./node_modules/@agm/core/directives/polygon.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__directives_polyline__ = __webpack_require__("./node_modules/@agm/core/directives/polyline.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__directives_polyline_point__ = __webpack_require__("./node_modules/@agm/core/directives/polyline-point.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__directives_kml_layer__ = __webpack_require__("./node_modules/@agm/core/directives/kml-layer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__directives_data_layer__ = __webpack_require__("./node_modules/@agm/core/directives/data-layer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_maps_api_loader_lazy_maps_api_loader__ = __webpack_require__("./node_modules/@agm/core/services/maps-api-loader/lazy-maps-api-loader.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_maps_api_loader_maps_api_loader__ = __webpack_require__("./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utils_browser_globals__ = __webpack_require__("./node_modules/@agm/core/utils/browser-globals.js");














/**
 * @internal
 */
function coreDirectives() {
    return [
        __WEBPACK_IMPORTED_MODULE_1__directives_map__["a" /* AgmMap */], __WEBPACK_IMPORTED_MODULE_4__directives_marker__["a" /* AgmMarker */], __WEBPACK_IMPORTED_MODULE_3__directives_info_window__["a" /* AgmInfoWindow */], __WEBPACK_IMPORTED_MODULE_2__directives_circle__["a" /* AgmCircle */],
        __WEBPACK_IMPORTED_MODULE_5__directives_polygon__["a" /* AgmPolygon */], __WEBPACK_IMPORTED_MODULE_6__directives_polyline__["a" /* AgmPolyline */], __WEBPACK_IMPORTED_MODULE_7__directives_polyline_point__["a" /* AgmPolylinePoint */], __WEBPACK_IMPORTED_MODULE_8__directives_kml_layer__["a" /* AgmKmlLayer */],
        __WEBPACK_IMPORTED_MODULE_9__directives_data_layer__["a" /* AgmDataLayer */]
    ];
}
/**
 * The angular-google-maps core module. Contains all Directives/Services/Pipes
 * of the core module. Please use `AgmCoreModule.forRoot()` in your app module.
 */
var AgmCoreModule = (function () {
    function AgmCoreModule() {
    }
    /**
     * Please use this method when you register the module at the root level.
     */
    AgmCoreModule.forRoot = function (lazyMapsAPILoaderConfig) {
        return {
            ngModule: AgmCoreModule,
            providers: __WEBPACK_IMPORTED_MODULE_12__utils_browser_globals__["a" /* BROWSER_GLOBALS_PROVIDERS */].concat([
                { provide: __WEBPACK_IMPORTED_MODULE_11__services_maps_api_loader_maps_api_loader__["a" /* MapsAPILoader */], useClass: __WEBPACK_IMPORTED_MODULE_10__services_maps_api_loader_lazy_maps_api_loader__["b" /* LazyMapsAPILoader */] },
                { provide: __WEBPACK_IMPORTED_MODULE_10__services_maps_api_loader_lazy_maps_api_loader__["a" /* LAZY_MAPS_API_CONFIG */], useValue: lazyMapsAPILoaderConfig }
            ]),
        };
    };
    return AgmCoreModule;
}());

AgmCoreModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */], args: [{ declarations: coreDirectives(), exports: coreDirectives() },] },
];
/** @nocollapse */
AgmCoreModule.ctorParameters = function () { return []; };
//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directives_map__ = __webpack_require__("./node_modules/@agm/core/directives/map.js");
/* unused harmony reexport AgmMap */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives_circle__ = __webpack_require__("./node_modules/@agm/core/directives/circle.js");
/* unused harmony reexport AgmCircle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_info_window__ = __webpack_require__("./node_modules/@agm/core/directives/info-window.js");
/* unused harmony reexport AgmInfoWindow */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_kml_layer__ = __webpack_require__("./node_modules/@agm/core/directives/kml-layer.js");
/* unused harmony reexport AgmKmlLayer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_data_layer__ = __webpack_require__("./node_modules/@agm/core/directives/data-layer.js");
/* unused harmony reexport AgmDataLayer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_marker__ = __webpack_require__("./node_modules/@agm/core/directives/marker.js");
/* unused harmony reexport AgmMarker */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__directives_polygon__ = __webpack_require__("./node_modules/@agm/core/directives/polygon.js");
/* unused harmony reexport AgmPolygon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__directives_polyline__ = __webpack_require__("./node_modules/@agm/core/directives/polyline.js");
/* unused harmony reexport AgmPolyline */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__directives_polyline_point__ = __webpack_require__("./node_modules/@agm/core/directives/polyline-point.js");
/* unused harmony reexport AgmPolylinePoint */









//# sourceMappingURL=directives.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/circle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgmCircle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_managers_circle_manager__ = __webpack_require__("./node_modules/@agm/core/services/managers/circle-manager.js");


var AgmCircle = (function () {
    function AgmCircle(_manager) {
        this._manager = _manager;
        /**
         * Indicates whether this Circle handles mouse events. Defaults to true.
         */
        this.clickable = true;
        /**
         * If set to true, the user can drag this circle over the map. Defaults to false.
         */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
         * If set to true, the user can edit this circle by dragging the control points shown at
         * the center and around the circumference of the circle. Defaults to false.
         */
        this.editable = false;
        /**
         * The radius in meters on the Earth's surface.
         */
        this.radius = 0;
        /**
         * The stroke position. Defaults to CENTER.
         * This property is not supported on Internet Explorer 8 and earlier.
         */
        this.strokePosition = 'CENTER';
        /**
         * The stroke width in pixels.
         */
        this.strokeWeight = 0;
        /**
         * Whether this circle is visible on the map. Defaults to true.
         */
        this.visible = true;
        /**
         * This event is fired when the circle's center is changed.
         */
        this.centerChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * This event emitter gets emitted when the user clicks on the circle.
         */
        this.circleClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * This event emitter gets emitted when the user clicks on the circle.
         */
        this.circleDblClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * This event is repeatedly fired while the user drags the circle.
         */
        this.drag = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * This event is fired when the user stops dragging the circle.
         */
        this.dragEnd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * This event is fired when the user starts dragging the circle.
         */
        this.dragStart = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * This event is fired when the DOM mousedown event is fired on the circle.
         */
        this.mouseDown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * This event is fired when the DOM mousemove event is fired on the circle.
         */
        this.mouseMove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * This event is fired on circle mouseout.
         */
        this.mouseOut = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * This event is fired on circle mouseover.
         */
        this.mouseOver = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * This event is fired when the DOM mouseup event is fired on the circle.
         */
        this.mouseUp = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * This event is fired when the circle's radius is changed.
         */
        this.radiusChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * This event is fired when the circle is right-clicked on.
         */
        this.rightClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this._circleAddedToManager = false;
        this._eventSubscriptions = [];
    }
    /** @internal */
    AgmCircle.prototype.ngOnInit = function () {
        this._manager.addCircle(this);
        this._circleAddedToManager = true;
        this._registerEventListeners();
    };
    /** @internal */
    AgmCircle.prototype.ngOnChanges = function (changes) {
        if (!this._circleAddedToManager) {
            return;
        }
        if (changes['latitude'] || changes['longitude']) {
            this._manager.setCenter(this);
        }
        if (changes['editable']) {
            this._manager.setEditable(this);
        }
        if (changes['draggable']) {
            this._manager.setDraggable(this);
        }
        if (changes['visible']) {
            this._manager.setVisible(this);
        }
        if (changes['radius']) {
            this._manager.setRadius(this);
        }
        this._updateCircleOptionsChanges(changes);
    };
    AgmCircle.prototype._updateCircleOptionsChanges = function (changes) {
        var options = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return AgmCircle._mapOptions.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) { options[k] = changes[k].currentValue; });
        if (optionKeys.length > 0) {
            this._manager.setOptions(this, options);
        }
    };
    AgmCircle.prototype._registerEventListeners = function () {
        var _this = this;
        var events = new Map();
        events.set('center_changed', this.centerChange);
        events.set('click', this.circleClick);
        events.set('dblclick', this.circleDblClick);
        events.set('drag', this.drag);
        events.set('dragend', this.dragEnd);
        events.set('dragStart', this.dragStart);
        events.set('mousedown', this.mouseDown);
        events.set('mousemove', this.mouseMove);
        events.set('mouseout', this.mouseOut);
        events.set('mouseover', this.mouseOver);
        events.set('mouseup', this.mouseUp);
        events.set('radius_changed', this.radiusChange);
        events.set('rightclick', this.rightClick);
        events.forEach(function (eventEmitter, eventName) {
            _this._eventSubscriptions.push(_this._manager.createEventObservable(eventName, _this).subscribe(function (value) {
                switch (eventName) {
                    case 'radius_changed':
                        _this._manager.getRadius(_this).then(function (radius) { return eventEmitter.emit(radius); });
                        break;
                    case 'center_changed':
                        _this._manager.getCenter(_this).then(function (center) {
                            return eventEmitter.emit({ lat: center.lat(), lng: center.lng() });
                        });
                        break;
                    default:
                        eventEmitter.emit({ coords: { lat: value.latLng.lat(), lng: value.latLng.lng() } });
                }
            }));
        });
    };
    /** @internal */
    AgmCircle.prototype.ngOnDestroy = function () {
        this._eventSubscriptions.forEach(function (s) { s.unsubscribe(); });
        this._eventSubscriptions = null;
        this._manager.removeCircle(this);
    };
    /**
     * Gets the LatLngBounds of this Circle.
     */
    AgmCircle.prototype.getBounds = function () { return this._manager.getBounds(this); };
    AgmCircle.prototype.getCenter = function () { return this._manager.getCenter(this); };
    return AgmCircle;
}());

AgmCircle._mapOptions = [
    'fillColor', 'fillOpacity', 'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight',
    'visible', 'zIndex', 'clickable'
];
AgmCircle.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                selector: 'agm-circle'
            },] },
];
/** @nocollapse */
AgmCircle.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__services_managers_circle_manager__["a" /* CircleManager */], },
]; };
AgmCircle.propDecorators = {
    'latitude': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'longitude': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'clickable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'draggable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */], args: ['circleDraggable',] },],
    'editable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'fillColor': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'fillOpacity': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'radius': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'strokeColor': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'strokeOpacity': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'strokePosition': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'strokeWeight': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'visible': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'zIndex': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'centerChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    'circleClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    'circleDblClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    'drag': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    'dragEnd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    'dragStart': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    'mouseDown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    'mouseMove': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    'mouseOut': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    'mouseOver': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    'mouseUp': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    'radiusChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    'rightClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
};
//# sourceMappingURL=circle.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/data-layer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgmDataLayer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_managers_data_layer_manager__ = __webpack_require__("./node_modules/@agm/core/services/managers/data-layer-manager.js");


var layerId = 0;
/**
 * AgmDataLayer enables the user to add data layers to the map.
 *
 * ### Example
 * ```typescript
 * import { Component } from 'angular2/core';
 * import { AgmMap, AgmDataLayer } from
 * 'angular-google-maps/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  directives: [AgmMap, AgmDataLayer],
 *  styles: [`
 *    .agm-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 * <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 * 	  <agm-data-layer [geoJson]="geoJsonObject" (layerClick)="clicked($event)" [style]="styleFunc">
 * 	  </agm-data-layer>
 * </agm-map>
 *  `
 * })
 * export class MyMapCmp {
 *   lat: number = -25.274449;
 *   lng: number = 133.775060;
 *   zoom: number = 5;
 *
 * clicked(clickEvent) {
 *    console.log(clickEvent);
 *  }
 *
 *  styleFunc(feature) {
 *    return ({
 *      clickable: false,
 *      fillColor: feature.getProperty('color'),
 *      strokeWeight: 1
 *    });
 *  }
 *
 *  geoJsonObject: Object = {
 *    "type": "FeatureCollection",
 *    "features": [
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "G",
 *          "color": "blue",
 *          "rank": "7",
 *          "ascii": "71"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [123.61, -22.14], [122.38, -21.73], [121.06, -21.69], [119.66, -22.22], [119.00, -23.40],
 *              [118.65, -24.76], [118.43, -26.07], [118.78, -27.56], [119.22, -28.57], [120.23, -29.49],
 *              [121.77, -29.87], [123.57, -29.64], [124.45, -29.03], [124.71, -27.95], [124.80, -26.70],
 *              [124.80, -25.60], [123.61, -25.64], [122.56, -25.64], [121.72, -25.72], [121.81, -26.62],
 *              [121.86, -26.98], [122.60, -26.90], [123.57, -27.05], [123.57, -27.68], [123.35, -28.18],
 *              [122.51, -28.38], [121.77, -28.26], [121.02, -27.91], [120.49, -27.21], [120.14, -26.50],
 *              [120.10, -25.64], [120.27, -24.52], [120.67, -23.68], [121.72, -23.32], [122.43, -23.48],
 *              [123.04, -24.04], [124.54, -24.28], [124.58, -23.20], [123.61, -22.14]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "o",
 *          "color": "red",
 *          "rank": "15",
 *          "ascii": "111"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [128.84, -25.76], [128.18, -25.60], [127.96, -25.52], [127.88, -25.52], [127.70, -25.60],
 *              [127.26, -25.79], [126.60, -26.11], [126.16, -26.78], [126.12, -27.68], [126.21, -28.42],
 *              [126.69, -29.49], [127.74, -29.80], [128.80, -29.72], [129.41, -29.03], [129.72, -27.95],
 *              [129.68, -27.21], [129.33, -26.23], [128.84, -25.76]
 *            ],
 *            [
 *              [128.45, -27.44], [128.32, -26.94], [127.70, -26.82], [127.35, -27.05], [127.17, -27.80],
 *              [127.57, -28.22], [128.10, -28.42], [128.49, -27.80], [128.45, -27.44]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "o",
 *          "color": "yellow",
 *          "rank": "15",
 *          "ascii": "111"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [131.87, -25.76], [131.35, -26.07], [130.95, -26.78], [130.82, -27.64], [130.86, -28.53],
 *              [131.26, -29.22], [131.92, -29.76], [132.45, -29.87], [133.06, -29.76], [133.72, -29.34],
 *              [134.07, -28.80], [134.20, -27.91], [134.07, -27.21], [133.81, -26.31], [133.37, -25.83],
 *              [132.71, -25.64], [131.87, -25.76]
 *            ],
 *            [
 *              [133.15, -27.17], [132.71, -26.86], [132.09, -26.90], [131.74, -27.56], [131.79, -28.26],
 *              [132.36, -28.45], [132.93, -28.34], [133.15, -27.76], [133.15, -27.17]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "g",
 *          "color": "blue",
 *          "rank": "7",
 *          "ascii": "103"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [138.12, -25.04], [136.84, -25.16], [135.96, -25.36], [135.26, -25.99], [135, -26.90],
 *              [135.04, -27.91], [135.26, -28.88], [136.05, -29.45], [137.02, -29.49], [137.81, -29.49],
 *              [137.94, -29.99], [137.90, -31.20], [137.85, -32.24], [136.88, -32.69], [136.45, -32.36],
 *              [136.27, -31.80], [134.95, -31.84], [135.17, -32.99], [135.52, -33.43], [136.14, -33.76],
 *              [137.06, -33.83], [138.12, -33.65], [138.86, -33.21], [139.30, -32.28], [139.30, -31.24],
 *              [139.30, -30.14], [139.21, -28.96], [139.17, -28.22], [139.08, -27.41], [139.08, -26.47],
 *              [138.99, -25.40], [138.73, -25.00], [138.12, -25.04]
 *            ],
 *            [
 *              [137.50, -26.54], [136.97, -26.47], [136.49, -26.58], [136.31, -27.13], [136.31, -27.72],
 *              [136.58, -27.99], [137.50, -28.03], [137.68, -27.68], [137.59, -26.78], [137.50, -26.54]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "l",
 *          "color": "green",
 *          "rank": "12",
 *          "ascii": "108"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [140.14, -21.04], [140.31, -29.42], [141.67, -29.49], [141.59, -20.92], [140.14, -21.04]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "e",
 *          "color": "red",
 *          "rank": "5",
 *          "ascii": "101"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [144.14, -27.41], [145.67, -27.52], [146.86, -27.09], [146.82, -25.64], [146.25, -25.04],
 *              [145.45, -24.68], [144.66, -24.60], [144.09, -24.76], [143.43, -25.08], [142.99, -25.40],
 *              [142.64, -26.03], [142.64, -27.05], [142.64, -28.26], [143.30, -29.11], [144.18, -29.57],
 *              [145.41, -29.64], [146.46, -29.19], [146.64, -28.72], [146.82, -28.14], [144.84, -28.42],
 *              [144.31, -28.26], [144.14, -27.41]
 *            ],
 *            [
 *              [144.18, -26.39], [144.53, -26.58], [145.19, -26.62], [145.72, -26.35], [145.81, -25.91],
 *              [145.41, -25.68], [144.97, -25.68], [144.49, -25.64], [144, -25.99], [144.18, -26.39]
 *            ]
 *          ]
 *        }
 *      }
 *    ]
 *  };
 * }
 * ```
 */
var AgmDataLayer = (function () {
    function AgmDataLayer(_manager) {
        this._manager = _manager;
        this._addedToManager = false;
        this._id = (layerId++).toString();
        this._subscriptions = [];
        /**
         * This event is fired when a feature in the layer is clicked.
         */
        this.layerClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * The geoJson to be displayed
         */
        this.geoJson = null;
    }
    AgmDataLayer.prototype.ngOnInit = function () {
        if (this._addedToManager) {
            return;
        }
        this._manager.addDataLayer(this);
        this._addedToManager = true;
        this._addEventListeners();
    };
    AgmDataLayer.prototype._addEventListeners = function () {
        var _this = this;
        var listeners = [
            { name: 'click', handler: function (ev) { return _this.layerClick.emit(ev); } },
        ];
        listeners.forEach(function (obj) {
            var os = _this._manager.createEventObservable(obj.name, _this).subscribe(obj.handler);
            _this._subscriptions.push(os);
        });
    };
    /** @internal */
    AgmDataLayer.prototype.id = function () { return this._id; };
    /** @internal */
    AgmDataLayer.prototype.toString = function () { return "AgmDataLayer-" + this._id.toString(); };
    /** @internal */
    AgmDataLayer.prototype.ngOnDestroy = function () {
        this._manager.deleteDataLayer(this);
        // unsubscribe all registered observable subscriptions
        this._subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    /** @internal */
    AgmDataLayer.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (!this._addedToManager) {
            return;
        }
        var geoJsonChange = changes['geoJson'];
        if (geoJsonChange) {
            this._manager.updateGeoJson(this, geoJsonChange.currentValue);
        }
        var dataOptions = {};
        AgmDataLayer._dataOptionsAttributes.forEach(function (k) { return dataOptions[k] = changes.hasOwnProperty(k) ? changes[k].currentValue : _this[k]; });
        this._manager.setDataOptions(this, dataOptions);
    };
    return AgmDataLayer;
}());

AgmDataLayer._dataOptionsAttributes = ['style'];
AgmDataLayer.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                selector: 'agm-data-layer'
            },] },
];
/** @nocollapse */
AgmDataLayer.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__services_managers_data_layer_manager__["a" /* DataLayerManager */], },
]; };
AgmDataLayer.propDecorators = {
    'layerClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    'geoJson': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'style': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
};
//# sourceMappingURL=data-layer.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/info-window.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgmInfoWindow; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_managers_info_window_manager__ = __webpack_require__("./node_modules/@agm/core/services/managers/info-window-manager.js");


var infoWindowId = 0;
/**
 * AgmInfoWindow renders a info window inside a {@link AgmMarker} or standalone.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    .agm-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
 *        <agm-info-window [disableAutoPan]="true">
 *          Hi, this is the content of the <strong>info window</strong>
 *        </agm-info-window>
 *      </agm-marker>
 *    </agm-map>
 *  `
 * })
 * ```
 */
var AgmInfoWindow = (function () {
    function AgmInfoWindow(_infoWindowManager, _el) {
        this._infoWindowManager = _infoWindowManager;
        this._el = _el;
        /**
         * Sets the open state for the InfoWindow. You can also call the open() and close() methods.
         */
        this.isOpen = false;
        /**
         * Emits an event when the info window is closed.
         */
        this.infoWindowClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this._infoWindowAddedToManager = false;
        this._id = (infoWindowId++).toString();
    }
    AgmInfoWindow.prototype.ngOnInit = function () {
        this.content = this._el.nativeElement.querySelector('.agm-info-window-content');
        this._infoWindowManager.addInfoWindow(this);
        this._infoWindowAddedToManager = true;
        this._updateOpenState();
        this._registerEventListeners();
    };
    /** @internal */
    AgmInfoWindow.prototype.ngOnChanges = function (changes) {
        if (!this._infoWindowAddedToManager) {
            return;
        }
        if ((changes['latitude'] || changes['longitude']) && typeof this.latitude === 'number' &&
            typeof this.longitude === 'number') {
            this._infoWindowManager.setPosition(this);
        }
        if (changes['zIndex']) {
            this._infoWindowManager.setZIndex(this);
        }
        if (changes['isOpen']) {
            this._updateOpenState();
        }
        this._setInfoWindowOptions(changes);
    };
    AgmInfoWindow.prototype._registerEventListeners = function () {
        var _this = this;
        this._infoWindowManager.createEventObservable('closeclick', this).subscribe(function () {
            _this.isOpen = false;
            _this.infoWindowClose.emit();
        });
    };
    AgmInfoWindow.prototype._updateOpenState = function () {
        this.isOpen ? this.open() : this.close();
    };
    AgmInfoWindow.prototype._setInfoWindowOptions = function (changes) {
        var options = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return AgmInfoWindow._infoWindowOptionsInputs.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) { options[k] = changes[k].currentValue; });
        this._infoWindowManager.setOptions(this, options);
    };
    /**
     * Opens the info window.
     */
    AgmInfoWindow.prototype.open = function () { return this._infoWindowManager.open(this); };
    /**
     * Closes the info window.
     */
    AgmInfoWindow.prototype.close = function () {
        var _this = this;
        return this._infoWindowManager.close(this).then(function () { _this.infoWindowClose.emit(); });
    };
    /** @internal */
    AgmInfoWindow.prototype.id = function () { return this._id; };
    /** @internal */
    AgmInfoWindow.prototype.toString = function () { return 'AgmInfoWindow-' + this._id.toString(); };
    /** @internal */
    AgmInfoWindow.prototype.ngOnDestroy = function () { this._infoWindowManager.deleteInfoWindow(this); };
    return AgmInfoWindow;
}());

AgmInfoWindow._infoWindowOptionsInputs = ['disableAutoPan', 'maxWidth'];
AgmInfoWindow.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'agm-info-window',
                template: "<div class='agm-info-window-content'>\n      <ng-content></ng-content>\n    </div>\n  "
            },] },
];
/** @nocollapse */
AgmInfoWindow.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__services_managers_info_window_manager__["a" /* InfoWindowManager */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
]; };
AgmInfoWindow.propDecorators = {
    'latitude': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'longitude': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'disableAutoPan': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'zIndex': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'maxWidth': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'isOpen': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'infoWindowClose': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
};
//# sourceMappingURL=info-window.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/kml-layer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgmKmlLayer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_managers_kml_layer_manager__ = __webpack_require__("./node_modules/@agm/core/services/managers/kml-layer-manager.js");


var layerId = 0;
var AgmKmlLayer = (function () {
    function AgmKmlLayer(_manager) {
        this._manager = _manager;
        this._addedToManager = false;
        this._id = (layerId++).toString();
        this._subscriptions = [];
        /**
         * If true, the layer receives mouse events. Default value is true.
         */
        this.clickable = true;
        /**
         * By default, the input map is centered and zoomed to the bounding box of the contents of the
         * layer.
         * If this option is set to true, the viewport is left unchanged, unless the map's center and zoom
         * were never set.
         */
        this.preserveViewport = false;
        /**
         * Whether to render the screen overlays. Default true.
         */
        this.screenOverlays = true;
        /**
         * Suppress the rendering of info windows when layer features are clicked.
         */
        this.suppressInfoWindows = false;
        /**
         * The URL of the KML document to display.
         */
        this.url = null;
        /**
         * The z-index of the layer.
         */
        this.zIndex = null;
        /**
         * This event is fired when a feature in the layer is clicked.
         */
        this.layerClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * This event is fired when the KML layers default viewport has changed.
         */
        this.defaultViewportChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * This event is fired when the KML layer has finished loading.
         * At this point it is safe to read the status property to determine if the layer loaded
         * successfully.
         */
        this.statusChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    AgmKmlLayer.prototype.ngOnInit = function () {
        if (this._addedToManager) {
            return;
        }
        this._manager.addKmlLayer(this);
        this._addedToManager = true;
        this._addEventListeners();
    };
    AgmKmlLayer.prototype.ngOnChanges = function (changes) {
        if (!this._addedToManager) {
            return;
        }
        this._updatePolygonOptions(changes);
    };
    AgmKmlLayer.prototype._updatePolygonOptions = function (changes) {
        var options = Object.keys(changes)
            .filter(function (k) { return AgmKmlLayer._kmlLayerOptions.indexOf(k) !== -1; })
            .reduce(function (obj, k) {
            obj[k] = changes[k].currentValue;
            return obj;
        }, {});
        if (Object.keys(options).length > 0) {
            this._manager.setOptions(this, options);
        }
    };
    AgmKmlLayer.prototype._addEventListeners = function () {
        var _this = this;
        var listeners = [
            { name: 'click', handler: function (ev) { return _this.layerClick.emit(ev); } },
            { name: 'defaultviewport_changed', handler: function () { return _this.defaultViewportChange.emit(); } },
            { name: 'status_changed', handler: function () { return _this.statusChange.emit(); } },
        ];
        listeners.forEach(function (obj) {
            var os = _this._manager.createEventObservable(obj.name, _this).subscribe(obj.handler);
            _this._subscriptions.push(os);
        });
    };
    /** @internal */
    AgmKmlLayer.prototype.id = function () { return this._id; };
    /** @internal */
    AgmKmlLayer.prototype.toString = function () { return "AgmKmlLayer-" + this._id.toString(); };
    /** @internal */
    AgmKmlLayer.prototype.ngOnDestroy = function () {
        this._manager.deleteKmlLayer(this);
        // unsubscribe all registered observable subscriptions
        this._subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    return AgmKmlLayer;
}());

AgmKmlLayer._kmlLayerOptions = ['clickable', 'preserveViewport', 'screenOverlays', 'suppressInfoWindows', 'url', 'zIndex'];
AgmKmlLayer.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                selector: 'agm-kml-layer'
            },] },
];
/** @nocollapse */
AgmKmlLayer.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__services_managers_kml_layer_manager__["a" /* KmlLayerManager */], },
]; };
AgmKmlLayer.propDecorators = {
    'clickable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'preserveViewport': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'screenOverlays': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'suppressInfoWindows': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'url': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'zIndex': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'layerClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    'defaultViewportChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    'statusChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
};
//# sourceMappingURL=kml-layer.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/map.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgmMap; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_google_maps_api_wrapper__ = __webpack_require__("./node_modules/@agm/core/services/google-maps-api-wrapper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_managers_circle_manager__ = __webpack_require__("./node_modules/@agm/core/services/managers/circle-manager.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_managers_info_window_manager__ = __webpack_require__("./node_modules/@agm/core/services/managers/info-window-manager.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_managers_marker_manager__ = __webpack_require__("./node_modules/@agm/core/services/managers/marker-manager.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_managers_polygon_manager__ = __webpack_require__("./node_modules/@agm/core/services/managers/polygon-manager.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_managers_polyline_manager__ = __webpack_require__("./node_modules/@agm/core/services/managers/polyline-manager.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_managers_kml_layer_manager__ = __webpack_require__("./node_modules/@agm/core/services/managers/kml-layer-manager.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_managers_data_layer_manager__ = __webpack_require__("./node_modules/@agm/core/services/managers/data-layer-manager.js");









/**
 * AgmMap renders a Google Map.
 * **Important note**: To be able see a map in the browser, you have to define a height for the
 * element `agm-map`.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    agm-map {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *    </agm-map>
 *  `
 * })
 * ```
 */
var AgmMap = (function () {
    function AgmMap(_elem, _mapsWrapper) {
        this._elem = _elem;
        this._mapsWrapper = _mapsWrapper;
        /**
         * The longitude that defines the center of the map.
         */
        this.longitude = 0;
        /**
         * The latitude that defines the center of the map.
         */
        this.latitude = 0;
        /**
         * The zoom level of the map. The default zoom level is 8.
         */
        this.zoom = 8;
        /**
         * Enables/disables if map is draggable.
         */
        // tslint:disable-next-line:no-input-rename
        this.draggable = true;
        /**
         * Enables/disables zoom and center on double click. Enabled by default.
         */
        this.disableDoubleClickZoom = false;
        /**
         * Enables/disables all default UI of the Google map. Please note: When the map is created, this
         * value cannot get updated.
         */
        this.disableDefaultUI = false;
        /**
         * If false, disables scrollwheel zooming on the map. The scrollwheel is enabled by default.
         */
        this.scrollwheel = true;
        /**
         * If false, prevents the map from being controlled by the keyboard. Keyboard shortcuts are
         * enabled by default.
         */
        this.keyboardShortcuts = true;
        /**
         * The enabled/disabled state of the Zoom control.
         */
        this.zoomControl = true;
        /**
         * Styles to apply to each of the default map types. Note that for Satellite/Hybrid and Terrain
         * modes, these styles will only apply to labels and geometry.
         */
        this.styles = [];
        /**
         * When true and the latitude and/or longitude values changes, the Google Maps panTo method is
         * used to
         * center the map. See: https://developers.google.com/maps/documentation/javascript/reference#Map
         */
        this.usePanning = false;
        /**
         * The initial enabled/disabled state of the Street View Pegman control.
         * This control is part of the default UI, and should be set to false when displaying a map type
         * on which the Street View road overlay should not appear (e.g. a non-Earth map type).
         */
        this.streetViewControl = true;
        /**
         * Sets the viewport to contain the given bounds.
         */
        this.fitBounds = null;
        /**
         * The initial enabled/disabled state of the Scale control. This is disabled by default.
         */
        this.scaleControl = false;
        /**
         * The initial enabled/disabled state of the Map type control.
         */
        this.mapTypeControl = false;
        /**
         * The initial enabled/disabled state of the Pan control.
         */
        this.panControl = false;
        /**
         * The initial enabled/disabled state of the Rotate control.
         */
        this.rotateControl = false;
        /**
         * The initial enabled/disabled state of the Fullscreen control.
         */
        this.fullscreenControl = false;
        /**
         * The map mapTypeId. Defaults to 'roadmap'.
         */
        this.mapTypeId = 'roadmap';
        /**
         * When false, map icons are not clickable. A map icon represents a point of interest,
         * also known as a POI. By default map icons are clickable.
         */
        this.clickableIcons = true;
        /**
         * This setting controls how gestures on the map are handled.
         * Allowed values:
         * - 'cooperative' (Two-finger touch gestures pan and zoom the map. One-finger touch gestures are not handled by the map.)
         * - 'greedy'      (All touch gestures pan or zoom the map.)
         * - 'none'        (The map cannot be panned or zoomed by user gestures.)
         * - 'auto'        [default] (Gesture handling is either cooperative or greedy, depending on whether the page is scrollable or not.
         */
        this.gestureHandling = 'auto';
        this._observableSubscriptions = [];
        /**
         * This event emitter gets emitted when the user clicks on the map (but not when they click on a
         * marker or infoWindow).
         */
        this.mapClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * This event emitter gets emitted when the user right-clicks on the map (but not when they click
         * on a marker or infoWindow).
         */
        this.mapRightClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * This event emitter gets emitted when the user double-clicks on the map (but not when they click
         * on a marker or infoWindow).
         */
        this.mapDblClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * This event emitter is fired when the map center changes.
         */
        this.centerChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * This event is fired when the viewport bounds have changed.
         */
        this.boundsChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * This event is fired when the map becomes idle after panning or zooming.
         */
        this.idle = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * This event is fired when the zoom level has changed.
         */
        this.zoomChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * This event is fired when the google map is fully initialized.
         * You get the google.maps.Map instance as a result of this EventEmitter.
         */
        this.mapReady = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    /** @internal */
    AgmMap.prototype.ngOnInit = function () {
        // todo: this should be solved with a new component and a viewChild decorator
        var container = this._elem.nativeElement.querySelector('.agm-map-container-inner');
        this._initMapInstance(container);
    };
    AgmMap.prototype._initMapInstance = function (el) {
        var _this = this;
        this._mapsWrapper.createMap(el, {
            center: { lat: this.latitude || 0, lng: this.longitude || 0 },
            zoom: this.zoom,
            minZoom: this.minZoom,
            maxZoom: this.maxZoom,
            disableDefaultUI: this.disableDefaultUI,
            disableDoubleClickZoom: this.disableDoubleClickZoom,
            scrollwheel: this.scrollwheel,
            backgroundColor: this.backgroundColor,
            draggable: this.draggable,
            draggableCursor: this.draggableCursor,
            draggingCursor: this.draggingCursor,
            keyboardShortcuts: this.keyboardShortcuts,
            styles: this.styles,
            zoomControl: this.zoomControl,
            zoomControlOptions: this.zoomControlOptions,
            streetViewControl: this.streetViewControl,
            streetViewControlOptions: this.streetViewControlOptions,
            scaleControl: this.scaleControl,
            scaleControlOptions: this.scaleControlOptions,
            mapTypeControl: this.mapTypeControl,
            mapTypeControlOptions: this.mapTypeControlOptions,
            panControl: this.panControl,
            panControlOptions: this.panControlOptions,
            rotateControl: this.rotateControl,
            rotateControlOptions: this.rotateControlOptions,
            fullscreenControl: this.fullscreenControl,
            fullscreenControlOptions: this.fullscreenControlOptions,
            mapTypeId: this.mapTypeId,
            clickableIcons: this.clickableIcons,
            gestureHandling: this.gestureHandling
        })
            .then(function () { return _this._mapsWrapper.getNativeMap(); })
            .then(function (map) { return _this.mapReady.emit(map); });
        // register event listeners
        this._handleMapCenterChange();
        this._handleMapZoomChange();
        this._handleMapMouseEvents();
        this._handleBoundsChange();
        this._handleIdleEvent();
    };
    /** @internal */
    AgmMap.prototype.ngOnDestroy = function () {
        // unsubscribe all registered observable subscriptions
        this._observableSubscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    /* @internal */
    AgmMap.prototype.ngOnChanges = function (changes) {
        this._updateMapOptionsChanges(changes);
        this._updatePosition(changes);
    };
    AgmMap.prototype._updateMapOptionsChanges = function (changes) {
        var options = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return AgmMap._mapOptionsAttributes.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) { options[k] = changes[k].currentValue; });
        this._mapsWrapper.setMapOptions(options);
    };
    /**
     * Triggers a resize event on the google map instance.
     * When recenter is true, the of the google map gets called with the current lat/lng values or fitBounds value to recenter the map.
     * Returns a promise that gets resolved after the event was triggered.
     */
    AgmMap.prototype.triggerResize = function (recenter) {
        var _this = this;
        if (recenter === void 0) { recenter = true; }
        // Note: When we would trigger the resize event and show the map in the same turn (which is a
        // common case for triggering a resize event), then the resize event would not
        // work (to show the map), so we trigger the event in a timeout.
        return new Promise(function (resolve) {
            setTimeout(function () {
                return _this._mapsWrapper.triggerMapEvent('resize').then(function () {
                    if (recenter) {
                        _this.fitBounds != null ? _this._fitBounds() : _this._setCenter();
                    }
                    resolve();
                });
            });
        });
    };
    AgmMap.prototype._updatePosition = function (changes) {
        if (changes['latitude'] == null && changes['longitude'] == null &&
            changes['fitBounds'] == null) {
            // no position update needed
            return;
        }
        // we prefer fitBounds in changes
        if (changes['fitBounds'] && this.fitBounds != null) {
            this._fitBounds();
            return;
        }
        if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
            return;
        }
        this._setCenter();
    };
    AgmMap.prototype._setCenter = function () {
        var newCenter = {
            lat: this.latitude,
            lng: this.longitude,
        };
        if (this.usePanning) {
            this._mapsWrapper.panTo(newCenter);
        }
        else {
            this._mapsWrapper.setCenter(newCenter);
        }
    };
    AgmMap.prototype._fitBounds = function () {
        if (this.usePanning) {
            this._mapsWrapper.panToBounds(this.fitBounds);
            return;
        }
        this._mapsWrapper.fitBounds(this.fitBounds);
    };
    AgmMap.prototype._handleMapCenterChange = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('center_changed').subscribe(function () {
            _this._mapsWrapper.getCenter().then(function (center) {
                _this.latitude = center.lat();
                _this.longitude = center.lng();
                _this.centerChange.emit({ lat: _this.latitude, lng: _this.longitude });
            });
        });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleBoundsChange = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('bounds_changed').subscribe(function () {
            _this._mapsWrapper.getBounds().then(function (bounds) { _this.boundsChange.emit(bounds); });
        });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleMapZoomChange = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('zoom_changed').subscribe(function () {
            _this._mapsWrapper.getZoom().then(function (z) {
                _this.zoom = z;
                _this.zoomChange.emit(z);
            });
        });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleIdleEvent = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('idle').subscribe(function () { _this.idle.emit(void 0); });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleMapMouseEvents = function () {
        var _this = this;
        var events = [
            { name: 'click', emitter: this.mapClick },
            { name: 'rightclick', emitter: this.mapRightClick },
            { name: 'dblclick', emitter: this.mapDblClick },
        ];
        events.forEach(function (e) {
            var s = _this._mapsWrapper.subscribeToMapEvent(e.name).subscribe(function (event) {
                var value = { coords: { lat: event.latLng.lat(), lng: event.latLng.lng() } };
                e.emitter.emit(value);
            });
            _this._observableSubscriptions.push(s);
        });
    };
    return AgmMap;
}());

/**
 * Map option attributes that can change over time
 */
AgmMap._mapOptionsAttributes = [
    'disableDoubleClickZoom', 'scrollwheel', 'draggable', 'draggableCursor', 'draggingCursor',
    'keyboardShortcuts', 'zoomControl', 'zoomControlOptions', 'styles', 'streetViewControl',
    'streetViewControlOptions', 'zoom', 'mapTypeControl', 'mapTypeControlOptions', 'minZoom',
    'maxZoom', 'panControl', 'panControlOptions', 'rotateControl', 'rotateControlOptions',
    'fullscreenControl', 'fullscreenControlOptions', 'scaleControl', 'scaleControlOptions',
    'mapTypeId', 'clickableIcons', 'gestureHandling'
];
AgmMap.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'agm-map',
                providers: [
                    __WEBPACK_IMPORTED_MODULE_1__services_google_maps_api_wrapper__["a" /* GoogleMapsAPIWrapper */], __WEBPACK_IMPORTED_MODULE_4__services_managers_marker_manager__["a" /* MarkerManager */], __WEBPACK_IMPORTED_MODULE_3__services_managers_info_window_manager__["a" /* InfoWindowManager */], __WEBPACK_IMPORTED_MODULE_2__services_managers_circle_manager__["a" /* CircleManager */], __WEBPACK_IMPORTED_MODULE_6__services_managers_polyline_manager__["a" /* PolylineManager */],
                    __WEBPACK_IMPORTED_MODULE_5__services_managers_polygon_manager__["a" /* PolygonManager */], __WEBPACK_IMPORTED_MODULE_7__services_managers_kml_layer_manager__["a" /* KmlLayerManager */], __WEBPACK_IMPORTED_MODULE_8__services_managers_data_layer_manager__["a" /* DataLayerManager */]
                ],
                host: {
                    // todo: deprecated - we will remove it with the next version
                    '[class.sebm-google-map-container]': 'true'
                },
                styles: ["\n    .agm-map-container-inner {\n      width: inherit;\n      height: inherit;\n    }\n    .agm-map-content {\n      display:none;\n    }\n  "],
                template: "\n    <div class='agm-map-container-inner sebm-google-map-container-inner'></div>\n    <div class='agm-map-content'>\n      <ng-content></ng-content>\n    </div>\n  "
            },] },
];
/** @nocollapse */
AgmMap.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_1__services_google_maps_api_wrapper__["a" /* GoogleMapsAPIWrapper */], },
]; };
AgmMap.propDecorators = {
    'longitude': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'latitude': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'zoom': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'minZoom': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'maxZoom': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'draggable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */], args: ['mapDraggable',] },],
    'disableDoubleClickZoom': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'disableDefaultUI': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'scrollwheel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'backgroundColor': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'draggableCursor': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'draggingCursor': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'keyboardShortcuts': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'zoomControl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'zoomControlOptions': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'styles': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'usePanning': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'streetViewControl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'streetViewControlOptions': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'fitBounds': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'scaleControl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'scaleControlOptions': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'mapTypeControl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'mapTypeControlOptions': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'panControl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'panControlOptions': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'rotateControl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'rotateControlOptions': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'fullscreenControl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'fullscreenControlOptions': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'mapTypeId': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'clickableIcons': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'gestureHandling': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'mapClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    'mapRightClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    'mapDblClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    'centerChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    'boundsChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    'idle': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    'zoomChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    'mapReady': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
};
//# sourceMappingURL=map.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/marker.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgmMarker; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_managers_marker_manager__ = __webpack_require__("./node_modules/@agm/core/services/managers/marker-manager.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__info_window__ = __webpack_require__("./node_modules/@agm/core/directives/info-window.js");



var markerId = 0;
/**
 * AgmMarker renders a map marker inside a {@link AgmMap}.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    .agm-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
 *      </agm-marker>
 *    </agm-map>
 *  `
 * })
 * ```
 */
var AgmMarker = (function () {
    function AgmMarker(_markerManager) {
        this._markerManager = _markerManager;
        /**
         * If true, the marker can be dragged. Default value is false.
         */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
         * If true, the marker is visible
         */
        this.visible = true;
        /**
         * Whether to automatically open the child info window when the marker is clicked.
         */
        this.openInfoWindow = true;
        /**
         * The marker's opacity between 0.0 and 1.0.
         */
        this.opacity = 1;
        /**
         * All markers are displayed on the map in order of their zIndex, with higher values displaying in
         * front of markers with lower values. By default, markers are displayed according to their
         * vertical position on screen, with lower markers appearing in front of markers further up the
         * screen.
         */
        this.zIndex = 1;
        /**
         * If true, the marker can be clicked. Default value is true.
         */
        // tslint:disable-next-line:no-input-rename
        this.clickable = true;
        /**
         * This event emitter gets emitted when the user clicks on the marker.
         */
        this.markerClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * This event is fired when the user stops dragging the marker.
         */
        this.dragEnd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * This event is fired when the user mouses over the marker.
         */
        this.mouseOver = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * This event is fired when the user mouses outside the marker.
         */
        this.mouseOut = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * @internal
         */
        this.infoWindow = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* QueryList */]();
        this._markerAddedToManger = false;
        this._observableSubscriptions = [];
        this._id = (markerId++).toString();
    }
    /* @internal */
    AgmMarker.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.handleInfoWindowUpdate();
        this.infoWindow.changes.subscribe(function () { return _this.handleInfoWindowUpdate(); });
    };
    AgmMarker.prototype.handleInfoWindowUpdate = function () {
        var _this = this;
        if (this.infoWindow.length > 1) {
            throw new Error('Expected no more than one info window.');
        }
        this.infoWindow.forEach(function (marker) {
            marker.hostMarker = _this;
        });
    };
    /** @internal */
    AgmMarker.prototype.ngOnChanges = function (changes) {
        if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
            return;
        }
        if (!this._markerAddedToManger) {
            this._markerManager.addMarker(this);
            this._markerAddedToManger = true;
            this._addEventListeners();
            return;
        }
        if (changes['latitude'] || changes['longitude']) {
            this._markerManager.updateMarkerPosition(this);
        }
        if (changes['title']) {
            this._markerManager.updateTitle(this);
        }
        if (changes['label']) {
            this._markerManager.updateLabel(this);
        }
        if (changes['draggable']) {
            this._markerManager.updateDraggable(this);
        }
        if (changes['iconUrl']) {
            this._markerManager.updateIcon(this);
        }
        if (changes['opacity']) {
            this._markerManager.updateOpacity(this);
        }
        if (changes['visible']) {
            this._markerManager.updateVisible(this);
        }
        if (changes['zIndex']) {
            this._markerManager.updateZIndex(this);
        }
        if (changes['clickable']) {
            this._markerManager.updateClickable(this);
        }
    };
    AgmMarker.prototype._addEventListeners = function () {
        var _this = this;
        var cs = this._markerManager.createEventObservable('click', this).subscribe(function () {
            if (_this.openInfoWindow) {
                _this.infoWindow.forEach(function (infoWindow) { return infoWindow.open(); });
            }
            _this.markerClick.emit(null);
        });
        this._observableSubscriptions.push(cs);
        var ds = this._markerManager.createEventObservable('dragend', this)
            .subscribe(function (e) {
            _this.dragEnd.emit({ coords: { lat: e.latLng.lat(), lng: e.latLng.lng() } });
        });
        this._observableSubscriptions.push(ds);
        var mover = this._markerManager.createEventObservable('mouseover', this)
            .subscribe(function (e) {
            _this.mouseOver.emit({ coords: { lat: e.latLng.lat(), lng: e.latLng.lng() } });
        });
        this._observableSubscriptions.push(mover);
        var mout = this._markerManager.createEventObservable('mouseout', this)
            .subscribe(function (e) {
            _this.mouseOut.emit({ coords: { lat: e.latLng.lat(), lng: e.latLng.lng() } });
        });
        this._observableSubscriptions.push(mout);
    };
    /** @internal */
    AgmMarker.prototype.id = function () { return this._id; };
    /** @internal */
    AgmMarker.prototype.toString = function () { return 'AgmMarker-' + this._id.toString(); };
    /** @internal */
    AgmMarker.prototype.ngOnDestroy = function () {
        this._markerManager.deleteMarker(this);
        // unsubscribe all registered observable subscriptions
        this._observableSubscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    return AgmMarker;
}());

AgmMarker.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                selector: 'agm-marker'
            },] },
];
/** @nocollapse */
AgmMarker.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__services_managers_marker_manager__["a" /* MarkerManager */], },
]; };
AgmMarker.propDecorators = {
    'latitude': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'longitude': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'title': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'label': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'draggable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */], args: ['markerDraggable',] },],
    'iconUrl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'visible': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'openInfoWindow': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'opacity': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'zIndex': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'clickable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */], args: ['markerClickable',] },],
    'markerClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    'dragEnd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    'mouseOver': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    'mouseOut': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    'infoWindow': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ContentChildren */], args: [__WEBPACK_IMPORTED_MODULE_2__info_window__["a" /* AgmInfoWindow */],] },],
};
//# sourceMappingURL=marker.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/polygon.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgmPolygon; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_managers_polygon_manager__ = __webpack_require__("./node_modules/@agm/core/services/managers/polygon-manager.js");


/**
 * AgmPolygon renders a polygon on a {@link AgmMap}
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    agm-map {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-polygon [paths]="paths">
 *      </agm-polygon>
 *    </agm-map>
 *  `
 * })
 * export class MyMapCmp {
 *   lat: number = 0;
 *   lng: number = 0;
 *   zoom: number = 10;
 *   paths: Array<LatLngLiteral> = [
 *     { lat: 0,  lng: 10 },
 *     { lat: 0,  lng: 20 },
 *     { lat: 10, lng: 20 },
 *     { lat: 10, lng: 10 },
 *     { lat: 0,  lng: 10 }
 *   ]
 *   // Nesting paths will create a hole where they overlap;
 *   nestedPaths: Array<Array<LatLngLiteral>> = [[
 *     { lat: 0,  lng: 10 },
 *     { lat: 0,  lng: 20 },
 *     { lat: 10, lng: 20 },
 *     { lat: 10, lng: 10 },
 *     { lat: 0,  lng: 10 }
 *   ], [
 *     { lat: 0, lng: 15 },
 *     { lat: 0, lng: 20 },
 *     { lat: 5, lng: 20 },
 *     { lat: 5, lng: 15 },
 *     { lat: 0, lng: 15 }
 *   ]]
 * }
 * ```
 */
var AgmPolygon = (function () {
    function AgmPolygon(_polygonManager) {
        this._polygonManager = _polygonManager;
        /**
         * Indicates whether this Polygon handles mouse events. Defaults to true.
         */
        this.clickable = true;
        /**
         * If set to true, the user can drag this shape over the map. The geodesic
         * property defines the mode of dragging. Defaults to false.
         */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
         * If set to true, the user can edit this shape by dragging the control
         * points shown at the vertices and on each segment. Defaults to false.
         */
        this.editable = false;
        /**
         * When true, edges of the polygon are interpreted as geodesic and will
         * follow the curvature of the Earth. When false, edges of the polygon are
         * rendered as straight lines in screen space. Note that the shape of a
         * geodesic polygon may appear to change when dragged, as the dimensions
         * are maintained relative to the surface of the earth. Defaults to false.
         */
        this.geodesic = false;
        /**
         * The ordered sequence of coordinates that designates a closed loop.
         * Unlike polylines, a polygon may consist of one or more paths.
         *  As a result, the paths property may specify one or more arrays of
         * LatLng coordinates. Paths are closed automatically; do not repeat the
         * first vertex of the path as the last vertex. Simple polygons may be
         * defined using a single array of LatLngs. More complex polygons may
         * specify an array of arrays. Any simple arrays are converted into Arrays.
         * Inserting or removing LatLngs from the Array will automatically update
         * the polygon on the map.
         */
        this.paths = [];
        /**
         * This event is fired when the DOM click event is fired on the Polygon.
         */
        this.polyClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * This event is fired when the DOM dblclick event is fired on the Polygon.
         */
        this.polyDblClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * This event is repeatedly fired while the user drags the polygon.
         */
        this.polyDrag = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * This event is fired when the user stops dragging the polygon.
         */
        this.polyDragEnd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * This event is fired when the user starts dragging the polygon.
         */
        this.polyDragStart = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * This event is fired when the DOM mousedown event is fired on the Polygon.
         */
        this.polyMouseDown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * This event is fired when the DOM mousemove event is fired on the Polygon.
         */
        this.polyMouseMove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * This event is fired on Polygon mouseout.
         */
        this.polyMouseOut = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * This event is fired on Polygon mouseover.
         */
        this.polyMouseOver = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * This event is fired whe the DOM mouseup event is fired on the Polygon
         */
        this.polyMouseUp = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * This even is fired when the Polygon is right-clicked on.
         */
        this.polyRightClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this._polygonAddedToManager = false;
        this._subscriptions = [];
    }
    /** @internal */
    AgmPolygon.prototype.ngAfterContentInit = function () {
        if (!this._polygonAddedToManager) {
            this._init();
        }
    };
    AgmPolygon.prototype.ngOnChanges = function (changes) {
        if (!this._polygonAddedToManager) {
            this._init();
            return;
        }
        this._polygonManager.setPolygonOptions(this, this._updatePolygonOptions(changes));
    };
    AgmPolygon.prototype._init = function () {
        this._polygonManager.addPolygon(this);
        this._polygonAddedToManager = true;
        this._addEventListeners();
    };
    AgmPolygon.prototype._addEventListeners = function () {
        var _this = this;
        var handlers = [
            { name: 'click', handler: function (ev) { return _this.polyClick.emit(ev); } },
            { name: 'dbclick', handler: function (ev) { return _this.polyDblClick.emit(ev); } },
            { name: 'drag', handler: function (ev) { return _this.polyDrag.emit(ev); } },
            { name: 'dragend', handler: function (ev) { return _this.polyDragEnd.emit(ev); } },
            { name: 'dragstart', handler: function (ev) { return _this.polyDragStart.emit(ev); } },
            { name: 'mousedown', handler: function (ev) { return _this.polyMouseDown.emit(ev); } },
            { name: 'mousemove', handler: function (ev) { return _this.polyMouseMove.emit(ev); } },
            { name: 'mouseout', handler: function (ev) { return _this.polyMouseOut.emit(ev); } },
            { name: 'mouseover', handler: function (ev) { return _this.polyMouseOver.emit(ev); } },
            { name: 'mouseup', handler: function (ev) { return _this.polyMouseUp.emit(ev); } },
            { name: 'rightclick', handler: function (ev) { return _this.polyRightClick.emit(ev); } },
        ];
        handlers.forEach(function (obj) {
            var os = _this._polygonManager.createEventObservable(obj.name, _this).subscribe(obj.handler);
            _this._subscriptions.push(os);
        });
    };
    AgmPolygon.prototype._updatePolygonOptions = function (changes) {
        return Object.keys(changes)
            .filter(function (k) { return AgmPolygon._polygonOptionsAttributes.indexOf(k) !== -1; })
            .reduce(function (obj, k) {
            obj[k] = changes[k].currentValue;
            return obj;
        }, {});
    };
    /** @internal */
    AgmPolygon.prototype.id = function () { return this._id; };
    /** @internal */
    AgmPolygon.prototype.ngOnDestroy = function () {
        this._polygonManager.deletePolygon(this);
        // unsubscribe all registered observable subscriptions
        this._subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    return AgmPolygon;
}());

AgmPolygon._polygonOptionsAttributes = [
    'clickable', 'draggable', 'editable', 'fillColor', 'fillOpacity', 'geodesic', 'icon', 'map',
    'paths', 'strokeColor', 'strokeOpacity', 'strokeWeight', 'visible', 'zIndex', 'draggable',
    'editable', 'visible'
];
AgmPolygon.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                selector: 'agm-polygon'
            },] },
];
/** @nocollapse */
AgmPolygon.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__services_managers_polygon_manager__["a" /* PolygonManager */], },
]; };
AgmPolygon.propDecorators = {
    'clickable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'draggable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */], args: ['polyDraggable',] },],
    'editable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'fillColor': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'fillOpacity': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'geodesic': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'paths': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'strokeColor': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'strokeOpacity': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'strokeWeight': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'visible': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'zIndex': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'polyClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    'polyDblClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    'polyDrag': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    'polyDragEnd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    'polyDragStart': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    'polyMouseDown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    'polyMouseMove': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    'polyMouseOut': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    'polyMouseOver': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    'polyMouseUp': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    'polyRightClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
};
//# sourceMappingURL=polygon.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/polyline-point.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgmPolylinePoint; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

/**
 * AgmPolylinePoint represents one element of a polyline within a  {@link
 * SembGoogleMapPolyline}
 */
var AgmPolylinePoint = (function () {
    function AgmPolylinePoint() {
        /**
         * This event emitter gets emitted when the position of the point changed.
         */
        this.positionChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    AgmPolylinePoint.prototype.ngOnChanges = function (changes) {
        if (changes['latitude'] || changes['longitude']) {
            var position = {
                lat: changes['latitude'].currentValue,
                lng: changes['longitude'].currentValue
            };
            this.positionChanged.emit(position);
        }
    };
    return AgmPolylinePoint;
}());

AgmPolylinePoint.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{ selector: 'agm-polyline-point' },] },
];
/** @nocollapse */
AgmPolylinePoint.ctorParameters = function () { return []; };
AgmPolylinePoint.propDecorators = {
    'latitude': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'longitude': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'positionChanged': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
};
//# sourceMappingURL=polyline-point.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/polyline.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgmPolyline; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_managers_polyline_manager__ = __webpack_require__("./node_modules/@agm/core/services/managers/polyline-manager.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__polyline_point__ = __webpack_require__("./node_modules/@agm/core/directives/polyline-point.js");



var polylineId = 0;
/**
 * AgmPolyline renders a polyline on a {@link AgmMap}
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    .agm-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-polyline>
 *          <agm-polyline-point [latitude]="latA" [longitude]="lngA">
 *          </agm-polyline-point>
 *          <agm-polyline-point [latitude]="latB" [longitude]="lngB">
 *          </agm-polyline-point>
 *      </agm-polyline>
 *    </agm-map>
 *  `
 * })
 * ```
 */
var AgmPolyline = (function () {
    function AgmPolyline(_polylineManager) {
        this._polylineManager = _polylineManager;
        /**
         * Indicates whether this Polyline handles mouse events. Defaults to true.
         */
        this.clickable = true;
        /**
         * If set to true, the user can drag this shape over the map. The geodesic property defines the
         * mode of dragging. Defaults to false.
         */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
         * If set to true, the user can edit this shape by dragging the control points shown at the
         * vertices and on each segment. Defaults to false.
         */
        this.editable = false;
        /**
         * When true, edges of the polygon are interpreted as geodesic and will follow the curvature of
         * the Earth. When false, edges of the polygon are rendered as straight lines in screen space.
         * Note that the shape of a geodesic polygon may appear to change when dragged, as the dimensions
         * are maintained relative to the surface of the earth. Defaults to false.
         */
        this.geodesic = false;
        /**
         * Whether this polyline is visible on the map. Defaults to true.
         */
        this.visible = true;
        /**
         * This event is fired when the DOM click event is fired on the Polyline.
         */
        this.lineClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * This event is fired when the DOM dblclick event is fired on the Polyline.
         */
        this.lineDblClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * This event is repeatedly fired while the user drags the polyline.
         */
        this.lineDrag = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * This event is fired when the user stops dragging the polyline.
         */
        this.lineDragEnd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * This event is fired when the user starts dragging the polyline.
         */
        this.lineDragStart = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * This event is fired when the DOM mousedown event is fired on the Polyline.
         */
        this.lineMouseDown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * This event is fired when the DOM mousemove event is fired on the Polyline.
         */
        this.lineMouseMove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * This event is fired on Polyline mouseout.
         */
        this.lineMouseOut = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * This event is fired on Polyline mouseover.
         */
        this.lineMouseOver = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * This event is fired whe the DOM mouseup event is fired on the Polyline
         */
        this.lineMouseUp = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * This even is fired when the Polyline is right-clicked on.
         */
        this.lineRightClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this._polylineAddedToManager = false;
        this._subscriptions = [];
        this._id = (polylineId++).toString();
    }
    /** @internal */
    AgmPolyline.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (this.points.length) {
            this.points.forEach(function (point) {
                var s = point.positionChanged.subscribe(function () { _this._polylineManager.updatePolylinePoints(_this); });
                _this._subscriptions.push(s);
            });
        }
        if (!this._polylineAddedToManager) {
            this._init();
        }
        var s = this.points.changes.subscribe(function () { return _this._polylineManager.updatePolylinePoints(_this); });
        this._subscriptions.push(s);
        this._polylineManager.updatePolylinePoints(this);
    };
    AgmPolyline.prototype.ngOnChanges = function (changes) {
        if (!this._polylineAddedToManager) {
            this._init();
            return;
        }
        var options = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return AgmPolyline._polylineOptionsAttributes.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) { return options[k] = changes[k].currentValue; });
        this._polylineManager.setPolylineOptions(this, options);
    };
    AgmPolyline.prototype._init = function () {
        this._polylineManager.addPolyline(this);
        this._polylineAddedToManager = true;
        this._addEventListeners();
    };
    AgmPolyline.prototype._addEventListeners = function () {
        var _this = this;
        var handlers = [
            { name: 'click', handler: function (ev) { return _this.lineClick.emit(ev); } },
            { name: 'dblclick', handler: function (ev) { return _this.lineDblClick.emit(ev); } },
            { name: 'drag', handler: function (ev) { return _this.lineDrag.emit(ev); } },
            { name: 'dragend', handler: function (ev) { return _this.lineDragEnd.emit(ev); } },
            { name: 'dragstart', handler: function (ev) { return _this.lineDragStart.emit(ev); } },
            { name: 'mousedown', handler: function (ev) { return _this.lineMouseDown.emit(ev); } },
            { name: 'mousemove', handler: function (ev) { return _this.lineMouseMove.emit(ev); } },
            { name: 'mouseout', handler: function (ev) { return _this.lineMouseOut.emit(ev); } },
            { name: 'mouseover', handler: function (ev) { return _this.lineMouseOver.emit(ev); } },
            { name: 'mouseup', handler: function (ev) { return _this.lineMouseUp.emit(ev); } },
            { name: 'rightclick', handler: function (ev) { return _this.lineRightClick.emit(ev); } },
        ];
        handlers.forEach(function (obj) {
            var os = _this._polylineManager.createEventObservable(obj.name, _this).subscribe(obj.handler);
            _this._subscriptions.push(os);
        });
    };
    /** @internal */
    AgmPolyline.prototype._getPoints = function () {
        if (this.points) {
            return this.points.toArray();
        }
        return [];
    };
    /** @internal */
    AgmPolyline.prototype.id = function () { return this._id; };
    /** @internal */
    AgmPolyline.prototype.ngOnDestroy = function () {
        this._polylineManager.deletePolyline(this);
        // unsubscribe all registered observable subscriptions
        this._subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    return AgmPolyline;
}());

AgmPolyline._polylineOptionsAttributes = [
    'draggable', 'editable', 'visible', 'geodesic', 'strokeColor', 'strokeOpacity', 'strokeWeight',
    'zIndex'
];
AgmPolyline.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                selector: 'agm-polyline'
            },] },
];
/** @nocollapse */
AgmPolyline.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__services_managers_polyline_manager__["a" /* PolylineManager */], },
]; };
AgmPolyline.propDecorators = {
    'clickable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'draggable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */], args: ['polylineDraggable',] },],
    'editable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'geodesic': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'strokeColor': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'strokeOpacity': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'strokeWeight': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'visible': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'zIndex': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'lineClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    'lineDblClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    'lineDrag': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    'lineDragEnd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    'lineDragStart': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    'lineMouseDown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    'lineMouseMove': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    'lineMouseOut': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    'lineMouseOver': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    'lineMouseUp': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    'lineRightClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    'points': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ContentChildren */], args: [__WEBPACK_IMPORTED_MODULE_2__polyline_point__["a" /* AgmPolylinePoint */],] },],
};
//# sourceMappingURL=polyline.js.map

/***/ }),

/***/ "./node_modules/@agm/core/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directives__ = __webpack_require__("./node_modules/@agm/core/directives.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("./node_modules/@agm/core/services.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_module__ = __webpack_require__("./node_modules/@agm/core/core.module.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__core_module__["a"]; });
// main modules


// core module
// we explicitly export the module here to prevent this Ionic 2 bug:
// http://stevemichelotti.com/integrate-angular-2-google-maps-into-ionic-2/

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_google_maps_api_wrapper__ = __webpack_require__("./node_modules/@agm/core/services/google-maps-api-wrapper.js");
/* unused harmony reexport GoogleMapsAPIWrapper */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_managers_circle_manager__ = __webpack_require__("./node_modules/@agm/core/services/managers/circle-manager.js");
/* unused harmony reexport CircleManager */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_managers_info_window_manager__ = __webpack_require__("./node_modules/@agm/core/services/managers/info-window-manager.js");
/* unused harmony reexport InfoWindowManager */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_managers_marker_manager__ = __webpack_require__("./node_modules/@agm/core/services/managers/marker-manager.js");
/* unused harmony reexport MarkerManager */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_managers_polygon_manager__ = __webpack_require__("./node_modules/@agm/core/services/managers/polygon-manager.js");
/* unused harmony reexport PolygonManager */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_managers_polyline_manager__ = __webpack_require__("./node_modules/@agm/core/services/managers/polyline-manager.js");
/* unused harmony reexport PolylineManager */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_managers_kml_layer_manager__ = __webpack_require__("./node_modules/@agm/core/services/managers/kml-layer-manager.js");
/* unused harmony reexport KmlLayerManager */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_managers_data_layer_manager__ = __webpack_require__("./node_modules/@agm/core/services/managers/data-layer-manager.js");
/* unused harmony reexport DataLayerManager */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_maps_api_loader_lazy_maps_api_loader__ = __webpack_require__("./node_modules/@agm/core/services/maps-api-loader/lazy-maps-api-loader.js");
/* unused harmony reexport GoogleMapsScriptProtocol */
/* unused harmony reexport LAZY_MAPS_API_CONFIG */
/* unused harmony reexport LazyMapsAPILoader */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_maps_api_loader_maps_api_loader__ = __webpack_require__("./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js");
/* unused harmony reexport MapsAPILoader */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_maps_api_loader_noop_maps_api_loader__ = __webpack_require__("./node_modules/@agm/core/services/maps-api-loader/noop-maps-api-loader.js");
/* unused harmony reexport NoOpMapsAPILoader */











//# sourceMappingURL=services.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/google-maps-api-wrapper.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMapsAPIWrapper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__maps_api_loader_maps_api_loader__ = __webpack_require__("./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js");



/**
 * Wrapper class that handles the communication with the Google Maps Javascript
 * API v3
 */
var GoogleMapsAPIWrapper = (function () {
    function GoogleMapsAPIWrapper(_loader, _zone) {
        var _this = this;
        this._loader = _loader;
        this._zone = _zone;
        this._map =
            new Promise(function (resolve) { _this._mapResolver = resolve; });
    }
    GoogleMapsAPIWrapper.prototype.createMap = function (el, mapOptions) {
        var _this = this;
        return this._loader.load().then(function () {
            var map = new google.maps.Map(el, mapOptions);
            _this._mapResolver(map);
            return;
        });
    };
    GoogleMapsAPIWrapper.prototype.setMapOptions = function (options) {
        this._map.then(function (m) { m.setOptions(options); });
    };
    /**
     * Creates a google map marker with the map context
     */
    GoogleMapsAPIWrapper.prototype.createMarker = function (options, addToMap) {
        if (options === void 0) { options = {}; }
        if (addToMap === void 0) { addToMap = true; }
        return this._map.then(function (map) {
            if (addToMap) {
                options.map = map;
            }
            return new google.maps.Marker(options);
        });
    };
    GoogleMapsAPIWrapper.prototype.createInfoWindow = function (options) {
        return this._map.then(function () { return new google.maps.InfoWindow(options); });
    };
    /**
     * Creates a google.map.Circle for the current map.
     */
    GoogleMapsAPIWrapper.prototype.createCircle = function (options) {
        return this._map.then(function (map) {
            options.map = map;
            return new google.maps.Circle(options);
        });
    };
    GoogleMapsAPIWrapper.prototype.createPolyline = function (options) {
        return this.getNativeMap().then(function (map) {
            var line = new google.maps.Polyline(options);
            line.setMap(map);
            return line;
        });
    };
    GoogleMapsAPIWrapper.prototype.createPolygon = function (options) {
        return this.getNativeMap().then(function (map) {
            var polygon = new google.maps.Polygon(options);
            polygon.setMap(map);
            return polygon;
        });
    };
    /**
     * Creates a new google.map.Data layer for the current map
     */
    GoogleMapsAPIWrapper.prototype.createDataLayer = function (options) {
        return this._map.then(function (m) {
            var data = new google.maps.Data(options);
            data.setMap(m);
            return data;
        });
    };
    /**
     * Determines if given coordinates are insite a Polygon path.
     */
    GoogleMapsAPIWrapper.prototype.containsLocation = function (latLng, polygon) {
        return google.maps.geometry.poly.containsLocation(latLng, polygon);
    };
    GoogleMapsAPIWrapper.prototype.subscribeToMapEvent = function (eventName) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].create(function (observer) {
            _this._map.then(function (m) {
                m.addListener(eventName, function (arg) { _this._zone.run(function () { return observer.next(arg); }); });
            });
        });
    };
    GoogleMapsAPIWrapper.prototype.setCenter = function (latLng) {
        return this._map.then(function (map) { return map.setCenter(latLng); });
    };
    GoogleMapsAPIWrapper.prototype.getZoom = function () { return this._map.then(function (map) { return map.getZoom(); }); };
    GoogleMapsAPIWrapper.prototype.getBounds = function () {
        return this._map.then(function (map) { return map.getBounds(); });
    };
    GoogleMapsAPIWrapper.prototype.setZoom = function (zoom) {
        return this._map.then(function (map) { return map.setZoom(zoom); });
    };
    GoogleMapsAPIWrapper.prototype.getCenter = function () {
        return this._map.then(function (map) { return map.getCenter(); });
    };
    GoogleMapsAPIWrapper.prototype.panTo = function (latLng) {
        return this._map.then(function (map) { return map.panTo(latLng); });
    };
    GoogleMapsAPIWrapper.prototype.panBy = function (x, y) {
        return this._map.then(function (map) { return map.panBy(x, y); });
    };
    GoogleMapsAPIWrapper.prototype.fitBounds = function (latLng) {
        return this._map.then(function (map) { return map.fitBounds(latLng); });
    };
    GoogleMapsAPIWrapper.prototype.panToBounds = function (latLng) {
        return this._map.then(function (map) { return map.panToBounds(latLng); });
    };
    /**
     * Returns the native Google Maps Map instance. Be careful when using this instance directly.
     */
    GoogleMapsAPIWrapper.prototype.getNativeMap = function () { return this._map; };
    /**
     * Triggers the given event name on the map instance.
     */
    GoogleMapsAPIWrapper.prototype.triggerMapEvent = function (eventName) {
        return this._map.then(function (m) { return google.maps.event.trigger(m, eventName); });
    };
    return GoogleMapsAPIWrapper;
}());

GoogleMapsAPIWrapper.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */] },
];
/** @nocollapse */
GoogleMapsAPIWrapper.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__maps_api_loader_maps_api_loader__["a" /* MapsAPILoader */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* NgZone */], },
]; };
//# sourceMappingURL=google-maps-api-wrapper.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/circle-manager.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CircleManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__google_maps_api_wrapper__ = __webpack_require__("./node_modules/@agm/core/services/google-maps-api-wrapper.js");



var CircleManager = (function () {
    function CircleManager(_apiWrapper, _zone) {
        this._apiWrapper = _apiWrapper;
        this._zone = _zone;
        this._circles = new Map();
    }
    CircleManager.prototype.addCircle = function (circle) {
        this._circles.set(circle, this._apiWrapper.createCircle({
            center: { lat: circle.latitude, lng: circle.longitude },
            clickable: circle.clickable,
            draggable: circle.draggable,
            editable: circle.editable,
            fillColor: circle.fillColor,
            fillOpacity: circle.fillOpacity,
            radius: circle.radius,
            strokeColor: circle.strokeColor,
            strokeOpacity: circle.strokeOpacity,
            strokePosition: circle.strokePosition,
            strokeWeight: circle.strokeWeight,
            visible: circle.visible,
            zIndex: circle.zIndex
        }));
    };
    /**
     * Removes the given circle from the map.
     */
    CircleManager.prototype.removeCircle = function (circle) {
        var _this = this;
        return this._circles.get(circle).then(function (c) {
            c.setMap(null);
            _this._circles.delete(circle);
        });
    };
    CircleManager.prototype.setOptions = function (circle, options) {
        return this._circles.get(circle).then(function (c) { return c.setOptions(options); });
    };
    CircleManager.prototype.getBounds = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.getBounds(); });
    };
    CircleManager.prototype.getCenter = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.getCenter(); });
    };
    CircleManager.prototype.getRadius = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.getRadius(); });
    };
    CircleManager.prototype.setCenter = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setCenter({ lat: circle.latitude, lng: circle.longitude }); });
    };
    CircleManager.prototype.setEditable = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setEditable(circle.editable); });
    };
    CircleManager.prototype.setDraggable = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setDraggable(circle.draggable); });
    };
    CircleManager.prototype.setVisible = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setVisible(circle.visible); });
    };
    CircleManager.prototype.setRadius = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setRadius(circle.radius); });
    };
    CircleManager.prototype.createEventObservable = function (eventName, circle) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].create(function (observer) {
            var listener = null;
            _this._circles.get(circle).then(function (c) {
                listener = c.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
            return function () {
                if (listener !== null) {
                    listener.remove();
                }
            };
        });
    };
    return CircleManager;
}());

CircleManager.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */] },
];
/** @nocollapse */
CircleManager.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__google_maps_api_wrapper__["a" /* GoogleMapsAPIWrapper */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* NgZone */], },
]; };
//# sourceMappingURL=circle-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/data-layer-manager.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataLayerManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__google_maps_api_wrapper__ = __webpack_require__("./node_modules/@agm/core/services/google-maps-api-wrapper.js");



/**
 * Manages all Data Layers for a Google Map instance.
 */
var DataLayerManager = (function () {
    function DataLayerManager(_wrapper, _zone) {
        this._wrapper = _wrapper;
        this._zone = _zone;
        this._layers = new Map();
    }
    /**
     * Adds a new Data Layer to the map.
     */
    DataLayerManager.prototype.addDataLayer = function (layer) {
        var _this = this;
        var newLayer = this._wrapper.createDataLayer({
            style: layer.style
        })
            .then(function (d) {
            if (layer.geoJson) {
                _this.getDataFeatures(d, layer.geoJson).then(function (features) { return d.features = features; });
            }
            return d;
        });
        this._layers.set(layer, newLayer);
    };
    DataLayerManager.prototype.deleteDataLayer = function (layer) {
        var _this = this;
        this._layers.get(layer).then(function (l) {
            l.setMap(null);
            _this._layers.delete(layer);
        });
    };
    DataLayerManager.prototype.updateGeoJson = function (layer, geoJson) {
        var _this = this;
        this._layers.get(layer).then(function (l) {
            l.forEach(function (feature) {
                l.remove(feature);
                var index = l.features.indexOf(feature, 0);
                if (index > -1) {
                    l.features.splice(index, 1);
                }
            });
            _this.getDataFeatures(l, geoJson).then(function (features) { return l.features = features; });
        });
    };
    DataLayerManager.prototype.setDataOptions = function (layer, options) {
        this._layers.get(layer).then(function (l) {
            l.setControlPosition(options.controlPosition);
            l.setControls(options.controls);
            l.setDrawingMode(options.drawingMode);
            l.setStyle(options.style);
        });
    };
    /**
     * Creates a Google Maps event listener for the given DataLayer as an Observable
     */
    DataLayerManager.prototype.createEventObservable = function (eventName, layer) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].create(function (observer) {
            _this._layers.get(layer).then(function (d) {
                d.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    /**
     * Extract features from a geoJson using google.maps Data Class
     * @param d : google.maps.Data class instance
     * @param geoJson : url or geojson object
     */
    DataLayerManager.prototype.getDataFeatures = function (d, geoJson) {
        return new Promise(function (resolve, reject) {
            if (typeof geoJson === 'object') {
                try {
                    var features = d.addGeoJson(geoJson);
                    resolve(features);
                }
                catch (e) {
                    reject(e);
                }
            }
            else if (typeof geoJson === 'string') {
                d.loadGeoJson(geoJson, null, resolve);
            }
            else {
                reject("Impossible to extract features from geoJson: wrong argument type");
            }
        });
    };
    return DataLayerManager;
}());

DataLayerManager.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */] },
];
/** @nocollapse */
DataLayerManager.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__google_maps_api_wrapper__["a" /* GoogleMapsAPIWrapper */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* NgZone */], },
]; };
//# sourceMappingURL=data-layer-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/info-window-manager.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoWindowManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__google_maps_api_wrapper__ = __webpack_require__("./node_modules/@agm/core/services/google-maps-api-wrapper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__marker_manager__ = __webpack_require__("./node_modules/@agm/core/services/managers/marker-manager.js");




var InfoWindowManager = (function () {
    function InfoWindowManager(_mapsWrapper, _zone, _markerManager) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._markerManager = _markerManager;
        this._infoWindows = new Map();
    }
    InfoWindowManager.prototype.deleteInfoWindow = function (infoWindow) {
        var _this = this;
        var iWindow = this._infoWindows.get(infoWindow);
        if (iWindow == null) {
            // info window already deleted
            return Promise.resolve();
        }
        return iWindow.then(function (i) {
            return _this._zone.run(function () {
                i.close();
                _this._infoWindows.delete(infoWindow);
            });
        });
    };
    InfoWindowManager.prototype.setPosition = function (infoWindow) {
        return this._infoWindows.get(infoWindow).then(function (i) { return i.setPosition({
            lat: infoWindow.latitude,
            lng: infoWindow.longitude
        }); });
    };
    InfoWindowManager.prototype.setZIndex = function (infoWindow) {
        return this._infoWindows.get(infoWindow)
            .then(function (i) { return i.setZIndex(infoWindow.zIndex); });
    };
    InfoWindowManager.prototype.open = function (infoWindow) {
        var _this = this;
        return this._infoWindows.get(infoWindow).then(function (w) {
            if (infoWindow.hostMarker != null) {
                return _this._markerManager.getNativeMarker(infoWindow.hostMarker).then(function (marker) {
                    return _this._mapsWrapper.getNativeMap().then(function (map) { return w.open(map, marker); });
                });
            }
            return _this._mapsWrapper.getNativeMap().then(function (map) { return w.open(map); });
        });
    };
    InfoWindowManager.prototype.close = function (infoWindow) {
        return this._infoWindows.get(infoWindow).then(function (w) { return w.close(); });
    };
    InfoWindowManager.prototype.setOptions = function (infoWindow, options) {
        return this._infoWindows.get(infoWindow).then(function (i) { return i.setOptions(options); });
    };
    InfoWindowManager.prototype.addInfoWindow = function (infoWindow) {
        var options = {
            content: infoWindow.content,
            maxWidth: infoWindow.maxWidth,
            zIndex: infoWindow.zIndex,
            disableAutoPan: infoWindow.disableAutoPan
        };
        if (typeof infoWindow.latitude === 'number' && typeof infoWindow.longitude === 'number') {
            options.position = { lat: infoWindow.latitude, lng: infoWindow.longitude };
        }
        var infoWindowPromise = this._mapsWrapper.createInfoWindow(options);
        this._infoWindows.set(infoWindow, infoWindowPromise);
    };
    /**
     * Creates a Google Maps event listener for the given InfoWindow as an Observable
     */
    InfoWindowManager.prototype.createEventObservable = function (eventName, infoWindow) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */].create(function (observer) {
            _this._infoWindows.get(infoWindow).then(function (i) {
                i.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    return InfoWindowManager;
}());

InfoWindowManager.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */] },
];
/** @nocollapse */
InfoWindowManager.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__google_maps_api_wrapper__["a" /* GoogleMapsAPIWrapper */], },
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["O" /* NgZone */], },
    { type: __WEBPACK_IMPORTED_MODULE_3__marker_manager__["a" /* MarkerManager */], },
]; };
//# sourceMappingURL=info-window-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/kml-layer-manager.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KmlLayerManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__google_maps_api_wrapper__ = __webpack_require__("./node_modules/@agm/core/services/google-maps-api-wrapper.js");



/**
 * Manages all KML Layers for a Google Map instance.
 */
var KmlLayerManager = (function () {
    function KmlLayerManager(_wrapper, _zone) {
        this._wrapper = _wrapper;
        this._zone = _zone;
        this._layers = new Map();
    }
    /**
     * Adds a new KML Layer to the map.
     */
    KmlLayerManager.prototype.addKmlLayer = function (layer) {
        var newLayer = this._wrapper.getNativeMap().then(function (m) {
            return new google.maps.KmlLayer({
                clickable: layer.clickable,
                map: m,
                preserveViewport: layer.preserveViewport,
                screenOverlays: layer.screenOverlays,
                suppressInfoWindows: layer.suppressInfoWindows,
                url: layer.url,
                zIndex: layer.zIndex
            });
        });
        this._layers.set(layer, newLayer);
    };
    KmlLayerManager.prototype.setOptions = function (layer, options) {
        this._layers.get(layer).then(function (l) { return l.setOptions(options); });
    };
    KmlLayerManager.prototype.deleteKmlLayer = function (layer) {
        var _this = this;
        this._layers.get(layer).then(function (l) {
            l.setMap(null);
            _this._layers.delete(layer);
        });
    };
    /**
     * Creates a Google Maps event listener for the given KmlLayer as an Observable
     */
    KmlLayerManager.prototype.createEventObservable = function (eventName, layer) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].create(function (observer) {
            _this._layers.get(layer).then(function (m) {
                m.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    return KmlLayerManager;
}());

KmlLayerManager.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */] },
];
/** @nocollapse */
KmlLayerManager.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__google_maps_api_wrapper__["a" /* GoogleMapsAPIWrapper */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* NgZone */], },
]; };
//# sourceMappingURL=kml-layer-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/marker-manager.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarkerManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__google_maps_api_wrapper__ = __webpack_require__("./node_modules/@agm/core/services/google-maps-api-wrapper.js");



var MarkerManager = (function () {
    function MarkerManager(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._markers = new Map();
    }
    MarkerManager.prototype.deleteMarker = function (marker) {
        var _this = this;
        var m = this._markers.get(marker);
        if (m == null) {
            // marker already deleted
            return Promise.resolve();
        }
        return m.then(function (m) {
            return _this._zone.run(function () {
                m.setMap(null);
                _this._markers.delete(marker);
            });
        });
    };
    MarkerManager.prototype.updateMarkerPosition = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setPosition({ lat: marker.latitude, lng: marker.longitude }); });
    };
    MarkerManager.prototype.updateTitle = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setTitle(marker.title); });
    };
    MarkerManager.prototype.updateLabel = function (marker) {
        return this._markers.get(marker).then(function (m) { m.setLabel(marker.label); });
    };
    MarkerManager.prototype.updateDraggable = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setDraggable(marker.draggable); });
    };
    MarkerManager.prototype.updateIcon = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setIcon(marker.iconUrl); });
    };
    MarkerManager.prototype.updateOpacity = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setOpacity(marker.opacity); });
    };
    MarkerManager.prototype.updateVisible = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setVisible(marker.visible); });
    };
    MarkerManager.prototype.updateZIndex = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setZIndex(marker.zIndex); });
    };
    MarkerManager.prototype.updateClickable = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setClickable(marker.clickable); });
    };
    MarkerManager.prototype.addMarker = function (marker) {
        var markerPromise = this._mapsWrapper.createMarker({
            position: { lat: marker.latitude, lng: marker.longitude },
            label: marker.label,
            draggable: marker.draggable,
            icon: marker.iconUrl,
            opacity: marker.opacity,
            visible: marker.visible,
            zIndex: marker.zIndex,
            title: marker.title,
            clickable: marker.clickable
        });
        this._markers.set(marker, markerPromise);
    };
    MarkerManager.prototype.getNativeMarker = function (marker) {
        return this._markers.get(marker);
    };
    MarkerManager.prototype.createEventObservable = function (eventName, marker) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].create(function (observer) {
            _this._markers.get(marker).then(function (m) {
                m.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    return MarkerManager;
}());

MarkerManager.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */] },
];
/** @nocollapse */
MarkerManager.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__google_maps_api_wrapper__["a" /* GoogleMapsAPIWrapper */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* NgZone */], },
]; };
//# sourceMappingURL=marker-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/polygon-manager.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PolygonManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__google_maps_api_wrapper__ = __webpack_require__("./node_modules/@agm/core/services/google-maps-api-wrapper.js");



var PolygonManager = (function () {
    function PolygonManager(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._polygons = new Map();
    }
    PolygonManager.prototype.addPolygon = function (path) {
        var polygonPromise = this._mapsWrapper.createPolygon({
            clickable: path.clickable,
            draggable: path.draggable,
            editable: path.editable,
            fillColor: path.fillColor,
            fillOpacity: path.fillOpacity,
            geodesic: path.geodesic,
            paths: path.paths,
            strokeColor: path.strokeColor,
            strokeOpacity: path.strokeOpacity,
            strokeWeight: path.strokeWeight,
            visible: path.visible,
            zIndex: path.zIndex,
        });
        this._polygons.set(path, polygonPromise);
    };
    PolygonManager.prototype.updatePolygon = function (polygon) {
        var _this = this;
        var m = this._polygons.get(polygon);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) { return _this._zone.run(function () { l.setPaths(polygon.paths); }); });
    };
    PolygonManager.prototype.setPolygonOptions = function (path, options) {
        return this._polygons.get(path).then(function (l) { l.setOptions(options); });
    };
    PolygonManager.prototype.deletePolygon = function (paths) {
        var _this = this;
        var m = this._polygons.get(paths);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) {
            return _this._zone.run(function () {
                l.setMap(null);
                _this._polygons.delete(paths);
            });
        });
    };
    PolygonManager.prototype.createEventObservable = function (eventName, path) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].create(function (observer) {
            _this._polygons.get(path).then(function (l) {
                l.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    return PolygonManager;
}());

PolygonManager.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */] },
];
/** @nocollapse */
PolygonManager.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__google_maps_api_wrapper__["a" /* GoogleMapsAPIWrapper */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* NgZone */], },
]; };
//# sourceMappingURL=polygon-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/polyline-manager.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PolylineManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__google_maps_api_wrapper__ = __webpack_require__("./node_modules/@agm/core/services/google-maps-api-wrapper.js");



var PolylineManager = (function () {
    function PolylineManager(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._polylines = new Map();
    }
    PolylineManager._convertPoints = function (line) {
        var path = line._getPoints().map(function (point) {
            return { lat: point.latitude, lng: point.longitude };
        });
        return path;
    };
    PolylineManager.prototype.addPolyline = function (line) {
        var path = PolylineManager._convertPoints(line);
        var polylinePromise = this._mapsWrapper.createPolyline({
            clickable: line.clickable,
            draggable: line.draggable,
            editable: line.editable,
            geodesic: line.geodesic,
            strokeColor: line.strokeColor,
            strokeOpacity: line.strokeOpacity,
            strokeWeight: line.strokeWeight,
            visible: line.visible,
            zIndex: line.zIndex,
            path: path
        });
        this._polylines.set(line, polylinePromise);
    };
    PolylineManager.prototype.updatePolylinePoints = function (line) {
        var _this = this;
        var path = PolylineManager._convertPoints(line);
        var m = this._polylines.get(line);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) { return _this._zone.run(function () { l.setPath(path); }); });
    };
    PolylineManager.prototype.setPolylineOptions = function (line, options) {
        return this._polylines.get(line).then(function (l) { l.setOptions(options); });
    };
    PolylineManager.prototype.deletePolyline = function (line) {
        var _this = this;
        var m = this._polylines.get(line);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) {
            return _this._zone.run(function () {
                l.setMap(null);
                _this._polylines.delete(line);
            });
        });
    };
    PolylineManager.prototype.createEventObservable = function (eventName, line) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].create(function (observer) {
            _this._polylines.get(line).then(function (l) {
                l.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    return PolylineManager;
}());

PolylineManager.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */] },
];
/** @nocollapse */
PolylineManager.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__google_maps_api_wrapper__["a" /* GoogleMapsAPIWrapper */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* NgZone */], },
]; };
//# sourceMappingURL=polyline-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/maps-api-loader/lazy-maps-api-loader.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export GoogleMapsScriptProtocol */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LAZY_MAPS_API_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LazyMapsAPILoader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_browser_globals__ = __webpack_require__("./node_modules/@agm/core/utils/browser-globals.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__maps_api_loader__ = __webpack_require__("./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js");
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



var GoogleMapsScriptProtocol;
(function (GoogleMapsScriptProtocol) {
    GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["HTTP"] = 1] = "HTTP";
    GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["HTTPS"] = 2] = "HTTPS";
    GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["AUTO"] = 3] = "AUTO";
})(GoogleMapsScriptProtocol || (GoogleMapsScriptProtocol = {}));
/**
 * Token for the config of the LazyMapsAPILoader. Please provide an object of type {@link
 * LazyMapsAPILoaderConfig}.
 */
var LAZY_MAPS_API_CONFIG = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* InjectionToken */]('angular-google-maps LAZY_MAPS_API_CONFIG');
var LazyMapsAPILoader = (function (_super) {
    __extends(LazyMapsAPILoader, _super);
    function LazyMapsAPILoader(config, w, d) {
        var _this = _super.call(this) || this;
        _this._config = config || {};
        _this._windowRef = w;
        _this._documentRef = d;
        return _this;
    }
    LazyMapsAPILoader.prototype.load = function () {
        var _this = this;
        if (this._scriptLoadingPromise) {
            return this._scriptLoadingPromise;
        }
        var script = this._documentRef.getNativeDocument().createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.defer = true;
        var callbackName = "angular2GoogleMapsLazyMapsAPILoader";
        script.src = this._getScriptSrc(callbackName);
        this._scriptLoadingPromise = new Promise(function (resolve, reject) {
            _this._windowRef.getNativeWindow()[callbackName] = function () {
                resolve();
            };
            script.onerror = function (error) {
                reject(error);
            };
        });
        this._documentRef.getNativeDocument().body.appendChild(script);
        return this._scriptLoadingPromise;
    };
    LazyMapsAPILoader.prototype._getScriptSrc = function (callbackName) {
        var protocolType = (this._config && this._config.protocol) || GoogleMapsScriptProtocol.HTTPS;
        var protocol;
        switch (protocolType) {
            case GoogleMapsScriptProtocol.AUTO:
                protocol = '';
                break;
            case GoogleMapsScriptProtocol.HTTP:
                protocol = 'http:';
                break;
            case GoogleMapsScriptProtocol.HTTPS:
                protocol = 'https:';
                break;
        }
        var hostAndPath = this._config.hostAndPath || 'maps.googleapis.com/maps/api/js';
        var queryParams = {
            v: this._config.apiVersion || '3',
            callback: callbackName,
            key: this._config.apiKey,
            client: this._config.clientId,
            channel: this._config.channel,
            libraries: this._config.libraries,
            region: this._config.region,
            language: this._config.language
        };
        var params = Object.keys(queryParams)
            .filter(function (k) { return queryParams[k] != null; })
            .filter(function (k) {
            // remove empty arrays
            return !Array.isArray(queryParams[k]) ||
                (Array.isArray(queryParams[k]) && queryParams[k].length > 0);
        })
            .map(function (k) {
            // join arrays as comma seperated strings
            var i = queryParams[k];
            if (Array.isArray(i)) {
                return { key: k, value: i.join(',') };
            }
            return { key: k, value: queryParams[k] };
        })
            .map(function (entry) {
            return entry.key + "=" + entry.value;
        })
            .join('&');
        return protocol + "//" + hostAndPath + "?" + params;
    };
    return LazyMapsAPILoader;
}(__WEBPACK_IMPORTED_MODULE_2__maps_api_loader__["a" /* MapsAPILoader */]));

LazyMapsAPILoader.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */] },
];
/** @nocollapse */
LazyMapsAPILoader.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */], args: [LAZY_MAPS_API_CONFIG,] },] },
    { type: __WEBPACK_IMPORTED_MODULE_1__utils_browser_globals__["c" /* WindowRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_1__utils_browser_globals__["b" /* DocumentRef */], },
]; };
//# sourceMappingURL=lazy-maps-api-loader.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsAPILoader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

var MapsAPILoader = (function () {
    function MapsAPILoader() {
    }
    return MapsAPILoader;
}());

MapsAPILoader.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */] },
];
/** @nocollapse */
MapsAPILoader.ctorParameters = function () { return []; };
//# sourceMappingURL=maps-api-loader.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/maps-api-loader/noop-maps-api-loader.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NoOpMapsAPILoader */
/**
 * When using the NoOpMapsAPILoader, the Google Maps API must be added to the page via a `<script>`
 * Tag.
 * It's important that the Google Maps API script gets loaded first on the page.
 */
var NoOpMapsAPILoader = (function () {
    function NoOpMapsAPILoader() {
    }
    NoOpMapsAPILoader.prototype.load = function () {
        if (!window.google || !window.google.maps) {
            throw new Error('Google Maps API not loaded on page. Make sure window.google.maps is available!');
        }
        return Promise.resolve();
    };
    return NoOpMapsAPILoader;
}());

//# sourceMappingURL=noop-maps-api-loader.js.map

/***/ }),

/***/ "./node_modules/@agm/core/utils/browser-globals.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return WindowRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DocumentRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BROWSER_GLOBALS_PROVIDERS; });
var WindowRef = (function () {
    function WindowRef() {
    }
    WindowRef.prototype.getNativeWindow = function () { return window; };
    return WindowRef;
}());

var DocumentRef = (function () {
    function DocumentRef() {
    }
    DocumentRef.prototype.getNativeDocument = function () { return document; };
    return DocumentRef;
}());

var BROWSER_GLOBALS_PROVIDERS = [WindowRef, DocumentRef];
//# sourceMappingURL=browser-globals.js.map

/***/ }),

/***/ "./node_modules/@angular-mdl/core/components/badge/mdl-badge.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MdlBadgeDirective */
/* unused harmony export MdlBadgeOverlapDirective */
/* unused harmony export MdlBadgeNoBackgroundDirective */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlBadgeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

var DATA_BADE_ATTR = 'data-badge';
var MdlBadgeDirective = (function () {
    function MdlBadgeDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.el = elementRef.nativeElement;
    }
    MdlBadgeDirective.prototype.ngOnChanges = function (changes) {
        if (this.mdlBadgeContent === null || typeof this.mdlBadgeContent === 'undefined') {
            this.renderer.removeAttribute(this.el, DATA_BADE_ATTR);
            return;
        }
        this.renderer.setAttribute(this.el, DATA_BADE_ATTR, this.mdlBadgeContent);
    };
    return MdlBadgeDirective;
}());

MdlBadgeDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                selector: '[mdl-badge]',
                host: {
                    '[class.mdl-badge]': 'true'
                }
            },] },
];
/** @nocollapse */
MdlBadgeDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Renderer2 */], },
]; };
MdlBadgeDirective.propDecorators = {
    'mdlBadgeContent': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */], args: ['mdl-badge',] },],
};
var MdlBadgeOverlapDirective = (function () {
    function MdlBadgeOverlapDirective() {
    }
    return MdlBadgeOverlapDirective;
}());

MdlBadgeOverlapDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                selector: '[mdl-badge-overlap]',
                host: {
                    '[class.mdl-badge--overlap]': 'true'
                }
            },] },
];
/** @nocollapse */
MdlBadgeOverlapDirective.ctorParameters = function () { return []; };
var MdlBadgeNoBackgroundDirective = (function () {
    function MdlBadgeNoBackgroundDirective() {
    }
    return MdlBadgeNoBackgroundDirective;
}());

MdlBadgeNoBackgroundDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                selector: '[mdl-badge-no-background]',
                host: {
                    '[class.mdl-badge--no-background]': 'true'
                }
            },] },
];
/** @nocollapse */
MdlBadgeNoBackgroundDirective.ctorParameters = function () { return []; };
var MDL_BADGE_DIRECTIVES = [MdlBadgeDirective, MdlBadgeOverlapDirective, MdlBadgeNoBackgroundDirective];
var MdlBadgeModule = (function () {
    function MdlBadgeModule() {
    }
    MdlBadgeModule.forRoot = function () {
        return {
            ngModule: MdlBadgeModule,
            providers: []
        };
    };
    return MdlBadgeModule;
}());

MdlBadgeModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */], args: [{
                imports: [],
                exports: MDL_BADGE_DIRECTIVES,
                declarations: MDL_BADGE_DIRECTIVES,
            },] },
];
/** @nocollapse */
MdlBadgeModule.ctorParameters = function () { return []; };
//# sourceMappingURL=mdl-badge.directive.js.map

/***/ }),

/***/ "./node_modules/@angular-mdl/core/components/button/mdl-button.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MdlUnsupportedButtonTypeError */
/* unused harmony export MdlUnsupportedColoredTypeError */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MdlButtonModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_mdl_error__ = __webpack_require__("./node_modules/@angular-mdl/core/components/common/mdl-error.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_boolean_property__ = __webpack_require__("./node_modules/@angular-mdl/core/components/common/boolean-property.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_native_support__ = __webpack_require__("./node_modules/@angular-mdl/core/components/common/native-support.js");
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




var MdlUnsupportedButtonTypeError = (function (_super) {
    __extends(MdlUnsupportedButtonTypeError, _super);
    function MdlUnsupportedButtonTypeError(type) {
        /* istanbul ignore next */
        return _super.call(this, "Button type \"" + type + "\" isn't supported (allowed: raised, fab, mini-fab, icon, '').") || this;
    }
    return MdlUnsupportedButtonTypeError;
}(__WEBPACK_IMPORTED_MODULE_1__common_mdl_error__["a" /* MdlError */]));

var MdlUnsupportedColoredTypeError = (function (_super) {
    __extends(MdlUnsupportedColoredTypeError, _super);
    function MdlUnsupportedColoredTypeError(type) {
        /* istanbul ignore next */
        return _super.call(this, "Colored type \"" + type + "\" isn't supported (allowed: primary, accent, '').") || this;
    }
    return MdlUnsupportedColoredTypeError;
}(__WEBPACK_IMPORTED_MODULE_1__common_mdl_error__["a" /* MdlError */]));

var MDL_BUTTON_TYPES = [
    'raised',
    'fab',
    'mini-fab',
    'icon',
    ''
];
var MDL_COLORED_TYPES = [
    'primary',
    'accent',
    ''
];
var MdlButtonComponent = (function () {
    function MdlButtonComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this._disabled = false;
        this.element = elementRef.nativeElement;
    }
    Object.defineProperty(MdlButtonComponent.prototype, "disabled", {
        get: function () { return this._disabled; },
        set: function (value) { this._disabled = Object(__WEBPACK_IMPORTED_MODULE_2__common_boolean_property__["a" /* toBoolean */])(value); },
        enumerable: true,
        configurable: true
    });
    MdlButtonComponent.prototype.ngOnChanges = function (changes) {
        if (this.mdlButtonType && MDL_BUTTON_TYPES.indexOf(this.mdlButtonType) === -1) {
            throw new MdlUnsupportedButtonTypeError(this.mdlButtonType);
        }
        if (this.mdlColoredType && MDL_COLORED_TYPES.indexOf(this.mdlColoredType) === -1) {
            throw new MdlUnsupportedColoredTypeError(this.mdlColoredType);
        }
    };
    MdlButtonComponent.prototype.onMouseUp = function () {
        this.blurIt();
    };
    MdlButtonComponent.prototype.onMouseLeave = function () {
        this.blurIt();
    };
    MdlButtonComponent.prototype.blurIt = function () {
        Object(__WEBPACK_IMPORTED_MODULE_3__common_native_support__["a" /* callNative */])(this.element, 'blur');
    };
    return MdlButtonComponent;
}());

MdlButtonComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'mdl-button, button[mdl-button], a[mdl-button]',
                host: {
                    '[attr.disabled]': 'disabled ? "disabled" : null',
                    '(mouseup)': 'onMouseUp()',
                    '(mouseleave)': 'onMouseLeave()',
                    '[class.mdl-button]': 'true',
                    '[class.mdl-button--raised]': 'mdlButtonType == "raised"',
                    '[class.mdl-button--fab]': 'mdlButtonType == "fab" || mdlButtonType == "mini-fab"',
                    '[class.mdl-button--mini-fab]': 'mdlButtonType == "mini-fab"',
                    '[class.mdl-button--icon]': 'mdlButtonType == "icon"',
                    '[class.mdl-button--primary]': 'mdlColoredType == "primary"',
                    '[class.mdl-button--accent]': 'mdlColoredType == "accent"'
                },
                exportAs: 'mdlButton',
                template: '<ng-content></ng-content>',
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
            },] },
];
/** @nocollapse */
MdlButtonComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Renderer2 */], },
]; };
MdlButtonComponent.propDecorators = {
    'mdlButtonType': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */], args: ['mdl-button-type',] },],
    'mdlColoredType': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */], args: ['mdl-colored',] },],
    'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
};
var MDL_BUTTON_DIRECTIVES = [MdlButtonComponent];
var MdlButtonModule = (function () {
    function MdlButtonModule() {
    }
    MdlButtonModule.forRoot = function () {
        return {
            ngModule: MdlButtonModule,
            providers: []
        };
    };
    return MdlButtonModule;
}());

MdlButtonModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */], args: [{
                imports: [],
                exports: MDL_BUTTON_DIRECTIVES,
                declarations: MDL_BUTTON_DIRECTIVES,
            },] },
];
/** @nocollapse */
MdlButtonModule.ctorParameters = function () { return []; };
//# sourceMappingURL=mdl-button.component.js.map

/***/ }),

/***/ "./node_modules/@angular-mdl/core/components/card/mdl-card.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MdlCardComponent */
/* unused harmony export MdlCardChildStructure */
/* unused harmony export MdlCardTitleComponent */
/* unused harmony export MdlCardSupportingTextComponent */
/* unused harmony export MdlCardMediaComponent */
/* unused harmony export MdlCardActionsComponent */
/* unused harmony export MdlCardMenuComponent */
/* unused harmony export MdlCardTitleTextDirective */
/* unused harmony export MdlCardBorderDirective */
/* unused harmony export MdlCardExpandDirective */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlCardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_mdl_error__ = __webpack_require__("./node_modules/@angular-mdl/core/components/common/mdl-error.js");
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


var MdlCardComponent = (function () {
    function MdlCardComponent() {
    }
    return MdlCardComponent;
}());

MdlCardComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'mdl-card',
                host: {
                    '[class.mdl-card]': 'true'
                },
                template: '<ng-content></ng-content>',
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
            },] },
];
/** @nocollapse */
MdlCardComponent.ctorParameters = function () { return []; };
var MdlCardChildStructure = (function () {
    function MdlCardChildStructure(mdlCardComponent, childComponentName) {
        this.mdlCardComponent = mdlCardComponent;
        this.childComponentName = childComponentName;
    }
    MdlCardChildStructure.prototype.ngOnInit = function () {
        if (this.mdlCardComponent === null) {
            throw new __WEBPACK_IMPORTED_MODULE_1__common_mdl_error__["b" /* MdlStructureError */](this.childComponentName, 'mdl-card');
        }
    };
    return MdlCardChildStructure;
}());

var MdlCardTitleComponent = (function (_super) {
    __extends(MdlCardTitleComponent, _super);
    function MdlCardTitleComponent(mdlCardComponent) {
        return _super.call(this, mdlCardComponent, 'mdl-card-title') || this;
    }
    MdlCardTitleComponent.prototype.ngOnInit = function () { _super.prototype.ngOnInit.call(this); };
    return MdlCardTitleComponent;
}(MdlCardChildStructure));

MdlCardTitleComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'mdl-card-title',
                host: {
                    '[class.mdl-card__title]': 'true'
                },
                template: '<ng-content></ng-content>',
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
            },] },
];
/** @nocollapse */
MdlCardTitleComponent.ctorParameters = function () { return [
    { type: MdlCardComponent, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Optional */] },] },
]; };
var MdlCardSupportingTextComponent = (function (_super) {
    __extends(MdlCardSupportingTextComponent, _super);
    function MdlCardSupportingTextComponent(mdlCardComponent) {
        return _super.call(this, mdlCardComponent, 'mdl-card-supporting-text') || this;
    }
    MdlCardSupportingTextComponent.prototype.ngOnInit = function () { _super.prototype.ngOnInit.call(this); };
    return MdlCardSupportingTextComponent;
}(MdlCardChildStructure));

MdlCardSupportingTextComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'mdl-card-supporting-text',
                host: {
                    '[class.mdl-card__supporting-text]': 'true'
                },
                template: '<ng-content></ng-content>',
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
            },] },
];
/** @nocollapse */
MdlCardSupportingTextComponent.ctorParameters = function () { return [
    { type: MdlCardComponent, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Optional */] },] },
]; };
var MdlCardMediaComponent = (function (_super) {
    __extends(MdlCardMediaComponent, _super);
    function MdlCardMediaComponent(mdlCardComponent) {
        return _super.call(this, mdlCardComponent, 'mdl-card-media') || this;
    }
    MdlCardMediaComponent.prototype.ngOnInit = function () { _super.prototype.ngOnInit.call(this); };
    return MdlCardMediaComponent;
}(MdlCardChildStructure));

MdlCardMediaComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'mdl-card-media',
                host: {
                    '[class.mdl-card__media]': 'true'
                },
                template: '<ng-content></ng-content>',
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
            },] },
];
/** @nocollapse */
MdlCardMediaComponent.ctorParameters = function () { return [
    { type: MdlCardComponent, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Optional */] },] },
]; };
var MdlCardActionsComponent = (function (_super) {
    __extends(MdlCardActionsComponent, _super);
    function MdlCardActionsComponent(mdlCardComponent) {
        return _super.call(this, mdlCardComponent, 'mdl-card-actions') || this;
    }
    MdlCardActionsComponent.prototype.ngOnInit = function () { _super.prototype.ngOnInit.call(this); };
    return MdlCardActionsComponent;
}(MdlCardChildStructure));

MdlCardActionsComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'mdl-card-actions',
                host: {
                    '[class.mdl-card__actions]': 'true'
                },
                template: '<ng-content></ng-content>',
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
            },] },
];
/** @nocollapse */
MdlCardActionsComponent.ctorParameters = function () { return [
    { type: MdlCardComponent, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Optional */] },] },
]; };
var MdlCardMenuComponent = (function (_super) {
    __extends(MdlCardMenuComponent, _super);
    function MdlCardMenuComponent(mdlCardComponent) {
        return _super.call(this, mdlCardComponent, 'mdl-card-menu') || this;
    }
    MdlCardMenuComponent.prototype.ngOnInit = function () { _super.prototype.ngOnInit.call(this); };
    return MdlCardMenuComponent;
}(MdlCardChildStructure));

MdlCardMenuComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'mdl-card-menu',
                host: {
                    '[class.mdl-card__menu]': 'true'
                },
                template: '<ng-content></ng-content>',
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
            },] },
];
/** @nocollapse */
MdlCardMenuComponent.ctorParameters = function () { return [
    { type: MdlCardComponent, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Optional */] },] },
]; };
var MdlCardTitleTextDirective = (function () {
    function MdlCardTitleTextDirective() {
    }
    return MdlCardTitleTextDirective;
}());

MdlCardTitleTextDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                selector: '[mdl-card-title-text]',
                host: {
                    '[class.mdl-card__title-text]': 'true'
                }
            },] },
];
/** @nocollapse */
MdlCardTitleTextDirective.ctorParameters = function () { return []; };
var MdlCardBorderDirective = (function () {
    function MdlCardBorderDirective() {
    }
    return MdlCardBorderDirective;
}());

MdlCardBorderDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                selector: '[mdl-card-border]',
                host: {
                    '[class.mdl-card--border]': 'true'
                }
            },] },
];
/** @nocollapse */
MdlCardBorderDirective.ctorParameters = function () { return []; };
var MdlCardExpandDirective = (function () {
    function MdlCardExpandDirective() {
    }
    return MdlCardExpandDirective;
}());

MdlCardExpandDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                selector: '[mdl-card-expand]',
                host: {
                    '[class.mdl-card--expand]': 'true'
                }
            },] },
];
/** @nocollapse */
MdlCardExpandDirective.ctorParameters = function () { return []; };
var MDL_CARD_DIRECTIVES = [
    MdlCardComponent,
    MdlCardTitleComponent,
    MdlCardMediaComponent,
    MdlCardSupportingTextComponent,
    MdlCardActionsComponent,
    MdlCardMenuComponent,
    MdlCardTitleTextDirective,
    MdlCardBorderDirective,
    MdlCardExpandDirective
];
var MdlCardModule = (function () {
    function MdlCardModule() {
    }
    MdlCardModule.forRoot = function () {
        return {
            ngModule: MdlCardModule,
            providers: []
        };
    };
    return MdlCardModule;
}());

MdlCardModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */], args: [{
                imports: [],
                exports: MDL_CARD_DIRECTIVES,
                declarations: MDL_CARD_DIRECTIVES,
            },] },
];
/** @nocollapse */
MdlCardModule.ctorParameters = function () { return []; };
//# sourceMappingURL=mdl-card.component.js.map

/***/ }),

/***/ "./node_modules/@angular-mdl/core/components/checkbox/mdl-checkbox.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlCheckboxComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MdlCheckboxModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_boolean_property__ = __webpack_require__("./node_modules/@angular-mdl/core/components/common/boolean-property.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_noop__ = __webpack_require__("./node_modules/@angular-mdl/core/components/common/noop.js");





var IS_FOCUSED = 'is-focused';
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* forwardRef */])(function () { return MdlCheckboxComponent; }),
    multi: true
};
var MdlCheckboxComponent = (function () {
    function MdlCheckboxComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this._disabled = false;
        this.tabindex = null;
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.value_ = false;
        this.onTouchedCallback = __WEBPACK_IMPORTED_MODULE_4__common_noop__["a" /* noop */];
        this.onChangeCallback = __WEBPACK_IMPORTED_MODULE_4__common_noop__["a" /* noop */];
        this.el = elementRef.nativeElement;
    }
    Object.defineProperty(MdlCheckboxComponent.prototype, "disabled", {
        get: function () { return this._disabled; },
        set: function (value) { this._disabled = Object(__WEBPACK_IMPORTED_MODULE_3__common_boolean_property__["a" /* toBoolean */])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdlCheckboxComponent.prototype, "value", {
        get: function () { return this.value_; },
        set: function (v) {
            this.value_ = v;
            this.onChangeCallback(v);
            this.change.emit(v);
        },
        enumerable: true,
        configurable: true
    });
    ;
    MdlCheckboxComponent.prototype.writeValue = function (value) {
        this.value_ = value;
    };
    MdlCheckboxComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    MdlCheckboxComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    MdlCheckboxComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    MdlCheckboxComponent.prototype.onFocus = function () {
        this.renderer.addClass(this.el, IS_FOCUSED);
    };
    MdlCheckboxComponent.prototype.onBlur = function () {
        this.renderer.removeClass(this.el, IS_FOCUSED);
        this.onTouchedCallback();
    };
    MdlCheckboxComponent.prototype.onClick = function () {
        if (this.disabled) {
            return;
        }
        this.value = !this.value;
    };
    return MdlCheckboxComponent;
}());

MdlCheckboxComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'mdl-checkbox',
                providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                host: {
                    '(click)': 'onClick()',
                    '[class.mdl-checkbox]': 'true',
                    '[class.is-upgraded]': 'true',
                    '[class.is-checked]': 'value',
                    '[class.is-disabled]': 'disabled'
                },
                template: "\n  <input type=\"checkbox\" class=\"mdl-checkbox__input\" \n    (focus)=\"onFocus()\" \n    (blur)=\"onBlur()\"\n    [disabled]=\"disabled\"\n    [attr.tabindex]=\"tabindex\"\n    [ngModel]=\"value\">\n  <span class=\"mdl-checkbox__label\"><ng-content></ng-content></span>\n  <span class=\"mdl-checkbox__focus-helper\"></span>\n  <span class=\"mdl-checkbox__box-outline\">\n    <span class=\"mdl-checkbox__tick-outline\"></span>\n  </span>\n  ",
                inputs: ['value'],
                outputs: ['change'],
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None,
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush
            },] },
];
/** @nocollapse */
MdlCheckboxComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Renderer2 */], },
]; };
MdlCheckboxComponent.propDecorators = {
    'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'tabindex': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
};
var MDL_CHECKBOX_DIRECTIVES = [MdlCheckboxComponent];
var MdlCheckboxModule = (function () {
    function MdlCheckboxModule() {
    }
    MdlCheckboxModule.forRoot = function () {
        return {
            ngModule: MdlCheckboxModule,
            providers: []
        };
    };
    return MdlCheckboxModule;
}());

MdlCheckboxModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormsModule */]],
                exports: MDL_CHECKBOX_DIRECTIVES,
                declarations: MDL_CHECKBOX_DIRECTIVES,
            },] },
];
/** @nocollapse */
MdlCheckboxModule.ctorParameters = function () { return []; };
//# sourceMappingURL=mdl-checkbox.component.js.map

/***/ }),

/***/ "./node_modules/@angular-mdl/core/components/chips/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlChipModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icon_mdl_icon_component__ = __webpack_require__("./node_modules/@angular-mdl/core/components/icon/mdl-icon.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mdl_chip_component__ = __webpack_require__("./node_modules/@angular-mdl/core/components/chips/mdl-chip.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mdl_chip_contact_directive__ = __webpack_require__("./node_modules/@angular-mdl/core/components/chips/mdl-chip-contact.directive.js");
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */







var DIRECTIVES = [__WEBPACK_IMPORTED_MODULE_3__mdl_chip_component__["a" /* MdlChipComponent */], __WEBPACK_IMPORTED_MODULE_4__mdl_chip_contact_directive__["a" /* MdlChipContactDirective */]];
var MdlChipModule = (function () {
    function MdlChipModule() {
    }
    MdlChipModule.forRoot = function () {
        return {
            ngModule: MdlChipModule,
            providers: []
        };
    };
    return MdlChipModule;
}());

MdlChipModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_2__icon_mdl_icon_component__["a" /* MdlIconModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
                exports: DIRECTIVES,
                declarations: DIRECTIVES,
            },] },
];
/** @nocollapse */
MdlChipModule.ctorParameters = function () { return []; };
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@angular-mdl/core/components/chips/mdl-chip-contact.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlChipContactDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdl_chip_component__ = __webpack_require__("./node_modules/@angular-mdl/core/components/chips/mdl-chip.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_mdl_error__ = __webpack_require__("./node_modules/@angular-mdl/core/components/common/mdl-error.js");



var MdlChipContactDirective = (function () {
    function MdlChipContactDirective(mdlChipComponent) {
        this.mdlChipComponent = mdlChipComponent;
    }
    MdlChipContactDirective.prototype.ngOnInit = function () {
        if (!this.mdlChipComponent) {
            throw new __WEBPACK_IMPORTED_MODULE_2__common_mdl_error__["b" /* MdlStructureError */]('mdl-chip-contact', 'mdl-chip');
        }
    };
    return MdlChipContactDirective;
}());

MdlChipContactDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                selector: '[mdl-chip-contact]',
                host: {
                    '[class.mdl-chip__contact]': 'true'
                }
            },] },
];
/** @nocollapse */
MdlChipContactDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__mdl_chip_component__["a" /* MdlChipComponent */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Optional */] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */], args: [Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* forwardRef */])(function () { return __WEBPACK_IMPORTED_MODULE_1__mdl_chip_component__["a" /* MdlChipComponent */]; }),] },] },
]; };
//# sourceMappingURL=mdl-chip-contact.directive.js.map

/***/ }),

/***/ "./node_modules/@angular-mdl/core/components/chips/mdl-chip.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlChipComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdl_chip_contact_directive__ = __webpack_require__("./node_modules/@angular-mdl/core/components/chips/mdl-chip-contact.directive.js");


var MdlChipComponent = (function () {
    function MdlChipComponent() {
        this.actionClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    MdlChipComponent.prototype.action = function () {
        this.actionClick.emit();
    };
    return MdlChipComponent;
}());

MdlChipComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'mdl-chip',
                host: {
                    '[class.mdl-chip]': 'true',
                    '[class.mdl-chip--contact]': 'chipContact'
                },
                template: "\n    <ng-content></ng-content>\n    <span *ngIf=\"mdlLabel\" class=\"mdl-chip__text\">{{mdlLabel}}</span>\n    <button *ngIf=\"mdlActionIcon\" (click)=\"action()\" type=\"button\" class=\"mdl-chip__action\">\n      <mdl-icon>{{mdlActionIcon}}</mdl-icon>\n    </button>\n  ",
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
            },] },
];
/** @nocollapse */
MdlChipComponent.ctorParameters = function () { return []; };
MdlChipComponent.propDecorators = {
    'mdlLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */], args: ['mdl-label',] },],
    'mdlActionIcon': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */], args: ['mdl-action-icon',] },],
    'actionClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */], args: ['action-click',] },],
    'chipContact': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ContentChild */], args: [__WEBPACK_IMPORTED_MODULE_1__mdl_chip_contact_directive__["a" /* MdlChipContactDirective */],] },],
};
//# sourceMappingURL=mdl-chip.component.js.map

/***/ }),

/***/ "./node_modules/@angular-mdl/core/components/common/animations.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NativeWebAnimationPlayer */
/* unused harmony export NoopAnimationPlayer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Animations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NativeWebAnimations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NoopWebAnimations; });
var NativeWebAnimationPlayer = (function () {
    function NativeWebAnimationPlayer(element, keyframes, duration, easing) {
        this.element = element;
        this.keyframes = keyframes;
        this.duration = duration;
        this.easing = easing;
        this.onDoneCallback = [];
    }
    NativeWebAnimationPlayer.prototype.onDone = function (fn) {
        this.onDoneCallback.push(fn);
    };
    NativeWebAnimationPlayer.prototype.play = function () {
        var _this = this;
        var animation = this.element['animate'](this.keyframes, { duration: this.duration,
            easing: this.easing,
            fill: 'forwards' });
        animation.addEventListener('finish', function () { return _this.onDoneCallback.forEach(function (fn) { return fn(); }); });
    };
    return NativeWebAnimationPlayer;
}());

var NoopAnimationPlayer = (function () {
    function NoopAnimationPlayer(element, keyframes, duration, easing) {
        this.element = element;
        this.keyframes = keyframes;
        this.duration = duration;
        this.easing = easing;
        this.onDoneCallback = [];
    }
    NoopAnimationPlayer.prototype.onDone = function (fn) {
        this.onDoneCallback.push(fn);
    };
    NoopAnimationPlayer.prototype.play = function () {
        this.onDoneCallback.forEach(function (fn) { return fn(); });
    };
    return NoopAnimationPlayer;
}());

var Animations = (function () {
    function Animations() {
    }
    return Animations;
}());

var NativeWebAnimations = (function () {
    function NativeWebAnimations() {
    }
    NativeWebAnimations.prototype.animate = function (element, keyframes, duration, easing) {
        return new NativeWebAnimationPlayer(element, keyframes, duration, easing);
    };
    return NativeWebAnimations;
}());

var NoopWebAnimations = (function () {
    function NoopWebAnimations() {
    }
    NoopWebAnimations.prototype.animate = function (element, keyframes, duration, easing) {
        return new NoopAnimationPlayer(element, keyframes, duration, easing);
    };
    return NoopWebAnimations;
}());

//# sourceMappingURL=animations.js.map

/***/ }),

/***/ "./node_modules/@angular-mdl/core/components/common/append-view-container-ref-directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppendViewContainerRefDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

var AppendViewContainerRefDirective = (function () {
    function AppendViewContainerRefDirective(viewRef, renderer) {
        this.viewRef = viewRef;
        this.renderer = renderer;
    }
    AppendViewContainerRefDirective.prototype.ngAfterViewInit = function () {
        this.renderer.appendChild(this.viewRef.element.nativeElement, this.viewContainerRefToAppend.element.nativeElement);
    };
    return AppendViewContainerRefDirective;
}());

AppendViewContainerRefDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                selector: '[append-view-container-ref]'
            },] },
];
/** @nocollapse */
AppendViewContainerRefDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewContainerRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Renderer2 */], },
]; };
AppendViewContainerRefDirective.propDecorators = {
    'viewContainerRefToAppend': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */], args: ['append-view-container-ref',] },],
};
//# sourceMappingURL=append-view-container-ref-directive.js.map

/***/ }),

/***/ "./node_modules/@angular-mdl/core/components/common/boolean-property.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = toBoolean;
function toBoolean(value) {
    return value != null && "" + value !== 'false';
}
//# sourceMappingURL=boolean-property.js.map

/***/ }),

/***/ "./node_modules/@angular-mdl/core/components/common/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export instantiateSupportedAnimationDriver */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlCommonsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__append_view_container_ref_directive__ = __webpack_require__("./node_modules/@angular-mdl/core/components/common/append-view-container-ref-directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations__ = __webpack_require__("./node_modules/@angular-mdl/core/components/common/animations.js");



function isWebAnimationsSupported() {
    return typeof Element !== 'undefined' && typeof Element.prototype['animate'] === 'function';
}
function instantiateSupportedAnimationDriver() {
    /* istanbul ignore next */
    if (isWebAnimationsSupported()) {
        return new __WEBPACK_IMPORTED_MODULE_2__animations__["b" /* NativeWebAnimations */]();
    }
    /* istanbul ignore next */
    return new __WEBPACK_IMPORTED_MODULE_2__animations__["c" /* NoopWebAnimations */]();
}
var MdlCommonsModule = (function () {
    function MdlCommonsModule() {
    }
    return MdlCommonsModule;
}());

MdlCommonsModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */], args: [{
                imports: [],
                exports: [__WEBPACK_IMPORTED_MODULE_1__append_view_container_ref_directive__["a" /* AppendViewContainerRefDirective */]],
                declarations: [__WEBPACK_IMPORTED_MODULE_1__append_view_container_ref_directive__["a" /* AppendViewContainerRefDirective */]],
                providers: [
                    { provide: __WEBPACK_IMPORTED_MODULE_2__animations__["a" /* Animations */], useFactory: instantiateSupportedAnimationDriver }
                ]
            },] },
];
/** @nocollapse */
MdlCommonsModule.ctorParameters = function () { return []; };
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@angular-mdl/core/components/common/mdl-error.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MdlStructureError; });
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
/**
 * Wrapper for mdl error messages.
 */
var MdlError = (function (_super) {
    __extends(MdlError, _super);
    function MdlError(value) {
        /* istanbul ignore next */
        return _super.call(this, value) || this;
    }
    return MdlError;
}(Error));

var MdlStructureError = (function (_super) {
    __extends(MdlStructureError, _super);
    function MdlStructureError(child, requiredParent) {
        /* istanbul ignore next */
        return _super.call(this, "\"" + child + "\" requires \"" + requiredParent + "\" as a parent.") || this;
    }
    return MdlStructureError;
}(MdlError));

//# sourceMappingURL=mdl-error.js.map

/***/ }),

/***/ "./node_modules/@angular-mdl/core/components/common/mdl-ripple.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MdlRippleDirective */
/* unused harmony export MdlButtonRippleDirective */
/* unused harmony export MdlCheckboxRippleDirective */
/* unused harmony export MdlRadioRippleDirective */
/* unused harmony export MdlIconToggleRippleDirective */
/* unused harmony export MdlSwitchRippleDirective */
/* unused harmony export MdlMenuItemRippleDirective */
/* unused harmony export MdlAnchorRippleDirective */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlRippleModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ripple_vendor__ = __webpack_require__("./node_modules/@angular-mdl/core/components/common/ripple.vendor.js");
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


// known bugs: https://github.com/google/material-design-lite/issues/4215
var MdlRippleDirective = (function () {
    function MdlRippleDirective(elementRef, renderer, cssContainerClasses) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.cssContainerClasses = cssContainerClasses;
        this.RIPPLE = 'mdl-ripple';
        this.rippleActive = true;
        this.el = elementRef.nativeElement;
    }
    MdlRippleDirective.prototype.ngOnChanges = function (changes) {
        var _this = this;
        // remove any existing ripple container
        if (this.rippleContainer) {
            this.el.removeChild(this.rippleContainer);
            delete this.rippleContainer;
            delete this.ripple;
        }
        // if used as mdl-ripple without property binding it is an empty string
        // otherwise (e.g. [mdl-ripple] it is a boolean - may be with the default value true.
        if (this.rippleActive === '' || this.rippleActive) {
            this.rippleContainer = this.renderer.createElement('span');
            this.cssContainerClasses.forEach(function (cssClass) {
                _this.renderer.addClass(_this.rippleContainer, cssClass);
            });
            var rippleElement = this.renderer.createElement('span');
            this.renderer.addClass(rippleElement, this.RIPPLE);
            this.rippleContainer.appendChild(rippleElement);
            this.el.appendChild(this.rippleContainer);
            this.ripple = new __WEBPACK_IMPORTED_MODULE_1__ripple_vendor__["a" /* MaterialRipple */](this.renderer, this.el);
        }
    };
    return MdlRippleDirective;
}());

var MdlButtonRippleDirective = (function (_super) {
    __extends(MdlButtonRippleDirective, _super);
    function MdlButtonRippleDirective(elementRef, renderer) {
        var _this = _super.call(this, elementRef, renderer, ['mdl-button__ripple-container']) || this;
        _this.rippleActive = true;
        return _this;
    }
    // AOT is not able to call lifecycle hooks if a base class :(
    MdlButtonRippleDirective.prototype.ngOnChanges = function (changes) { _super.prototype.ngOnChanges.call(this, changes); };
    return MdlButtonRippleDirective;
}(MdlRippleDirective));

MdlButtonRippleDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                selector: 'mdl-button[mdl-ripple], button[mdl-ripple]'
            },] },
];
/** @nocollapse */
MdlButtonRippleDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Renderer2 */], },
]; };
MdlButtonRippleDirective.propDecorators = {
    'rippleActive': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */], args: ['mdl-ripple',] },],
};
var MdlCheckboxRippleDirective = (function (_super) {
    __extends(MdlCheckboxRippleDirective, _super);
    function MdlCheckboxRippleDirective(elementRef, renderer) {
        var _this = _super.call(this, elementRef, renderer, ['mdl-checkbox__ripple-container', 'mdl-ripple--center']) || this;
        _this.rippleActive = true;
        return _this;
    }
    // AOT is not able to call lifecycle hooks if a base class :(
    MdlCheckboxRippleDirective.prototype.ngOnChanges = function (changes) { _super.prototype.ngOnChanges.call(this, changes); };
    return MdlCheckboxRippleDirective;
}(MdlRippleDirective));

MdlCheckboxRippleDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                selector: 'mdl-checkbox[mdl-ripple]'
            },] },
];
/** @nocollapse */
MdlCheckboxRippleDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Renderer2 */], },
]; };
MdlCheckboxRippleDirective.propDecorators = {
    'rippleActive': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */], args: ['mdl-ripple',] },],
};
var MdlRadioRippleDirective = (function (_super) {
    __extends(MdlRadioRippleDirective, _super);
    function MdlRadioRippleDirective(elementRef, renderer) {
        var _this = _super.call(this, elementRef, renderer, ['mdl-radio__ripple-container', 'mdl-ripple--center']) || this;
        _this.rippleActive = true;
        return _this;
    }
    // AOT is not able to call lifecycle hooks if a base class :(
    MdlRadioRippleDirective.prototype.ngOnChanges = function (changes) { _super.prototype.ngOnChanges.call(this, changes); };
    return MdlRadioRippleDirective;
}(MdlRippleDirective));

MdlRadioRippleDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                selector: 'mdl-radio[mdl-ripple]'
            },] },
];
/** @nocollapse */
MdlRadioRippleDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Renderer2 */], },
]; };
MdlRadioRippleDirective.propDecorators = {
    'rippleActive': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */], args: ['mdl-ripple',] },],
};
var MdlIconToggleRippleDirective = (function (_super) {
    __extends(MdlIconToggleRippleDirective, _super);
    function MdlIconToggleRippleDirective(elementRef, renderer) {
        var _this = _super.call(this, elementRef, renderer, ['mdl-icon-toggle__ripple-container', 'mdl-ripple--center']) || this;
        _this.rippleActive = true;
        return _this;
    }
    // AOT is not able to call lifecycle hooks if a base class :(
    MdlIconToggleRippleDirective.prototype.ngOnChanges = function (changes) { _super.prototype.ngOnChanges.call(this, changes); };
    return MdlIconToggleRippleDirective;
}(MdlRippleDirective));

MdlIconToggleRippleDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                selector: 'mdl-icon-toggle[mdl-ripple]'
            },] },
];
/** @nocollapse */
MdlIconToggleRippleDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Renderer2 */], },
]; };
MdlIconToggleRippleDirective.propDecorators = {
    'rippleActive': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */], args: ['mdl-ripple',] },],
};
var MdlSwitchRippleDirective = (function (_super) {
    __extends(MdlSwitchRippleDirective, _super);
    function MdlSwitchRippleDirective(elementRef, renderer) {
        var _this = _super.call(this, elementRef, renderer, ['mdl-switch__ripple-container', 'mdl-ripple--center']) || this;
        _this.rippleActive = true;
        return _this;
    }
    // AOT is not able to call lifecycle hooks if a base class :(
    MdlSwitchRippleDirective.prototype.ngOnChanges = function (changes) { _super.prototype.ngOnChanges.call(this, changes); };
    return MdlSwitchRippleDirective;
}(MdlRippleDirective));

MdlSwitchRippleDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                selector: 'mdl-switch[mdl-ripple]'
            },] },
];
/** @nocollapse */
MdlSwitchRippleDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Renderer2 */], },
]; };
MdlSwitchRippleDirective.propDecorators = {
    'rippleActive': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */], args: ['mdl-ripple',] },],
};
var MdlMenuItemRippleDirective = (function (_super) {
    __extends(MdlMenuItemRippleDirective, _super);
    function MdlMenuItemRippleDirective(elementRef, renderer) {
        var _this = _super.call(this, elementRef, renderer, ['mdl-menu__item--ripple-container']) || this;
        _this.rippleActive = true;
        return _this;
    }
    // AOT is not able to call lifecycle hooks if a base class :(
    MdlMenuItemRippleDirective.prototype.ngOnChanges = function (changes) { _super.prototype.ngOnChanges.call(this, changes); };
    return MdlMenuItemRippleDirective;
}(MdlRippleDirective));

MdlMenuItemRippleDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                selector: 'mdl-menu-item[mdl-ripple]'
            },] },
];
/** @nocollapse */
MdlMenuItemRippleDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Renderer2 */], },
]; };
MdlMenuItemRippleDirective.propDecorators = {
    'rippleActive': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */], args: ['mdl-ripple',] },],
};
var MdlAnchorRippleDirective = (function (_super) {
    __extends(MdlAnchorRippleDirective, _super);
    function MdlAnchorRippleDirective(elementRef, renderer) {
        var _this = _super.call(this, elementRef, renderer, ['mdl-tabs__ripple-container', 'mdl-layout__tab-ripple-container']) || this;
        _this.rippleActive = true;
        return _this;
    }
    // AOT is not able to call lifecycle hooks if a base class :(
    MdlAnchorRippleDirective.prototype.ngOnChanges = function (changes) { _super.prototype.ngOnChanges.call(this, changes); };
    return MdlAnchorRippleDirective;
}(MdlRippleDirective));

MdlAnchorRippleDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                selector: 'a[mdl-ripple],div[mdl-ripple]'
            },] },
];
/** @nocollapse */
MdlAnchorRippleDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Renderer2 */], },
]; };
MdlAnchorRippleDirective.propDecorators = {
    'rippleActive': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */], args: ['mdl-ripple',] },],
};
var MDL_COMMON_DIRECTIVES = [
    MdlCheckboxRippleDirective,
    MdlButtonRippleDirective,
    MdlRadioRippleDirective,
    MdlIconToggleRippleDirective,
    MdlSwitchRippleDirective,
    MdlMenuItemRippleDirective,
    MdlAnchorRippleDirective
];
var MdlRippleModule = (function () {
    function MdlRippleModule() {
    }
    MdlRippleModule.forRoot = function () {
        return {
            ngModule: MdlRippleModule,
            providers: []
        };
    };
    return MdlRippleModule;
}());

MdlRippleModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */], args: [{
                imports: [],
                exports: MDL_COMMON_DIRECTIVES,
                declarations: MDL_COMMON_DIRECTIVES,
            },] },
];
/** @nocollapse */
MdlRippleModule.ctorParameters = function () { return []; };
//# sourceMappingURL=mdl-ripple.directive.js.map

/***/ }),

/***/ "./node_modules/@angular-mdl/core/components/common/native-support.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = callNative;
function callNative(el, method, arg) {
    if (arg === void 0) { arg = null; }
    /* istanbul ignore next */ // if this code runs in browser this is allways true!
    if (el[method]) {
        el[method](arg);
    }
}
//# sourceMappingURL=native-support.js.map

/***/ }),

/***/ "./node_modules/@angular-mdl/core/components/common/noop.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return noop; });
/* istanbul ignore next */
/* istanbul ignore next */ var noop = function (_) { };
//# sourceMappingURL=noop.js.map

/***/ }),

/***/ "./node_modules/@angular-mdl/core/components/common/number.property.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = toNumber;
function toNumber(value) {
    if (typeof value === 'undefined') {
        return null;
    }
    else if (typeof value === 'string') {
        return parseInt(value);
    }
    return value;
}
//# sourceMappingURL=number.property.js.map

/***/ }),

/***/ "./node_modules/@angular-mdl/core/components/common/ripple.vendor.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = MaterialRipple;
/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Class constructor for Ripple MDL component.
 * Implements MDL component design pattern defined at:
 * https://github.com/jasonmayes/mdl-component-design-pattern
 *
 * @constructor
 * @param {HTMLElement} element The element that will be upgraded.
 */
function MaterialRipple(renderer, element) {
    this.renderer_ = renderer;
    this.element_ = element;
    // Initialize instance.
    this.init();
}
;
/**
 * Store constants in one place so they can be updated easily.
 *
 * @enum {string | number}
 * @private
 */
MaterialRipple.prototype.Constant_ = {
    INITIAL_SCALE: 'scale(0.0001, 0.0001)',
    INITIAL_SIZE: '1px',
    INITIAL_OPACITY: '0.4',
    FINAL_OPACITY: '0',
    FINAL_SCALE: ''
};
/**
 * Store strings for class names defined by this component that are used in
 * JavaScript. This allows us to simply change it in one place should we
 * decide to modify at a later date.
 *
 * @enum {string}
 * @private
 */
MaterialRipple.prototype.CssClasses_ = {
    RIPPLE_CENTER: 'mdl-ripple--center',
    RIPPLE_EFFECT_IGNORE_EVENTS: 'mdl-js-ripple-effect--ignore-events',
    RIPPLE: 'mdl-ripple',
    IS_ANIMATING: 'is-animating',
    IS_VISIBLE: 'is-visible'
};
/**
 * Handle mouse / finger down on element.
 *
 * @param {Event} event The event that fired.
 * @private
 */
MaterialRipple.prototype.downHandler_ = function (event) {
    if (!this.rippleElement_.style.width && !this.rippleElement_.style.height) {
        var rect = this.element_.getBoundingClientRect();
        this.boundHeight = rect.height;
        this.boundWidth = rect.width;
        this.rippleSize_ = Math.sqrt(rect.width * rect.width +
            rect.height * rect.height) * 2 + 2;
        this.rippleElement_.style.width = this.rippleSize_ + 'px';
        this.rippleElement_.style.height = this.rippleSize_ + 'px';
    }
    this.renderer_.addClass(this.rippleElement_, this.CssClasses_.IS_VISIBLE);
    if (event.type === 'mousedown' && this.ignoringMouseDown_) {
        this.ignoringMouseDown_ = false;
    }
    else {
        if (event.type === 'touchstart') {
            this.ignoringMouseDown_ = true;
        }
        var frameCount = this.getFrameCount();
        if (frameCount > 0) {
            return;
        }
        this.setFrameCount(1);
        var bound = event.currentTarget.getBoundingClientRect();
        var x;
        var y;
        // Check if we are handling a keyboard click.
        if (event.clientX === 0 && event.clientY === 0) {
            x = Math.round(bound.width / 2);
            y = Math.round(bound.height / 2);
        }
        else {
            var clientX = event.clientX !== undefined ? event.clientX : event.touches[0].clientX;
            var clientY = event.clientY !== undefined ? event.clientY : event.touches[0].clientY;
            x = Math.round(clientX - bound.left);
            y = Math.round(clientY - bound.top);
        }
        this.setRippleXY(x, y);
        this.setRippleStyles(true);
        window.requestAnimationFrame(this.animFrameHandler.bind(this));
    }
};
/**
 * Handle mouse / finger up on element.
 *
 * @param {Event} event The event that fired.
 * @private
 */
MaterialRipple.prototype.upHandler_ = function (event) {
    // Don't fire for the artificial "mouseup" generated by a double-click.
    if (event && event.detail !== 2) {
        // Allow a repaint to occur before removing this class, so the animation
        // shows for tap events, which seem to trigger a mouseup too soon after
        // mousedown.
        setTimeout(function () {
            this.renderer_.removeClass(this.rippleElement_, this.CssClasses_.IS_VISIBLE);
        }.bind(this), 0);
    }
};
/**
 * Initialize element.
 */
MaterialRipple.prototype.init = function () {
    if (this.element_) {
        var recentering = this.element_.classList.contains(this.CssClasses_.RIPPLE_CENTER);
        if (!this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT_IGNORE_EVENTS)) {
            this.rippleElement_ = this.element_.querySelector('.' +
                this.CssClasses_.RIPPLE);
            this.frameCount_ = 0;
            this.rippleSize_ = 0;
            this.x_ = 0;
            this.y_ = 0;
            // Touch start produces a compat mouse down event, which would cause a
            // second ripples. To avoid that, we use this property to ignore the first
            // mouse down after a touch start.
            this.ignoringMouseDown_ = false;
            this.boundDownHandler = this.downHandler_.bind(this);
            this.element_.addEventListener('mousedown', this.boundDownHandler);
            this.element_.addEventListener('touchstart', this.boundDownHandler);
            this.boundUpHandler = this.upHandler_.bind(this);
            this.element_.addEventListener('mouseup', this.boundUpHandler);
            this.element_.addEventListener('mouseleave', this.boundUpHandler);
            this.element_.addEventListener('touchend', this.boundUpHandler);
            this.element_.addEventListener('blur', this.boundUpHandler);
            /**
             * Getter for frameCount_.
             * @return {number} the frame count.
             */
            this.getFrameCount = function () {
                return this.frameCount_;
            };
            /**
             * Setter for frameCount_.
             * @param {number} fC the frame count.
             */
            this.setFrameCount = function (fC) {
                this.frameCount_ = fC;
            };
            /**
             * Getter for rippleElement_.
             * @return {Element} the ripple element.
             */
            this.getRippleElement = function () {
                return this.rippleElement_;
            };
            /**
             * Sets the ripple X and Y coordinates.
             * @param  {number} newX the new X coordinate
             * @param  {number} newY the new Y coordinate
             */
            this.setRippleXY = function (newX, newY) {
                this.x_ = newX;
                this.y_ = newY;
            };
            /**
             * Sets the ripple styles.
             * @param  {boolean} start whether or not this is the start frame.
             */
            this.setRippleStyles = function (start) {
                if (this.rippleElement_ !== null) {
                    var transformString;
                    var scale;
                    var size;
                    var offset = 'translate(' + this.x_ + 'px, ' + this.y_ + 'px)';
                    if (start) {
                        scale = this.Constant_.INITIAL_SCALE;
                        size = this.Constant_.INITIAL_SIZE;
                    }
                    else {
                        scale = this.Constant_.FINAL_SCALE;
                        size = this.rippleSize_ + 'px';
                        if (recentering) {
                            offset = 'translate(' + this.boundWidth / 2 + 'px, ' +
                                this.boundHeight / 2 + 'px)';
                        }
                    }
                    transformString = 'translate(-50%, -50%) ' + offset + scale;
                    this.rippleElement_.style.webkitTransform = transformString;
                    this.rippleElement_.style.msTransform = transformString;
                    this.rippleElement_.style.transform = transformString;
                    if (start) {
                        this.renderer_.removeClass(this.rippleElement_, this.CssClasses_.IS_ANIMATING);
                    }
                    else {
                        this.renderer_.addClass(this.rippleElement_, this.CssClasses_.IS_ANIMATING);
                    }
                }
            };
            /**
             * Handles an animation frame.
             */
            this.animFrameHandler = function () {
                if (this.frameCount_-- > 0) {
                    window.requestAnimationFrame(this.animFrameHandler.bind(this));
                }
                else {
                    this.setRippleStyles(false);
                }
            };
        }
    }
};
//# sourceMappingURL=ripple.vendor.js.map

/***/ }),

/***/ "./node_modules/@angular-mdl/core/components/dialog-outlet/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlDialogOutletModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdl_dialog_outlet_component__ = __webpack_require__("./node_modules/@angular-mdl/core/components/dialog-outlet/mdl-dialog-outlet.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mdl_dialog_outlet_service__ = __webpack_require__("./node_modules/@angular-mdl/core/components/dialog-outlet/mdl-dialog-outlet.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mdl_backdrop_overlay_component__ = __webpack_require__("./node_modules/@angular-mdl/core/components/dialog-outlet/mdl-backdrop-overlay.component.js");
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */






var PUBLIC_COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_1__mdl_dialog_outlet_component__["a" /* MdlDialogInnerOutletComponent */]
];
var PRIVATE_COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_1__mdl_dialog_outlet_component__["b" /* MdlDialogOutletComponent */],
    __WEBPACK_IMPORTED_MODULE_3__mdl_backdrop_overlay_component__["a" /* MdlBackdropOverlayComponent */]
];
var MdlDialogOutletModule = (function () {
    function MdlDialogOutletModule() {
    }
    MdlDialogOutletModule.forRoot = function () {
        return {
            ngModule: MdlDialogOutletModule,
            providers: [__WEBPACK_IMPORTED_MODULE_2__mdl_dialog_outlet_service__["a" /* MdlDialogOutletService */]]
        };
    };
    return MdlDialogOutletModule;
}());

MdlDialogOutletModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */], args: [{
                imports: [],
                exports: PUBLIC_COMPONENTS,
                declarations: PUBLIC_COMPONENTS.concat(PRIVATE_COMPONENTS),
                entryComponents: [
                    __WEBPACK_IMPORTED_MODULE_1__mdl_dialog_outlet_component__["b" /* MdlDialogOutletComponent */],
                    __WEBPACK_IMPORTED_MODULE_3__mdl_backdrop_overlay_component__["a" /* MdlBackdropOverlayComponent */]
                ]
            },] },
];
/** @nocollapse */
MdlDialogOutletModule.ctorParameters = function () { return []; };
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@angular-mdl/core/components/dialog-outlet/mdl-backdrop-overlay.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlBackdropOverlayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

var MdlBackdropOverlayComponent = (function () {
    function MdlBackdropOverlayComponent() {
        this.clickEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.visible = false;
        this.zIndex = 0;
    }
    Object.defineProperty(MdlBackdropOverlayComponent.prototype, "display", {
        get: function () {
            return this.visible ? null : 'none';
        },
        enumerable: true,
        configurable: true
    });
    MdlBackdropOverlayComponent.prototype.onBackdropClick = function (e) {
        this.clickEmitter.emit();
        e.stopPropagation();
    };
    MdlBackdropOverlayComponent.prototype.hide = function () {
        this.visible = false;
    };
    MdlBackdropOverlayComponent.prototype.showWithZIndex = function (zIndex) {
        this.zIndex = zIndex;
        this.visible = true;
    };
    return MdlBackdropOverlayComponent;
}());

MdlBackdropOverlayComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'mdl-backdrop-overlay',
                host: {
                    '[class.dialog-backdrop]': 'true',
                },
                template: "",
                styles: [
                    "    \n      .dialog-backdrop {\n        position: fixed;\n        top: 0; right: 0; bottom: 0; left: 0;\n        background: rgba(0,0,0,0.1);\n      }\n    "
                ],
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
            },] },
];
/** @nocollapse */
MdlBackdropOverlayComponent.ctorParameters = function () { return []; };
MdlBackdropOverlayComponent.propDecorators = {
    'display': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */], args: ['style.display',] },],
    'zIndex': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */], args: ['style.zIndex',] },],
    'onBackdropClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */], args: ['click', ['$event'],] },],
};
//# sourceMappingURL=mdl-backdrop-overlay.component.js.map

/***/ }),

/***/ "./node_modules/@angular-mdl/core/components/dialog-outlet/mdl-dialog-outlet.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MdlDialogOutletComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlDialogInnerOutletComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdl_dialog_outlet_service__ = __webpack_require__("./node_modules/@angular-mdl/core/components/dialog-outlet/mdl-dialog-outlet.service.js");


// the componnet is used outside the app-root. injecting MdlDialogService would not work
// this component is not exported - needs to be instanciated by
//    let x = this.appRef.bootstrap(MdlDialogOutletComponent);
var MdlDialogOutletComponent = (function () {
    function MdlDialogOutletComponent(vCRef) {
        this.vCRef = vCRef;
    }
    Object.defineProperty(MdlDialogOutletComponent.prototype, "viewContainerRef", {
        get: function () {
            return this.vCRef;
        },
        enumerable: true,
        configurable: true
    });
    return MdlDialogOutletComponent;
}());

MdlDialogOutletComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'dialog-outlet',
                template: ''
            },] },
];
/** @nocollapse */
MdlDialogOutletComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewContainerRef */], },
]; };
// the component is used inside the app-root. this is possible because this component
// is exported from the module
var MdlDialogInnerOutletComponent = (function () {
    function MdlDialogInnerOutletComponent(vCRef, service) {
        this.vCRef = vCRef;
        service.setDefaultViewContainerRef(vCRef);
    }
    return MdlDialogInnerOutletComponent;
}());

MdlDialogInnerOutletComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'dialog-outlet',
                template: ''
            },] },
];
/** @nocollapse */
MdlDialogInnerOutletComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewContainerRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_1__mdl_dialog_outlet_service__["a" /* MdlDialogOutletService */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */], args: [Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* forwardRef */])(function () { return __WEBPACK_IMPORTED_MODULE_1__mdl_dialog_outlet_service__["a" /* MdlDialogOutletService */]; }),] },] },
]; };
//# sourceMappingURL=mdl-dialog-outlet.component.js.map

/***/ }),

/***/ "./node_modules/@angular-mdl/core/components/dialog-outlet/mdl-dialog-outlet.service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlDialogOutletService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdl_dialog_outlet_component__ = __webpack_require__("./node_modules/@angular-mdl/core/components/dialog-outlet/mdl-dialog-outlet.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mdl_backdrop_overlay_component__ = __webpack_require__("./node_modules/@angular-mdl/core/components/dialog-outlet/mdl-backdrop-overlay.component.js");



var MdlDialogOutletService = (function () {
    function MdlDialogOutletService(appRef, componentFactoryResolver) {
        this.appRef = appRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.backdropClickEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        var dialogOutletCompRef = null;
        try {
            dialogOutletCompRef = this.appRef.bootstrap(__WEBPACK_IMPORTED_MODULE_1__mdl_dialog_outlet_component__["b" /* MdlDialogOutletComponent */]);
        }
        catch (e) {
            // the user did not use the dialog.outlet element outside of his root app.
        }
        if (dialogOutletCompRef) {
            this.setViewContainerRef(dialogOutletCompRef.instance.viewContainerRef);
        }
    }
    MdlDialogOutletService.prototype.setDefaultViewContainerRef = function (vCRef) {
        this.setViewContainerRef(vCRef);
    };
    Object.defineProperty(MdlDialogOutletService.prototype, "viewContainerRef", {
        get: function () {
            return this.viewContainerRef_;
        },
        enumerable: true,
        configurable: true
    });
    MdlDialogOutletService.prototype.setViewContainerRef = function (value) {
        var _this = this;
        this.viewContainerRef_ = value;
        if (this.viewContainerRef_) {
            var cFactory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_2__mdl_backdrop_overlay_component__["a" /* MdlBackdropOverlayComponent */]);
            this.backdropComponent = this.viewContainerRef_.createComponent(cFactory).instance;
            this.backdropComponent.clickEmitter.subscribe(function () {
                _this.backdropClickEmitter.emit();
            });
        }
    };
    MdlDialogOutletService.prototype.hideBackdrop = function () {
        this.backdropComponent.hide();
    };
    MdlDialogOutletService.prototype.showBackdropWithZIndex = function (zIndex) {
        this.backdropComponent.showWithZIndex(zIndex);
    };
    return MdlDialogOutletService;
}());

MdlDialogOutletService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */] },
];
/** @nocollapse */
MdlDialogOutletService.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ApplicationRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ComponentFactoryResolver */], },
]; };
//# sourceMappingURL=mdl-dialog-outlet.service.js.map

/***/ }),

/***/ "./node_modules/@angular-mdl/core/components/dialog/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlDialogModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mdl_dialog_service__ = __webpack_require__("./node_modules/@angular-mdl/core/components/dialog/mdl-dialog.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mdl_dialog_component__ = __webpack_require__("./node_modules/@angular-mdl/core/components/dialog/mdl-dialog.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mdl_simple_dialog_component__ = __webpack_require__("./node_modules/@angular-mdl/core/components/dialog/mdl-simple-dialog.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_index__ = __webpack_require__("./node_modules/@angular-mdl/core/components/common/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mdl_dialog_host_component__ = __webpack_require__("./node_modules/@angular-mdl/core/components/dialog/mdl-dialog-host.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mdl_alert_component__ = __webpack_require__("./node_modules/@angular-mdl/core/components/dialog/mdl-alert.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dialog_outlet_index__ = __webpack_require__("./node_modules/@angular-mdl/core/components/dialog-outlet/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__button_mdl_button_component__ = __webpack_require__("./node_modules/@angular-mdl/core/components/button/mdl-button.component.js");
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */













var PUBLIC_COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_3__mdl_dialog_component__["a" /* MdlDialogComponent */],
    __WEBPACK_IMPORTED_MODULE_7__mdl_alert_component__["a" /* MdlAlertComponent */]
];
var PRIVATE_COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_6__mdl_dialog_host_component__["a" /* MdlDialogHostComponent */],
    __WEBPACK_IMPORTED_MODULE_4__mdl_simple_dialog_component__["a" /* MdlSimpleDialogComponent */]
];
var MdlDialogModule = (function () {
    function MdlDialogModule() {
    }
    MdlDialogModule.forRoot = function () {
        return {
            ngModule: MdlDialogModule,
            providers: [__WEBPACK_IMPORTED_MODULE_2__mdl_dialog_service__["d" /* MdlDialogService */]]
        };
    };
    return MdlDialogModule;
}());

MdlDialogModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */], args: [{
                imports: [
                    __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                    __WEBPACK_IMPORTED_MODULE_5__common_index__["a" /* MdlCommonsModule */],
                    __WEBPACK_IMPORTED_MODULE_9__button_mdl_button_component__["b" /* MdlButtonModule */],
                    __WEBPACK_IMPORTED_MODULE_8__dialog_outlet_index__["a" /* MdlDialogOutletModule */].forRoot()
                ],
                exports: PUBLIC_COMPONENTS.slice(),
                declarations: PUBLIC_COMPONENTS.concat(PRIVATE_COMPONENTS),
                entryComponents: PUBLIC_COMPONENTS.concat(PRIVATE_COMPONENTS)
            },] },
];
/** @nocollapse */
MdlDialogModule.ctorParameters = function () { return []; };
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@angular-mdl/core/components/dialog/internal-dialog-reference.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InternalMdlDialogReference; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdl_dialog_service__ = __webpack_require__("./node_modules/@angular-mdl/core/components/dialog/mdl-dialog.service.js");


/**
 * Internal representation of the dialog ref. the service
 * user should not have access to the created components
 * and internal implementations.
 */
var InternalMdlDialogReference = (function () {
    function InternalMdlDialogReference(config) {
        this.config = config;
        this.onHideSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["a" /* Subject */]();
        this.onVisibleSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["a" /* Subject */]();
        this.isModal = false;
        this.dialogRef = new __WEBPACK_IMPORTED_MODULE_1__mdl_dialog_service__["c" /* MdlDialogReference */](this);
    }
    Object.defineProperty(InternalMdlDialogReference.prototype, "hostDialog", {
        get: function () {
            return this.hostDialogComponentRef.instance;
        },
        enumerable: true,
        configurable: true
    });
    InternalMdlDialogReference.prototype.hide = function (data) {
        this.onHideSubject.next(data);
        this.onHideSubject.complete();
        this.closeCallback();
    };
    InternalMdlDialogReference.prototype.visible = function () {
        this.onVisibleSubject.next();
        this.onVisibleSubject.complete();
    };
    InternalMdlDialogReference.prototype.onHide = function () {
        return this.onHideSubject.asObservable();
    };
    InternalMdlDialogReference.prototype.onVisible = function () {
        return this.onVisibleSubject.asObservable();
    };
    return InternalMdlDialogReference;
}());

//# sourceMappingURL=internal-dialog-reference.js.map

/***/ }),

/***/ "./node_modules/@angular-mdl/core/components/dialog/mdl-alert.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlAlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdl_dialog_service__ = __webpack_require__("./node_modules/@angular-mdl/core/components/dialog/mdl-dialog.service.js");


var MdlAlertComponent = (function () {
    function MdlAlertComponent(mdlDialogService) {
        this.mdlDialogService = mdlDialogService;
        this.confirmed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    MdlAlertComponent.prototype.show = function () {
        var _this = this;
        this.mdlDialogService.alert(this.message, this.okText, this.title).subscribe(function () {
            _this.confirmed.emit();
        });
    };
    return MdlAlertComponent;
}());

MdlAlertComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'mdl-alert',
                host: {
                    '[style.display]': '"none"'
                },
                template: "\n  ",
                exportAs: 'mdlAlert'
            },] },
];
/** @nocollapse */
MdlAlertComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__mdl_dialog_service__["d" /* MdlDialogService */], },
]; };
MdlAlertComponent.propDecorators = {
    'title': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'message': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'okText': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'confirmed': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
};
//# sourceMappingURL=mdl-alert.component.js.map

/***/ }),

/***/ "./node_modules/@angular-mdl/core/components/dialog/mdl-dialog-host.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlDialogHostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdl_dialog_service__ = __webpack_require__("./node_modules/@angular-mdl/core/components/dialog/mdl-dialog.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__button_mdl_button_component__ = __webpack_require__("./node_modules/@angular-mdl/core/components/button/mdl-button.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_dialog_reference__ = __webpack_require__("./node_modules/@angular-mdl/core/components/dialog/internal-dialog-reference.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_animations__ = __webpack_require__("./node_modules/@angular-mdl/core/components/common/animations.js");





var enterTransitionDuration = 300;
var leaveTransitionDuration = 250;
var enterTransitionEasingCurve = 'cubic-bezier(0.0, 0.0, 0.2, 1)';
var leaveTransitionEasingCurve = 'cubic-bezier(0.0, 0.0, 0.2, 1)';
// @experimental
var MdlDialogHostComponent = (function () {
    function MdlDialogHostComponent(ngZone, renderer, animations, elementRef, config, internalDialogRef) {
        this.ngZone = ngZone;
        this.renderer = renderer;
        this.animations = animations;
        this.elementRef = elementRef;
        this.config = config;
        this.internalDialogRef = internalDialogRef;
        this.visible = false;
        this.showAnimationStartStyle = {
            top: '38%',
            opacity: '0'
        };
        this.showStyle = {
            top: '50%',
            opacity: '1'
        };
        this.hideAnimationEndStyle = {
            top: '63%',
            opacity: '0'
        };
        this.zIndex = __WEBPACK_IMPORTED_MODULE_1__mdl_dialog_service__["b" /* MIN_DIALOG_Z_INDEX */] + 1;
    }
    MdlDialogHostComponent.prototype.show = function () {
        var _this = this;
        this.visible = true;
        // give the dialogs time to draw so that a focus can be set
        setTimeout(function () {
            _this.internalDialogRef.visible();
        });
        if (this.isAnimateEnabled()) {
            if (this.config.openFrom || this.config.closeTo) {
                // transform is modified during anmiation and must be part of each animation keyframe.
                this.showStyle['transform'] = 'translate(0, -50%) scale(1.0)';
                var targetClientRect = this.elementRef.nativeElement.getBoundingClientRect();
                var openFromRect = this.getClientRect(this.config.openFrom);
                var closeToRect = this.config.closeTo ? this.getClientRect(this.config.closeTo) : openFromRect;
                var centerTarget = this.getCenterInScreen(targetClientRect);
                var centerFrom = this.getCenterInScreen(openFromRect);
                var centerTo = this.getCenterInScreen(closeToRect);
                var translationFrom = {
                    x: Math.round(centerFrom.cx - centerTarget.cx),
                    y: Math.round(centerFrom.cy - centerTarget.cy),
                    scaleX: Math.round(100 * Math.min(0.25, openFromRect.width / targetClientRect.width)) / 100,
                    scaleY: Math.round(100 * Math.min(0.25, openFromRect.height / targetClientRect.height)) / 100
                };
                this.showAnimationStartStyle = {
                    top: targetClientRect.top + "px",
                    opacity: '0',
                    transform: "translate(" + translationFrom.x + "px, " + translationFrom.y + "px) scale(" + translationFrom.scaleX + ", " + translationFrom.scaleY + ")"
                };
                var translationTo = {
                    x: Math.round(centerTo.cx - centerTarget.cx),
                    y: Math.round(centerTo.cy - centerTarget.cy),
                    scaleX: Math.round(100 * Math.min(0.25, closeToRect.width / targetClientRect.width)) / 100,
                    scaleY: Math.round(100 * Math.min(0.25, closeToRect.height / targetClientRect.height)) / 100
                };
                this.hideAnimationEndStyle = {
                    top: targetClientRect.top + "px",
                    opacity: '0',
                    transform: "translate(" + translationTo.x + "px, " + translationTo.y + "px) scale(" + translationTo.scaleX + ", " + translationTo.scaleY + ")"
                };
            }
            var animation = this.animations.animate(this.elementRef.nativeElement, [
                this.showAnimationStartStyle,
                this.showStyle
            ], this.config.enterTransitionDuration || enterTransitionDuration, this.config.enterTransitionEasingCurve || enterTransitionEasingCurve);
            animation.play();
        }
    };
    MdlDialogHostComponent.prototype.hide = function (selfComponentRef) {
        if (this.isAnimateEnabled()) {
            var animation = this.animations.animate(this.elementRef.nativeElement, [
                this.showStyle,
                this.hideAnimationEndStyle
            ], this.config.leaveTransitionDuration || leaveTransitionDuration, this.config.leaveTransitionEasingCurve || leaveTransitionEasingCurve);
            animation.onDone(function () {
                selfComponentRef.destroy();
            });
            animation.play();
        }
        else {
            selfComponentRef.destroy();
        }
    };
    MdlDialogHostComponent.prototype.ngOnInit = function () {
        this.applyStyle(this.config.styles);
        this.applyClasses(this.config.classes ? this.config.classes : '');
    };
    MdlDialogHostComponent.prototype.applyStyle = function (styles) {
        if (styles) {
            for (var style in styles) {
                this.renderer.setStyle(this.elementRef.nativeElement, style, styles[style]);
            }
        }
    };
    MdlDialogHostComponent.prototype.applyClasses = function (classes) {
        var _this = this;
        classes.split(' ').filter(function (cssClass) { return !!cssClass; }).forEach(function (cssClass) {
            _this.renderer.addClass(_this.elementRef.nativeElement, cssClass);
        });
    };
    MdlDialogHostComponent.prototype.isAnimateEnabled = function () {
        // not present?  assume it is true.
        if (typeof this.config.animate === 'undefined') {
            return true;
        }
        return this.config.animate;
    };
    MdlDialogHostComponent.prototype.getClientRect = function (input) {
        if (input instanceof __WEBPACK_IMPORTED_MODULE_2__button_mdl_button_component__["a" /* MdlButtonComponent */]) {
            var elRef = input.elementRef;
            var rect = elRef.nativeElement.getBoundingClientRect();
            return this.createOpenCloseRect(rect);
        }
        else if (input instanceof MouseEvent) {
            var evt = input;
            // just to make it possible to test this code with a fake event - target is
            // readonly and con not be mutated.
            var htmlElement = (evt.target || evt['testtarget']);
            var rect = htmlElement.getBoundingClientRect();
            return this.createOpenCloseRect(rect);
        }
        return input;
    };
    MdlDialogHostComponent.prototype.createOpenCloseRect = function (rect) {
        return {
            height: rect.top - rect.bottom,
            left: rect.left,
            top: rect.top,
            width: rect.right - rect.left
        };
    };
    MdlDialogHostComponent.prototype.getCenterInScreen = function (rect) {
        return {
            cx: Math.round(rect.left + (rect.width / 2)),
            cy: Math.round(rect.top + (rect.height / 2))
        };
    };
    return MdlDialogHostComponent;
}());

MdlDialogHostComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'mdl-dialog-host-component',
                host: {
                    '[class.mdl-dialog]': 'true',
                    '[class.open]': 'visible',
                    '[style.zIndex]': 'zIndex',
                },
                template: "<div #dialogTarget></div>",
                styles: [
                    "\n    mdl-dialog-host-component {\n      width: -moz-fit-content;\n      width: -webkit-fit-content;\n      width: fit-content;\n      height: -moz-fit-content;\n      height: -webkit-fit-content;\n      height: fit-content;\n      padding: 1em;\n      background: white;\n      color: black;\n      opacity: 1;\n      visibility: hidden;\n      display: block;\n      position: fixed;\n      margin: auto;\n      left: 0;\n      right: 0;\n      transition: all;\n      top: 50%;\n      transform: translate(0, -50%);\n    }\n    \n    mdl-dialog-host-component.open {\n      visibility: visible;\n    }\n    \n    "
                ],
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
            },] },
];
/** @nocollapse */
MdlDialogHostComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* NgZone */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Renderer2 */], },
    { type: __WEBPACK_IMPORTED_MODULE_4__common_animations__["a" /* Animations */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */], args: [Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* forwardRef */])(function () { return __WEBPACK_IMPORTED_MODULE_1__mdl_dialog_service__["a" /* MDL_CONFIGUARTION */]; }),] },] },
    { type: __WEBPACK_IMPORTED_MODULE_3__internal_dialog_reference__["a" /* InternalMdlDialogReference */], },
]; };
MdlDialogHostComponent.propDecorators = {
    'dialogTarget': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */], args: ['dialogTarget', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewContainerRef */] },] },],
};
//# sourceMappingURL=mdl-dialog-host.component.js.map

/***/ }),

/***/ "./node_modules/@angular-mdl/core/components/dialog/mdl-dialog.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mdl_dialog_service__ = __webpack_require__("./node_modules/@angular-mdl/core/components/dialog/mdl-dialog.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_boolean_property__ = __webpack_require__("./node_modules/@angular-mdl/core/components/common/boolean-property.js");




var MdlDialogComponent = (function () {
    function MdlDialogComponent(dialogService) {
        this.dialogService = dialogService;
        this.showEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.hideEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.isShown = false;
        this.dialogRef = null;
    }
    Object.defineProperty(MdlDialogComponent.prototype, "modal", {
        get: function () { return this._modal; },
        set: function (value) { this._modal = Object(__WEBPACK_IMPORTED_MODULE_3__common_boolean_property__["a" /* toBoolean */])(value); },
        enumerable: true,
        configurable: true
    });
    MdlDialogComponent.prototype.show = function () {
        var _this = this;
        if (this.isShown) {
            throw new Error('Only one instance of an embedded mdl-dialog can exist!');
        }
        this.isShown = true;
        var mergedConfig = this.config || {};
        // mdl-modal overwrites config.isModal if present
        mergedConfig.isModal = typeof this.modal !== 'undefined' ? this.modal : mergedConfig.isModal;
        // default is true
        if (typeof mergedConfig.isModal === 'undefined') {
            mergedConfig.isModal = true;
        }
        var result = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        var p = this.dialogService.showDialogTemplate(this.template, mergedConfig);
        p.subscribe(function (dialogRef) {
            _this.dialogRef = dialogRef;
            _this.dialogRef.onVisible().subscribe(function () {
                _this.showEmitter.emit(dialogRef);
                result.next(dialogRef);
                result.complete();
            });
            _this.dialogRef.onHide().subscribe(function () {
                _this.hideEmitter.emit(null);
                _this.dialogRef = null;
                _this.isShown = false;
            });
        });
        return result.asObservable();
    };
    MdlDialogComponent.prototype.close = function () {
        if (this.dialogRef) {
            this.dialogRef.hide();
        }
    };
    return MdlDialogComponent;
}());

MdlDialogComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'mdl-dialog',
                template: "\n    <div *dialogTemplate>\n      <ng-content></ng-content>\n    </div>\n  ",
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
            },] },
];
/** @nocollapse */
MdlDialogComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__mdl_dialog_service__["d" /* MdlDialogService */], },
]; };
MdlDialogComponent.propDecorators = {
    'template': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */], args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* TemplateRef */],] },],
    'modal': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */], args: ['mdl-modal',] },],
    'config': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */], args: ['mdl-dialog-config',] },],
    'showEmitter': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */], args: ['show',] },],
    'hideEmitter': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */], args: ['hide',] },],
};
//# sourceMappingURL=mdl-dialog.component.js.map

/***/ }),

/***/ "./node_modules/@angular-mdl/core/components/dialog/mdl-dialog.service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDL_CONFIGUARTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MIN_DIALOG_Z_INDEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MdlDialogReference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return MdlDialogService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mdl_simple_dialog_component__ = __webpack_require__("./node_modules/@angular-mdl/core/components/dialog/mdl-simple-dialog.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mdl_dialog_host_component__ = __webpack_require__("./node_modules/@angular-mdl/core/components/dialog/mdl-dialog-host.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__internal_dialog_reference__ = __webpack_require__("./node_modules/@angular-mdl/core/components/dialog/internal-dialog-reference.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dialog_outlet_mdl_dialog_outlet_service__ = __webpack_require__("./node_modules/@angular-mdl/core/components/dialog-outlet/mdl-dialog-outlet.service.js");







var MDL_CONFIGUARTION = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* InjectionToken */]('MDL_CONFIGUARTION');
var MIN_DIALOG_Z_INDEX = 100000;
/**
 * The reference to the created and displayed dialog.
 */
var MdlDialogReference = (function () {
    function MdlDialogReference(internaleRef) {
        this.internaleRef = internaleRef;
        internaleRef.dialogRef = this;
    }
    /**
     * closes the dialog
     */
    MdlDialogReference.prototype.hide = function (data) {
        this.internaleRef.hide(data);
    };
    /**
     * Observable that emits, if the dialog was closed.
     * @returns {Observable<void>}
     */
    MdlDialogReference.prototype.onHide = function () {
        return this.internaleRef.onHide();
    };
    /**
     * Observable that emits, if the dialog is really visible and not only created.
     * @returns {Observable<void>}
     */
    MdlDialogReference.prototype.onVisible = function () {
        return this.internaleRef.onVisible();
    };
    return MdlDialogReference;
}());

/**
 * The MdlDialogService is used to open different kind of dialogs. SimpleDialogs and Custom Dialogs.
 * @experimental
  */
var MdlDialogService = (function () {
    function MdlDialogService(componentFactoryResolver, doc, appRef, mdlDialogOutletService) {
        var _this = this;
        this.componentFactoryResolver = componentFactoryResolver;
        this.doc = doc;
        this.appRef = appRef;
        this.mdlDialogOutletService = mdlDialogOutletService;
        this.openDialogs = new Array();
        /**
         * Emits an event when either all modals are closed, or one gets opened.
         * @returns A subscribable event emitter that provides a boolean indicating whether a modal is open or not.
         */
        this.onDialogsOpenChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.mdlDialogOutletService.backdropClickEmitter.subscribe(function () {
            _this.onBackdropClick();
        });
    }
    /**
     * Shows a dialog that is just an alert - e.g. with one button.
     * @param alertMessage The message that should be displayed.
     * @param okText The text that the button should have
     * @param title The optional title of the dialog
     * @returns An Observable that is called if the user hits the Ok button.
     */
    MdlDialogService.prototype.alert = function (alertMessage, okText, title) {
        if (okText === void 0) { okText = 'Ok'; }
        var result = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.showDialog({
            title: title,
            message: alertMessage,
            actions: [
                { handler: function () {
                        result.next(null);
                        result.complete();
                    }, text: okText }
            ],
            isModal: true
        });
        return result;
    };
    /**
     * Shows a dialog that is just a confirm message - e.g. with two button.
     * @param question The question that should be displayed.
     * @param title The title that should be displayed on top of Question.
     * @param declineText The text for decline button. defaults to Cancel
     * @param confirmText The text for the confirm button . defaults to Ok
     * @returns An Observable that is called if the user hits the Ok button.
     */
    MdlDialogService.prototype.confirm = function (question, declineText, confirmText, title) {
        if (declineText === void 0) { declineText = 'Cancel'; }
        if (confirmText === void 0) { confirmText = 'Ok'; }
        var result = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.showDialog({
            title: title,
            message: question,
            actions: [
                {
                    handler: function () {
                        result.next(null);
                        result.complete();
                    }, text: confirmText
                },
                {
                    handler: function () {
                        result.error(null);
                    }, text: declineText, isClosingAction: true
                }
            ],
            isModal: true
        });
        return result.asObservable();
    };
    /**
     * Shows a dialog that is specified by the provided configuration.
     * @param config The simple dialog configuration.
     * @returns An Observable that returns the MdlDialogReference.
     */
    MdlDialogService.prototype.showDialog = function (config) {
        if (config.actions.length === 0) {
            throw new Error('a dialog mus have at least one action');
        }
        var internalDialogRef = new __WEBPACK_IMPORTED_MODULE_5__internal_dialog_reference__["a" /* InternalMdlDialogReference */](config);
        var providers = [
            { provide: MdlDialogReference, useValue: new MdlDialogReference(internalDialogRef) },
            { provide: MDL_CONFIGUARTION, useValue: config }
        ];
        var hostComponentRef = this.createHostDialog(internalDialogRef, config);
        var cRef = this.createComponentInstance(hostComponentRef.instance.dialogTarget, providers, __WEBPACK_IMPORTED_MODULE_3__mdl_simple_dialog_component__["a" /* MdlSimpleDialogComponent */]);
        return this.showHostDialog(internalDialogRef.dialogRef, hostComponentRef);
    };
    /**
     * Shows a dialog that is specified by the provided configuration.
     * @param config The custom dialog configuration.
     * @returns An Observable that returns the MdlDialogReference.
     */
    MdlDialogService.prototype.showCustomDialog = function (config) {
        var internalDialogRef = new __WEBPACK_IMPORTED_MODULE_5__internal_dialog_reference__["a" /* InternalMdlDialogReference */](config);
        var providers = [
            { provide: MdlDialogReference, useValue: new MdlDialogReference(internalDialogRef) }
        ];
        if (config.providers) {
            providers.push.apply(providers, config.providers);
        }
        var hostComponentRef = this.createHostDialog(internalDialogRef, config);
        this.createComponentInstance(hostComponentRef.instance.dialogTarget, providers, config.component);
        return this.showHostDialog(internalDialogRef.dialogRef, hostComponentRef);
    };
    MdlDialogService.prototype.showDialogTemplate = function (template, config) {
        var internalDialogRef = new __WEBPACK_IMPORTED_MODULE_5__internal_dialog_reference__["a" /* InternalMdlDialogReference */](config);
        var hostComponentRef = this.createHostDialog(internalDialogRef, config);
        hostComponentRef.instance.dialogTarget.createEmbeddedView(template);
        return this.showHostDialog(internalDialogRef.dialogRef, hostComponentRef);
    };
    MdlDialogService.prototype.showHostDialog = function (dialogRef, hostComponentRef) {
        var result = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        setTimeout(function () {
            result.next(dialogRef);
            result.complete();
            hostComponentRef.instance.show();
        });
        return result.asObservable();
    };
    MdlDialogService.prototype.createHostDialog = function (internalDialogRef, dialogConfig) {
        var _this = this;
        var viewContainerRef = this.mdlDialogOutletService.viewContainerRef;
        if (!viewContainerRef) {
            throw new Error('You did not provide a ViewContainerRef. ' +
                'Please see https://github.com/mseemann/angular2-mdl/wiki/How-to-use-the-MdlDialogService');
        }
        var providers = [
            { provide: MDL_CONFIGUARTION, useValue: dialogConfig },
            { provide: __WEBPACK_IMPORTED_MODULE_5__internal_dialog_reference__["a" /* InternalMdlDialogReference */], useValue: internalDialogRef }
        ];
        var hostDialogComponent = this.createComponentInstance(viewContainerRef, providers, __WEBPACK_IMPORTED_MODULE_4__mdl_dialog_host_component__["a" /* MdlDialogHostComponent */]);
        internalDialogRef.hostDialogComponentRef = hostDialogComponent;
        internalDialogRef.isModal = dialogConfig.isModal;
        internalDialogRef.closeCallback = function () {
            _this.popDialog(internalDialogRef);
            hostDialogComponent.instance.hide(hostDialogComponent);
        };
        this.pushDialog(internalDialogRef);
        return hostDialogComponent;
    };
    MdlDialogService.prototype.pushDialog = function (dialogRef) {
        if (this.openDialogs.length == 0) {
            this.onDialogsOpenChanged.emit(true);
        }
        this.openDialogs.push(dialogRef);
        this.orderDialogStack();
    };
    MdlDialogService.prototype.popDialog = function (dialogRef) {
        this.openDialogs.splice(this.openDialogs.indexOf(dialogRef), 1);
        this.orderDialogStack();
        if (this.openDialogs.length == 0) {
            this.onDialogsOpenChanged.emit(false);
        }
    };
    MdlDialogService.prototype.orderDialogStack = function () {
        // +1 because the overlay may have MIN_DIALOG_Z_INDEX if the dialog is modal.
        var zIndex = MIN_DIALOG_Z_INDEX + 1;
        this.openDialogs.forEach(function (iDialogRef) {
            iDialogRef.hostDialog.zIndex = zIndex;
            // +2 to make room for the overlay if a dialog is modal
            zIndex += 2;
        });
        this.mdlDialogOutletService.hideBackdrop();
        // if there is a modal dialog append the overloay to the dom - if not remove the overlay from the body
        var topMostModalDialog = this.getTopMostInternalDialogRef();
        if (topMostModalDialog) {
            // move the overlay diredct under the topmos modal dialog
            this.mdlDialogOutletService.showBackdropWithZIndex(topMostModalDialog.hostDialog.zIndex - 1);
        }
    };
    MdlDialogService.prototype.getTopMostInternalDialogRef = function () {
        var topMostModalDialog = null;
        for (var i = (this.openDialogs.length - 1); i >= 0; i--) {
            if (this.openDialogs[i].isModal) {
                topMostModalDialog = this.openDialogs[i];
                break;
            }
        }
        return topMostModalDialog;
    };
    MdlDialogService.prototype.onBackdropClick = function () {
        var topMostModalDialog = this.getTopMostInternalDialogRef();
        if (topMostModalDialog.config.clickOutsideToClose) {
            topMostModalDialog.hide();
        }
    };
    MdlDialogService.prototype.createComponentInstance = function (viewContainerRef, providers, component) {
        var cFactory = this.componentFactoryResolver.resolveComponentFactory(component);
        var resolvedProviders = __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* ReflectiveInjector */].resolve(providers);
        var parentInjector = viewContainerRef.parentInjector;
        var childInjector = __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* ReflectiveInjector */].fromResolvedProviders(resolvedProviders, parentInjector);
        return viewContainerRef.createComponent(cFactory, viewContainerRef.length, childInjector);
    };
    return MdlDialogService;
}());

MdlDialogService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */] },
];
/** @nocollapse */
MdlDialogService.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ComponentFactoryResolver */], },
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */], args: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DOCUMENT */],] },] },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ApplicationRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_6__dialog_outlet_mdl_dialog_outlet_service__["a" /* MdlDialogOutletService */], },
]; };
//# sourceMappingURL=mdl-dialog.service.js.map

/***/ }),

/***/ "./node_modules/@angular-mdl/core/components/dialog/mdl-simple-dialog.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlSimpleDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdl_dialog_service__ = __webpack_require__("./node_modules/@angular-mdl/core/components/dialog/mdl-dialog.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__button_mdl_button_component__ = __webpack_require__("./node_modules/@angular-mdl/core/components/button/mdl-button.component.js");



var MdlSimpleDialogComponent = (function () {
    // why do i need forwardRef at this point, the demo LoginDialog dosn't need this!?!?
    function MdlSimpleDialogComponent(dialogConfiguration, dialog) {
        var _this = this;
        this.dialogConfiguration = dialogConfiguration;
        this.dialog = dialog;
        dialog.onVisible().subscribe(function () {
            if (_this.buttons) {
                _this.buttons.first.elementRef.nativeElement.focus();
            }
        });
    }
    MdlSimpleDialogComponent.prototype.actionClicked = function (action) {
        action.handler();
        this.dialog.hide();
    };
    MdlSimpleDialogComponent.prototype.onEsc = function () {
        // run the first action that is marked as closing action
        var closeAction = this.dialogConfiguration.actions.find(function (action) { return action.isClosingAction; });
        if (closeAction) {
            closeAction.handler();
            this.dialog.hide();
        }
    };
    return MdlSimpleDialogComponent;
}());

MdlSimpleDialogComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'mdl-dialog-component',
                template: "\n      <h3 class=\"mdl-dialog__title\" *ngIf=\"dialogConfiguration?.title\">{{dialogConfiguration?.title}}</h3>\n      <div class=\"mdl-dialog__content\" [innerHTML]=\"dialogConfiguration?.message\"></div>\n      <div \n        class=\"mdl-dialog__actions\" \n        [ngClass]=\"{'mdl-dialog__actions--full-width': dialogConfiguration?.fullWidthAction}\">\n        <button\n          mdl-button mdl-colored=\"primary\"\n          type=\"button\" \n          *ngFor=\"let action of dialogConfiguration?.actions\" \n          (click)=\"actionClicked(action)\"\n          [ngClass]=\"{'close': action.isClosingAction}\">{{action.text}}</button>\n      </div>\n  ",
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
            },] },
];
/** @nocollapse */
MdlSimpleDialogComponent.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */], args: [Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* forwardRef */])(function () { return __WEBPACK_IMPORTED_MODULE_1__mdl_dialog_service__["a" /* MDL_CONFIGUARTION */]; }),] },] },
    { type: __WEBPACK_IMPORTED_MODULE_1__mdl_dialog_service__["c" /* MdlDialogReference */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */], args: [Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* forwardRef */])(function () { return __WEBPACK_IMPORTED_MODULE_1__mdl_dialog_service__["c" /* MdlDialogReference */]; }),] },] },
]; };
MdlSimpleDialogComponent.propDecorators = {
    'buttons': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChildren */], args: [__WEBPACK_IMPORTED_MODULE_2__button_mdl_button_component__["a" /* MdlButtonComponent */],] },],
    'onEsc': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */], args: ['keydown.esc',] },],
};
//# sourceMappingURL=mdl-simple-dialog.component.js.map

/***/ }),

/***/ "./node_modules/@angular-mdl/core/components/icon-toggle/mdl-icon-toggle.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MdlIconToggleComponent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlIconToggleModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__icon_mdl_icon_component__ = __webpack_require__("./node_modules/@angular-mdl/core/components/icon/mdl-icon.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__checkbox_mdl_checkbox_component__ = __webpack_require__("./node_modules/@angular-mdl/core/components/checkbox/mdl-checkbox.component.js");
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





var MdlIconToggleComponent = (function (_super) {
    __extends(MdlIconToggleComponent, _super);
    function MdlIconToggleComponent(elementRef, renderer) {
        return _super.call(this, elementRef, renderer) || this;
    }
    return MdlIconToggleComponent;
}(__WEBPACK_IMPORTED_MODULE_4__checkbox_mdl_checkbox_component__["a" /* MdlCheckboxComponent */]));

MdlIconToggleComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'mdl-icon-toggle',
                providers: [{
                        provide: __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* NG_VALUE_ACCESSOR */],
                        useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* forwardRef */])(function () { return MdlIconToggleComponent; }),
                        multi: true
                    }],
                host: {
                    '(click)': 'onClick()',
                    '[class.mdl-icon-toggle]': 'true',
                    '[class.is-upgraded]': 'true',
                    '[class.is-checked]': 'value',
                    '[class.is-disabled]': 'disabled'
                },
                outputs: ['change'],
                template: "\n  <input type=\"checkbox\" class=\"mdl-icon-toggle__input\" \n    (focus)=\"onFocus()\" \n    (blur)=\"onBlur()\"\n    [disabled]=\"disabled\"\n    [(ngModel)]=\"value\">\n  <mdl-icon class=\"mdl-icon-toggle__label\"><ng-content></ng-content></mdl-icon>\n  ",
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
            },] },
];
/** @nocollapse */
MdlIconToggleComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Renderer2 */], },
]; };
var MDL_ICON_TOGGLE_DIRECTIVES = [MdlIconToggleComponent];
var MdlIconToggleModule = (function () {
    function MdlIconToggleModule() {
    }
    MdlIconToggleModule.forRoot = function () {
        return {
            ngModule: MdlIconToggleModule,
            providers: []
        };
    };
    return MdlIconToggleModule;
}());

MdlIconToggleModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_3__icon_mdl_icon_component__["a" /* MdlIconModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */]],
                exports: MDL_ICON_TOGGLE_DIRECTIVES,
                declarations: MDL_ICON_TOGGLE_DIRECTIVES,
            },] },
];
/** @nocollapse */
MdlIconToggleModule.ctorParameters = function () { return []; };
//# sourceMappingURL=mdl-icon-toggle.component.js.map

/***/ }),

/***/ "./node_modules/@angular-mdl/core/components/icon/mdl-icon.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MdlIconComponent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlIconModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

var MdlIconComponent = (function () {
    function MdlIconComponent() {
    }
    return MdlIconComponent;
}());

MdlIconComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'mdl-icon',
                host: {
                    '[class.material-icons]': 'true'
                },
                template: '<ng-content></ng-content>',
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
            },] },
];
/** @nocollapse */
MdlIconComponent.ctorParameters = function () { return []; };
var MDL_ICON_DIRECTIVES = [MdlIconComponent];
var MdlIconModule = (function () {
    function MdlIconModule() {
    }
    MdlIconModule.forRoot = function () {
        return {
            ngModule: MdlIconModule,
            providers: []
        };
    };
    return MdlIconModule;
}());

MdlIconModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */], args: [{
                imports: [],
                exports: MDL_ICON_DIRECTIVES,
                declarations: MDL_ICON_DIRECTIVES,
            },] },
];
/** @nocollapse */
MdlIconModule.ctorParameters = function () { return []; };
//# sourceMappingURL=mdl-icon.component.js.map

/***/ }),

/***/ "./node_modules/@angular-mdl/core/components/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlModule; });
/* unused harmony export MdlNonRootModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_mdl_ripple_directive__ = __webpack_require__("./node_modules/@angular-mdl/core/components/common/mdl-ripple.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__button_mdl_button_component__ = __webpack_require__("./node_modules/@angular-mdl/core/components/button/mdl-button.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__badge_mdl_badge_directive__ = __webpack_require__("./node_modules/@angular-mdl/core/components/badge/mdl-badge.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shadow_mdl_shadow_directive__ = __webpack_require__("./node_modules/@angular-mdl/core/components/shadow/mdl-shadow.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__card_mdl_card_component__ = __webpack_require__("./node_modules/@angular-mdl/core/components/card/mdl-card.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chips_index__ = __webpack_require__("./node_modules/@angular-mdl/core/components/chips/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dialog_index__ = __webpack_require__("./node_modules/@angular-mdl/core/components/dialog/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dialog_outlet_index__ = __webpack_require__("./node_modules/@angular-mdl/core/components/dialog-outlet/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__checkbox_mdl_checkbox_component__ = __webpack_require__("./node_modules/@angular-mdl/core/components/checkbox/mdl-checkbox.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__radio_mdl_radio_component__ = __webpack_require__("./node_modules/@angular-mdl/core/components/radio/mdl-radio.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__progress_mdl_progress_component__ = __webpack_require__("./node_modules/@angular-mdl/core/components/progress/mdl-progress.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__icon_mdl_icon_component__ = __webpack_require__("./node_modules/@angular-mdl/core/components/icon/mdl-icon.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__icon_toggle_mdl_icon_toggle_component__ = __webpack_require__("./node_modules/@angular-mdl/core/components/icon-toggle/mdl-icon-toggle.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__list_mdl_list_component__ = __webpack_require__("./node_modules/@angular-mdl/core/components/list/mdl-list.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__spinner_mdl_spinner_component__ = __webpack_require__("./node_modules/@angular-mdl/core/components/spinner/mdl-spinner.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__slider_mdl_slider_component__ = __webpack_require__("./node_modules/@angular-mdl/core/components/slider/mdl-slider.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__switch_mdl_switch_component__ = __webpack_require__("./node_modules/@angular-mdl/core/components/switch/mdl-switch.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__snackbar_mdl_snackbar_service__ = __webpack_require__("./node_modules/@angular-mdl/core/components/snackbar/mdl-snackbar.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__tooltip_index__ = __webpack_require__("./node_modules/@angular-mdl/core/components/tooltip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__table_index__ = __webpack_require__("./node_modules/@angular-mdl/core/components/table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__menu_index__ = __webpack_require__("./node_modules/@angular-mdl/core/components/menu/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__layout_index__ = __webpack_require__("./node_modules/@angular-mdl/core/components/layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__tabs_index__ = __webpack_require__("./node_modules/@angular-mdl/core/components/tabs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__textfield_mdl_textfield_component__ = __webpack_require__("./node_modules/@angular-mdl/core/components/textfield/mdl-textfield.component.js");
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__dialog_outlet_mdl_backdrop_overlay_component__ = __webpack_require__("./node_modules/@angular-mdl/core/components/dialog-outlet/mdl-backdrop-overlay.component.js");
/* unused harmony reexport Private1 */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__dialog_mdl_dialog_host_component__ = __webpack_require__("./node_modules/@angular-mdl/core/components/dialog/mdl-dialog-host.component.js");
/* unused harmony reexport Private2 */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__dialog_mdl_simple_dialog_component__ = __webpack_require__("./node_modules/@angular-mdl/core/components/dialog/mdl-simple-dialog.component.js");
/* unused harmony reexport Private3 */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__common_append_view_container_ref_directive__ = __webpack_require__("./node_modules/@angular-mdl/core/components/common/append-view-container-ref-directive.js");
/* unused harmony reexport Private4 */

















































// AOT :( https://github.com/angular/angular/issues/11606




var MDL_MODULES = [
    __WEBPACK_IMPORTED_MODULE_2__button_mdl_button_component__["b" /* MdlButtonModule */],
    __WEBPACK_IMPORTED_MODULE_22__layout_index__["a" /* MdlLayoutModule */],
    __WEBPACK_IMPORTED_MODULE_9__checkbox_mdl_checkbox_component__["b" /* MdlCheckboxModule */],
    __WEBPACK_IMPORTED_MODULE_6__chips_index__["a" /* MdlChipModule */],
    __WEBPACK_IMPORTED_MODULE_7__dialog_index__["a" /* MdlDialogModule */],
    __WEBPACK_IMPORTED_MODULE_8__dialog_outlet_index__["a" /* MdlDialogOutletModule */],
    __WEBPACK_IMPORTED_MODULE_15__spinner_mdl_spinner_component__["a" /* MdlSpinnerModule */],
    __WEBPACK_IMPORTED_MODULE_1__common_mdl_ripple_directive__["a" /* MdlRippleModule */],
    __WEBPACK_IMPORTED_MODULE_3__badge_mdl_badge_directive__["a" /* MdlBadgeModule */],
    __WEBPACK_IMPORTED_MODULE_4__shadow_mdl_shadow_directive__["a" /* MdlShadowModule */],
    __WEBPACK_IMPORTED_MODULE_5__card_mdl_card_component__["a" /* MdlCardModule */],
    __WEBPACK_IMPORTED_MODULE_10__radio_mdl_radio_component__["a" /* MdlRadioModule */],
    __WEBPACK_IMPORTED_MODULE_11__progress_mdl_progress_component__["a" /* MdlProgressModule */],
    __WEBPACK_IMPORTED_MODULE_12__icon_mdl_icon_component__["a" /* MdlIconModule */],
    __WEBPACK_IMPORTED_MODULE_13__icon_toggle_mdl_icon_toggle_component__["a" /* MdlIconToggleModule */],
    __WEBPACK_IMPORTED_MODULE_14__list_mdl_list_component__["a" /* MdlListModule */],
    __WEBPACK_IMPORTED_MODULE_16__slider_mdl_slider_component__["a" /* MdlSliderModule */],
    __WEBPACK_IMPORTED_MODULE_17__switch_mdl_switch_component__["a" /* MdlSwitchModule */],
    __WEBPACK_IMPORTED_MODULE_18__snackbar_mdl_snackbar_service__["a" /* MdlSnackbaModule */],
    __WEBPACK_IMPORTED_MODULE_19__tooltip_index__["a" /* MdlTooltipModule */],
    __WEBPACK_IMPORTED_MODULE_20__table_index__["a" /* MdlTableModule */],
    __WEBPACK_IMPORTED_MODULE_21__menu_index__["a" /* MdlMenuModule */],
    __WEBPACK_IMPORTED_MODULE_23__tabs_index__["b" /* MdlTabsModule */],
    __WEBPACK_IMPORTED_MODULE_24__textfield_mdl_textfield_component__["a" /* MdlTextFieldModule */]
];
var MdlModule = (function () {
    function MdlModule() {
    }
    return MdlModule;
}());

MdlModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */], args: [{
                imports: [
                    __WEBPACK_IMPORTED_MODULE_2__button_mdl_button_component__["b" /* MdlButtonModule */].forRoot(),
                    __WEBPACK_IMPORTED_MODULE_22__layout_index__["a" /* MdlLayoutModule */].forRoot(),
                    __WEBPACK_IMPORTED_MODULE_9__checkbox_mdl_checkbox_component__["b" /* MdlCheckboxModule */].forRoot(),
                    __WEBPACK_IMPORTED_MODULE_6__chips_index__["a" /* MdlChipModule */].forRoot(),
                    __WEBPACK_IMPORTED_MODULE_7__dialog_index__["a" /* MdlDialogModule */].forRoot(),
                    __WEBPACK_IMPORTED_MODULE_8__dialog_outlet_index__["a" /* MdlDialogOutletModule */].forRoot(),
                    __WEBPACK_IMPORTED_MODULE_15__spinner_mdl_spinner_component__["a" /* MdlSpinnerModule */].forRoot(),
                    __WEBPACK_IMPORTED_MODULE_1__common_mdl_ripple_directive__["a" /* MdlRippleModule */].forRoot(),
                    __WEBPACK_IMPORTED_MODULE_3__badge_mdl_badge_directive__["a" /* MdlBadgeModule */].forRoot(),
                    __WEBPACK_IMPORTED_MODULE_4__shadow_mdl_shadow_directive__["a" /* MdlShadowModule */].forRoot(),
                    __WEBPACK_IMPORTED_MODULE_5__card_mdl_card_component__["a" /* MdlCardModule */].forRoot(),
                    __WEBPACK_IMPORTED_MODULE_10__radio_mdl_radio_component__["a" /* MdlRadioModule */].forRoot(),
                    __WEBPACK_IMPORTED_MODULE_11__progress_mdl_progress_component__["a" /* MdlProgressModule */].forRoot(),
                    __WEBPACK_IMPORTED_MODULE_12__icon_mdl_icon_component__["a" /* MdlIconModule */].forRoot(),
                    __WEBPACK_IMPORTED_MODULE_13__icon_toggle_mdl_icon_toggle_component__["a" /* MdlIconToggleModule */].forRoot(),
                    __WEBPACK_IMPORTED_MODULE_14__list_mdl_list_component__["a" /* MdlListModule */].forRoot(),
                    __WEBPACK_IMPORTED_MODULE_16__slider_mdl_slider_component__["a" /* MdlSliderModule */].forRoot(),
                    __WEBPACK_IMPORTED_MODULE_17__switch_mdl_switch_component__["a" /* MdlSwitchModule */].forRoot(),
                    __WEBPACK_IMPORTED_MODULE_18__snackbar_mdl_snackbar_service__["a" /* MdlSnackbaModule */].forRoot(),
                    __WEBPACK_IMPORTED_MODULE_19__tooltip_index__["a" /* MdlTooltipModule */].forRoot(),
                    __WEBPACK_IMPORTED_MODULE_20__table_index__["a" /* MdlTableModule */].forRoot(),
                    __WEBPACK_IMPORTED_MODULE_21__menu_index__["a" /* MdlMenuModule */].forRoot(),
                    __WEBPACK_IMPORTED_MODULE_23__tabs_index__["b" /* MdlTabsModule */].forRoot(),
                    __WEBPACK_IMPORTED_MODULE_24__textfield_mdl_textfield_component__["a" /* MdlTextFieldModule */].forRoot()
                ],
                exports: MDL_MODULES,
                providers: []
            },] },
];
/** @nocollapse */
MdlModule.ctorParameters = function () { return []; };
var MdlNonRootModule = (function () {
    function MdlNonRootModule() {
    }
    MdlNonRootModule.forRoot = function () {
        return { ngModule: MdlModule };
    };
    return MdlNonRootModule;
}());

MdlNonRootModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */], args: [{
                imports: MDL_MODULES,
                exports: MDL_MODULES
            },] },
];
/** @nocollapse */
MdlNonRootModule.ctorParameters = function () { return []; };
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@angular-mdl/core/components/layout/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlLayoutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdl_layout_component__ = __webpack_require__("./node_modules/@angular-mdl/core/components/layout/mdl-layout.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mdl_layout_header_component__ = __webpack_require__("./node_modules/@angular-mdl/core/components/layout/mdl-layout-header.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mdl_layout_drawer_component__ = __webpack_require__("./node_modules/@angular-mdl/core/components/layout/mdl-layout-drawer.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mdl_layout_content_component__ = __webpack_require__("./node_modules/@angular-mdl/core/components/layout/mdl-layout-content.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mdl_layout_header_transparent_directive__ = __webpack_require__("./node_modules/@angular-mdl/core/components/layout/mdl-layout-header-transparent.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mdl_layout_header_row_component__ = __webpack_require__("./node_modules/@angular-mdl/core/components/layout/mdl-layout-header-row.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mdl_layout_title_component__ = __webpack_require__("./node_modules/@angular-mdl/core/components/layout/mdl-layout-title.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mdl_layout_spacer_component__ = __webpack_require__("./node_modules/@angular-mdl/core/components/layout/mdl-layout-spacer.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__mdl_layout_tab_panel_component__ = __webpack_require__("./node_modules/@angular-mdl/core/components/layout/mdl-layout-tab-panel.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__icon_mdl_icon_component__ = __webpack_require__("./node_modules/@angular-mdl/core/components/icon/mdl-icon.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__common_mdl_ripple_directive__ = __webpack_require__("./node_modules/@angular-mdl/core/components/common/mdl-ripple.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__common_index__ = __webpack_require__("./node_modules/@angular-mdl/core/components/common/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__tabs_index__ = __webpack_require__("./node_modules/@angular-mdl/core/components/tabs/index.js");
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */















var MDL_LAYOUT_DIRECTIVES = [
    __WEBPACK_IMPORTED_MODULE_1__mdl_layout_component__["a" /* MdlLayoutComponent */],
    __WEBPACK_IMPORTED_MODULE_2__mdl_layout_header_component__["a" /* MdlLayoutHeaderComponent */],
    __WEBPACK_IMPORTED_MODULE_3__mdl_layout_drawer_component__["a" /* MdlLayoutDrawerComponent */],
    __WEBPACK_IMPORTED_MODULE_4__mdl_layout_content_component__["a" /* MdlLayoutContentComponent */],
    __WEBPACK_IMPORTED_MODULE_5__mdl_layout_header_transparent_directive__["a" /* MdlLayoutHeaderTransparentDirective */],
    __WEBPACK_IMPORTED_MODULE_6__mdl_layout_header_row_component__["a" /* MdlLayoutHeaderRowComponent */],
    __WEBPACK_IMPORTED_MODULE_7__mdl_layout_title_component__["a" /* MdlLayoutTitleComponent */],
    __WEBPACK_IMPORTED_MODULE_8__mdl_layout_spacer_component__["a" /* MdlLayoutSpacerComponent */],
    __WEBPACK_IMPORTED_MODULE_9__mdl_layout_tab_panel_component__["a" /* MdlLayoutTabPanelComponent */]
];









var MdlLayoutModule = (function () {
    function MdlLayoutModule() {
    }
    MdlLayoutModule.forRoot = function () {
        return {
            ngModule: MdlLayoutModule,
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__mdl_layout_component__["b" /* MdlScreenSizeService */]
            ]
        };
    };
    return MdlLayoutModule;
}());

MdlLayoutModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_10__icon_mdl_icon_component__["a" /* MdlIconModule */], __WEBPACK_IMPORTED_MODULE_11__common_mdl_ripple_directive__["a" /* MdlRippleModule */], __WEBPACK_IMPORTED_MODULE_12__common_index__["a" /* MdlCommonsModule */], __WEBPACK_IMPORTED_MODULE_14__tabs_index__["b" /* MdlTabsModule */], __WEBPACK_IMPORTED_MODULE_13__angular_common__["b" /* CommonModule */]],
                exports: MDL_LAYOUT_DIRECTIVES,
                declarations: MDL_LAYOUT_DIRECTIVES,
            },] },
];
/** @nocollapse */
MdlLayoutModule.ctorParameters = function () { return []; };
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@angular-mdl/core/components/layout/mdl-layout-content.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlLayoutContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdl_layout_tab_panel_component__ = __webpack_require__("./node_modules/@angular-mdl/core/components/layout/mdl-layout-tab-panel.component.js");


var MdlLayoutContentComponent = (function () {
    function MdlLayoutContentComponent(elRef) {
        this.elRef = elRef;
        this.el = elRef.nativeElement;
    }
    return MdlLayoutContentComponent;
}());

MdlLayoutContentComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'mdl-layout-content',
                host: {
                    '[class.mdl-layout__content]': 'true',
                },
                template: "<ng-content></ng-content>",
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None,
            },] },
];
/** @nocollapse */
MdlLayoutContentComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
]; };
MdlLayoutContentComponent.propDecorators = {
    'tabs': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ContentChildren */], args: [__WEBPACK_IMPORTED_MODULE_1__mdl_layout_tab_panel_component__["a" /* MdlLayoutTabPanelComponent */],] },],
};
//# sourceMappingURL=mdl-layout-content.component.js.map

/***/ }),

/***/ "./node_modules/@angular-mdl/core/components/layout/mdl-layout-drawer.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlLayoutDrawerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdl_layout_component__ = __webpack_require__("./node_modules/@angular-mdl/core/components/layout/mdl-layout.component.js");


var MdlLayoutDrawerComponent = (function () {
    function MdlLayoutDrawerComponent(parentLayout) {
        this.parentLayout = parentLayout;
        this.isDrawerVisible = false;
    }
    MdlLayoutDrawerComponent.prototype.isDrawerDirectChildOf = function (layout) {
        return this.parentLayout === layout;
    };
    return MdlLayoutDrawerComponent;
}());

MdlLayoutDrawerComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'mdl-layout-drawer',
                host: {
                    '[class.mdl-layout__drawer]': 'true',
                    '[class.is-visible]': 'isDrawerVisible'
                },
                template: "<ng-content></ng-content>",
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
            },] },
];
/** @nocollapse */
MdlLayoutDrawerComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__mdl_layout_component__["a" /* MdlLayoutComponent */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Optional */] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */], args: [Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* forwardRef */])(function () { return __WEBPACK_IMPORTED_MODULE_1__mdl_layout_component__["a" /* MdlLayoutComponent */]; }),] },] },
]; };
//# sourceMappingURL=mdl-layout-drawer.component.js.map

/***/ }),

/***/ "./node_modules/@angular-mdl/core/components/layout/mdl-layout-header-row.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlLayoutHeaderRowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

var MdlLayoutHeaderRowComponent = (function () {
    function MdlLayoutHeaderRowComponent() {
    }
    return MdlLayoutHeaderRowComponent;
}());

MdlLayoutHeaderRowComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'mdl-layout-header-row',
                host: {
                    '[class.mdl-layout__header-row]': 'true'
                },
                template: '<ng-content></ng-content>',
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
            },] },
];
/** @nocollapse */
MdlLayoutHeaderRowComponent.ctorParameters = function () { return []; };
//# sourceMappingURL=mdl-layout-header-row.component.js.map

/***/ }),

/***/ "./node_modules/@angular-mdl/core/components/layout/mdl-layout-header-transparent.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlLayoutHeaderTransparentDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

var MdlLayoutHeaderTransparentDirective = (function () {
    function MdlLayoutHeaderTransparentDirective() {
    }
    return MdlLayoutHeaderTransparentDirective;
}());

MdlLayoutHeaderTransparentDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                selector: 'mdl-layout-header[mdl-layout-header-transparent]',
                host: {
                    '[class.mdl-layout__header--transparent]': 'true'
                }
            },] },
];
/** @nocollapse */
MdlLayoutHeaderTransparentDirective.ctorParameters = function () { return []; };
//# sourceMappingURL=mdl-layout-header-transparent.directive.js.map

/***/ }),

/***/ "./node_modules/@angular-mdl/core/components/layout/mdl-layout-header.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlLayoutHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdl_layout_component__ = __webpack_require__("./node_modules/@angular-mdl/core/components/layout/mdl-layout.component.js");


var MdlLayoutHeaderComponent = (function () {
    function MdlLayoutHeaderComponent(elementRef, renderer, mdlLayout) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.mdlLayout = mdlLayout;
        this.isCompact = false;
        this.isAnimating = false;
        this.isSeamed = false;
        this.isRipple = true;
        this.el = elementRef.nativeElement;
    }
    MdlLayoutHeaderComponent.prototype.onTransitionEnd = function () {
        this.isAnimating = false;
    };
    MdlLayoutHeaderComponent.prototype.onClick = function () {
        if (this.isCompact) {
            this.isCompact = false;
            this.isAnimating = true;
        }
    };
    return MdlLayoutHeaderComponent;
}());

MdlLayoutHeaderComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'mdl-layout-header',
                host: {
                    '[class.mdl-layout__header]': 'true',
                    '[class.is-casting-shadow]': 'mode==="standard" || isCompact',
                    '[class.mdl-layout__header--seamed]': 'isSeamed',
                    '[class.mdl-layout__header--waterfall]': 'mode==="waterfall"',
                    '[class.mdl-layout__header--scroll]': 'mode==="scroll"',
                    '[class.is-compact]': 'isCompact',
                    '(transitionend)': 'onTransitionEnd()',
                    '(click)': 'onClick()'
                },
                template: "\n     <ng-content></ng-content>\n     <div *ngIf=\"tabs?.toArray()?.length > 0\" class=\"mdl-layout__tab-bar-container\">\n         <div class=\"mdl-layout__tab-bar is-casting-shadow\">\n           <div *ngFor=\"let tab of tabs.toArray()\" \n                class=\"mdl-layout__tab\" \n                [ngClass]=\"{'is-active': tab.isActive}\"\n                (mouseover)=\"mdlLayout.onTabMouseover(tab)\" \n                (mouseout)=\"mdlLayout.onTabMouseout(tab)\">\n              <div \n                *ngIf=\"tab.titleComponent\" \n                (click)=\"mdlLayout.tabSelected(tab)\"\n                [mdl-ripple]=\"isRipple\"\n                [append-view-container-ref]=\"tab.titleComponent.vcRef\"></div>\n              <a *ngIf=\"!tab.titleComponent\" \n                    href=\"javascript:void(0)\"   \n                    (click)=\"mdlLayout.tabSelected(tab)\"\n                    class=\"mdl-layout__tab\" \n                    [ngClass]=\"{'is-active': tab.isActive}\"\n                    [mdl-ripple]=\"isRipple\"\n                   >{{tab.title}}</a>\n             </div>\n         </div>\n     </div>\n  ",
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
            },] },
];
/** @nocollapse */
MdlLayoutHeaderComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Renderer2 */], },
    { type: __WEBPACK_IMPORTED_MODULE_1__mdl_layout_component__["a" /* MdlLayoutComponent */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */], args: [Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* forwardRef */])(function () { return __WEBPACK_IMPORTED_MODULE_1__mdl_layout_component__["a" /* MdlLayoutComponent */]; }),] },] },
]; };
//# sourceMappingURL=mdl-layout-header.component.js.map

/***/ }),

/***/ "./node_modules/@angular-mdl/core/components/layout/mdl-layout-spacer.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlLayoutSpacerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

var MdlLayoutSpacerComponent = (function () {
    function MdlLayoutSpacerComponent() {
    }
    return MdlLayoutSpacerComponent;
}());

MdlLayoutSpacerComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'mdl-layout-spacer',
                host: {
                    '[class.mdl-layout-spacer]': 'true'
                },
                template: '',
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
            },] },
];
/** @nocollapse */
MdlLayoutSpacerComponent.ctorParameters = function () { return []; };
//# sourceMappingURL=mdl-layout-spacer.component.js.map

/***/ }),

/***/ "./node_modules/@angular-mdl/core/components/layout/mdl-layout-tab-panel.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlLayoutTabPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tabs_index__ = __webpack_require__("./node_modules/@angular-mdl/core/components/tabs/index.js");


var MdlLayoutTabPanelComponent = (function () {
    function MdlLayoutTabPanelComponent() {
        this.isActive = false;
    }
    return MdlLayoutTabPanelComponent;
}());

MdlLayoutTabPanelComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'mdl-layout-tab-panel',
                host: {
                    '[class.mdl-layout__tab-panel]': 'true',
                    '[class.is-active]': 'isActive'
                },
                template: "\n   <ng-content *ngIf=\"titleComponent\" select=\"mdl-tab-panel-content\"></ng-content>\n   <ng-content *ngIf=\"!titleComponent\"></ng-content>\n   ",
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
            },] },
];
/** @nocollapse */
MdlLayoutTabPanelComponent.ctorParameters = function () { return []; };
MdlLayoutTabPanelComponent.propDecorators = {
    'titleComponent': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ContentChild */], args: [__WEBPACK_IMPORTED_MODULE_1__tabs_index__["a" /* MdlTabPanelTitleComponent */],] },],
    'title': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */], args: ['mdl-layout-tab-panel-title',] },],
};
//# sourceMappingURL=mdl-layout-tab-panel.component.js.map

/***/ }),

/***/ "./node_modules/@angular-mdl/core/components/layout/mdl-layout-title.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlLayoutTitleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

var MdlLayoutTitleComponent = (function () {
    function MdlLayoutTitleComponent() {
    }
    return MdlLayoutTitleComponent;
}());

MdlLayoutTitleComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'mdl-layout-title',
                host: {
                    '[class.mdl-layout-title]': 'true'
                },
                template: '<ng-content></ng-content>',
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
            },] },
];
/** @nocollapse */
MdlLayoutTitleComponent.ctorParameters = function () { return []; };
//# sourceMappingURL=mdl-layout-title.component.js.map

/***/ }),

/***/ "./node_modules/@angular-mdl/core/components/layout/mdl-layout.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LAYOUT_SCREEN_SIZE_THRESHOLD */
/* unused harmony export MdLUnsupportedLayoutTypeError */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MdlScreenSizeService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_mdl_error__ = __webpack_require__("./node_modules/@angular-mdl/core/components/common/mdl-error.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_boolean_property__ = __webpack_require__("./node_modules/@angular-mdl/core/components/common/boolean-property.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_number_property__ = __webpack_require__("./node_modules/@angular-mdl/core/components/common/number.property.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mdl_layout_header_component__ = __webpack_require__("./node_modules/@angular-mdl/core/components/layout/mdl-layout-header.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mdl_layout_drawer_component__ = __webpack_require__("./node_modules/@angular-mdl/core/components/layout/mdl-layout-drawer.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mdl_layout_content_component__ = __webpack_require__("./node_modules/@angular-mdl/core/components/layout/mdl-layout-content.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
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









var ESCAPE = 27;
var STANDARD = 'standard';
var WATERFALL = 'waterfall';
var SCROLL = 'scroll';
/**
 * The LAYOUT_SCREEN_SIZE_THRESHOLD can be changed at the root module. Just provide a value for this InjectionToken:
 *
 * providers: [
 *  {provide:LAYOUT_SCREEN_SIZE_THRESHOLD, useValue: 768 }
 * ]
 *
 * you also need to change the scss variable to the same value: $layout-screen-size-threshold: 768px.
 *
 * It should be clear that this can only be used if you are using the scss and not the pre compiled css from getmdl.io.
 *
 * @type {InjectionToken}
 */
var LAYOUT_SCREEN_SIZE_THRESHOLD = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* InjectionToken */]('layoutScreenSizeThreshold');
var MdLUnsupportedLayoutTypeError = (function (_super) {
    __extends(MdLUnsupportedLayoutTypeError, _super);
    function MdLUnsupportedLayoutTypeError(type) {
        /* istanbul ignore next */
        return _super.call(this, "Layout type \"" + type + "\" isn't supported by mdl-layout (allowed: standard, waterfall, scroll).") || this;
    }
    return MdLUnsupportedLayoutTypeError;
}(__WEBPACK_IMPORTED_MODULE_2__common_mdl_error__["a" /* MdlError */]));

var MdlScreenSizeService = (function () {
    function MdlScreenSizeService(ngZone, layoutScreenSizeThreshold) {
        var _this = this;
        this.layoutScreenSizeThreshold = layoutScreenSizeThreshold;
        this.sizesSubject = new __WEBPACK_IMPORTED_MODULE_8_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
        // if no value is injected the default size wil be used. same as $layout-screen-size-threshold in scss
        if (!this.layoutScreenSizeThreshold) {
            this.layoutScreenSizeThreshold = 1024;
        }
        // do not try to access the window object if rendered on the server
        if (typeof window === 'object' && 'matchMedia' in window) {
            var query_1 = window.matchMedia("(max-width: " + this.layoutScreenSizeThreshold + "px)");
            var queryListener_1 = function () {
                ngZone.run(function () {
                    _this.sizesSubject.next(query_1.matches);
                });
            };
            query_1.addListener(queryListener_1);
            this.windowMediaQueryListener = function () {
                query_1.removeListener(queryListener_1);
            };
            // set the initial state
            this.sizesSubject.next(query_1.matches);
        }
    }
    MdlScreenSizeService.prototype.isSmallScreen = function () {
        return this.sizesSubject.value;
    };
    MdlScreenSizeService.prototype.sizes = function () {
        return this.sizesSubject.asObservable();
    };
    MdlScreenSizeService.prototype.destroy = function () {
        if (this.windowMediaQueryListener) {
            this.windowMediaQueryListener();
            this.windowMediaQueryListener = null;
        }
    };
    return MdlScreenSizeService;
}());

MdlScreenSizeService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */] },
];
/** @nocollapse */
MdlScreenSizeService.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* NgZone */], },
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Optional */] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */], args: [LAYOUT_SCREEN_SIZE_THRESHOLD,] },] },
]; };
var MdlLayoutComponent = (function () {
    function MdlLayoutComponent(renderer, evm, el, screenSizeService) {
        this.renderer = renderer;
        this.evm = evm;
        this.el = el;
        this.screenSizeService = screenSizeService;
        this.mode = STANDARD;
        this._isFixedDrawer = false;
        this._isFixedHeader = false;
        this._isSeamed = false;
        this._selectedIndex = 0;
        this._isNoDrawer = false;
        this.selectedTabEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.mouseoverTabEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.mouseoutTabEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onOpen = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.isDrawerVisible = false;
        this.isSmallScreen = false;
    }
    Object.defineProperty(MdlLayoutComponent.prototype, "isFixedDrawer", {
        get: function () { return this._isFixedDrawer; },
        set: function (value) { this._isFixedDrawer = Object(__WEBPACK_IMPORTED_MODULE_3__common_boolean_property__["a" /* toBoolean */])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdlLayoutComponent.prototype, "isFixedHeader", {
        get: function () { return this._isFixedHeader; },
        set: function (value) { this._isFixedHeader = Object(__WEBPACK_IMPORTED_MODULE_3__common_boolean_property__["a" /* toBoolean */])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdlLayoutComponent.prototype, "isSeamed", {
        get: function () { return this._isSeamed; },
        set: function (value) { this._isSeamed = Object(__WEBPACK_IMPORTED_MODULE_3__common_boolean_property__["a" /* toBoolean */])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdlLayoutComponent.prototype, "selectedIndex", {
        get: function () { return this._selectedIndex; },
        set: function (value) { this._selectedIndex = Object(__WEBPACK_IMPORTED_MODULE_4__common_number_property__["a" /* toNumber */])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdlLayoutComponent.prototype, "isNoDrawer", {
        get: function () { return this._isNoDrawer; },
        set: function (value) { this._isNoDrawer = Object(__WEBPACK_IMPORTED_MODULE_3__common_boolean_property__["a" /* toBoolean */])(value); },
        enumerable: true,
        configurable: true
    });
    MdlLayoutComponent.prototype.ngAfterContentInit = function () {
        this.validateMode();
        if (this.header && this.content && this.content.tabs) {
            this.header.tabs = this.content.tabs;
            this.updateSelectedTabIndex();
        }
        // set this.drawer to null, if the drawer is not a direct child if this layout. It may be a drywer of a sub layout.
        if (this.drawer && !this.drawer.isDrawerDirectChildOf(this)) {
            this.drawer = null;
        }
    };
    MdlLayoutComponent.prototype.ngOnChanges = function (changes) {
        if (changes['selectedIndex']) {
            this.updateSelectedTabIndex();
        }
    };
    MdlLayoutComponent.prototype.updateSelectedTabIndex = function () {
        if (this.header && this.header.tabs) {
            this.header.tabs.forEach(function (tab) { return tab.isActive = false; });
            if (this.header.tabs.toArray().length > 0 && this.selectedIndex < this.header.tabs.toArray().length) {
                this.header.tabs.toArray()[this.selectedIndex].isActive = true;
            }
        }
    };
    MdlLayoutComponent.prototype.validateMode = function () {
        var _this = this;
        if (this.mode === '') {
            this.mode = STANDARD;
        }
        if ([STANDARD, WATERFALL, SCROLL].indexOf(this.mode) === -1) {
            throw new MdLUnsupportedLayoutTypeError(this.mode);
        }
        if (this.header) {
            // inform the header about the mode
            this.header.mode = this.mode;
            this.header.isSeamed = this.isSeamed;
        }
        if (this.content) {
            this.scrollListener = this.renderer.listen(this.content.el, 'scroll', function (e) {
                _this.onScroll(_this.content.el.scrollTop);
                return true;
            });
            this.screenSizeService.sizes().subscribe(function (isSmall) {
                _this.onQueryChange(isSmall);
            });
        }
    };
    MdlLayoutComponent.prototype.onScroll = function (scrollTop) {
        if (this.mode !== WATERFALL) {
            return;
        }
        if (this.header.isAnimating) {
            return;
        }
        var headerVisible = !this.isSmallScreen || this.isFixedHeader;
        if (scrollTop > 0 && !this.header.isCompact) {
            this.header.isCompact = true;
            if (headerVisible) {
                this.header.isAnimating = true;
            }
        }
        else if (scrollTop <= 0 && this.header.isCompact) {
            this.header.isCompact = false;
            if (headerVisible) {
                this.header.isAnimating = true;
            }
        }
    };
    MdlLayoutComponent.prototype.onQueryChange = function (isSmall) {
        if (isSmall) {
            this.isSmallScreen = true;
        }
        else {
            this.isSmallScreen = false;
            this.closeDrawer();
        }
    };
    MdlLayoutComponent.prototype.toggleDrawer = function () {
        this.isDrawerVisible = !this.isDrawerVisible;
        if (this.drawer) {
            this.setDrawerVisible(this.isDrawerVisible);
        }
    };
    MdlLayoutComponent.prototype.closeDrawer = function () {
        this.isDrawerVisible = false;
        if (this.drawer) {
            this.setDrawerVisible(false);
        }
    };
    MdlLayoutComponent.prototype.openDrawer = function () {
        this.isDrawerVisible = true;
        if (this.drawer) {
            this.setDrawerVisible(true);
        }
    };
    MdlLayoutComponent.prototype.setDrawerVisible = function (visible) {
        this.drawer.isDrawerVisible = visible;
        this.drawer.isDrawerVisible ? this.onOpen.emit() : this.onClose.emit();
    };
    MdlLayoutComponent.prototype.obfuscatorKeyDown = function ($event) {
        if ($event.keyCode === ESCAPE) {
            this.toggleDrawer();
        }
    };
    MdlLayoutComponent.prototype.ngOnDestroy = function () {
        if (this.scrollListener) {
            this.scrollListener();
            this.scrollListener = null;
        }
    };
    // triggered from mdl-layout-header.component
    MdlLayoutComponent.prototype.tabSelected = function (tab) {
        var index = this.header.tabs.toArray().indexOf(tab);
        if (index != this.selectedIndex) {
            this.selectedIndex = index;
            this.updateSelectedTabIndex();
            this.selectedTabEmitter.emit({ index: this.selectedIndex });
        }
    };
    // triggered from mdl-layout-header.component
    MdlLayoutComponent.prototype.onTabMouseover = function (tab) {
        var index = this.header.tabs.toArray().indexOf(tab);
        this.mouseoverTabEmitter.emit({ index: index });
    };
    // triggered from mdl-layout-header.component
    MdlLayoutComponent.prototype.onTabMouseout = function (tab) {
        var index = this.header.tabs.toArray().indexOf(tab);
        this.mouseoutTabEmitter.emit({ index: index });
    };
    MdlLayoutComponent.prototype.closeDrawerOnSmallScreens = function () {
        if (this.isSmallScreen && this.isDrawerVisible) {
            this.closeDrawer();
        }
    };
    MdlLayoutComponent.prototype.openDrawerOnSmallScreens = function () {
        if (this.isSmallScreen && !this.isDrawerVisible) {
            this.openDrawer();
        }
    };
    MdlLayoutComponent.prototype.hasDrawer = function () {
        return !!this.drawer;
    };
    return MdlLayoutComponent;
}());

MdlLayoutComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'mdl-layout',
                template: "\n    <div class=\"mdl-layout__container\" [ngClass]=\"{'has-scrolling-header': mode==='scroll'}\">\n     <div class=\"mdl-layout is-upgraded\"\n          [ngClass]=\"{\n          'is-small-screen': isSmallScreen,\n          'mdl-layout--fixed-drawer': isFixedDrawer,\n          'mdl-layout--fixed-header': isFixedHeader,\n          'mdl-layout--fixed-tabs': 'tabs.toArray().length > 0'\n          }\">\n        <ng-content select=\"mdl-layout-header\"></ng-content>\n        <ng-content select=\"mdl-layout-drawer\"></ng-content>\n        <div *ngIf=\"drawer && isNoDrawer==false\" class=\"mdl-layout__drawer-button\" (click)=\"toggleDrawer()\">\n           <mdl-icon>&#xE5D2;</mdl-icon>\n        </div>\n        <ng-content select=\"mdl-layout-content\"></ng-content>\n        <div class=\"mdl-layout__obfuscator\"\n             [ngClass]=\"{'is-visible':isDrawerVisible}\"\n             (click)=\"toggleDrawer()\"\n             (keydown)=\"obfuscatorKeyDown($event)\"></div>\n     </div>\n    </div>\n  ",
                exportAs: 'mdlLayout',
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
            },] },
];
/** @nocollapse */
MdlLayoutComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Renderer2 */], },
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* EventManager */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
    { type: MdlScreenSizeService, },
]; };
MdlLayoutComponent.propDecorators = {
    'header': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ContentChild */], args: [__WEBPACK_IMPORTED_MODULE_5__mdl_layout_header_component__["a" /* MdlLayoutHeaderComponent */],] },],
    'drawer': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ContentChild */], args: [__WEBPACK_IMPORTED_MODULE_6__mdl_layout_drawer_component__["a" /* MdlLayoutDrawerComponent */],] },],
    'content': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ContentChild */], args: [__WEBPACK_IMPORTED_MODULE_7__mdl_layout_content_component__["a" /* MdlLayoutContentComponent */],] },],
    'mode': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */], args: ['mdl-layout-mode',] },],
    'isFixedDrawer': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */], args: ['mdl-layout-fixed-drawer',] },],
    'isFixedHeader': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */], args: ['mdl-layout-fixed-header',] },],
    'isSeamed': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */], args: ['mdl-layout-header-seamed',] },],
    'selectedIndex': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */], args: ['mdl-layout-tab-active-index',] },],
    'isNoDrawer': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */], args: ['mdl-layout-no-drawer-button',] },],
    'selectedTabEmitter': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */], args: ['mdl-layout-tab-active-changed',] },],
    'mouseoverTabEmitter': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */], args: ['mdl-layout-tab-mouseover',] },],
    'mouseoutTabEmitter': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */], args: ['mdl-layout-tab-mouseout',] },],
    'onOpen': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */], args: ['open',] },],
    'onClose': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */], args: ['close',] },],
};
//# sourceMappingURL=mdl-layout.component.js.map

/***/ }),

/***/ "./node_modules/@angular-mdl/core/components/list/mdl-list.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MdlUnsupportedCountOfListItemLinesError */
/* unused harmony export MdlListComponent */
/* unused harmony export MdlListItemComponent */
/* unused harmony export MdlListItemPrimaryContentComponent */
/* unused harmony export MdlListItemSecondaryContentComponent */
/* unused harmony export MdlListItemSecondaryActionComponent */
/* unused harmony export MdlListItemSubTitleComponent */
/* unused harmony export MdlListItemSecondaryInfoComponent */
/* unused harmony export MdlListItemTextBodyComponent */
/* unused harmony export MdlListItemIconDirective */
/* unused harmony export MdlListItemAvatarDirective */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlListModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_mdl_error__ = __webpack_require__("./node_modules/@angular-mdl/core/components/common/mdl-error.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_number_property__ = __webpack_require__("./node_modules/@angular-mdl/core/components/common/number.property.js");
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



var MdlUnsupportedCountOfListItemLinesError = (function (_super) {
    __extends(MdlUnsupportedCountOfListItemLinesError, _super);
    function MdlUnsupportedCountOfListItemLinesError(lines) {
        /* istanbul ignore next */
        return _super.call(this, "\"" + lines + "\" is not supported - max 3 lines please.") || this;
    }
    return MdlUnsupportedCountOfListItemLinesError;
}(__WEBPACK_IMPORTED_MODULE_1__common_mdl_error__["a" /* MdlError */]));

var MdlListComponent = (function () {
    function MdlListComponent() {
    }
    return MdlListComponent;
}());

MdlListComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'mdl-list',
                host: {
                    '[class.mdl-list]': 'true'
                },
                template: '<ng-content></ng-content>',
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
            },] },
];
/** @nocollapse */
MdlListComponent.ctorParameters = function () { return []; };
var MdlListItemComponent = (function () {
    function MdlListItemComponent() {
        this._lines = 1;
    }
    Object.defineProperty(MdlListItemComponent.prototype, "lines", {
        get: function () { return this._lines; },
        set: function (value) { this._lines = Object(__WEBPACK_IMPORTED_MODULE_2__common_number_property__["a" /* toNumber */])(value); },
        enumerable: true,
        configurable: true
    });
    MdlListItemComponent.prototype.ngOnChanges = function (changes) {
        if (this.lines && this.lines > 3) {
            throw new MdlUnsupportedCountOfListItemLinesError(this.lines);
        }
    };
    return MdlListItemComponent;
}());

MdlListItemComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'mdl-list-item',
                host: {
                    '[class.mdl-list__item]': 'true',
                    '[class.mdl-list__item--two-line]': 'lines==2',
                    '[class.mdl-list__item--three-line]': 'lines==3'
                },
                template: '<ng-content></ng-content>',
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
            },] },
];
/** @nocollapse */
MdlListItemComponent.ctorParameters = function () { return []; };
MdlListItemComponent.propDecorators = {
    'lines': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
};
var MdlListItemPrimaryContentComponent = (function () {
    function MdlListItemPrimaryContentComponent(mdlListItemComponent) {
        this.mdlListItemComponent = mdlListItemComponent;
    }
    MdlListItemPrimaryContentComponent.prototype.ngOnInit = function () {
        if (this.mdlListItemComponent === null) {
            throw new __WEBPACK_IMPORTED_MODULE_1__common_mdl_error__["b" /* MdlStructureError */]('mdl-list-item-primary-content', 'mdl-list-item');
        }
    };
    return MdlListItemPrimaryContentComponent;
}());

MdlListItemPrimaryContentComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'mdl-list-item-primary-content',
                host: {
                    '[class.mdl-list__item-primary-content]': 'true'
                },
                template: '<ng-content></ng-content>',
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
            },] },
];
/** @nocollapse */
MdlListItemPrimaryContentComponent.ctorParameters = function () { return [
    { type: MdlListItemComponent, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Optional */] },] },
]; };
var MdlListItemSecondaryContentComponent = (function () {
    function MdlListItemSecondaryContentComponent(mdlListItemComponent) {
        this.mdlListItemComponent = mdlListItemComponent;
    }
    MdlListItemSecondaryContentComponent.prototype.ngOnInit = function () {
        if (this.mdlListItemComponent === null) {
            throw new __WEBPACK_IMPORTED_MODULE_1__common_mdl_error__["b" /* MdlStructureError */]('mdl-list-item-secondary-content', 'mdl-list-item');
        }
    };
    return MdlListItemSecondaryContentComponent;
}());

MdlListItemSecondaryContentComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'mdl-list-item-secondary-content',
                host: {
                    '[class.mdl-list__item-secondary-content]': 'true'
                },
                template: '<ng-content></ng-content>',
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
            },] },
];
/** @nocollapse */
MdlListItemSecondaryContentComponent.ctorParameters = function () { return [
    { type: MdlListItemComponent, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Optional */] },] },
]; };
var MdlListItemSecondaryActionComponent = (function () {
    function MdlListItemSecondaryActionComponent(mdlListItemComponent) {
        this.mdlListItemComponent = mdlListItemComponent;
    }
    MdlListItemSecondaryActionComponent.prototype.ngOnInit = function () {
        if (this.mdlListItemComponent === null) {
            throw new __WEBPACK_IMPORTED_MODULE_1__common_mdl_error__["b" /* MdlStructureError */]('mdl-list-item-secondary-action', 'mdl-list-item');
        }
    };
    return MdlListItemSecondaryActionComponent;
}());

MdlListItemSecondaryActionComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'mdl-list-item-secondary-action',
                host: {
                    '[class.mdl-list__item-secondary-action]': 'true'
                },
                template: '<ng-content></ng-content>',
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
            },] },
];
/** @nocollapse */
MdlListItemSecondaryActionComponent.ctorParameters = function () { return [
    { type: MdlListItemComponent, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Optional */] },] },
]; };
var MdlListItemSubTitleComponent = (function () {
    function MdlListItemSubTitleComponent(mdlListItemComponent) {
        this.mdlListItemComponent = mdlListItemComponent;
    }
    MdlListItemSubTitleComponent.prototype.ngOnInit = function () {
        if (this.mdlListItemComponent === null) {
            throw new __WEBPACK_IMPORTED_MODULE_1__common_mdl_error__["b" /* MdlStructureError */]('mdl-list-item-sub-title', 'mdl-list-item-primary-content');
        }
    };
    return MdlListItemSubTitleComponent;
}());

MdlListItemSubTitleComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'mdl-list-item-sub-title',
                host: {
                    '[class.mdl-list__item-sub-title]': 'true'
                },
                template: '<ng-content></ng-content>',
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
            },] },
];
/** @nocollapse */
MdlListItemSubTitleComponent.ctorParameters = function () { return [
    { type: MdlListItemPrimaryContentComponent, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Optional */] },] },
]; };
var MdlListItemSecondaryInfoComponent = (function () {
    function MdlListItemSecondaryInfoComponent(mdlListItemComponent) {
        this.mdlListItemComponent = mdlListItemComponent;
    }
    MdlListItemSecondaryInfoComponent.prototype.ngOnInit = function () {
        if (this.mdlListItemComponent === null) {
            throw new __WEBPACK_IMPORTED_MODULE_1__common_mdl_error__["b" /* MdlStructureError */]('mdl-list-item-secondary-info', 'mdl-list-item-secondary-content');
        }
    };
    return MdlListItemSecondaryInfoComponent;
}());

MdlListItemSecondaryInfoComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'mdl-list-item-secondary-info',
                host: {
                    '[class.mdl-list__item-secondary-info]': 'true'
                },
                template: '<ng-content></ng-content>',
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
            },] },
];
/** @nocollapse */
MdlListItemSecondaryInfoComponent.ctorParameters = function () { return [
    { type: MdlListItemSecondaryContentComponent, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Optional */] },] },
]; };
var MdlListItemTextBodyComponent = (function () {
    function MdlListItemTextBodyComponent(mdlListItemComponent) {
        this.mdlListItemComponent = mdlListItemComponent;
    }
    MdlListItemTextBodyComponent.prototype.ngOnInit = function () {
        if (this.mdlListItemComponent === null) {
            throw new __WEBPACK_IMPORTED_MODULE_1__common_mdl_error__["b" /* MdlStructureError */]('mdl-list-item-text-body', 'mdl-list-item');
        }
    };
    return MdlListItemTextBodyComponent;
}());

MdlListItemTextBodyComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'mdl-list-item-text-body',
                host: {
                    '[class.mdl-list__item-text-body]': 'true'
                },
                template: '<ng-content></ng-content>',
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
            },] },
];
/** @nocollapse */
MdlListItemTextBodyComponent.ctorParameters = function () { return [
    { type: MdlListItemComponent, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Optional */] },] },
]; };
var MdlListItemIconDirective = (function () {
    function MdlListItemIconDirective() {
    }
    return MdlListItemIconDirective;
}());

MdlListItemIconDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                selector: 'mdl-icon[mdl-list-item-icon]',
                host: {
                    '[class.mdl-list__item-icon]': 'true'
                }
            },] },
];
/** @nocollapse */
MdlListItemIconDirective.ctorParameters = function () { return []; };
var MdlListItemAvatarDirective = (function () {
    function MdlListItemAvatarDirective() {
    }
    return MdlListItemAvatarDirective;
}());

MdlListItemAvatarDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                selector: 'mdl-icon[mdl-list-item-avatar]',
                host: {
                    '[class.mdl-list__item-avatar]': 'true'
                }
            },] },
];
/** @nocollapse */
MdlListItemAvatarDirective.ctorParameters = function () { return []; };
var MDL_LIST_DIRECTIVES = [
    MdlListComponent,
    MdlListItemComponent,
    MdlListItemPrimaryContentComponent,
    MdlListItemIconDirective,
    MdlListItemAvatarDirective,
    MdlListItemSecondaryContentComponent,
    MdlListItemSecondaryActionComponent,
    MdlListItemSubTitleComponent,
    MdlListItemSecondaryInfoComponent,
    MdlListItemTextBodyComponent
];
var MdlListModule = (function () {
    function MdlListModule() {
    }
    MdlListModule.forRoot = function () {
        return {
            ngModule: MdlListModule,
            providers: []
        };
    };
    return MdlListModule;
}());

MdlListModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */], args: [{
                imports: [],
                exports: MDL_LIST_DIRECTIVES,
                declarations: MDL_LIST_DIRECTIVES,
            },] },
];
/** @nocollapse */
MdlListModule.ctorParameters = function () { return []; };
//# sourceMappingURL=mdl-list.component.js.map

/***/ }),

/***/ "./node_modules/@angular-mdl/core/components/menu/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlMenuModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdl_menu_component__ = __webpack_require__("./node_modules/@angular-mdl/core/components/menu/mdl-menu.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mdl_menu_item_component__ = __webpack_require__("./node_modules/@angular-mdl/core/components/menu/mdl-menu-item.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mdl_menu_item_directive__ = __webpack_require__("./node_modules/@angular-mdl/core/components/menu/mdl-menu-item.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mdl_toggle_menu_directive__ = __webpack_require__("./node_modules/@angular-mdl/core/components/menu/mdl-toggle-menu.directive.js");
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */






var MDL_MENU_DIRECTIVES = [
    __WEBPACK_IMPORTED_MODULE_1__mdl_menu_component__["a" /* MdlMenuComponent */],
    __WEBPACK_IMPORTED_MODULE_2__mdl_menu_item_component__["a" /* MdlMenuItemComponent */],
    __WEBPACK_IMPORTED_MODULE_3__mdl_menu_item_directive__["a" /* MdlMenuItemFullBleedDeviderComponent */],
    __WEBPACK_IMPORTED_MODULE_5__mdl_toggle_menu_directive__["a" /* MdlToggleMenuDirective */]
];



var MdlMenuModule = (function () {
    function MdlMenuModule() {
    }
    MdlMenuModule.forRoot = function () {
        return {
            ngModule: MdlMenuModule,
            providers: [__WEBPACK_IMPORTED_MODULE_1__mdl_menu_component__["b" /* MdlMenuRegisty */]]
        };
    };
    return MdlMenuModule;
}());

MdlMenuModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* CommonModule */]],
                exports: MDL_MENU_DIRECTIVES,
                declarations: MDL_MENU_DIRECTIVES,
            },] },
];
/** @nocollapse */
MdlMenuModule.ctorParameters = function () { return []; };
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@angular-mdl/core/components/menu/mdl-menu-item.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlMenuItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdl_menu_component__ = __webpack_require__("./node_modules/@angular-mdl/core/components/menu/mdl-menu.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_boolean_property__ = __webpack_require__("./node_modules/@angular-mdl/core/components/common/boolean-property.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_native_support__ = __webpack_require__("./node_modules/@angular-mdl/core/components/common/native-support.js");




var MdlMenuItemComponent = (function () {
    // forwardRef is needed because of he circular dependency menu queries menuitems; menuitem needs the parent
    function MdlMenuItemComponent(elementRef, renderer, mdlMenu) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.mdlMenu = mdlMenu;
        this._disabled = false;
        this.element = elementRef.nativeElement;
    }
    Object.defineProperty(MdlMenuItemComponent.prototype, "disabled", {
        get: function () { return this._disabled; },
        set: function (value) { this._disabled = Object(__WEBPACK_IMPORTED_MODULE_2__common_boolean_property__["a" /* toBoolean */])(value); },
        enumerable: true,
        configurable: true
    });
    MdlMenuItemComponent.prototype.onClick = function ($event) {
        $event.stopPropagation();
        if (this.disabled) {
            this.mdlMenu.hide();
            return;
        }
        this.mdlMenu.hideOnItemClicked();
    };
    // we need to register a touchstart at the window to get informed if the user taps outside the menu.
    // But if we register a touchstart event - safari will no longer convert touch events to click events.
    // So we need to convert touch to click and the user still needs to register a (click) listener to be
    // informed if the menu item has clicked.
    MdlMenuItemComponent.prototype.onTouch = function ($event) {
        // ensure that this event is totally consumed
        $event.stopPropagation();
        $event.preventDefault();
        var event = new MouseEvent('click', { bubbles: true });
        Object(__WEBPACK_IMPORTED_MODULE_3__common_native_support__["a" /* callNative */])(this.element, 'dispatchEvent', event);
    };
    return MdlMenuItemComponent;
}());

MdlMenuItemComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'mdl-menu-item',
                host: {
                    '[class.mdl-menu__item]': 'true',
                    'tabindex': '-1',
                    '(click)': 'onClick($event)',
                    '(touchstart)': 'onTouch($event)'
                },
                template: '<ng-content></ng-content>',
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
            },] },
];
/** @nocollapse */
MdlMenuItemComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Renderer2 */], },
    { type: __WEBPACK_IMPORTED_MODULE_1__mdl_menu_component__["a" /* MdlMenuComponent */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */], args: [Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* forwardRef */])(function () { return __WEBPACK_IMPORTED_MODULE_1__mdl_menu_component__["a" /* MdlMenuComponent */]; }),] },] },
]; };
MdlMenuItemComponent.propDecorators = {
    'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
};
//# sourceMappingURL=mdl-menu-item.component.js.map

/***/ }),

/***/ "./node_modules/@angular-mdl/core/components/menu/mdl-menu-item.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlMenuItemFullBleedDeviderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

var MdlMenuItemFullBleedDeviderComponent = (function () {
    function MdlMenuItemFullBleedDeviderComponent() {
    }
    return MdlMenuItemFullBleedDeviderComponent;
}());

MdlMenuItemFullBleedDeviderComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                selector: '[mdl-menu-item-full-bleed-divider]',
                host: {
                    '[class.mdl-menu__item--full-bleed-divider]': 'true'
                }
            },] },
];
/** @nocollapse */
MdlMenuItemFullBleedDeviderComponent.ctorParameters = function () { return []; };
//# sourceMappingURL=mdl-menu-item.directive.js.map

/***/ }),

/***/ "./node_modules/@angular-mdl/core/components/menu/mdl-menu.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MdlMenuError */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MdlMenuRegisty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdl_menu_item_component__ = __webpack_require__("./node_modules/@angular-mdl/core/components/menu/mdl-menu-item.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_mdl_error__ = __webpack_require__("./node_modules/@angular-mdl/core/components/common/mdl-error.js");
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



var BOTTOM_LEFT = 'bottom-left';
var BOTTOM_RIGHT = 'bottom-right';
var TOP_LEFT = 'top-left';
var TOP_RIGHT = 'top-right';
var UNALIGNED = 'unaligned';
// Total duration of the menu animation.
var TRANSITION_DURATION_SECONDS = 0.3;
// The fraction of the total duration we want to use for menu item animations.
var TRANSITION_DURATION_FRACTION = 0.8;
// How long the menu stays open after choosing an option (so the user can see
// the ripple).
var CLOSE_TIMEOUT = 175;
var CSS_ALIGN_MAP = {};
CSS_ALIGN_MAP[BOTTOM_LEFT] = 'mdl-menu--bottom-left';
CSS_ALIGN_MAP[BOTTOM_RIGHT] = 'mdl-menu--bottom-right';
CSS_ALIGN_MAP[TOP_LEFT] = 'mdl-menu--top-left';
CSS_ALIGN_MAP[TOP_RIGHT] = 'mdl-menu--top-right';
CSS_ALIGN_MAP[UNALIGNED] = 'mdl-menu--unaligned';
var MdlMenuError = (function (_super) {
    __extends(MdlMenuError, _super);
    function MdlMenuError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MdlMenuError;
}(__WEBPACK_IMPORTED_MODULE_2__common_mdl_error__["a" /* MdlError */]));

var MdlMenuRegisty = (function () {
    function MdlMenuRegisty() {
        this.menuComponents = [];
    }
    MdlMenuRegisty.prototype.add = function (menuComponent) {
        this.menuComponents.push(menuComponent);
    };
    MdlMenuRegisty.prototype.remove = function (menuComponent) {
        this.menuComponents.slice(this.menuComponents.indexOf(menuComponent), 1);
    };
    MdlMenuRegisty.prototype.hideAllExcept = function (menuComponent) {
        this.menuComponents.forEach(function (component) {
            if (component !== menuComponent) {
                component.hide();
            }
        });
    };
    return MdlMenuRegisty;
}());

MdlMenuRegisty.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */] },
];
/** @nocollapse */
MdlMenuRegisty.ctorParameters = function () { return []; };
var MdlMenuComponent = (function () {
    function MdlMenuComponent(renderer, menuRegistry) {
        this.renderer = renderer;
        this.menuRegistry = menuRegistry;
        this.cssPosition = 'mdl-menu--bottom-left';
        this.isVisible = false;
        this.menuRegistry.add(this);
    }
    MdlMenuComponent.prototype.ngOnInit = function () {
        this.cssPosition = CSS_ALIGN_MAP[this.position] || BOTTOM_LEFT;
    };
    MdlMenuComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.container = this.containerChild.nativeElement;
        this.menuElement = this.menuElementChild.nativeElement;
        this.outline = this.outlineChild.nativeElement;
        // Add a click listener to the document, to close the menu.
        var callback = function () {
            if (_this.isVisible) {
                _this.hide();
            }
            return true;
        };
        this.renderer.listen('window', 'click', callback);
        this.renderer.listen('window', 'touchstart', callback);
    };
    MdlMenuComponent.prototype.toggle = function (event, mdlButton) {
        if (!mdlButton) {
            throw new MdlMenuError("MdlButtonComponent is required");
        }
        if (this.isVisible) {
            this.hide();
        }
        else {
            this.show(event, mdlButton);
        }
    };
    MdlMenuComponent.prototype.hideOnItemClicked = function () {
        var _this = this;
        // Wait some time before closing menu, so the user can see the ripple.
        setTimeout(function () {
            _this.hide();
        }, CLOSE_TIMEOUT);
    };
    MdlMenuComponent.prototype.hide = function () {
        // Remove all transition delays; menu items fade out concurrently.
        this.menuItemComponents.toArray().forEach(function (mi) {
            mi.element.style.removeProperty('transition-delay');
        });
        // Measure the inner element.
        var rect = this.menuElement.getBoundingClientRect();
        var height = rect.height;
        var width = rect.width;
        // Turn on animation, and apply the final clip. Also make invisible.
        // This triggers the transitions.
        this.renderer.addClass(this.menuElement, 'is-animating');
        this.applyClip(height, width);
        this.renderer.removeClass(this.container, 'is-visible');
        // Clean up after the animation is complete.
        this.addAnimationEndListener();
        this.isVisible = false;
    };
    MdlMenuComponent.prototype.show = function (event, mdlButton) {
        var _this = this;
        this.menuRegistry.hideAllExcept(this);
        event.stopPropagation();
        var forElement = mdlButton.element;
        var rect = forElement.getBoundingClientRect();
        var forRect = forElement.parentElement.getBoundingClientRect();
        if (this.position == UNALIGNED) {
            // Do not position the menu automatically. Requires the developer to
            // manually specify position.
        }
        else if (this.position == BOTTOM_RIGHT) {
            // Position below the "for" element, aligned to its right.
            this.container.style.right = (forRect.right - rect.right) + 'px';
            this.container.style.top = forElement.offsetTop + forElement.offsetHeight + 'px';
        }
        else if (this.position == TOP_LEFT) {
            // Position above the "for" element, aligned to its left.
            this.container.style.left = forElement.offsetLeft + 'px';
            this.container.style.bottom = (forRect.bottom - rect.top) + 'px';
        }
        else if (this.position == TOP_RIGHT) {
            // Position above the "for" element, aligned to its right.
            this.container.style.right = (forRect.right - rect.right) + 'px';
            this.container.style.bottom = (forRect.bottom - rect.top) + 'px';
        }
        else {
            // Default: position below the "for" element, aligned to its left.
            this.container.style.left = forElement.offsetLeft + 'px';
            this.container.style.top = forElement.offsetTop + forElement.offsetHeight + 'px';
        }
        // Measure the inner element.
        var height = this.menuElement.getBoundingClientRect().height;
        var width = this.menuElement.getBoundingClientRect().width;
        this.container.style.width = width + 'px';
        this.container.style.height = height + 'px';
        this.outline.style.width = width + 'px';
        this.outline.style.height = height + 'px';
        var transitionDuration = TRANSITION_DURATION_SECONDS * TRANSITION_DURATION_FRACTION;
        this.menuItemComponents.toArray().forEach(function (mi) {
            var itemDelay = null;
            if ((_this.position == TOP_LEFT) || _this.position == TOP_RIGHT) {
                itemDelay = ((height - mi.element.offsetTop - mi.element.offsetHeight) / height * transitionDuration) + 's';
            }
            else {
                itemDelay = (mi.element.offsetTop / height * transitionDuration) + 's';
            }
            mi.element.style.transitionDelay = itemDelay;
        });
        // Apply the initial clip to the text before we start animating.
        this.applyClip(height, width);
        this.renderer.addClass(this.container, 'is-visible');
        this.menuElement.style.clip = 'rect(0 ' + width + 'px ' + height + 'px 0)';
        this.renderer.addClass(this.menuElement, 'is-animating');
        this.addAnimationEndListener();
        this.isVisible = true;
    };
    MdlMenuComponent.prototype.addAnimationEndListener = function () {
        var _this = this;
        this.renderer.listen(this.menuElement, 'transitionend', function () {
            _this.renderer.removeClass(_this.menuElement, 'is-animating');
            return true;
        });
    };
    MdlMenuComponent.prototype.applyClip = function (height, width) {
        if (this.position == UNALIGNED) {
            // Do not clip.
            this.menuElement.style.clip = '';
        }
        else if (this.position == BOTTOM_RIGHT) {
            // Clip to the top right corner of the menu.
            this.menuElement.style.clip = 'rect(0 ' + width + 'px ' + '0 ' + width + 'px)';
        }
        else if (this.position == TOP_LEFT) {
            // Clip to the bottom left corner of the menu.
            this.menuElement.style.clip = 'rect(' + height + 'px 0 ' + height + 'px 0)';
        }
        else if (this.position == TOP_RIGHT) {
            // Clip to the bottom right corner of the menu.
            this.menuElement.style.clip = 'rect(' + height + 'px ' + width + 'px ' + height + 'px ' + width + 'px)';
        }
        else {
            // Default: do not clip (same as clipping to the top left corner).
            this.menuElement.style.clip = '';
        }
    };
    MdlMenuComponent.prototype.ngOnDestroy = function () {
        this.menuRegistry.remove(this);
    };
    return MdlMenuComponent;
}());

MdlMenuComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'mdl-menu',
                host: {},
                exportAs: 'mdlMenu',
                template: "\n   <div #container class=\"mdl-menu__container is-upgraded\">\n      <div #outline class=\"mdl-menu__outline\"\n         [ngClass]=\"cssPosition\"\n      ></div>\n      <div class=\"mdl-menu\" #menuElement>\n         <ng-content></ng-content>\n      </div>\n   </div>\n  ",
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
            },] },
];
/** @nocollapse */
MdlMenuComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Renderer2 */], },
    { type: MdlMenuRegisty, },
]; };
MdlMenuComponent.propDecorators = {
    'position': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */], args: ['mdl-menu-position',] },],
    'containerChild': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */], args: ['container',] },],
    'menuElementChild': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */], args: ['menuElement',] },],
    'outlineChild': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */], args: ['outline',] },],
    'menuItemComponents': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ContentChildren */], args: [__WEBPACK_IMPORTED_MODULE_1__mdl_menu_item_component__["a" /* MdlMenuItemComponent */],] },],
};
//# sourceMappingURL=mdl-menu.component.js.map

/***/ }),

/***/ "./node_modules/@angular-mdl/core/components/menu/mdl-toggle-menu.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlToggleMenuDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__button_mdl_button_component__ = __webpack_require__("./node_modules/@angular-mdl/core/components/button/mdl-button.component.js");


var MdlToggleMenuDirective = (function () {
    function MdlToggleMenuDirective(button) {
        this.button = button;
    }
    MdlToggleMenuDirective.prototype.onClick = function ($event) {
        this.menu.toggle($event, this.button);
    };
    return MdlToggleMenuDirective;
}());

MdlToggleMenuDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                selector: '[mdl-button][mdl-toggle-menu]'
            },] },
];
/** @nocollapse */
MdlToggleMenuDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__button_mdl_button_component__["a" /* MdlButtonComponent */], },
]; };
MdlToggleMenuDirective.propDecorators = {
    'menu': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */], args: ['mdl-toggle-menu',] },],
    'onClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */], args: ['click', ['$event'],] },],
};
//# sourceMappingURL=mdl-toggle-menu.directive.js.map

/***/ }),

/***/ "./node_modules/@angular-mdl/core/components/progress/mdl-progress.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MdlProgressComponent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlProgressModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_boolean_property__ = __webpack_require__("./node_modules/@angular-mdl/core/components/common/boolean-property.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");



var MdlProgressComponent = (function () {
    function MdlProgressComponent() {
        this.progress = 0;
        this.buffer = 100;
        this.aux = 0;
        this._indeterminate = false;
    }
    Object.defineProperty(MdlProgressComponent.prototype, "indeterminate", {
        get: function () { return this._indeterminate; },
        set: function (value) { this._indeterminate = Object(__WEBPACK_IMPORTED_MODULE_1__common_boolean_property__["a" /* toBoolean */])(value); },
        enumerable: true,
        configurable: true
    });
    MdlProgressComponent.prototype.ngOnChanges = function (changes) {
        if (changes['buffer']) {
            this.setBuffer(changes['buffer'].currentValue);
        }
    };
    MdlProgressComponent.prototype.setBuffer = function (b) {
        this.aux = 100 - b;
    };
    return MdlProgressComponent;
}());

MdlProgressComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'mdl-progress',
                host: {
                    '[class.mdl-progress]': 'true',
                    '[class.mdl-progress__indeterminate]': 'indeterminate===true'
                },
                template: "\n    <div class=\"progressbar bar bar1\" [style.width]=\"progress + '%'\"></div>\n    <div class=\"bufferbar bar bar2\" [style.width]=\"buffer + '%'\"></div>\n    <div class=\"auxbar bar bar3\" [ngStyle]=\"{'width': aux+'%'}\"></div>\n  ",
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None,
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
            },] },
];
/** @nocollapse */
MdlProgressComponent.ctorParameters = function () { return []; };
MdlProgressComponent.propDecorators = {
    'progress': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'buffer': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'aux': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'indeterminate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
};
var MDL_PROGRESS_DIRECTIVES = [MdlProgressComponent];
var MdlProgressModule = (function () {
    function MdlProgressModule() {
    }
    MdlProgressModule.forRoot = function () {
        return {
            ngModule: MdlProgressModule,
            providers: []
        };
    };
    return MdlProgressModule;
}());

MdlProgressModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */]],
                exports: MDL_PROGRESS_DIRECTIVES,
                declarations: MDL_PROGRESS_DIRECTIVES,
            },] },
];
/** @nocollapse */
MdlProgressModule.ctorParameters = function () { return []; };
//# sourceMappingURL=mdl-progress.component.js.map

/***/ }),

/***/ "./node_modules/@angular-mdl/core/components/radio/mdl-radio.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MdlRadioGroupRegisty */
/* unused harmony export MdlRadioComponent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlRadioModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_boolean_property__ = __webpack_require__("./node_modules/@angular-mdl/core/components/common/boolean-property.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_noop__ = __webpack_require__("./node_modules/@angular-mdl/core/components/common/noop.js");





var IS_FOCUSED = 'is-focused';
// Registry for mdl-readio compnents. Is responsible to keep the
// right state of the radio buttons of a radio group. It would be
// easier if i had a mdl-radio-group component. but this would be
// a big braking change.
var MdlRadioGroupRegisty = (function () {
    function MdlRadioGroupRegisty() {
        this.defaultFormGroup = 'defaultFromGroup';
        this.radioComponents = [];
    }
    MdlRadioGroupRegisty.prototype.add = function (radioComponent, formGroupName) {
        this.radioComponents.push({
            radio: radioComponent,
            group: formGroupName || this.defaultFormGroup
        });
    };
    MdlRadioGroupRegisty.prototype.remove = function (radioComponent) {
        this.radioComponents = this.radioComponents.filter(function (radioComponentInArray) {
            return (radioComponentInArray.radio !== radioComponent);
        });
    };
    MdlRadioGroupRegisty.prototype.select = function (radioComponent, formGroupName) {
        // unselect every radioComponent that is not the provided radiocomponent
        // and has the same name and is in teh same group.
        var groupToTest = formGroupName || this.defaultFormGroup;
        this.radioComponents.forEach(function (component) {
            if (component.radio.name === radioComponent.name && component.group === groupToTest) {
                if (component.radio !== radioComponent) {
                    component.radio.deselect(radioComponent.value);
                }
            }
        });
    };
    return MdlRadioGroupRegisty;
}());

MdlRadioGroupRegisty.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */] },
];
/** @nocollapse */
MdlRadioGroupRegisty.ctorParameters = function () { return []; };
/*
 <mdl-radio name="group1" value="1" [(ngModel)]="radioOption">Value 1</mdl-radio>
 */
var MdlRadioComponent = (function () {
    function MdlRadioComponent(elementRef, renderer, radioGroupRegistry, formGroupName) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.radioGroupRegistry = radioGroupRegistry;
        this.formGroupName = formGroupName;
        this._disabled = false;
        this.tabindex = null;
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        // the internal state - used to set the underlaying radio button state.
        this.checked = false;
        this.onTouchedCallback = __WEBPACK_IMPORTED_MODULE_4__common_noop__["a" /* noop */];
        this.onChangeCallback = __WEBPACK_IMPORTED_MODULE_4__common_noop__["a" /* noop */];
        this.el = elementRef.nativeElement;
    }
    Object.defineProperty(MdlRadioComponent.prototype, "disabled", {
        get: function () { return this._disabled; },
        set: function (value) { this._disabled = Object(__WEBPACK_IMPORTED_MODULE_3__common_boolean_property__["a" /* toBoolean */])(value); },
        enumerable: true,
        configurable: true
    });
    MdlRadioComponent.prototype.ngOnInit = function () {
        // we need a name and it must be the same as in the formcontrol.
        // a radio group without name is useless.
        this.checkName();
        // register the radio button - this is the only chance to unselect the
        // radio button that is no longer active - scope the radio button with it's group
        // if there is one.
        this.radioGroupRegistry.add(this, this.formGroupName);
    };
    MdlRadioComponent.prototype.ngOnDestroy = function () {
        this.radioGroupRegistry.remove(this);
    };
    MdlRadioComponent.prototype.writeValue = function (optionValue) {
        this.optionValue = optionValue;
        this.updateCheckState();
    };
    MdlRadioComponent.prototype.deselect = function (value) {
        // called from the registry. the value is the value of the selected radio button
        // e.g. the radio button get unselected if it isnÄt the selected one.
        this.writeValue(value);
    };
    MdlRadioComponent.prototype.registerOnChange = function (fn) {
        var _this = this;
        // wrap the callback, so that we can call select on the registry
        this.onChangeCallback = function () {
            fn(_this.value);
            _this.radioGroupRegistry.select(_this, _this.formGroupName);
        };
    };
    MdlRadioComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    MdlRadioComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    MdlRadioComponent.prototype.onFocus = function () {
        this.renderer.addClass(this.el, IS_FOCUSED);
    };
    MdlRadioComponent.prototype.onBlur = function () {
        this.renderer.removeClass(this.el, IS_FOCUSED);
    };
    MdlRadioComponent.prototype.onClick = function () {
        if (this.disabled) {
            return;
        }
        this.optionValue = this.value;
        this.updateCheckState();
        this.onChangeCallback();
        this.change.emit(this.optionValue);
    };
    MdlRadioComponent.prototype.updateCheckState = function () {
        this.checked = this.optionValue === this.value;
    };
    MdlRadioComponent.prototype.checkName = function () {
        if (this.name && this.formControlName && this.name !== this.formControlName) {
            this.throwNameError();
        }
        if (!this.name && this.formControlName) {
            this.name = this.formControlName;
        }
    };
    MdlRadioComponent.prototype.throwNameError = function () {
        throw new Error("\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <mdl-radio formControlName=\"food\" name=\"food\"></mdl-radio>\n    ");
    };
    MdlRadioComponent.prototype.spaceKeyPress = function (event) {
        this.checked = false; //in case of space key is pressed radio button value must remain same
    };
    return MdlRadioComponent;
}());

MdlRadioComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'mdl-radio',
                providers: [{
                        provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NG_VALUE_ACCESSOR */],
                        useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* forwardRef */])(function () { return MdlRadioComponent; }),
                        multi: true
                    }],
                host: {
                    '(click)': 'onClick()',
                    '[class.mdl-radio]': 'true',
                    '[class.is-upgraded]': 'true',
                    '[class.is-checked]': 'checked',
                    '[class.is-disabled]': 'disabled'
                },
                template: "\n  <input type=\"checkbox\" class=\"mdl-radio__button\" \n    [attr.name]=\"name\"\n    (focus)=\"onFocus()\" \n    (blur)=\"onBlur()\"\n    (keyup.space)=\"spaceKeyPress($event)\"\n    [disabled]=\"disabled\"\n    [attr.tabindex]=\"tabindex\"\n    [(ngModel)]=\"checked\">\n  <span class=\"mdl-radio__label\"><ng-content></ng-content></span>\n  <span class=\"mdl-radio__outer-circle\"></span>\n  <span class=\"mdl-radio__inner-circle\"></span>\n  ",
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
            },] },
];
/** @nocollapse */
MdlRadioComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Renderer2 */], },
    { type: MdlRadioGroupRegisty, },
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroupName */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Optional */] },] },
]; };
MdlRadioComponent.propDecorators = {
    'name': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'formControlName': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'tabindex': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'change': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
};
var MdlRadioModule = (function () {
    function MdlRadioModule() {
    }
    MdlRadioModule.forRoot = function () {
        return {
            ngModule: MdlRadioModule,
            providers: [MdlRadioGroupRegisty]
        };
    };
    return MdlRadioModule;
}());

MdlRadioModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormsModule */]],
                exports: [MdlRadioComponent],
                declarations: [MdlRadioComponent]
            },] },
];
/** @nocollapse */
MdlRadioModule.ctorParameters = function () { return []; };
//# sourceMappingURL=mdl-radio.component.js.map

/***/ }),

/***/ "./node_modules/@angular-mdl/core/components/shadow/mdl-shadow.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MdlUnsupportedShadowValueError */
/* unused harmony export MdlShadowDirective */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlShadowModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_mdl_error__ = __webpack_require__("./node_modules/@angular-mdl/core/components/common/mdl-error.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_number_property__ = __webpack_require__("./node_modules/@angular-mdl/core/components/common/number.property.js");
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



var MdlUnsupportedShadowValueError = (function (_super) {
    __extends(MdlUnsupportedShadowValueError, _super);
    function MdlUnsupportedShadowValueError(value) {
        /* istanbul ignore next */
        return _super.call(this, "Shadow value \"" + value + "\" isn't supported (allowed: 2,3,4,6,8,16,24).") || this;
    }
    return MdlUnsupportedShadowValueError;
}(__WEBPACK_IMPORTED_MODULE_1__common_mdl_error__["a" /* MdlError */]));

var MDL_SHADOW_VALUES = [0, 2, 3, 4, 6, 8, 16, 24];
var MdlShadowDirective = (function () {
    function MdlShadowDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this._mdlShadow = 2;
        this.el = elementRef.nativeElement;
    }
    Object.defineProperty(MdlShadowDirective.prototype, "mdlShadow", {
        get: function () { return this._mdlShadow; },
        set: function (value) { this._mdlShadow = Object(__WEBPACK_IMPORTED_MODULE_2__common_number_property__["a" /* toNumber */])(value); },
        enumerable: true,
        configurable: true
    });
    MdlShadowDirective.prototype.ngOnChanges = function (changes) {
        if (MDL_SHADOW_VALUES.indexOf(Number(this.mdlShadow)) === -1) {
            throw new MdlUnsupportedShadowValueError(this.mdlShadow);
        }
        var change = changes['mdlShadow'];
        if (!change.isFirstChange()) {
            this.renderer.removeClass(this.el, "mdl-shadow--" + change.previousValue + "dp");
        }
        this.renderer.addClass(this.el, "mdl-shadow--" + change.currentValue + "dp");
    };
    return MdlShadowDirective;
}());

MdlShadowDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                selector: '[mdl-shadow]'
            },] },
];
/** @nocollapse */
MdlShadowDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Renderer2 */], },
]; };
MdlShadowDirective.propDecorators = {
    'mdlShadow': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */], args: ['mdl-shadow',] },],
};
var MDL_SHADOW_DIRECTIVES = [MdlShadowDirective];
var MdlShadowModule = (function () {
    function MdlShadowModule() {
    }
    MdlShadowModule.forRoot = function () {
        return {
            ngModule: MdlShadowModule,
            providers: []
        };
    };
    return MdlShadowModule;
}());

MdlShadowModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */], args: [{
                imports: [],
                exports: MDL_SHADOW_DIRECTIVES,
                declarations: MDL_SHADOW_DIRECTIVES,
            },] },
];
/** @nocollapse */
MdlShadowModule.ctorParameters = function () { return []; };
//# sourceMappingURL=mdl-shadow.directive.js.map

/***/ }),

/***/ "./node_modules/@angular-mdl/core/components/slider/mdl-slider.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MdlSliderComponent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlSliderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_boolean_property__ = __webpack_require__("./node_modules/@angular-mdl/core/components/common/boolean-property.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_noop__ = __webpack_require__("./node_modules/@angular-mdl/core/components/common/noop.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_native_support__ = __webpack_require__("./node_modules/@angular-mdl/core/components/common/native-support.js");






var MdlSliderComponent = (function () {
    function MdlSliderComponent(renderer, elRef) {
        this.renderer = renderer;
        this.elRef = elRef;
        this._disabled = false;
        this.onTouchedCallback = __WEBPACK_IMPORTED_MODULE_4__common_noop__["a" /* noop */];
        this.onChangeCallback = __WEBPACK_IMPORTED_MODULE_4__common_noop__["a" /* noop */];
    }
    Object.defineProperty(MdlSliderComponent.prototype, "disabled", {
        get: function () { return this._disabled; },
        set: function (value) { this._disabled = Object(__WEBPACK_IMPORTED_MODULE_3__common_boolean_property__["a" /* toBoolean */])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdlSliderComponent.prototype, "value", {
        get: function () { return this.value_; },
        set: function (v) {
            this.value_ = v;
            this.updateSliderUI();
            this.onChangeCallback(v);
        },
        enumerable: true,
        configurable: true
    });
    ;
    MdlSliderComponent.prototype.writeValue = function (value) {
        this.value_ = value;
        this.updateSliderUI();
    };
    MdlSliderComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    MdlSliderComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    MdlSliderComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    MdlSliderComponent.prototype.updateSliderUI = function () {
        var fraction = (this.value_ - this.min) / (this.max - this.min);
        if (fraction === 0) {
            this.renderer.addClass(this.inputEl.nativeElement, 'is-lowest-value');
        }
        else {
            this.renderer.removeClass(this.inputEl.nativeElement, 'is-lowest-value');
        }
        this.renderer.setStyle(this.lowerEl.nativeElement, 'flex', '' + fraction);
        this.renderer.setStyle(this.upperEl.nativeElement, 'flex', '' + (1 - fraction));
    };
    MdlSliderComponent.prototype.onMouseUp = function (event) {
        event.target.blur();
    };
    MdlSliderComponent.prototype.onMouseDown = function (event) {
        if (event.target !== this.elRef.nativeElement) {
            return;
        }
        // Discard the original event and create a new event that
        // is on the slider element.
        event.preventDefault();
        var newEvent = new MouseEvent('mousedown', {
            relatedTarget: event.relatedTarget,
            button: event.button,
            buttons: event.buttons,
            clientX: event.clientX,
            clientY: this.inputEl.nativeElement.getBoundingClientRect().y,
            screenX: event.screenX,
            screenY: event.screenY
        });
        Object(__WEBPACK_IMPORTED_MODULE_5__common_native_support__["a" /* callNative */])(this.inputEl.nativeElement, 'dispatchEvent', newEvent);
    };
    return MdlSliderComponent;
}());

MdlSliderComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'mdl-slider',
                providers: [{
                        provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NG_VALUE_ACCESSOR */],
                        useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* forwardRef */])(function () { return MdlSliderComponent; }),
                        multi: true
                    }],
                host: {
                    '[class.mdl-slider__container]': 'true',
                    '(mouseup)': 'onMouseUp($event)',
                    '(mousedown)': 'onMouseDown($event)'
                },
                template: "\n    <input class=\"mdl-slider is-upgraded\" \n            type=\"range\" \n            [min]=\"min\" \n            [max]=\"max\" \n            [step]=\"step\" \n            [(ngModel)]=\"value\" \n            [disabled]=\"disabled\"\n            tabindex=\"0\"\n            #input>\n    <div class=\"mdl-slider__background-flex\">\n      <div class=\"mdl-slider__background-lower\" #lower></div>\n      <div class=\"mdl-slider__background-upper\" #uppper></div>\n  </div>\n  ",
                styles: [
                    "\n    :host {\n        height: 22px;\n        user-select: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n    }\n    "
                ],
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
            },] },
];
/** @nocollapse */
MdlSliderComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Renderer2 */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
]; };
MdlSliderComponent.propDecorators = {
    'min': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'max': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'step': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'lowerEl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */], args: ['lower',] },],
    'upperEl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */], args: ['uppper',] },],
    'inputEl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */], args: ['input',] },],
    'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
};
var MDL_SLIDER_DIRECTIVES = [MdlSliderComponent];
var MdlSliderModule = (function () {
    function MdlSliderModule() {
    }
    MdlSliderModule.forRoot = function () {
        return {
            ngModule: MdlSliderModule,
            providers: []
        };
    };
    return MdlSliderModule;
}());

MdlSliderModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */]],
                exports: MDL_SLIDER_DIRECTIVES,
                declarations: MDL_SLIDER_DIRECTIVES,
            },] },
];
/** @nocollapse */
MdlSliderModule.ctorParameters = function () { return []; };
//# sourceMappingURL=mdl-slider.component.js.map

/***/ }),

/***/ "./node_modules/@angular-mdl/core/components/snackbar/mdl-snackbar.service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MdlSnackbarComponent */
/* unused harmony export MdlSnackbarService */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlSnackbaModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dialog_outlet_mdl_dialog_outlet_service__ = __webpack_require__("./node_modules/@angular-mdl/core/components/dialog-outlet/mdl-dialog-outlet.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dialog_outlet_index__ = __webpack_require__("./node_modules/@angular-mdl/core/components/dialog-outlet/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");





var ANIMATION_TIME = 250;
var MdlSnackbarComponent = (function () {
    function MdlSnackbarComponent() {
        this.showIt = false;
    }
    MdlSnackbarComponent.prototype.onClick = function () {
        this.onAction();
    };
    MdlSnackbarComponent.prototype.isActive = function () {
        return this.showIt;
    };
    MdlSnackbarComponent.prototype.show = function () {
        var _this = this;
        var result = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["a" /* Subject */]();
        // wait unit the dom is in place - then showIt will change the css class
        setTimeout(function () {
            _this.showIt = true;
            // fire after the view animation is done
            setTimeout(function () {
                result.next(null);
                result.complete();
            }, ANIMATION_TIME);
        }, ANIMATION_TIME);
        return result.asObservable();
    };
    MdlSnackbarComponent.prototype.hide = function () {
        this.showIt = false;
        var result = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["a" /* Subject */]();
        // fire after the view animation is done
        setTimeout(function () {
            result.next(null);
            result.complete();
        }, ANIMATION_TIME);
        return result.asObservable();
    };
    return MdlSnackbarComponent;
}());

MdlSnackbarComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'mdl-snackbar-component',
                template: "\n    <div id=\"demo-toast-example\" class=\" mdl-snackbar\" [ngClass]=\"{'mdl-snackbar--active': showIt }\">\n      <div class=\"mdl-snackbar__text\">{{message}}</div>\n      <button *ngIf=\"onAction\" class=\"mdl-snackbar__action\" type=\"button\" (click)=\"onClick()\" >{{actionText}}</button>\n    </div>\n  ",
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
            },] },
];
/** @nocollapse */
MdlSnackbarComponent.ctorParameters = function () { return []; };
var MdlSnackbarService = (function () {
    function MdlSnackbarService(componentFactoryResolver, dialogOutletService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.dialogOutletService = dialogOutletService;
        this.cFactory = this.componentFactoryResolver.resolveComponentFactory(MdlSnackbarComponent);
    }
    MdlSnackbarService.prototype.showToast = function (message, timeout) {
        return this.showSnackbar({
            message: message,
            timeout: timeout
        });
    };
    MdlSnackbarService.prototype.showSnackbar = function (snackbarMessage) {
        var optTimeout = snackbarMessage.timeout || 2750;
        var closeAfterTimeout = !!snackbarMessage.closeAfterTimeout;
        var viewContainerRef = this.dialogOutletService.viewContainerRef;
        if (!viewContainerRef) {
            throw new Error('You did not provide a ViewContainerRef. ' +
                'Please see https://github.com/mseemann/angular2-mdl/wiki/How-to-use-the-MdlDialogService');
        }
        var cRef = viewContainerRef.createComponent(this.cFactory, viewContainerRef.length);
        var mdlSnackbarComponent = cRef.instance;
        mdlSnackbarComponent.message = snackbarMessage.message;
        if (this.previousSnack) {
            var previousSnack_1 = this.previousSnack;
            var subscription_1 = previousSnack_1.component.hide()
                .subscribe(function () {
                previousSnack_1.cRef.destroy();
                subscription_1.unsubscribe();
            });
        }
        this.previousSnack = {
            component: mdlSnackbarComponent,
            cRef: cRef
        };
        if (snackbarMessage.action) {
            if (closeAfterTimeout) {
                this.hideAndDestroySnack(mdlSnackbarComponent, cRef, optTimeout);
            }
            mdlSnackbarComponent.actionText = snackbarMessage.action.text;
            mdlSnackbarComponent.onAction = function () {
                mdlSnackbarComponent.hide().subscribe(function () {
                    cRef.destroy();
                    snackbarMessage.action.handler();
                });
            };
        }
        else {
            this.hideAndDestroySnack(mdlSnackbarComponent, cRef, optTimeout);
        }
        var result = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["a" /* Subject */]();
        mdlSnackbarComponent.show().subscribe(function () {
            result.next(mdlSnackbarComponent);
            result.complete();
        });
        return result.asObservable();
    };
    MdlSnackbarService.prototype.hideAndDestroySnack = function (component, componentRef, timeOut) {
        setTimeout(function () {
            component.hide()
                .subscribe(function () {
                componentRef.destroy();
            });
        }, timeOut);
    };
    return MdlSnackbarService;
}());

MdlSnackbarService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */] },
];
/** @nocollapse */
MdlSnackbarService.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ComponentFactoryResolver */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__dialog_outlet_mdl_dialog_outlet_service__["a" /* MdlDialogOutletService */], },
]; };
var MdlSnackbaModule = (function () {
    function MdlSnackbaModule() {
    }
    MdlSnackbaModule.forRoot = function () {
        return {
            ngModule: MdlSnackbaModule,
            providers: [MdlSnackbarService]
        };
    };
    return MdlSnackbaModule;
}());

MdlSnackbaModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__dialog_outlet_index__["a" /* MdlDialogOutletModule */].forRoot()],
                exports: [MdlSnackbarComponent],
                declarations: [MdlSnackbarComponent],
                entryComponents: [MdlSnackbarComponent]
            },] },
];
/** @nocollapse */
MdlSnackbaModule.ctorParameters = function () { return []; };
//# sourceMappingURL=mdl-snackbar.service.js.map

/***/ }),

/***/ "./node_modules/@angular-mdl/core/components/spinner/mdl-spinner.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MdlSpinnerComponent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlSpinnerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_boolean_property__ = __webpack_require__("./node_modules/@angular-mdl/core/components/common/boolean-property.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");



var MdlSpinnerComponent = (function () {
    function MdlSpinnerComponent() {
        this.layers = [1, 2, 3, 4];
        this._active = false;
        this._singleColor = false;
    }
    Object.defineProperty(MdlSpinnerComponent.prototype, "active", {
        get: function () { return this._active; },
        set: function (value) { this._active = Object(__WEBPACK_IMPORTED_MODULE_1__common_boolean_property__["a" /* toBoolean */])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdlSpinnerComponent.prototype, "singleColor", {
        get: function () { return this._singleColor; },
        set: function (value) { this._singleColor = Object(__WEBPACK_IMPORTED_MODULE_1__common_boolean_property__["a" /* toBoolean */])(value); },
        enumerable: true,
        configurable: true
    });
    return MdlSpinnerComponent;
}());

MdlSpinnerComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'mdl-spinner',
                host: {
                    '[class.mdl-spinner]': 'true',
                    '[class.is-upgraded]': 'true',
                    '[class.is-active]': 'active',
                    '[class.mdl-spinner--single-color]': 'singleColor',
                },
                // must be one line - otherwise the spinner is broken in the ui
                /* tslint:disable */
                template: "\n    <div *ngFor=\"let layer of layers;\" \n            class=\"mdl-spinner__layer mdl-spinner__layer-{{layer}}\">\n      <div class=\"mdl-spinner__circle-clipper mdl-spinner__left\">\n         <div class=\"mdl-spinner__circle\"></div>\n      </div><div class=\"mdl-spinner__gap-patch\"><div class=\"mdl-spinner__circle\"></div></div><div class=\"mdl-spinner__circle-clipper mdl-spinner__right\"><div class=\"mdl-spinner__circle\"></div></div>\n    </div>\n  "
                /* tslint:enable */ ,
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
            },] },
];
/** @nocollapse */
MdlSpinnerComponent.ctorParameters = function () { return []; };
MdlSpinnerComponent.propDecorators = {
    'active': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'singleColor': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */], args: ['single-color',] },],
};
var MDL_SPINNER_DIRECTIVES = [MdlSpinnerComponent];
var MdlSpinnerModule = (function () {
    function MdlSpinnerModule() {
    }
    MdlSpinnerModule.forRoot = function () {
        return {
            ngModule: MdlSpinnerModule,
            providers: []
        };
    };
    return MdlSpinnerModule;
}());

MdlSpinnerModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */]],
                exports: MDL_SPINNER_DIRECTIVES,
                declarations: MDL_SPINNER_DIRECTIVES,
            },] },
];
/** @nocollapse */
MdlSpinnerModule.ctorParameters = function () { return []; };
//# sourceMappingURL=mdl-spinner.component.js.map

/***/ }),

/***/ "./node_modules/@angular-mdl/core/components/switch/mdl-switch.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MdlSwitchComponent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlSwitchModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkbox_mdl_checkbox_component__ = __webpack_require__("./node_modules/@angular-mdl/core/components/checkbox/mdl-checkbox.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
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




var MdlSwitchComponent = (function (_super) {
    __extends(MdlSwitchComponent, _super);
    function MdlSwitchComponent(elementRef, renderer) {
        return _super.call(this, elementRef, renderer) || this;
    }
    return MdlSwitchComponent;
}(__WEBPACK_IMPORTED_MODULE_2__checkbox_mdl_checkbox_component__["a" /* MdlCheckboxComponent */]));

MdlSwitchComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'mdl-switch',
                providers: [{
                        provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NG_VALUE_ACCESSOR */],
                        useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* forwardRef */])(function () { return MdlSwitchComponent; }),
                        multi: true
                    }],
                host: {
                    '(click)': 'onClick()',
                    '[class.mdl-switch]': 'true',
                    '[class.is-upgraded]': 'true',
                    '[class.is-checked]': 'value',
                    '[class.is-disabled]': 'disabled'
                },
                outputs: ['change'],
                template: "\n    <input type=\"checkbox\" class=\"mdl-switch__input\" \n      (focus)=\"onFocus()\" \n      (blur)=\"onBlur()\"\n      [disabled]=\"disabled\"\n      [(ngModel)]=\"value\">\n    <span class=\"mdl-switch__label\"><ng-content></ng-content></span>\n    <div class=\"mdl-switch__track\"></div>\n    <div class=\"mdl-switch__thumb\"><span class=\"mdl-switch__focus-helper\"></span></div>\n  ",
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
            },] },
];
/** @nocollapse */
MdlSwitchComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Renderer2 */], },
]; };
var MDL_SWITCH_DIRECTIVES = [MdlSwitchComponent];
var MdlSwitchModule = (function () {
    function MdlSwitchModule() {
    }
    MdlSwitchModule.forRoot = function () {
        return {
            ngModule: MdlSwitchModule,
            providers: []
        };
    };
    return MdlSwitchModule;
}());

MdlSwitchModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormsModule */]],
                exports: MDL_SWITCH_DIRECTIVES,
                declarations: MDL_SWITCH_DIRECTIVES,
            },] },
];
/** @nocollapse */
MdlSwitchModule.ctorParameters = function () { return []; };
//# sourceMappingURL=mdl-switch.component.js.map

/***/ }),

/***/ "./node_modules/@angular-mdl/core/components/table/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlTableModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdl_table_component__ = __webpack_require__("./node_modules/@angular-mdl/core/components/table/mdl-table.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkbox_mdl_checkbox_component__ = __webpack_require__("./node_modules/@angular-mdl/core/components/checkbox/mdl-checkbox.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_mdl_ripple_directive__ = __webpack_require__("./node_modules/@angular-mdl/core/components/common/mdl-ripple.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* unused harmony namespace reexport */







var MDL_TABLE_DIRECTIVES = [
    __WEBPACK_IMPORTED_MODULE_1__mdl_table_component__["b" /* MdlTableComponent */],
    __WEBPACK_IMPORTED_MODULE_1__mdl_table_component__["a" /* MdlSelectableTableComponent */]
];
var MdlTableModule = (function () {
    function MdlTableModule() {
    }
    MdlTableModule.forRoot = function () {
        return {
            ngModule: MdlTableModule,
            providers: []
        };
    };
    return MdlTableModule;
}());

MdlTableModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_2__checkbox_mdl_checkbox_component__["b" /* MdlCheckboxModule */], __WEBPACK_IMPORTED_MODULE_3__common_mdl_ripple_directive__["a" /* MdlRippleModule */], __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* FormsModule */]],
                exports: MDL_TABLE_DIRECTIVES,
                declarations: MDL_TABLE_DIRECTIVES,
            },] },
];
/** @nocollapse */
MdlTableModule.ctorParameters = function () { return []; };
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@angular-mdl/core/components/table/mdl-table.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MdlDefaultTableModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MdlTableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlSelectableTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
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

var MdlDefaultTableModel = (function () {
    function MdlDefaultTableModel(columns) {
        this.data = [];
        this.columns = columns;
    }
    MdlDefaultTableModel.prototype.addAll = function (data) {
        (_a = this.data).push.apply(_a, data);
        var _a;
    };
    return MdlDefaultTableModel;
}());

var template = "\n        <table class=\"mdl-data-table\">\n           <thead>\n           <tr>\n              <th *ngIf=\"selectable\">\n                 <mdl-checkbox mdl-ripple [ngModel]=\"isAllSelected()\" (ngModelChange)=\"toogleAll()\"></mdl-checkbox>\n              </th>\n              <th *ngFor=\"let column of model.columns\"\n                  [ngClass]=\"{'mdl-data-table__cell--non-numeric': !column.numeric}\">\n                 {{column.name}}\n              </th>\n           </tr>\n           </thead>\n           <tbody>\n           <tr *ngFor=\"let data of model.data; let i = index\" [ngClass]=\"{'is-selected': selectable && data.selected}\">\n              <td *ngIf=\"selectable\">\n                 <mdl-checkbox mdl-ripple\n                      [(ngModel)]=\"data.selected\"\n                      (ngModelChange)=\"selectionChanged(data)\"></mdl-checkbox>\n              </td>\n              <td *ngFor=\"let column of model.columns\"\n                  [ngClass]=\"{'mdl-data-table__cell--non-numeric': !column.numeric}\"\n                  [innerHTML]=\"data[column.key]\">\n              </td>\n           </tr>\n           </tbody>\n        </table>  \n    ";
var styles = [
    "\n    :host{\n      display:inline-block;\n    }\n    "
];
var MdlTableComponent = (function () {
    function MdlTableComponent() {
        this.selectable = false;
    }
    return MdlTableComponent;
}());

MdlTableComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'mdl-table',
                template: template,
                styles: styles,
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
            },] },
];
/** @nocollapse */
MdlTableComponent.ctorParameters = function () { return []; };
MdlTableComponent.propDecorators = {
    'model': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */], args: ['table-model',] },],
};
var MdlSelectableTableComponent = (function (_super) {
    __extends(MdlSelectableTableComponent, _super);
    function MdlSelectableTableComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.selectionChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        _this.selectable = true;
        _this.allSelected = false;
        return _this;
    }
    MdlSelectableTableComponent.prototype.isAllSelected = function () {
        return this.model.data.every(function (data) { return data.selected; });
    };
    MdlSelectableTableComponent.prototype.toogleAll = function () {
        var selected = !this.isAllSelected();
        this.model.data.forEach(function (data) { return data.selected = selected; });
        this.updateSelected();
    };
    MdlSelectableTableComponent.prototype.updateSelected = function () {
        this.selected = this.model.data.filter(function (data) { return data.selected; });
        this.selectionChange.emit({ value: this.selected });
    };
    MdlSelectableTableComponent.prototype.selectionChanged = function (data) {
        this.updateSelected();
    };
    return MdlSelectableTableComponent;
}(MdlTableComponent));

MdlSelectableTableComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'mdl-table-selectable',
                template: template,
                styles: styles,
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
            },] },
];
/** @nocollapse */
MdlSelectableTableComponent.ctorParameters = function () { return []; };
MdlSelectableTableComponent.propDecorators = {
    'model': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */], args: ['table-model',] },],
    'selected': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */], args: ['table-model-selected',] },],
    'selectionChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */], args: ['table-model-selectionChanged',] },],
};
//# sourceMappingURL=mdl-table.component.js.map

/***/ }),

/***/ "./node_modules/@angular-mdl/core/components/tabs/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MdlTabsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdl_tabs_component__ = __webpack_require__("./node_modules/@angular-mdl/core/components/tabs/mdl-tabs.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdl_tab_panel_component__ = __webpack_require__("./node_modules/@angular-mdl/core/components/tabs/mdl-tab-panel.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mdl_tab_panel_title_component__ = __webpack_require__("./node_modules/@angular-mdl/core/components/tabs/mdl-tab-panel-title.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_mdl_ripple_directive__ = __webpack_require__("./node_modules/@angular-mdl/core/components/common/mdl-ripple.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_index__ = __webpack_require__("./node_modules/@angular-mdl/core/components/common/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__mdl_tab_panel_title_component__["a"]; });










var MDL_TABS_DIRECTIVES = [
    __WEBPACK_IMPORTED_MODULE_0__mdl_tabs_component__["a" /* MdlTabsComponent */],
    __WEBPACK_IMPORTED_MODULE_1__mdl_tab_panel_component__["a" /* MdlTabPanelComponent */],
    __WEBPACK_IMPORTED_MODULE_2__mdl_tab_panel_title_component__["a" /* MdlTabPanelTitleComponent */],
    __WEBPACK_IMPORTED_MODULE_1__mdl_tab_panel_component__["b" /* MdlTabPanelContent */]
];
var MdlTabsModule = (function () {
    function MdlTabsModule() {
    }
    MdlTabsModule.forRoot = function () {
        return {
            ngModule: MdlTabsModule,
            providers: []
        };
    };
    return MdlTabsModule;
}());

MdlTabsModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["J" /* NgModule */], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_4__common_mdl_ripple_directive__["a" /* MdlRippleModule */], __WEBPACK_IMPORTED_MODULE_5__common_index__["a" /* MdlCommonsModule */], __WEBPACK_IMPORTED_MODULE_6__angular_common__["b" /* CommonModule */]],
                exports: MDL_TABS_DIRECTIVES,
                declarations: MDL_TABS_DIRECTIVES.slice(),
            },] },
];
/** @nocollapse */
MdlTabsModule.ctorParameters = function () { return []; };
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@angular-mdl/core/components/tabs/mdl-tab-panel-title.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlTabPanelTitleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

var MdlTabPanelTitleComponent = (function () {
    function MdlTabPanelTitleComponent(vcRef) {
        this.vcRef = vcRef;
    }
    return MdlTabPanelTitleComponent;
}());

MdlTabPanelTitleComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'mdl-tab-panel-title',
                template: "\n   <ng-content></ng-content>\n   ",
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
            },] },
];
/** @nocollapse */
MdlTabPanelTitleComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewContainerRef */], },
]; };
//# sourceMappingURL=mdl-tab-panel-title.component.js.map

/***/ }),

/***/ "./node_modules/@angular-mdl/core/components/tabs/mdl-tab-panel.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MdlTabPanelContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlTabPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdl_tab_panel_title_component__ = __webpack_require__("./node_modules/@angular-mdl/core/components/tabs/mdl-tab-panel-title.component.js");


var MdlTabPanelContent = (function () {
    function MdlTabPanelContent() {
    }
    return MdlTabPanelContent;
}());

MdlTabPanelContent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'mdl-tab-panel-content',
                template: '<ng-content></ng-content>',
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
            },] },
];
/** @nocollapse */
MdlTabPanelContent.ctorParameters = function () { return []; };
var MdlTabPanelComponent = (function () {
    function MdlTabPanelComponent() {
        this.isActive = false;
    }
    return MdlTabPanelComponent;
}());

MdlTabPanelComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'mdl-tab-panel',
                host: {
                    '[class.mdl-tabs__panel]': 'true',
                    '[class.is-active]': 'isActive'
                },
                template: "\n   <ng-content *ngIf=\"titleComponent\" select=\"mdl-tab-panel-content\"></ng-content>\n   <ng-content *ngIf=\"!titleComponent\"></ng-content>\n   ",
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
            },] },
];
/** @nocollapse */
MdlTabPanelComponent.ctorParameters = function () { return []; };
MdlTabPanelComponent.propDecorators = {
    'titleComponent': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ContentChild */], args: [__WEBPACK_IMPORTED_MODULE_1__mdl_tab_panel_title_component__["a" /* MdlTabPanelTitleComponent */],] },],
    'title': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */], args: ['mdl-tab-panel-title',] },],
    'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */], args: ['disabled',] },],
};
//# sourceMappingURL=mdl-tab-panel.component.js.map

/***/ }),

/***/ "./node_modules/@angular-mdl/core/components/tabs/mdl-tabs.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlTabsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_boolean_property__ = __webpack_require__("./node_modules/@angular-mdl/core/components/common/boolean-property.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_number_property__ = __webpack_require__("./node_modules/@angular-mdl/core/components/common/number.property.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mdl_tab_panel_component__ = __webpack_require__("./node_modules/@angular-mdl/core/components/tabs/mdl-tab-panel.component.js");




var MdlTabsComponent = (function () {
    function MdlTabsComponent() {
        this._selectedIndex = 0;
        this._isRipple = false;
        this.selectedTabEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    Object.defineProperty(MdlTabsComponent.prototype, "selectedIndex", {
        get: function () { return this._selectedIndex; },
        set: function (value) { this._selectedIndex = Object(__WEBPACK_IMPORTED_MODULE_2__common_number_property__["a" /* toNumber */])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdlTabsComponent.prototype, "isRipple", {
        get: function () { return this._isRipple; },
        set: function (value) { this._isRipple = Object(__WEBPACK_IMPORTED_MODULE_1__common_boolean_property__["a" /* toBoolean */])(value); },
        enumerable: true,
        configurable: true
    });
    MdlTabsComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        // the initial tabs
        this.updateSelectedTabIndex();
        // listen to tab changes - this would not be necessary if this would be fixed:
        // https://github.com/angular/angular/issues/12818
        this.tabs.changes.subscribe(function () {
            _this.updateSelectedTabIndex();
        });
    };
    MdlTabsComponent.prototype.ngOnChanges = function (changes) {
        if (changes['selectedIndex']) {
            this.updateSelectedTabIndex();
        }
    };
    MdlTabsComponent.prototype.updateSelectedTabIndex = function () {
        var _this = this;
        if (this.tabs) {
            // https://github.com/angular/angular/issues/6005
            // this would not be necessare if this would be fixed: https://github.com/angular/angular/issues/12818
            setTimeout(function () {
                _this.tabs.forEach(function (tab, idx) {
                    tab.isActive = _this.selectedIndex === idx;
                });
            }, 1);
        }
    };
    MdlTabsComponent.prototype.tabSelected = function (tab) {
        if (tab.disabled) {
            return;
        }
        var index = this.tabs.toArray().indexOf(tab);
        if (index != this.selectedIndex) {
            this.selectedIndex = index;
            this.updateSelectedTabIndex();
            this.selectedTabEmitter.emit({ index: this.selectedIndex });
        }
    };
    return MdlTabsComponent;
}());

MdlTabsComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'mdl-tabs',
                host: {
                    '[class.mdl-tabs]': 'true',
                    '[class.is-upgraded]': 'true'
                },
                template: "\n   <div class=\"mdl-tabs__tab-bar\">\n      <div *ngFor=\"let tab of tabs.toArray()\">\n        <div\n          *ngIf=\"tab.titleComponent\"\n          class=\"mdl-tabs__tab\"\n          (click)=\"tabSelected(tab)\"\n          [mdl-ripple]=\"isRipple && !tab.disabled\"\n          [ngClass]=\"{'is-active': tab.isActive, 'disabled': tab.disabled}\"\n          [append-view-container-ref]=\"tab.titleComponent.vcRef\"></div>\n        <a *ngIf=\"!tab.titleComponent\" href=\"javascript:void(0)\"\n              (click)=\"tabSelected(tab)\"\n              class=\"mdl-tabs__tab\"\n              [mdl-ripple]=\"isRipple && !tab.disabled\"\n              [ngClass]=\"{'is-active': tab.isActive, 'disabled': tab.disabled}\">{{tab.title}}</a>\n       </div>\n  </div>\n  <ng-content></ng-content>\n  ",
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
            },] },
];
/** @nocollapse */
MdlTabsComponent.ctorParameters = function () { return []; };
MdlTabsComponent.propDecorators = {
    'selectedIndex': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */], args: ['mdl-tab-active-index',] },],
    'isRipple': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */], args: ['mdl-ripple',] },],
    'selectedTabEmitter': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */], args: ['mdl-tab-active-changed',] },],
    'tabs': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ContentChildren */], args: [__WEBPACK_IMPORTED_MODULE_3__mdl_tab_panel_component__["a" /* MdlTabPanelComponent */],] },],
};
//# sourceMappingURL=mdl-tabs.component.js.map

/***/ }),

/***/ "./node_modules/@angular-mdl/core/components/textfield/mdl-textfield.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DISABLE_NATIVE_VALIDITY_CHECKING */
/* unused harmony export MdlTextFieldComponent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlTextFieldModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_boolean_property__ = __webpack_require__("./node_modules/@angular-mdl/core/components/common/boolean-property.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_number_property__ = __webpack_require__("./node_modules/@angular-mdl/core/components/common/number.property.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__button_mdl_button_component__ = __webpack_require__("./node_modules/@angular-mdl/core/components/button/mdl-button.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__icon_mdl_icon_component__ = __webpack_require__("./node_modules/@angular-mdl/core/components/icon/mdl-icon.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_noop__ = __webpack_require__("./node_modules/@angular-mdl/core/components/common/noop.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_native_support__ = __webpack_require__("./node_modules/@angular-mdl/core/components/common/native-support.js");










var DISABLE_NATIVE_VALIDITY_CHECKING = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* InjectionToken */]('disableNativeValidityChecking');
var nextId = 0;
var IS_FOCUSED = 'is-focused';
var IS_DISABLED = 'is-disabled';
var IS_INVALID = 'is-invalid';
var IS_DIRTY = 'is-dirty';
var MdlTextFieldComponent = (function () {
    function MdlTextFieldComponent(renderer, elmRef, nativeCheckGlobalDisabled) {
        this.renderer = renderer;
        this.elmRef = elmRef;
        this.nativeCheckGlobalDisabled = nativeCheckGlobalDisabled;
        this.blurEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.focusEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.keyupEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.type = 'text';
        this.id = "mdl-textfield-" + nextId++;
        this._disabled = false;
        this._readonly = false;
        this._required = false;
        this._autofocus = false;
        this._isFloatingLabel = false;
        this._rows = null;
        this._maxrows = -1;
        this.tabindex = null;
        this.maxlength = null;
        // @experimental
        this._disableNativeValidityChecking = false;
        this.onTouchedCallback = __WEBPACK_IMPORTED_MODULE_7__common_noop__["a" /* noop */];
        this.onChangeCallback = __WEBPACK_IMPORTED_MODULE_7__common_noop__["a" /* noop */];
        this.el = elmRef.nativeElement;
    }
    Object.defineProperty(MdlTextFieldComponent.prototype, "value", {
        get: function () { return this.value_; },
        set: function (v) {
            this.value_ = this.type === 'number' ? (v === '' ? null : parseFloat(v)) : v;
            this.onChangeCallback(this.value);
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(MdlTextFieldComponent.prototype, "disabled", {
        get: function () { return this._disabled; },
        set: function (value) { this._disabled = Object(__WEBPACK_IMPORTED_MODULE_2__common_boolean_property__["a" /* toBoolean */])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdlTextFieldComponent.prototype, "readonly", {
        get: function () { return this._readonly; },
        set: function (value) { this._readonly = Object(__WEBPACK_IMPORTED_MODULE_2__common_boolean_property__["a" /* toBoolean */])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdlTextFieldComponent.prototype, "required", {
        get: function () { return this._required; },
        set: function (value) { this._required = Object(__WEBPACK_IMPORTED_MODULE_2__common_boolean_property__["a" /* toBoolean */])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdlTextFieldComponent.prototype, "autofocus", {
        get: function () { return this._autofocus; },
        set: function (value) { this._autofocus = Object(__WEBPACK_IMPORTED_MODULE_2__common_boolean_property__["a" /* toBoolean */])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdlTextFieldComponent.prototype, "isFloatingLabel", {
        get: function () { return this._isFloatingLabel; },
        set: function (value) { this._isFloatingLabel = Object(__WEBPACK_IMPORTED_MODULE_2__common_boolean_property__["a" /* toBoolean */])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdlTextFieldComponent.prototype, "rows", {
        get: function () { return this._rows; },
        set: function (value) { this._rows = Object(__WEBPACK_IMPORTED_MODULE_3__common_number_property__["a" /* toNumber */])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdlTextFieldComponent.prototype, "maxrows", {
        get: function () { return this._maxrows; },
        set: function (value) { this._maxrows = Object(__WEBPACK_IMPORTED_MODULE_3__common_number_property__["a" /* toNumber */])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdlTextFieldComponent.prototype, "disableNativeValidityChecking", {
        get: function () { return this._disableNativeValidityChecking; },
        set: function (value) { this._disableNativeValidityChecking = Object(__WEBPACK_IMPORTED_MODULE_2__common_boolean_property__["a" /* toBoolean */])(value); },
        enumerable: true,
        configurable: true
    });
    MdlTextFieldComponent.prototype.writeValue = function (value) {
        this.value_ = value;
        this.checkDirty();
    };
    MdlTextFieldComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    MdlTextFieldComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    MdlTextFieldComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    MdlTextFieldComponent.prototype.ngOnChanges = function (changes) {
        this.checkDisabled();
    };
    MdlTextFieldComponent.prototype.ngDoCheck = function () {
        this.checkValidity();
        this.checkDirty();
    };
    MdlTextFieldComponent.prototype.setFocus = function () {
        if (!this.inputEl) {
            return;
        }
        Object(__WEBPACK_IMPORTED_MODULE_8__common_native_support__["a" /* callNative */])(this.inputEl.nativeElement, 'focus');
    };
    MdlTextFieldComponent.prototype.onFocus = function (event) {
        this.renderer.addClass(this.el, IS_FOCUSED);
        this.focusEmitter.emit(event);
    };
    MdlTextFieldComponent.prototype.onBlur = function (event) {
        this.renderer.removeClass(this.el, IS_FOCUSED);
        this.onTouchedCallback();
        this.blurEmitter.emit(event);
    };
    MdlTextFieldComponent.prototype.onKeyup = function (event) {
        this.keyupEmitter.emit(event);
    };
    MdlTextFieldComponent.prototype.checkDisabled = function () {
        if (this.disabled) {
            this.renderer.addClass(this.el, IS_DISABLED);
        }
        else {
            this.renderer.removeClass(this.el, IS_DISABLED);
        }
    };
    MdlTextFieldComponent.prototype.checkValidity = function () {
        // check the global setting - if globally disabled do no check
        if (this.nativeCheckGlobalDisabled === true) {
            return;
        }
        // check local setting - if locally disabled do no check
        if (this.disableNativeValidityChecking) {
            return;
        }
        if (this.inputEl && this.inputEl.nativeElement.validity) {
            if (!this.inputEl.nativeElement.validity.valid) {
                this.renderer.addClass(this.el, IS_INVALID);
            }
            else {
                this.renderer.removeClass(this.el, IS_INVALID);
            }
        }
    };
    MdlTextFieldComponent.prototype.checkDirty = function () {
        var dirty = this.inputEl && this.inputEl.nativeElement.value && this.inputEl.nativeElement.value.length > 0;
        if (dirty) {
            this.renderer.addClass(this.el, IS_DIRTY);
        }
        else {
            this.renderer.removeClass(this.el, IS_DIRTY);
        }
    };
    MdlTextFieldComponent.prototype.keydownTextarea = function ($event) {
        var currentRowCount = this.inputEl.nativeElement.value.split('\n').length;
        if ($event.keyCode === 13) {
            if (currentRowCount >= this.maxrows && this.maxrows !== -1) {
                $event.preventDefault();
            }
        }
    };
    // hm only for test purposes to simulate a change to the input field that will change the
    // model value.
    MdlTextFieldComponent.prototype.triggerChange = function (event) {
        this.value = event.target.value;
        this.onTouchedCallback();
    };
    return MdlTextFieldComponent;
}());

MdlTextFieldComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'mdl-textfield',
                host: {
                    '[class.mdl-textfield]': 'true',
                    '[class.is-upgraded]': 'true',
                    '[class.mdl-textfield--expandable]': 'icon',
                    '[class.mdl-textfield--floating-label]': 'isFloatingLabel',
                    '[class.has-placeholder]': 'placeholder'
                },
                template: "\n   <div *ngIf=\"!icon\">\n     <textarea\n        *ngIf=\"rows\"\n        #input\n        [rows]=\"rows\"\n        class=\"mdl-textfield__input\"\n        type=\"text\"\n        [attr.name]=\"name\"\n        [id]=\"id\"\n        [placeholder]=\"placeholder ? placeholder : ''\"\n        (focus)=\"onFocus($event)\"\n        (blur)=\"onBlur($event)\"\n        (keydown)=\"keydownTextarea($event)\"\n        (keyup)=\"onKeyup($event)\"\n        [(ngModel)]=\"value\"\n        [disabled]=\"disabled\"\n        [required]=\"required\"\n        [autofocus]=\"autofocus\"\n        [readonly]=\"readonly\"\n        ></textarea>\n     <input\n        *ngIf=\"!rows\"\n        #input\n        class=\"mdl-textfield__input\"\n        [type]=\"type\"\n        [attr.name]=\"name\"\n        [id]=\"id\"\n        [pattern]=\"pattern ? pattern : '.*'\"\n        [attr.min]=\"min\"\n        [attr.max]=\"max\"\n        [attr.step]=\"step\"\n        [placeholder]=\"placeholder ? placeholder : ''\"\n        [autocomplete]=\"autocomplete ? autocomplete : ''\"\n        (focus)=\"onFocus($event)\"\n        (blur)=\"onBlur($event)\"\n        (keyup)=\"onKeyup($event)\"\n        [(ngModel)]=\"value\"\n        [disabled]=\"disabled\"\n        [required]=\"required\"\n        [autofocus]=\"autofocus\"\n        [readonly]=\"readonly\"\n        [attr.tabindex]=\"tabindex\"\n        [maxlength]=\"maxlength\"\n        >\n     <label class=\"mdl-textfield__label\" [attr.for]=\"id\">{{label}}</label>\n     <span class=\"mdl-textfield__error\">{{errorMessage}}</span>\n   </div>\n   <div *ngIf=\"icon\">\n      <button mdl-button mdl-button-type=\"icon\" (click)=\"setFocus()\">\n         <mdl-icon>{{icon}}</mdl-icon>\n      </button>\n      <div class=\"mdl-textfield__expandable-holder\">\n       <input\n          #input\n          class=\"mdl-textfield__input\"\n          [type]=\"type\"\n          [attr.name]=\"name\"\n          [id]=\"id\"\n          [pattern]=\"pattern ? pattern : '.*'\"\n          [attr.min]=\"min\"\n          [attr.max]=\"max\"\n          [attr.step]=\"step\"\n          [placeholder]=\"placeholder ? placeholder : ''\"\n          [autocomplete]=\"autocomplete ? autocomplete : ''\"\n          (focus)=\"onFocus($event)\"\n          (blur)=\"onBlur($event)\"\n          (keyup)=\"onKeyup($event)\"\n          [(ngModel)]=\"value\"\n          [disabled]=\"disabled\"\n          [required]=\"required\"\n          [autofocus]=\"autofocus\"\n          [readonly]=\"readonly\"\n          [attr.tabindex]=\"tabindex\"\n          [maxlength]=\"maxlength\"\n         >\n     <label class=\"mdl-textfield__label\" [attr.for]=\"id\">{{label}}</label>\n     <span class=\"mdl-textfield__error\">{{errorMessage}}</span>\n      </div>\n   </div>\n   ",
                providers: [{
                        provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NG_VALUE_ACCESSOR */],
                        useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* forwardRef */])(function () { return MdlTextFieldComponent; }),
                        multi: true
                    }],
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
            },] },
];
/** @nocollapse */
MdlTextFieldComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Renderer2 */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
    { type: Boolean, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Optional */] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */], args: [DISABLE_NATIVE_VALIDITY_CHECKING,] },] },
]; };
MdlTextFieldComponent.propDecorators = {
    'blurEmitter': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */], args: ['blur',] },],
    'focusEmitter': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */], args: ['focus',] },],
    'keyupEmitter': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */], args: ['keyup',] },],
    'inputEl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */], args: ['input',] },],
    'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'type': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'label': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'pattern': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'min': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'max': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'step': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'name': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'id': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'errorMessage': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */], args: ['error-msg',] },],
    'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'readonly': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'required': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'autofocus': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'isFloatingLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */], args: ['floating-label',] },],
    'placeholder': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'autocomplete': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'rows': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'maxrows': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'icon': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'tabindex': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'maxlength': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'disableNativeValidityChecking': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
};
var MdlTextFieldModule = (function () {
    function MdlTextFieldModule() {
    }
    MdlTextFieldModule.forRoot = function () {
        return {
            ngModule: MdlTextFieldModule,
            providers: []
        };
    };
    return MdlTextFieldModule;
}());

MdlTextFieldModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_5__icon_mdl_icon_component__["a" /* MdlIconModule */], __WEBPACK_IMPORTED_MODULE_4__button_mdl_button_component__["b" /* MdlButtonModule */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_6__angular_common__["b" /* CommonModule */]],
                exports: [MdlTextFieldComponent],
                declarations: [MdlTextFieldComponent],
            },] },
];
/** @nocollapse */
MdlTextFieldModule.ctorParameters = function () { return []; };
//# sourceMappingURL=mdl-textfield.component.js.map

/***/ }),

/***/ "./node_modules/@angular-mdl/core/components/tooltip/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlTooltipModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdl_tooltip_component__ = __webpack_require__("./node_modules/@angular-mdl/core/components/tooltip/mdl-tooltip.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mdl_tooltip_directive__ = __webpack_require__("./node_modules/@angular-mdl/core/components/tooltip/mdl-tooltip.directive.js");
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */



var MDL_TOOLTIP_DIRECTIVES = [
    __WEBPACK_IMPORTED_MODULE_1__mdl_tooltip_component__["b" /* MdlTooltipComponent */],
    __WEBPACK_IMPORTED_MODULE_2__mdl_tooltip_directive__["b" /* MdlTooltipLargeDirective */],
    __WEBPACK_IMPORTED_MODULE_2__mdl_tooltip_directive__["a" /* MdlTooltipDirective */]
];


var MdlTooltipModule = (function () {
    function MdlTooltipModule() {
    }
    MdlTooltipModule.forRoot = function () {
        return {
            ngModule: MdlTooltipModule,
            providers: []
        };
    };
    return MdlTooltipModule;
}());

MdlTooltipModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */], args: [{
                imports: [],
                exports: MDL_TOOLTIP_DIRECTIVES,
                declarations: MDL_TOOLTIP_DIRECTIVES.concat([__WEBPACK_IMPORTED_MODULE_1__mdl_tooltip_component__["a" /* MdlSimpleTooltipComponent */]]),
                entryComponents: [__WEBPACK_IMPORTED_MODULE_1__mdl_tooltip_component__["a" /* MdlSimpleTooltipComponent */]]
            },] },
];
/** @nocollapse */
MdlTooltipModule.ctorParameters = function () { return []; };
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@angular-mdl/core/components/tooltip/mdl-tooltip-position.service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlTooltipPositionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

var MdlTooltipPositionService = (function () {
    function MdlTooltipPositionService() {
    }
    MdlTooltipPositionService.prototype.calcStyle = function (offsetWidth, offsetHeight, props, position) {
        var result = {};
        var left = props.left + (props.width / 2);
        var top = props.top + (props.height / 2);
        var marginLeft = -1 * (offsetWidth / 2);
        var marginTop = -1 * (offsetHeight / 2);
        if (position == 'left' || position == 'right') {
            left = (props.width / 2);
            if (top + marginTop < 0) {
                result.top = '0';
                result.marginTop = '0';
            }
            else {
                result.top = top + 'px';
                result.marginTop = marginTop + 'px';
            }
        }
        else {
            if (left + marginLeft < 0) {
                result.left = '0';
                result.marginLeft = '0';
            }
            else {
                result.left = left + 'px';
                result.marginLeft = marginLeft + 'px';
            }
        }
        if (position == 'top') {
            result.top = props.top - offsetHeight - 10 + 'px';
        }
        else if (position == 'right') {
            result.left = props.left + props.width + 10 + 'px';
        }
        else if (position == 'left') {
            result.left = props.left - offsetWidth - 10 + 'px';
        }
        else {
            result.top = props.top + props.height + 10 + 'px';
        }
        return result;
    };
    return MdlTooltipPositionService;
}());

MdlTooltipPositionService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */] },
];
/** @nocollapse */
MdlTooltipPositionService.ctorParameters = function () { return []; };
//# sourceMappingURL=mdl-tooltip-position.service.js.map

/***/ }),

/***/ "./node_modules/@angular-mdl/core/components/tooltip/mdl-tooltip.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlSimpleTooltipComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MdlTooltipComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdl_tooltip_position_service__ = __webpack_require__("./node_modules/@angular-mdl/core/components/tooltip/mdl-tooltip-position.service.js");
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


var IS_ACTIVE = 'is-active';
var host = {
    '[class.mdl-tooltip]': 'true',
    '[class.mdl-tooltip--large]': 'large',
    '[class.mdl-tooltip--left]': 'position=="left"',
    '[class.mdl-tooltip--right]': 'position=="right"',
    '[class.mdl-tooltip--top]': 'position=="top"',
    '[class.mdl-tooltip--bottom]': 'position=="bottom"'
};
var MdlSimpleTooltipComponent = (function () {
    function MdlSimpleTooltipComponent(elRef, renderer, mdlTooltipPositionService) {
        this.elRef = elRef;
        this.renderer = renderer;
        this.mdlTooltipPositionService = mdlTooltipPositionService;
        this.large = false;
        this.active = false;
        this.element = elRef.nativeElement;
    }
    MdlSimpleTooltipComponent.prototype.mouseLeave = function () {
        if (this.delayTimeout) {
            clearTimeout(this.delayTimeout);
        }
        this.setActive(false);
    };
    MdlSimpleTooltipComponent.prototype.mouseEnter = function (event) {
        var _this = this;
        if (this.delay) {
            this.delayTimeout = setTimeout(function () {
                _this.show(event.target);
            }, this.delay);
        }
        else {
            this.show(event.target);
        }
    };
    MdlSimpleTooltipComponent.prototype.show = function (element) {
        var props = element.getBoundingClientRect();
        var offsetWidth = this.element.offsetWidth;
        var offsetHeight = this.element.offsetHeight;
        var style = this.mdlTooltipPositionService.calcStyle(offsetWidth, offsetHeight, props, this.position);
        for (var key in style) {
            this.renderer.setStyle(this.elRef.nativeElement, key, style[key]);
        }
        this.setActive(true);
    };
    MdlSimpleTooltipComponent.prototype.setActive = function (active) {
        this.active = active;
        if (active) {
            this.renderer.addClass(this.elRef.nativeElement, IS_ACTIVE);
        }
        else {
            this.renderer.removeClass(this.elRef.nativeElement, IS_ACTIVE);
        }
    };
    MdlSimpleTooltipComponent.prototype.isActive = function () {
        return this.active;
    };
    return MdlSimpleTooltipComponent;
}());

MdlSimpleTooltipComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'mdl-simple-tooltip',
                host: host,
                template: '<div>{{tooltipText}}</div>',
                providers: [__WEBPACK_IMPORTED_MODULE_1__mdl_tooltip_position_service__["a" /* MdlTooltipPositionService */]],
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
            },] },
];
/** @nocollapse */
MdlSimpleTooltipComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Renderer2 */], },
    { type: __WEBPACK_IMPORTED_MODULE_1__mdl_tooltip_position_service__["a" /* MdlTooltipPositionService */], },
]; };
MdlSimpleTooltipComponent.propDecorators = {
    'delay': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
};
var MdlTooltipComponent = (function (_super) {
    __extends(MdlTooltipComponent, _super);
    function MdlTooltipComponent(elRef, renderer, mdlTooltipPositionService) {
        return _super.call(this, elRef, renderer, mdlTooltipPositionService) || this;
    }
    return MdlTooltipComponent;
}(MdlSimpleTooltipComponent));

MdlTooltipComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'mdl-tooltip',
                template: '<div><ng-content></ng-content></div>',
                exportAs: 'mdlTooltip',
                host: host,
                providers: [__WEBPACK_IMPORTED_MODULE_1__mdl_tooltip_position_service__["a" /* MdlTooltipPositionService */]],
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
            },] },
];
/** @nocollapse */
MdlTooltipComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Renderer2 */], },
    { type: __WEBPACK_IMPORTED_MODULE_1__mdl_tooltip_position_service__["a" /* MdlTooltipPositionService */], },
]; };
//# sourceMappingURL=mdl-tooltip.component.js.map

/***/ }),

/***/ "./node_modules/@angular-mdl/core/components/tooltip/mdl-tooltip.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AbstractMdlTooltipDirective */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlTooltipDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MdlTooltipLargeDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdl_tooltip_component__ = __webpack_require__("./node_modules/@angular-mdl/core/components/tooltip/mdl-tooltip.component.js");
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


var AbstractMdlTooltipDirective = (function () {
    function AbstractMdlTooltipDirective(vcRef, large, componentFactoryResolver, renderer) {
        this.vcRef = vcRef;
        this.large = large;
        this.componentFactoryResolver = componentFactoryResolver;
        this.renderer = renderer;
    }
    AbstractMdlTooltipDirective.prototype.ngOnInit = function () {
        // if the tooltip is not an instance of MdlTooltipComponent
        // we create a simpleTooltipComponent on the fly.
        if (!(this.tooltip instanceof __WEBPACK_IMPORTED_MODULE_1__mdl_tooltip_component__["b" /* MdlTooltipComponent */])) {
            var cFactory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_1__mdl_tooltip_component__["a" /* MdlSimpleTooltipComponent */]);
            var cRef = this.vcRef.createComponent(cFactory);
            this.tooltipComponent = cRef.instance;
            this.tooltipComponent.tooltipText = this.tooltip;
            this.configureTooltipComponent();
        }
        else {
            this.tooltipComponent = this.tooltip;
            this.configureTooltipComponent();
        }
    };
    AbstractMdlTooltipDirective.prototype.ngOnChanges = function (changes) {
        if (changes['tooltip'] && !changes['tooltip'].isFirstChange()) {
            if (!(this.tooltip instanceof __WEBPACK_IMPORTED_MODULE_1__mdl_tooltip_component__["b" /* MdlTooltipComponent */])) {
                this.tooltipComponent.tooltipText = this.tooltip;
            }
        }
    };
    AbstractMdlTooltipDirective.prototype.configureTooltipComponent = function () {
        this.tooltipComponent.large = this.large;
        this.tooltipComponent.position = this.position;
    };
    AbstractMdlTooltipDirective.prototype.onMouseEnter = function (event) {
        this.tooltipComponent.mouseEnter(event);
    };
    AbstractMdlTooltipDirective.prototype.onMouseLeave = function () {
        this.tooltipComponent.mouseLeave();
    };
    return AbstractMdlTooltipDirective;
}());

AbstractMdlTooltipDirective.propDecorators = {
    'onMouseLeave': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */], args: ['window:touchstart',] },],
};
var host = {
    '(mouseenter)': 'onMouseEnter($event)',
    '(touchend)': 'onMouseEnter($event)',
    '(mouseleave)': 'onMouseLeave()'
};
var MdlTooltipDirective = (function (_super) {
    __extends(MdlTooltipDirective, _super);
    function MdlTooltipDirective(vcRef, componentFactoryResolver, renderer) {
        return _super.call(this, vcRef, false, componentFactoryResolver, renderer) || this;
    }
    MdlTooltipDirective.prototype.ngOnInit = function () { _super.prototype.ngOnInit.call(this); };
    MdlTooltipDirective.prototype.ngOnChanges = function (changes) { _super.prototype.ngOnChanges.call(this, changes); };
    ;
    return MdlTooltipDirective;
}(AbstractMdlTooltipDirective));

MdlTooltipDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                selector: '[mdl-tooltip]',
                host: host
            },] },
];
/** @nocollapse */
MdlTooltipDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewContainerRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ComponentFactoryResolver */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Renderer2 */], },
]; };
MdlTooltipDirective.propDecorators = {
    'tooltip': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */], args: ['mdl-tooltip',] },],
    'position': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */], args: ['mdl-tooltip-position',] },],
};
var MdlTooltipLargeDirective = (function (_super) {
    __extends(MdlTooltipLargeDirective, _super);
    function MdlTooltipLargeDirective(vcRef, componentFactoryResolver, renderer) {
        return _super.call(this, vcRef, true, componentFactoryResolver, renderer) || this;
    }
    MdlTooltipLargeDirective.prototype.ngOnInit = function () { _super.prototype.ngOnInit.call(this); };
    MdlTooltipLargeDirective.prototype.ngOnChanges = function (changes) { _super.prototype.ngOnChanges.call(this, changes); };
    ;
    return MdlTooltipLargeDirective;
}(AbstractMdlTooltipDirective));

MdlTooltipLargeDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                selector: '[mdl-tooltip-large]',
                host: host
            },] },
];
/** @nocollapse */
MdlTooltipLargeDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewContainerRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ComponentFactoryResolver */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Renderer2 */], },
]; };
MdlTooltipLargeDirective.propDecorators = {
    'tooltip': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */], args: ['mdl-tooltip-large',] },],
    'position': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */], args: ['mdl-tooltip-position',] },],
};
//# sourceMappingURL=mdl-tooltip.directive.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm5/AsyncSubject.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsyncSubject; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/** PURE_IMPORTS_START ._Subject,._Subscription PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/**
 * @class AsyncSubject<T>
 */
var AsyncSubject = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(AsyncSubject, _super);
    function AsyncSubject() {
        _super.apply(this, arguments);
        this.value = null;
        this.hasNext = false;
        this.hasCompleted = false;
    }
    AsyncSubject.prototype._subscribe = function (subscriber) {
        if (this.hasError) {
            subscriber.error(this.thrownError);
            return __WEBPACK_IMPORTED_MODULE_1__Subscription__["a" /* Subscription */].EMPTY;
        }
        else if (this.hasCompleted && this.hasNext) {
            subscriber.next(this.value);
            subscriber.complete();
            return __WEBPACK_IMPORTED_MODULE_1__Subscription__["a" /* Subscription */].EMPTY;
        }
        return _super.prototype._subscribe.call(this, subscriber);
    };
    AsyncSubject.prototype.next = function (value) {
        if (!this.hasCompleted) {
            this.value = value;
            this.hasNext = true;
        }
    };
    AsyncSubject.prototype.error = function (error) {
        if (!this.hasCompleted) {
            _super.prototype.error.call(this, error);
        }
    };
    AsyncSubject.prototype.complete = function () {
        this.hasCompleted = true;
        if (this.hasNext) {
            _super.prototype.next.call(this, this.value);
        }
        _super.prototype.complete.call(this);
    };
    return AsyncSubject;
}(__WEBPACK_IMPORTED_MODULE_0__Subject__["a" /* Subject */]));
//# sourceMappingURL=AsyncSubject.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/TimerObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerObservable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_isNumeric__ = __webpack_require__("./node_modules/rxjs/_esm5/util/isNumeric.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scheduler_async__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/async.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_isScheduler__ = __webpack_require__("./node_modules/rxjs/_esm5/util/isScheduler.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_isDate__ = __webpack_require__("./node_modules/rxjs/_esm5/util/isDate.js");
/** PURE_IMPORTS_START .._util_isNumeric,.._Observable,.._scheduler_async,.._util_isScheduler,.._util_isDate PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};





/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var TimerObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(TimerObservable, _super);
    function TimerObservable(dueTime, period, scheduler) {
        if (dueTime === void 0) {
            dueTime = 0;
        }
        _super.call(this);
        this.period = -1;
        this.dueTime = 0;
        if (Object(__WEBPACK_IMPORTED_MODULE_0__util_isNumeric__["a" /* isNumeric */])(period)) {
            this.period = Number(period) < 1 && 1 || Number(period);
        }
        else if (Object(__WEBPACK_IMPORTED_MODULE_3__util_isScheduler__["a" /* isScheduler */])(period)) {
            scheduler = period;
        }
        if (!Object(__WEBPACK_IMPORTED_MODULE_3__util_isScheduler__["a" /* isScheduler */])(scheduler)) {
            scheduler = __WEBPACK_IMPORTED_MODULE_2__scheduler_async__["a" /* async */];
        }
        this.scheduler = scheduler;
        this.dueTime = Object(__WEBPACK_IMPORTED_MODULE_4__util_isDate__["a" /* isDate */])(dueTime) ?
            (+dueTime - this.scheduler.now()) :
            dueTime;
    }
    /**
     * Creates an Observable that starts emitting after an `initialDelay` and
     * emits ever increasing numbers after each `period` of time thereafter.
     *
     * <span class="informal">Its like {@link interval}, but you can specify when
     * should the emissions start.</span>
     *
     * <img src="./img/timer.png" width="100%">
     *
     * `timer` returns an Observable that emits an infinite sequence of ascending
     * integers, with a constant interval of time, `period` of your choosing
     * between those emissions. The first emission happens after the specified
     * `initialDelay`. The initial delay may be a {@link Date}. By default, this
     * operator uses the `async` IScheduler to provide a notion of time, but you
     * may pass any IScheduler to it. If `period` is not specified, the output
     * Observable emits only one value, `0`. Otherwise, it emits an infinite
     * sequence.
     *
     * @example <caption>Emits ascending numbers, one every second (1000ms), starting after 3 seconds</caption>
     * var numbers = Rx.Observable.timer(3000, 1000);
     * numbers.subscribe(x => console.log(x));
     *
     * @example <caption>Emits one number after five seconds</caption>
     * var numbers = Rx.Observable.timer(5000);
     * numbers.subscribe(x => console.log(x));
     *
     * @see {@link interval}
     * @see {@link delay}
     *
     * @param {number|Date} initialDelay The initial delay time to wait before
     * emitting the first value of `0`.
     * @param {number} [period] The period of time between emissions of the
     * subsequent numbers.
     * @param {Scheduler} [scheduler=async] The IScheduler to use for scheduling
     * the emission of values, and providing a notion of "time".
     * @return {Observable} An Observable that emits a `0` after the
     * `initialDelay` and ever increasing numbers after each `period` of time
     * thereafter.
     * @static true
     * @name timer
     * @owner Observable
     */
    TimerObservable.create = function (initialDelay, period, scheduler) {
        if (initialDelay === void 0) {
            initialDelay = 0;
        }
        return new TimerObservable(initialDelay, period, scheduler);
    };
    TimerObservable.dispatch = function (state) {
        var index = state.index, period = state.period, subscriber = state.subscriber;
        var action = this;
        subscriber.next(index);
        if (subscriber.closed) {
            return;
        }
        else if (period === -1) {
            return subscriber.complete();
        }
        state.index = index + 1;
        action.schedule(state, period);
    };
    TimerObservable.prototype._subscribe = function (subscriber) {
        var index = 0;
        var _a = this, period = _a.period, dueTime = _a.dueTime, scheduler = _a.scheduler;
        return scheduler.schedule(TimerObservable.dispatch, dueTime, {
            index: index, period: period, subscriber: subscriber
        });
    };
    return TimerObservable;
}(__WEBPACK_IMPORTED_MODULE_1__Observable__["a" /* Observable */]));
//# sourceMappingURL=TimerObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/race.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = race;
/* unused harmony export RaceOperator */
/* unused harmony export RaceSubscriber */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_isArray__ = __webpack_require__("./node_modules/rxjs/_esm5/util/isArray.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_ArrayObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/ArrayObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__OuterSubscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/OuterSubscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_subscribeToResult__ = __webpack_require__("./node_modules/rxjs/_esm5/util/subscribeToResult.js");
/** PURE_IMPORTS_START .._util_isArray,.._observable_ArrayObservable,.._OuterSubscriber,.._util_subscribeToResult PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};




function race() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    // if the only argument is an array, it was most likely called with
    // `race([obs1, obs2, ...])`
    if (observables.length === 1) {
        if (Object(__WEBPACK_IMPORTED_MODULE_0__util_isArray__["a" /* isArray */])(observables[0])) {
            observables = observables[0];
        }
        else {
            return observables[0];
        }
    }
    return new __WEBPACK_IMPORTED_MODULE_1__observable_ArrayObservable__["a" /* ArrayObservable */](observables).lift(new RaceOperator());
}
var RaceOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function RaceOperator() {
    }
    RaceOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new RaceSubscriber(subscriber));
    };
    return RaceOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var RaceSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(RaceSubscriber, _super);
    function RaceSubscriber(destination) {
        _super.call(this, destination);
        this.hasFirst = false;
        this.observables = [];
        this.subscriptions = [];
    }
    RaceSubscriber.prototype._next = function (observable) {
        this.observables.push(observable);
    };
    RaceSubscriber.prototype._complete = function () {
        var observables = this.observables;
        var len = observables.length;
        if (len === 0) {
            this.destination.complete();
        }
        else {
            for (var i = 0; i < len && !this.hasFirst; i++) {
                var observable = observables[i];
                var subscription = Object(__WEBPACK_IMPORTED_MODULE_3__util_subscribeToResult__["a" /* subscribeToResult */])(this, observable, observable, i);
                if (this.subscriptions) {
                    this.subscriptions.push(subscription);
                }
                this.add(subscription);
            }
            this.observables = null;
        }
    };
    RaceSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        if (!this.hasFirst) {
            this.hasFirst = true;
            for (var i = 0; i < this.subscriptions.length; i++) {
                if (i !== outerIndex) {
                    var subscription = this.subscriptions[i];
                    subscription.unsubscribe();
                    this.remove(subscription);
                }
            }
            this.subscriptions = null;
        }
        this.destination.next(innerValue);
    };
    return RaceSubscriber;
}(__WEBPACK_IMPORTED_MODULE_2__OuterSubscriber__["a" /* OuterSubscriber */]));
//# sourceMappingURL=race.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/timer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return timer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TimerObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/TimerObservable.js");
/** PURE_IMPORTS_START ._TimerObservable PURE_IMPORTS_END */

var timer = __WEBPACK_IMPORTED_MODULE_0__TimerObservable__["a" /* TimerObservable */].create;
//# sourceMappingURL=timer.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_audit__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/audit.js");
/* unused harmony reexport audit */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operators_auditTime__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/auditTime.js");
/* unused harmony reexport auditTime */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__operators_buffer__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/buffer.js");
/* unused harmony reexport buffer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__operators_bufferCount__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/bufferCount.js");
/* unused harmony reexport bufferCount */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__operators_bufferTime__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/bufferTime.js");
/* unused harmony reexport bufferTime */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__operators_bufferToggle__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/bufferToggle.js");
/* unused harmony reexport bufferToggle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__operators_bufferWhen__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/bufferWhen.js");
/* unused harmony reexport bufferWhen */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__operators_catchError__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/catchError.js");
/* unused harmony reexport catchError */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__operators_combineAll__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/combineAll.js");
/* unused harmony reexport combineAll */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__operators_combineLatest__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/combineLatest.js");
/* unused harmony reexport combineLatest */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__operators_concat__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/concat.js");
/* unused harmony reexport concat */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__operators_concatAll__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/concatAll.js");
/* unused harmony reexport concatAll */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__operators_concatMap__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/concatMap.js");
/* unused harmony reexport concatMap */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__operators_concatMapTo__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/concatMapTo.js");
/* unused harmony reexport concatMapTo */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__operators_count__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/count.js");
/* unused harmony reexport count */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__operators_debounce__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/debounce.js");
/* unused harmony reexport debounce */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__operators_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/debounceTime.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_16__operators_debounceTime__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__operators_defaultIfEmpty__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/defaultIfEmpty.js");
/* unused harmony reexport defaultIfEmpty */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__operators_delay__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/delay.js");
/* unused harmony reexport delay */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__operators_delayWhen__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/delayWhen.js");
/* unused harmony reexport delayWhen */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__operators_dematerialize__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/dematerialize.js");
/* unused harmony reexport dematerialize */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__operators_distinct__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/distinct.js");
/* unused harmony reexport distinct */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__operators_distinctUntilChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/distinctUntilChanged.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_22__operators_distinctUntilChanged__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__operators_distinctUntilKeyChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/distinctUntilKeyChanged.js");
/* unused harmony reexport distinctUntilKeyChanged */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__operators_elementAt__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/elementAt.js");
/* unused harmony reexport elementAt */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__operators_every__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/every.js");
/* unused harmony reexport every */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__operators_exhaust__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/exhaust.js");
/* unused harmony reexport exhaust */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__operators_exhaustMap__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/exhaustMap.js");
/* unused harmony reexport exhaustMap */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__operators_expand__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/expand.js");
/* unused harmony reexport expand */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__operators_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/filter.js");
/* unused harmony reexport filter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__operators_finalize__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/finalize.js");
/* unused harmony reexport finalize */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__operators_find__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/find.js");
/* unused harmony reexport find */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__operators_findIndex__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/findIndex.js");
/* unused harmony reexport findIndex */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__operators_first__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/first.js");
/* unused harmony reexport first */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__operators_groupBy__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/groupBy.js");
/* unused harmony reexport groupBy */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__operators_ignoreElements__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/ignoreElements.js");
/* unused harmony reexport ignoreElements */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__operators_isEmpty__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/isEmpty.js");
/* unused harmony reexport isEmpty */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__operators_last__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/last.js");
/* unused harmony reexport last */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__operators_map__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
/* unused harmony reexport map */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__operators_mapTo__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/mapTo.js");
/* unused harmony reexport mapTo */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__operators_materialize__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/materialize.js");
/* unused harmony reexport materialize */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__operators_max__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/max.js");
/* unused harmony reexport max */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__operators_merge__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/merge.js");
/* unused harmony reexport merge */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__operators_mergeAll__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/mergeAll.js");
/* unused harmony reexport mergeAll */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__operators_mergeMap__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/mergeMap.js");
/* unused harmony reexport mergeMap */
/* unused harmony reexport flatMap */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__operators_mergeMapTo__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/mergeMapTo.js");
/* unused harmony reexport mergeMapTo */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__operators_mergeScan__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/mergeScan.js");
/* unused harmony reexport mergeScan */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__operators_min__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/min.js");
/* unused harmony reexport min */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__operators_multicast__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/multicast.js");
/* unused harmony reexport multicast */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__operators_observeOn__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/observeOn.js");
/* unused harmony reexport observeOn */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__operators_onErrorResumeNext__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/onErrorResumeNext.js");
/* unused harmony reexport onErrorResumeNext */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__operators_pairwise__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/pairwise.js");
/* unused harmony reexport pairwise */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__operators_partition__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/partition.js");
/* unused harmony reexport partition */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__operators_pluck__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/pluck.js");
/* unused harmony reexport pluck */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__operators_publish__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/publish.js");
/* unused harmony reexport publish */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__operators_publishBehavior__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/publishBehavior.js");
/* unused harmony reexport publishBehavior */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__operators_publishLast__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/publishLast.js");
/* unused harmony reexport publishLast */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__operators_publishReplay__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/publishReplay.js");
/* unused harmony reexport publishReplay */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__operators_race__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/race.js");
/* unused harmony reexport race */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__operators_reduce__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/reduce.js");
/* unused harmony reexport reduce */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__operators_repeat__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/repeat.js");
/* unused harmony reexport repeat */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__operators_repeatWhen__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/repeatWhen.js");
/* unused harmony reexport repeatWhen */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__operators_retry__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/retry.js");
/* unused harmony reexport retry */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__operators_retryWhen__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/retryWhen.js");
/* unused harmony reexport retryWhen */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__operators_refCount__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/refCount.js");
/* unused harmony reexport refCount */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__operators_sample__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/sample.js");
/* unused harmony reexport sample */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__operators_sampleTime__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/sampleTime.js");
/* unused harmony reexport sampleTime */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__operators_scan__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/scan.js");
/* unused harmony reexport scan */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__operators_sequenceEqual__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/sequenceEqual.js");
/* unused harmony reexport sequenceEqual */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__operators_share__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/share.js");
/* unused harmony reexport share */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__operators_shareReplay__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/shareReplay.js");
/* unused harmony reexport shareReplay */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__operators_single__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/single.js");
/* unused harmony reexport single */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__operators_skip__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/skip.js");
/* unused harmony reexport skip */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__operators_skipLast__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/skipLast.js");
/* unused harmony reexport skipLast */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__operators_skipUntil__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/skipUntil.js");
/* unused harmony reexport skipUntil */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__operators_skipWhile__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/skipWhile.js");
/* unused harmony reexport skipWhile */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__operators_startWith__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/startWith.js");
/* unused harmony reexport startWith */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__operators_switchAll__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/switchAll.js");
/* unused harmony reexport switchAll */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__operators_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/switchMap.js");
/* unused harmony reexport switchMap */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__operators_switchMapTo__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/switchMapTo.js");
/* unused harmony reexport switchMapTo */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80__operators_take__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/take.js");
/* unused harmony reexport take */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_81__operators_takeLast__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/takeLast.js");
/* unused harmony reexport takeLast */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_82__operators_takeUntil__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/takeUntil.js");
/* unused harmony reexport takeUntil */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_83__operators_takeWhile__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/takeWhile.js");
/* unused harmony reexport takeWhile */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_84__operators_tap__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/tap.js");
/* unused harmony reexport tap */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_85__operators_throttle__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/throttle.js");
/* unused harmony reexport throttle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_86__operators_throttleTime__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/throttleTime.js");
/* unused harmony reexport throttleTime */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_87__operators_timeInterval__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/timeInterval.js");
/* unused harmony reexport timeInterval */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_88__operators_timeout__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/timeout.js");
/* unused harmony reexport timeout */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_89__operators_timeoutWith__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/timeoutWith.js");
/* unused harmony reexport timeoutWith */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_90__operators_timestamp__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/timestamp.js");
/* unused harmony reexport timestamp */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_91__operators_toArray__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/toArray.js");
/* unused harmony reexport toArray */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_92__operators_window__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/window.js");
/* unused harmony reexport window */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_93__operators_windowCount__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/windowCount.js");
/* unused harmony reexport windowCount */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_94__operators_windowTime__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/windowTime.js");
/* unused harmony reexport windowTime */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_95__operators_windowToggle__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/windowToggle.js");
/* unused harmony reexport windowToggle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_96__operators_windowWhen__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/windowWhen.js");
/* unused harmony reexport windowWhen */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_97__operators_withLatestFrom__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/withLatestFrom.js");
/* unused harmony reexport withLatestFrom */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_98__operators_zip__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/zip.js");
/* unused harmony reexport zip */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_99__operators_zipAll__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/zipAll.js");
/* unused harmony reexport zipAll */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */














































































/**
 * TODO(https://github.com/ReactiveX/rxjs/issues/2900): Add back subscribeOn once it can be
 * treeshaken. Currently if this export is added back, it
 * forces apps to bring in asap scheduler along with
 * Immediate, root, and other supporting code.
 */
// export { subscribeOn } from './operators/subscribeOn';























//# sourceMappingURL=operators.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/audit.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = audit;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_tryCatch__ = __webpack_require__("./node_modules/rxjs/_esm5/util/tryCatch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_errorObject__ = __webpack_require__("./node_modules/rxjs/_esm5/util/errorObject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__OuterSubscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/OuterSubscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_subscribeToResult__ = __webpack_require__("./node_modules/rxjs/_esm5/util/subscribeToResult.js");
/** PURE_IMPORTS_START .._util_tryCatch,.._util_errorObject,.._OuterSubscriber,.._util_subscribeToResult PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};




/**
 * Ignores source values for a duration determined by another Observable, then
 * emits the most recent value from the source Observable, then repeats this
 * process.
 *
 * <span class="informal">It's like {@link auditTime}, but the silencing
 * duration is determined by a second Observable.</span>
 *
 * <img src="./img/audit.png" width="100%">
 *
 * `audit` is similar to `throttle`, but emits the last value from the silenced
 * time window, instead of the first value. `audit` emits the most recent value
 * from the source Observable on the output Observable as soon as its internal
 * timer becomes disabled, and ignores source values while the timer is enabled.
 * Initially, the timer is disabled. As soon as the first source value arrives,
 * the timer is enabled by calling the `durationSelector` function with the
 * source value, which returns the "duration" Observable. When the duration
 * Observable emits a value or completes, the timer is disabled, then the most
 * recent source value is emitted on the output Observable, and this process
 * repeats for the next source value.
 *
 * @example <caption>Emit clicks at a rate of at most one click per second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.audit(ev => Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounce}
 * @see {@link delayWhen}
 * @see {@link sample}
 * @see {@link throttle}
 *
 * @param {function(value: T): SubscribableOrPromise} durationSelector A function
 * that receives a value from the source Observable, for computing the silencing
 * duration, returned as an Observable or a Promise.
 * @return {Observable<T>} An Observable that performs rate-limiting of
 * emissions from the source Observable.
 * @method audit
 * @owner Observable
 */
function audit(durationSelector) {
    return function auditOperatorFunction(source) {
        return source.lift(new AuditOperator(durationSelector));
    };
}
var AuditOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function AuditOperator(durationSelector) {
        this.durationSelector = durationSelector;
    }
    AuditOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new AuditSubscriber(subscriber, this.durationSelector));
    };
    return AuditOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var AuditSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(AuditSubscriber, _super);
    function AuditSubscriber(destination, durationSelector) {
        _super.call(this, destination);
        this.durationSelector = durationSelector;
        this.hasValue = false;
    }
    AuditSubscriber.prototype._next = function (value) {
        this.value = value;
        this.hasValue = true;
        if (!this.throttled) {
            var duration = Object(__WEBPACK_IMPORTED_MODULE_0__util_tryCatch__["a" /* tryCatch */])(this.durationSelector)(value);
            if (duration === __WEBPACK_IMPORTED_MODULE_1__util_errorObject__["a" /* errorObject */]) {
                this.destination.error(__WEBPACK_IMPORTED_MODULE_1__util_errorObject__["a" /* errorObject */].e);
            }
            else {
                var innerSubscription = Object(__WEBPACK_IMPORTED_MODULE_3__util_subscribeToResult__["a" /* subscribeToResult */])(this, duration);
                if (innerSubscription.closed) {
                    this.clearThrottle();
                }
                else {
                    this.add(this.throttled = innerSubscription);
                }
            }
        }
    };
    AuditSubscriber.prototype.clearThrottle = function () {
        var _a = this, value = _a.value, hasValue = _a.hasValue, throttled = _a.throttled;
        if (throttled) {
            this.remove(throttled);
            this.throttled = null;
            throttled.unsubscribe();
        }
        if (hasValue) {
            this.value = null;
            this.hasValue = false;
            this.destination.next(value);
        }
    };
    AuditSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex) {
        this.clearThrottle();
    };
    AuditSubscriber.prototype.notifyComplete = function () {
        this.clearThrottle();
    };
    return AuditSubscriber;
}(__WEBPACK_IMPORTED_MODULE_2__OuterSubscriber__["a" /* OuterSubscriber */]));
//# sourceMappingURL=audit.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/auditTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export auditTime */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scheduler_async__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/async.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__audit__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/audit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__observable_timer__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/timer.js");
/** PURE_IMPORTS_START .._scheduler_async,._audit,.._observable_timer PURE_IMPORTS_END */



/**
 * Ignores source values for `duration` milliseconds, then emits the most recent
 * value from the source Observable, then repeats this process.
 *
 * <span class="informal">When it sees a source values, it ignores that plus
 * the next ones for `duration` milliseconds, and then it emits the most recent
 * value from the source.</span>
 *
 * <img src="./img/auditTime.png" width="100%">
 *
 * `auditTime` is similar to `throttleTime`, but emits the last value from the
 * silenced time window, instead of the first value. `auditTime` emits the most
 * recent value from the source Observable on the output Observable as soon as
 * its internal timer becomes disabled, and ignores source values while the
 * timer is enabled. Initially, the timer is disabled. As soon as the first
 * source value arrives, the timer is enabled. After `duration` milliseconds (or
 * the time unit determined internally by the optional `scheduler`) has passed,
 * the timer is disabled, then the most recent source value is emitted on the
 * output Observable, and this process repeats for the next source value.
 * Optionally takes a {@link IScheduler} for managing timers.
 *
 * @example <caption>Emit clicks at a rate of at most one click per second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.auditTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link audit}
 * @see {@link debounceTime}
 * @see {@link delay}
 * @see {@link sampleTime}
 * @see {@link throttleTime}
 *
 * @param {number} duration Time to wait before emitting the most recent source
 * value, measured in milliseconds or the time unit determined internally
 * by the optional `scheduler`.
 * @param {Scheduler} [scheduler=async] The {@link IScheduler} to use for
 * managing the timers that handle the rate-limiting behavior.
 * @return {Observable<T>} An Observable that performs rate-limiting of
 * emissions from the source Observable.
 * @method auditTime
 * @owner Observable
 */
function auditTime(duration, scheduler) {
    if (scheduler === void 0) {
        scheduler = __WEBPACK_IMPORTED_MODULE_0__scheduler_async__["a" /* async */];
    }
    return Object(__WEBPACK_IMPORTED_MODULE_1__audit__["a" /* audit */])(function () { return Object(__WEBPACK_IMPORTED_MODULE_2__observable_timer__["a" /* timer */])(duration, scheduler); });
}
//# sourceMappingURL=auditTime.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/buffer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export buffer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__OuterSubscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/OuterSubscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__ = __webpack_require__("./node_modules/rxjs/_esm5/util/subscribeToResult.js");
/** PURE_IMPORTS_START .._OuterSubscriber,.._util_subscribeToResult PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/**
 * Buffers the source Observable values until `closingNotifier` emits.
 *
 * <span class="informal">Collects values from the past as an array, and emits
 * that array only when another Observable emits.</span>
 *
 * <img src="./img/buffer.png" width="100%">
 *
 * Buffers the incoming Observable values until the given `closingNotifier`
 * Observable emits a value, at which point it emits the buffer on the output
 * Observable and starts a new buffer internally, awaiting the next time
 * `closingNotifier` emits.
 *
 * @example <caption>On every click, emit array of most recent interval events</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var interval = Rx.Observable.interval(1000);
 * var buffered = interval.buffer(clicks);
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link bufferCount}
 * @see {@link bufferTime}
 * @see {@link bufferToggle}
 * @see {@link bufferWhen}
 * @see {@link window}
 *
 * @param {Observable<any>} closingNotifier An Observable that signals the
 * buffer to be emitted on the output Observable.
 * @return {Observable<T[]>} An Observable of buffers, which are arrays of
 * values.
 * @method buffer
 * @owner Observable
 */
function buffer(closingNotifier) {
    return function bufferOperatorFunction(source) {
        return source.lift(new BufferOperator(closingNotifier));
    };
}
var BufferOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function BufferOperator(closingNotifier) {
        this.closingNotifier = closingNotifier;
    }
    BufferOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new BufferSubscriber(subscriber, this.closingNotifier));
    };
    return BufferOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var BufferSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(BufferSubscriber, _super);
    function BufferSubscriber(destination, closingNotifier) {
        _super.call(this, destination);
        this.buffer = [];
        this.add(Object(__WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__["a" /* subscribeToResult */])(this, closingNotifier));
    }
    BufferSubscriber.prototype._next = function (value) {
        this.buffer.push(value);
    };
    BufferSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        var buffer = this.buffer;
        this.buffer = [];
        this.destination.next(buffer);
    };
    return BufferSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__OuterSubscriber__["a" /* OuterSubscriber */]));
//# sourceMappingURL=buffer.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/bufferCount.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export bufferCount */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscriber.js");
/** PURE_IMPORTS_START .._Subscriber PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * Buffers the source Observable values until the size hits the maximum
 * `bufferSize` given.
 *
 * <span class="informal">Collects values from the past as an array, and emits
 * that array only when its size reaches `bufferSize`.</span>
 *
 * <img src="./img/bufferCount.png" width="100%">
 *
 * Buffers a number of values from the source Observable by `bufferSize` then
 * emits the buffer and clears it, and starts a new buffer each
 * `startBufferEvery` values. If `startBufferEvery` is not provided or is
 * `null`, then new buffers are started immediately at the start of the source
 * and when each buffer closes and is emitted.
 *
 * @example <caption>Emit the last two click events as an array</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferCount(2);
 * buffered.subscribe(x => console.log(x));
 *
 * @example <caption>On every click, emit the last two click events as an array</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferCount(2, 1);
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferTime}
 * @see {@link bufferToggle}
 * @see {@link bufferWhen}
 * @see {@link pairwise}
 * @see {@link windowCount}
 *
 * @param {number} bufferSize The maximum size of the buffer emitted.
 * @param {number} [startBufferEvery] Interval at which to start a new buffer.
 * For example if `startBufferEvery` is `2`, then a new buffer will be started
 * on every other value from the source. A new buffer is started at the
 * beginning of the source by default.
 * @return {Observable<T[]>} An Observable of arrays of buffered values.
 * @method bufferCount
 * @owner Observable
 */
function bufferCount(bufferSize, startBufferEvery) {
    if (startBufferEvery === void 0) {
        startBufferEvery = null;
    }
    return function bufferCountOperatorFunction(source) {
        return source.lift(new BufferCountOperator(bufferSize, startBufferEvery));
    };
}
var BufferCountOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function BufferCountOperator(bufferSize, startBufferEvery) {
        this.bufferSize = bufferSize;
        this.startBufferEvery = startBufferEvery;
        if (!startBufferEvery || bufferSize === startBufferEvery) {
            this.subscriberClass = BufferCountSubscriber;
        }
        else {
            this.subscriberClass = BufferSkipCountSubscriber;
        }
    }
    BufferCountOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new this.subscriberClass(subscriber, this.bufferSize, this.startBufferEvery));
    };
    return BufferCountOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var BufferCountSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(BufferCountSubscriber, _super);
    function BufferCountSubscriber(destination, bufferSize) {
        _super.call(this, destination);
        this.bufferSize = bufferSize;
        this.buffer = [];
    }
    BufferCountSubscriber.prototype._next = function (value) {
        var buffer = this.buffer;
        buffer.push(value);
        if (buffer.length == this.bufferSize) {
            this.destination.next(buffer);
            this.buffer = [];
        }
    };
    BufferCountSubscriber.prototype._complete = function () {
        var buffer = this.buffer;
        if (buffer.length > 0) {
            this.destination.next(buffer);
        }
        _super.prototype._complete.call(this);
    };
    return BufferCountSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */]));
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var BufferSkipCountSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(BufferSkipCountSubscriber, _super);
    function BufferSkipCountSubscriber(destination, bufferSize, startBufferEvery) {
        _super.call(this, destination);
        this.bufferSize = bufferSize;
        this.startBufferEvery = startBufferEvery;
        this.buffers = [];
        this.count = 0;
    }
    BufferSkipCountSubscriber.prototype._next = function (value) {
        var _a = this, bufferSize = _a.bufferSize, startBufferEvery = _a.startBufferEvery, buffers = _a.buffers, count = _a.count;
        this.count++;
        if (count % startBufferEvery === 0) {
            buffers.push([]);
        }
        for (var i = buffers.length; i--;) {
            var buffer = buffers[i];
            buffer.push(value);
            if (buffer.length === bufferSize) {
                buffers.splice(i, 1);
                this.destination.next(buffer);
            }
        }
    };
    BufferSkipCountSubscriber.prototype._complete = function () {
        var _a = this, buffers = _a.buffers, destination = _a.destination;
        while (buffers.length > 0) {
            var buffer = buffers.shift();
            if (buffer.length > 0) {
                destination.next(buffer);
            }
        }
        _super.prototype._complete.call(this);
    };
    return BufferSkipCountSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */]));
//# sourceMappingURL=bufferCount.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/bufferTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export bufferTime */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scheduler_async__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/async.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Subscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_isScheduler__ = __webpack_require__("./node_modules/rxjs/_esm5/util/isScheduler.js");
/** PURE_IMPORTS_START .._scheduler_async,.._Subscriber,.._util_isScheduler PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



/* tslint:enable:max-line-length */
/**
 * Buffers the source Observable values for a specific time period.
 *
 * <span class="informal">Collects values from the past as an array, and emits
 * those arrays periodically in time.</span>
 *
 * <img src="./img/bufferTime.png" width="100%">
 *
 * Buffers values from the source for a specific time duration `bufferTimeSpan`.
 * Unless the optional argument `bufferCreationInterval` is given, it emits and
 * resets the buffer every `bufferTimeSpan` milliseconds. If
 * `bufferCreationInterval` is given, this operator opens the buffer every
 * `bufferCreationInterval` milliseconds and closes (emits and resets) the
 * buffer every `bufferTimeSpan` milliseconds. When the optional argument
 * `maxBufferSize` is specified, the buffer will be closed either after
 * `bufferTimeSpan` milliseconds or when it contains `maxBufferSize` elements.
 *
 * @example <caption>Every second, emit an array of the recent click events</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferTime(1000);
 * buffered.subscribe(x => console.log(x));
 *
 * @example <caption>Every 5 seconds, emit the click events from the next 2 seconds</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferTime(2000, 5000);
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferCount}
 * @see {@link bufferToggle}
 * @see {@link bufferWhen}
 * @see {@link windowTime}
 *
 * @param {number} bufferTimeSpan The amount of time to fill each buffer array.
 * @param {number} [bufferCreationInterval] The interval at which to start new
 * buffers.
 * @param {number} [maxBufferSize] The maximum buffer size.
 * @param {Scheduler} [scheduler=async] The scheduler on which to schedule the
 * intervals that determine buffer boundaries.
 * @return {Observable<T[]>} An observable of arrays of buffered values.
 * @method bufferTime
 * @owner Observable
 */
function bufferTime(bufferTimeSpan) {
    var length = arguments.length;
    var scheduler = __WEBPACK_IMPORTED_MODULE_0__scheduler_async__["a" /* async */];
    if (Object(__WEBPACK_IMPORTED_MODULE_2__util_isScheduler__["a" /* isScheduler */])(arguments[arguments.length - 1])) {
        scheduler = arguments[arguments.length - 1];
        length--;
    }
    var bufferCreationInterval = null;
    if (length >= 2) {
        bufferCreationInterval = arguments[1];
    }
    var maxBufferSize = Number.POSITIVE_INFINITY;
    if (length >= 3) {
        maxBufferSize = arguments[2];
    }
    return function bufferTimeOperatorFunction(source) {
        return source.lift(new BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler));
    };
}
var BufferTimeOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler) {
        this.bufferTimeSpan = bufferTimeSpan;
        this.bufferCreationInterval = bufferCreationInterval;
        this.maxBufferSize = maxBufferSize;
        this.scheduler = scheduler;
    }
    BufferTimeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new BufferTimeSubscriber(subscriber, this.bufferTimeSpan, this.bufferCreationInterval, this.maxBufferSize, this.scheduler));
    };
    return BufferTimeOperator;
}());
var Context = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function Context() {
        this.buffer = [];
    }
    return Context;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var BufferTimeSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(BufferTimeSubscriber, _super);
    function BufferTimeSubscriber(destination, bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler) {
        _super.call(this, destination);
        this.bufferTimeSpan = bufferTimeSpan;
        this.bufferCreationInterval = bufferCreationInterval;
        this.maxBufferSize = maxBufferSize;
        this.scheduler = scheduler;
        this.contexts = [];
        var context = this.openContext();
        this.timespanOnly = bufferCreationInterval == null || bufferCreationInterval < 0;
        if (this.timespanOnly) {
            var timeSpanOnlyState = { subscriber: this, context: context, bufferTimeSpan: bufferTimeSpan };
            this.add(context.closeAction = scheduler.schedule(dispatchBufferTimeSpanOnly, bufferTimeSpan, timeSpanOnlyState));
        }
        else {
            var closeState = { subscriber: this, context: context };
            var creationState = { bufferTimeSpan: bufferTimeSpan, bufferCreationInterval: bufferCreationInterval, subscriber: this, scheduler: scheduler };
            this.add(context.closeAction = scheduler.schedule(dispatchBufferClose, bufferTimeSpan, closeState));
            this.add(scheduler.schedule(dispatchBufferCreation, bufferCreationInterval, creationState));
        }
    }
    BufferTimeSubscriber.prototype._next = function (value) {
        var contexts = this.contexts;
        var len = contexts.length;
        var filledBufferContext;
        for (var i = 0; i < len; i++) {
            var context = contexts[i];
            var buffer = context.buffer;
            buffer.push(value);
            if (buffer.length == this.maxBufferSize) {
                filledBufferContext = context;
            }
        }
        if (filledBufferContext) {
            this.onBufferFull(filledBufferContext);
        }
    };
    BufferTimeSubscriber.prototype._error = function (err) {
        this.contexts.length = 0;
        _super.prototype._error.call(this, err);
    };
    BufferTimeSubscriber.prototype._complete = function () {
        var _a = this, contexts = _a.contexts, destination = _a.destination;
        while (contexts.length > 0) {
            var context = contexts.shift();
            destination.next(context.buffer);
        }
        _super.prototype._complete.call(this);
    };
    BufferTimeSubscriber.prototype._unsubscribe = function () {
        this.contexts = null;
    };
    BufferTimeSubscriber.prototype.onBufferFull = function (context) {
        this.closeContext(context);
        var closeAction = context.closeAction;
        closeAction.unsubscribe();
        this.remove(closeAction);
        if (!this.closed && this.timespanOnly) {
            context = this.openContext();
            var bufferTimeSpan = this.bufferTimeSpan;
            var timeSpanOnlyState = { subscriber: this, context: context, bufferTimeSpan: bufferTimeSpan };
            this.add(context.closeAction = this.scheduler.schedule(dispatchBufferTimeSpanOnly, bufferTimeSpan, timeSpanOnlyState));
        }
    };
    BufferTimeSubscriber.prototype.openContext = function () {
        var context = new Context();
        this.contexts.push(context);
        return context;
    };
    BufferTimeSubscriber.prototype.closeContext = function (context) {
        this.destination.next(context.buffer);
        var contexts = this.contexts;
        var spliceIndex = contexts ? contexts.indexOf(context) : -1;
        if (spliceIndex >= 0) {
            contexts.splice(contexts.indexOf(context), 1);
        }
    };
    return BufferTimeSubscriber;
}(__WEBPACK_IMPORTED_MODULE_1__Subscriber__["a" /* Subscriber */]));
function dispatchBufferTimeSpanOnly(state) {
    var subscriber = state.subscriber;
    var prevContext = state.context;
    if (prevContext) {
        subscriber.closeContext(prevContext);
    }
    if (!subscriber.closed) {
        state.context = subscriber.openContext();
        state.context.closeAction = this.schedule(state, state.bufferTimeSpan);
    }
}
function dispatchBufferCreation(state) {
    var bufferCreationInterval = state.bufferCreationInterval, bufferTimeSpan = state.bufferTimeSpan, subscriber = state.subscriber, scheduler = state.scheduler;
    var context = subscriber.openContext();
    var action = this;
    if (!subscriber.closed) {
        subscriber.add(context.closeAction = scheduler.schedule(dispatchBufferClose, bufferTimeSpan, { subscriber: subscriber, context: context }));
        action.schedule(state, bufferCreationInterval);
    }
}
function dispatchBufferClose(arg) {
    var subscriber = arg.subscriber, context = arg.context;
    subscriber.closeContext(context);
}
//# sourceMappingURL=bufferTime.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/bufferToggle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export bufferToggle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__ = __webpack_require__("./node_modules/rxjs/_esm5/util/subscribeToResult.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__OuterSubscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/OuterSubscriber.js");
/** PURE_IMPORTS_START .._Subscription,.._util_subscribeToResult,.._OuterSubscriber PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



/**
 * Buffers the source Observable values starting from an emission from
 * `openings` and ending when the output of `closingSelector` emits.
 *
 * <span class="informal">Collects values from the past as an array. Starts
 * collecting only when `opening` emits, and calls the `closingSelector`
 * function to get an Observable that tells when to close the buffer.</span>
 *
 * <img src="./img/bufferToggle.png" width="100%">
 *
 * Buffers values from the source by opening the buffer via signals from an
 * Observable provided to `openings`, and closing and sending the buffers when
 * a Subscribable or Promise returned by the `closingSelector` function emits.
 *
 * @example <caption>Every other second, emit the click events from the next 500ms</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var openings = Rx.Observable.interval(1000);
 * var buffered = clicks.bufferToggle(openings, i =>
 *   i % 2 ? Rx.Observable.interval(500) : Rx.Observable.empty()
 * );
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferCount}
 * @see {@link bufferTime}
 * @see {@link bufferWhen}
 * @see {@link windowToggle}
 *
 * @param {SubscribableOrPromise<O>} openings A Subscribable or Promise of notifications to start new
 * buffers.
 * @param {function(value: O): SubscribableOrPromise} closingSelector A function that takes
 * the value emitted by the `openings` observable and returns a Subscribable or Promise,
 * which, when it emits, signals that the associated buffer should be emitted
 * and cleared.
 * @return {Observable<T[]>} An observable of arrays of buffered values.
 * @method bufferToggle
 * @owner Observable
 */
function bufferToggle(openings, closingSelector) {
    return function bufferToggleOperatorFunction(source) {
        return source.lift(new BufferToggleOperator(openings, closingSelector));
    };
}
var BufferToggleOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function BufferToggleOperator(openings, closingSelector) {
        this.openings = openings;
        this.closingSelector = closingSelector;
    }
    BufferToggleOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new BufferToggleSubscriber(subscriber, this.openings, this.closingSelector));
    };
    return BufferToggleOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var BufferToggleSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(BufferToggleSubscriber, _super);
    function BufferToggleSubscriber(destination, openings, closingSelector) {
        _super.call(this, destination);
        this.openings = openings;
        this.closingSelector = closingSelector;
        this.contexts = [];
        this.add(Object(__WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__["a" /* subscribeToResult */])(this, openings));
    }
    BufferToggleSubscriber.prototype._next = function (value) {
        var contexts = this.contexts;
        var len = contexts.length;
        for (var i = 0; i < len; i++) {
            contexts[i].buffer.push(value);
        }
    };
    BufferToggleSubscriber.prototype._error = function (err) {
        var contexts = this.contexts;
        while (contexts.length > 0) {
            var context = contexts.shift();
            context.subscription.unsubscribe();
            context.buffer = null;
            context.subscription = null;
        }
        this.contexts = null;
        _super.prototype._error.call(this, err);
    };
    BufferToggleSubscriber.prototype._complete = function () {
        var contexts = this.contexts;
        while (contexts.length > 0) {
            var context = contexts.shift();
            this.destination.next(context.buffer);
            context.subscription.unsubscribe();
            context.buffer = null;
            context.subscription = null;
        }
        this.contexts = null;
        _super.prototype._complete.call(this);
    };
    BufferToggleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        outerValue ? this.closeBuffer(outerValue) : this.openBuffer(innerValue);
    };
    BufferToggleSubscriber.prototype.notifyComplete = function (innerSub) {
        this.closeBuffer(innerSub.context);
    };
    BufferToggleSubscriber.prototype.openBuffer = function (value) {
        try {
            var closingSelector = this.closingSelector;
            var closingNotifier = closingSelector.call(this, value);
            if (closingNotifier) {
                this.trySubscribe(closingNotifier);
            }
        }
        catch (err) {
            this._error(err);
        }
    };
    BufferToggleSubscriber.prototype.closeBuffer = function (context) {
        var contexts = this.contexts;
        if (contexts && context) {
            var buffer = context.buffer, subscription = context.subscription;
            this.destination.next(buffer);
            contexts.splice(contexts.indexOf(context), 1);
            this.remove(subscription);
            subscription.unsubscribe();
        }
    };
    BufferToggleSubscriber.prototype.trySubscribe = function (closingNotifier) {
        var contexts = this.contexts;
        var buffer = [];
        var subscription = new __WEBPACK_IMPORTED_MODULE_0__Subscription__["a" /* Subscription */]();
        var context = { buffer: buffer, subscription: subscription };
        contexts.push(context);
        var innerSubscription = Object(__WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__["a" /* subscribeToResult */])(this, closingNotifier, context);
        if (!innerSubscription || innerSubscription.closed) {
            this.closeBuffer(context);
        }
        else {
            innerSubscription.context = context;
            this.add(innerSubscription);
            subscription.add(innerSubscription);
        }
    };
    return BufferToggleSubscriber;
}(__WEBPACK_IMPORTED_MODULE_2__OuterSubscriber__["a" /* OuterSubscriber */]));
//# sourceMappingURL=bufferToggle.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/bufferWhen.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export bufferWhen */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_tryCatch__ = __webpack_require__("./node_modules/rxjs/_esm5/util/tryCatch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_errorObject__ = __webpack_require__("./node_modules/rxjs/_esm5/util/errorObject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__OuterSubscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/OuterSubscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_subscribeToResult__ = __webpack_require__("./node_modules/rxjs/_esm5/util/subscribeToResult.js");
/** PURE_IMPORTS_START .._Subscription,.._util_tryCatch,.._util_errorObject,.._OuterSubscriber,.._util_subscribeToResult PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};





/**
 * Buffers the source Observable values, using a factory function of closing
 * Observables to determine when to close, emit, and reset the buffer.
 *
 * <span class="informal">Collects values from the past as an array. When it
 * starts collecting values, it calls a function that returns an Observable that
 * tells when to close the buffer and restart collecting.</span>
 *
 * <img src="./img/bufferWhen.png" width="100%">
 *
 * Opens a buffer immediately, then closes the buffer when the observable
 * returned by calling `closingSelector` function emits a value. When it closes
 * the buffer, it immediately opens a new buffer and repeats the process.
 *
 * @example <caption>Emit an array of the last clicks every [1-5] random seconds</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferWhen(() =>
 *   Rx.Observable.interval(1000 + Math.random() * 4000)
 * );
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferCount}
 * @see {@link bufferTime}
 * @see {@link bufferToggle}
 * @see {@link windowWhen}
 *
 * @param {function(): Observable} closingSelector A function that takes no
 * arguments and returns an Observable that signals buffer closure.
 * @return {Observable<T[]>} An observable of arrays of buffered values.
 * @method bufferWhen
 * @owner Observable
 */
function bufferWhen(closingSelector) {
    return function (source) {
        return source.lift(new BufferWhenOperator(closingSelector));
    };
}
var BufferWhenOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function BufferWhenOperator(closingSelector) {
        this.closingSelector = closingSelector;
    }
    BufferWhenOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new BufferWhenSubscriber(subscriber, this.closingSelector));
    };
    return BufferWhenOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var BufferWhenSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(BufferWhenSubscriber, _super);
    function BufferWhenSubscriber(destination, closingSelector) {
        _super.call(this, destination);
        this.closingSelector = closingSelector;
        this.subscribing = false;
        this.openBuffer();
    }
    BufferWhenSubscriber.prototype._next = function (value) {
        this.buffer.push(value);
    };
    BufferWhenSubscriber.prototype._complete = function () {
        var buffer = this.buffer;
        if (buffer) {
            this.destination.next(buffer);
        }
        _super.prototype._complete.call(this);
    };
    BufferWhenSubscriber.prototype._unsubscribe = function () {
        this.buffer = null;
        this.subscribing = false;
    };
    BufferWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.openBuffer();
    };
    BufferWhenSubscriber.prototype.notifyComplete = function () {
        if (this.subscribing) {
            this.complete();
        }
        else {
            this.openBuffer();
        }
    };
    BufferWhenSubscriber.prototype.openBuffer = function () {
        var closingSubscription = this.closingSubscription;
        if (closingSubscription) {
            this.remove(closingSubscription);
            closingSubscription.unsubscribe();
        }
        var buffer = this.buffer;
        if (this.buffer) {
            this.destination.next(buffer);
        }
        this.buffer = [];
        var closingNotifier = Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(this.closingSelector)();
        if (closingNotifier === __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */]) {
            this.error(__WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */].e);
        }
        else {
            closingSubscription = new __WEBPACK_IMPORTED_MODULE_0__Subscription__["a" /* Subscription */]();
            this.closingSubscription = closingSubscription;
            this.add(closingSubscription);
            this.subscribing = true;
            closingSubscription.add(Object(__WEBPACK_IMPORTED_MODULE_4__util_subscribeToResult__["a" /* subscribeToResult */])(this, closingNotifier));
            this.subscribing = false;
        }
    };
    return BufferWhenSubscriber;
}(__WEBPACK_IMPORTED_MODULE_3__OuterSubscriber__["a" /* OuterSubscriber */]));
//# sourceMappingURL=bufferWhen.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/combineAll.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export combineAll */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_combineLatest__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/combineLatest.js");
/** PURE_IMPORTS_START .._operators_combineLatest PURE_IMPORTS_END */

function combineAll(project) {
    return function (source) { return source.lift(new __WEBPACK_IMPORTED_MODULE_0__operators_combineLatest__["a" /* CombineLatestOperator */](project)); };
}
//# sourceMappingURL=combineAll.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/combineLatest.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export combineLatest */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CombineLatestOperator; });
/* unused harmony export CombineLatestSubscriber */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__observable_ArrayObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/ArrayObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_isArray__ = __webpack_require__("./node_modules/rxjs/_esm5/util/isArray.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__OuterSubscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/OuterSubscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_subscribeToResult__ = __webpack_require__("./node_modules/rxjs/_esm5/util/subscribeToResult.js");
/** PURE_IMPORTS_START .._observable_ArrayObservable,.._util_isArray,.._OuterSubscriber,.._util_subscribeToResult PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};




var none = {};
/* tslint:enable:max-line-length */
/**
 * Combines multiple Observables to create an Observable whose values are
 * calculated from the latest values of each of its input Observables.
 *
 * <span class="informal">Whenever any input Observable emits a value, it
 * computes a formula using the latest values from all the inputs, then emits
 * the output of that formula.</span>
 *
 * <img src="./img/combineLatest.png" width="100%">
 *
 * `combineLatest` combines the values from this Observable with values from
 * Observables passed as arguments. This is done by subscribing to each
 * Observable, in order, and collecting an array of each of the most recent
 * values any time any of the input Observables emits, then either taking that
 * array and passing it as arguments to an optional `project` function and
 * emitting the return value of that, or just emitting the array of recent
 * values directly if there is no `project` function.
 *
 * @example <caption>Dynamically calculate the Body-Mass Index from an Observable of weight and one for height</caption>
 * var weight = Rx.Observable.of(70, 72, 76, 79, 75);
 * var height = Rx.Observable.of(1.76, 1.77, 1.78);
 * var bmi = weight.combineLatest(height, (w, h) => w / (h * h));
 * bmi.subscribe(x => console.log('BMI is ' + x));
 *
 * // With output to console:
 * // BMI is 24.212293388429753
 * // BMI is 23.93948099205209
 * // BMI is 23.671253629592222
 *
 * @see {@link combineAll}
 * @see {@link merge}
 * @see {@link withLatestFrom}
 *
 * @param {ObservableInput} other An input Observable to combine with the source
 * Observable. More than one input Observables may be given as argument.
 * @param {function} [project] An optional function to project the values from
 * the combined latest values into a new value on the output Observable.
 * @return {Observable} An Observable of projected values from the most recent
 * values from each input Observable, or an array of the most recent values from
 * each input Observable.
 * @method combineLatest
 * @owner Observable
 */
function combineLatest() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    var project = null;
    if (typeof observables[observables.length - 1] === 'function') {
        project = observables.pop();
    }
    // if the first and only other argument besides the resultSelector is an array
    // assume it's been called with `combineLatest([obs1, obs2, obs3], project)`
    if (observables.length === 1 && Object(__WEBPACK_IMPORTED_MODULE_1__util_isArray__["a" /* isArray */])(observables[0])) {
        observables = observables[0].slice();
    }
    return function (source) { return source.lift.call(new __WEBPACK_IMPORTED_MODULE_0__observable_ArrayObservable__["a" /* ArrayObservable */]([source].concat(observables)), new CombineLatestOperator(project)); };
}
var CombineLatestOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function CombineLatestOperator(project) {
        this.project = project;
    }
    CombineLatestOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new CombineLatestSubscriber(subscriber, this.project));
    };
    return CombineLatestOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var CombineLatestSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(CombineLatestSubscriber, _super);
    function CombineLatestSubscriber(destination, project) {
        _super.call(this, destination);
        this.project = project;
        this.active = 0;
        this.values = [];
        this.observables = [];
    }
    CombineLatestSubscriber.prototype._next = function (observable) {
        this.values.push(none);
        this.observables.push(observable);
    };
    CombineLatestSubscriber.prototype._complete = function () {
        var observables = this.observables;
        var len = observables.length;
        if (len === 0) {
            this.destination.complete();
        }
        else {
            this.active = len;
            this.toRespond = len;
            for (var i = 0; i < len; i++) {
                var observable = observables[i];
                this.add(Object(__WEBPACK_IMPORTED_MODULE_3__util_subscribeToResult__["a" /* subscribeToResult */])(this, observable, observable, i));
            }
        }
    };
    CombineLatestSubscriber.prototype.notifyComplete = function (unused) {
        if ((this.active -= 1) === 0) {
            this.destination.complete();
        }
    };
    CombineLatestSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        var values = this.values;
        var oldVal = values[outerIndex];
        var toRespond = !this.toRespond
            ? 0
            : oldVal === none ? --this.toRespond : this.toRespond;
        values[outerIndex] = innerValue;
        if (toRespond === 0) {
            if (this.project) {
                this._tryProject(values);
            }
            else {
                this.destination.next(values.slice());
            }
        }
    };
    CombineLatestSubscriber.prototype._tryProject = function (values) {
        var result;
        try {
            result = this.project.apply(this, values);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return CombineLatestSubscriber;
}(__WEBPACK_IMPORTED_MODULE_2__OuterSubscriber__["a" /* OuterSubscriber */]));
//# sourceMappingURL=combineLatest.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/concat.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export concat */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__observable_concat__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/concat.js");
/* unused harmony reexport concatStatic */
/** PURE_IMPORTS_START .._observable_concat PURE_IMPORTS_END */


/* tslint:enable:max-line-length */
/**
 * Creates an output Observable which sequentially emits all values from every
 * given input Observable after the current Observable.
 *
 * <span class="informal">Concatenates multiple Observables together by
 * sequentially emitting their values, one Observable after the other.</span>
 *
 * <img src="./img/concat.png" width="100%">
 *
 * Joins this Observable with multiple other Observables by subscribing to them
 * one at a time, starting with the source, and merging their results into the
 * output Observable. Will wait for each Observable to complete before moving
 * on to the next.
 *
 * @example <caption>Concatenate a timer counting from 0 to 3 with a synchronous sequence from 1 to 10</caption>
 * var timer = Rx.Observable.interval(1000).take(4);
 * var sequence = Rx.Observable.range(1, 10);
 * var result = timer.concat(sequence);
 * result.subscribe(x => console.log(x));
 *
 * // results in:
 * // 1000ms-> 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3 -immediate-> 1 ... 10
 *
 * @example <caption>Concatenate 3 Observables</caption>
 * var timer1 = Rx.Observable.interval(1000).take(10);
 * var timer2 = Rx.Observable.interval(2000).take(6);
 * var timer3 = Rx.Observable.interval(500).take(10);
 * var result = timer1.concat(timer2, timer3);
 * result.subscribe(x => console.log(x));
 *
 * // results in the following:
 * // (Prints to console sequentially)
 * // -1000ms-> 0 -1000ms-> 1 -1000ms-> ... 9
 * // -2000ms-> 0 -2000ms-> 1 -2000ms-> ... 5
 * // -500ms-> 0 -500ms-> 1 -500ms-> ... 9
 *
 * @see {@link concatAll}
 * @see {@link concatMap}
 * @see {@link concatMapTo}
 *
 * @param {ObservableInput} other An input Observable to concatenate after the source
 * Observable. More than one input Observables may be given as argument.
 * @param {Scheduler} [scheduler=null] An optional IScheduler to schedule each
 * Observable subscription on.
 * @return {Observable} All values of each passed Observable merged into a
 * single Observable, in order, in serial fashion.
 * @method concat
 * @owner Observable
 */
function concat() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    return function (source) { return source.lift.call(__WEBPACK_IMPORTED_MODULE_0__observable_concat__["a" /* concat */].apply(void 0, [source].concat(observables))); };
}
//# sourceMappingURL=concat.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/concatMapTo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export concatMapTo */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__concatMap__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/concatMap.js");
/** PURE_IMPORTS_START ._concatMap PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Projects each source value to the same Observable which is merged multiple
 * times in a serialized fashion on the output Observable.
 *
 * <span class="informal">It's like {@link concatMap}, but maps each value
 * always to the same inner Observable.</span>
 *
 * <img src="./img/concatMapTo.png" width="100%">
 *
 * Maps each source value to the given Observable `innerObservable` regardless
 * of the source value, and then flattens those resulting Observables into one
 * single Observable, which is the output Observable. Each new `innerObservable`
 * instance emitted on the output Observable is concatenated with the previous
 * `innerObservable` instance.
 *
 * __Warning:__ if source values arrive endlessly and faster than their
 * corresponding inner Observables can complete, it will result in memory issues
 * as inner Observables amass in an unbounded buffer waiting for their turn to
 * be subscribed to.
 *
 * Note: `concatMapTo` is equivalent to `mergeMapTo` with concurrency parameter
 * set to `1`.
 *
 * @example <caption>For each click event, tick every second from 0 to 3, with no concurrency</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.concatMapTo(Rx.Observable.interval(1000).take(4));
 * result.subscribe(x => console.log(x));
 *
 * // Results in the following:
 * // (results are not concurrent)
 * // For every click on the "document" it will emit values 0 to 3 spaced
 * // on a 1000ms interval
 * // one click = 1000ms-> 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3
 *
 * @see {@link concat}
 * @see {@link concatAll}
 * @see {@link concatMap}
 * @see {@link mergeMapTo}
 * @see {@link switchMapTo}
 *
 * @param {ObservableInput} innerObservable An Observable to replace each value from
 * the source Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @return {Observable} An observable of values merged together by joining the
 * passed observable with itself, one after the other, for each value emitted
 * from the source.
 * @method concatMapTo
 * @owner Observable
 */
function concatMapTo(innerObservable, resultSelector) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__concatMap__["a" /* concatMap */])(function () { return innerObservable; }, resultSelector);
}
//# sourceMappingURL=concatMapTo.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/count.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export count */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscriber.js");
/** PURE_IMPORTS_START .._Subscriber PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * Counts the number of emissions on the source and emits that number when the
 * source completes.
 *
 * <span class="informal">Tells how many values were emitted, when the source
 * completes.</span>
 *
 * <img src="./img/count.png" width="100%">
 *
 * `count` transforms an Observable that emits values into an Observable that
 * emits a single value that represents the number of values emitted by the
 * source Observable. If the source Observable terminates with an error, `count`
 * will pass this error notification along without emitting a value first. If
 * the source Observable does not terminate at all, `count` will neither emit
 * a value nor terminate. This operator takes an optional `predicate` function
 * as argument, in which case the output emission will represent the number of
 * source values that matched `true` with the `predicate`.
 *
 * @example <caption>Counts how many seconds have passed before the first click happened</caption>
 * var seconds = Rx.Observable.interval(1000);
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var secondsBeforeClick = seconds.takeUntil(clicks);
 * var result = secondsBeforeClick.count();
 * result.subscribe(x => console.log(x));
 *
 * @example <caption>Counts how many odd numbers are there between 1 and 7</caption>
 * var numbers = Rx.Observable.range(1, 7);
 * var result = numbers.count(i => i % 2 === 1);
 * result.subscribe(x => console.log(x));
 *
 * // Results in:
 * // 4
 *
 * @see {@link max}
 * @see {@link min}
 * @see {@link reduce}
 *
 * @param {function(value: T, i: number, source: Observable<T>): boolean} [predicate] A
 * boolean function to select what values are to be counted. It is provided with
 * arguments of:
 * - `value`: the value from the source Observable.
 * - `index`: the (zero-based) "index" of the value from the source Observable.
 * - `source`: the source Observable instance itself.
 * @return {Observable} An Observable of one number that represents the count as
 * described above.
 * @method count
 * @owner Observable
 */
function count(predicate) {
    return function (source) { return source.lift(new CountOperator(predicate, source)); };
}
var CountOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function CountOperator(predicate, source) {
        this.predicate = predicate;
        this.source = source;
    }
    CountOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new CountSubscriber(subscriber, this.predicate, this.source));
    };
    return CountOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var CountSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(CountSubscriber, _super);
    function CountSubscriber(destination, predicate, source) {
        _super.call(this, destination);
        this.predicate = predicate;
        this.source = source;
        this.count = 0;
        this.index = 0;
    }
    CountSubscriber.prototype._next = function (value) {
        if (this.predicate) {
            this._tryPredicate(value);
        }
        else {
            this.count++;
        }
    };
    CountSubscriber.prototype._tryPredicate = function (value) {
        var result;
        try {
            result = this.predicate(value, this.index++, this.source);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        if (result) {
            this.count++;
        }
    };
    CountSubscriber.prototype._complete = function () {
        this.destination.next(this.count);
        this.destination.complete();
    };
    return CountSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */]));
//# sourceMappingURL=count.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/debounce.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export debounce */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__OuterSubscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/OuterSubscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__ = __webpack_require__("./node_modules/rxjs/_esm5/util/subscribeToResult.js");
/** PURE_IMPORTS_START .._OuterSubscriber,.._util_subscribeToResult PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/**
 * Emits a value from the source Observable only after a particular time span
 * determined by another Observable has passed without another source emission.
 *
 * <span class="informal">It's like {@link debounceTime}, but the time span of
 * emission silence is determined by a second Observable.</span>
 *
 * <img src="./img/debounce.png" width="100%">
 *
 * `debounce` delays values emitted by the source Observable, but drops previous
 * pending delayed emissions if a new value arrives on the source Observable.
 * This operator keeps track of the most recent value from the source
 * Observable, and spawns a duration Observable by calling the
 * `durationSelector` function. The value is emitted only when the duration
 * Observable emits a value or completes, and if no other value was emitted on
 * the source Observable since the duration Observable was spawned. If a new
 * value appears before the duration Observable emits, the previous value will
 * be dropped and will not be emitted on the output Observable.
 *
 * Like {@link debounceTime}, this is a rate-limiting operator, and also a
 * delay-like operator since output emissions do not necessarily occur at the
 * same time as they did on the source Observable.
 *
 * @example <caption>Emit the most recent click after a burst of clicks</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.debounce(() => Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link audit}
 * @see {@link debounceTime}
 * @see {@link delayWhen}
 * @see {@link throttle}
 *
 * @param {function(value: T): SubscribableOrPromise} durationSelector A function
 * that receives a value from the source Observable, for computing the timeout
 * duration for each source value, returned as an Observable or a Promise.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by the specified duration Observable returned by
 * `durationSelector`, and may drop some values if they occur too frequently.
 * @method debounce
 * @owner Observable
 */
function debounce(durationSelector) {
    return function (source) { return source.lift(new DebounceOperator(durationSelector)); };
}
var DebounceOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function DebounceOperator(durationSelector) {
        this.durationSelector = durationSelector;
    }
    DebounceOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DebounceSubscriber(subscriber, this.durationSelector));
    };
    return DebounceOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DebounceSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(DebounceSubscriber, _super);
    function DebounceSubscriber(destination, durationSelector) {
        _super.call(this, destination);
        this.durationSelector = durationSelector;
        this.hasValue = false;
        this.durationSubscription = null;
    }
    DebounceSubscriber.prototype._next = function (value) {
        try {
            var result = this.durationSelector.call(this, value);
            if (result) {
                this._tryNext(value, result);
            }
        }
        catch (err) {
            this.destination.error(err);
        }
    };
    DebounceSubscriber.prototype._complete = function () {
        this.emitValue();
        this.destination.complete();
    };
    DebounceSubscriber.prototype._tryNext = function (value, duration) {
        var subscription = this.durationSubscription;
        this.value = value;
        this.hasValue = true;
        if (subscription) {
            subscription.unsubscribe();
            this.remove(subscription);
        }
        subscription = Object(__WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__["a" /* subscribeToResult */])(this, duration);
        if (!subscription.closed) {
            this.add(this.durationSubscription = subscription);
        }
    };
    DebounceSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.emitValue();
    };
    DebounceSubscriber.prototype.notifyComplete = function () {
        this.emitValue();
    };
    DebounceSubscriber.prototype.emitValue = function () {
        if (this.hasValue) {
            var value = this.value;
            var subscription = this.durationSubscription;
            if (subscription) {
                this.durationSubscription = null;
                subscription.unsubscribe();
                this.remove(subscription);
            }
            this.value = null;
            this.hasValue = false;
            _super.prototype._next.call(this, value);
        }
    };
    return DebounceSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__OuterSubscriber__["a" /* OuterSubscriber */]));
//# sourceMappingURL=debounce.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/debounceTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = debounceTime;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scheduler_async__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/async.js");
/** PURE_IMPORTS_START .._Subscriber,.._scheduler_async PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/**
 * Emits a value from the source Observable only after a particular time span
 * has passed without another source emission.
 *
 * <span class="informal">It's like {@link delay}, but passes only the most
 * recent value from each burst of emissions.</span>
 *
 * <img src="./img/debounceTime.png" width="100%">
 *
 * `debounceTime` delays values emitted by the source Observable, but drops
 * previous pending delayed emissions if a new value arrives on the source
 * Observable. This operator keeps track of the most recent value from the
 * source Observable, and emits that only when `dueTime` enough time has passed
 * without any other value appearing on the source Observable. If a new value
 * appears before `dueTime` silence occurs, the previous value will be dropped
 * and will not be emitted on the output Observable.
 *
 * This is a rate-limiting operator, because it is impossible for more than one
 * value to be emitted in any time window of duration `dueTime`, but it is also
 * a delay-like operator since output emissions do not occur at the same time as
 * they did on the source Observable. Optionally takes a {@link IScheduler} for
 * managing timers.
 *
 * @example <caption>Emit the most recent click after a burst of clicks</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.debounceTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounce}
 * @see {@link delay}
 * @see {@link sampleTime}
 * @see {@link throttleTime}
 *
 * @param {number} dueTime The timeout duration in milliseconds (or the time
 * unit determined internally by the optional `scheduler`) for the window of
 * time required to wait for emission silence before emitting the most recent
 * source value.
 * @param {Scheduler} [scheduler=async] The {@link IScheduler} to use for
 * managing the timers that handle the timeout for each value.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by the specified `dueTime`, and may drop some values if they occur
 * too frequently.
 * @method debounceTime
 * @owner Observable
 */
function debounceTime(dueTime, scheduler) {
    if (scheduler === void 0) {
        scheduler = __WEBPACK_IMPORTED_MODULE_1__scheduler_async__["a" /* async */];
    }
    return function (source) { return source.lift(new DebounceTimeOperator(dueTime, scheduler)); };
}
var DebounceTimeOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function DebounceTimeOperator(dueTime, scheduler) {
        this.dueTime = dueTime;
        this.scheduler = scheduler;
    }
    DebounceTimeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
    };
    return DebounceTimeOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DebounceTimeSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(DebounceTimeSubscriber, _super);
    function DebounceTimeSubscriber(destination, dueTime, scheduler) {
        _super.call(this, destination);
        this.dueTime = dueTime;
        this.scheduler = scheduler;
        this.debouncedSubscription = null;
        this.lastValue = null;
        this.hasValue = false;
    }
    DebounceTimeSubscriber.prototype._next = function (value) {
        this.clearDebounce();
        this.lastValue = value;
        this.hasValue = true;
        this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
    };
    DebounceTimeSubscriber.prototype._complete = function () {
        this.debouncedNext();
        this.destination.complete();
    };
    DebounceTimeSubscriber.prototype.debouncedNext = function () {
        this.clearDebounce();
        if (this.hasValue) {
            this.destination.next(this.lastValue);
            this.lastValue = null;
            this.hasValue = false;
        }
    };
    DebounceTimeSubscriber.prototype.clearDebounce = function () {
        var debouncedSubscription = this.debouncedSubscription;
        if (debouncedSubscription !== null) {
            this.remove(debouncedSubscription);
            debouncedSubscription.unsubscribe();
            this.debouncedSubscription = null;
        }
    };
    return DebounceTimeSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */]));
function dispatchNext(subscriber) {
    subscriber.debouncedNext();
}
//# sourceMappingURL=debounceTime.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/delay.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export delay */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scheduler_async__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/async.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_isDate__ = __webpack_require__("./node_modules/rxjs/_esm5/util/isDate.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Subscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Notification__ = __webpack_require__("./node_modules/rxjs/_esm5/Notification.js");
/** PURE_IMPORTS_START .._scheduler_async,.._util_isDate,.._Subscriber,.._Notification PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};




/**
 * Delays the emission of items from the source Observable by a given timeout or
 * until a given Date.
 *
 * <span class="informal">Time shifts each item by some specified amount of
 * milliseconds.</span>
 *
 * <img src="./img/delay.png" width="100%">
 *
 * If the delay argument is a Number, this operator time shifts the source
 * Observable by that amount of time expressed in milliseconds. The relative
 * time intervals between the values are preserved.
 *
 * If the delay argument is a Date, this operator time shifts the start of the
 * Observable execution until the given date occurs.
 *
 * @example <caption>Delay each click by one second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var delayedClicks = clicks.delay(1000); // each click emitted after 1 second
 * delayedClicks.subscribe(x => console.log(x));
 *
 * @example <caption>Delay all clicks until a future date happens</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var date = new Date('March 15, 2050 12:00:00'); // in the future
 * var delayedClicks = clicks.delay(date); // click emitted only after that date
 * delayedClicks.subscribe(x => console.log(x));
 *
 * @see {@link debounceTime}
 * @see {@link delayWhen}
 *
 * @param {number|Date} delay The delay duration in milliseconds (a `number`) or
 * a `Date` until which the emission of the source items is delayed.
 * @param {Scheduler} [scheduler=async] The IScheduler to use for
 * managing the timers that handle the time-shift for each item.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by the specified timeout or Date.
 * @method delay
 * @owner Observable
 */
function delay(delay, scheduler) {
    if (scheduler === void 0) {
        scheduler = __WEBPACK_IMPORTED_MODULE_0__scheduler_async__["a" /* async */];
    }
    var absoluteDelay = Object(__WEBPACK_IMPORTED_MODULE_1__util_isDate__["a" /* isDate */])(delay);
    var delayFor = absoluteDelay ? (+delay - scheduler.now()) : Math.abs(delay);
    return function (source) { return source.lift(new DelayOperator(delayFor, scheduler)); };
}
var DelayOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function DelayOperator(delay, scheduler) {
        this.delay = delay;
        this.scheduler = scheduler;
    }
    DelayOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DelaySubscriber(subscriber, this.delay, this.scheduler));
    };
    return DelayOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DelaySubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(DelaySubscriber, _super);
    function DelaySubscriber(destination, delay, scheduler) {
        _super.call(this, destination);
        this.delay = delay;
        this.scheduler = scheduler;
        this.queue = [];
        this.active = false;
        this.errored = false;
    }
    DelaySubscriber.dispatch = function (state) {
        var source = state.source;
        var queue = source.queue;
        var scheduler = state.scheduler;
        var destination = state.destination;
        while (queue.length > 0 && (queue[0].time - scheduler.now()) <= 0) {
            queue.shift().notification.observe(destination);
        }
        if (queue.length > 0) {
            var delay_1 = Math.max(0, queue[0].time - scheduler.now());
            this.schedule(state, delay_1);
        }
        else {
            source.active = false;
        }
    };
    DelaySubscriber.prototype._schedule = function (scheduler) {
        this.active = true;
        this.add(scheduler.schedule(DelaySubscriber.dispatch, this.delay, {
            source: this, destination: this.destination, scheduler: scheduler
        }));
    };
    DelaySubscriber.prototype.scheduleNotification = function (notification) {
        if (this.errored === true) {
            return;
        }
        var scheduler = this.scheduler;
        var message = new DelayMessage(scheduler.now() + this.delay, notification);
        this.queue.push(message);
        if (this.active === false) {
            this._schedule(scheduler);
        }
    };
    DelaySubscriber.prototype._next = function (value) {
        this.scheduleNotification(__WEBPACK_IMPORTED_MODULE_3__Notification__["a" /* Notification */].createNext(value));
    };
    DelaySubscriber.prototype._error = function (err) {
        this.errored = true;
        this.queue = [];
        this.destination.error(err);
    };
    DelaySubscriber.prototype._complete = function () {
        this.scheduleNotification(__WEBPACK_IMPORTED_MODULE_3__Notification__["a" /* Notification */].createComplete());
    };
    return DelaySubscriber;
}(__WEBPACK_IMPORTED_MODULE_2__Subscriber__["a" /* Subscriber */]));
var DelayMessage = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function DelayMessage(time, notification) {
        this.time = time;
        this.notification = notification;
    }
    return DelayMessage;
}());
//# sourceMappingURL=delay.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/delayWhen.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export delayWhen */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__OuterSubscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/OuterSubscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_subscribeToResult__ = __webpack_require__("./node_modules/rxjs/_esm5/util/subscribeToResult.js");
/** PURE_IMPORTS_START .._Subscriber,.._Observable,.._OuterSubscriber,.._util_subscribeToResult PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};




/**
 * Delays the emission of items from the source Observable by a given time span
 * determined by the emissions of another Observable.
 *
 * <span class="informal">It's like {@link delay}, but the time span of the
 * delay duration is determined by a second Observable.</span>
 *
 * <img src="./img/delayWhen.png" width="100%">
 *
 * `delayWhen` time shifts each emitted value from the source Observable by a
 * time span determined by another Observable. When the source emits a value,
 * the `delayDurationSelector` function is called with the source value as
 * argument, and should return an Observable, called the "duration" Observable.
 * The source value is emitted on the output Observable only when the duration
 * Observable emits a value or completes.
 *
 * Optionally, `delayWhen` takes a second argument, `subscriptionDelay`, which
 * is an Observable. When `subscriptionDelay` emits its first value or
 * completes, the source Observable is subscribed to and starts behaving like
 * described in the previous paragraph. If `subscriptionDelay` is not provided,
 * `delayWhen` will subscribe to the source Observable as soon as the output
 * Observable is subscribed.
 *
 * @example <caption>Delay each click by a random amount of time, between 0 and 5 seconds</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var delayedClicks = clicks.delayWhen(event =>
 *   Rx.Observable.interval(Math.random() * 5000)
 * );
 * delayedClicks.subscribe(x => console.log(x));
 *
 * @see {@link debounce}
 * @see {@link delay}
 *
 * @param {function(value: T): Observable} delayDurationSelector A function that
 * returns an Observable for each value emitted by the source Observable, which
 * is then used to delay the emission of that item on the output Observable
 * until the Observable returned from this function emits a value.
 * @param {Observable} subscriptionDelay An Observable that triggers the
 * subscription to the source Observable once it emits any value.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by an amount of time specified by the Observable returned by
 * `delayDurationSelector`.
 * @method delayWhen
 * @owner Observable
 */
function delayWhen(delayDurationSelector, subscriptionDelay) {
    if (subscriptionDelay) {
        return function (source) {
            return new SubscriptionDelayObservable(source, subscriptionDelay)
                .lift(new DelayWhenOperator(delayDurationSelector));
        };
    }
    return function (source) { return source.lift(new DelayWhenOperator(delayDurationSelector)); };
}
var DelayWhenOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function DelayWhenOperator(delayDurationSelector) {
        this.delayDurationSelector = delayDurationSelector;
    }
    DelayWhenOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DelayWhenSubscriber(subscriber, this.delayDurationSelector));
    };
    return DelayWhenOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DelayWhenSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(DelayWhenSubscriber, _super);
    function DelayWhenSubscriber(destination, delayDurationSelector) {
        _super.call(this, destination);
        this.delayDurationSelector = delayDurationSelector;
        this.completed = false;
        this.delayNotifierSubscriptions = [];
        this.values = [];
    }
    DelayWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.destination.next(outerValue);
        this.removeSubscription(innerSub);
        this.tryComplete();
    };
    DelayWhenSubscriber.prototype.notifyError = function (error, innerSub) {
        this._error(error);
    };
    DelayWhenSubscriber.prototype.notifyComplete = function (innerSub) {
        var value = this.removeSubscription(innerSub);
        if (value) {
            this.destination.next(value);
        }
        this.tryComplete();
    };
    DelayWhenSubscriber.prototype._next = function (value) {
        try {
            var delayNotifier = this.delayDurationSelector(value);
            if (delayNotifier) {
                this.tryDelay(delayNotifier, value);
            }
        }
        catch (err) {
            this.destination.error(err);
        }
    };
    DelayWhenSubscriber.prototype._complete = function () {
        this.completed = true;
        this.tryComplete();
    };
    DelayWhenSubscriber.prototype.removeSubscription = function (subscription) {
        subscription.unsubscribe();
        var subscriptionIdx = this.delayNotifierSubscriptions.indexOf(subscription);
        var value = null;
        if (subscriptionIdx !== -1) {
            value = this.values[subscriptionIdx];
            this.delayNotifierSubscriptions.splice(subscriptionIdx, 1);
            this.values.splice(subscriptionIdx, 1);
        }
        return value;
    };
    DelayWhenSubscriber.prototype.tryDelay = function (delayNotifier, value) {
        var notifierSubscription = Object(__WEBPACK_IMPORTED_MODULE_3__util_subscribeToResult__["a" /* subscribeToResult */])(this, delayNotifier, value);
        if (notifierSubscription && !notifierSubscription.closed) {
            this.add(notifierSubscription);
            this.delayNotifierSubscriptions.push(notifierSubscription);
        }
        this.values.push(value);
    };
    DelayWhenSubscriber.prototype.tryComplete = function () {
        if (this.completed && this.delayNotifierSubscriptions.length === 0) {
            this.destination.complete();
        }
    };
    return DelayWhenSubscriber;
}(__WEBPACK_IMPORTED_MODULE_2__OuterSubscriber__["a" /* OuterSubscriber */]));
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SubscriptionDelayObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(SubscriptionDelayObservable, _super);
    function SubscriptionDelayObservable(source, subscriptionDelay) {
        _super.call(this);
        this.source = source;
        this.subscriptionDelay = subscriptionDelay;
    }
    SubscriptionDelayObservable.prototype._subscribe = function (subscriber) {
        this.subscriptionDelay.subscribe(new SubscriptionDelaySubscriber(subscriber, this.source));
    };
    return SubscriptionDelayObservable;
}(__WEBPACK_IMPORTED_MODULE_1__Observable__["a" /* Observable */]));
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SubscriptionDelaySubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(SubscriptionDelaySubscriber, _super);
    function SubscriptionDelaySubscriber(parent, source) {
        _super.call(this);
        this.parent = parent;
        this.source = source;
        this.sourceSubscribed = false;
    }
    SubscriptionDelaySubscriber.prototype._next = function (unused) {
        this.subscribeToSource();
    };
    SubscriptionDelaySubscriber.prototype._error = function (err) {
        this.unsubscribe();
        this.parent.error(err);
    };
    SubscriptionDelaySubscriber.prototype._complete = function () {
        this.subscribeToSource();
    };
    SubscriptionDelaySubscriber.prototype.subscribeToSource = function () {
        if (!this.sourceSubscribed) {
            this.sourceSubscribed = true;
            this.unsubscribe();
            this.source.subscribe(this.parent);
        }
    };
    return SubscriptionDelaySubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */]));
//# sourceMappingURL=delayWhen.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/dematerialize.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export dematerialize */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscriber.js");
/** PURE_IMPORTS_START .._Subscriber PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * Converts an Observable of {@link Notification} objects into the emissions
 * that they represent.
 *
 * <span class="informal">Unwraps {@link Notification} objects as actual `next`,
 * `error` and `complete` emissions. The opposite of {@link materialize}.</span>
 *
 * <img src="./img/dematerialize.png" width="100%">
 *
 * `dematerialize` is assumed to operate an Observable that only emits
 * {@link Notification} objects as `next` emissions, and does not emit any
 * `error`. Such Observable is the output of a `materialize` operation. Those
 * notifications are then unwrapped using the metadata they contain, and emitted
 * as `next`, `error`, and `complete` on the output Observable.
 *
 * Use this operator in conjunction with {@link materialize}.
 *
 * @example <caption>Convert an Observable of Notifications to an actual Observable</caption>
 * var notifA = new Rx.Notification('N', 'A');
 * var notifB = new Rx.Notification('N', 'B');
 * var notifE = new Rx.Notification('E', void 0,
 *   new TypeError('x.toUpperCase is not a function')
 * );
 * var materialized = Rx.Observable.of(notifA, notifB, notifE);
 * var upperCase = materialized.dematerialize();
 * upperCase.subscribe(x => console.log(x), e => console.error(e));
 *
 * // Results in:
 * // A
 * // B
 * // TypeError: x.toUpperCase is not a function
 *
 * @see {@link Notification}
 * @see {@link materialize}
 *
 * @return {Observable} An Observable that emits items and notifications
 * embedded in Notification objects emitted by the source Observable.
 * @method dematerialize
 * @owner Observable
 */
function dematerialize() {
    return function dematerializeOperatorFunction(source) {
        return source.lift(new DeMaterializeOperator());
    };
}
var DeMaterializeOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function DeMaterializeOperator() {
    }
    DeMaterializeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DeMaterializeSubscriber(subscriber));
    };
    return DeMaterializeOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DeMaterializeSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(DeMaterializeSubscriber, _super);
    function DeMaterializeSubscriber(destination) {
        _super.call(this, destination);
    }
    DeMaterializeSubscriber.prototype._next = function (value) {
        value.observe(this.destination);
    };
    return DeMaterializeSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */]));
//# sourceMappingURL=dematerialize.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/distinct.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export distinct */
/* unused harmony export DistinctSubscriber */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__OuterSubscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/OuterSubscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__ = __webpack_require__("./node_modules/rxjs/_esm5/util/subscribeToResult.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_Set__ = __webpack_require__("./node_modules/rxjs/_esm5/util/Set.js");
/** PURE_IMPORTS_START .._OuterSubscriber,.._util_subscribeToResult,.._util_Set PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



/**
 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from previous items.
 *
 * If a keySelector function is provided, then it will project each value from the source observable into a new value that it will
 * check for equality with previously projected values. If a keySelector function is not provided, it will use each value from the
 * source observable directly with an equality check against previous values.
 *
 * In JavaScript runtimes that support `Set`, this operator will use a `Set` to improve performance of the distinct value checking.
 *
 * In other runtimes, this operator will use a minimal implementation of `Set` that relies on an `Array` and `indexOf` under the
 * hood, so performance will degrade as more values are checked for distinction. Even in newer browsers, a long-running `distinct`
 * use might result in memory leaks. To help alleviate this in some scenarios, an optional `flushes` parameter is also provided so
 * that the internal `Set` can be "flushed", basically clearing it of values.
 *
 * @example <caption>A simple example with numbers</caption>
 * Observable.of(1, 1, 2, 2, 2, 1, 2, 3, 4, 3, 2, 1)
 *   .distinct()
 *   .subscribe(x => console.log(x)); // 1, 2, 3, 4
 *
 * @example <caption>An example using a keySelector function</caption>
 * interface Person {
 *    age: number,
 *    name: string
 * }
 *
 * Observable.of<Person>(
 *     { age: 4, name: 'Foo'},
 *     { age: 7, name: 'Bar'},
 *     { age: 5, name: 'Foo'})
 *     .distinct((p: Person) => p.name)
 *     .subscribe(x => console.log(x));
 *
 * // displays:
 * // { age: 4, name: 'Foo' }
 * // { age: 7, name: 'Bar' }
 *
 * @see {@link distinctUntilChanged}
 * @see {@link distinctUntilKeyChanged}
 *
 * @param {function} [keySelector] Optional function to select which value you want to check as distinct.
 * @param {Observable} [flushes] Optional Observable for flushing the internal HashSet of the operator.
 * @return {Observable} An Observable that emits items from the source Observable with distinct values.
 * @method distinct
 * @owner Observable
 */
function distinct(keySelector, flushes) {
    return function (source) { return source.lift(new DistinctOperator(keySelector, flushes)); };
}
var DistinctOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function DistinctOperator(keySelector, flushes) {
        this.keySelector = keySelector;
        this.flushes = flushes;
    }
    DistinctOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DistinctSubscriber(subscriber, this.keySelector, this.flushes));
    };
    return DistinctOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DistinctSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(DistinctSubscriber, _super);
    function DistinctSubscriber(destination, keySelector, flushes) {
        _super.call(this, destination);
        this.keySelector = keySelector;
        this.values = new __WEBPACK_IMPORTED_MODULE_2__util_Set__["a" /* Set */]();
        if (flushes) {
            this.add(Object(__WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__["a" /* subscribeToResult */])(this, flushes));
        }
    }
    DistinctSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.values.clear();
    };
    DistinctSubscriber.prototype.notifyError = function (error, innerSub) {
        this._error(error);
    };
    DistinctSubscriber.prototype._next = function (value) {
        if (this.keySelector) {
            this._useKeySelector(value);
        }
        else {
            this._finalizeNext(value, value);
        }
    };
    DistinctSubscriber.prototype._useKeySelector = function (value) {
        var key;
        var destination = this.destination;
        try {
            key = this.keySelector(value);
        }
        catch (err) {
            destination.error(err);
            return;
        }
        this._finalizeNext(key, value);
    };
    DistinctSubscriber.prototype._finalizeNext = function (key, value) {
        var values = this.values;
        if (!values.has(key)) {
            values.add(key);
            this.destination.next(value);
        }
    };
    return DistinctSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__OuterSubscriber__["a" /* OuterSubscriber */]));
//# sourceMappingURL=distinct.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/distinctUntilChanged.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = distinctUntilChanged;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_tryCatch__ = __webpack_require__("./node_modules/rxjs/_esm5/util/tryCatch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_errorObject__ = __webpack_require__("./node_modules/rxjs/_esm5/util/errorObject.js");
/** PURE_IMPORTS_START .._Subscriber,.._util_tryCatch,.._util_errorObject PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



/* tslint:enable:max-line-length */
/**
 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from the previous item.
 *
 * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
 *
 * If a comparator function is not provided, an equality check is used by default.
 *
 * @example <caption>A simple example with numbers</caption>
 * Observable.of(1, 1, 2, 2, 2, 1, 1, 2, 3, 3, 4)
 *   .distinctUntilChanged()
 *   .subscribe(x => console.log(x)); // 1, 2, 1, 2, 3, 4
 *
 * @example <caption>An example using a compare function</caption>
 * interface Person {
 *    age: number,
 *    name: string
 * }
 *
 * Observable.of<Person>(
 *     { age: 4, name: 'Foo'},
 *     { age: 7, name: 'Bar'},
 *     { age: 5, name: 'Foo'})
 *     { age: 6, name: 'Foo'})
 *     .distinctUntilChanged((p: Person, q: Person) => p.name === q.name)
 *     .subscribe(x => console.log(x));
 *
 * // displays:
 * // { age: 4, name: 'Foo' }
 * // { age: 7, name: 'Bar' }
 * // { age: 5, name: 'Foo' }
 *
 * @see {@link distinct}
 * @see {@link distinctUntilKeyChanged}
 *
 * @param {function} [compare] Optional comparison function called to test if an item is distinct from the previous item in the source.
 * @return {Observable} An Observable that emits items from the source Observable with distinct values.
 * @method distinctUntilChanged
 * @owner Observable
 */
function distinctUntilChanged(compare, keySelector) {
    return function (source) { return source.lift(new DistinctUntilChangedOperator(compare, keySelector)); };
}
var DistinctUntilChangedOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function DistinctUntilChangedOperator(compare, keySelector) {
        this.compare = compare;
        this.keySelector = keySelector;
    }
    DistinctUntilChangedOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DistinctUntilChangedSubscriber(subscriber, this.compare, this.keySelector));
    };
    return DistinctUntilChangedOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DistinctUntilChangedSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(DistinctUntilChangedSubscriber, _super);
    function DistinctUntilChangedSubscriber(destination, compare, keySelector) {
        _super.call(this, destination);
        this.keySelector = keySelector;
        this.hasKey = false;
        if (typeof compare === 'function') {
            this.compare = compare;
        }
    }
    DistinctUntilChangedSubscriber.prototype.compare = function (x, y) {
        return x === y;
    };
    DistinctUntilChangedSubscriber.prototype._next = function (value) {
        var keySelector = this.keySelector;
        var key = value;
        if (keySelector) {
            key = Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(this.keySelector)(value);
            if (key === __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */]) {
                return this.destination.error(__WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */].e);
            }
        }
        var result = false;
        if (this.hasKey) {
            result = Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(this.compare)(this.key, key);
            if (result === __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */]) {
                return this.destination.error(__WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */].e);
            }
        }
        else {
            this.hasKey = true;
        }
        if (Boolean(result) === false) {
            this.key = key;
            this.destination.next(value);
        }
    };
    return DistinctUntilChangedSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */]));
//# sourceMappingURL=distinctUntilChanged.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/distinctUntilKeyChanged.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export distinctUntilKeyChanged */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__distinctUntilChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/distinctUntilChanged.js");
/** PURE_IMPORTS_START ._distinctUntilChanged PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from the previous item,
 * using a property accessed by using the key provided to check if the two items are distinct.
 *
 * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
 *
 * If a comparator function is not provided, an equality check is used by default.
 *
 * @example <caption>An example comparing the name of persons</caption>
 *
 *  interface Person {
 *     age: number,
 *     name: string
 *  }
 *
 * Observable.of<Person>(
 *     { age: 4, name: 'Foo'},
 *     { age: 7, name: 'Bar'},
 *     { age: 5, name: 'Foo'},
 *     { age: 6, name: 'Foo'})
 *     .distinctUntilKeyChanged('name')
 *     .subscribe(x => console.log(x));
 *
 * // displays:
 * // { age: 4, name: 'Foo' }
 * // { age: 7, name: 'Bar' }
 * // { age: 5, name: 'Foo' }
 *
 * @example <caption>An example comparing the first letters of the name</caption>
 *
 * interface Person {
 *     age: number,
 *     name: string
 *  }
 *
 * Observable.of<Person>(
 *     { age: 4, name: 'Foo1'},
 *     { age: 7, name: 'Bar'},
 *     { age: 5, name: 'Foo2'},
 *     { age: 6, name: 'Foo3'})
 *     .distinctUntilKeyChanged('name', (x: string, y: string) => x.substring(0, 3) === y.substring(0, 3))
 *     .subscribe(x => console.log(x));
 *
 * // displays:
 * // { age: 4, name: 'Foo1' }
 * // { age: 7, name: 'Bar' }
 * // { age: 5, name: 'Foo2' }
 *
 * @see {@link distinct}
 * @see {@link distinctUntilChanged}
 *
 * @param {string} key String key for object property lookup on each item.
 * @param {function} [compare] Optional comparison function called to test if an item is distinct from the previous item in the source.
 * @return {Observable} An Observable that emits items from the source Observable with distinct values based on the key specified.
 * @method distinctUntilKeyChanged
 * @owner Observable
 */
function distinctUntilKeyChanged(key, compare) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__distinctUntilChanged__["a" /* distinctUntilChanged */])(function (x, y) { return compare ? compare(x[key], y[key]) : x[key] === y[key]; });
}
//# sourceMappingURL=distinctUntilKeyChanged.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/elementAt.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export elementAt */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_ArgumentOutOfRangeError__ = __webpack_require__("./node_modules/rxjs/_esm5/util/ArgumentOutOfRangeError.js");
/** PURE_IMPORTS_START .._Subscriber,.._util_ArgumentOutOfRangeError PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/**
 * Emits the single value at the specified `index` in a sequence of emissions
 * from the source Observable.
 *
 * <span class="informal">Emits only the i-th value, then completes.</span>
 *
 * <img src="./img/elementAt.png" width="100%">
 *
 * `elementAt` returns an Observable that emits the item at the specified
 * `index` in the source Observable, or a default value if that `index` is out
 * of range and the `default` argument is provided. If the `default` argument is
 * not given and the `index` is out of range, the output Observable will emit an
 * `ArgumentOutOfRangeError` error.
 *
 * @example <caption>Emit only the third click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.elementAt(2);
 * result.subscribe(x => console.log(x));
 *
 * // Results in:
 * // click 1 = nothing
 * // click 2 = nothing
 * // click 3 = MouseEvent object logged to console
 *
 * @see {@link first}
 * @see {@link last}
 * @see {@link skip}
 * @see {@link single}
 * @see {@link take}
 *
 * @throws {ArgumentOutOfRangeError} When using `elementAt(i)`, it delivers an
 * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0` or the
 * Observable has completed before emitting the i-th `next` notification.
 *
 * @param {number} index Is the number `i` for the i-th source emission that has
 * happened since the subscription, starting from the number `0`.
 * @param {T} [defaultValue] The default value returned for missing indices.
 * @return {Observable} An Observable that emits a single item, if it is found.
 * Otherwise, will emit the default value if given. If not, then emits an error.
 * @method elementAt
 * @owner Observable
 */
function elementAt(index, defaultValue) {
    return function (source) { return source.lift(new ElementAtOperator(index, defaultValue)); };
}
var ElementAtOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function ElementAtOperator(index, defaultValue) {
        this.index = index;
        this.defaultValue = defaultValue;
        if (index < 0) {
            throw new __WEBPACK_IMPORTED_MODULE_1__util_ArgumentOutOfRangeError__["a" /* ArgumentOutOfRangeError */];
        }
    }
    ElementAtOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ElementAtSubscriber(subscriber, this.index, this.defaultValue));
    };
    return ElementAtOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var ElementAtSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(ElementAtSubscriber, _super);
    function ElementAtSubscriber(destination, index, defaultValue) {
        _super.call(this, destination);
        this.index = index;
        this.defaultValue = defaultValue;
    }
    ElementAtSubscriber.prototype._next = function (x) {
        if (this.index-- === 0) {
            this.destination.next(x);
            this.destination.complete();
        }
    };
    ElementAtSubscriber.prototype._complete = function () {
        var destination = this.destination;
        if (this.index >= 0) {
            if (typeof this.defaultValue !== 'undefined') {
                destination.next(this.defaultValue);
            }
            else {
                destination.error(new __WEBPACK_IMPORTED_MODULE_1__util_ArgumentOutOfRangeError__["a" /* ArgumentOutOfRangeError */]);
            }
        }
        destination.complete();
    };
    return ElementAtSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */]));
//# sourceMappingURL=elementAt.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/exhaust.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export exhaust */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__OuterSubscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/OuterSubscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__ = __webpack_require__("./node_modules/rxjs/_esm5/util/subscribeToResult.js");
/** PURE_IMPORTS_START .._OuterSubscriber,.._util_subscribeToResult PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/**
 * Converts a higher-order Observable into a first-order Observable by dropping
 * inner Observables while the previous inner Observable has not yet completed.
 *
 * <span class="informal">Flattens an Observable-of-Observables by dropping the
 * next inner Observables while the current inner is still executing.</span>
 *
 * <img src="./img/exhaust.png" width="100%">
 *
 * `exhaust` subscribes to an Observable that emits Observables, also known as a
 * higher-order Observable. Each time it observes one of these emitted inner
 * Observables, the output Observable begins emitting the items emitted by that
 * inner Observable. So far, it behaves like {@link mergeAll}. However,
 * `exhaust` ignores every new inner Observable if the previous Observable has
 * not yet completed. Once that one completes, it will accept and flatten the
 * next inner Observable and repeat this process.
 *
 * @example <caption>Run a finite timer for each click, only if there is no currently active timer</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000).take(5));
 * var result = higherOrder.exhaust();
 * result.subscribe(x => console.log(x));
 *
 * @see {@link combineAll}
 * @see {@link concatAll}
 * @see {@link switch}
 * @see {@link mergeAll}
 * @see {@link exhaustMap}
 * @see {@link zipAll}
 *
 * @return {Observable} An Observable that takes a source of Observables and propagates the first observable
 * exclusively until it completes before subscribing to the next.
 * @method exhaust
 * @owner Observable
 */
function exhaust() {
    return function (source) { return source.lift(new SwitchFirstOperator()); };
}
var SwitchFirstOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function SwitchFirstOperator() {
    }
    SwitchFirstOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new SwitchFirstSubscriber(subscriber));
    };
    return SwitchFirstOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SwitchFirstSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(SwitchFirstSubscriber, _super);
    function SwitchFirstSubscriber(destination) {
        _super.call(this, destination);
        this.hasCompleted = false;
        this.hasSubscription = false;
    }
    SwitchFirstSubscriber.prototype._next = function (value) {
        if (!this.hasSubscription) {
            this.hasSubscription = true;
            this.add(Object(__WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__["a" /* subscribeToResult */])(this, value));
        }
    };
    SwitchFirstSubscriber.prototype._complete = function () {
        this.hasCompleted = true;
        if (!this.hasSubscription) {
            this.destination.complete();
        }
    };
    SwitchFirstSubscriber.prototype.notifyComplete = function (innerSub) {
        this.remove(innerSub);
        this.hasSubscription = false;
        if (this.hasCompleted) {
            this.destination.complete();
        }
    };
    return SwitchFirstSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__OuterSubscriber__["a" /* OuterSubscriber */]));
//# sourceMappingURL=exhaust.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/exhaustMap.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export exhaustMap */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__OuterSubscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/OuterSubscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__ = __webpack_require__("./node_modules/rxjs/_esm5/util/subscribeToResult.js");
/** PURE_IMPORTS_START .._OuterSubscriber,.._util_subscribeToResult PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/* tslint:enable:max-line-length */
/**
 * Projects each source value to an Observable which is merged in the output
 * Observable only if the previous projected Observable has completed.
 *
 * <span class="informal">Maps each value to an Observable, then flattens all of
 * these inner Observables using {@link exhaust}.</span>
 *
 * <img src="./img/exhaustMap.png" width="100%">
 *
 * Returns an Observable that emits items based on applying a function that you
 * supply to each item emitted by the source Observable, where that function
 * returns an (so-called "inner") Observable. When it projects a source value to
 * an Observable, the output Observable begins emitting the items emitted by
 * that projected Observable. However, `exhaustMap` ignores every new projected
 * Observable if the previous projected Observable has not yet completed. Once
 * that one completes, it will accept and flatten the next projected Observable
 * and repeat this process.
 *
 * @example <caption>Run a finite timer for each click, only if there is no currently active timer</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.exhaustMap((ev) => Rx.Observable.interval(1000).take(5));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatMap}
 * @see {@link exhaust}
 * @see {@link mergeMap}
 * @see {@link switchMap}
 *
 * @param {function(value: T, ?index: number): ObservableInput} project A function
 * that, when applied to an item emitted by the source Observable, returns an
 * Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @return {Observable} An Observable containing projected Observables
 * of each item of the source, ignoring projected Observables that start before
 * their preceding Observable has completed.
 * @method exhaustMap
 * @owner Observable
 */
function exhaustMap(project, resultSelector) {
    return function (source) { return source.lift(new SwitchFirstMapOperator(project, resultSelector)); };
}
var SwitchFirstMapOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function SwitchFirstMapOperator(project, resultSelector) {
        this.project = project;
        this.resultSelector = resultSelector;
    }
    SwitchFirstMapOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new SwitchFirstMapSubscriber(subscriber, this.project, this.resultSelector));
    };
    return SwitchFirstMapOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SwitchFirstMapSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(SwitchFirstMapSubscriber, _super);
    function SwitchFirstMapSubscriber(destination, project, resultSelector) {
        _super.call(this, destination);
        this.project = project;
        this.resultSelector = resultSelector;
        this.hasSubscription = false;
        this.hasCompleted = false;
        this.index = 0;
    }
    SwitchFirstMapSubscriber.prototype._next = function (value) {
        if (!this.hasSubscription) {
            this.tryNext(value);
        }
    };
    SwitchFirstMapSubscriber.prototype.tryNext = function (value) {
        var index = this.index++;
        var destination = this.destination;
        try {
            var result = this.project(value, index);
            this.hasSubscription = true;
            this.add(Object(__WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__["a" /* subscribeToResult */])(this, result, value, index));
        }
        catch (err) {
            destination.error(err);
        }
    };
    SwitchFirstMapSubscriber.prototype._complete = function () {
        this.hasCompleted = true;
        if (!this.hasSubscription) {
            this.destination.complete();
        }
    };
    SwitchFirstMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
        if (resultSelector) {
            this.trySelectResult(outerValue, innerValue, outerIndex, innerIndex);
        }
        else {
            destination.next(innerValue);
        }
    };
    SwitchFirstMapSubscriber.prototype.trySelectResult = function (outerValue, innerValue, outerIndex, innerIndex) {
        var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
        try {
            var result = resultSelector(outerValue, innerValue, outerIndex, innerIndex);
            destination.next(result);
        }
        catch (err) {
            destination.error(err);
        }
    };
    SwitchFirstMapSubscriber.prototype.notifyError = function (err) {
        this.destination.error(err);
    };
    SwitchFirstMapSubscriber.prototype.notifyComplete = function (innerSub) {
        this.remove(innerSub);
        this.hasSubscription = false;
        if (this.hasCompleted) {
            this.destination.complete();
        }
    };
    return SwitchFirstMapSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__OuterSubscriber__["a" /* OuterSubscriber */]));
//# sourceMappingURL=exhaustMap.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/expand.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export expand */
/* unused harmony export ExpandOperator */
/* unused harmony export ExpandSubscriber */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_tryCatch__ = __webpack_require__("./node_modules/rxjs/_esm5/util/tryCatch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_errorObject__ = __webpack_require__("./node_modules/rxjs/_esm5/util/errorObject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__OuterSubscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/OuterSubscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_subscribeToResult__ = __webpack_require__("./node_modules/rxjs/_esm5/util/subscribeToResult.js");
/** PURE_IMPORTS_START .._util_tryCatch,.._util_errorObject,.._OuterSubscriber,.._util_subscribeToResult PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};




/* tslint:enable:max-line-length */
/**
 * Recursively projects each source value to an Observable which is merged in
 * the output Observable.
 *
 * <span class="informal">It's similar to {@link mergeMap}, but applies the
 * projection function to every source value as well as every output value.
 * It's recursive.</span>
 *
 * <img src="./img/expand.png" width="100%">
 *
 * Returns an Observable that emits items based on applying a function that you
 * supply to each item emitted by the source Observable, where that function
 * returns an Observable, and then merging those resulting Observables and
 * emitting the results of this merger. *Expand* will re-emit on the output
 * Observable every source value. Then, each output value is given to the
 * `project` function which returns an inner Observable to be merged on the
 * output Observable. Those output values resulting from the projection are also
 * given to the `project` function to produce new output values. This is how
 * *expand* behaves recursively.
 *
 * @example <caption>Start emitting the powers of two on every click, at most 10 of them</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var powersOfTwo = clicks
 *   .mapTo(1)
 *   .expand(x => Rx.Observable.of(2 * x).delay(1000))
 *   .take(10);
 * powersOfTwo.subscribe(x => console.log(x));
 *
 * @see {@link mergeMap}
 * @see {@link mergeScan}
 *
 * @param {function(value: T, index: number) => Observable} project A function
 * that, when applied to an item emitted by the source or the output Observable,
 * returns an Observable.
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
 * Observables being subscribed to concurrently.
 * @param {Scheduler} [scheduler=null] The IScheduler to use for subscribing to
 * each projected inner Observable.
 * @return {Observable} An Observable that emits the source values and also
 * result of applying the projection function to each value emitted on the
 * output Observable and and merging the results of the Observables obtained
 * from this transformation.
 * @method expand
 * @owner Observable
 */
function expand(project, concurrent, scheduler) {
    if (concurrent === void 0) {
        concurrent = Number.POSITIVE_INFINITY;
    }
    if (scheduler === void 0) {
        scheduler = undefined;
    }
    concurrent = (concurrent || 0) < 1 ? Number.POSITIVE_INFINITY : concurrent;
    return function (source) { return source.lift(new ExpandOperator(project, concurrent, scheduler)); };
}
var ExpandOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function ExpandOperator(project, concurrent, scheduler) {
        this.project = project;
        this.concurrent = concurrent;
        this.scheduler = scheduler;
    }
    ExpandOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ExpandSubscriber(subscriber, this.project, this.concurrent, this.scheduler));
    };
    return ExpandOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var ExpandSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(ExpandSubscriber, _super);
    function ExpandSubscriber(destination, project, concurrent, scheduler) {
        _super.call(this, destination);
        this.project = project;
        this.concurrent = concurrent;
        this.scheduler = scheduler;
        this.index = 0;
        this.active = 0;
        this.hasCompleted = false;
        if (concurrent < Number.POSITIVE_INFINITY) {
            this.buffer = [];
        }
    }
    ExpandSubscriber.dispatch = function (arg) {
        var subscriber = arg.subscriber, result = arg.result, value = arg.value, index = arg.index;
        subscriber.subscribeToProjection(result, value, index);
    };
    ExpandSubscriber.prototype._next = function (value) {
        var destination = this.destination;
        if (destination.closed) {
            this._complete();
            return;
        }
        var index = this.index++;
        if (this.active < this.concurrent) {
            destination.next(value);
            var result = Object(__WEBPACK_IMPORTED_MODULE_0__util_tryCatch__["a" /* tryCatch */])(this.project)(value, index);
            if (result === __WEBPACK_IMPORTED_MODULE_1__util_errorObject__["a" /* errorObject */]) {
                destination.error(__WEBPACK_IMPORTED_MODULE_1__util_errorObject__["a" /* errorObject */].e);
            }
            else if (!this.scheduler) {
                this.subscribeToProjection(result, value, index);
            }
            else {
                var state = { subscriber: this, result: result, value: value, index: index };
                this.add(this.scheduler.schedule(ExpandSubscriber.dispatch, 0, state));
            }
        }
        else {
            this.buffer.push(value);
        }
    };
    ExpandSubscriber.prototype.subscribeToProjection = function (result, value, index) {
        this.active++;
        this.add(Object(__WEBPACK_IMPORTED_MODULE_3__util_subscribeToResult__["a" /* subscribeToResult */])(this, result, value, index));
    };
    ExpandSubscriber.prototype._complete = function () {
        this.hasCompleted = true;
        if (this.hasCompleted && this.active === 0) {
            this.destination.complete();
        }
    };
    ExpandSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this._next(innerValue);
    };
    ExpandSubscriber.prototype.notifyComplete = function (innerSub) {
        var buffer = this.buffer;
        this.remove(innerSub);
        this.active--;
        if (buffer && buffer.length > 0) {
            this._next(buffer.shift());
        }
        if (this.hasCompleted && this.active === 0) {
            this.destination.complete();
        }
    };
    return ExpandSubscriber;
}(__WEBPACK_IMPORTED_MODULE_2__OuterSubscriber__["a" /* OuterSubscriber */]));
//# sourceMappingURL=expand.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/finalize.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export finalize */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/** PURE_IMPORTS_START .._Subscriber,.._Subscription PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/**
 * Returns an Observable that mirrors the source Observable, but will call a specified function when
 * the source terminates on complete or error.
 * @param {function} callback Function to be called when source terminates.
 * @return {Observable} An Observable that mirrors the source, but will call the specified function on termination.
 * @method finally
 * @owner Observable
 */
function finalize(callback) {
    return function (source) { return source.lift(new FinallyOperator(callback)); };
}
var FinallyOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function FinallyOperator(callback) {
        this.callback = callback;
    }
    FinallyOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new FinallySubscriber(subscriber, this.callback));
    };
    return FinallyOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var FinallySubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(FinallySubscriber, _super);
    function FinallySubscriber(destination, callback) {
        _super.call(this, destination);
        this.add(new __WEBPACK_IMPORTED_MODULE_1__Subscription__["a" /* Subscription */](callback));
    }
    return FinallySubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */]));
//# sourceMappingURL=finalize.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/find.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export find */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindValueOperator; });
/* unused harmony export FindValueSubscriber */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscriber.js");
/** PURE_IMPORTS_START .._Subscriber PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * Emits only the first value emitted by the source Observable that meets some
 * condition.
 *
 * <span class="informal">Finds the first value that passes some test and emits
 * that.</span>
 *
 * <img src="./img/find.png" width="100%">
 *
 * `find` searches for the first item in the source Observable that matches the
 * specified condition embodied by the `predicate`, and returns the first
 * occurrence in the source. Unlike {@link first}, the `predicate` is required
 * in `find`, and does not emit an error if a valid value is not found.
 *
 * @example <caption>Find and emit the first click that happens on a DIV element</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.find(ev => ev.target.tagName === 'DIV');
 * result.subscribe(x => console.log(x));
 *
 * @see {@link filter}
 * @see {@link first}
 * @see {@link findIndex}
 * @see {@link take}
 *
 * @param {function(value: T, index: number, source: Observable<T>): boolean} predicate
 * A function called with each item to test for condition matching.
 * @param {any} [thisArg] An optional argument to determine the value of `this`
 * in the `predicate` function.
 * @return {Observable<T>} An Observable of the first item that matches the
 * condition.
 * @method find
 * @owner Observable
 */
function find(predicate, thisArg) {
    if (typeof predicate !== 'function') {
        throw new TypeError('predicate is not a function');
    }
    return function (source) { return source.lift(new FindValueOperator(predicate, source, false, thisArg)); };
}
var FindValueOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function FindValueOperator(predicate, source, yieldIndex, thisArg) {
        this.predicate = predicate;
        this.source = source;
        this.yieldIndex = yieldIndex;
        this.thisArg = thisArg;
    }
    FindValueOperator.prototype.call = function (observer, source) {
        return source.subscribe(new FindValueSubscriber(observer, this.predicate, this.source, this.yieldIndex, this.thisArg));
    };
    return FindValueOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var FindValueSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(FindValueSubscriber, _super);
    function FindValueSubscriber(destination, predicate, source, yieldIndex, thisArg) {
        _super.call(this, destination);
        this.predicate = predicate;
        this.source = source;
        this.yieldIndex = yieldIndex;
        this.thisArg = thisArg;
        this.index = 0;
    }
    FindValueSubscriber.prototype.notifyComplete = function (value) {
        var destination = this.destination;
        destination.next(value);
        destination.complete();
    };
    FindValueSubscriber.prototype._next = function (value) {
        var _a = this, predicate = _a.predicate, thisArg = _a.thisArg;
        var index = this.index++;
        try {
            var result = predicate.call(thisArg || this, value, index, this.source);
            if (result) {
                this.notifyComplete(this.yieldIndex ? index : value);
            }
        }
        catch (err) {
            this.destination.error(err);
        }
    };
    FindValueSubscriber.prototype._complete = function () {
        this.notifyComplete(this.yieldIndex ? -1 : undefined);
    };
    return FindValueSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */]));
//# sourceMappingURL=find.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/findIndex.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export findIndex */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_find__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/find.js");
/** PURE_IMPORTS_START .._operators_find PURE_IMPORTS_END */

/**
 * Emits only the index of the first value emitted by the source Observable that
 * meets some condition.
 *
 * <span class="informal">It's like {@link find}, but emits the index of the
 * found value, not the value itself.</span>
 *
 * <img src="./img/findIndex.png" width="100%">
 *
 * `findIndex` searches for the first item in the source Observable that matches
 * the specified condition embodied by the `predicate`, and returns the
 * (zero-based) index of the first occurrence in the source. Unlike
 * {@link first}, the `predicate` is required in `findIndex`, and does not emit
 * an error if a valid value is not found.
 *
 * @example <caption>Emit the index of first click that happens on a DIV element</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.findIndex(ev => ev.target.tagName === 'DIV');
 * result.subscribe(x => console.log(x));
 *
 * @see {@link filter}
 * @see {@link find}
 * @see {@link first}
 * @see {@link take}
 *
 * @param {function(value: T, index: number, source: Observable<T>): boolean} predicate
 * A function called with each item to test for condition matching.
 * @param {any} [thisArg] An optional argument to determine the value of `this`
 * in the `predicate` function.
 * @return {Observable} An Observable of the index of the first item that
 * matches the condition.
 * @method find
 * @owner Observable
 */
function findIndex(predicate, thisArg) {
    return function (source) { return source.lift(new __WEBPACK_IMPORTED_MODULE_0__operators_find__["a" /* FindValueOperator */](predicate, source, true, thisArg)); };
}
//# sourceMappingURL=findIndex.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/groupBy.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export groupBy */
/* unused harmony export GroupedObservable */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_Map__ = __webpack_require__("./node_modules/rxjs/_esm5/util/Map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_FastMap__ = __webpack_require__("./node_modules/rxjs/_esm5/util/FastMap.js");
/** PURE_IMPORTS_START .._Subscriber,.._Subscription,.._Observable,.._Subject,.._util_Map,.._util_FastMap PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};






/* tslint:enable:max-line-length */
/**
 * Groups the items emitted by an Observable according to a specified criterion,
 * and emits these grouped items as `GroupedObservables`, one
 * {@link GroupedObservable} per group.
 *
 * <img src="./img/groupBy.png" width="100%">
 *
 * @example <caption>Group objects by id and return as array</caption>
 * Observable.of<Obj>({id: 1, name: 'aze1'},
 *                    {id: 2, name: 'sf2'},
 *                    {id: 2, name: 'dg2'},
 *                    {id: 1, name: 'erg1'},
 *                    {id: 1, name: 'df1'},
 *                    {id: 2, name: 'sfqfb2'},
 *                    {id: 3, name: 'qfs3'},
 *                    {id: 2, name: 'qsgqsfg2'}
 *     )
 *     .groupBy(p => p.id)
 *     .flatMap( (group$) => group$.reduce((acc, cur) => [...acc, cur], []))
 *     .subscribe(p => console.log(p));
 *
 * // displays:
 * // [ { id: 1, name: 'aze1' },
 * //   { id: 1, name: 'erg1' },
 * //   { id: 1, name: 'df1' } ]
 * //
 * // [ { id: 2, name: 'sf2' },
 * //   { id: 2, name: 'dg2' },
 * //   { id: 2, name: 'sfqfb2' },
 * //   { id: 2, name: 'qsgqsfg2' } ]
 * //
 * // [ { id: 3, name: 'qfs3' } ]
 *
 * @example <caption>Pivot data on the id field</caption>
 * Observable.of<Obj>({id: 1, name: 'aze1'},
 *                    {id: 2, name: 'sf2'},
 *                    {id: 2, name: 'dg2'},
 *                    {id: 1, name: 'erg1'},
 *                    {id: 1, name: 'df1'},
 *                    {id: 2, name: 'sfqfb2'},
 *                    {id: 3, name: 'qfs1'},
 *                    {id: 2, name: 'qsgqsfg2'}
 *                   )
 *     .groupBy(p => p.id, p => p.name)
 *     .flatMap( (group$) => group$.reduce((acc, cur) => [...acc, cur], ["" + group$.key]))
 *     .map(arr => ({'id': parseInt(arr[0]), 'values': arr.slice(1)}))
 *     .subscribe(p => console.log(p));
 *
 * // displays:
 * // { id: 1, values: [ 'aze1', 'erg1', 'df1' ] }
 * // { id: 2, values: [ 'sf2', 'dg2', 'sfqfb2', 'qsgqsfg2' ] }
 * // { id: 3, values: [ 'qfs1' ] }
 *
 * @param {function(value: T): K} keySelector A function that extracts the key
 * for each item.
 * @param {function(value: T): R} [elementSelector] A function that extracts the
 * return element for each item.
 * @param {function(grouped: GroupedObservable<K,R>): Observable<any>} [durationSelector]
 * A function that returns an Observable to determine how long each group should
 * exist.
 * @return {Observable<GroupedObservable<K,R>>} An Observable that emits
 * GroupedObservables, each of which corresponds to a unique key value and each
 * of which emits those items from the source Observable that share that key
 * value.
 * @method groupBy
 * @owner Observable
 */
function groupBy(keySelector, elementSelector, durationSelector, subjectSelector) {
    return function (source) {
        return source.lift(new GroupByOperator(keySelector, elementSelector, durationSelector, subjectSelector));
    };
}
var GroupByOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function GroupByOperator(keySelector, elementSelector, durationSelector, subjectSelector) {
        this.keySelector = keySelector;
        this.elementSelector = elementSelector;
        this.durationSelector = durationSelector;
        this.subjectSelector = subjectSelector;
    }
    GroupByOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new GroupBySubscriber(subscriber, this.keySelector, this.elementSelector, this.durationSelector, this.subjectSelector));
    };
    return GroupByOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var GroupBySubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(GroupBySubscriber, _super);
    function GroupBySubscriber(destination, keySelector, elementSelector, durationSelector, subjectSelector) {
        _super.call(this, destination);
        this.keySelector = keySelector;
        this.elementSelector = elementSelector;
        this.durationSelector = durationSelector;
        this.subjectSelector = subjectSelector;
        this.groups = null;
        this.attemptedToUnsubscribe = false;
        this.count = 0;
    }
    GroupBySubscriber.prototype._next = function (value) {
        var key;
        try {
            key = this.keySelector(value);
        }
        catch (err) {
            this.error(err);
            return;
        }
        this._group(value, key);
    };
    GroupBySubscriber.prototype._group = function (value, key) {
        var groups = this.groups;
        if (!groups) {
            groups = this.groups = typeof key === 'string' ? new __WEBPACK_IMPORTED_MODULE_5__util_FastMap__["a" /* FastMap */]() : new __WEBPACK_IMPORTED_MODULE_4__util_Map__["a" /* Map */]();
        }
        var group = groups.get(key);
        var element;
        if (this.elementSelector) {
            try {
                element = this.elementSelector(value);
            }
            catch (err) {
                this.error(err);
            }
        }
        else {
            element = value;
        }
        if (!group) {
            group = this.subjectSelector ? this.subjectSelector() : new __WEBPACK_IMPORTED_MODULE_3__Subject__["a" /* Subject */]();
            groups.set(key, group);
            var groupedObservable = new GroupedObservable(key, group, this);
            this.destination.next(groupedObservable);
            if (this.durationSelector) {
                var duration = void 0;
                try {
                    duration = this.durationSelector(new GroupedObservable(key, group));
                }
                catch (err) {
                    this.error(err);
                    return;
                }
                this.add(duration.subscribe(new GroupDurationSubscriber(key, group, this)));
            }
        }
        if (!group.closed) {
            group.next(element);
        }
    };
    GroupBySubscriber.prototype._error = function (err) {
        var groups = this.groups;
        if (groups) {
            groups.forEach(function (group, key) {
                group.error(err);
            });
            groups.clear();
        }
        this.destination.error(err);
    };
    GroupBySubscriber.prototype._complete = function () {
        var groups = this.groups;
        if (groups) {
            groups.forEach(function (group, key) {
                group.complete();
            });
            groups.clear();
        }
        this.destination.complete();
    };
    GroupBySubscriber.prototype.removeGroup = function (key) {
        this.groups.delete(key);
    };
    GroupBySubscriber.prototype.unsubscribe = function () {
        if (!this.closed) {
            this.attemptedToUnsubscribe = true;
            if (this.count === 0) {
                _super.prototype.unsubscribe.call(this);
            }
        }
    };
    return GroupBySubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */]));
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var GroupDurationSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(GroupDurationSubscriber, _super);
    function GroupDurationSubscriber(key, group, parent) {
        _super.call(this, group);
        this.key = key;
        this.group = group;
        this.parent = parent;
    }
    GroupDurationSubscriber.prototype._next = function (value) {
        this.complete();
    };
    GroupDurationSubscriber.prototype._unsubscribe = function () {
        var _a = this, parent = _a.parent, key = _a.key;
        this.key = this.parent = null;
        if (parent) {
            parent.removeGroup(key);
        }
    };
    return GroupDurationSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */]));
/**
 * An Observable representing values belonging to the same group represented by
 * a common key. The values emitted by a GroupedObservable come from the source
 * Observable. The common key is available as the field `key` on a
 * GroupedObservable instance.
 *
 * @class GroupedObservable<K, T>
 */
var GroupedObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(GroupedObservable, _super);
    function GroupedObservable(key, groupSubject, refCountSubscription) {
        _super.call(this);
        this.key = key;
        this.groupSubject = groupSubject;
        this.refCountSubscription = refCountSubscription;
    }
    GroupedObservable.prototype._subscribe = function (subscriber) {
        var subscription = new __WEBPACK_IMPORTED_MODULE_1__Subscription__["a" /* Subscription */]();
        var _a = this, refCountSubscription = _a.refCountSubscription, groupSubject = _a.groupSubject;
        if (refCountSubscription && !refCountSubscription.closed) {
            subscription.add(new InnerRefCountSubscription(refCountSubscription));
        }
        subscription.add(groupSubject.subscribe(subscriber));
        return subscription;
    };
    return GroupedObservable;
}(__WEBPACK_IMPORTED_MODULE_2__Observable__["a" /* Observable */]));
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var InnerRefCountSubscription = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(InnerRefCountSubscription, _super);
    function InnerRefCountSubscription(parent) {
        _super.call(this);
        this.parent = parent;
        parent.count++;
    }
    InnerRefCountSubscription.prototype.unsubscribe = function () {
        var parent = this.parent;
        if (!parent.closed && !this.closed) {
            _super.prototype.unsubscribe.call(this);
            parent.count -= 1;
            if (parent.count === 0 && parent.attemptedToUnsubscribe) {
                parent.unsubscribe();
            }
        }
    };
    return InnerRefCountSubscription;
}(__WEBPACK_IMPORTED_MODULE_1__Subscription__["a" /* Subscription */]));
//# sourceMappingURL=groupBy.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/ignoreElements.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ignoreElements */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_noop__ = __webpack_require__("./node_modules/rxjs/_esm5/util/noop.js");
/** PURE_IMPORTS_START .._Subscriber,.._util_noop PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/**
 * Ignores all items emitted by the source Observable and only passes calls of `complete` or `error`.
 *
 * <img src="./img/ignoreElements.png" width="100%">
 *
 * @return {Observable} An empty Observable that only calls `complete`
 * or `error`, based on which one is called by the source Observable.
 * @method ignoreElements
 * @owner Observable
 */
function ignoreElements() {
    return function ignoreElementsOperatorFunction(source) {
        return source.lift(new IgnoreElementsOperator());
    };
}
var IgnoreElementsOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function IgnoreElementsOperator() {
    }
    IgnoreElementsOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new IgnoreElementsSubscriber(subscriber));
    };
    return IgnoreElementsOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var IgnoreElementsSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(IgnoreElementsSubscriber, _super);
    function IgnoreElementsSubscriber() {
        _super.apply(this, arguments);
    }
    IgnoreElementsSubscriber.prototype._next = function (unused) {
        Object(__WEBPACK_IMPORTED_MODULE_1__util_noop__["a" /* noop */])();
    };
    return IgnoreElementsSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */]));
//# sourceMappingURL=ignoreElements.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/isEmpty.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isEmpty */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscriber.js");
/** PURE_IMPORTS_START .._Subscriber PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

function isEmpty() {
    return function (source) { return source.lift(new IsEmptyOperator()); };
}
var IsEmptyOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function IsEmptyOperator() {
    }
    IsEmptyOperator.prototype.call = function (observer, source) {
        return source.subscribe(new IsEmptySubscriber(observer));
    };
    return IsEmptyOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var IsEmptySubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(IsEmptySubscriber, _super);
    function IsEmptySubscriber(destination) {
        _super.call(this, destination);
    }
    IsEmptySubscriber.prototype.notifyComplete = function (isEmpty) {
        var destination = this.destination;
        destination.next(isEmpty);
        destination.complete();
    };
    IsEmptySubscriber.prototype._next = function (value) {
        this.notifyComplete(false);
    };
    IsEmptySubscriber.prototype._complete = function () {
        this.notifyComplete(true);
    };
    return IsEmptySubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */]));
//# sourceMappingURL=isEmpty.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/mapTo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export mapTo */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscriber.js");
/** PURE_IMPORTS_START .._Subscriber PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * Emits the given constant value on the output Observable every time the source
 * Observable emits a value.
 *
 * <span class="informal">Like {@link map}, but it maps every source value to
 * the same output value every time.</span>
 *
 * <img src="./img/mapTo.png" width="100%">
 *
 * Takes a constant `value` as argument, and emits that whenever the source
 * Observable emits a value. In other words, ignores the actual source value,
 * and simply uses the emission moment to know when to emit the given `value`.
 *
 * @example <caption>Map every click to the string 'Hi'</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var greetings = clicks.mapTo('Hi');
 * greetings.subscribe(x => console.log(x));
 *
 * @see {@link map}
 *
 * @param {any} value The value to map each source value to.
 * @return {Observable} An Observable that emits the given `value` every time
 * the source Observable emits something.
 * @method mapTo
 * @owner Observable
 */
function mapTo(value) {
    return function (source) { return source.lift(new MapToOperator(value)); };
}
var MapToOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function MapToOperator(value) {
        this.value = value;
    }
    MapToOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new MapToSubscriber(subscriber, this.value));
    };
    return MapToOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var MapToSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(MapToSubscriber, _super);
    function MapToSubscriber(destination, value) {
        _super.call(this, destination);
        this.value = value;
    }
    MapToSubscriber.prototype._next = function (x) {
        this.destination.next(this.value);
    };
    return MapToSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */]));
//# sourceMappingURL=mapTo.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/materialize.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export materialize */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Notification__ = __webpack_require__("./node_modules/rxjs/_esm5/Notification.js");
/** PURE_IMPORTS_START .._Subscriber,.._Notification PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/**
 * Represents all of the notifications from the source Observable as `next`
 * emissions marked with their original types within {@link Notification}
 * objects.
 *
 * <span class="informal">Wraps `next`, `error` and `complete` emissions in
 * {@link Notification} objects, emitted as `next` on the output Observable.
 * </span>
 *
 * <img src="./img/materialize.png" width="100%">
 *
 * `materialize` returns an Observable that emits a `next` notification for each
 * `next`, `error`, or `complete` emission of the source Observable. When the
 * source Observable emits `complete`, the output Observable will emit `next` as
 * a Notification of type "complete", and then it will emit `complete` as well.
 * When the source Observable emits `error`, the output will emit `next` as a
 * Notification of type "error", and then `complete`.
 *
 * This operator is useful for producing metadata of the source Observable, to
 * be consumed as `next` emissions. Use it in conjunction with
 * {@link dematerialize}.
 *
 * @example <caption>Convert a faulty Observable to an Observable of Notifications</caption>
 * var letters = Rx.Observable.of('a', 'b', 13, 'd');
 * var upperCase = letters.map(x => x.toUpperCase());
 * var materialized = upperCase.materialize();
 * materialized.subscribe(x => console.log(x));
 *
 * // Results in the following:
 * // - Notification {kind: "N", value: "A", error: undefined, hasValue: true}
 * // - Notification {kind: "N", value: "B", error: undefined, hasValue: true}
 * // - Notification {kind: "E", value: undefined, error: TypeError:
 * //   x.toUpperCase is not a function at MapSubscriber.letters.map.x
 * //   [as project] (http://1…, hasValue: false}
 *
 * @see {@link Notification}
 * @see {@link dematerialize}
 *
 * @return {Observable<Notification<T>>} An Observable that emits
 * {@link Notification} objects that wrap the original emissions from the source
 * Observable with metadata.
 * @method materialize
 * @owner Observable
 */
function materialize() {
    return function materializeOperatorFunction(source) {
        return source.lift(new MaterializeOperator());
    };
}
var MaterializeOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function MaterializeOperator() {
    }
    MaterializeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new MaterializeSubscriber(subscriber));
    };
    return MaterializeOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var MaterializeSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(MaterializeSubscriber, _super);
    function MaterializeSubscriber(destination) {
        _super.call(this, destination);
    }
    MaterializeSubscriber.prototype._next = function (value) {
        this.destination.next(__WEBPACK_IMPORTED_MODULE_1__Notification__["a" /* Notification */].createNext(value));
    };
    MaterializeSubscriber.prototype._error = function (err) {
        var destination = this.destination;
        destination.next(__WEBPACK_IMPORTED_MODULE_1__Notification__["a" /* Notification */].createError(err));
        destination.complete();
    };
    MaterializeSubscriber.prototype._complete = function () {
        var destination = this.destination;
        destination.next(__WEBPACK_IMPORTED_MODULE_1__Notification__["a" /* Notification */].createComplete());
        destination.complete();
    };
    return MaterializeSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */]));
//# sourceMappingURL=materialize.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/max.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export max */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reduce__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/reduce.js");
/** PURE_IMPORTS_START ._reduce PURE_IMPORTS_END */

/**
 * The Max operator operates on an Observable that emits numbers (or items that can be compared with a provided function),
 * and when source Observable completes it emits a single item: the item with the largest value.
 *
 * <img src="./img/max.png" width="100%">
 *
 * @example <caption>Get the maximal value of a series of numbers</caption>
 * Rx.Observable.of(5, 4, 7, 2, 8)
 *   .max()
 *   .subscribe(x => console.log(x)); // -> 8
 *
 * @example <caption>Use a comparer function to get the maximal item</caption>
 * interface Person {
 *   age: number,
 *   name: string
 * }
 * Observable.of<Person>({age: 7, name: 'Foo'},
 *                       {age: 5, name: 'Bar'},
 *                       {age: 9, name: 'Beer'})
 *           .max<Person>((a: Person, b: Person) => a.age < b.age ? -1 : 1)
 *           .subscribe((x: Person) => console.log(x.name)); // -> 'Beer'
 * }
 *
 * @see {@link min}
 *
 * @param {Function} [comparer] - Optional comparer function that it will use instead of its default to compare the
 * value of two items.
 * @return {Observable} An Observable that emits item with the largest value.
 * @method max
 * @owner Observable
 */
function max(comparer) {
    var max = (typeof comparer === 'function')
        ? function (x, y) { return comparer(x, y) > 0 ? x : y; }
        : function (x, y) { return x > y ? x : y; };
    return Object(__WEBPACK_IMPORTED_MODULE_0__reduce__["a" /* reduce */])(max);
}
//# sourceMappingURL=max.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/merge.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export merge */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__observable_merge__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/merge.js");
/* unused harmony reexport mergeStatic */
/** PURE_IMPORTS_START .._observable_merge PURE_IMPORTS_END */


/* tslint:enable:max-line-length */
/**
 * Creates an output Observable which concurrently emits all values from every
 * given input Observable.
 *
 * <span class="informal">Flattens multiple Observables together by blending
 * their values into one Observable.</span>
 *
 * <img src="./img/merge.png" width="100%">
 *
 * `merge` subscribes to each given input Observable (either the source or an
 * Observable given as argument), and simply forwards (without doing any
 * transformation) all the values from all the input Observables to the output
 * Observable. The output Observable only completes once all input Observables
 * have completed. Any error delivered by an input Observable will be immediately
 * emitted on the output Observable.
 *
 * @example <caption>Merge together two Observables: 1s interval and clicks</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var timer = Rx.Observable.interval(1000);
 * var clicksOrTimer = clicks.merge(timer);
 * clicksOrTimer.subscribe(x => console.log(x));
 *
 * @example <caption>Merge together 3 Observables, but only 2 run concurrently</caption>
 * var timer1 = Rx.Observable.interval(1000).take(10);
 * var timer2 = Rx.Observable.interval(2000).take(6);
 * var timer3 = Rx.Observable.interval(500).take(10);
 * var concurrent = 2; // the argument
 * var merged = timer1.merge(timer2, timer3, concurrent);
 * merged.subscribe(x => console.log(x));
 *
 * @see {@link mergeAll}
 * @see {@link mergeMap}
 * @see {@link mergeMapTo}
 * @see {@link mergeScan}
 *
 * @param {ObservableInput} other An input Observable to merge with the source
 * Observable. More than one input Observables may be given as argument.
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
 * Observables being subscribed to concurrently.
 * @param {Scheduler} [scheduler=null] The IScheduler to use for managing
 * concurrency of input Observables.
 * @return {Observable} An Observable that emits items that are the result of
 * every input Observable.
 * @method merge
 * @owner Observable
 */
function merge() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    return function (source) { return source.lift.call(__WEBPACK_IMPORTED_MODULE_0__observable_merge__["a" /* merge */].apply(void 0, [source].concat(observables))); };
}
//# sourceMappingURL=merge.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/mergeMapTo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export mergeMapTo */
/* unused harmony export MergeMapToOperator */
/* unused harmony export MergeMapToSubscriber */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__OuterSubscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/OuterSubscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__ = __webpack_require__("./node_modules/rxjs/_esm5/util/subscribeToResult.js");
/** PURE_IMPORTS_START .._OuterSubscriber,.._util_subscribeToResult PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/* tslint:enable:max-line-length */
/**
 * Projects each source value to the same Observable which is merged multiple
 * times in the output Observable.
 *
 * <span class="informal">It's like {@link mergeMap}, but maps each value always
 * to the same inner Observable.</span>
 *
 * <img src="./img/mergeMapTo.png" width="100%">
 *
 * Maps each source value to the given Observable `innerObservable` regardless
 * of the source value, and then merges those resulting Observables into one
 * single Observable, which is the output Observable.
 *
 * @example <caption>For each click event, start an interval Observable ticking every 1 second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.mergeMapTo(Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatMapTo}
 * @see {@link merge}
 * @see {@link mergeAll}
 * @see {@link mergeMap}
 * @see {@link mergeScan}
 * @see {@link switchMapTo}
 *
 * @param {ObservableInput} innerObservable An Observable to replace each value from
 * the source Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
 * Observables being subscribed to concurrently.
 * @return {Observable} An Observable that emits items from the given
 * `innerObservable` (and optionally transformed through `resultSelector`) every
 * time a value is emitted on the source Observable.
 * @method mergeMapTo
 * @owner Observable
 */
function mergeMapTo(innerObservable, resultSelector, concurrent) {
    if (concurrent === void 0) {
        concurrent = Number.POSITIVE_INFINITY;
    }
    if (typeof resultSelector === 'number') {
        concurrent = resultSelector;
        resultSelector = null;
    }
    return function (source) { return source.lift(new MergeMapToOperator(innerObservable, resultSelector, concurrent)); };
}
// TODO: Figure out correct signature here: an Operator<Observable<T>, R>
//       needs to implement call(observer: Subscriber<R>): Subscriber<Observable<T>>
var MergeMapToOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function MergeMapToOperator(ish, resultSelector, concurrent) {
        if (concurrent === void 0) {
            concurrent = Number.POSITIVE_INFINITY;
        }
        this.ish = ish;
        this.resultSelector = resultSelector;
        this.concurrent = concurrent;
    }
    MergeMapToOperator.prototype.call = function (observer, source) {
        return source.subscribe(new MergeMapToSubscriber(observer, this.ish, this.resultSelector, this.concurrent));
    };
    return MergeMapToOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var MergeMapToSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(MergeMapToSubscriber, _super);
    function MergeMapToSubscriber(destination, ish, resultSelector, concurrent) {
        if (concurrent === void 0) {
            concurrent = Number.POSITIVE_INFINITY;
        }
        _super.call(this, destination);
        this.ish = ish;
        this.resultSelector = resultSelector;
        this.concurrent = concurrent;
        this.hasCompleted = false;
        this.buffer = [];
        this.active = 0;
        this.index = 0;
    }
    MergeMapToSubscriber.prototype._next = function (value) {
        if (this.active < this.concurrent) {
            var resultSelector = this.resultSelector;
            var index = this.index++;
            var ish = this.ish;
            var destination = this.destination;
            this.active++;
            this._innerSub(ish, destination, resultSelector, value, index);
        }
        else {
            this.buffer.push(value);
        }
    };
    MergeMapToSubscriber.prototype._innerSub = function (ish, destination, resultSelector, value, index) {
        this.add(Object(__WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__["a" /* subscribeToResult */])(this, ish, value, index));
    };
    MergeMapToSubscriber.prototype._complete = function () {
        this.hasCompleted = true;
        if (this.active === 0 && this.buffer.length === 0) {
            this.destination.complete();
        }
    };
    MergeMapToSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
        if (resultSelector) {
            this.trySelectResult(outerValue, innerValue, outerIndex, innerIndex);
        }
        else {
            destination.next(innerValue);
        }
    };
    MergeMapToSubscriber.prototype.trySelectResult = function (outerValue, innerValue, outerIndex, innerIndex) {
        var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
        var result;
        try {
            result = resultSelector(outerValue, innerValue, outerIndex, innerIndex);
        }
        catch (err) {
            destination.error(err);
            return;
        }
        destination.next(result);
    };
    MergeMapToSubscriber.prototype.notifyError = function (err) {
        this.destination.error(err);
    };
    MergeMapToSubscriber.prototype.notifyComplete = function (innerSub) {
        var buffer = this.buffer;
        this.remove(innerSub);
        this.active--;
        if (buffer.length > 0) {
            this._next(buffer.shift());
        }
        else if (this.active === 0 && this.hasCompleted) {
            this.destination.complete();
        }
    };
    return MergeMapToSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__OuterSubscriber__["a" /* OuterSubscriber */]));
//# sourceMappingURL=mergeMapTo.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/mergeScan.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export mergeScan */
/* unused harmony export MergeScanOperator */
/* unused harmony export MergeScanSubscriber */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_tryCatch__ = __webpack_require__("./node_modules/rxjs/_esm5/util/tryCatch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_errorObject__ = __webpack_require__("./node_modules/rxjs/_esm5/util/errorObject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_subscribeToResult__ = __webpack_require__("./node_modules/rxjs/_esm5/util/subscribeToResult.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__OuterSubscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/OuterSubscriber.js");
/** PURE_IMPORTS_START .._util_tryCatch,.._util_errorObject,.._util_subscribeToResult,.._OuterSubscriber PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};




/**
 * Applies an accumulator function over the source Observable where the
 * accumulator function itself returns an Observable, then each intermediate
 * Observable returned is merged into the output Observable.
 *
 * <span class="informal">It's like {@link scan}, but the Observables returned
 * by the accumulator are merged into the outer Observable.</span>
 *
 * @example <caption>Count the number of click events</caption>
 * const click$ = Rx.Observable.fromEvent(document, 'click');
 * const one$ = click$.mapTo(1);
 * const seed = 0;
 * const count$ = one$.mergeScan((acc, one) => Rx.Observable.of(acc + one), seed);
 * count$.subscribe(x => console.log(x));
 *
 * // Results:
 * 1
 * 2
 * 3
 * 4
 * // ...and so on for each click
 *
 * @param {function(acc: R, value: T): Observable<R>} accumulator
 * The accumulator function called on each source value.
 * @param seed The initial accumulation value.
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of
 * input Observables being subscribed to concurrently.
 * @return {Observable<R>} An observable of the accumulated values.
 * @method mergeScan
 * @owner Observable
 */
function mergeScan(accumulator, seed, concurrent) {
    if (concurrent === void 0) {
        concurrent = Number.POSITIVE_INFINITY;
    }
    return function (source) { return source.lift(new MergeScanOperator(accumulator, seed, concurrent)); };
}
var MergeScanOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function MergeScanOperator(accumulator, seed, concurrent) {
        this.accumulator = accumulator;
        this.seed = seed;
        this.concurrent = concurrent;
    }
    MergeScanOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new MergeScanSubscriber(subscriber, this.accumulator, this.seed, this.concurrent));
    };
    return MergeScanOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var MergeScanSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(MergeScanSubscriber, _super);
    function MergeScanSubscriber(destination, accumulator, acc, concurrent) {
        _super.call(this, destination);
        this.accumulator = accumulator;
        this.acc = acc;
        this.concurrent = concurrent;
        this.hasValue = false;
        this.hasCompleted = false;
        this.buffer = [];
        this.active = 0;
        this.index = 0;
    }
    MergeScanSubscriber.prototype._next = function (value) {
        if (this.active < this.concurrent) {
            var index = this.index++;
            var ish = Object(__WEBPACK_IMPORTED_MODULE_0__util_tryCatch__["a" /* tryCatch */])(this.accumulator)(this.acc, value);
            var destination = this.destination;
            if (ish === __WEBPACK_IMPORTED_MODULE_1__util_errorObject__["a" /* errorObject */]) {
                destination.error(__WEBPACK_IMPORTED_MODULE_1__util_errorObject__["a" /* errorObject */].e);
            }
            else {
                this.active++;
                this._innerSub(ish, value, index);
            }
        }
        else {
            this.buffer.push(value);
        }
    };
    MergeScanSubscriber.prototype._innerSub = function (ish, value, index) {
        this.add(Object(__WEBPACK_IMPORTED_MODULE_2__util_subscribeToResult__["a" /* subscribeToResult */])(this, ish, value, index));
    };
    MergeScanSubscriber.prototype._complete = function () {
        this.hasCompleted = true;
        if (this.active === 0 && this.buffer.length === 0) {
            if (this.hasValue === false) {
                this.destination.next(this.acc);
            }
            this.destination.complete();
        }
    };
    MergeScanSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        var destination = this.destination;
        this.acc = innerValue;
        this.hasValue = true;
        destination.next(innerValue);
    };
    MergeScanSubscriber.prototype.notifyComplete = function (innerSub) {
        var buffer = this.buffer;
        this.remove(innerSub);
        this.active--;
        if (buffer.length > 0) {
            this._next(buffer.shift());
        }
        else if (this.active === 0 && this.hasCompleted) {
            if (this.hasValue === false) {
                this.destination.next(this.acc);
            }
            this.destination.complete();
        }
    };
    return MergeScanSubscriber;
}(__WEBPACK_IMPORTED_MODULE_3__OuterSubscriber__["a" /* OuterSubscriber */]));
//# sourceMappingURL=mergeScan.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/min.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export min */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reduce__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/reduce.js");
/** PURE_IMPORTS_START ._reduce PURE_IMPORTS_END */

/**
 * The Min operator operates on an Observable that emits numbers (or items that can be compared with a provided function),
 * and when source Observable completes it emits a single item: the item with the smallest value.
 *
 * <img src="./img/min.png" width="100%">
 *
 * @example <caption>Get the minimal value of a series of numbers</caption>
 * Rx.Observable.of(5, 4, 7, 2, 8)
 *   .min()
 *   .subscribe(x => console.log(x)); // -> 2
 *
 * @example <caption>Use a comparer function to get the minimal item</caption>
 * interface Person {
 *   age: number,
 *   name: string
 * }
 * Observable.of<Person>({age: 7, name: 'Foo'},
 *                       {age: 5, name: 'Bar'},
 *                       {age: 9, name: 'Beer'})
 *           .min<Person>( (a: Person, b: Person) => a.age < b.age ? -1 : 1)
 *           .subscribe((x: Person) => console.log(x.name)); // -> 'Bar'
 * }
 *
 * @see {@link max}
 *
 * @param {Function} [comparer] - Optional comparer function that it will use instead of its default to compare the
 * value of two items.
 * @return {Observable<R>} An Observable that emits item with the smallest value.
 * @method min
 * @owner Observable
 */
function min(comparer) {
    var min = (typeof comparer === 'function')
        ? function (x, y) { return comparer(x, y) < 0 ? x : y; }
        : function (x, y) { return x < y ? x : y; };
    return Object(__WEBPACK_IMPORTED_MODULE_0__reduce__["a" /* reduce */])(min);
}
//# sourceMappingURL=min.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/onErrorResumeNext.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export onErrorResumeNext */
/* unused harmony export onErrorResumeNextStatic */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__observable_FromObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/FromObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_isArray__ = __webpack_require__("./node_modules/rxjs/_esm5/util/isArray.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__OuterSubscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/OuterSubscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_subscribeToResult__ = __webpack_require__("./node_modules/rxjs/_esm5/util/subscribeToResult.js");
/** PURE_IMPORTS_START .._observable_FromObservable,.._util_isArray,.._OuterSubscriber,.._util_subscribeToResult PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};




/* tslint:enable:max-line-length */
/**
 * When any of the provided Observable emits an complete or error notification, it immediately subscribes to the next one
 * that was passed.
 *
 * <span class="informal">Execute series of Observables no matter what, even if it means swallowing errors.</span>
 *
 * <img src="./img/onErrorResumeNext.png" width="100%">
 *
 * `onErrorResumeNext` is an operator that accepts a series of Observables, provided either directly as
 * arguments or as an array. If no single Observable is provided, returned Observable will simply behave the same
 * as the source.
 *
 * `onErrorResumeNext` returns an Observable that starts by subscribing and re-emitting values from the source Observable.
 * When its stream of values ends - no matter if Observable completed or emitted an error - `onErrorResumeNext`
 * will subscribe to the first Observable that was passed as an argument to the method. It will start re-emitting
 * its values as well and - again - when that stream ends, `onErrorResumeNext` will proceed to subscribing yet another
 * Observable in provided series, no matter if previous Observable completed or ended with an error. This will
 * be happening until there is no more Observables left in the series, at which point returned Observable will
 * complete - even if the last subscribed stream ended with an error.
 *
 * `onErrorResumeNext` can be therefore thought of as version of {@link concat} operator, which is more permissive
 * when it comes to the errors emitted by its input Observables. While `concat` subscribes to the next Observable
 * in series only if previous one successfully completed, `onErrorResumeNext` subscribes even if it ended with
 * an error.
 *
 * Note that you do not get any access to errors emitted by the Observables. In particular do not
 * expect these errors to appear in error callback passed to {@link subscribe}. If you want to take
 * specific actions based on what error was emitted by an Observable, you should try out {@link catch} instead.
 *
 *
 * @example <caption>Subscribe to the next Observable after map fails</caption>
 * Rx.Observable.of(1, 2, 3, 0)
 *   .map(x => {
 *       if (x === 0) { throw Error(); }
         return 10 / x;
 *   })
 *   .onErrorResumeNext(Rx.Observable.of(1, 2, 3))
 *   .subscribe(
 *     val => console.log(val),
 *     err => console.log(err),          // Will never be called.
 *     () => console.log('that\'s it!')
 *   );
 *
 * // Logs:
 * // 10
 * // 5
 * // 3.3333333333333335
 * // 1
 * // 2
 * // 3
 * // "that's it!"
 *
 * @see {@link concat}
 * @see {@link catch}
 *
 * @param {...ObservableInput} observables Observables passed either directly or as an array.
 * @return {Observable} An Observable that emits values from source Observable, but - if it errors - subscribes
 * to the next passed Observable and so on, until it completes or runs out of Observables.
 * @method onErrorResumeNext
 * @owner Observable
 */
function onErrorResumeNext() {
    var nextSources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nextSources[_i - 0] = arguments[_i];
    }
    if (nextSources.length === 1 && Object(__WEBPACK_IMPORTED_MODULE_1__util_isArray__["a" /* isArray */])(nextSources[0])) {
        nextSources = nextSources[0];
    }
    return function (source) { return source.lift(new OnErrorResumeNextOperator(nextSources)); };
}
/* tslint:enable:max-line-length */
function onErrorResumeNextStatic() {
    var nextSources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nextSources[_i - 0] = arguments[_i];
    }
    var source = null;
    if (nextSources.length === 1 && Object(__WEBPACK_IMPORTED_MODULE_1__util_isArray__["a" /* isArray */])(nextSources[0])) {
        nextSources = nextSources[0];
    }
    source = nextSources.shift();
    return new __WEBPACK_IMPORTED_MODULE_0__observable_FromObservable__["a" /* FromObservable */](source, null).lift(new OnErrorResumeNextOperator(nextSources));
}
var OnErrorResumeNextOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function OnErrorResumeNextOperator(nextSources) {
        this.nextSources = nextSources;
    }
    OnErrorResumeNextOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new OnErrorResumeNextSubscriber(subscriber, this.nextSources));
    };
    return OnErrorResumeNextOperator;
}());
var OnErrorResumeNextSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(OnErrorResumeNextSubscriber, _super);
    function OnErrorResumeNextSubscriber(destination, nextSources) {
        _super.call(this, destination);
        this.destination = destination;
        this.nextSources = nextSources;
    }
    OnErrorResumeNextSubscriber.prototype.notifyError = function (error, innerSub) {
        this.subscribeToNextSource();
    };
    OnErrorResumeNextSubscriber.prototype.notifyComplete = function (innerSub) {
        this.subscribeToNextSource();
    };
    OnErrorResumeNextSubscriber.prototype._error = function (err) {
        this.subscribeToNextSource();
    };
    OnErrorResumeNextSubscriber.prototype._complete = function () {
        this.subscribeToNextSource();
    };
    OnErrorResumeNextSubscriber.prototype.subscribeToNextSource = function () {
        var next = this.nextSources.shift();
        if (next) {
            this.add(Object(__WEBPACK_IMPORTED_MODULE_3__util_subscribeToResult__["a" /* subscribeToResult */])(this, next));
        }
        else {
            this.destination.complete();
        }
    };
    return OnErrorResumeNextSubscriber;
}(__WEBPACK_IMPORTED_MODULE_2__OuterSubscriber__["a" /* OuterSubscriber */]));
//# sourceMappingURL=onErrorResumeNext.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/pairwise.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export pairwise */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscriber.js");
/** PURE_IMPORTS_START .._Subscriber PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * Groups pairs of consecutive emissions together and emits them as an array of
 * two values.
 *
 * <span class="informal">Puts the current value and previous value together as
 * an array, and emits that.</span>
 *
 * <img src="./img/pairwise.png" width="100%">
 *
 * The Nth emission from the source Observable will cause the output Observable
 * to emit an array [(N-1)th, Nth] of the previous and the current value, as a
 * pair. For this reason, `pairwise` emits on the second and subsequent
 * emissions from the source Observable, but not on the first emission, because
 * there is no previous value in that case.
 *
 * @example <caption>On every click (starting from the second), emit the relative distance to the previous click</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var pairs = clicks.pairwise();
 * var distance = pairs.map(pair => {
 *   var x0 = pair[0].clientX;
 *   var y0 = pair[0].clientY;
 *   var x1 = pair[1].clientX;
 *   var y1 = pair[1].clientY;
 *   return Math.sqrt(Math.pow(x0 - x1, 2) + Math.pow(y0 - y1, 2));
 * });
 * distance.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferCount}
 *
 * @return {Observable<Array<T>>} An Observable of pairs (as arrays) of
 * consecutive values from the source Observable.
 * @method pairwise
 * @owner Observable
 */
function pairwise() {
    return function (source) { return source.lift(new PairwiseOperator()); };
}
var PairwiseOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function PairwiseOperator() {
    }
    PairwiseOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new PairwiseSubscriber(subscriber));
    };
    return PairwiseOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var PairwiseSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(PairwiseSubscriber, _super);
    function PairwiseSubscriber(destination) {
        _super.call(this, destination);
        this.hasPrev = false;
    }
    PairwiseSubscriber.prototype._next = function (value) {
        if (this.hasPrev) {
            this.destination.next([this.prev, value]);
        }
        else {
            this.hasPrev = true;
        }
        this.prev = value;
    };
    return PairwiseSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */]));
//# sourceMappingURL=pairwise.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/partition.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export partition */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_not__ = __webpack_require__("./node_modules/rxjs/_esm5/util/not.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__filter__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/filter.js");
/** PURE_IMPORTS_START .._util_not,._filter PURE_IMPORTS_END */


/**
 * Splits the source Observable into two, one with values that satisfy a
 * predicate, and another with values that don't satisfy the predicate.
 *
 * <span class="informal">It's like {@link filter}, but returns two Observables:
 * one like the output of {@link filter}, and the other with values that did not
 * pass the condition.</span>
 *
 * <img src="./img/partition.png" width="100%">
 *
 * `partition` outputs an array with two Observables that partition the values
 * from the source Observable through the given `predicate` function. The first
 * Observable in that array emits source values for which the predicate argument
 * returns true. The second Observable emits source values for which the
 * predicate returns false. The first behaves like {@link filter} and the second
 * behaves like {@link filter} with the predicate negated.
 *
 * @example <caption>Partition click events into those on DIV elements and those elsewhere</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var parts = clicks.partition(ev => ev.target.tagName === 'DIV');
 * var clicksOnDivs = parts[0];
 * var clicksElsewhere = parts[1];
 * clicksOnDivs.subscribe(x => console.log('DIV clicked: ', x));
 * clicksElsewhere.subscribe(x => console.log('Other clicked: ', x));
 *
 * @see {@link filter}
 *
 * @param {function(value: T, index: number): boolean} predicate A function that
 * evaluates each value emitted by the source Observable. If it returns `true`,
 * the value is emitted on the first Observable in the returned array, if
 * `false` the value is emitted on the second Observable in the array. The
 * `index` parameter is the number `i` for the i-th source emission that has
 * happened since the subscription, starting from the number `0`.
 * @param {any} [thisArg] An optional argument to determine the value of `this`
 * in the `predicate` function.
 * @return {[Observable<T>, Observable<T>]} An array with two Observables: one
 * with values that passed the predicate, and another with values that did not
 * pass the predicate.
 * @method partition
 * @owner Observable
 */
function partition(predicate, thisArg) {
    return function (source) {
        return [
            Object(__WEBPACK_IMPORTED_MODULE_1__filter__["a" /* filter */])(predicate, thisArg)(source),
            Object(__WEBPACK_IMPORTED_MODULE_1__filter__["a" /* filter */])(Object(__WEBPACK_IMPORTED_MODULE_0__util_not__["a" /* not */])(predicate, thisArg))(source)
        ];
    };
}
//# sourceMappingURL=partition.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/pluck.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export pluck */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__map__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
/** PURE_IMPORTS_START ._map PURE_IMPORTS_END */

/**
 * Maps each source value (an object) to its specified nested property.
 *
 * <span class="informal">Like {@link map}, but meant only for picking one of
 * the nested properties of every emitted object.</span>
 *
 * <img src="./img/pluck.png" width="100%">
 *
 * Given a list of strings describing a path to an object property, retrieves
 * the value of a specified nested property from all values in the source
 * Observable. If a property can't be resolved, it will return `undefined` for
 * that value.
 *
 * @example <caption>Map every click to the tagName of the clicked target element</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var tagNames = clicks.pluck('target', 'tagName');
 * tagNames.subscribe(x => console.log(x));
 *
 * @see {@link map}
 *
 * @param {...string} properties The nested properties to pluck from each source
 * value (an object).
 * @return {Observable} A new Observable of property values from the source values.
 * @method pluck
 * @owner Observable
 */
function pluck() {
    var properties = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        properties[_i - 0] = arguments[_i];
    }
    var length = properties.length;
    if (length === 0) {
        throw new Error('list of properties cannot be empty.');
    }
    return function (source) { return Object(__WEBPACK_IMPORTED_MODULE_0__map__["a" /* map */])(plucker(properties, length))(source); };
}
function plucker(props, length) {
    var mapper = function (x) {
        var currentProp = x;
        for (var i = 0; i < length; i++) {
            var p = currentProp[props[i]];
            if (typeof p !== 'undefined') {
                currentProp = p;
            }
            else {
                return undefined;
            }
        }
        return currentProp;
    };
    return mapper;
}
//# sourceMappingURL=pluck.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/publish.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export publish */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__multicast__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/multicast.js");
/** PURE_IMPORTS_START .._Subject,._multicast PURE_IMPORTS_END */


/* tslint:enable:max-line-length */
/**
 * Returns a ConnectableObservable, which is a variety of Observable that waits until its connect method is called
 * before it begins emitting items to those Observers that have subscribed to it.
 *
 * <img src="./img/publish.png" width="100%">
 *
 * @param {Function} [selector] - Optional selector function which can use the multicasted source sequence as many times
 * as needed, without causing multiple subscriptions to the source sequence.
 * Subscribers to the given source will receive all notifications of the source from the time of the subscription on.
 * @return A ConnectableObservable that upon connection causes the source Observable to emit items to its Observers.
 * @method publish
 * @owner Observable
 */
function publish(selector) {
    return selector ?
        Object(__WEBPACK_IMPORTED_MODULE_1__multicast__["a" /* multicast */])(function () { return new __WEBPACK_IMPORTED_MODULE_0__Subject__["a" /* Subject */](); }, selector) :
        Object(__WEBPACK_IMPORTED_MODULE_1__multicast__["a" /* multicast */])(new __WEBPACK_IMPORTED_MODULE_0__Subject__["a" /* Subject */]());
}
//# sourceMappingURL=publish.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/publishBehavior.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export publishBehavior */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__multicast__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/multicast.js");
/** PURE_IMPORTS_START .._BehaviorSubject,._multicast PURE_IMPORTS_END */


/**
 * @param value
 * @return {ConnectableObservable<T>}
 * @method publishBehavior
 * @owner Observable
 */
function publishBehavior(value) {
    return function (source) { return Object(__WEBPACK_IMPORTED_MODULE_1__multicast__["a" /* multicast */])(new __WEBPACK_IMPORTED_MODULE_0__BehaviorSubject__["a" /* BehaviorSubject */](value))(source); };
}
//# sourceMappingURL=publishBehavior.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/publishLast.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export publishLast */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AsyncSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/AsyncSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__multicast__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/multicast.js");
/** PURE_IMPORTS_START .._AsyncSubject,._multicast PURE_IMPORTS_END */


function publishLast() {
    return function (source) { return Object(__WEBPACK_IMPORTED_MODULE_1__multicast__["a" /* multicast */])(new __WEBPACK_IMPORTED_MODULE_0__AsyncSubject__["a" /* AsyncSubject */]())(source); };
}
//# sourceMappingURL=publishLast.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/publishReplay.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export publishReplay */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ReplaySubject__ = __webpack_require__("./node_modules/rxjs/_esm5/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__multicast__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/multicast.js");
/** PURE_IMPORTS_START .._ReplaySubject,._multicast PURE_IMPORTS_END */


/* tslint:enable:max-line-length */
function publishReplay(bufferSize, windowTime, selectorOrScheduler, scheduler) {
    if (selectorOrScheduler && typeof selectorOrScheduler !== 'function') {
        scheduler = selectorOrScheduler;
    }
    var selector = typeof selectorOrScheduler === 'function' ? selectorOrScheduler : undefined;
    var subject = new __WEBPACK_IMPORTED_MODULE_0__ReplaySubject__["a" /* ReplaySubject */](bufferSize, windowTime, scheduler);
    return function (source) { return Object(__WEBPACK_IMPORTED_MODULE_1__multicast__["a" /* multicast */])(function () { return subject; }, selector)(source); };
}
//# sourceMappingURL=publishReplay.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/race.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export race */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_isArray__ = __webpack_require__("./node_modules/rxjs/_esm5/util/isArray.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_race__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/race.js");
/** PURE_IMPORTS_START .._util_isArray,.._observable_race PURE_IMPORTS_END */


/* tslint:enable:max-line-length */
/**
 * Returns an Observable that mirrors the first source Observable to emit an item
 * from the combination of this Observable and supplied Observables.
 * @param {...Observables} ...observables Sources used to race for which Observable emits first.
 * @return {Observable} An Observable that mirrors the output of the first Observable to emit an item.
 * @method race
 * @owner Observable
 */
function race() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    return function raceOperatorFunction(source) {
        // if the only argument is an array, it was most likely called with
        // `pair([obs1, obs2, ...])`
        if (observables.length === 1 && Object(__WEBPACK_IMPORTED_MODULE_0__util_isArray__["a" /* isArray */])(observables[0])) {
            observables = observables[0];
        }
        return source.lift.call(__WEBPACK_IMPORTED_MODULE_1__observable_race__["a" /* race */].apply(void 0, [source].concat(observables)));
    };
}
//# sourceMappingURL=race.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/repeat.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export repeat */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_EmptyObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/EmptyObservable.js");
/** PURE_IMPORTS_START .._Subscriber,.._observable_EmptyObservable PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/**
 * Returns an Observable that repeats the stream of items emitted by the source Observable at most count times.
 *
 * <img src="./img/repeat.png" width="100%">
 *
 * @param {number} [count] The number of times the source Observable items are repeated, a count of 0 will yield
 * an empty Observable.
 * @return {Observable} An Observable that repeats the stream of items emitted by the source Observable at most
 * count times.
 * @method repeat
 * @owner Observable
 */
function repeat(count) {
    if (count === void 0) {
        count = -1;
    }
    return function (source) {
        if (count === 0) {
            return new __WEBPACK_IMPORTED_MODULE_1__observable_EmptyObservable__["a" /* EmptyObservable */]();
        }
        else if (count < 0) {
            return source.lift(new RepeatOperator(-1, source));
        }
        else {
            return source.lift(new RepeatOperator(count - 1, source));
        }
    };
}
var RepeatOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function RepeatOperator(count, source) {
        this.count = count;
        this.source = source;
    }
    RepeatOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new RepeatSubscriber(subscriber, this.count, this.source));
    };
    return RepeatOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var RepeatSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(RepeatSubscriber, _super);
    function RepeatSubscriber(destination, count, source) {
        _super.call(this, destination);
        this.count = count;
        this.source = source;
    }
    RepeatSubscriber.prototype.complete = function () {
        if (!this.isStopped) {
            var _a = this, source = _a.source, count = _a.count;
            if (count === 0) {
                return _super.prototype.complete.call(this);
            }
            else if (count > -1) {
                this.count = count - 1;
            }
            source.subscribe(this._unsubscribeAndRecycle());
        }
    };
    return RepeatSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */]));
//# sourceMappingURL=repeat.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/repeatWhen.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export repeatWhen */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_tryCatch__ = __webpack_require__("./node_modules/rxjs/_esm5/util/tryCatch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_errorObject__ = __webpack_require__("./node_modules/rxjs/_esm5/util/errorObject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__OuterSubscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/OuterSubscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_subscribeToResult__ = __webpack_require__("./node_modules/rxjs/_esm5/util/subscribeToResult.js");
/** PURE_IMPORTS_START .._Subject,.._util_tryCatch,.._util_errorObject,.._OuterSubscriber,.._util_subscribeToResult PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};





/**
 * Returns an Observable that mirrors the source Observable with the exception of a `complete`. If the source
 * Observable calls `complete`, this method will emit to the Observable returned from `notifier`. If that Observable
 * calls `complete` or `error`, then this method will call `complete` or `error` on the child subscription. Otherwise
 * this method will resubscribe to the source Observable.
 *
 * <img src="./img/repeatWhen.png" width="100%">
 *
 * @param {function(notifications: Observable): Observable} notifier - Receives an Observable of notifications with
 * which a user can `complete` or `error`, aborting the repetition.
 * @return {Observable} The source Observable modified with repeat logic.
 * @method repeatWhen
 * @owner Observable
 */
function repeatWhen(notifier) {
    return function (source) { return source.lift(new RepeatWhenOperator(notifier)); };
}
var RepeatWhenOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function RepeatWhenOperator(notifier) {
        this.notifier = notifier;
    }
    RepeatWhenOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new RepeatWhenSubscriber(subscriber, this.notifier, source));
    };
    return RepeatWhenOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var RepeatWhenSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(RepeatWhenSubscriber, _super);
    function RepeatWhenSubscriber(destination, notifier, source) {
        _super.call(this, destination);
        this.notifier = notifier;
        this.source = source;
        this.sourceIsBeingSubscribedTo = true;
    }
    RepeatWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.sourceIsBeingSubscribedTo = true;
        this.source.subscribe(this);
    };
    RepeatWhenSubscriber.prototype.notifyComplete = function (innerSub) {
        if (this.sourceIsBeingSubscribedTo === false) {
            return _super.prototype.complete.call(this);
        }
    };
    RepeatWhenSubscriber.prototype.complete = function () {
        this.sourceIsBeingSubscribedTo = false;
        if (!this.isStopped) {
            if (!this.retries) {
                this.subscribeToRetries();
            }
            else if (this.retriesSubscription.closed) {
                return _super.prototype.complete.call(this);
            }
            this._unsubscribeAndRecycle();
            this.notifications.next();
        }
    };
    RepeatWhenSubscriber.prototype._unsubscribe = function () {
        var _a = this, notifications = _a.notifications, retriesSubscription = _a.retriesSubscription;
        if (notifications) {
            notifications.unsubscribe();
            this.notifications = null;
        }
        if (retriesSubscription) {
            retriesSubscription.unsubscribe();
            this.retriesSubscription = null;
        }
        this.retries = null;
    };
    RepeatWhenSubscriber.prototype._unsubscribeAndRecycle = function () {
        var _a = this, notifications = _a.notifications, retries = _a.retries, retriesSubscription = _a.retriesSubscription;
        this.notifications = null;
        this.retries = null;
        this.retriesSubscription = null;
        _super.prototype._unsubscribeAndRecycle.call(this);
        this.notifications = notifications;
        this.retries = retries;
        this.retriesSubscription = retriesSubscription;
        return this;
    };
    RepeatWhenSubscriber.prototype.subscribeToRetries = function () {
        this.notifications = new __WEBPACK_IMPORTED_MODULE_0__Subject__["a" /* Subject */]();
        var retries = Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(this.notifier)(this.notifications);
        if (retries === __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */]) {
            return _super.prototype.complete.call(this);
        }
        this.retries = retries;
        this.retriesSubscription = Object(__WEBPACK_IMPORTED_MODULE_4__util_subscribeToResult__["a" /* subscribeToResult */])(this, retries);
    };
    return RepeatWhenSubscriber;
}(__WEBPACK_IMPORTED_MODULE_3__OuterSubscriber__["a" /* OuterSubscriber */]));
//# sourceMappingURL=repeatWhen.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/retry.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export retry */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscriber.js");
/** PURE_IMPORTS_START .._Subscriber PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * Returns an Observable that mirrors the source Observable with the exception of an `error`. If the source Observable
 * calls `error`, this method will resubscribe to the source Observable for a maximum of `count` resubscriptions (given
 * as a number parameter) rather than propagating the `error` call.
 *
 * <img src="./img/retry.png" width="100%">
 *
 * Any and all items emitted by the source Observable will be emitted by the resulting Observable, even those emitted
 * during failed subscriptions. For example, if an Observable fails at first but emits [1, 2] then succeeds the second
 * time and emits: [1, 2, 3, 4, 5] then the complete stream of emissions and notifications
 * would be: [1, 2, 1, 2, 3, 4, 5, `complete`].
 * @param {number} count - Number of retry attempts before failing.
 * @return {Observable} The source Observable modified with the retry logic.
 * @method retry
 * @owner Observable
 */
function retry(count) {
    if (count === void 0) {
        count = -1;
    }
    return function (source) { return source.lift(new RetryOperator(count, source)); };
}
var RetryOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function RetryOperator(count, source) {
        this.count = count;
        this.source = source;
    }
    RetryOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new RetrySubscriber(subscriber, this.count, this.source));
    };
    return RetryOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var RetrySubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(RetrySubscriber, _super);
    function RetrySubscriber(destination, count, source) {
        _super.call(this, destination);
        this.count = count;
        this.source = source;
    }
    RetrySubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _a = this, source = _a.source, count = _a.count;
            if (count === 0) {
                return _super.prototype.error.call(this, err);
            }
            else if (count > -1) {
                this.count = count - 1;
            }
            source.subscribe(this._unsubscribeAndRecycle());
        }
    };
    return RetrySubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */]));
//# sourceMappingURL=retry.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/retryWhen.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export retryWhen */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_tryCatch__ = __webpack_require__("./node_modules/rxjs/_esm5/util/tryCatch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_errorObject__ = __webpack_require__("./node_modules/rxjs/_esm5/util/errorObject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__OuterSubscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/OuterSubscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_subscribeToResult__ = __webpack_require__("./node_modules/rxjs/_esm5/util/subscribeToResult.js");
/** PURE_IMPORTS_START .._Subject,.._util_tryCatch,.._util_errorObject,.._OuterSubscriber,.._util_subscribeToResult PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};





/**
 * Returns an Observable that mirrors the source Observable with the exception of an `error`. If the source Observable
 * calls `error`, this method will emit the Throwable that caused the error to the Observable returned from `notifier`.
 * If that Observable calls `complete` or `error` then this method will call `complete` or `error` on the child
 * subscription. Otherwise this method will resubscribe to the source Observable.
 *
 * <img src="./img/retryWhen.png" width="100%">
 *
 * @param {function(errors: Observable): Observable} notifier - Receives an Observable of notifications with which a
 * user can `complete` or `error`, aborting the retry.
 * @return {Observable} The source Observable modified with retry logic.
 * @method retryWhen
 * @owner Observable
 */
function retryWhen(notifier) {
    return function (source) { return source.lift(new RetryWhenOperator(notifier, source)); };
}
var RetryWhenOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function RetryWhenOperator(notifier, source) {
        this.notifier = notifier;
        this.source = source;
    }
    RetryWhenOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new RetryWhenSubscriber(subscriber, this.notifier, this.source));
    };
    return RetryWhenOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var RetryWhenSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(RetryWhenSubscriber, _super);
    function RetryWhenSubscriber(destination, notifier, source) {
        _super.call(this, destination);
        this.notifier = notifier;
        this.source = source;
    }
    RetryWhenSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var errors = this.errors;
            var retries = this.retries;
            var retriesSubscription = this.retriesSubscription;
            if (!retries) {
                errors = new __WEBPACK_IMPORTED_MODULE_0__Subject__["a" /* Subject */]();
                retries = Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(this.notifier)(errors);
                if (retries === __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */]) {
                    return _super.prototype.error.call(this, __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */].e);
                }
                retriesSubscription = Object(__WEBPACK_IMPORTED_MODULE_4__util_subscribeToResult__["a" /* subscribeToResult */])(this, retries);
            }
            else {
                this.errors = null;
                this.retriesSubscription = null;
            }
            this._unsubscribeAndRecycle();
            this.errors = errors;
            this.retries = retries;
            this.retriesSubscription = retriesSubscription;
            errors.next(err);
        }
    };
    RetryWhenSubscriber.prototype._unsubscribe = function () {
        var _a = this, errors = _a.errors, retriesSubscription = _a.retriesSubscription;
        if (errors) {
            errors.unsubscribe();
            this.errors = null;
        }
        if (retriesSubscription) {
            retriesSubscription.unsubscribe();
            this.retriesSubscription = null;
        }
        this.retries = null;
    };
    RetryWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        var _a = this, errors = _a.errors, retries = _a.retries, retriesSubscription = _a.retriesSubscription;
        this.errors = null;
        this.retries = null;
        this.retriesSubscription = null;
        this._unsubscribeAndRecycle();
        this.errors = errors;
        this.retries = retries;
        this.retriesSubscription = retriesSubscription;
        this.source.subscribe(this);
    };
    return RetryWhenSubscriber;
}(__WEBPACK_IMPORTED_MODULE_3__OuterSubscriber__["a" /* OuterSubscriber */]));
//# sourceMappingURL=retryWhen.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/sample.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export sample */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__OuterSubscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/OuterSubscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__ = __webpack_require__("./node_modules/rxjs/_esm5/util/subscribeToResult.js");
/** PURE_IMPORTS_START .._OuterSubscriber,.._util_subscribeToResult PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/**
 * Emits the most recently emitted value from the source Observable whenever
 * another Observable, the `notifier`, emits.
 *
 * <span class="informal">It's like {@link sampleTime}, but samples whenever
 * the `notifier` Observable emits something.</span>
 *
 * <img src="./img/sample.png" width="100%">
 *
 * Whenever the `notifier` Observable emits a value or completes, `sample`
 * looks at the source Observable and emits whichever value it has most recently
 * emitted since the previous sampling, unless the source has not emitted
 * anything since the previous sampling. The `notifier` is subscribed to as soon
 * as the output Observable is subscribed.
 *
 * @example <caption>On every click, sample the most recent "seconds" timer</caption>
 * var seconds = Rx.Observable.interval(1000);
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = seconds.sample(clicks);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link audit}
 * @see {@link debounce}
 * @see {@link sampleTime}
 * @see {@link throttle}
 *
 * @param {Observable<any>} notifier The Observable to use for sampling the
 * source Observable.
 * @return {Observable<T>} An Observable that emits the results of sampling the
 * values emitted by the source Observable whenever the notifier Observable
 * emits value or completes.
 * @method sample
 * @owner Observable
 */
function sample(notifier) {
    return function (source) { return source.lift(new SampleOperator(notifier)); };
}
var SampleOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function SampleOperator(notifier) {
        this.notifier = notifier;
    }
    SampleOperator.prototype.call = function (subscriber, source) {
        var sampleSubscriber = new SampleSubscriber(subscriber);
        var subscription = source.subscribe(sampleSubscriber);
        subscription.add(Object(__WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__["a" /* subscribeToResult */])(sampleSubscriber, this.notifier));
        return subscription;
    };
    return SampleOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SampleSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(SampleSubscriber, _super);
    function SampleSubscriber() {
        _super.apply(this, arguments);
        this.hasValue = false;
    }
    SampleSubscriber.prototype._next = function (value) {
        this.value = value;
        this.hasValue = true;
    };
    SampleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.emitValue();
    };
    SampleSubscriber.prototype.notifyComplete = function () {
        this.emitValue();
    };
    SampleSubscriber.prototype.emitValue = function () {
        if (this.hasValue) {
            this.hasValue = false;
            this.destination.next(this.value);
        }
    };
    return SampleSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__OuterSubscriber__["a" /* OuterSubscriber */]));
//# sourceMappingURL=sample.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/sampleTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export sampleTime */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scheduler_async__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/async.js");
/** PURE_IMPORTS_START .._Subscriber,.._scheduler_async PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/**
 * Emits the most recently emitted value from the source Observable within
 * periodic time intervals.
 *
 * <span class="informal">Samples the source Observable at periodic time
 * intervals, emitting what it samples.</span>
 *
 * <img src="./img/sampleTime.png" width="100%">
 *
 * `sampleTime` periodically looks at the source Observable and emits whichever
 * value it has most recently emitted since the previous sampling, unless the
 * source has not emitted anything since the previous sampling. The sampling
 * happens periodically in time every `period` milliseconds (or the time unit
 * defined by the optional `scheduler` argument). The sampling starts as soon as
 * the output Observable is subscribed.
 *
 * @example <caption>Every second, emit the most recent click at most once</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.sampleTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounceTime}
 * @see {@link delay}
 * @see {@link sample}
 * @see {@link throttleTime}
 *
 * @param {number} period The sampling period expressed in milliseconds or the
 * time unit determined internally by the optional `scheduler`.
 * @param {Scheduler} [scheduler=async] The {@link IScheduler} to use for
 * managing the timers that handle the sampling.
 * @return {Observable<T>} An Observable that emits the results of sampling the
 * values emitted by the source Observable at the specified time interval.
 * @method sampleTime
 * @owner Observable
 */
function sampleTime(period, scheduler) {
    if (scheduler === void 0) {
        scheduler = __WEBPACK_IMPORTED_MODULE_1__scheduler_async__["a" /* async */];
    }
    return function (source) { return source.lift(new SampleTimeOperator(period, scheduler)); };
}
var SampleTimeOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function SampleTimeOperator(period, scheduler) {
        this.period = period;
        this.scheduler = scheduler;
    }
    SampleTimeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new SampleTimeSubscriber(subscriber, this.period, this.scheduler));
    };
    return SampleTimeOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SampleTimeSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(SampleTimeSubscriber, _super);
    function SampleTimeSubscriber(destination, period, scheduler) {
        _super.call(this, destination);
        this.period = period;
        this.scheduler = scheduler;
        this.hasValue = false;
        this.add(scheduler.schedule(dispatchNotification, period, { subscriber: this, period: period }));
    }
    SampleTimeSubscriber.prototype._next = function (value) {
        this.lastValue = value;
        this.hasValue = true;
    };
    SampleTimeSubscriber.prototype.notifyNext = function () {
        if (this.hasValue) {
            this.hasValue = false;
            this.destination.next(this.lastValue);
        }
    };
    return SampleTimeSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */]));
function dispatchNotification(state) {
    var subscriber = state.subscriber, period = state.period;
    subscriber.notifyNext();
    this.schedule(state, period);
}
//# sourceMappingURL=sampleTime.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/sequenceEqual.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export sequenceEqual */
/* unused harmony export SequenceEqualOperator */
/* unused harmony export SequenceEqualSubscriber */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_tryCatch__ = __webpack_require__("./node_modules/rxjs/_esm5/util/tryCatch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_errorObject__ = __webpack_require__("./node_modules/rxjs/_esm5/util/errorObject.js");
/** PURE_IMPORTS_START .._Subscriber,.._util_tryCatch,.._util_errorObject PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



/**
 * Compares all values of two observables in sequence using an optional comparor function
 * and returns an observable of a single boolean value representing whether or not the two sequences
 * are equal.
 *
 * <span class="informal">Checks to see of all values emitted by both observables are equal, in order.</span>
 *
 * <img src="./img/sequenceEqual.png" width="100%">
 *
 * `sequenceEqual` subscribes to two observables and buffers incoming values from each observable. Whenever either
 * observable emits a value, the value is buffered and the buffers are shifted and compared from the bottom
 * up; If any value pair doesn't match, the returned observable will emit `false` and complete. If one of the
 * observables completes, the operator will wait for the other observable to complete; If the other
 * observable emits before completing, the returned observable will emit `false` and complete. If one observable never
 * completes or emits after the other complets, the returned observable will never complete.
 *
 * @example <caption>figure out if the Konami code matches</caption>
 * var code = Rx.Observable.from([
 *  "ArrowUp",
 *  "ArrowUp",
 *  "ArrowDown",
 *  "ArrowDown",
 *  "ArrowLeft",
 *  "ArrowRight",
 *  "ArrowLeft",
 *  "ArrowRight",
 *  "KeyB",
 *  "KeyA",
 *  "Enter" // no start key, clearly.
 * ]);
 *
 * var keys = Rx.Observable.fromEvent(document, 'keyup')
 *  .map(e => e.code);
 * var matches = keys.bufferCount(11, 1)
 *  .mergeMap(
 *    last11 =>
 *      Rx.Observable.from(last11)
 *        .sequenceEqual(code)
 *   );
 * matches.subscribe(matched => console.log('Successful cheat at Contra? ', matched));
 *
 * @see {@link combineLatest}
 * @see {@link zip}
 * @see {@link withLatestFrom}
 *
 * @param {Observable} compareTo The observable sequence to compare the source sequence to.
 * @param {function} [comparor] An optional function to compare each value pair
 * @return {Observable} An Observable of a single boolean value representing whether or not
 * the values emitted by both observables were equal in sequence.
 * @method sequenceEqual
 * @owner Observable
 */
function sequenceEqual(compareTo, comparor) {
    return function (source) { return source.lift(new SequenceEqualOperator(compareTo, comparor)); };
}
var SequenceEqualOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function SequenceEqualOperator(compareTo, comparor) {
        this.compareTo = compareTo;
        this.comparor = comparor;
    }
    SequenceEqualOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new SequenceEqualSubscriber(subscriber, this.compareTo, this.comparor));
    };
    return SequenceEqualOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SequenceEqualSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(SequenceEqualSubscriber, _super);
    function SequenceEqualSubscriber(destination, compareTo, comparor) {
        _super.call(this, destination);
        this.compareTo = compareTo;
        this.comparor = comparor;
        this._a = [];
        this._b = [];
        this._oneComplete = false;
        this.add(compareTo.subscribe(new SequenceEqualCompareToSubscriber(destination, this)));
    }
    SequenceEqualSubscriber.prototype._next = function (value) {
        if (this._oneComplete && this._b.length === 0) {
            this.emit(false);
        }
        else {
            this._a.push(value);
            this.checkValues();
        }
    };
    SequenceEqualSubscriber.prototype._complete = function () {
        if (this._oneComplete) {
            this.emit(this._a.length === 0 && this._b.length === 0);
        }
        else {
            this._oneComplete = true;
        }
    };
    SequenceEqualSubscriber.prototype.checkValues = function () {
        var _c = this, _a = _c._a, _b = _c._b, comparor = _c.comparor;
        while (_a.length > 0 && _b.length > 0) {
            var a = _a.shift();
            var b = _b.shift();
            var areEqual = false;
            if (comparor) {
                areEqual = Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(comparor)(a, b);
                if (areEqual === __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */]) {
                    this.destination.error(__WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */].e);
                }
            }
            else {
                areEqual = a === b;
            }
            if (!areEqual) {
                this.emit(false);
            }
        }
    };
    SequenceEqualSubscriber.prototype.emit = function (value) {
        var destination = this.destination;
        destination.next(value);
        destination.complete();
    };
    SequenceEqualSubscriber.prototype.nextB = function (value) {
        if (this._oneComplete && this._a.length === 0) {
            this.emit(false);
        }
        else {
            this._b.push(value);
            this.checkValues();
        }
    };
    return SequenceEqualSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */]));
var SequenceEqualCompareToSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(SequenceEqualCompareToSubscriber, _super);
    function SequenceEqualCompareToSubscriber(destination, parent) {
        _super.call(this, destination);
        this.parent = parent;
    }
    SequenceEqualCompareToSubscriber.prototype._next = function (value) {
        this.parent.nextB(value);
    };
    SequenceEqualCompareToSubscriber.prototype._error = function (err) {
        this.parent.error(err);
    };
    SequenceEqualCompareToSubscriber.prototype._complete = function () {
        this.parent._complete();
    };
    return SequenceEqualCompareToSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */]));
//# sourceMappingURL=sequenceEqual.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/shareReplay.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export shareReplay */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ReplaySubject__ = __webpack_require__("./node_modules/rxjs/_esm5/ReplaySubject.js");
/** PURE_IMPORTS_START .._ReplaySubject PURE_IMPORTS_END */

/**
 * @method shareReplay
 * @owner Observable
 */
function shareReplay(bufferSize, windowTime, scheduler) {
    return function (source) { return source.lift(shareReplayOperator(bufferSize, windowTime, scheduler)); };
}
function shareReplayOperator(bufferSize, windowTime, scheduler) {
    var subject;
    var refCount = 0;
    var subscription;
    var hasError = false;
    var isComplete = false;
    return function shareReplayOperation(source) {
        refCount++;
        if (!subject || hasError) {
            hasError = false;
            subject = new __WEBPACK_IMPORTED_MODULE_0__ReplaySubject__["a" /* ReplaySubject */](bufferSize, windowTime, scheduler);
            subscription = source.subscribe({
                next: function (value) { subject.next(value); },
                error: function (err) {
                    hasError = true;
                    subject.error(err);
                },
                complete: function () {
                    isComplete = true;
                    subject.complete();
                },
            });
        }
        var innerSub = subject.subscribe(this);
        return function () {
            refCount--;
            innerSub.unsubscribe();
            if (subscription && refCount === 0 && isComplete) {
                subscription.unsubscribe();
            }
        };
    };
}
;
//# sourceMappingURL=shareReplay.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/single.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export single */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_EmptyError__ = __webpack_require__("./node_modules/rxjs/_esm5/util/EmptyError.js");
/** PURE_IMPORTS_START .._Subscriber,.._util_EmptyError PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/**
 * Returns an Observable that emits the single item emitted by the source Observable that matches a specified
 * predicate, if that Observable emits one such item. If the source Observable emits more than one such item or no
 * such items, notify of an IllegalArgumentException or NoSuchElementException respectively.
 *
 * <img src="./img/single.png" width="100%">
 *
 * @throws {EmptyError} Delivers an EmptyError to the Observer's `error`
 * callback if the Observable completes before any `next` notification was sent.
 * @param {Function} predicate - A predicate function to evaluate items emitted by the source Observable.
 * @return {Observable<T>} An Observable that emits the single item emitted by the source Observable that matches
 * the predicate.
 .
 * @method single
 * @owner Observable
 */
function single(predicate) {
    return function (source) { return source.lift(new SingleOperator(predicate, source)); };
}
var SingleOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function SingleOperator(predicate, source) {
        this.predicate = predicate;
        this.source = source;
    }
    SingleOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new SingleSubscriber(subscriber, this.predicate, this.source));
    };
    return SingleOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SingleSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(SingleSubscriber, _super);
    function SingleSubscriber(destination, predicate, source) {
        _super.call(this, destination);
        this.predicate = predicate;
        this.source = source;
        this.seenValue = false;
        this.index = 0;
    }
    SingleSubscriber.prototype.applySingleValue = function (value) {
        if (this.seenValue) {
            this.destination.error('Sequence contains more than one element');
        }
        else {
            this.seenValue = true;
            this.singleValue = value;
        }
    };
    SingleSubscriber.prototype._next = function (value) {
        var index = this.index++;
        if (this.predicate) {
            this.tryNext(value, index);
        }
        else {
            this.applySingleValue(value);
        }
    };
    SingleSubscriber.prototype.tryNext = function (value, index) {
        try {
            if (this.predicate(value, index, this.source)) {
                this.applySingleValue(value);
            }
        }
        catch (err) {
            this.destination.error(err);
        }
    };
    SingleSubscriber.prototype._complete = function () {
        var destination = this.destination;
        if (this.index > 0) {
            destination.next(this.seenValue ? this.singleValue : undefined);
            destination.complete();
        }
        else {
            destination.error(new __WEBPACK_IMPORTED_MODULE_1__util_EmptyError__["a" /* EmptyError */]);
        }
    };
    return SingleSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */]));
//# sourceMappingURL=single.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/skip.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export skip */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscriber.js");
/** PURE_IMPORTS_START .._Subscriber PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * Returns an Observable that skips the first `count` items emitted by the source Observable.
 *
 * <img src="./img/skip.png" width="100%">
 *
 * @param {Number} count - The number of times, items emitted by source Observable should be skipped.
 * @return {Observable} An Observable that skips values emitted by the source Observable.
 *
 * @method skip
 * @owner Observable
 */
function skip(count) {
    return function (source) { return source.lift(new SkipOperator(count)); };
}
var SkipOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function SkipOperator(total) {
        this.total = total;
    }
    SkipOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new SkipSubscriber(subscriber, this.total));
    };
    return SkipOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SkipSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(SkipSubscriber, _super);
    function SkipSubscriber(destination, total) {
        _super.call(this, destination);
        this.total = total;
        this.count = 0;
    }
    SkipSubscriber.prototype._next = function (x) {
        if (++this.count > this.total) {
            this.destination.next(x);
        }
    };
    return SkipSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */]));
//# sourceMappingURL=skip.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/skipLast.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export skipLast */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_ArgumentOutOfRangeError__ = __webpack_require__("./node_modules/rxjs/_esm5/util/ArgumentOutOfRangeError.js");
/** PURE_IMPORTS_START .._Subscriber,.._util_ArgumentOutOfRangeError PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/**
 * Skip the last `count` values emitted by the source Observable.
 *
 * <img src="./img/skipLast.png" width="100%">
 *
 * `skipLast` returns an Observable that accumulates a queue with a length
 * enough to store the first `count` values. As more values are received,
 * values are taken from the front of the queue and produced on the result
 * sequence. This causes values to be delayed.
 *
 * @example <caption>Skip the last 2 values of an Observable with many values</caption>
 * var many = Rx.Observable.range(1, 5);
 * var skipLastTwo = many.skipLast(2);
 * skipLastTwo.subscribe(x => console.log(x));
 *
 * // Results in:
 * // 1 2 3
 *
 * @see {@link skip}
 * @see {@link skipUntil}
 * @see {@link skipWhile}
 * @see {@link take}
 *
 * @throws {ArgumentOutOfRangeError} When using `skipLast(i)`, it throws
 * ArgumentOutOrRangeError if `i < 0`.
 *
 * @param {number} count Number of elements to skip from the end of the source Observable.
 * @returns {Observable<T>} An Observable that skips the last count values
 * emitted by the source Observable.
 * @method skipLast
 * @owner Observable
 */
function skipLast(count) {
    return function (source) { return source.lift(new SkipLastOperator(count)); };
}
var SkipLastOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function SkipLastOperator(_skipCount) {
        this._skipCount = _skipCount;
        if (this._skipCount < 0) {
            throw new __WEBPACK_IMPORTED_MODULE_1__util_ArgumentOutOfRangeError__["a" /* ArgumentOutOfRangeError */];
        }
    }
    SkipLastOperator.prototype.call = function (subscriber, source) {
        if (this._skipCount === 0) {
            // If we don't want to skip any values then just subscribe
            // to Subscriber without any further logic.
            return source.subscribe(new __WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */](subscriber));
        }
        else {
            return source.subscribe(new SkipLastSubscriber(subscriber, this._skipCount));
        }
    };
    return SkipLastOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SkipLastSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(SkipLastSubscriber, _super);
    function SkipLastSubscriber(destination, _skipCount) {
        _super.call(this, destination);
        this._skipCount = _skipCount;
        this._count = 0;
        this._ring = new Array(_skipCount);
    }
    SkipLastSubscriber.prototype._next = function (value) {
        var skipCount = this._skipCount;
        var count = this._count++;
        if (count < skipCount) {
            this._ring[count] = value;
        }
        else {
            var currentIndex = count % skipCount;
            var ring = this._ring;
            var oldValue = ring[currentIndex];
            ring[currentIndex] = value;
            this.destination.next(oldValue);
        }
    };
    return SkipLastSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */]));
//# sourceMappingURL=skipLast.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/skipUntil.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export skipUntil */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__OuterSubscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/OuterSubscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__ = __webpack_require__("./node_modules/rxjs/_esm5/util/subscribeToResult.js");
/** PURE_IMPORTS_START .._OuterSubscriber,.._util_subscribeToResult PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/**
 * Returns an Observable that skips items emitted by the source Observable until a second Observable emits an item.
 *
 * <img src="./img/skipUntil.png" width="100%">
 *
 * @param {Observable} notifier - The second Observable that has to emit an item before the source Observable's elements begin to
 * be mirrored by the resulting Observable.
 * @return {Observable<T>} An Observable that skips items from the source Observable until the second Observable emits
 * an item, then emits the remaining items.
 * @method skipUntil
 * @owner Observable
 */
function skipUntil(notifier) {
    return function (source) { return source.lift(new SkipUntilOperator(notifier)); };
}
var SkipUntilOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function SkipUntilOperator(notifier) {
        this.notifier = notifier;
    }
    SkipUntilOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new SkipUntilSubscriber(subscriber, this.notifier));
    };
    return SkipUntilOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SkipUntilSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(SkipUntilSubscriber, _super);
    function SkipUntilSubscriber(destination, notifier) {
        _super.call(this, destination);
        this.hasValue = false;
        this.isInnerStopped = false;
        this.add(Object(__WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__["a" /* subscribeToResult */])(this, notifier));
    }
    SkipUntilSubscriber.prototype._next = function (value) {
        if (this.hasValue) {
            _super.prototype._next.call(this, value);
        }
    };
    SkipUntilSubscriber.prototype._complete = function () {
        if (this.isInnerStopped) {
            _super.prototype._complete.call(this);
        }
        else {
            this.unsubscribe();
        }
    };
    SkipUntilSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.hasValue = true;
    };
    SkipUntilSubscriber.prototype.notifyComplete = function () {
        this.isInnerStopped = true;
        if (this.isStopped) {
            _super.prototype._complete.call(this);
        }
    };
    return SkipUntilSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__OuterSubscriber__["a" /* OuterSubscriber */]));
//# sourceMappingURL=skipUntil.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/skipWhile.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export skipWhile */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscriber.js");
/** PURE_IMPORTS_START .._Subscriber PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * Returns an Observable that skips all items emitted by the source Observable as long as a specified condition holds
 * true, but emits all further source items as soon as the condition becomes false.
 *
 * <img src="./img/skipWhile.png" width="100%">
 *
 * @param {Function} predicate - A function to test each item emitted from the source Observable.
 * @return {Observable<T>} An Observable that begins emitting items emitted by the source Observable when the
 * specified predicate becomes false.
 * @method skipWhile
 * @owner Observable
 */
function skipWhile(predicate) {
    return function (source) { return source.lift(new SkipWhileOperator(predicate)); };
}
var SkipWhileOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function SkipWhileOperator(predicate) {
        this.predicate = predicate;
    }
    SkipWhileOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new SkipWhileSubscriber(subscriber, this.predicate));
    };
    return SkipWhileOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SkipWhileSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(SkipWhileSubscriber, _super);
    function SkipWhileSubscriber(destination, predicate) {
        _super.call(this, destination);
        this.predicate = predicate;
        this.skipping = true;
        this.index = 0;
    }
    SkipWhileSubscriber.prototype._next = function (value) {
        var destination = this.destination;
        if (this.skipping) {
            this.tryCallPredicate(value);
        }
        if (!this.skipping) {
            destination.next(value);
        }
    };
    SkipWhileSubscriber.prototype.tryCallPredicate = function (value) {
        try {
            var result = this.predicate(value, this.index++);
            this.skipping = Boolean(result);
        }
        catch (err) {
            this.destination.error(err);
        }
    };
    return SkipWhileSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */]));
//# sourceMappingURL=skipWhile.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/switchAll.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export switchAll */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_identity__ = __webpack_require__("./node_modules/rxjs/_esm5/util/identity.js");
/** PURE_IMPORTS_START ._switchMap,.._util_identity PURE_IMPORTS_END */


function switchAll() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__switchMap__["a" /* switchMap */])(__WEBPACK_IMPORTED_MODULE_1__util_identity__["a" /* identity */]);
}
//# sourceMappingURL=switchAll.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/switchMap.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = switchMap;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__OuterSubscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/OuterSubscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__ = __webpack_require__("./node_modules/rxjs/_esm5/util/subscribeToResult.js");
/** PURE_IMPORTS_START .._OuterSubscriber,.._util_subscribeToResult PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/* tslint:enable:max-line-length */
/**
 * Projects each source value to an Observable which is merged in the output
 * Observable, emitting values only from the most recently projected Observable.
 *
 * <span class="informal">Maps each value to an Observable, then flattens all of
 * these inner Observables using {@link switch}.</span>
 *
 * <img src="./img/switchMap.png" width="100%">
 *
 * Returns an Observable that emits items based on applying a function that you
 * supply to each item emitted by the source Observable, where that function
 * returns an (so-called "inner") Observable. Each time it observes one of these
 * inner Observables, the output Observable begins emitting the items emitted by
 * that inner Observable. When a new inner Observable is emitted, `switchMap`
 * stops emitting items from the earlier-emitted inner Observable and begins
 * emitting items from the new one. It continues to behave like this for
 * subsequent inner Observables.
 *
 * @example <caption>Rerun an interval Observable on every click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.switchMap((ev) => Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatMap}
 * @see {@link exhaustMap}
 * @see {@link mergeMap}
 * @see {@link switch}
 * @see {@link switchMapTo}
 *
 * @param {function(value: T, ?index: number): ObservableInput} project A function
 * that, when applied to an item emitted by the source Observable, returns an
 * Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @return {Observable} An Observable that emits the result of applying the
 * projection function (and the optional `resultSelector`) to each item emitted
 * by the source Observable and taking only the values from the most recently
 * projected inner Observable.
 * @method switchMap
 * @owner Observable
 */
function switchMap(project, resultSelector) {
    return function switchMapOperatorFunction(source) {
        return source.lift(new SwitchMapOperator(project, resultSelector));
    };
}
var SwitchMapOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function SwitchMapOperator(project, resultSelector) {
        this.project = project;
        this.resultSelector = resultSelector;
    }
    SwitchMapOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new SwitchMapSubscriber(subscriber, this.project, this.resultSelector));
    };
    return SwitchMapOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SwitchMapSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(SwitchMapSubscriber, _super);
    function SwitchMapSubscriber(destination, project, resultSelector) {
        _super.call(this, destination);
        this.project = project;
        this.resultSelector = resultSelector;
        this.index = 0;
    }
    SwitchMapSubscriber.prototype._next = function (value) {
        var result;
        var index = this.index++;
        try {
            result = this.project(value, index);
        }
        catch (error) {
            this.destination.error(error);
            return;
        }
        this._innerSub(result, value, index);
    };
    SwitchMapSubscriber.prototype._innerSub = function (result, value, index) {
        var innerSubscription = this.innerSubscription;
        if (innerSubscription) {
            innerSubscription.unsubscribe();
        }
        this.add(this.innerSubscription = Object(__WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__["a" /* subscribeToResult */])(this, result, value, index));
    };
    SwitchMapSubscriber.prototype._complete = function () {
        var innerSubscription = this.innerSubscription;
        if (!innerSubscription || innerSubscription.closed) {
            _super.prototype._complete.call(this);
        }
    };
    SwitchMapSubscriber.prototype._unsubscribe = function () {
        this.innerSubscription = null;
    };
    SwitchMapSubscriber.prototype.notifyComplete = function (innerSub) {
        this.remove(innerSub);
        this.innerSubscription = null;
        if (this.isStopped) {
            _super.prototype._complete.call(this);
        }
    };
    SwitchMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        if (this.resultSelector) {
            this._tryNotifyNext(outerValue, innerValue, outerIndex, innerIndex);
        }
        else {
            this.destination.next(innerValue);
        }
    };
    SwitchMapSubscriber.prototype._tryNotifyNext = function (outerValue, innerValue, outerIndex, innerIndex) {
        var result;
        try {
            result = this.resultSelector(outerValue, innerValue, outerIndex, innerIndex);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return SwitchMapSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__OuterSubscriber__["a" /* OuterSubscriber */]));
//# sourceMappingURL=switchMap.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/switchMapTo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export switchMapTo */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__OuterSubscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/OuterSubscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__ = __webpack_require__("./node_modules/rxjs/_esm5/util/subscribeToResult.js");
/** PURE_IMPORTS_START .._OuterSubscriber,.._util_subscribeToResult PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/* tslint:enable:max-line-length */
/**
 * Projects each source value to the same Observable which is flattened multiple
 * times with {@link switch} in the output Observable.
 *
 * <span class="informal">It's like {@link switchMap}, but maps each value
 * always to the same inner Observable.</span>
 *
 * <img src="./img/switchMapTo.png" width="100%">
 *
 * Maps each source value to the given Observable `innerObservable` regardless
 * of the source value, and then flattens those resulting Observables into one
 * single Observable, which is the output Observable. The output Observables
 * emits values only from the most recently emitted instance of
 * `innerObservable`.
 *
 * @example <caption>Rerun an interval Observable on every click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.switchMapTo(Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatMapTo}
 * @see {@link switch}
 * @see {@link switchMap}
 * @see {@link mergeMapTo}
 *
 * @param {ObservableInput} innerObservable An Observable to replace each value from
 * the source Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @return {Observable} An Observable that emits items from the given
 * `innerObservable` (and optionally transformed through `resultSelector`) every
 * time a value is emitted on the source Observable, and taking only the values
 * from the most recently projected inner Observable.
 * @method switchMapTo
 * @owner Observable
 */
function switchMapTo(innerObservable, resultSelector) {
    return function (source) { return source.lift(new SwitchMapToOperator(innerObservable, resultSelector)); };
}
var SwitchMapToOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function SwitchMapToOperator(observable, resultSelector) {
        this.observable = observable;
        this.resultSelector = resultSelector;
    }
    SwitchMapToOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new SwitchMapToSubscriber(subscriber, this.observable, this.resultSelector));
    };
    return SwitchMapToOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SwitchMapToSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(SwitchMapToSubscriber, _super);
    function SwitchMapToSubscriber(destination, inner, resultSelector) {
        _super.call(this, destination);
        this.inner = inner;
        this.resultSelector = resultSelector;
        this.index = 0;
    }
    SwitchMapToSubscriber.prototype._next = function (value) {
        var innerSubscription = this.innerSubscription;
        if (innerSubscription) {
            innerSubscription.unsubscribe();
        }
        this.add(this.innerSubscription = Object(__WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__["a" /* subscribeToResult */])(this, this.inner, value, this.index++));
    };
    SwitchMapToSubscriber.prototype._complete = function () {
        var innerSubscription = this.innerSubscription;
        if (!innerSubscription || innerSubscription.closed) {
            _super.prototype._complete.call(this);
        }
    };
    SwitchMapToSubscriber.prototype._unsubscribe = function () {
        this.innerSubscription = null;
    };
    SwitchMapToSubscriber.prototype.notifyComplete = function (innerSub) {
        this.remove(innerSub);
        this.innerSubscription = null;
        if (this.isStopped) {
            _super.prototype._complete.call(this);
        }
    };
    SwitchMapToSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
        if (resultSelector) {
            this.tryResultSelector(outerValue, innerValue, outerIndex, innerIndex);
        }
        else {
            destination.next(innerValue);
        }
    };
    SwitchMapToSubscriber.prototype.tryResultSelector = function (outerValue, innerValue, outerIndex, innerIndex) {
        var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
        var result;
        try {
            result = resultSelector(outerValue, innerValue, outerIndex, innerIndex);
        }
        catch (err) {
            destination.error(err);
            return;
        }
        destination.next(result);
    };
    return SwitchMapToSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__OuterSubscriber__["a" /* OuterSubscriber */]));
//# sourceMappingURL=switchMapTo.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/take.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export take */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_ArgumentOutOfRangeError__ = __webpack_require__("./node_modules/rxjs/_esm5/util/ArgumentOutOfRangeError.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__observable_EmptyObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/EmptyObservable.js");
/** PURE_IMPORTS_START .._Subscriber,.._util_ArgumentOutOfRangeError,.._observable_EmptyObservable PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



/**
 * Emits only the first `count` values emitted by the source Observable.
 *
 * <span class="informal">Takes the first `count` values from the source, then
 * completes.</span>
 *
 * <img src="./img/take.png" width="100%">
 *
 * `take` returns an Observable that emits only the first `count` values emitted
 * by the source Observable. If the source emits fewer than `count` values then
 * all of its values are emitted. After that, it completes, regardless if the
 * source completes.
 *
 * @example <caption>Take the first 5 seconds of an infinite 1-second interval Observable</caption>
 * var interval = Rx.Observable.interval(1000);
 * var five = interval.take(5);
 * five.subscribe(x => console.log(x));
 *
 * @see {@link takeLast}
 * @see {@link takeUntil}
 * @see {@link takeWhile}
 * @see {@link skip}
 *
 * @throws {ArgumentOutOfRangeError} When using `take(i)`, it delivers an
 * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0`.
 *
 * @param {number} count The maximum number of `next` values to emit.
 * @return {Observable<T>} An Observable that emits only the first `count`
 * values emitted by the source Observable, or all of the values from the source
 * if the source emits fewer than `count` values.
 * @method take
 * @owner Observable
 */
function take(count) {
    return function (source) {
        if (count === 0) {
            return new __WEBPACK_IMPORTED_MODULE_2__observable_EmptyObservable__["a" /* EmptyObservable */]();
        }
        else {
            return source.lift(new TakeOperator(count));
        }
    };
}
var TakeOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function TakeOperator(total) {
        this.total = total;
        if (this.total < 0) {
            throw new __WEBPACK_IMPORTED_MODULE_1__util_ArgumentOutOfRangeError__["a" /* ArgumentOutOfRangeError */];
        }
    }
    TakeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new TakeSubscriber(subscriber, this.total));
    };
    return TakeOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var TakeSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(TakeSubscriber, _super);
    function TakeSubscriber(destination, total) {
        _super.call(this, destination);
        this.total = total;
        this.count = 0;
    }
    TakeSubscriber.prototype._next = function (value) {
        var total = this.total;
        var count = ++this.count;
        if (count <= total) {
            this.destination.next(value);
            if (count === total) {
                this.destination.complete();
                this.unsubscribe();
            }
        }
    };
    return TakeSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */]));
//# sourceMappingURL=take.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/takeUntil.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export takeUntil */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__OuterSubscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/OuterSubscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__ = __webpack_require__("./node_modules/rxjs/_esm5/util/subscribeToResult.js");
/** PURE_IMPORTS_START .._OuterSubscriber,.._util_subscribeToResult PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/**
 * Emits the values emitted by the source Observable until a `notifier`
 * Observable emits a value.
 *
 * <span class="informal">Lets values pass until a second Observable,
 * `notifier`, emits something. Then, it completes.</span>
 *
 * <img src="./img/takeUntil.png" width="100%">
 *
 * `takeUntil` subscribes and begins mirroring the source Observable. It also
 * monitors a second Observable, `notifier` that you provide. If the `notifier`
 * emits a value or a complete notification, the output Observable stops
 * mirroring the source Observable and completes.
 *
 * @example <caption>Tick every second until the first click happens</caption>
 * var interval = Rx.Observable.interval(1000);
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = interval.takeUntil(clicks);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link take}
 * @see {@link takeLast}
 * @see {@link takeWhile}
 * @see {@link skip}
 *
 * @param {Observable} notifier The Observable whose first emitted value will
 * cause the output Observable of `takeUntil` to stop emitting values from the
 * source Observable.
 * @return {Observable<T>} An Observable that emits the values from the source
 * Observable until such time as `notifier` emits its first value.
 * @method takeUntil
 * @owner Observable
 */
function takeUntil(notifier) {
    return function (source) { return source.lift(new TakeUntilOperator(notifier)); };
}
var TakeUntilOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function TakeUntilOperator(notifier) {
        this.notifier = notifier;
    }
    TakeUntilOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new TakeUntilSubscriber(subscriber, this.notifier));
    };
    return TakeUntilOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var TakeUntilSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(TakeUntilSubscriber, _super);
    function TakeUntilSubscriber(destination, notifier) {
        _super.call(this, destination);
        this.notifier = notifier;
        this.add(Object(__WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__["a" /* subscribeToResult */])(this, notifier));
    }
    TakeUntilSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.complete();
    };
    TakeUntilSubscriber.prototype.notifyComplete = function () {
        // noop
    };
    return TakeUntilSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__OuterSubscriber__["a" /* OuterSubscriber */]));
//# sourceMappingURL=takeUntil.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/takeWhile.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export takeWhile */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscriber.js");
/** PURE_IMPORTS_START .._Subscriber PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * Emits values emitted by the source Observable so long as each value satisfies
 * the given `predicate`, and then completes as soon as this `predicate` is not
 * satisfied.
 *
 * <span class="informal">Takes values from the source only while they pass the
 * condition given. When the first value does not satisfy, it completes.</span>
 *
 * <img src="./img/takeWhile.png" width="100%">
 *
 * `takeWhile` subscribes and begins mirroring the source Observable. Each value
 * emitted on the source is given to the `predicate` function which returns a
 * boolean, representing a condition to be satisfied by the source values. The
 * output Observable emits the source values until such time as the `predicate`
 * returns false, at which point `takeWhile` stops mirroring the source
 * Observable and completes the output Observable.
 *
 * @example <caption>Emit click events only while the clientX property is greater than 200</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.takeWhile(ev => ev.clientX > 200);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link take}
 * @see {@link takeLast}
 * @see {@link takeUntil}
 * @see {@link skip}
 *
 * @param {function(value: T, index: number): boolean} predicate A function that
 * evaluates a value emitted by the source Observable and returns a boolean.
 * Also takes the (zero-based) index as the second argument.
 * @return {Observable<T>} An Observable that emits the values from the source
 * Observable so long as each value satisfies the condition defined by the
 * `predicate`, then completes.
 * @method takeWhile
 * @owner Observable
 */
function takeWhile(predicate) {
    return function (source) { return source.lift(new TakeWhileOperator(predicate)); };
}
var TakeWhileOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function TakeWhileOperator(predicate) {
        this.predicate = predicate;
    }
    TakeWhileOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new TakeWhileSubscriber(subscriber, this.predicate));
    };
    return TakeWhileOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var TakeWhileSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(TakeWhileSubscriber, _super);
    function TakeWhileSubscriber(destination, predicate) {
        _super.call(this, destination);
        this.predicate = predicate;
        this.index = 0;
    }
    TakeWhileSubscriber.prototype._next = function (value) {
        var destination = this.destination;
        var result;
        try {
            result = this.predicate(value, this.index++);
        }
        catch (err) {
            destination.error(err);
            return;
        }
        this.nextOrComplete(value, result);
    };
    TakeWhileSubscriber.prototype.nextOrComplete = function (value, predicateResult) {
        var destination = this.destination;
        if (Boolean(predicateResult)) {
            destination.next(value);
        }
        else {
            destination.complete();
        }
    };
    return TakeWhileSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */]));
//# sourceMappingURL=takeWhile.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/tap.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export tap */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscriber.js");
/** PURE_IMPORTS_START .._Subscriber PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/* tslint:enable:max-line-length */
/**
 * Perform a side effect for every emission on the source Observable, but return
 * an Observable that is identical to the source.
 *
 * <span class="informal">Intercepts each emission on the source and runs a
 * function, but returns an output which is identical to the source as long as errors don't occur.</span>
 *
 * <img src="./img/do.png" width="100%">
 *
 * Returns a mirrored Observable of the source Observable, but modified so that
 * the provided Observer is called to perform a side effect for every value,
 * error, and completion emitted by the source. Any errors that are thrown in
 * the aforementioned Observer or handlers are safely sent down the error path
 * of the output Observable.
 *
 * This operator is useful for debugging your Observables for the correct values
 * or performing other side effects.
 *
 * Note: this is different to a `subscribe` on the Observable. If the Observable
 * returned by `do` is not subscribed, the side effects specified by the
 * Observer will never happen. `do` therefore simply spies on existing
 * execution, it does not trigger an execution to happen like `subscribe` does.
 *
 * @example <caption>Map every click to the clientX position of that click, while also logging the click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var positions = clicks
 *   .do(ev => console.log(ev))
 *   .map(ev => ev.clientX);
 * positions.subscribe(x => console.log(x));
 *
 * @see {@link map}
 * @see {@link subscribe}
 *
 * @param {Observer|function} [nextOrObserver] A normal Observer object or a
 * callback for `next`.
 * @param {function} [error] Callback for errors in the source.
 * @param {function} [complete] Callback for the completion of the source.
 * @return {Observable} An Observable identical to the source, but runs the
 * specified Observer or callback(s) for each item.
 * @name tap
 */
function tap(nextOrObserver, error, complete) {
    return function tapOperatorFunction(source) {
        return source.lift(new DoOperator(nextOrObserver, error, complete));
    };
}
var DoOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function DoOperator(nextOrObserver, error, complete) {
        this.nextOrObserver = nextOrObserver;
        this.error = error;
        this.complete = complete;
    }
    DoOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DoSubscriber(subscriber, this.nextOrObserver, this.error, this.complete));
    };
    return DoOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DoSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(DoSubscriber, _super);
    function DoSubscriber(destination, nextOrObserver, error, complete) {
        _super.call(this, destination);
        var safeSubscriber = new __WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */](nextOrObserver, error, complete);
        safeSubscriber.syncErrorThrowable = true;
        this.add(safeSubscriber);
        this.safeSubscriber = safeSubscriber;
    }
    DoSubscriber.prototype._next = function (value) {
        var safeSubscriber = this.safeSubscriber;
        safeSubscriber.next(value);
        if (safeSubscriber.syncErrorThrown) {
            this.destination.error(safeSubscriber.syncErrorValue);
        }
        else {
            this.destination.next(value);
        }
    };
    DoSubscriber.prototype._error = function (err) {
        var safeSubscriber = this.safeSubscriber;
        safeSubscriber.error(err);
        if (safeSubscriber.syncErrorThrown) {
            this.destination.error(safeSubscriber.syncErrorValue);
        }
        else {
            this.destination.error(err);
        }
    };
    DoSubscriber.prototype._complete = function () {
        var safeSubscriber = this.safeSubscriber;
        safeSubscriber.complete();
        if (safeSubscriber.syncErrorThrown) {
            this.destination.error(safeSubscriber.syncErrorValue);
        }
        else {
            this.destination.complete();
        }
    };
    return DoSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */]));
//# sourceMappingURL=tap.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/throttle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultThrottleConfig; });
/* unused harmony export throttle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__OuterSubscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/OuterSubscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__ = __webpack_require__("./node_modules/rxjs/_esm5/util/subscribeToResult.js");
/** PURE_IMPORTS_START .._OuterSubscriber,.._util_subscribeToResult PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


var defaultThrottleConfig = {
    leading: true,
    trailing: false
};
/**
 * Emits a value from the source Observable, then ignores subsequent source
 * values for a duration determined by another Observable, then repeats this
 * process.
 *
 * <span class="informal">It's like {@link throttleTime}, but the silencing
 * duration is determined by a second Observable.</span>
 *
 * <img src="./img/throttle.png" width="100%">
 *
 * `throttle` emits the source Observable values on the output Observable
 * when its internal timer is disabled, and ignores source values when the timer
 * is enabled. Initially, the timer is disabled. As soon as the first source
 * value arrives, it is forwarded to the output Observable, and then the timer
 * is enabled by calling the `durationSelector` function with the source value,
 * which returns the "duration" Observable. When the duration Observable emits a
 * value or completes, the timer is disabled, and this process repeats for the
 * next source value.
 *
 * @example <caption>Emit clicks at a rate of at most one click per second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.throttle(ev => Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link audit}
 * @see {@link debounce}
 * @see {@link delayWhen}
 * @see {@link sample}
 * @see {@link throttleTime}
 *
 * @param {function(value: T): SubscribableOrPromise} durationSelector A function
 * that receives a value from the source Observable, for computing the silencing
 * duration for each source value, returned as an Observable or a Promise.
 * @param {Object} config a configuration object to define `leading` and `trailing` behavior. Defaults
 * to `{ leading: true, trailing: false }`.
 * @return {Observable<T>} An Observable that performs the throttle operation to
 * limit the rate of emissions from the source.
 * @method throttle
 * @owner Observable
 */
function throttle(durationSelector, config) {
    if (config === void 0) {
        config = defaultThrottleConfig;
    }
    return function (source) { return source.lift(new ThrottleOperator(durationSelector, config.leading, config.trailing)); };
}
var ThrottleOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function ThrottleOperator(durationSelector, leading, trailing) {
        this.durationSelector = durationSelector;
        this.leading = leading;
        this.trailing = trailing;
    }
    ThrottleOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ThrottleSubscriber(subscriber, this.durationSelector, this.leading, this.trailing));
    };
    return ThrottleOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc
 * @ignore
 * @extends {Ignored}
 */
var ThrottleSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(ThrottleSubscriber, _super);
    function ThrottleSubscriber(destination, durationSelector, _leading, _trailing) {
        _super.call(this, destination);
        this.destination = destination;
        this.durationSelector = durationSelector;
        this._leading = _leading;
        this._trailing = _trailing;
        this._hasTrailingValue = false;
    }
    ThrottleSubscriber.prototype._next = function (value) {
        if (this.throttled) {
            if (this._trailing) {
                this._hasTrailingValue = true;
                this._trailingValue = value;
            }
        }
        else {
            var duration = this.tryDurationSelector(value);
            if (duration) {
                this.add(this.throttled = Object(__WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__["a" /* subscribeToResult */])(this, duration));
            }
            if (this._leading) {
                this.destination.next(value);
                if (this._trailing) {
                    this._hasTrailingValue = true;
                    this._trailingValue = value;
                }
            }
        }
    };
    ThrottleSubscriber.prototype.tryDurationSelector = function (value) {
        try {
            return this.durationSelector(value);
        }
        catch (err) {
            this.destination.error(err);
            return null;
        }
    };
    ThrottleSubscriber.prototype._unsubscribe = function () {
        var _a = this, throttled = _a.throttled, _trailingValue = _a._trailingValue, _hasTrailingValue = _a._hasTrailingValue, _trailing = _a._trailing;
        this._trailingValue = null;
        this._hasTrailingValue = false;
        if (throttled) {
            this.remove(throttled);
            this.throttled = null;
            throttled.unsubscribe();
        }
    };
    ThrottleSubscriber.prototype._sendTrailing = function () {
        var _a = this, destination = _a.destination, throttled = _a.throttled, _trailing = _a._trailing, _trailingValue = _a._trailingValue, _hasTrailingValue = _a._hasTrailingValue;
        if (throttled && _trailing && _hasTrailingValue) {
            destination.next(_trailingValue);
            this._trailingValue = null;
            this._hasTrailingValue = false;
        }
    };
    ThrottleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this._sendTrailing();
        this._unsubscribe();
    };
    ThrottleSubscriber.prototype.notifyComplete = function () {
        this._sendTrailing();
        this._unsubscribe();
    };
    return ThrottleSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__OuterSubscriber__["a" /* OuterSubscriber */]));
//# sourceMappingURL=throttle.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/throttleTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export throttleTime */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scheduler_async__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/async.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__throttle__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/throttle.js");
/** PURE_IMPORTS_START .._Subscriber,.._scheduler_async,._throttle PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



/**
 * Emits a value from the source Observable, then ignores subsequent source
 * values for `duration` milliseconds, then repeats this process.
 *
 * <span class="informal">Lets a value pass, then ignores source values for the
 * next `duration` milliseconds.</span>
 *
 * <img src="./img/throttleTime.png" width="100%">
 *
 * `throttleTime` emits the source Observable values on the output Observable
 * when its internal timer is disabled, and ignores source values when the timer
 * is enabled. Initially, the timer is disabled. As soon as the first source
 * value arrives, it is forwarded to the output Observable, and then the timer
 * is enabled. After `duration` milliseconds (or the time unit determined
 * internally by the optional `scheduler`) has passed, the timer is disabled,
 * and this process repeats for the next source value. Optionally takes a
 * {@link IScheduler} for managing timers.
 *
 * @example <caption>Emit clicks at a rate of at most one click per second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.throttleTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounceTime}
 * @see {@link delay}
 * @see {@link sampleTime}
 * @see {@link throttle}
 *
 * @param {number} duration Time to wait before emitting another value after
 * emitting the last value, measured in milliseconds or the time unit determined
 * internally by the optional `scheduler`.
 * @param {Scheduler} [scheduler=async] The {@link IScheduler} to use for
 * managing the timers that handle the throttling.
 * @return {Observable<T>} An Observable that performs the throttle operation to
 * limit the rate of emissions from the source.
 * @method throttleTime
 * @owner Observable
 */
function throttleTime(duration, scheduler, config) {
    if (scheduler === void 0) {
        scheduler = __WEBPACK_IMPORTED_MODULE_1__scheduler_async__["a" /* async */];
    }
    if (config === void 0) {
        config = __WEBPACK_IMPORTED_MODULE_2__throttle__["a" /* defaultThrottleConfig */];
    }
    return function (source) { return source.lift(new ThrottleTimeOperator(duration, scheduler, config.leading, config.trailing)); };
}
var ThrottleTimeOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function ThrottleTimeOperator(duration, scheduler, leading, trailing) {
        this.duration = duration;
        this.scheduler = scheduler;
        this.leading = leading;
        this.trailing = trailing;
    }
    ThrottleTimeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ThrottleTimeSubscriber(subscriber, this.duration, this.scheduler, this.leading, this.trailing));
    };
    return ThrottleTimeOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var ThrottleTimeSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(ThrottleTimeSubscriber, _super);
    function ThrottleTimeSubscriber(destination, duration, scheduler, leading, trailing) {
        _super.call(this, destination);
        this.duration = duration;
        this.scheduler = scheduler;
        this.leading = leading;
        this.trailing = trailing;
        this._hasTrailingValue = false;
        this._trailingValue = null;
    }
    ThrottleTimeSubscriber.prototype._next = function (value) {
        if (this.throttled) {
            if (this.trailing) {
                this._trailingValue = value;
                this._hasTrailingValue = true;
            }
        }
        else {
            this.add(this.throttled = this.scheduler.schedule(dispatchNext, this.duration, { subscriber: this }));
            if (this.leading) {
                this.destination.next(value);
            }
        }
    };
    ThrottleTimeSubscriber.prototype.clearThrottle = function () {
        var throttled = this.throttled;
        if (throttled) {
            if (this.trailing && this._hasTrailingValue) {
                this.destination.next(this._trailingValue);
                this._trailingValue = null;
                this._hasTrailingValue = false;
            }
            throttled.unsubscribe();
            this.remove(throttled);
            this.throttled = null;
        }
    };
    return ThrottleTimeSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */]));
function dispatchNext(arg) {
    var subscriber = arg.subscriber;
    subscriber.clearThrottle();
}
//# sourceMappingURL=throttleTime.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/timeInterval.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export timeInterval */
/* unused harmony export TimeInterval */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scheduler_async__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/async.js");
/** PURE_IMPORTS_START .._Subscriber,.._scheduler_async PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


function timeInterval(scheduler) {
    if (scheduler === void 0) {
        scheduler = __WEBPACK_IMPORTED_MODULE_1__scheduler_async__["a" /* async */];
    }
    return function (source) { return source.lift(new TimeIntervalOperator(scheduler)); };
}
var TimeInterval = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function TimeInterval(value, interval) {
        this.value = value;
        this.interval = interval;
    }
    return TimeInterval;
}());
;
var TimeIntervalOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function TimeIntervalOperator(scheduler) {
        this.scheduler = scheduler;
    }
    TimeIntervalOperator.prototype.call = function (observer, source) {
        return source.subscribe(new TimeIntervalSubscriber(observer, this.scheduler));
    };
    return TimeIntervalOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var TimeIntervalSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(TimeIntervalSubscriber, _super);
    function TimeIntervalSubscriber(destination, scheduler) {
        _super.call(this, destination);
        this.scheduler = scheduler;
        this.lastTime = 0;
        this.lastTime = scheduler.now();
    }
    TimeIntervalSubscriber.prototype._next = function (value) {
        var now = this.scheduler.now();
        var span = now - this.lastTime;
        this.lastTime = now;
        this.destination.next(new TimeInterval(value, span));
    };
    return TimeIntervalSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */]));
//# sourceMappingURL=timeInterval.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/timeout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export timeout */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scheduler_async__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/async.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_isDate__ = __webpack_require__("./node_modules/rxjs/_esm5/util/isDate.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Subscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_TimeoutError__ = __webpack_require__("./node_modules/rxjs/_esm5/util/TimeoutError.js");
/** PURE_IMPORTS_START .._scheduler_async,.._util_isDate,.._Subscriber,.._util_TimeoutError PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};




/**
 *
 * Errors if Observable does not emit a value in given time span.
 *
 * <span class="informal">Timeouts on Observable that doesn't emit values fast enough.</span>
 *
 * <img src="./img/timeout.png" width="100%">
 *
 * `timeout` operator accepts as an argument either a number or a Date.
 *
 * If number was provided, it returns an Observable that behaves like a source
 * Observable, unless there is a period of time where there is no value emitted.
 * So if you provide `100` as argument and first value comes after 50ms from
 * the moment of subscription, this value will be simply re-emitted by the resulting
 * Observable. If however after that 100ms passes without a second value being emitted,
 * stream will end with an error and source Observable will be unsubscribed.
 * These checks are performed throughout whole lifecycle of Observable - from the moment
 * it was subscribed to, until it completes or errors itself. Thus every value must be
 * emitted within specified period since previous value.
 *
 * If provided argument was Date, returned Observable behaves differently. It throws
 * if Observable did not complete before provided Date. This means that periods between
 * emission of particular values do not matter in this case. If Observable did not complete
 * before provided Date, source Observable will be unsubscribed. Other than that, resulting
 * stream behaves just as source Observable.
 *
 * `timeout` accepts also a Scheduler as a second parameter. It is used to schedule moment (or moments)
 * when returned Observable will check if source stream emitted value or completed.
 *
 * @example <caption>Check if ticks are emitted within certain timespan</caption>
 * const seconds = Rx.Observable.interval(1000);
 *
 * seconds.timeout(1100) // Let's use bigger timespan to be safe,
 *                       // since `interval` might fire a bit later then scheduled.
 * .subscribe(
 *     value => console.log(value), // Will emit numbers just as regular `interval` would.
 *     err => console.log(err) // Will never be called.
 * );
 *
 * seconds.timeout(900).subscribe(
 *     value => console.log(value), // Will never be called.
 *     err => console.log(err) // Will emit error before even first value is emitted,
 *                             // since it did not arrive within 900ms period.
 * );
 *
 * @example <caption>Use Date to check if Observable completed</caption>
 * const seconds = Rx.Observable.interval(1000);
 *
 * seconds.timeout(new Date("December 17, 2020 03:24:00"))
 * .subscribe(
 *     value => console.log(value), // Will emit values as regular `interval` would
 *                                  // until December 17, 2020 at 03:24:00.
 *     err => console.log(err) // On December 17, 2020 at 03:24:00 it will emit an error,
 *                             // since Observable did not complete by then.
 * );
 *
 * @see {@link timeoutWith}
 *
 * @param {number|Date} due Number specifying period within which Observable must emit values
 *                          or Date specifying before when Observable should complete
 * @param {Scheduler} [scheduler] Scheduler controlling when timeout checks occur.
 * @return {Observable<T>} Observable that mirrors behaviour of source, unless timeout checks fail.
 * @method timeout
 * @owner Observable
 */
function timeout(due, scheduler) {
    if (scheduler === void 0) {
        scheduler = __WEBPACK_IMPORTED_MODULE_0__scheduler_async__["a" /* async */];
    }
    var absoluteTimeout = Object(__WEBPACK_IMPORTED_MODULE_1__util_isDate__["a" /* isDate */])(due);
    var waitFor = absoluteTimeout ? (+due - scheduler.now()) : Math.abs(due);
    return function (source) { return source.lift(new TimeoutOperator(waitFor, absoluteTimeout, scheduler, new __WEBPACK_IMPORTED_MODULE_3__util_TimeoutError__["a" /* TimeoutError */]())); };
}
var TimeoutOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function TimeoutOperator(waitFor, absoluteTimeout, scheduler, errorInstance) {
        this.waitFor = waitFor;
        this.absoluteTimeout = absoluteTimeout;
        this.scheduler = scheduler;
        this.errorInstance = errorInstance;
    }
    TimeoutOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new TimeoutSubscriber(subscriber, this.absoluteTimeout, this.waitFor, this.scheduler, this.errorInstance));
    };
    return TimeoutOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var TimeoutSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(TimeoutSubscriber, _super);
    function TimeoutSubscriber(destination, absoluteTimeout, waitFor, scheduler, errorInstance) {
        _super.call(this, destination);
        this.absoluteTimeout = absoluteTimeout;
        this.waitFor = waitFor;
        this.scheduler = scheduler;
        this.errorInstance = errorInstance;
        this.action = null;
        this.scheduleTimeout();
    }
    TimeoutSubscriber.dispatchTimeout = function (subscriber) {
        subscriber.error(subscriber.errorInstance);
    };
    TimeoutSubscriber.prototype.scheduleTimeout = function () {
        var action = this.action;
        if (action) {
            // Recycle the action if we've already scheduled one. All the production
            // Scheduler Actions mutate their state/delay time and return themeselves.
            // VirtualActions are immutable, so they create and return a clone. In this
            // case, we need to set the action reference to the most recent VirtualAction,
            // to ensure that's the one we clone from next time.
            this.action = action.schedule(this, this.waitFor);
        }
        else {
            this.add(this.action = this.scheduler.schedule(TimeoutSubscriber.dispatchTimeout, this.waitFor, this));
        }
    };
    TimeoutSubscriber.prototype._next = function (value) {
        if (!this.absoluteTimeout) {
            this.scheduleTimeout();
        }
        _super.prototype._next.call(this, value);
    };
    TimeoutSubscriber.prototype._unsubscribe = function () {
        this.action = null;
        this.scheduler = null;
        this.errorInstance = null;
    };
    return TimeoutSubscriber;
}(__WEBPACK_IMPORTED_MODULE_2__Subscriber__["a" /* Subscriber */]));
//# sourceMappingURL=timeout.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/timeoutWith.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export timeoutWith */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scheduler_async__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/async.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_isDate__ = __webpack_require__("./node_modules/rxjs/_esm5/util/isDate.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__OuterSubscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/OuterSubscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_subscribeToResult__ = __webpack_require__("./node_modules/rxjs/_esm5/util/subscribeToResult.js");
/** PURE_IMPORTS_START .._scheduler_async,.._util_isDate,.._OuterSubscriber,.._util_subscribeToResult PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};




/* tslint:enable:max-line-length */
/**
 *
 * Errors if Observable does not emit a value in given time span, in case of which
 * subscribes to the second Observable.
 *
 * <span class="informal">It's a version of `timeout` operator that let's you specify fallback Observable.</span>
 *
 * <img src="./img/timeoutWith.png" width="100%">
 *
 * `timeoutWith` is a variation of `timeout` operator. It behaves exactly the same,
 * still accepting as a first argument either a number or a Date, which control - respectively -
 * when values of source Observable should be emitted or when it should complete.
 *
 * The only difference is that it accepts a second, required parameter. This parameter
 * should be an Observable which will be subscribed when source Observable fails any timeout check.
 * So whenever regular `timeout` would emit an error, `timeoutWith` will instead start re-emitting
 * values from second Observable. Note that this fallback Observable is not checked for timeouts
 * itself, so it can emit values and complete at arbitrary points in time. From the moment of a second
 * subscription, Observable returned from `timeoutWith` simply mirrors fallback stream. When that
 * stream completes, it completes as well.
 *
 * Scheduler, which in case of `timeout` is provided as as second argument, can be still provided
 * here - as a third, optional parameter. It still is used to schedule timeout checks and -
 * as a consequence - when second Observable will be subscribed, since subscription happens
 * immediately after failing check.
 *
 * @example <caption>Add fallback observable</caption>
 * const seconds = Rx.Observable.interval(1000);
 * const minutes = Rx.Observable.interval(60 * 1000);
 *
 * seconds.timeoutWith(900, minutes)
 *     .subscribe(
 *         value => console.log(value), // After 900ms, will start emitting `minutes`,
 *                                      // since first value of `seconds` will not arrive fast enough.
 *         err => console.log(err) // Would be called after 900ms in case of `timeout`,
 *                                 // but here will never be called.
 *     );
 *
 * @param {number|Date} due Number specifying period within which Observable must emit values
 *                          or Date specifying before when Observable should complete
 * @param {Observable<T>} withObservable Observable which will be subscribed if source fails timeout check.
 * @param {Scheduler} [scheduler] Scheduler controlling when timeout checks occur.
 * @return {Observable<T>} Observable that mirrors behaviour of source or, when timeout check fails, of an Observable
 *                          passed as a second parameter.
 * @method timeoutWith
 * @owner Observable
 */
function timeoutWith(due, withObservable, scheduler) {
    if (scheduler === void 0) {
        scheduler = __WEBPACK_IMPORTED_MODULE_0__scheduler_async__["a" /* async */];
    }
    return function (source) {
        var absoluteTimeout = Object(__WEBPACK_IMPORTED_MODULE_1__util_isDate__["a" /* isDate */])(due);
        var waitFor = absoluteTimeout ? (+due - scheduler.now()) : Math.abs(due);
        return source.lift(new TimeoutWithOperator(waitFor, absoluteTimeout, withObservable, scheduler));
    };
}
var TimeoutWithOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function TimeoutWithOperator(waitFor, absoluteTimeout, withObservable, scheduler) {
        this.waitFor = waitFor;
        this.absoluteTimeout = absoluteTimeout;
        this.withObservable = withObservable;
        this.scheduler = scheduler;
    }
    TimeoutWithOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new TimeoutWithSubscriber(subscriber, this.absoluteTimeout, this.waitFor, this.withObservable, this.scheduler));
    };
    return TimeoutWithOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var TimeoutWithSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(TimeoutWithSubscriber, _super);
    function TimeoutWithSubscriber(destination, absoluteTimeout, waitFor, withObservable, scheduler) {
        _super.call(this, destination);
        this.absoluteTimeout = absoluteTimeout;
        this.waitFor = waitFor;
        this.withObservable = withObservable;
        this.scheduler = scheduler;
        this.action = null;
        this.scheduleTimeout();
    }
    TimeoutWithSubscriber.dispatchTimeout = function (subscriber) {
        var withObservable = subscriber.withObservable;
        subscriber._unsubscribeAndRecycle();
        subscriber.add(Object(__WEBPACK_IMPORTED_MODULE_3__util_subscribeToResult__["a" /* subscribeToResult */])(subscriber, withObservable));
    };
    TimeoutWithSubscriber.prototype.scheduleTimeout = function () {
        var action = this.action;
        if (action) {
            // Recycle the action if we've already scheduled one. All the production
            // Scheduler Actions mutate their state/delay time and return themeselves.
            // VirtualActions are immutable, so they create and return a clone. In this
            // case, we need to set the action reference to the most recent VirtualAction,
            // to ensure that's the one we clone from next time.
            this.action = action.schedule(this, this.waitFor);
        }
        else {
            this.add(this.action = this.scheduler.schedule(TimeoutWithSubscriber.dispatchTimeout, this.waitFor, this));
        }
    };
    TimeoutWithSubscriber.prototype._next = function (value) {
        if (!this.absoluteTimeout) {
            this.scheduleTimeout();
        }
        _super.prototype._next.call(this, value);
    };
    TimeoutWithSubscriber.prototype._unsubscribe = function () {
        this.action = null;
        this.scheduler = null;
        this.withObservable = null;
    };
    return TimeoutWithSubscriber;
}(__WEBPACK_IMPORTED_MODULE_2__OuterSubscriber__["a" /* OuterSubscriber */]));
//# sourceMappingURL=timeoutWith.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/timestamp.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export timestamp */
/* unused harmony export Timestamp */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scheduler_async__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/async.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
/** PURE_IMPORTS_START .._scheduler_async,._map PURE_IMPORTS_END */


/**
 * @param scheduler
 * @return {Observable<Timestamp<any>>|WebSocketSubject<T>|Observable<T>}
 * @method timestamp
 * @owner Observable
 */
function timestamp(scheduler) {
    if (scheduler === void 0) {
        scheduler = __WEBPACK_IMPORTED_MODULE_0__scheduler_async__["a" /* async */];
    }
    return Object(__WEBPACK_IMPORTED_MODULE_1__map__["a" /* map */])(function (value) { return new Timestamp(value, scheduler.now()); });
    // return (source: Observable<T>) => source.lift(new TimestampOperator(scheduler));
}
var Timestamp = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function Timestamp(value, timestamp) {
        this.value = value;
        this.timestamp = timestamp;
    }
    return Timestamp;
}());
;
//# sourceMappingURL=timestamp.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/toArray.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export toArray */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reduce__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/reduce.js");
/** PURE_IMPORTS_START ._reduce PURE_IMPORTS_END */

function toArrayReducer(arr, item, index) {
    if (index === 0) {
        return [item];
    }
    arr.push(item);
    return arr;
}
function toArray() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__reduce__["a" /* reduce */])(toArrayReducer, []);
}
//# sourceMappingURL=toArray.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/window.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export window */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__OuterSubscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/OuterSubscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_subscribeToResult__ = __webpack_require__("./node_modules/rxjs/_esm5/util/subscribeToResult.js");
/** PURE_IMPORTS_START .._Subject,.._OuterSubscriber,.._util_subscribeToResult PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



/**
 * Branch out the source Observable values as a nested Observable whenever
 * `windowBoundaries` emits.
 *
 * <span class="informal">It's like {@link buffer}, but emits a nested Observable
 * instead of an array.</span>
 *
 * <img src="./img/window.png" width="100%">
 *
 * Returns an Observable that emits windows of items it collects from the source
 * Observable. The output Observable emits connected, non-overlapping
 * windows. It emits the current window and opens a new one whenever the
 * Observable `windowBoundaries` emits an item. Because each window is an
 * Observable, the output is a higher-order Observable.
 *
 * @example <caption>In every window of 1 second each, emit at most 2 click events</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var interval = Rx.Observable.interval(1000);
 * var result = clicks.window(interval)
 *   .map(win => win.take(2)) // each window has at most 2 emissions
 *   .mergeAll(); // flatten the Observable-of-Observables
 * result.subscribe(x => console.log(x));
 *
 * @see {@link windowCount}
 * @see {@link windowTime}
 * @see {@link windowToggle}
 * @see {@link windowWhen}
 * @see {@link buffer}
 *
 * @param {Observable<any>} windowBoundaries An Observable that completes the
 * previous window and starts a new window.
 * @return {Observable<Observable<T>>} An Observable of windows, which are
 * Observables emitting values of the source Observable.
 * @method window
 * @owner Observable
 */
function window(windowBoundaries) {
    return function windowOperatorFunction(source) {
        return source.lift(new WindowOperator(windowBoundaries));
    };
}
var WindowOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function WindowOperator(windowBoundaries) {
        this.windowBoundaries = windowBoundaries;
    }
    WindowOperator.prototype.call = function (subscriber, source) {
        var windowSubscriber = new WindowSubscriber(subscriber);
        var sourceSubscription = source.subscribe(windowSubscriber);
        if (!sourceSubscription.closed) {
            windowSubscriber.add(Object(__WEBPACK_IMPORTED_MODULE_2__util_subscribeToResult__["a" /* subscribeToResult */])(windowSubscriber, this.windowBoundaries));
        }
        return sourceSubscription;
    };
    return WindowOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var WindowSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(WindowSubscriber, _super);
    function WindowSubscriber(destination) {
        _super.call(this, destination);
        this.window = new __WEBPACK_IMPORTED_MODULE_0__Subject__["a" /* Subject */]();
        destination.next(this.window);
    }
    WindowSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.openWindow();
    };
    WindowSubscriber.prototype.notifyError = function (error, innerSub) {
        this._error(error);
    };
    WindowSubscriber.prototype.notifyComplete = function (innerSub) {
        this._complete();
    };
    WindowSubscriber.prototype._next = function (value) {
        this.window.next(value);
    };
    WindowSubscriber.prototype._error = function (err) {
        this.window.error(err);
        this.destination.error(err);
    };
    WindowSubscriber.prototype._complete = function () {
        this.window.complete();
        this.destination.complete();
    };
    WindowSubscriber.prototype._unsubscribe = function () {
        this.window = null;
    };
    WindowSubscriber.prototype.openWindow = function () {
        var prevWindow = this.window;
        if (prevWindow) {
            prevWindow.complete();
        }
        var destination = this.destination;
        var newWindow = this.window = new __WEBPACK_IMPORTED_MODULE_0__Subject__["a" /* Subject */]();
        destination.next(newWindow);
    };
    return WindowSubscriber;
}(__WEBPACK_IMPORTED_MODULE_1__OuterSubscriber__["a" /* OuterSubscriber */]));
//# sourceMappingURL=window.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/windowCount.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export windowCount */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/** PURE_IMPORTS_START .._Subscriber,.._Subject PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/**
 * Branch out the source Observable values as a nested Observable with each
 * nested Observable emitting at most `windowSize` values.
 *
 * <span class="informal">It's like {@link bufferCount}, but emits a nested
 * Observable instead of an array.</span>
 *
 * <img src="./img/windowCount.png" width="100%">
 *
 * Returns an Observable that emits windows of items it collects from the source
 * Observable. The output Observable emits windows every `startWindowEvery`
 * items, each containing no more than `windowSize` items. When the source
 * Observable completes or encounters an error, the output Observable emits
 * the current window and propagates the notification from the source
 * Observable. If `startWindowEvery` is not provided, then new windows are
 * started immediately at the start of the source and when each window completes
 * with size `windowSize`.
 *
 * @example <caption>Ignore every 3rd click event, starting from the first one</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.windowCount(3)
 *   .map(win => win.skip(1)) // skip first of every 3 clicks
 *   .mergeAll(); // flatten the Observable-of-Observables
 * result.subscribe(x => console.log(x));
 *
 * @example <caption>Ignore every 3rd click event, starting from the third one</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.windowCount(2, 3)
 *   .mergeAll(); // flatten the Observable-of-Observables
 * result.subscribe(x => console.log(x));
 *
 * @see {@link window}
 * @see {@link windowTime}
 * @see {@link windowToggle}
 * @see {@link windowWhen}
 * @see {@link bufferCount}
 *
 * @param {number} windowSize The maximum number of values emitted by each
 * window.
 * @param {number} [startWindowEvery] Interval at which to start a new window.
 * For example if `startWindowEvery` is `2`, then a new window will be started
 * on every other value from the source. A new window is started at the
 * beginning of the source by default.
 * @return {Observable<Observable<T>>} An Observable of windows, which in turn
 * are Observable of values.
 * @method windowCount
 * @owner Observable
 */
function windowCount(windowSize, startWindowEvery) {
    if (startWindowEvery === void 0) {
        startWindowEvery = 0;
    }
    return function windowCountOperatorFunction(source) {
        return source.lift(new WindowCountOperator(windowSize, startWindowEvery));
    };
}
var WindowCountOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function WindowCountOperator(windowSize, startWindowEvery) {
        this.windowSize = windowSize;
        this.startWindowEvery = startWindowEvery;
    }
    WindowCountOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new WindowCountSubscriber(subscriber, this.windowSize, this.startWindowEvery));
    };
    return WindowCountOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var WindowCountSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(WindowCountSubscriber, _super);
    function WindowCountSubscriber(destination, windowSize, startWindowEvery) {
        _super.call(this, destination);
        this.destination = destination;
        this.windowSize = windowSize;
        this.startWindowEvery = startWindowEvery;
        this.windows = [new __WEBPACK_IMPORTED_MODULE_1__Subject__["a" /* Subject */]()];
        this.count = 0;
        destination.next(this.windows[0]);
    }
    WindowCountSubscriber.prototype._next = function (value) {
        var startWindowEvery = (this.startWindowEvery > 0) ? this.startWindowEvery : this.windowSize;
        var destination = this.destination;
        var windowSize = this.windowSize;
        var windows = this.windows;
        var len = windows.length;
        for (var i = 0; i < len && !this.closed; i++) {
            windows[i].next(value);
        }
        var c = this.count - windowSize + 1;
        if (c >= 0 && c % startWindowEvery === 0 && !this.closed) {
            windows.shift().complete();
        }
        if (++this.count % startWindowEvery === 0 && !this.closed) {
            var window_1 = new __WEBPACK_IMPORTED_MODULE_1__Subject__["a" /* Subject */]();
            windows.push(window_1);
            destination.next(window_1);
        }
    };
    WindowCountSubscriber.prototype._error = function (err) {
        var windows = this.windows;
        if (windows) {
            while (windows.length > 0 && !this.closed) {
                windows.shift().error(err);
            }
        }
        this.destination.error(err);
    };
    WindowCountSubscriber.prototype._complete = function () {
        var windows = this.windows;
        if (windows) {
            while (windows.length > 0 && !this.closed) {
                windows.shift().complete();
            }
        }
        this.destination.complete();
    };
    WindowCountSubscriber.prototype._unsubscribe = function () {
        this.count = 0;
        this.windows = null;
    };
    return WindowCountSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */]));
//# sourceMappingURL=windowCount.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/windowTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export windowTime */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scheduler_async__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/async.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Subscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_isNumeric__ = __webpack_require__("./node_modules/rxjs/_esm5/util/isNumeric.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_isScheduler__ = __webpack_require__("./node_modules/rxjs/_esm5/util/isScheduler.js");
/** PURE_IMPORTS_START .._Subject,.._scheduler_async,.._Subscriber,.._util_isNumeric,.._util_isScheduler PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};





function windowTime(windowTimeSpan) {
    var scheduler = __WEBPACK_IMPORTED_MODULE_1__scheduler_async__["a" /* async */];
    var windowCreationInterval = null;
    var maxWindowSize = Number.POSITIVE_INFINITY;
    if (Object(__WEBPACK_IMPORTED_MODULE_4__util_isScheduler__["a" /* isScheduler */])(arguments[3])) {
        scheduler = arguments[3];
    }
    if (Object(__WEBPACK_IMPORTED_MODULE_4__util_isScheduler__["a" /* isScheduler */])(arguments[2])) {
        scheduler = arguments[2];
    }
    else if (Object(__WEBPACK_IMPORTED_MODULE_3__util_isNumeric__["a" /* isNumeric */])(arguments[2])) {
        maxWindowSize = arguments[2];
    }
    if (Object(__WEBPACK_IMPORTED_MODULE_4__util_isScheduler__["a" /* isScheduler */])(arguments[1])) {
        scheduler = arguments[1];
    }
    else if (Object(__WEBPACK_IMPORTED_MODULE_3__util_isNumeric__["a" /* isNumeric */])(arguments[1])) {
        windowCreationInterval = arguments[1];
    }
    return function windowTimeOperatorFunction(source) {
        return source.lift(new WindowTimeOperator(windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler));
    };
}
var WindowTimeOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function WindowTimeOperator(windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler) {
        this.windowTimeSpan = windowTimeSpan;
        this.windowCreationInterval = windowCreationInterval;
        this.maxWindowSize = maxWindowSize;
        this.scheduler = scheduler;
    }
    WindowTimeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new WindowTimeSubscriber(subscriber, this.windowTimeSpan, this.windowCreationInterval, this.maxWindowSize, this.scheduler));
    };
    return WindowTimeOperator;
}());
var CountedSubject = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(CountedSubject, _super);
    function CountedSubject() {
        _super.apply(this, arguments);
        this._numberOfNextedValues = 0;
    }
    CountedSubject.prototype.next = function (value) {
        this._numberOfNextedValues++;
        _super.prototype.next.call(this, value);
    };
    Object.defineProperty(CountedSubject.prototype, "numberOfNextedValues", {
        get: function () {
            return this._numberOfNextedValues;
        },
        enumerable: true,
        configurable: true
    });
    return CountedSubject;
}(__WEBPACK_IMPORTED_MODULE_0__Subject__["a" /* Subject */]));
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var WindowTimeSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(WindowTimeSubscriber, _super);
    function WindowTimeSubscriber(destination, windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler) {
        _super.call(this, destination);
        this.destination = destination;
        this.windowTimeSpan = windowTimeSpan;
        this.windowCreationInterval = windowCreationInterval;
        this.maxWindowSize = maxWindowSize;
        this.scheduler = scheduler;
        this.windows = [];
        var window = this.openWindow();
        if (windowCreationInterval !== null && windowCreationInterval >= 0) {
            var closeState = { subscriber: this, window: window, context: null };
            var creationState = { windowTimeSpan: windowTimeSpan, windowCreationInterval: windowCreationInterval, subscriber: this, scheduler: scheduler };
            this.add(scheduler.schedule(dispatchWindowClose, windowTimeSpan, closeState));
            this.add(scheduler.schedule(dispatchWindowCreation, windowCreationInterval, creationState));
        }
        else {
            var timeSpanOnlyState = { subscriber: this, window: window, windowTimeSpan: windowTimeSpan };
            this.add(scheduler.schedule(dispatchWindowTimeSpanOnly, windowTimeSpan, timeSpanOnlyState));
        }
    }
    WindowTimeSubscriber.prototype._next = function (value) {
        var windows = this.windows;
        var len = windows.length;
        for (var i = 0; i < len; i++) {
            var window_1 = windows[i];
            if (!window_1.closed) {
                window_1.next(value);
                if (window_1.numberOfNextedValues >= this.maxWindowSize) {
                    this.closeWindow(window_1);
                }
            }
        }
    };
    WindowTimeSubscriber.prototype._error = function (err) {
        var windows = this.windows;
        while (windows.length > 0) {
            windows.shift().error(err);
        }
        this.destination.error(err);
    };
    WindowTimeSubscriber.prototype._complete = function () {
        var windows = this.windows;
        while (windows.length > 0) {
            var window_2 = windows.shift();
            if (!window_2.closed) {
                window_2.complete();
            }
        }
        this.destination.complete();
    };
    WindowTimeSubscriber.prototype.openWindow = function () {
        var window = new CountedSubject();
        this.windows.push(window);
        var destination = this.destination;
        destination.next(window);
        return window;
    };
    WindowTimeSubscriber.prototype.closeWindow = function (window) {
        window.complete();
        var windows = this.windows;
        windows.splice(windows.indexOf(window), 1);
    };
    return WindowTimeSubscriber;
}(__WEBPACK_IMPORTED_MODULE_2__Subscriber__["a" /* Subscriber */]));
function dispatchWindowTimeSpanOnly(state) {
    var subscriber = state.subscriber, windowTimeSpan = state.windowTimeSpan, window = state.window;
    if (window) {
        subscriber.closeWindow(window);
    }
    state.window = subscriber.openWindow();
    this.schedule(state, windowTimeSpan);
}
function dispatchWindowCreation(state) {
    var windowTimeSpan = state.windowTimeSpan, subscriber = state.subscriber, scheduler = state.scheduler, windowCreationInterval = state.windowCreationInterval;
    var window = subscriber.openWindow();
    var action = this;
    var context = { action: action, subscription: null };
    var timeSpanState = { subscriber: subscriber, window: window, context: context };
    context.subscription = scheduler.schedule(dispatchWindowClose, windowTimeSpan, timeSpanState);
    action.add(context.subscription);
    action.schedule(state, windowCreationInterval);
}
function dispatchWindowClose(state) {
    var subscriber = state.subscriber, window = state.window, context = state.context;
    if (context && context.action && context.subscription) {
        context.action.remove(context.subscription);
    }
    subscriber.closeWindow(window);
}
//# sourceMappingURL=windowTime.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/windowToggle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export windowToggle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_tryCatch__ = __webpack_require__("./node_modules/rxjs/_esm5/util/tryCatch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_errorObject__ = __webpack_require__("./node_modules/rxjs/_esm5/util/errorObject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__OuterSubscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/OuterSubscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_subscribeToResult__ = __webpack_require__("./node_modules/rxjs/_esm5/util/subscribeToResult.js");
/** PURE_IMPORTS_START .._Subject,.._Subscription,.._util_tryCatch,.._util_errorObject,.._OuterSubscriber,.._util_subscribeToResult PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};






/**
 * Branch out the source Observable values as a nested Observable starting from
 * an emission from `openings` and ending when the output of `closingSelector`
 * emits.
 *
 * <span class="informal">It's like {@link bufferToggle}, but emits a nested
 * Observable instead of an array.</span>
 *
 * <img src="./img/windowToggle.png" width="100%">
 *
 * Returns an Observable that emits windows of items it collects from the source
 * Observable. The output Observable emits windows that contain those items
 * emitted by the source Observable between the time when the `openings`
 * Observable emits an item and when the Observable returned by
 * `closingSelector` emits an item.
 *
 * @example <caption>Every other second, emit the click events from the next 500ms</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var openings = Rx.Observable.interval(1000);
 * var result = clicks.windowToggle(openings, i =>
 *   i % 2 ? Rx.Observable.interval(500) : Rx.Observable.empty()
 * ).mergeAll();
 * result.subscribe(x => console.log(x));
 *
 * @see {@link window}
 * @see {@link windowCount}
 * @see {@link windowTime}
 * @see {@link windowWhen}
 * @see {@link bufferToggle}
 *
 * @param {Observable<O>} openings An observable of notifications to start new
 * windows.
 * @param {function(value: O): Observable} closingSelector A function that takes
 * the value emitted by the `openings` observable and returns an Observable,
 * which, when it emits (either `next` or `complete`), signals that the
 * associated window should complete.
 * @return {Observable<Observable<T>>} An observable of windows, which in turn
 * are Observables.
 * @method windowToggle
 * @owner Observable
 */
function windowToggle(openings, closingSelector) {
    return function (source) { return source.lift(new WindowToggleOperator(openings, closingSelector)); };
}
var WindowToggleOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function WindowToggleOperator(openings, closingSelector) {
        this.openings = openings;
        this.closingSelector = closingSelector;
    }
    WindowToggleOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new WindowToggleSubscriber(subscriber, this.openings, this.closingSelector));
    };
    return WindowToggleOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var WindowToggleSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(WindowToggleSubscriber, _super);
    function WindowToggleSubscriber(destination, openings, closingSelector) {
        _super.call(this, destination);
        this.openings = openings;
        this.closingSelector = closingSelector;
        this.contexts = [];
        this.add(this.openSubscription = Object(__WEBPACK_IMPORTED_MODULE_5__util_subscribeToResult__["a" /* subscribeToResult */])(this, openings, openings));
    }
    WindowToggleSubscriber.prototype._next = function (value) {
        var contexts = this.contexts;
        if (contexts) {
            var len = contexts.length;
            for (var i = 0; i < len; i++) {
                contexts[i].window.next(value);
            }
        }
    };
    WindowToggleSubscriber.prototype._error = function (err) {
        var contexts = this.contexts;
        this.contexts = null;
        if (contexts) {
            var len = contexts.length;
            var index = -1;
            while (++index < len) {
                var context = contexts[index];
                context.window.error(err);
                context.subscription.unsubscribe();
            }
        }
        _super.prototype._error.call(this, err);
    };
    WindowToggleSubscriber.prototype._complete = function () {
        var contexts = this.contexts;
        this.contexts = null;
        if (contexts) {
            var len = contexts.length;
            var index = -1;
            while (++index < len) {
                var context = contexts[index];
                context.window.complete();
                context.subscription.unsubscribe();
            }
        }
        _super.prototype._complete.call(this);
    };
    WindowToggleSubscriber.prototype._unsubscribe = function () {
        var contexts = this.contexts;
        this.contexts = null;
        if (contexts) {
            var len = contexts.length;
            var index = -1;
            while (++index < len) {
                var context = contexts[index];
                context.window.unsubscribe();
                context.subscription.unsubscribe();
            }
        }
    };
    WindowToggleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        if (outerValue === this.openings) {
            var closingSelector = this.closingSelector;
            var closingNotifier = Object(__WEBPACK_IMPORTED_MODULE_2__util_tryCatch__["a" /* tryCatch */])(closingSelector)(innerValue);
            if (closingNotifier === __WEBPACK_IMPORTED_MODULE_3__util_errorObject__["a" /* errorObject */]) {
                return this.error(__WEBPACK_IMPORTED_MODULE_3__util_errorObject__["a" /* errorObject */].e);
            }
            else {
                var window_1 = new __WEBPACK_IMPORTED_MODULE_0__Subject__["a" /* Subject */]();
                var subscription = new __WEBPACK_IMPORTED_MODULE_1__Subscription__["a" /* Subscription */]();
                var context = { window: window_1, subscription: subscription };
                this.contexts.push(context);
                var innerSubscription = Object(__WEBPACK_IMPORTED_MODULE_5__util_subscribeToResult__["a" /* subscribeToResult */])(this, closingNotifier, context);
                if (innerSubscription.closed) {
                    this.closeWindow(this.contexts.length - 1);
                }
                else {
                    innerSubscription.context = context;
                    subscription.add(innerSubscription);
                }
                this.destination.next(window_1);
            }
        }
        else {
            this.closeWindow(this.contexts.indexOf(outerValue));
        }
    };
    WindowToggleSubscriber.prototype.notifyError = function (err) {
        this.error(err);
    };
    WindowToggleSubscriber.prototype.notifyComplete = function (inner) {
        if (inner !== this.openSubscription) {
            this.closeWindow(this.contexts.indexOf(inner.context));
        }
    };
    WindowToggleSubscriber.prototype.closeWindow = function (index) {
        if (index === -1) {
            return;
        }
        var contexts = this.contexts;
        var context = contexts[index];
        var window = context.window, subscription = context.subscription;
        contexts.splice(index, 1);
        window.complete();
        subscription.unsubscribe();
    };
    return WindowToggleSubscriber;
}(__WEBPACK_IMPORTED_MODULE_4__OuterSubscriber__["a" /* OuterSubscriber */]));
//# sourceMappingURL=windowToggle.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/windowWhen.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export windowWhen */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_tryCatch__ = __webpack_require__("./node_modules/rxjs/_esm5/util/tryCatch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_errorObject__ = __webpack_require__("./node_modules/rxjs/_esm5/util/errorObject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__OuterSubscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/OuterSubscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_subscribeToResult__ = __webpack_require__("./node_modules/rxjs/_esm5/util/subscribeToResult.js");
/** PURE_IMPORTS_START .._Subject,.._util_tryCatch,.._util_errorObject,.._OuterSubscriber,.._util_subscribeToResult PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};





/**
 * Branch out the source Observable values as a nested Observable using a
 * factory function of closing Observables to determine when to start a new
 * window.
 *
 * <span class="informal">It's like {@link bufferWhen}, but emits a nested
 * Observable instead of an array.</span>
 *
 * <img src="./img/windowWhen.png" width="100%">
 *
 * Returns an Observable that emits windows of items it collects from the source
 * Observable. The output Observable emits connected, non-overlapping windows.
 * It emits the current window and opens a new one whenever the Observable
 * produced by the specified `closingSelector` function emits an item. The first
 * window is opened immediately when subscribing to the output Observable.
 *
 * @example <caption>Emit only the first two clicks events in every window of [1-5] random seconds</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks
 *   .windowWhen(() => Rx.Observable.interval(1000 + Math.random() * 4000))
 *   .map(win => win.take(2)) // each window has at most 2 emissions
 *   .mergeAll(); // flatten the Observable-of-Observables
 * result.subscribe(x => console.log(x));
 *
 * @see {@link window}
 * @see {@link windowCount}
 * @see {@link windowTime}
 * @see {@link windowToggle}
 * @see {@link bufferWhen}
 *
 * @param {function(): Observable} closingSelector A function that takes no
 * arguments and returns an Observable that signals (on either `next` or
 * `complete`) when to close the previous window and start a new one.
 * @return {Observable<Observable<T>>} An observable of windows, which in turn
 * are Observables.
 * @method windowWhen
 * @owner Observable
 */
function windowWhen(closingSelector) {
    return function windowWhenOperatorFunction(source) {
        return source.lift(new WindowOperator(closingSelector));
    };
}
var WindowOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function WindowOperator(closingSelector) {
        this.closingSelector = closingSelector;
    }
    WindowOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new WindowSubscriber(subscriber, this.closingSelector));
    };
    return WindowOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var WindowSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(WindowSubscriber, _super);
    function WindowSubscriber(destination, closingSelector) {
        _super.call(this, destination);
        this.destination = destination;
        this.closingSelector = closingSelector;
        this.openWindow();
    }
    WindowSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.openWindow(innerSub);
    };
    WindowSubscriber.prototype.notifyError = function (error, innerSub) {
        this._error(error);
    };
    WindowSubscriber.prototype.notifyComplete = function (innerSub) {
        this.openWindow(innerSub);
    };
    WindowSubscriber.prototype._next = function (value) {
        this.window.next(value);
    };
    WindowSubscriber.prototype._error = function (err) {
        this.window.error(err);
        this.destination.error(err);
        this.unsubscribeClosingNotification();
    };
    WindowSubscriber.prototype._complete = function () {
        this.window.complete();
        this.destination.complete();
        this.unsubscribeClosingNotification();
    };
    WindowSubscriber.prototype.unsubscribeClosingNotification = function () {
        if (this.closingNotification) {
            this.closingNotification.unsubscribe();
        }
    };
    WindowSubscriber.prototype.openWindow = function (innerSub) {
        if (innerSub === void 0) {
            innerSub = null;
        }
        if (innerSub) {
            this.remove(innerSub);
            innerSub.unsubscribe();
        }
        var prevWindow = this.window;
        if (prevWindow) {
            prevWindow.complete();
        }
        var window = this.window = new __WEBPACK_IMPORTED_MODULE_0__Subject__["a" /* Subject */]();
        this.destination.next(window);
        var closingNotifier = Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(this.closingSelector)();
        if (closingNotifier === __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */]) {
            var err = __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */].e;
            this.destination.error(err);
            this.window.error(err);
        }
        else {
            this.add(this.closingNotification = Object(__WEBPACK_IMPORTED_MODULE_4__util_subscribeToResult__["a" /* subscribeToResult */])(this, closingNotifier));
        }
    };
    return WindowSubscriber;
}(__WEBPACK_IMPORTED_MODULE_3__OuterSubscriber__["a" /* OuterSubscriber */]));
//# sourceMappingURL=windowWhen.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/withLatestFrom.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export withLatestFrom */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__OuterSubscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/OuterSubscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__ = __webpack_require__("./node_modules/rxjs/_esm5/util/subscribeToResult.js");
/** PURE_IMPORTS_START .._OuterSubscriber,.._util_subscribeToResult PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/* tslint:enable:max-line-length */
/**
 * Combines the source Observable with other Observables to create an Observable
 * whose values are calculated from the latest values of each, only when the
 * source emits.
 *
 * <span class="informal">Whenever the source Observable emits a value, it
 * computes a formula using that value plus the latest values from other input
 * Observables, then emits the output of that formula.</span>
 *
 * <img src="./img/withLatestFrom.png" width="100%">
 *
 * `withLatestFrom` combines each value from the source Observable (the
 * instance) with the latest values from the other input Observables only when
 * the source emits a value, optionally using a `project` function to determine
 * the value to be emitted on the output Observable. All input Observables must
 * emit at least one value before the output Observable will emit a value.
 *
 * @example <caption>On every click event, emit an array with the latest timer event plus the click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var timer = Rx.Observable.interval(1000);
 * var result = clicks.withLatestFrom(timer);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link combineLatest}
 *
 * @param {ObservableInput} other An input Observable to combine with the source
 * Observable. More than one input Observables may be given as argument.
 * @param {Function} [project] Projection function for combining values
 * together. Receives all values in order of the Observables passed, where the
 * first parameter is a value from the source Observable. (e.g.
 * `a.withLatestFrom(b, c, (a1, b1, c1) => a1 + b1 + c1)`). If this is not
 * passed, arrays will be emitted on the output Observable.
 * @return {Observable} An Observable of projected values from the most recent
 * values from each input Observable, or an array of the most recent values from
 * each input Observable.
 * @method withLatestFrom
 * @owner Observable
 */
function withLatestFrom() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    return function (source) {
        var project;
        if (typeof args[args.length - 1] === 'function') {
            project = args.pop();
        }
        var observables = args;
        return source.lift(new WithLatestFromOperator(observables, project));
    };
}
var WithLatestFromOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function WithLatestFromOperator(observables, project) {
        this.observables = observables;
        this.project = project;
    }
    WithLatestFromOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new WithLatestFromSubscriber(subscriber, this.observables, this.project));
    };
    return WithLatestFromOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var WithLatestFromSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(WithLatestFromSubscriber, _super);
    function WithLatestFromSubscriber(destination, observables, project) {
        _super.call(this, destination);
        this.observables = observables;
        this.project = project;
        this.toRespond = [];
        var len = observables.length;
        this.values = new Array(len);
        for (var i = 0; i < len; i++) {
            this.toRespond.push(i);
        }
        for (var i = 0; i < len; i++) {
            var observable = observables[i];
            this.add(Object(__WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__["a" /* subscribeToResult */])(this, observable, observable, i));
        }
    }
    WithLatestFromSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.values[outerIndex] = innerValue;
        var toRespond = this.toRespond;
        if (toRespond.length > 0) {
            var found = toRespond.indexOf(outerIndex);
            if (found !== -1) {
                toRespond.splice(found, 1);
            }
        }
    };
    WithLatestFromSubscriber.prototype.notifyComplete = function () {
        // noop
    };
    WithLatestFromSubscriber.prototype._next = function (value) {
        if (this.toRespond.length === 0) {
            var args = [value].concat(this.values);
            if (this.project) {
                this._tryProject(args);
            }
            else {
                this.destination.next(args);
            }
        }
    };
    WithLatestFromSubscriber.prototype._tryProject = function (args) {
        var result;
        try {
            result = this.project.apply(this, args);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return WithLatestFromSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__OuterSubscriber__["a" /* OuterSubscriber */]));
//# sourceMappingURL=withLatestFrom.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/zip.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export zip */
/* unused harmony export zipStatic */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZipOperator; });
/* unused harmony export ZipSubscriber */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__observable_ArrayObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/ArrayObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_isArray__ = __webpack_require__("./node_modules/rxjs/_esm5/util/isArray.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Subscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__OuterSubscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/OuterSubscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_subscribeToResult__ = __webpack_require__("./node_modules/rxjs/_esm5/util/subscribeToResult.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__symbol_iterator__ = __webpack_require__("./node_modules/rxjs/_esm5/symbol/iterator.js");
/** PURE_IMPORTS_START .._observable_ArrayObservable,.._util_isArray,.._Subscriber,.._OuterSubscriber,.._util_subscribeToResult,.._symbol_iterator PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};






/* tslint:enable:max-line-length */
/**
 * @param observables
 * @return {Observable<R>}
 * @method zip
 * @owner Observable
 */
function zip() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    return function zipOperatorFunction(source) {
        return source.lift.call(zipStatic.apply(void 0, [source].concat(observables)));
    };
}
/* tslint:enable:max-line-length */
/**
 * Combines multiple Observables to create an Observable whose values are calculated from the values, in order, of each
 * of its input Observables.
 *
 * If the latest parameter is a function, this function is used to compute the created value from the input values.
 * Otherwise, an array of the input values is returned.
 *
 * @example <caption>Combine age and name from different sources</caption>
 *
 * let age$ = Observable.of<number>(27, 25, 29);
 * let name$ = Observable.of<string>('Foo', 'Bar', 'Beer');
 * let isDev$ = Observable.of<boolean>(true, true, false);
 *
 * Observable
 *     .zip(age$,
 *          name$,
 *          isDev$,
 *          (age: number, name: string, isDev: boolean) => ({ age, name, isDev }))
 *     .subscribe(x => console.log(x));
 *
 * // outputs
 * // { age: 27, name: 'Foo', isDev: true }
 * // { age: 25, name: 'Bar', isDev: true }
 * // { age: 29, name: 'Beer', isDev: false }
 *
 * @param observables
 * @return {Observable<R>}
 * @static true
 * @name zip
 * @owner Observable
 */
function zipStatic() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    var project = observables[observables.length - 1];
    if (typeof project === 'function') {
        observables.pop();
    }
    return new __WEBPACK_IMPORTED_MODULE_0__observable_ArrayObservable__["a" /* ArrayObservable */](observables).lift(new ZipOperator(project));
}
var ZipOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function ZipOperator(project) {
        this.project = project;
    }
    ZipOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ZipSubscriber(subscriber, this.project));
    };
    return ZipOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var ZipSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(ZipSubscriber, _super);
    function ZipSubscriber(destination, project, values) {
        if (values === void 0) {
            values = Object.create(null);
        }
        _super.call(this, destination);
        this.iterators = [];
        this.active = 0;
        this.project = (typeof project === 'function') ? project : null;
        this.values = values;
    }
    ZipSubscriber.prototype._next = function (value) {
        var iterators = this.iterators;
        if (Object(__WEBPACK_IMPORTED_MODULE_1__util_isArray__["a" /* isArray */])(value)) {
            iterators.push(new StaticArrayIterator(value));
        }
        else if (typeof value[__WEBPACK_IMPORTED_MODULE_5__symbol_iterator__["a" /* iterator */]] === 'function') {
            iterators.push(new StaticIterator(value[__WEBPACK_IMPORTED_MODULE_5__symbol_iterator__["a" /* iterator */]]()));
        }
        else {
            iterators.push(new ZipBufferIterator(this.destination, this, value));
        }
    };
    ZipSubscriber.prototype._complete = function () {
        var iterators = this.iterators;
        var len = iterators.length;
        if (len === 0) {
            this.destination.complete();
            return;
        }
        this.active = len;
        for (var i = 0; i < len; i++) {
            var iterator = iterators[i];
            if (iterator.stillUnsubscribed) {
                this.add(iterator.subscribe(iterator, i));
            }
            else {
                this.active--; // not an observable
            }
        }
    };
    ZipSubscriber.prototype.notifyInactive = function () {
        this.active--;
        if (this.active === 0) {
            this.destination.complete();
        }
    };
    ZipSubscriber.prototype.checkIterators = function () {
        var iterators = this.iterators;
        var len = iterators.length;
        var destination = this.destination;
        // abort if not all of them have values
        for (var i = 0; i < len; i++) {
            var iterator = iterators[i];
            if (typeof iterator.hasValue === 'function' && !iterator.hasValue()) {
                return;
            }
        }
        var shouldComplete = false;
        var args = [];
        for (var i = 0; i < len; i++) {
            var iterator = iterators[i];
            var result = iterator.next();
            // check to see if it's completed now that you've gotten
            // the next value.
            if (iterator.hasCompleted()) {
                shouldComplete = true;
            }
            if (result.done) {
                destination.complete();
                return;
            }
            args.push(result.value);
        }
        if (this.project) {
            this._tryProject(args);
        }
        else {
            destination.next(args);
        }
        if (shouldComplete) {
            destination.complete();
        }
    };
    ZipSubscriber.prototype._tryProject = function (args) {
        var result;
        try {
            result = this.project.apply(this, args);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return ZipSubscriber;
}(__WEBPACK_IMPORTED_MODULE_2__Subscriber__["a" /* Subscriber */]));
var StaticIterator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function StaticIterator(iterator) {
        this.iterator = iterator;
        this.nextResult = iterator.next();
    }
    StaticIterator.prototype.hasValue = function () {
        return true;
    };
    StaticIterator.prototype.next = function () {
        var result = this.nextResult;
        this.nextResult = this.iterator.next();
        return result;
    };
    StaticIterator.prototype.hasCompleted = function () {
        var nextResult = this.nextResult;
        return nextResult && nextResult.done;
    };
    return StaticIterator;
}());
var StaticArrayIterator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function StaticArrayIterator(array) {
        this.array = array;
        this.index = 0;
        this.length = 0;
        this.length = array.length;
    }
    StaticArrayIterator.prototype[__WEBPACK_IMPORTED_MODULE_5__symbol_iterator__["a" /* iterator */]] = function () {
        return this;
    };
    StaticArrayIterator.prototype.next = function (value) {
        var i = this.index++;
        var array = this.array;
        return i < this.length ? { value: array[i], done: false } : { value: null, done: true };
    };
    StaticArrayIterator.prototype.hasValue = function () {
        return this.array.length > this.index;
    };
    StaticArrayIterator.prototype.hasCompleted = function () {
        return this.array.length === this.index;
    };
    return StaticArrayIterator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var ZipBufferIterator = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(ZipBufferIterator, _super);
    function ZipBufferIterator(destination, parent, observable) {
        _super.call(this, destination);
        this.parent = parent;
        this.observable = observable;
        this.stillUnsubscribed = true;
        this.buffer = [];
        this.isComplete = false;
    }
    ZipBufferIterator.prototype[__WEBPACK_IMPORTED_MODULE_5__symbol_iterator__["a" /* iterator */]] = function () {
        return this;
    };
    // NOTE: there is actually a name collision here with Subscriber.next and Iterator.next
    //    this is legit because `next()` will never be called by a subscription in this case.
    ZipBufferIterator.prototype.next = function () {
        var buffer = this.buffer;
        if (buffer.length === 0 && this.isComplete) {
            return { value: null, done: true };
        }
        else {
            return { value: buffer.shift(), done: false };
        }
    };
    ZipBufferIterator.prototype.hasValue = function () {
        return this.buffer.length > 0;
    };
    ZipBufferIterator.prototype.hasCompleted = function () {
        return this.buffer.length === 0 && this.isComplete;
    };
    ZipBufferIterator.prototype.notifyComplete = function () {
        if (this.buffer.length > 0) {
            this.isComplete = true;
            this.parent.notifyInactive();
        }
        else {
            this.destination.complete();
        }
    };
    ZipBufferIterator.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.buffer.push(innerValue);
        this.parent.checkIterators();
    };
    ZipBufferIterator.prototype.subscribe = function (value, index) {
        return Object(__WEBPACK_IMPORTED_MODULE_4__util_subscribeToResult__["a" /* subscribeToResult */])(this, this.observable, this, index);
    };
    return ZipBufferIterator;
}(__WEBPACK_IMPORTED_MODULE_3__OuterSubscriber__["a" /* OuterSubscriber */]));
//# sourceMappingURL=zip.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/zipAll.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export zipAll */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__zip__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/zip.js");
/** PURE_IMPORTS_START ._zip PURE_IMPORTS_END */

function zipAll(project) {
    return function (source) { return source.lift(new __WEBPACK_IMPORTED_MODULE_0__zip__["a" /* ZipOperator */](project)); };
}
//# sourceMappingURL=zipAll.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/scheduler/async.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return async; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AsyncAction__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/AsyncAction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AsyncScheduler__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/AsyncScheduler.js");
/** PURE_IMPORTS_START ._AsyncAction,._AsyncScheduler PURE_IMPORTS_END */


/**
 *
 * Async Scheduler
 *
 * <span class="informal">Schedule task as if you used setTimeout(task, duration)</span>
 *
 * `async` scheduler schedules tasks asynchronously, by putting them on the JavaScript
 * event loop queue. It is best used to delay tasks in time or to schedule tasks repeating
 * in intervals.
 *
 * If you just want to "defer" task, that is to perform it right after currently
 * executing synchronous code ends (commonly achieved by `setTimeout(deferredTask, 0)`),
 * better choice will be the {@link asap} scheduler.
 *
 * @example <caption>Use async scheduler to delay task</caption>
 * const task = () => console.log('it works!');
 *
 * Rx.Scheduler.async.schedule(task, 2000);
 *
 * // After 2 seconds logs:
 * // "it works!"
 *
 *
 * @example <caption>Use async scheduler to repeat task in intervals</caption>
 * function task(state) {
 *   console.log(state);
 *   this.schedule(state + 1, 1000); // `this` references currently executing Action,
 *                                   // which we reschedule with new state and delay
 * }
 *
 * Rx.Scheduler.async.schedule(task, 3000, 0);
 *
 * // Logs:
 * // 0 after 3s
 * // 1 after 4s
 * // 2 after 5s
 * // 3 after 6s
 *
 * @static true
 * @name async
 * @owner Scheduler
 */
var async = /*@__PURE__*/ new __WEBPACK_IMPORTED_MODULE_1__AsyncScheduler__["a" /* AsyncScheduler */](__WEBPACK_IMPORTED_MODULE_0__AsyncAction__["a" /* AsyncAction */]);
//# sourceMappingURL=async.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/util/FastMap.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FastMap; });
var FastMap = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function FastMap() {
        this.values = {};
    }
    FastMap.prototype.delete = function (key) {
        this.values[key] = null;
        return true;
    };
    FastMap.prototype.set = function (key, value) {
        this.values[key] = value;
        return this;
    };
    FastMap.prototype.get = function (key) {
        return this.values[key];
    };
    FastMap.prototype.forEach = function (cb, thisArg) {
        var values = this.values;
        for (var key in values) {
            if (values.hasOwnProperty(key) && values[key] !== null) {
                cb.call(thisArg, values[key], key);
            }
        }
    };
    FastMap.prototype.clear = function () {
        this.values = {};
    };
    return FastMap;
}());
//# sourceMappingURL=FastMap.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/util/Map.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Map; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root__ = __webpack_require__("./node_modules/rxjs/_esm5/util/root.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MapPolyfill__ = __webpack_require__("./node_modules/rxjs/_esm5/util/MapPolyfill.js");
/** PURE_IMPORTS_START ._root,._MapPolyfill PURE_IMPORTS_END */


var Map = __WEBPACK_IMPORTED_MODULE_0__root__["a" /* root */].Map || /*@__PURE__*/ (function () { return __WEBPACK_IMPORTED_MODULE_1__MapPolyfill__["a" /* MapPolyfill */]; })();
//# sourceMappingURL=Map.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/util/MapPolyfill.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPolyfill; });
var MapPolyfill = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function MapPolyfill() {
        this.size = 0;
        this._values = [];
        this._keys = [];
    }
    MapPolyfill.prototype.get = function (key) {
        var i = this._keys.indexOf(key);
        return i === -1 ? undefined : this._values[i];
    };
    MapPolyfill.prototype.set = function (key, value) {
        var i = this._keys.indexOf(key);
        if (i === -1) {
            this._keys.push(key);
            this._values.push(value);
            this.size++;
        }
        else {
            this._values[i] = value;
        }
        return this;
    };
    MapPolyfill.prototype.delete = function (key) {
        var i = this._keys.indexOf(key);
        if (i === -1) {
            return false;
        }
        this._values.splice(i, 1);
        this._keys.splice(i, 1);
        this.size--;
        return true;
    };
    MapPolyfill.prototype.clear = function () {
        this._keys.length = 0;
        this._values.length = 0;
        this.size = 0;
    };
    MapPolyfill.prototype.forEach = function (cb, thisArg) {
        for (var i = 0; i < this.size; i++) {
            cb.call(thisArg, this._values[i], this._keys[i]);
        }
    };
    return MapPolyfill;
}());
//# sourceMappingURL=MapPolyfill.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/util/Set.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export minimalSetImpl */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Set; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root__ = __webpack_require__("./node_modules/rxjs/_esm5/util/root.js");
/** PURE_IMPORTS_START ._root PURE_IMPORTS_END */

function minimalSetImpl() {
    // THIS IS NOT a full impl of Set, this is just the minimum
    // bits of functionality we need for this library.
    return (function () {
        function MinimalSet() {
            this._values = [];
        }
        MinimalSet.prototype.add = function (value) {
            if (!this.has(value)) {
                this._values.push(value);
            }
        };
        MinimalSet.prototype.has = function (value) {
            return this._values.indexOf(value) !== -1;
        };
        Object.defineProperty(MinimalSet.prototype, "size", {
            get: function () {
                return this._values.length;
            },
            enumerable: true,
            configurable: true
        });
        MinimalSet.prototype.clear = function () {
            this._values.length = 0;
        };
        return MinimalSet;
    }());
}
var Set = __WEBPACK_IMPORTED_MODULE_0__root__["a" /* root */].Set || /*@__PURE__*/ minimalSetImpl();
//# sourceMappingURL=Set.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/util/TimeoutError.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeoutError; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * An error thrown when duetime elapses.
 *
 * @see {@link timeout}
 *
 * @class TimeoutError
 */
var TimeoutError = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(TimeoutError, _super);
    function TimeoutError() {
        var err = _super.call(this, 'Timeout has occurred');
        this.name = err.name = 'TimeoutError';
        this.stack = err.stack;
        this.message = err.message;
    }
    return TimeoutError;
}(Error));
//# sourceMappingURL=TimeoutError.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/util/isDate.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isDate;
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isDate(value) {
    return value instanceof Date && !isNaN(+value);
}
//# sourceMappingURL=isDate.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/util/isNumeric.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isNumeric;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_isArray__ = __webpack_require__("./node_modules/rxjs/_esm5/util/isArray.js");
/** PURE_IMPORTS_START .._util_isArray PURE_IMPORTS_END */

function isNumeric(val) {
    // parseFloat NaNs numeric-cast false positives (null|true|false|"")
    // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
    // subtraction forces infinities to NaN
    // adding 1 corrects loss of precision from parseFloat (#15100)
    return !Object(__WEBPACK_IMPORTED_MODULE_0__util_isArray__["a" /* isArray */])(val) && (val - parseFloat(val) + 1) >= 0;
}
;
//# sourceMappingURL=isNumeric.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/util/not.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = not;
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function not(pred, thisArg) {
    function notPred() {
        return !(notPred.pred.apply(notPred.thisArg, arguments));
    }
    notPred.pred = pred;
    notPred.thisArg = thisArg;
    return notPred;
}
//# sourceMappingURL=not.js.map


/***/ }),

/***/ "./src/app/map-view/h-video/h-video.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HVideoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HVideoComponent = (function () {
    function HVideoComponent() {
        this.shadow = 2;
    }
    HVideoComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], HVideoComponent.prototype, "video", void 0);
    HVideoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-h-video',
            template: "\n    <div class=\"video-component\" [mdl-shadow]=\"shadow\">\n      <div class=\"mdl-card__title mdl-card--expand\" [ngStyle]=\"{'background': '#000 url(' + video.snippet.thumbnails.high.url + ') center center no-repeat', 'background-size': '90%'}\">\n      </div>\n      <div class=\"video-informations\">\n        {{ video.snippet.title }}\n      </div>\n    </div>\n  ",
            styles: ['.video-component {height:100%;display:grid;padding-top:2px; grid-template-columns: 2fr 3fr; grid-gap:5px}',]
        }),
        __metadata("design:paramtypes", [])
    ], HVideoComponent);
    return HVideoComponent;
}());



/***/ }),

/***/ "./src/app/map-view/main-mapview/main-mapview.component.css":
/***/ (function(module, exports) {

module.exports = ".map-view-header{\n  background-color: rgb(204, 204, 204);\n  font-family:cursive;\n}\n.map-container{\n    display:-ms-grid;\n    display:grid;\n    height: 100vh;\n    -ms-grid-columns: 7fr 3fr;\n        grid-template-columns: 7fr 3fr;  \n    -ms-grid-rows: 39fr 1fr;  \n        grid-template-rows: 39fr 1fr; \n    \n}\n.map-header{\n    background-color: transparent;\n    text-align: right;\n}\n.map-footer{\n    -ms-grid-column: 1;\n    -ms-grid-column-span: 2;\n    grid-column: 1/3; \n}\n.map{\n    text-align: right;\n}\n.map-videos{\n    overflow: scroll;\n}\n.map-video{\n    height: 100px;\n    padding: 5px;\n}\n.sns-go-home{\n    display: inline-block;\n    width: 80%\n}\n.sns-go-home:hover{\n    cursor: pointer;\n}\n.sns-map-search{\n    width: 100%;\n}\ninput[type=text] {\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\nagm-map {height: 100%}\n"

/***/ }),

/***/ "./src/app/map-view/main-mapview/main-mapview.component.html":
/***/ (function(module, exports) {

module.exports = "<div mdl-shadow=\"2\">\n    <mdl-layout mdl-layout-fixed-header mdl-layout-header-seamed>\n        <mdl-layout-header class=\"map-view-header\">\n            <mdl-layout-header-row>\n                <app-go-home-component class=\"sns-go-home\"></app-go-home-component>\n                <app-user-information></app-user-information>\n            </mdl-layout-header-row>\n        </mdl-layout-header>\n\n        <mdl-layout-content class=\"map-container\">\n            <div class=\"map\">\n                <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [minZoom]=\"minZoom\" [maxZoom]=\"maxZoom\" [zoom]=\"zoom\" [styles]=\"mainMapStyles\"\n                    (mapClick)=\"mapClicked($event)\">\n                    <agm-marker *ngFor=\"let m of markers; let i = index\" (markerClick)=\"clickedMarker(m.label, i)\" [latitude]=\"m.lat\" [longitude]=\"m.lng\"\n                        [label]=\"m.label\" [markerDraggable]=\"m.draggable\" (dragEnd)=\"markerDragEnd(m, $event)\">\n                        <agm-info-window>\n                            <strong>InfoWindow content</strong>\n                        </agm-info-window>\n                    </agm-marker>\n                    <agm-circle [latitude]=\"lat\" [longitude]=\"lng\" [radius]=\"200000\" [fillColor]=\"'grey'\" [circleDraggable]=\"true\" (centerChange)=\"circleCenterChanged($event)\"\n                        (radiusChange)=\"circleRadChanged($event)\" [editable]=\"true\">\n                    </agm-circle>\n                </agm-map>\n            </div>\n            <div class=\"map-videos\">\n                <div class='sns-map-search'>\n                    <input type=\"text\" id=\"fname\" name=\"fname\" placeholder=\"search recipes ..\">\n                </div>\n                <div class='sns-map-tabs'>\n                    <button mdl-button mdl-ripple (click)=\"browseClicked()\" [disabled]=\"browseTab\" mdl-colored=\"accent\"> Browse</button>\n                    <button mdl-button mdl-ripple (click)=\"filterClicked()\" [disabled]=\"!browseTab\" mdl-colored=\"accent\">Filter</button>\n                </div>\n                <div class=\"map-video\" *ngFor=\"let video of mapVideos\">\n                    <app-h-video [video]=\"video\"></app-h-video>\n                </div>\n            </div>\n            <div class=\"map-footer\"></div>\n        </mdl-layout-content>\n    </mdl-layout>\n</div>"

/***/ }),

/***/ "./src/app/map-view/main-mapview/main-mapview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainMapviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map_style__ = __webpack_require__("./src/app/map-view/main-mapview/map-style.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_notification_service__ = __webpack_require__("./src/app/shared/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_indexDataService__ = __webpack_require__("./src/app/shared/services/indexDataService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MainMapviewComponent = (function () {
    function MainMapviewComponent(solrService, notificationService, router) {
        this.solrService = solrService;
        this.notificationService = notificationService;
        this.router = router;
        this.mainMapStyles = __WEBPACK_IMPORTED_MODULE_1__map_style__["a" /* mpaStyles */];
        this.browseTab = true;
        this.markers = [{
                lat: 20.673858,
                lng: 85.815982,
                label: 'cuttack',
                draggable: false
            }];
        this.zoom = 6;
        this.maxZoom = 8;
        this.minZoom = 4;
        this.lat = 20.673858;
        this.lng = 85.815982;
        this.mapVideos = [];
        this.agmCircleCenter = { lat: 20.673858, lng: 85.815982 };
        this.cirCenter$ = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__["a" /* Subject */]();
        this.agrCircleRad = 200000;
    }
    MainMapviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cirCenter$.pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["a" /* debounceTime */])(500), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["b" /* distinctUntilChanged */])()).subscribe(function (result) {
            return _this.solrService.searchByLocation(result.lat, result.lng, _this.agrCircleRad / 1000)
                .then(function (data) {
                return _this.processCircleData(data);
            })
                .then(function (result) { return _this.mapVideos = result; });
        });
        this.cirCenter$.next(this.agmCircleCenter);
    };
    MainMapviewComponent.prototype.goHome = function () {
        console.log("Going to the front page route");
        this.router.navigate(['/']);
    };
    MainMapviewComponent.prototype.clickedMarker = function (label, index) {
        console.log("clicked the marker: " + (label || index));
    };
    MainMapviewComponent.prototype.mapClicked = function ($event) {
        // this.markers.push({
        //     lat: $event.coords.lat,
        //     lng: $event.coords.lng,
        //     draggable: false,
        // });
    };
    MainMapviewComponent.prototype.browseClicked = function () {
        this.browseTab = true;
    };
    MainMapviewComponent.prototype.markerDragEnd = function (m, $event) {
        console.log('dragEnd', m, $event);
    };
    MainMapviewComponent.prototype.filterClicked = function () {
        this.browseTab = false;
    };
    MainMapviewComponent.prototype.circleRadChanged = function (radius) {
        var _this = this;
        this.agrCircleRad = radius;
        console.log("radius of the circle changed" + this.agrCircleRad);
        this.solrService.searchByLocation(this.agmCircleCenter.lat, this.agmCircleCenter.lng, this.agrCircleRad / 1000)
            .then(function (data) {
            return _this.processCircleData(data);
        })
            .then(function (result) { return _this.mapVideos = result; });
    };
    MainMapviewComponent.prototype.circleCenterChanged = function (latlng) {
        this.cirCenter$.next(latlng);
        // console.log("center changed");
    };
    MainMapviewComponent.prototype.processCircleData = function (data) {
        var videsIds = [];
        this.markers = [];
        for (var i = 0; i < data.length; i++) {
            videsIds.push(data[i]['video_id']);
            this.markers.push({
                lat: parseFloat(data[i].geo_location.split(',')[0]),
                lng: parseFloat(data[i].geo_location.split(',')[1]),
                label: data[i].id,
                draggable: false
            });
            // console.log(this.markers);
        }
        return this.solrService.getVideos(videsIds);
    };
    MainMapviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main-mapview',
            template: __webpack_require__("./src/app/map-view/main-mapview/main-mapview.component.html"),
            styles: [__webpack_require__("./src/app/map-view/main-mapview/main-mapview.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_services_indexDataService__["a" /* IndexDataService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_notification_service__["a" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], MainMapviewComponent);
    return MainMapviewComponent;
}());



/***/ }),

/***/ "./src/app/map-view/main-mapview/map-style.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mpaStyles; });
var mpaStyles = [
    {
        featureType: "administrative.country",
        stylers: [
            {
                weight: 3.5
            }
        ]
    },
    {
        featureType: "administrative.country",
        elementType: "geometry.stroke",
        stylers: [
            {
                visibility: "on"
            },
            {
                weight: 1.5
            }
        ]
    },
    {
        featureType: "administrative.province",
        elementType: "geometry.stroke",
        stylers: [
            {
                saturation: -45
            },
            {
                lightness: -70
            },
            {
                visibility: "on"
            }
        ]
    },
    {
        featureType: "administrative.neighborhood",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "poi",
        elementType: "labels.text",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "poi.business",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "road",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "road",
        elementType: "labels",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "road",
        elementType: "labels.icon",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "transit",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "water",
        elementType: "labels.text",
        stylers: [
            {
                visibility: "off"
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/map-view/map-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapServiceService = (function () {
    function MapServiceService() {
        this.circleMovedSrc = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.missionAnnounced$ = this.circleMovedSrc.asObservable();
    }
    MapServiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MapServiceService);
    return MapServiceService;
}());



/***/ }),

/***/ "./src/app/map-view/map-view-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapViewRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_mapview_main_mapview_component__ = __webpack_require__("./src/app/map-view/main-mapview/main-mapview.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', redirectTo: 'aboutPeekNMake', pathMatch: 'full' },
    { path: 'aboutPeekNMake', component: __WEBPACK_IMPORTED_MODULE_2__main_mapview_main_mapview_component__["a" /* MainMapviewComponent */] }
];
var MapViewRoutingModule = (function () {
    function MapViewRoutingModule() {
    }
    MapViewRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], MapViewRoutingModule);
    return MapViewRoutingModule;
}());



/***/ }),

/***/ "./src/app/map-view/map-view.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapViewModule", function() { return MapViewModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_mdl_core__ = __webpack_require__("./node_modules/@angular-mdl/core/components/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_modules_shared_module__ = __webpack_require__("./src/app/shared/modules/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__map_view_routing_module__ = __webpack_require__("./src/app/map-view/map-view-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_mapview_main_mapview_component__ = __webpack_require__("./src/app/map-view/main-mapview/main-mapview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__h_video_h_video_component__ = __webpack_require__("./src/app/map-view/h-video/h-video.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__map_service_service__ = __webpack_require__("./src/app/map-view/map-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var MapViewModule = (function () {
    function MapViewModule() {
    }
    MapViewModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_mdl_core__["a" /* MdlModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_modules_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__map_view_routing_module__["a" /* MapViewRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyCR-P6Z32gjEajXnb1UECYVUu8gBhvT0EE'
                })
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_6__main_mapview_main_mapview_component__["a" /* MainMapviewComponent */], __WEBPACK_IMPORTED_MODULE_7__h_video_h_video_component__["a" /* HVideoComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_8__map_service_service__["a" /* MapServiceService */]]
        })
    ], MapViewModule);
    return MapViewModule;
}());



/***/ })

});
//# sourceMappingURL=map-view.module.chunk.js.map