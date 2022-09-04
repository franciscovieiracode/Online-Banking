import { Component, OnInit } from '@angular/core';
import { ProfileRestService } from 'src/app/services/profile-rest.service';

@Component({
  selector: 'show-profile',
  templateUrl: './show-profile.component.html',
  styleUrls: ['./show-profile.component.css']
})
export class ShowProfileComponent implements OnInit {

  user:any
  errorMessage:string

  constructor(private profileAuthRest: ProfileRestService) {
    this.errorMessage = ""
   }

  ngOnInit(): void {
    this.profileAuthRest.showProfile().subscribe({
      next:(data) =>{
        if(data){
          this.user = data
          console.log(data);
          
        }
      },
      error:(error)=>{
        this.errorMessage = "User not found, try again later"
      }
    }
  )}

  showProfile(){
    
  }
}
