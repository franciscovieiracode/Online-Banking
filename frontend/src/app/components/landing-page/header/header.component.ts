import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoginStatusComponent } from '../../auth/login-status/login-status.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public status: LoginStatusComponent, private router: Router, private authRestService:AuthService) { }

  ngOnInit(): void {
  }
  register(){
    this.router.navigate(['/register'])
  }

  logout(){    
    this.authRestService.logout();
  }
}
