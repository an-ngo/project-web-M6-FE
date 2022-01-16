import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.scss']
})
export class UserpageComponent implements OnInit {

  formControl= new FormGroup({
    yearOfBirth: new FormControl(),
    city: new FormControl(),
    country: new FormControl(),
    serviceByProviderList: new FormArray([]),
    imageList: new FormArray([]),
    height: new FormControl(),
    weight: new FormControl(),
    hobbyList: new FormArray([]),
    description: new FormControl(),
    condition: new FormControl(),
    link_facebook: new FormControl('')
  })
  constructor() { }

  ngOnInit(): void {
  }

}
