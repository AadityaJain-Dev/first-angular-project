import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { sharedData } from '../data';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  userFirstName: string = '';
  userLastName: string = '';
  userAddress: string = '';
  userAddress2: string = '';
  userIdFromLocalStorage: any = '';
  cartData: any = [];

  constructor(private _router: Router) {
    if (localStorage.getItem('wheel-kart-user') === null) {
      this._router.navigate(['login']);
    }
    this.userIdFromLocalStorage = localStorage.getItem('wheel-kart-user');
    this.userIdFromLocalStorage = JSON.parse(
      this.userIdFromLocalStorage
    ).userId;
    this.getCartData();
  }

  ngOnInit(): void {}

  getCartData = () => {
    axios
      .get(sharedData.API_CHECKOUT_URL + this.userIdFromLocalStorage)
      .then((response) => {
        console.log(response.data.userCarList);
        this.cartData = response.data.userCarList;
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
