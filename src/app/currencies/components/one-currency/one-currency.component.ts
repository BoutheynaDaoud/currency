import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CurrenciesService } from '../../services/currencies.service';
import { Currency } from '../../models/currency';


@Component({
  selector: 'app-one-currency',
  templateUrl: './one-currency.component.html',
  styleUrls: ['./one-currency.component.css']
})
export class OneCurrencyComponent implements OnInit {
  oneCurrency: Currency;
  constructor(private route: ActivatedRoute, private router: Router, private currencyService: CurrenciesService) { }

  ngOnInit() {
    this.oneCurrency = this.route.snapshot.data.onecurrency;
  }
}
