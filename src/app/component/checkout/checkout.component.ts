import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  constructor(private _router: Router) {
    if (localStorage.getItem('wheel-kart-user') === null) {
      this._router.navigate(['login']);
    }
  }

  ngOnInit(): void {}
}
