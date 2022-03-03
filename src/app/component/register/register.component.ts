import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { sharedData } from '../data';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  mobileNumber: number | null = null;
  userEmail: string = '';
  userPassword: string = '';
  userName: string = '';

  constructor() {}

  ngOnInit(): void {}

  userRegister() {
    axios
      .post(sharedData.API_REGISTER_URL, {
        userName: this.userName,
        password: this.userPassword,
        email: this.userEmail,
        phoneNumber: this.mobileNumber,
        isAdmin: false,
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
