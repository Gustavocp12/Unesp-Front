import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './layouts/nav/nav.component';
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
import { SupervisoresComponent } from './modules/supervisores/supervisores.component';
import {TableModule} from "primeng/table";
import {InputTextModule} from "primeng/inputtext";
import { AdicionarSupervisorComponent } from './modules/supervisores/modal/adicionar-supervisor/adicionar-supervisor.component';
import {InputMaskModule} from "primeng/inputmask";
import {CalendarModule} from "primeng/calendar";
import { ToastModule } from 'primeng/toast';
import {ConfirmDialogModule} from "primeng/confirmdialog";
import { LoginComponent } from './modules/login/login.component';
import {PasswordModule} from "primeng/password";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent,
    SupervisoresComponent,
    AdicionarSupervisorComponent,
    LoginComponent
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
    ToastModule,
    ConfirmDialogModule,
    PasswordModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
