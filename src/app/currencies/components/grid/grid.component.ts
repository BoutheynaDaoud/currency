import { Component, OnInit, Output, EventEmitter, AfterContentInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Currency } from '../../models/currency';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { MatGridList } from '@angular/material';
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit, AfterContentInit {
  @ViewChild('grid') grid:  MatGridList;

  gridByBreakpoint = {
    xl: 8,
    lg: 6,
    md: 4,
    sm: 2,
    xs: 1
  }

  currencies: Currency[];
  constructor( private  _http: HttpClient, private observableMedia: ObservableMedia ) { }

  ngOnInit() {
    this.getAllCurrencies();
  }
  ngAfterContentInit() {
    this.observableMedia.asObservable().subscribe((change: MediaChange) => {
      this.grid.cols = this.gridByBreakpoint[change.mqAlias];
    });
  }
  getAllCurrencies() {
    this._http.get('./assets/json/currencies.json').subscribe(
       data => {
         this.currencies = data as Currency[];
         console.log(JSON.stringify(data));
 },
 error => console.log ('err.')
 );
  }
}
