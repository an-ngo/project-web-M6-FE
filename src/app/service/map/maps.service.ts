import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + window.localStorage.getItem('jwtToken')
    })
  };


  private URL_API = environment.URL_API;

  constructor(private http: HttpClient) { }

  public getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      alert("Geolocation không được hỗ trợ bởi trình duyệt này.");
    }
  }

  private showPosition(position:any) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    window.sessionStorage.setItem("lat",latitude);
    window.sessionStorage.setItem("lon",longitude);
  }

  public getAllPositionAround(): Observable<any>{
    return  this.http.get(`${this.URL_API}/map`,this.httpOptions);
  }
}
