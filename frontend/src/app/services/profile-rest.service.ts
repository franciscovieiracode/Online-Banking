import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

const endpoint = 'http://localhost:8080/api/v1/auth/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class ProfileRestService {

  constructor(private http: HttpClient) { }

  showProfile():Observable<any>{
    return this.http.get(endpoint+"getprofile").pipe(catchError(this.handleError))
  }

  handleError(error:HttpErrorResponse) {
    return throwError(() => {
        return error;
    });
  }
}
