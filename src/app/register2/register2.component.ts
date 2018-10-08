import { TempDataService } from './../temp-data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Sitter } from '../entities/sitter';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register2',
  templateUrl: './register2.component.html',
  styleUrls: ['./register2.component.scss']
})
export class Register2Component implements OnInit {
  registerForm;

  constructor(private fb: FormBuilder, private data: TempDataService,
    private router: Router) { }

  ngOnInit() {
    this.registerForm = this.fb.group ( {
      username: ['', Validators.required],
      password: ['', Validators.required],
      name: ['', Validators.required],

    })
  }

  onSubmit(form) {
    //call an api, to save new sitter
    let sitter = form.value as Sitter;

    this.data.addSitter(sitter);
    console.log(this.data.sitters);
    this.router.navigate(['/login']); 
  }

}
