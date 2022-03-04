import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private _router: Router) {
    if (localStorage.getItem('wheel-kart-user') === null) {
      this._router.navigate(['login']);
    }
  }

  ngOnInit(): void {}
}
