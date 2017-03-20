var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { YoutubeApiService } from "../shared/services/youtube-api.service";
import { YoutubePlayerService } from "../shared/services/youtube-player.service";
import { PlaylistStoreService } from "../shared/services/playlist-store.service";
import { NotificationService } from '../shared/services/notification.service';
var MainComponent = (function () {
    function MainComponent(youtubeService, youtubePlayer, playlistService, notificationService) {
        this.youtubeService = youtubeService;
        this.youtubePlayer = youtubePlayer;
        this.playlistService = playlistService;
        this.notificationService = notificationService;
        this.videoList = [];
        this.videoPlaylist = [];
        this.loadingInProgress = false;
        this.playlistToggle = false;
        this.filterToggle = false;
        this.playlistNames = false;
        this.pageLoadingFinished = false;
        this.repeat = false;
        this.shuffle = false;
        this.videoPlaylist = this.playlistService.retrieveStorage().playlists;
    }
    MainComponent.prototype.playFirstInPlaylist = function () {
        if (this.videoPlaylist[0])
            this.youtubePlayer.playVideo(this.videoPlaylist[0].id);
    };
    MainComponent.prototype.handleSearchVideo = function (videos) {
        this.videoList = videos;
        console.log(this.videoList);
    };
    MainComponent.prototype.checkAddToPlaylist = function (video) {
        var _this = this;
        if (!this.videoPlaylist.some(function (e) { return e.id === video.id; })) {
            this.videoPlaylist.push(video);
            this.playlistService.addToPlaylist(video);
            var inPlaylist_1 = this.videoPlaylist.length - 1;
            setTimeout(function () {
                var topPos = document.getElementById(_this.videoPlaylist[inPlaylist_1].id).offsetTop;
                var playlistEl = document.getElementById('playlist');
                playlistEl.scrollTop = topPos - 100;
            });
        }
    };
    MainComponent.prototype.repeatActive = function (val) {
        this.repeat = val;
        this.shuffle = false;
    };
    MainComponent.prototype.shuffleActive = function (val) {
        this.shuffle = val;
        this.repeat = false;
    };
    MainComponent.prototype.togglePlaylist = function () {
        var _this = this;
        this.playlistToggle = !this.playlistToggle;
        setTimeout(function () {
            _this.playlistNames = !_this.playlistNames;
        }, 100);
    };
    MainComponent.prototype.toggleFilter = function () {
        this.filterToggle = !this.filterToggle;
    };
    MainComponent.prototype.searchMore = function () {
        var _this = this;
        if (this.loadingInProgress || this.pageLoadingFinished || this.videoList.length < 1)
            return;
        this.loadingInProgress = true;
        this.youtubeService.searchNext()
            .then(function (data) {
            _this.loadingInProgress = false;
            if (data.length < 1 || data.status === 400) {
                setTimeout(function () {
                    _this.pageLoadingFinished = true;
                    setTimeout(function () {
                        _this.pageLoadingFinished = false;
                    }, 10000);
                });
                return;
            }
            data.forEach(function (val) {
                _this.videoList.push(val);
            });
        }).catch(function (error) {
            _this.loadingInProgress = false;
        });
    };
    MainComponent.prototype.nextVideo = function () {
        var current = this.youtubePlayer.getCurrentVideo();
        var inPlaylist = undefined;
        this.videoPlaylist.forEach(function (video, index) {
            if (video.id === current) {
                inPlaylist = index;
            }
        });
        if (inPlaylist !== undefined) {
            var topPos = document.getElementById(this.videoPlaylist[inPlaylist].id).offsetTop;
            var playlistEl = document.getElementById('playlist');
            if (this.shuffle) {
                var shuffled = this.videoPlaylist[this.getShuffled(inPlaylist)].id;
                this.youtubePlayer.playVideo(shuffled);
                playlistEl.scrollTop = document.getElementById(shuffled).offsetTop - 100;
            }
            else {
                if (this.videoPlaylist.length - 1 === inPlaylist) {
                    this.youtubePlayer.playVideo(this.videoPlaylist[0].id);
                    playlistEl.scrollTop = 0;
                }
                else {
                    this.youtubePlayer.playVideo(this.videoPlaylist[inPlaylist + 1].id);
                    playlistEl.scrollTop = topPos - 100;
                }
            }
        }
    };
    MainComponent.prototype.prevVideo = function () {
        var current = this.youtubePlayer.getCurrentVideo();
        var inPlaylist = undefined;
        this.videoPlaylist.forEach(function (video, index) {
            if (video.id === current) {
                inPlaylist = index;
            }
        });
        if (inPlaylist !== undefined) {
            var topPos = document.getElementById(this.videoPlaylist[inPlaylist].id).offsetTop;
            var playlistEl = document.getElementById('playlist');
            if (this.shuffle) {
                var shuffled = this.videoPlaylist[this.getShuffled(inPlaylist)].id;
                this.youtubePlayer.playVideo(shuffled);
                playlistEl.scrollTop = document.getElementById(shuffled).offsetTop - 100;
            }
            else {
                if (inPlaylist === 0) {
                    this.youtubePlayer.playVideo(this.videoPlaylist[this.videoPlaylist.length - 1].id);
                    playlistEl.scrollTop = playlistEl.offsetHeight;
                }
                else {
                    this.youtubePlayer.playVideo(this.videoPlaylist[inPlaylist - 1].id);
                    playlistEl.scrollTop = topPos - 230;
                }
            }
        }
    };
    MainComponent.prototype.getShuffled = function (index) {
        var i = Math.floor(Math.random() * this.videoPlaylist.length);
        return i !== index ? i : this.getShuffled(index);
    };
    MainComponent.prototype.closePlaylist = function () {
        this.playlistToggle = false;
        this.playlistNames = false;
    };
    MainComponent.prototype.clearPlaylist = function () {
        this.videoPlaylist = [];
        this.playlistService.clearPlaylist();
        this.notificationService.showNotification("Playlist cleared.");
    };
    MainComponent.prototype.exportPlaylist = function () {
        if (this.videoPlaylist.length < 1) {
            this.notificationService.showNotification("Nothing to export.");
            return;
        }
        var data = JSON.stringify(this.videoPlaylist);
        var a = document.createElement("a");
        var file = new Blob([data], { type: "text/json" });
        a.href = URL.createObjectURL(file);
        a.download = "playlist.json";
        a.click();
        this.notificationService.showNotification("Playlist exported.");
    };
    MainComponent.prototype.importPlaylist = function (playlist) {
        this.videoPlaylist = playlist;
        this.playlistService.importPlaylist(this.videoPlaylist);
    };
    return MainComponent;
}());
MainComponent = __decorate([
    Component({
        selector: 'main-list',
        templateUrl: 'main.component.html',
        styleUrls: ['main.component.css']
    }),
    __metadata("design:paramtypes", [YoutubeApiService,
        YoutubePlayerService,
        PlaylistStoreService,
        NotificationService])
], MainComponent);
export { MainComponent };
//# sourceMappingURL=../../../../src/app/main/main.component.js.map