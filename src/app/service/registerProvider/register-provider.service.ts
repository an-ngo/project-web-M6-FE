import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RegisterProviderService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + window.sessionStorage.getItem('token')
    })
  };

  private URL_API = environment.URL_API;

  constructor(private http: HttpClient) { }

  public registerNewProvider(registerProviderForm: any): Observable<any>{
    return this.http.put(`${this.URL_API}/user-provider`,registerProviderForm,this.httpOptions)
  }
}
