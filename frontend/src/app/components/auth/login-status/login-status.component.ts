import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-status',
  templateUrl: './login-status.component.html',
  styleUrls: ['./login-status.component.css']
})
export class LoginStatusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getStatus(){

    let isLoggedIn:boolean = false

    if (localStorage.getItem('access_token')!=null)
      isLoggedIn =true


    return isLoggedIn;
  }
}
