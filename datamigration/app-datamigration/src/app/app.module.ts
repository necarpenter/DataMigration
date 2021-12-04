import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { SfLoginComponent } from './sf-login/sf-login.component';
import { SfLoginCallbackComponent } from './sf-login-callback/sf-login-callback.component';

@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    HomeComponent,
    SfLoginComponent,
    SfLoginCallbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
