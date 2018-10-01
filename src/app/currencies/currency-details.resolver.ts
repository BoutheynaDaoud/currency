import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Currency } from './models/currency';
import { CurrenciesService } from './services/currencies.service';

@Injectable({
  providedIn: 'root'
})
export class CurrencyDetailsResolver  implements Resolve<Observable<Currency>> {

  constructor(private currenciesService: CurrenciesService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Currency> {
    return this.currenciesService.getDetailsCurrency(route.params.id);
  }
}
