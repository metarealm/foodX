import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { User } from '../../Helper/user'

@Component({
    selector: 'app-user-information',
    templateUrl: './user-information.component.html',
    styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent implements OnInit {
    private user = new User("Guest", "Guest@sns.com");

    constructor(private authService: AuthService) { 
        this.user=this.authService.loggedUser;
        this.authService.userChangeEvent.subscribe(user => this.user = user);
    }

    public selectUser() {
        this.authService.login();
    }
    
    ngOnInit() {
    }

}
