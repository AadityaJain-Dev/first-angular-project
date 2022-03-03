import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { sharedData } from '../data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userEmail: string = '';
  userPassword: string = '';

  constructor() {}

  ngOnInit(): void {}

  userLogin() {
    axios
      .post(sharedData.API_LOGIN_URL, {
        password: this.userPassword,
        email: this.userEmail,
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
