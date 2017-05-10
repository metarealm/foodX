import { Injectable } from '@angular/core';
import { Http, Response, Jsonp, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { indexDatas, IndexedData } from '../Helper/indexdata';
import { AppSettings } from '../constants';
import { NotificationService } from './notification.service';


@Injectable()
export class IndexDataService {

    getIndexedData(): Promise<IndexedData[]> {
        return Promise.resolve(indexDatas);
    }

    constructor(private jsonp: Jsonp, private http: Http, private notificationService: NotificationService) { }
    suggest(term: string) {
        let solrUrl = AppSettings.SOLR_SERVER_PATH+'foodx/suggest';
        let params = new URLSearchParams();
        params.set('suggest', 'true'); // the user's search value
        params.set('suggest.build', 'true');
        params.set('wt', 'json');
        params.set('suggest.q', term);
        params.set('json.wrf', 'JSONP_CALLBACK');

        return this.jsonp
            .get(solrUrl, { search: params })
            .map((response) => {
                let jsonRes = response.json();
                let suggestions = [];
                let suggestionObject = jsonRes['suggest']['default'][term]['suggestions'];
                for (let i = 0; i < suggestionObject.length; i++) {
                    suggestions[i] = suggestionObject[i]['term'];
                }
                return suggestions;
            }).toPromise();
    }


    searchVideos(term: any) : Promise<any>{
        let solrUrl = AppSettings.SOLR_SERVER_PATH + 'foodx/select';
        let params = new URLSearchParams();
        params.set('wt', 'json');
        params.set('q', 'RecipeTitle:' + term);
        params.set('json.wrf', 'JSONP_CALLBACK');

        return this.jsonp
            .get(solrUrl, { search: params })
            .map((response) => {
                
                let jsonRes = response.json();
                let suggestions = [];
                let suggestionObject = jsonRes['response']['docs'];
                console.log('number of search result for '+ term + '=' + suggestionObject.length);
                let ids = [];

                suggestionObject.forEach((item) => {
                    ids.push(item.youtubevideoID);
                });

                return this.getVideos(ids);
            }).toPromise().catch(this.handleError);
    }


    getVideos(ids): Promise<any> {
        return this.http.get(AppSettings.base_url + 'videos?id=' + ids.join(',') + '&maxResults=' + AppSettings.max_results + '&type=video&part=snippet,contentDetails,statistics&key=' + AppSettings.YOUTUBE_API_KEY)
            .map(results => {
                return results.json()['items'];
            })
            .toPromise()
            .catch(this.handleError)
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }

        this.notificationService.showNotification(errMsg);
        return Promise.reject(errMsg);
    }
}