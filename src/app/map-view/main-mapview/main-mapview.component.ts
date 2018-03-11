import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { mpaStyles } from './map-style';
import { NotificationService } from '../../shared/services/notification.service';
import { IndexDataService } from '../../shared/services/indexDataService';
import { SearchObject } from '../../shared/Helper/searchObject';

@Component({
    selector: 'app-main-mapview',
    templateUrl: './main-mapview.component.html',
    styleUrls: ['./main-mapview.component.css']
})
export class MainMapviewComponent implements OnInit {

    public mainMapStyles = mpaStyles;
    public markers: marker[];
    public zoom = 6;
    public maxZoom = 8;
    public minZoom = 4;
    public lat: number = 20.673858;
    public lng: number = 85.815982;
    public mapVideos = []; 
    private mapSearchObject :SearchObject ;
    
    constructor(private solrService: IndexDataService , 
                private notificationService:NotificationService,
                ){

    }
    ngOnInit() {
        this.mapSearchObject = new SearchObject(0,"odisha");
        this.solrService.searchVideos(this.mapSearchObject)
            .then(data => {
                this.mapSearchObject.pageNum = this.mapSearchObject.pageNum + 1;
                // if (data.length < 1) this.notificationService.showNotification("No matches found.");
                this.mapVideos = data;
            })

    }

    clickedMarker(label: string, index: number) {
        console.log(`clicked the marker: ${label || index}`)
    }
    mapClicked($event: MouseEvent) {
        this.markers.push({
            lat: $event.coords.lat,
            lng: $event.coords.lng,
            draggable: true
        });
    }
    markerDragEnd(m: marker, $event: MouseEvent) {
        console.log('dragEnd', m, $event);
    }
}

interface marker {
    lat: number;
    lng: number;
    label?: string;
    draggable: boolean;
}
