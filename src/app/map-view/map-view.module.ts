import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdlModule } from '@angular-mdl/core';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';
import { MapViewRoutingModule } from './map-view-routing.module';
import { MainMapviewComponent } from './main-mapview/main-mapview.component';

@NgModule({
    imports: [
        CommonModule,
        MdlModule,
        MapViewRoutingModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyCR-P6Z32gjEajXnb1UECYVUu8gBhvT0EE'
        })
    ],
    declarations: [MainMapviewComponent]
})
export class MapViewModule { }
