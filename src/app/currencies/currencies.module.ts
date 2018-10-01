import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayerComponent } from './components/displayer/displayer.component';
import { OneCurrencyComponent } from './components/one-currency/one-currency.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { GridComponent } from './components/grid/grid.component';
import { FilterComponent } from './components/filter/filter.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DisplayerComponent, OneCurrencyComponent, PaginatorComponent, GridComponent, FilterComponent]
})
export class CurrenciesModule { }
