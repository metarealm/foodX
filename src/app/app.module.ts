import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule,JsonpModule, URLSearchParams } from "@angular/http";
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { MdlModule } from '@angular-mdl/core';
import { RouterModule, Routes } from '@angular/router';
import {MdSelectModule} from '@angular/material';

// Components
import { AppComponent } from "./app.component";
import { MainComponent } from "./main/main.component";
import { VideosListComponent } from "./main/videos-list/videos-list.component";
import { VideosPlaylistComponent } from "./main/videos-playlist/videos-playlist.component";
import { VideoPlayerComponent } from "./main/video-player/video-player.component";
import { FilterComponent} from "./main/filter/filter.component";
import { SolrSearchComponent } from "./main/solr-search/solr-search.component";
import { YoutubePlayerModule } from 'ng2-youtube-player';
// Services
import { YoutubeApiService } from "./shared/services/youtube-api.service";
import { YoutubePlayerService } from "./shared/services/youtube-player.service";
import { PlaylistStoreService } from "./shared/services/playlist-store.service";
import { NotificationService } from "./shared/services/notification.service";
import { IndexDataService } from './shared/services/indexDataService';
import { FacetService } from './shared/services/facetService'
// Pipes
import { VideoDurationPipe } from "./shared/pipes/video-duration.pipe";
import { VideoLikesPipe } from "./shared/pipes/video-likes.pipe";
import { VideoViewsPipe } from "./shared/pipes/video-views.pipe";
import { PlaylistItemNamePipe } from "./shared/pipes/playlist-item-name.pipe";
import { LazyScroll } from "./shared/directives/lazy-scroll/lazy-scroll.directive";

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		ReactiveFormsModule,
		MdlModule,
		JsonpModule,
		YoutubePlayerModule
	],
	declarations: [
		AppComponent,
		MainComponent,
		VideosListComponent,
		VideoPlayerComponent,
		VideosPlaylistComponent,

		VideoDurationPipe,
		VideoLikesPipe,
		VideoViewsPipe,
		PlaylistItemNamePipe,

		LazyScroll,

		FilterComponent,
		SolrSearchComponent

	],
	bootstrap: [
		AppComponent
	],
	providers: [
		YoutubeApiService,
		YoutubePlayerService,
		PlaylistStoreService,
		NotificationService,
		IndexDataService,
		FacetService,

	]
})
export class AppModule {
}
