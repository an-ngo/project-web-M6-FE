import { Injectable } from '@angular/core';
import * as http from "http";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private URL_API = environment.URL_API;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + window.sessionStorage.getItem('token')
    })
  };

  constructor(private http: HttpClient) { }

  public findAllOrder(): Observable<any>{
    return this.http.get(`${this.URL_API}/orders/all`);
  }
  public findById(id: any): Observable<any>{
    return this.http.get(`${this.URL_API}/orders/${id}`);
  }
  public createOrder(orderForm: any): Observable<any>{
    return this.http.post(`${this.URL_API}/orders`, orderForm, this.httpOptions);
  }
}
