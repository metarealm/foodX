import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormBuilder, Validators } from '@angular/forms';
import { YoutubeApiService } from "../../shared/services/youtube-api.service";
import { YoutubePlayerService } from "../../shared/services/youtube-player.service";
import { NotificationService } from '../../shared/services/notification.service';
import { IndexDataService } from '../../shared/services/indexDataService';
import { Observable } from 'rxjs/Observable';
import { SearchObject } from '../../shared/searchObject';
import {MdSelectModule} from '@angular/material';
import { FacetService} from '../../shared/services/facetService';

@Component({
    selector: 'solr-search',
    templateUrl: 'solr-search.component.html',
    styleUrls: ['solr-search.component.css'],
    providers: [IndexDataService]
})
export class SolrSearchComponent {

    // items: Observable<string[]>;
    items: string[];
    @Output() videosUpdated = new EventEmitter();
    @Input() loadingInProgress;
    private last_search: string;
    private pagenum: number = 0;
    private searObject: SearchObject = new SearchObject(0, 'indian');
    public searchForm = this.fb.group({
        query: ["", Validators.required]
    });

    constructor(private solrService: IndexDataService,
        public fb: FormBuilder,
        private youtubePlayer: YoutubePlayerService,
        private notificationService: NotificationService,
        private facetService : FacetService) {
        this.search().then(data => { this.videosUpdated.emit(data); });

    }
    public suggest(term: string) {

        this.solrService.suggest(term).then(items => {
            this.items = items;
        });

    }

    public doSearch(): void {
        if (this.loadingInProgress || (this.searchForm.value.query.trim().length === 0) ||
            (this.last_search && this.last_search === this.searchForm.value.query)) return;
        this.videosUpdated.emit([]);
        this.last_search = this.searchForm.value.query;
        // this.last_search = this.last_search + ' recipe';
        this.searObject.pageNum = 0;
        this.searObject.searchTerm = this.last_search;
        this.solrService.searchVideos(this.searObject)
            .then(data => {
                this.pagenum = this.pagenum + 1;
                if (data.length < 1) this.notificationService.showNotification("No matches found.")
                this.videosUpdated.emit(data);
            })
    }

    public search(): Promise<any> {
        this.searObject.pageNum = this.pagenum;
        return this.solrService.searchVideos(this.searObject)
            .then(data => {
                this.pagenum = this.pagenum + 1;
                if (data.length < 1) this.notificationService.showNotification("No matches found.");
                return data;
            })
    }

}

