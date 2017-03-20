import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import { indexDatas,IndexedData} from '../Helper/indexdata';

@Injectable()
export class IndexDataService{
  getIndexedData(): Promise<IndexedData[]> {
      return Promise.resolve(indexDatas);
    }

    constructor(private jsonp: Jsonp) {}
search (term: string) {
  let solrUrl = 'http://10.0.0.16:8983/solr/#/foodX/';
  let params = new URLSearchParams();
  params.set('search', term); // the user's search value
  params.set('action', 'opensearch');
  params.set('format', 'json');
  params.set('callback', 'JSONP_CALLBACK');


  return this.jsonp
             .get(solrUrl, { search: params })
             .map(response => <string[]> response.json()[1]);
}
}
