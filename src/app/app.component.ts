import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userData: object = {
    "userId" : 3,
    "firstName" : "Samuel",
    "lastName" :  "Sells",
    "email" : "SS@gmail.com",
    "address" : "500 Merlin Dr."
  };
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/