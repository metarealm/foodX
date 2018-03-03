import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-search-configuration',
    template: `
    <button type="button" class="mdl-button mdl-js-button mdl-js-ripple-effect">
        <i class="material-icons">help</i>
        <span>about</span>
    </button>
    <button type="button" (click)="setShowconfig()" class="mdl-button mdl-js-button mdl-js-ripple-effect">
        <i class="material-icons">settings</i>
        <span>set Preferene</span>
    </button>`
})

export class SearchConfigurationComponent implements OnInit {

    public showConfig = false;
    constructor() { }

    ngOnInit() {
    }
    public setShowconfig() {
        console.log(" changing the showConfig value");
        this.showConfig = true;
    }

}
