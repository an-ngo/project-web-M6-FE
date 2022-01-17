import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../service/auth/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  checkLogin: boolean = false;
  avatar: any;
  name: any;
  role:any;
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    if (window.sessionStorage.getItem("token")!=undefined){
      this.checkLogin = true;
      this.avatar = window.sessionStorage.getItem("avatar");
      this.name = window.sessionStorage.getItem("name");
      this.role = window.sessionStorage.getItem("role")==="ROLE_ADMIN"
    }
  }

  logout() {

    this.authService.logout().subscribe((data)=>{
      console.log(data);
        this.checkLogin=false;
        window.sessionStorage.removeItem("avatar");
        window.sessionStorage.removeItem("name");
        window.sessionStorage.removeItem("role");
        window.sessionStorage.removeItem("token");
      this.router.navigateByUrl("/login");
    },
     error => {
      console.log(error);
      alert("cant logout, plz try again")
     }
    );
  }
}
