import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  @Input()
  userData: any = {
    "userId" : 0,
    "firstName" : "FirstName",
    "lastName" :  "LastName",
    "email" : "email@website.com",
    "address" : "XXXX StreetName"
  };
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/