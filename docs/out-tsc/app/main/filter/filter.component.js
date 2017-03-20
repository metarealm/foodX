var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from "@angular/core";
import { IndexDataService } from '../../shared/services/indexDataService';
var FilterComponent = (function () {
    function FilterComponent(dataService) {
        this.dataService = dataService;
    }
    FilterComponent.prototype.getFilterVideos = function () {
        var _this = this;
        this.dataService.getIndexedData().then(function (indexedVideos) { return _this.videos = indexedVideos; });
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
    Input(),
    __metadata("design:type", Object)
], FilterComponent.prototype, "playlistToggle", void 0);
FilterComponent = __decorate([
    Component({
        selector: 'filters',
        templateUrl: 'filter.component.html',
        styleUrls: ['filter.component.css'],
        providers: [IndexDataService]
    }),
    __metadata("design:paramtypes", [IndexDataService])
], FilterComponent);
export { FilterComponent };
//# sourceMappingURL=../../../../../src/app/main/filter/filter.component.js.map