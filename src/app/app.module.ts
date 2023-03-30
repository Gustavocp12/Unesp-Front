import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import {ButtonModule} from "primeng/button";
import {MenubarModule} from "primeng/menubar";
import {FormsModule} from "@angular/forms";
import {TieredMenuModule} from "primeng/tieredmenu";
import {MenuModule} from "primeng/menu";
import {CardModule} from "primeng/card";
import {DropdownModule} from "primeng/dropdown";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ChartModule} from "primeng/chart";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    MenubarModule,
    FormsModule,
    TieredMenuModule,
    MenuModule,
    CardModule,
    DropdownModule,
    ChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
