import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PostofficeComponent } from './postoffice/postoffice.component';
import { BabysitterappComponent } from './babysitterapp/babysitterapp.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PostofficeComponent,
    BabysitterappComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
