import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { IndexDataService } from '../shared/services/indexDataService';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent {

  stateCtrl: FormControl;
  filteredStates: any;
  items: string[];
  public searchForm = this.fb.group({
    query: ["", Validators.required]
  });
  searchtype = [
    'ingredients',
    'recipe titles'

  ];

  constructor(public fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private solrService: IndexDataService,
  ) {
    this.stateCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterStates(name));
  }
  public suggest(term: string) {
    this.solrService.suggest(term).then(items => {
      this.items = items;
    });
  }


  filterStates(val: string) {
    return val ? this.searchtype.filter(s => s.toLowerCase().indexOf(val.toLowerCase()) === 0)
      : this.searchtype;
  }

  gotoSearch() {
    let searchTerm = this.searchForm.value.query;
    this.router.navigate(['/search', { recipe: searchTerm }]);
  }
}
