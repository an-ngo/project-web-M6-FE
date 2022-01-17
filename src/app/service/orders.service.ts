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
  public confirmOrder(id: any): Observable<any>{
    return this.http.put(`${this.URL_API}/orders/received/${id}`, this.httpOptions);
  }
  public completeOrder(id: any): Observable<any>{
    return this.http.put(`${this.URL_API}/orders/complete/${id}`, this.httpOptions);
  }
  public deleteOrder(id: any): Observable<any>{
    return this.http.delete(`${this.URL_API}/orders/${id}`);
  }
  public userBookProvider(): Observable<any>{
    return this.http.get(`${this.URL_API}/orders/user-book`, this.httpOptions);
  }
  public otherUserBook(): Observable<any>{
    return this.http.get(`${this.URL_API}/orders/book-provider`, this.httpOptions);
  }
}
