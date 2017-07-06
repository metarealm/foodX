import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
 
// import { MainviewareaComponent }    from './main/mainviewarea/mainviewarea.component';
import { MainComponent } from './main/main.component';
import { FrontpageComponent }     from './frontpage/frontpage.component';
 import { PageNotFoundComponent } from './not-found.component';
 
const appRoutes: Routes = [
  { path: '',   component: FrontpageComponent},
  { path: 'search',   component: MainComponent},
  { path: '**', component: PageNotFoundComponent }
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}