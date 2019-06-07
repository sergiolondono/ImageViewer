import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  endpoint = 'http://localhost:56121/api/Login/authenticate';

  constructor(private http: HttpClient) { }
  
  AuthenticatedUser(user) {
    let credentials = {
      userName : user.name,
      password : user.password     
    };
    return this.http.post(this.endpoint, credentials)
    .subscribe(data => { console.log("POST Request is successful", data) },
    error => { console.log("Error", error) }
    );
  }
}
