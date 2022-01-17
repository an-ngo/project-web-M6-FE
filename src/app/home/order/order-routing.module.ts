import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrderComponent} from "./order/order.component";
import {InfoOrderComponent} from "./info-order/info-order.component";
import {ShowbyuserComponent} from "./showbyuser/showbyuser.component";

const routes: Routes = [
  {
    path: ':id', component: OrderComponent
  },
  {
    path: 'chi-tiet/:id', component: InfoOrderComponent
  },
  {
    path: 'show-list/user', component: ShowbyuserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
