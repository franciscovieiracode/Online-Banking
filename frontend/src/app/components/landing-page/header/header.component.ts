import { Component, OnInit } from '@angular/core';
import { LoginStatusComponent } from '../../auth/login-status/login-status.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public status: LoginStatusComponent) { }

  ngOnInit(): void {
  }
  register(){
    this.status.loggedIn();
  }

  logout(){    
    this.status.loggedOut()  
  }
}
