import { Component, OnInit } from '@angular/core';

import {OwlOptions} from "ngx-owl-carousel-o";
import {HomeService} from "../../service/home/home.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  customOptions: OwlOptions = {
    loop:true,
    margin:10,
    nav:true,
    dots:true,
    autoplay:true,
    autoplayTimeout:2000,
    stagePadding:50,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:3
      },
      1000:{
        items:5
      }
    }
  }
  getTop6ProviderHot: any;
  getTop12CountTime: any;
  getTop12JoinDate: any;
  getTop6ViewPage: any;
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.findTop6ProviderHot();
    this.findTop12Count4MenAnd8WomenTime();
    this.findTop12JoinDate();
    this.findTop6ViewPage();
  }
  public findTop6ProviderHot(): void {
    this.homeService.getTop6ProviderHot().subscribe((data) => {
      this.getTop6ProviderHot = data;
      console.log(this.getTop6ProviderHot);
    });
  }
  public findTop12Count4MenAnd8WomenTime(): void {
    this.homeService.getTop12CountTime().subscribe((data) => {
      this.getTop12CountTime = data;
      console.log(this.getTop12CountTime);
    })
  }
  public findTop12JoinDate(): void {
    this.homeService.getTop12JoinDate().subscribe((data) => {
      this.getTop12JoinDate = data;
      console.log(this.getTop12JoinDate);
    });
  }
  public findTop6ViewPage(): void {
    this.homeService.getTop6ViewPage().subscribe((data) => {
      this.getTop6ViewPage = data;
      console.log(this.getTop6ViewPage);
    })
  }
}
