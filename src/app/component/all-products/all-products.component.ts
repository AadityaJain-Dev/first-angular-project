import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { sharedData } from '../data';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent implements OnInit {
  allProductsList: any = [];

  constructor(private _router: Router) {
    if (localStorage.getItem('wheel-kart-user') === null) {
      this._router.navigate(['login']);
    }
  }

  ngOnInit(): void {}

  getAllProduct = () => {
    axios
      .get(sharedData.API_ALL_PRODUCTS_URL)
      .then((response) => {
        console.log(response.data);
        this.allProductsList = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  addToCart = () => {
    axios
      .post(sharedData.API_ADD_TO_CART_URL)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
