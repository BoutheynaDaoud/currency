import { Component, OnInit, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Currency, PaginatorOptions, FilterOptions } from '../../models/currency';
import { CurrenciesService } from '../../services/currencies.service';
@Component({
  selector: 'app-displayer',
  templateUrl: './displayer.component.html',
  styleUrls: ['./displayer.component.css']
})

export class DisplayerComponent implements OnInit {
  currencies = new Array<Currency>();
  isLoading = true;
  @Output() listOfCurrencies:  EventEmitter<any> = new EventEmitter();
  constructor(private currenciesService: CurrenciesService, private  _http: HttpClient ) { }

  ngOnInit() {
  }

  newCurrencies(options: PaginatorOptions) {
  console.log('options' + options);
  this.currenciesService.getCurrencies(options.index, options.size).subscribe(data => {
    this.currencies = new Array<Currency>() ;
    this.currencies = data as Currency[];
    console.log(JSON.stringify(data));
  });
  }

  loadFiltredCurrencies(optionsFiler: FilterOptions) {
    this.currenciesService.getFiltredCurrencies( optionsFiler.text, optionsFiler.valueChoosed).subscribe(data => {
      this.currencies = new Array<Currency>() ;
      this.currencies = data as Currency[];
      console.log(JSON.stringify(data));
    });
  }
}
