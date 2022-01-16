import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import {OrderComponent} from "./order/order.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { InfoOrderComponent } from './info-order/info-order.component';


@NgModule({
  declarations: [
    OrderComponent,
    InfoOrderComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class OrderModule { }
