import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule,JsonpModule, URLSearchParams } from "@angular/http";
import { ReactiveFormsModule } from '@angular/forms';
import { MdlModule } from '@angular-mdl/core';
import { MaterialModule} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';


// Components
import { AppComponent } from "./app.component";
import { MainComponent } from "./main/main.component";
import { VideosListComponent } from "./main/videos-list/videos-list.component";
import { VideosPlaylistComponent } from "./main/videos-playlist/videos-playlist.component";
import { VideoPlayerComponent } from "./main/video-player/video-player.component";
import { FilterComponent} from "./main/filter/filter.component";
import { SolrSearchComponent } from "./main/solr-search/solr-search.component";
import { YoutubePlayerModule } from 'ng2-youtube-player';
import { PageNotFoundComponent } from './shared/components/not-found.component';
import { UserInformationComponent } from './shared/components/user-information.component';
import { LoginCallbackComponent } from './frontpage/login-callback/login-callback.component';

// Services
import { YoutubeApiService } from "./shared/services/youtube-api.service";
import { YoutubePlayerService } from "./shared/services/youtube-player.service";
import { PlaylistStoreService } from "./shared/services/playlist-store.service";
import { NotificationService } from "./shared/services/notification.service";
import { IndexDataService } from './shared/services/indexDataService';
import { FacetService } from './shared/services/facetService';
import { AuthService } from './auth/auth.service';

// Pipes
import { VideoDurationPipe } from "./shared/pipes/video-duration.pipe";
import { VideoLikesPipe } from "./shared/pipes/video-likes.pipe";
import { VideoViewsPipe } from "./shared/pipes/video-views.pipe";
import { PlaylistItemNamePipe } from "./shared/pipes/playlist-item-name.pipe";
import { LazyScroll } from "./shared/directives/lazy-scroll/lazy-scroll.directive";
import { FrontpageComponent } from './frontpage/frontpage.component';
import { GoHomeComponent } from './shared/components/go-home.component';
import { SearchConfigurationComponent } from './shared/components/search-configuration.component';
import { UserAccountsComponent } from './shared/components/user-accounts.component';



@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		ReactiveFormsModule,
		MdlModule,
		JsonpModule,
		YoutubePlayerModule,
		BrowserAnimationsModule,
		MaterialModule,
		AppRoutingModule
	],
	declarations: [
		AppComponent,
		MainComponent,
		VideosListComponent,
		VideoPlayerComponent,
		VideosPlaylistComponent,
		PageNotFoundComponent,
		MainComponent,

		VideoDurationPipe,
		VideoLikesPipe,
		VideoViewsPipe,
		PlaylistItemNamePipe,

		LazyScroll,

		FilterComponent,
		SolrSearchComponent,
		FrontpageComponent,
		UserInformationComponent,
		LoginCallbackComponent,
		GoHomeComponent,
		SearchConfigurationComponent,
		UserAccountsComponent

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
        AuthService

	]
})
export class AppModule {
}
