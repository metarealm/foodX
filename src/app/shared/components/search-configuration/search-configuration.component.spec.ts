import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchConfigurationComponent } from './search-configuration.component';

describe('SearchConfigurationComponent', () => {
  let component: SearchConfigurationComponent;
  let fixture: ComponentFixture<SearchConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
