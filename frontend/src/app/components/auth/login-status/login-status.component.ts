import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-status',
  templateUrl: './login-status.component.html',
  styleUrls: ['./login-status.component.css']
})
export class LoginStatusComponent implements OnInit {

  isLoggedIn:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  loggedIn(){
    this.isLoggedIn = true;
  }

  loggedOut(){
    this.isLoggedIn=false;
  }

  getStatus():boolean{
    return this.isLoggedIn
  }
}
