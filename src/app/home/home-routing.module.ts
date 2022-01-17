import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {CarouselModule} from "ngx-owl-carousel-o";
import {SearchComponent} from "./search/search.component";
import {ProviderComponent} from "./user/provider/provider.component";
import {MapComponent} from "./map/map.component";

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
  },
  {
    path: 'search', component: SearchComponent
  },
  {
    path: 'provider/:id', component: ProviderComponent
  },
  {
    path: 'map' , component: MapComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),CarouselModule ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
