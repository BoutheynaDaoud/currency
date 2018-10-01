import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { PageEvent, MatPaginator } from '@angular/material';
import { PaginatorOptions } from '../../models/currency';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Output() currenciesToShow: EventEmitter<any> = new EventEmitter();
  constructor() { }
  options: PaginatorOptions;
  pageIndex;
  pageSize;
  length;
  datasource;

  ngOnInit() {
  }
  getData(pageEvent) {
    console.log(pageEvent);
  this.options = new PaginatorOptions();
  this.options.index = this.paginator.pageIndex;
  this.options.size = this.paginator.pageSize;
  this.options.length = this.paginator.length;
  console.log(this.options);
  this.currenciesToShow.emit(this.options);
}
}
