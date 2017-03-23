var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import { indexDatas } from '../Helper/indexdata';
var IndexDataService = (function () {
    function IndexDataService(jsonp) {
        this.jsonp = jsonp;
    }
    IndexDataService.prototype.getIndexedData = function () {
        return Promise.resolve(indexDatas);
    };
    IndexDataService.prototype.search = function (term) {
        var solrUrl = 'http://10.0.0.16:8983/solr/foodX/suggest';
        var params = new URLSearchParams();
        params.set('suggest', 'true');
        params.set('suggest.build', 'true');
        params.set('suggest.dictionary', 'mySuggester');
        params.set('wt', 'json');
        params.set('suggest.q', term);
        params.set('json.wrf', 'JSONP_CALLBACK');
        return this.jsonp
            .get(solrUrl, { search: params })
            .map(function (response) { return response.json()[1]; });
    };
    return IndexDataService;
}());
IndexDataService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Jsonp])
], IndexDataService);
export { IndexDataService };
//# sourceMappingURL=../../../../../src/app/shared/services/indexDataService.js.map