import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-search-configuration',
    templateUrl: './search-configuration.component.html',
    styleUrls: ['./search-configuration.component.css']
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
