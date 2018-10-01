import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayerComponent } from './currencies/components/displayer/displayer.component';
import { OneCurrencyComponent } from './currencies/components/one-currency/one-currency.component';
import { CurrencyDetailsResolver } from './currencies/currency-details.resolver';

const routes: Routes = [
  { path: '', component: DisplayerComponent },
  { path: 'currency/:id', component: OneCurrencyComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ],
  providers: [ CurrencyDetailsResolver ]
})
export class AppRoutingModule {}
