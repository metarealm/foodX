import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormBuilder, Validators } from '@angular/forms';
import { YoutubeApiService } from "../../shared/services/youtube-api.service";
import { YoutubePlayerService } from "../../shared/services/youtube-player.service";
import { NotificationService } from '../../shared/services/notification.service';
import { IndexDataService } from '../../shared/services/indexDataService';
import { Observable } from 'rxjs/Observable';

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
    public searchForm = this.fb.group({
        query: ["", Validators.required]
    });

    constructor(private solrService: IndexDataService,
        public fb: FormBuilder,
        private youtubeService: YoutubeApiService,
        private youtubePlayer: YoutubePlayerService,
        private notificationService: NotificationService) {
        this.youtubeService.searchVideos('indian recipe')
            .then(data => { this.videosUpdated.emit(data); });

    }
    suggest(term: string) {

        this.solrService.suggest(term).then(items => {
            this.items = items;
        });

    }

    doSearch(event): void {
        if (this.loadingInProgress || (this.searchForm.value.query.trim().length === 0) ||
            (this.last_search && this.last_search === this.searchForm.value.query)) return;
            this.videosUpdated.emit([]);
        this.last_search = this.searchForm.value.query;
        this.last_search = this.last_search+' recipe';
        console.log('last_search is '+ this.last_search);
        this.solrService.searchVideos(this.last_search)
            .then(data => {
                if (data.length < 1) this.notificationService.showNotification("No matches found.")
                this.videosUpdated.emit(data);
            })
    }


    // doSearch(event): void {
    //     // console.log('inside the doSearch ');
    //     // console.log('loadingInProgress'+ this.loadingInProgress);
    //     if (this.loadingInProgress || (this.searchForm.value.query.trim().length === 0) ||
    //         (this.last_search && this.last_search === this.searchForm.value.query)) return;

    //     this.videosUpdated.emit([]);
    //     this.last_search = this.searchForm.value.query;
    //     this.last_search = this.last_search+' recipe';
    //     console.log('last_search is '+ this.last_search);
    //     this.youtubeService.searchVideos(this.last_search)
    //         .then(data => {
    //             if (data.length < 1) this.notificationService.showNotification("No matches found.")
    //             this.videosUpdated.emit(data);
    //         })
    // }
}

