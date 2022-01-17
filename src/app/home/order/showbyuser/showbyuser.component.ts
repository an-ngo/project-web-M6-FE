import { Component, OnInit } from '@angular/core';
import {OrdersService} from "../../../service/orders.service";

@Component({
  selector: 'app-showbyuser',
  templateUrl: './showbyuser.component.html',
  styleUrls: ['./showbyuser.component.scss']
})
export class ShowbyuserComponent implements OnInit {

  orders: any[] = [];
  role = window.sessionStorage.getItem("role");

  constructor(private orderService: OrdersService) { }

  ngOnInit(): void {
  }
  public showOrdersUserBook(): void {
    this.orderService.userBookProvider().subscribe((data) => {
      this.orders = data;
      console.log('mình book người ta',data);
    });
  }
  public showOrderOtherUserBook(): void {
    this.orderService.otherUserBook().subscribe((data) => {
      this.orders = data;
      console.log('người ta book mình', data);
    });
  }
  public chageListOrder(action: any): void{
    switch (action){
      case "user-book": this.showOrdersUserBook(); break;
      case "other-user-book": this.showOrderOtherUserBook(); break;
    }
  }
}
