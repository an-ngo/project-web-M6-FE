import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../../service/user/users.service";
import {ActivatedRoute} from "@angular/router";
import {map, switchMap} from "rxjs";

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.scss']
})
export class AdminpageComponent implements OnInit {
  totalpage: number[]=[];
  listUser5: any[]=[];

  constructor(
    private usersService: UsersService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    // const paramMap = this.activeRoute.snapshot.paramMap;
    // const page = paramMap.get('page')
    // if(page){
    //
    // }
    this.usersService.getAll().subscribe((data)=>{
      for (let i = 1; i <= data.totalPages ; i++) {
        this.totalpage.push(i);
      }
      console.log(this.totalpage);
      this.listUser5=data.content;
    })
  }



}
