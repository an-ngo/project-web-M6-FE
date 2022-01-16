import { Component, OnInit } from '@angular/core';
import {OrdersService} from "../../../service/orders.service";
import {ActivatedRoute} from "@angular/router";
import {data} from "jquery";

@Component({
  selector: 'app-info-order',
  templateUrl: './info-order.component.html',
  styleUrls: ['./info-order.component.scss']
})
export class InfoOrderComponent implements OnInit {
  order: any;
  username: any;

  constructor(private orderService: OrdersService, private activatedRouter: ActivatedRoute) {
    this.username = window.sessionStorage.getItem("username");
    console.log(this.username);
  }

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id');
      console.log(id);
      this.orderService.findById(id).subscribe((data) =>{
        this.order = data;
        console.log(this.order);
      });
    });
  }
  public confirm(check: any): void {
    if (check){
      this.orderService.confirmOrder(this.order.id).subscribe((data) => {
        this.order = data;
      })
    }
    else {
      this.orderService.deleteOrder(this.order.id).subscribe();
    }
  }

  public complete(){
    this.orderService.completeOrder(this.order.id).subscribe();
  }
}
