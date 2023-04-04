import { Component } from '@angular/core';
import { OnInit } from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  buttonData: any = [
    {label: 'Home', icon: 'home', selected: false, routerLink: '/dashboard'},
    {label: 'Supervisores', icon: 'home', selected: false, routerLink: '/supervisores'},
    {label: 'Sobre', icon: 'home', selected: false, routerLink: '/sobre'},
  ];
  path: any;

  constructor(private route: ActivatedRoute) {
    this.route.url.subscribe(urlSegments => {
      this.path = urlSegments.map(segment => segment.path).join('/');
    });
  }
  pageSelected() {
    if (this.path === 'dashboard') {
      this.buttonData[0].selected = true;
      this.buttonData[1].selected = false;
      this.buttonData[2].selected = false;
    }else if (this.path === 'supervisores') {
      this.buttonData[0].selected = false;
      this.buttonData[1].selected = true;
      this.buttonData[2].selected = false;
    }else if (this.path === 'sobre') {
      this.buttonData[0].selected = false;
      this.buttonData[1].selected = false;
      this.buttonData[2].selected = true;
    }
  }

  ngOnInit() {
    this.pageSelected();
  }

}

