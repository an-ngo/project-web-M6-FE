import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup} from "@angular/forms";
import {MapsService} from "../../../service/map/maps.service";
import {Router} from "@angular/router";

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
  constructor(
    private mapService: MapsService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  showMap() {
    this.mapService.getLocation();
    this.router.navigateByUrl("/map")

  }
}
