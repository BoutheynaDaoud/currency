import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/internal/operators';
import { Currency } from '../models/currency';
@Injectable({
  providedIn: 'root'
})



export class CurrenciesService {

  private url = 'assets/json/currencies.json';
 // headers: HttpHeaders = new HttpHeaders({
  //  'Accept': 'application/vnd.api+json'
  //});
  constructor(private _http: HttpClient) { }

  loadAllCurrency(): Observable <Object> {
  return this._http.get(this.url, {headers: {'Accept' : 'application/vnd.api+json', 'Access-Control-Allow-Origin' : '*'}}
 );
}
getDetailsCurrency(id: string): Observable<Currency> {
    const url = 'https://api.openfintech.io/v1/currencies';
    return this._http.get<Currency>(`${url}/${id}`, {
      headers: {'Accept' : 'application/vnd.api+json', 'Access-Control-Allow-Origin' : '*'}
   });
  }


getCurrencies(pageNumber: number, size: number): Observable<Currency[]> {
  const params: HttpParams = new HttpParams()
    .append('page[number]', pageNumber.toString())
    .append('page[size]', size.toString());

  return this._http.get<Currency[]>(this.url, {
    params,
  }).pipe(
    map(currencies => currencies),
  );
}

getFiltredCurrencies(text: string, selectedValue: string): Observable<Currency[]> {
  const params: HttpParams = new HttpParams()
  .append('text', text)
  .append('selectedValue', selectedValue);

return this._http.get<Currency[]>(this.url, {
  params,
});
}
  }

