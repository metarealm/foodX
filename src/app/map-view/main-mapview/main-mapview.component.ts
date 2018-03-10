import { Component, OnInit } from '@angular/core';
import { MouseEvent ,GoogleMapsAPIWrapper} from '@agm/core';

@Component({
    selector: 'app-main-mapview',
    templateUrl: './main-mapview.component.html',
    styleUrls: ['./main-mapview.component.css']
})
export class MainMapviewComponent {
    markers: marker[];
    zoom: number = 6;
    lat: number = 20.673858;
    lng: number = 85.815982;
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
