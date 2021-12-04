import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SfLoginCallbackComponent } from './sf-login-callback/sf-login-callback.component';
import { SfLoginComponent } from './sf-login/sf-login.component';

const routes: Routes = [
  { path: 'sfcallback', component: SfLoginCallbackComponent },
  { path: 'sflogin', component: SfLoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
