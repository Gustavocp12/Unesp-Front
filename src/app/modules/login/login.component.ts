import { Component } from '@angular/core';
import { Login } from "../../core/interfaces/Login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  login: Login = {
    user: '',
    password: ''
  };

}
