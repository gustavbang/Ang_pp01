import { TempDataService } from './../temp-data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SittersActions } from '../sitters-list/sitters.actions';
import { IAppState } from '../store';
import { NgRedux } from '@angular-redux/store';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  isBaby: boolean;

  constructor(private fb: FormBuilder, private data: TempDataService,
    private router: Router, private sittersActions: SittersActions,
    private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {

    this.ngRedux.select(state => state.sitters)
    .subscribe((sitterState) => {
      this.isBaby = sitterState.isBaby;
    });
  }

}
