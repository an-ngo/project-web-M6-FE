import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery'
import {OwlOptions} from "ngx-owl-carousel-o";


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
  constructor() { }

  ngOnInit(): void {

  }

}
