import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { FilterOptions } from '../../models/currency';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Output() filter:  EventEmitter<any> = new EventEmitter();;
inputValue;
choosedValue;
options: FilterOptions = new FilterOptions;
  constructor() { }

  ngOnInit() {
  }

  getDataToFilterOn() {
this.options.text = this.inputValue;
this.options.valueChoosed = this.choosedValue;
this.filter.emit(this.options);
  }
}
