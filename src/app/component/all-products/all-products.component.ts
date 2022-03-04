import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent implements OnInit {
  constructor(private _router: Router) {
    if (localStorage.getItem('wheel-kart-user') === null) {
      this._router.navigate(['login']);
    }
  }

  ngOnInit(): void {}
}
