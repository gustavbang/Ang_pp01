import { FindASitterComponent } from './portal/find-a-sitter/find-a-sitter.component';
import { SubredditComponent } from './home/subreddit/subreddit.component';
import { FrontpageComponent } from './home/frontpage/frontpage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';

import { ContactComponent } from './contact/contact.component';
import { Register2Component } from './register2/register2.component';
import { PortalComponent } from './portal/portal.component';

const routes: Routes = [  { 
  path: '', redirectTo: 'home', pathMatch: 'full' },

  
{path: 'home', component: HomeComponent, children: 
    [
      {path: 'frontpage', component: FrontpageComponent},
      {path: 'subreddit', component: SubredditComponent}
    ]
  },

  {path: 'portal', component: PortalComponent, children: 
  [
    {path: 'find-a-sitter', component: FindASitterComponent}
  ]
},

  {path: 'contact', component: ContactComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'register2', component: Register2Component},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
