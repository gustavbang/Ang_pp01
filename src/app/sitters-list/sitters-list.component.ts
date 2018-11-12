import { TempDataService } from './../temp-data.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Sitter } from '../entities/sitter';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store';

@Component({
  selector: 'app-sitters-list',
  templateUrl: './sitters-list.component.html',
  styleUrls: ['./sitters-list.component.scss']
})
export class SittersListComponent implements OnInit {
  @Input() sitter: Sitter;
  @Output() sitterEditClicked: EventEmitter<any> = new EventEmitter<any>();

  sitters: Sitter[];

  constructor(private tempData: TempDataService, private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
    this.ngRedux.select(x => x.sitters).subscribe((data) => {
      this.sitters = data.sitters;
    });
  }

  onEditClick() {
    // Handle logic here, or pass event to parent component.
    this.sitterEditClicked.emit(this.sitter);
  }
}
