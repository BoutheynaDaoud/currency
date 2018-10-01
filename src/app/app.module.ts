import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DisplayerComponent } from './currencies/components/displayer/displayer.component';
import { OneCurrencyComponent } from './currencies/components/one-currency/one-currency.component';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule, MatCardModule, MatGridListModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatListModule, MatButtonModule } from '@angular/material';
import { CurrenciesService } from './currencies/services/currencies.service';
import {MatPaginatorModule} from '@angular/material/paginator';
import { PaginatorComponent } from './currencies/components/paginator/paginator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridComponent } from './currencies/components/grid/grid.component';
import { FilterComponent } from './currencies/components/filter/filter.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DisplayerComponent,
    OneCurrencyComponent ,
    PaginatorComponent,
    GridComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatFormFieldModule,
    HttpClientModule,
    AppRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatToolbarModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatSelectModule,
    MatInputModule,
    MatListModule,
    MatButtonModule

  ],
  providers: [CurrenciesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
