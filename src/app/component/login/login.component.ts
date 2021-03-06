import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { sharedData } from '../data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userEmail: string = '';
  userPassword: string = '';
  loginSuccessResponse: string = '';
  loginRejectResponse: string = '';

  constructor(private _router: Router) {}

  ngOnInit(): void {}

  userLogin() {
    axios
      .post(sharedData.API_LOGIN_URL, {
        password: this.userPassword,
        email: this.userEmail,
      })
      .then((response) => {
        localStorage.setItem('wheel-kart-user', JSON.stringify(response.data));
        this.loginSuccessResponse = 'Login Success';
        setTimeout(() => {
          this.loginSuccessResponse = '';
          this._router.navigate(['all-products']);
        }, 1500);
      })
      .catch((error) => {
        console.log(error);
        this.loginRejectResponse = 'Login Failure';
        setTimeout(() => {
          this.loginRejectResponse = '';
        }, 1500);
      });
  }
}
