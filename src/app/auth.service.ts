import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
    private route: ActivatedRoute) { }

  isAuthenticated(){
    if(localStorage.getItem('user') != null)
      return true;

    return false;
  }

  login(credentials){
    if(credentials.email == "sa@gmail.com" && credentials.password == "12")
    {
      localStorage.setItem('user', credentials.email);
      return true;
    }
    return false;
  }

  isLoggedIn(){
    if(localStorage.getItem('user') != null)
      return true;

    return false;
  }

  logout(){
    localStorage.removeItem('user');
    this.router.navigateByUrl('/home');
  }
}
