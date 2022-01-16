import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment.prod";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private URL_API = environment.URL_API;

  constructor(private http: HttpClient) { }

  public getTop6ProviderHot(): Observable<any>{
    return this.http.get(`${this.URL_API}/users/top-6-provider-hot`);
  }
  public getTop12CountTime(): Observable<any>{
    return this.http.get(`${this.URL_API}/users/find-top12-counttime`);
  }
  public getTop12JoinDate(): Observable<any>{
    return this.http.get(`${this.URL_API}/users/find-top12-joindate`);
  }
  public getTop6ViewPage(): Observable<any>{
    return this.http.get(`${this.URL_API}/users/find-top6-viewpage`);
  }
  public search(formSearch: any): Observable<any>{
    return this.http.post(`${this.URL_API}/users/search`, formSearch);
  }
  public findProvider(id: any): Observable<any>{
    return this.http.get(`${this.URL_API}/users/${id}`);
  }
}
