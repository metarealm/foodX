import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { indexDatas, IndexedData } from '../Helper/indexdata';

@Injectable()
export class IndexDataService {
    getIndexedData(): Promise<IndexedData[]> {
        return Promise.resolve(indexDatas);
    }

    constructor(private jsonp: Jsonp) { }
    suggest(term: string) {
        // http://10.0.0.16:8983/solr/foodX/suggest?suggest=true&suggest.build=true&suggest.dictionary=mySuggester&wt=json&suggest.q=p
        let solrUrl = 'http://10.0.0.16:8983/solr/foodX/suggest';
        let params = new URLSearchParams();
        params.set('suggest', 'true'); // the user's search value
        params.set('suggest.build', 'true');
        params.set('suggest.dictionary', 'mySuggester');
        params.set('wt', 'json');
        params.set('suggest.q', term);
        params.set('json.wrf', 'JSONP_CALLBACK');

        return this.jsonp
            .get(solrUrl, { search: params })
            .map((response) => {
                let jsonRes = response.json();
                let suggestions = [];
                let suggestionObject = jsonRes['suggest']['mySuggester'][term]['suggestions'];
                for(let i=0 ; i < suggestionObject.length ; i++){
                    suggestions[i] = suggestionObject[i]['term'];
                }
                return suggestions;
            }).toPromise();
    }


    searchVideos(term: any) {
        let solrUrl = 'http://10.0.0.16:8983/solr/foodX/select';
        let params = new URLSearchParams();
        params.set('wt', 'json');
        params.set('q', 'Recipe_title:'+term+'*');
        params.set('json.wrf', 'JSONP_CALLBACK');

        return this.jsonp
            .get(solrUrl, { search: params })
            .map((response) => {
                let jsonRes = response.json();
                let suggestions = [];
                let suggestionObject = jsonRes['response']['docs'];
                return suggestionObject;
            }).toPromise();
    }
}
