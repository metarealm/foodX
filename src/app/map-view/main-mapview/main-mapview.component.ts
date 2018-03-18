import { Component, OnInit } from '@angular/core';
import { MouseEvent, LatLngLiteral } from '@agm/core';
import { mpaStyles } from './map-style';
import { NotificationService } from '../../shared/services/notification.service';
import { IndexDataService } from '../../shared/services/indexDataService';
import { SearchObject } from '../../shared/Helper/searchObject';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { debounceTime, map, distinctUntilChanged, switchMap } from 'rxjs/operators';

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
    private mapSearchObject: SearchObject;
    private agmCircleCenter = { lat: 20.673858, lng: 85.815982 };
    private cirCenter$ = new Subject<LatLngLiteral>();
    private agrCircleRad = 200000;

    constructor(private solrService: IndexDataService,
        private notificationService: NotificationService,
        private router: Router) { }

    ngOnInit() {
        // this.mapSearchObject = new SearchObject(0, "odisha");
        // this.solrService.searchVideos(this.mapSearchObject)
        //     .then(data => {
        //         this.mapSearchObject.pageNum = this.mapSearchObject.pageNum + 1;
        //         this.mapVideos = data;
        //     });
        this.cirCenter$
            .debounceTime(500)
            .subscribe(result => {
                this.solrService.searchByLocation(result.lat, result.lng, this.agrCircleRad / 1000)
                    .then(data => {
                        this.mapVideos = data;
                    });
            });
        this.cirCenter$.next(this.agmCircleCenter);
    }
    goHome() {
        console.log("Going to the front page route");
        this.router.navigate(['/']);
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
    circleRadChanged(radius: number) {
        this.agrCircleRad = radius;
        console.log("radius of the circle changed" + this.agrCircleRad);
        this.solrService.searchByLocation(this.agmCircleCenter.lat, this.agmCircleCenter.lng, this.agrCircleRad / 1000)
            .then(data => {
                this.mapSearchObject.pageNum = this.mapSearchObject.pageNum + 1;
                this.mapVideos = data;
            })
    }
    circleCenterChanged(latlng: LatLngLiteral) {
        this.cirCenter$.next(latlng);
        console.log("center changed");
    }
}

interface marker {
    lat: number;
    lng: number;
    label?: string;
    draggable: boolean;
}
