import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
// Components
import { AppComponent } from "./app.component";
import { MainComponent } from "./main/main.component";
import { VideosListComponent } from "./main/videos-list/videos-list.component";
import { VideosPlaylistComponent } from "./main/videos-playlist/videos-playlist.component";
import { VideosSearchComponent } from "./main/videos-search/videos-search.component";
import { VideoPlayerComponent } from "./main/video-player/video-player.component";
import { FilterComponent} from "./main/filter/filter.component";
// Services
import { YoutubeApiService } from "./shared/services/youtube-api.service";
import { YoutubePlayerService } from "./shared/services/youtube-player.service";
import { PlaylistStoreService } from "./shared/services/playlist-store.service";
import { NotificationService } from "./shared/services/notification.service";
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
		MaterialModule
	],
	declarations: [
		AppComponent,
		MainComponent,

		VideosListComponent,
		VideosSearchComponent,
		VideoPlayerComponent,
		VideosPlaylistComponent,

		VideoDurationPipe,
		VideoLikesPipe,
		VideoViewsPipe,
		PlaylistItemNamePipe,

		LazyScroll,

		FilterComponent

	],
	bootstrap: [
		AppComponent
	],
	providers: [
		YoutubeApiService,
		YoutubePlayerService,
		PlaylistStoreService,
		NotificationService
	]
})
export class AppModule {
}
