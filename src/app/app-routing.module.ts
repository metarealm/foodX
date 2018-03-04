import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { MainComponent } from './main/main.component';
import { FrontpageComponent }     from './frontpage/frontpage.component';
import { PageNotFoundComponent } from './shared/components/not-found.component';
<<<<<<< HEAD
import { LoginCallbackComponent } from './frontpage/login-callback/login-callback.component'
=======
import { LoginCallbackComponent } from './shared/components/login-callback.component'
>>>>>>> 61882077ce05737f71338392af777078a8b1095e
 
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