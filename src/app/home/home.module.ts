import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {HomeComponent} from "./home/home.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {CarouselModule} from "ngx-owl-carousel-o";
import { SearchComponent } from './search/search.component';
import {MapComponent} from "./map/map.component";
import {LeafletModule} from "@asymmetrik/ngx-leaflet";


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    SearchComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CarouselModule,
    LeafletModule,

  ]
})
export class HomeModule { }
