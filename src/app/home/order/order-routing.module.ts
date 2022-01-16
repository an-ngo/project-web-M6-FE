import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrderComponent} from "./order/order.component";
import {InfoOrderComponent} from "./info-order/info-order.component";

const routes: Routes = [
  {
    path: ':id', component: OrderComponent
  },
  {
    path: 'chi-tiet/:id', component: InfoOrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
