import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private URL_API = environment.URL_API;

  constructor(private http: HttpClient) { }

  public getAll(page?:string|null): Observable<any> {

      return this.http.get(`${this.URL_API}/users/list/page`);

  }

}
