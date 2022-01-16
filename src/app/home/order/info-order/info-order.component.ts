import { Component, OnInit } from '@angular/core';
import {OrdersService} from "../../../service/orders.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-info-order',
  templateUrl: './info-order.component.html',
  styleUrls: ['./info-order.component.scss']
})
export class InfoOrderComponent implements OnInit {
  order: any;

  constructor(private orderService: OrdersService, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id');
      console.log(id);
      this.orderService.findById(id).subscribe((data) =>{
        this.order = data;
      });
    });
  }

}
