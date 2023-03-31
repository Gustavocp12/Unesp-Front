import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { AgentesComponent } from './modules/agentes/agentes.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'agentes', component: AgentesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
