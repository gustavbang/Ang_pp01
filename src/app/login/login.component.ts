import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

 
  constructor(private router: Router) { }

  ngOnInit() {
  }


  onSubmit(loginForm) {
    if(loginForm.valid) {
      this.router.navigate(['']);
    } else {
      console.log("Get ooutta heere mon frezo");
    }
  }
}
