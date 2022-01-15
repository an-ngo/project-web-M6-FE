import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {HomeComponent} from "./home/home.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class HomeModule { }
