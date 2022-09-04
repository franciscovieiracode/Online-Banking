import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name:string;
  nif:string;
  email:string;

  //address
  district:string;
  city:string;
  street:string

  cellphone:string;
  password:string;
  role:string="client"

  errorMessage:string;

  getClient:any


  constructor(private authService: AuthService) {
    this.name="";
    this.email="";
    this.nif="";
    this.district="";
    this.city="";
    this.street="";
    this.cellphone="";
    this.password="";
    this.errorMessage="";
   }

  ngOnInit(): void {
  }

  register(){

  }

}
