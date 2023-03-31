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
import { AgentesComponent } from './modules/agentes/agentes.component';
import {TableModule} from "primeng/table";
import {InputTextModule} from "primeng/inputtext";
import { AdicionarAgenteComponent } from './modal/adicionar-agente/adicionar-agente.component';
import {InputMaskModule} from "primeng/inputmask";
import {CalendarModule} from "primeng/calendar";
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent,
    AgentesComponent,
    AdicionarAgenteComponent
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
    TableModule,
    InputTextModule,
    InputMaskModule,
    CalendarModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
