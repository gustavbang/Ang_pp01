import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Register2Component } from './register2/register2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatButton} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FrontpageComponent } from './home/frontpage/frontpage.component';
import { SubredditComponent } from './home/subreddit/subreddit.component';
import { PortalComponent } from './portal/portal.component';
import { SittersListComponent } from './sitters-list/sitters-list.component';
import {MatCardModule} from '@angular/material/card';
import { AzatComponent } from './home/frontpage/azat/azat.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    Register2Component,
    PageNotFoundComponent,
    HomeComponent,
    ContactComponent,
    FrontpageComponent,
    SubredditComponent,
    PortalComponent,
    SittersListComponent,
    AzatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
