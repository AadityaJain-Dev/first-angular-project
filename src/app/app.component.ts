import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'wheel-kart';
  constructor(private _router: Router) {
    // if (localStorage.getItem('wheel-kart-user') === null) {
    //   this._router.navigate(['login']);
    // }
  }
}
