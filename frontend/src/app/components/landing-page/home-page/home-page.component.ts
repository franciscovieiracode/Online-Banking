import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  clientN: string;
  password: string;
  errorMessage:any;

  constructor() {
    this.clientN="";
    this.password="";
   }

  ngOnInit(): void {
  }

  login(){
    alert(123)    
  }

}
