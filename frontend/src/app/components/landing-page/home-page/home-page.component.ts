import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoginStatusComponent } from '../../auth/login-status/login-status.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  username: string;
  password: string;
  errorMessage:string | undefined = undefined;

  constructor(private authService: AuthService, private router:Router, private loginStatus: LoginStatusComponent) {
    this.username="";
    this.password="";
   }

  ngOnInit(): void {
    if(this.loginStatus.getStatus() == true)
      this.router.navigate(["/profile"])
  }

  login():void{
    this.authService.login(this.username, this.password).subscribe({
      next: (data) => {
        if(data && data.auth == "true"){
          console.log(data);
          localStorage.setItem("access_token",JSON.stringify(data.access_token))
          localStorage.setItem("refresh_token",JSON.stringify(data.refresh_token))
          this.router.navigate(["/profile"])
        }
      },
      error: (error) =>{
        if(error.status == 403){
          this.errorMessage = "Wrong credentials"
        }
        else {
          this.errorMessage ="Please try again later"
        }
      },
      complete: () => console.info('Auth completed') 
  })
}
}

