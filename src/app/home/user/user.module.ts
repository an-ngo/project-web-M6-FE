import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {UserpageComponent} from "./userpage/userpage.component";
import {RegisterproviderComponent} from "./registerprovider/registerprovider.component";
import {EditComponent} from "./edit/edit.component";
import { ProviderComponent } from './provider/provider.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    UserpageComponent,
    RegisterproviderComponent,
    EditComponent,
    ProviderComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
