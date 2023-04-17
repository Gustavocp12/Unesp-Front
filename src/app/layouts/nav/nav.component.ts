import { Component } from '@angular/core';
import { OnInit } from "@angular/core";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit{

  buttonData: any = [
    {label: 'Home', icon: 'home', routerLink: '/dashboard'},
    {label: 'Supervisores', icon: 'home', routerLink: '/supervisores'},
    {label: 'Sobre', icon: 'home', routerLink: '/sobre'},
  ];

  constructor() {}

  ngOnInit() {
  }

}

