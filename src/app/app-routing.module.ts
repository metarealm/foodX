import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { MainComponent } from './main/main.component';
import { FrontpageComponent }     from './frontpage/frontpage.component';
import { PageNotFoundComponent } from './not-found.component';
import { LoginCallbackComponent } from './frontpage/login-callback/login-callback.component'
 
const appRoutes: Routes = [
  { path: '',component: FrontpageComponent},
  { path: 'search',   component: MainComponent},
  { path: 'loginCallback',component: LoginCallbackComponent},
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