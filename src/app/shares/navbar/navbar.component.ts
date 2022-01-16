import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  checkLogin: boolean = false;
  avatar: any;
  name: any;
  constructor() { }

  ngOnInit(): void {
    if (window.sessionStorage.getItem("token")!=undefined){
      this.checkLogin = true;
      this.avatar = window.sessionStorage.getItem("avatar");
      this.name = window.sessionStorage.getItem("name");
    }
  }
}
