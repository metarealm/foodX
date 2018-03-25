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
    public browseTab = true;
    public markers: marker[] = [{
        lat: 20.673858,
        lng: 85.815982,
        label: 'cuttack',
        draggable: false
    }];
    public zoom = 6;
    public maxZoom = 8;
    public minZoom = 4;
    public lat: number = 20.673858;
    public lng: number = 85.815982;
    public mapVideos = [];
    private mapSearchObject: SearchObject;
    private agmCircleCenter = { lat: 20, lng: 85 };
    private cirCenter$ = new Subject<LatLngLiteral>();
    private agrCircleRad = 200000;

    constructor(private solrService: IndexDataService,
        private notificationService: NotificationService,
        private router: Router) { }

    ngOnInit() {
        this.cirCenter$.pipe(
            debounceTime(500),
            distinctUntilChanged()
            ).subscribe(result => {
                return this.solrService.searchByLocation(result.lat, result.lng, this.agrCircleRad / 1000)
                    .then(data => {
                        return this.processCircleData(data);
                    })
                    .then(result => this.mapVideos = result);
            })
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
    }
    browseClicked(){
        this.browseTab = true;
    }
    markerDragEnd(m: marker, $event: MouseEvent) {
        console.log('dragEnd', m, $event);
    }
    filterClicked(){
        this.browseTab = false;
    }
    circleRadChanged(radius: number) {
        this.agrCircleRad = radius;
        console.log("radius of the circle changed" + this.agrCircleRad);
        this.solrService.searchByLocation(this.agmCircleCenter.lat, this.agmCircleCenter.lng, this.agrCircleRad / 1000)
            .then(data => {
                return this.processCircleData(data);
            })
            .then(result => this.mapVideos = result);
    }
    circleCenterChanged(latlng: LatLngLiteral) {
        this.cirCenter$.next(latlng);
    }

    processCircleData(data: any) {
        let videsIds = [];
        this.markers = [];
        for (let i = 0; i < data.length; i++) {
            videsIds.push(data[i]['video_id']);

            this.markers.push({
                lat: parseFloat(data[i].geo_location.split(',')[0]),
                lng: parseFloat(data[i].geo_location.split(',')[1]),
                label: data[i].id,
                draggable: false
            });
        }
        return this.solrService.getVideos(videsIds);
    }
}

interface marker {
    lat: number;
    lng: number;
    label?: string;
    draggable: boolean;
}
