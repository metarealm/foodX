import { Component, Input, OnInit } from "@angular/core";
import { indexDatas, IndexedData } from '../../shared/Helper/indexdata';
import { IndexDataService } from '../../shared/services/indexDataService'

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

    constructor(private dataService: IndexDataService) { }

    getFilterVideos(): void {
        this.dataService.getIndexedData().then(indexedVideos => this.videos = indexedVideos);
    }
    ngOnInit(): void {
        this.getFilterVideos();
    }
    onSelect(video: IndexedData): void {
        this.selectedVideo = video;
    }
}
