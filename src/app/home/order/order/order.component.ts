import { Component, OnInit } from '@angular/core';
import {OrdersService} from "../../../service/orders.service";
import {ActivatedRoute} from "@angular/router";
import {HomeService} from "../../../service/home/home.service";
import {data} from "jquery";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  provider: any;
  serviceOption: any[] = [];
  order: any = null;

  constructor(private orderService: OrdersService, private activatedRouter: ActivatedRoute, private homeService: HomeService) { }

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id');
      this.homeService.findProvider(id).subscribe((data) => {
        this.provider = data;
        console.log(this.provider);
      });
    });
  }

  public checkBox(service: any): void {
      for (let i = 0; i < this.serviceOption.length; i++){
        if (this.serviceOption[i] == service){
          this.serviceOption.splice(i, 1);
          console.log(this.serviceOption);
          return;
        }
      }
      this.serviceOption.push(service);
      console.log(this.serviceOption);
  }
  public book(orderForm: any): void{
    orderForm.value.serviceByProviderList = this.serviceOption;
    orderForm.value.userProvider = this.provider;
    this.orderService.createOrder(orderForm.value).subscribe(
      (data) => {
      this.order = data;
      console.log(this.order);
    });
  }
}
