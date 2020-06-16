import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient, private router: Router) { }

  _serverUrl:string = 'http://localhost:5000/api';
  _loginUrl = 'http://localhost:5000/api/login';
  _secretUrl = 'http://localhost:5000/api/secret';
  _topUrl = 'http://localhost:5000/api/score';

  validate(observable:Observable<any>){
    observable.subscribe(
      res => {},
      err =>{
        if(err instanceof HttpErrorResponse){
          if(err.status == 401 || err.status == 403){
            this.router.navigate(['/login']);
          }
        }
      }
    );
  }

  getWelcome(){
    return this.http.get<any>(this._serverUrl);
  }

  getSecret(){
    return this.http.get<any>(this._secretUrl);
  }

  getTop(){
    return this.http.get<any>(this._topUrl);
  }

  login(user){
    console.log(user);
    return this.http.post<any>(this._loginUrl, user)
  }

  logout(){
    console.log("logout");
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  loggedIn():boolean{
    return !! localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }
  
}
