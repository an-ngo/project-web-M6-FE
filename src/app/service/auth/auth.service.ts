import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + window.localStorage.getItem('jwtToken')
    })
  };


  private URL_API = environment.URL_API;

  constructor(private http: HttpClient) { }

  public login(loginForm: any): Observable<any>{
    return this.http.post(`${this.URL_API}/signin`, loginForm);
  }
  public register(registerForm: any): Observable<any>{
    return this.http.post(`${this.URL_API}/signup`, registerForm);
  }
  public changeAvatar(avatarChange: any): Observable<any>{
    return this.http.put(`${this.URL_API}/change-avatar`, avatarChange);
  }
  public logout(){
    return this.http.get(`${this.URL_API}/logout/logout`,this.httpOptions);
  }

}

