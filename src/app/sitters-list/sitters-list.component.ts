import { TempDataService } from './../temp-data.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Sitter } from '../entities/sitter';



@Component({
  selector: 'app-sitters-list',
  templateUrl: './sitters-list.component.html',
  styleUrls: ['./sitters-list.component.scss']
})
export class SittersListComponent implements OnInit {
  @Input() sitter: Sitter;
  @Output() sitterEditClicked: EventEmitter<any> = new EventEmitter<any>();
  constructor(private tempData: TempDataService) { }

  ngOnInit() {
  }

  onEditClick() {
    // Handle logic here, or pass event to parent component.
    this.sitterEditClicked.emit(this.sitter);
  }

}
