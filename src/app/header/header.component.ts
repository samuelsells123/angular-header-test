import { Component, Input } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input()
  userData: any = {
    "userId" : 0,
    "firstName" : "FirstName",
    "lastName" :  "LastName",
    "email" : "email@website.com",
    "address" : "XXXX StreetName"
  };
}