import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent{

 stateCtrl: FormControl;
  filteredStates: any;

  searchtype = [
    'ingredients',
    'recipe titles'
    
  ];

  constructor() {
    this.stateCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges
        .startWith(null)
        .map(name => this.filterStates(name));
  }

  filterStates(val: string) {
    return val ? this.searchtype.filter(s => s.toLowerCase().indexOf(val.toLowerCase()) === 0)
               : this.searchtype;
  }
}
