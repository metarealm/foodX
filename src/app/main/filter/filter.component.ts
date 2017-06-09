import { Component, Input, OnInit } from "@angular/core";
import { indexDatas, IndexedData } from '../../shared/Helper/indexdata';
import { IndexDataService } from '../../shared/services/indexDataService';
import { FacetService } from '../../shared/services/facetService';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'filters',
    templateUrl: 'filter.component.html',
    styleUrls: ['filter.component.css'],
    providers: [IndexDataService]
})

export class FilterComponent implements OnInit {
    @Input() playlistToggle;
    videos: IndexedData[];
    selectedVideo: IndexedData;
    likefacets: any;
    locationfacets:any;
    ingredientfacets:any;
    contenttypefacets:any;
    subscription: Subscription;

    constructor(private dataService: FacetService) {
        this.subscription = this.dataService.facet$.subscribe(message => {
                            console.log(' facet data ');
                            console.log( message['likes']['buckets']);
                            this.likefacets=message['likes']['buckets'];
                            this.locationfacets =message['Recipelocation']['buckets'];
                            this.ingredientfacets=message['Ingredients']['buckets'];
                            this.contenttypefacets = message['contenttype']['buckets'];
        });

    }

    getFilterVideos(): void {
    }
    ngOnInit(): void {
        this.getFilterVideos();
    }
    onSelect(video: IndexedData): void {
        this.selectedVideo = video;
    }

}
