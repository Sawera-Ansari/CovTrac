import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CountriesPageComponent } from './components/countries-page/countries-page.component';
import {HttpClientModule} from "@angular/common/http";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DatewiseTableComponent } from './components/countries-page/datewise-table/datewise-table.component';
import { GoogleChartComponent } from './components/countries-page/google-chart/google-chart.component';
import {PieChartComponent} from "./components/home-page/pie-chart/pie-chart.component";
import {BarGraphComponent} from "./components/home-page/bar-graph/bar-graph.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    CountriesPageComponent,
    DashboardComponent,
    PieChartComponent,
    BarGraphComponent,
    DatewiseTableComponent,
    GoogleChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
