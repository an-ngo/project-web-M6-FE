import { Component, OnInit } from '@angular/core';
import {HomeService} from "../../service/home/home.service";
import {data} from "jquery";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  providers: any;

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
  }
  public search(formSearch: any): void {
    console.log(formSearch.value);
    this.homeService.search(formSearch.value).subscribe((data) => {
      this.providers = data.content;
      console.log(this.providers);
    });
  }
}
