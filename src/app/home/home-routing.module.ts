import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {CarouselModule} from "ngx-owl-carousel-o";

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module').then(modules => modules.AdminModule)
  },
  {
    path: 'user', loadChildren: () => import('./user/user.module').then(modules => modules.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),CarouselModule ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
