import { Component } from '@angular/core';
import { OnInit } from "@angular/core";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  modo = false;
  expandMenu = false;
  buttonData: any = [
    {label: 'Dashboard', icon: 'home', selected: true, id: 0, hidden: true},
    {label: 'Agente', icon: 'home', id: 1, hidden: true},
    {label: 'Área', icon: 'home', id: 2, hidden: true},
    {label: 'Setor', icon: 'home', id: 3, hidden: true},
    {label: 'Quarteirão', icon: 'home', id: 4, hidden: true},
    {label: 'Relatórios', icon: 'home', iconExpandMenu: 'chevron-right', iconExpandedMenu: 'chevron-down', id: 5, hidden: true},
    {label: 'Boletim', icon: 'home', id: 6, hidden: false, expandMenu: true},
    {label: 'Feedback', icon: 'home', id: 7, hidden: true},
  ];

  expanded(button: any){
    if (button === 5){
      this.expandMenu = !this.expandMenu;
      this.buttonData[6].hidden = !this.buttonData[6].hidden;
    }
  }
  modoNoturno() {
    this.modo = !this.modo;
  }

  constructor() {}

  ngOnInit() {
  }

}

