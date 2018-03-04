import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { User } from '../Helper/user'

@Component({
    selector: 'app-user-information',
    template: `
    <div style="padding-right:25px;float:right">
    <span class="mdl-chip mdl-chip--contact">
        <img class="mdl-chip__contact" src={{user._pictureLink}}>
        <span class="mdl-chip__text">{{user._userName}}</span>
    </span>


    <div id="myDropdown" class="suggestion-dropdown suggestion-dropdown-content suggestion-show">
        <ul>
            <li *ngFor="let item of items" (click)="searchItemSelected(item)">
                <div class="">{{item}}</div>
            </li>
        </ul>
    </div>

    </div>
    `,
    styles: ['.mdl-chip__contact{ max-height: 50px }',
        '.mdl-chip:hover { cursor: pointer }']
})
export class UserInformationComponent implements OnInit {
    private user = new User("Guest", "Guest@sns.com");

    constructor(private authService: AuthService) {
        this.user = this.authService.loggedUser;
        this.authService.userChangeEvent.subscribe(user => this.user = user);
    }

    ngOnInit() {
    }

}
