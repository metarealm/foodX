import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { IndexDataService } from '../shared/services/indexDataService';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  host: { '(document:click)': 'onClick($event)', },
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent {

  private stateCtrl: FormControl;
  private filteredStates: any;
  private items: string[];
  private showSuggestDropDown = false;
  public searchForm = this.fb.group({ query: ["", Validators.required] });
  private searchtype = ['ingredients', 'recipe titles'];

  constructor(public fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private solrService: IndexDataService
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

  public onSearchInputClick() {
    this.showSuggestDropDown = true;
  }

  public searchItemSelected(item:any) {
    this.searchForm.value.query = item;
    this.showSuggestDropDown = false;
    this. gotoSearch();

  }

  filterStates(val: string) {
    return val ? this.searchtype.filter(s => s.toLowerCase().indexOf(val.toLowerCase()) === 0)
      : this.searchtype;
  }

  gotoSearch() {
    let searchTerm = this.searchForm.value.query;
    this.router.navigate(['/search', { recipe: searchTerm }]);
  }

  onClick(event) {
    if (this.showSuggestDropDown == false) return 0;
    let element = document.getElementById('search');
    console.log(' event target is =' + event.target);
    if (!element.contains(event.target)) {
      this.showSuggestDropDown = false;
      console.log(" clicked outside");
    }
  }
}
