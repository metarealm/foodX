import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'app-go-home-component',
    template: `<div style="display:inline-block">
    <i style="width:20%" class="material-icons">home</i>
    <div class="mdl-layout-title" (click)="goHome()" style="font-family:cursive">Shake & Stir</div>
    </div>`
})
export class GoHomeComponent implements OnInit {

    constructor(private route: ActivatedRoute,private router: Router) { }

    ngOnInit() {
    }

    goHome(){
        console.log("Going to the front page route");
        this.router.navigate(['/']);
    }
}
