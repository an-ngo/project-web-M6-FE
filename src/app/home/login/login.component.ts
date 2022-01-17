import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../service/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  status: boolean = false;
  content: string = '';


  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  public login(loginForm: any): void {
    this.authService.login(loginForm.value).subscribe((data)=>{
      if (data.token != undefined){
        this.status = false;
        console.log(data);
        window.sessionStorage.setItem("token", data.token);
        window.sessionStorage.setItem("avatar", data.avatar);
        window.sessionStorage.setItem("name", data.name);
        for (let i = 0; i < data.roles.length; i++){
          window.sessionStorage.setItem("role"+[i], data.roles[i].authority);
        }
        window.sessionStorage.setItem("username", data.username);
        this.router.navigate(['']).then(()=>{
          window.location.reload();
        });
      }
      else {
        this.status = true;
        this.content = 'LOGIN FAILED! Please try again!';
      }
    });
  }
}
