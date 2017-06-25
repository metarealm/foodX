import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { NotificationService } from './notification.service';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { } from '@types/youtube';

@Injectable()
export class YoutubePlayerService {
	public yt_player;
	private currentVideoId: string;
	private ytOptions : YT.PlayerOptions = Object.assign({}, {
		width: '440',
		height: '250',
		playerVars: {iv_load_policy: '3',rel: '0'}
	}, {events: {onStateChange: (ev) => {this.onPlayerStateChange(ev);}}
		});
	@Output() videoChangeEvent: EventEmitter<any> = new EventEmitter(true);
	@Output() playPauseEvent: EventEmitter<any> = new EventEmitter(true);


	static get win() {
		return window;
	}

	api: ReplaySubject<YT.Player>;

	constructor(public notificationService: NotificationService) {
	}


	

	createPlayer(): void {
		this.ytOptions = Object.assign({}, {
			width: '440',
			height: '250',
			playerVars: {iv_load_policy: '3',rel: '0'}
			}, {events: {onStateChange: (ev) => {this.onPlayerStateChange(ev);}}
		});
		let interval = setInterval(() => {
			if ((typeof window['YT'] !== "undefined") && window['YT'] && window['YT'].Player) {
				console.log('YT player set');
				this.yt_player = new YT.Player('yt-player', this.ytOptions);
				clearInterval(interval);
			}
		}, 100);
	}

	onPlayerStateChange(event: any) {
		const state = event.data;
		switch (state) {
			case 0:
				this.videoChangeEvent.emit(true);
				this.playPauseEvent.emit('pause');
				break;
			case 1:
				this.playPauseEvent.emit('play');
				break;
			case 2:
				this.playPauseEvent.emit('pause');
				break;
		}
	}

	playVideo(videoId: string): void {
		if (!this.yt_player) {
			this.notificationService.showNotification("Player not ready.");
			return;
		}
		
		this.yt_player.loadVideoById(videoId);
		this.currentVideoId = videoId;
	}

	pausePlayingVideo(): void {
		this.yt_player.pauseVideo();
	}

	playPausedVideo(): void {
		this.yt_player.playVideo();
	}

	getCurrentVideo(): string {
		return this.currentVideoId;
	}

	resizePlayer(width: number, height: number) {
		console.log( 'resizing player to  - width =' + width + ' height ='+ height);
		this.yt_player.setSize(width, height);
	}

}