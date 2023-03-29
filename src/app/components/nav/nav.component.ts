import { Component } from '@angular/core';
import { OnInit } from "@angular/core";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  buttonData: any = [
    {label: 'Home', icon: 'home', selected: true},
    {label: 'Agentes', icon: 'home'},
    {label: 'Sobre', icon: 'home'},
  ];

  constructor() {}

  ngOnInit() {
  }

}

