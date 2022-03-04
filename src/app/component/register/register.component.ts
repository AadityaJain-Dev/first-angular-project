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
  registerSuccessResponse: string = '';
  registerRejectResponse: string = '';

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
      .then(() => {
        this.registerSuccessResponse = 'Registration Success';
        setTimeout(() => {
          this.registerSuccessResponse = '';
        }, 1500);
      })
      .catch((error) => {
        console.log(error);
        this.registerRejectResponse = 'Registration Failure';
        setTimeout(() => {
          this.registerRejectResponse = '';
        }, 1500);
      });
  }
}
