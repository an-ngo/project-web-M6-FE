import { Injectable } from '@angular/core';
import {Hobby} from "../../model/hobby";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HobbyService {

  private URL_API = environment.URL_API;



  constructor(private http: HttpClient) {

  }

  public getAllHobby(): Observable<any>{
    return this.http.get(`${this.URL_API}/hobby`);
  }
}
