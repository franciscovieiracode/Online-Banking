import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, retry, throwError } from 'rxjs';

const endpoint = 'http://localhost:8080/api/v1/auth/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router:Router) { }

  login(username:string, password:string):Observable<any>{

    return this.http.post<any>(endpoint+"login", new LoginModel(username, password)).pipe(catchError(this.handleError));
  }
  
  logout(){
    localStorage.removeItem("access_token")
    localStorage.removeItem("refresh_token")
    this.router.navigate(["/"])
  }

  handleError(error:HttpErrorResponse) {
    return throwError(() => {
        return error;
    });
  }
}



export class LoginModel{

  constructor(public username:string, public password:string){}

}
