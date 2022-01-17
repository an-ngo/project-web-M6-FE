import { Component, OnInit } from '@angular/core';
import {HomeService} from "../../service/home/home.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  providers: any;
  pages: any[] = [];
  formSearch: any;

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
  }
  public search(formSearch: any): void {
    this.formSearch = formSearch.value;
    console.log(formSearch.value);
    this.homeService.search(this.formSearch,0).subscribe((data) => {
      this.providers = data.content;
      console.log(data);
      for (let i = 0; i < data.totalPages; i++){
        this.pages[i] = i;
      }
    });
  }
  public nextPage(page: any): void {
    this.homeService.search(this.formSearch, page).subscribe((data) => {
      this.providers = data.content;
    });
  }
}
