import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup} from "@angular/forms";
import {RegisterProviderService} from "../../../service/registerProvider/register-provider.service";
import {Hobby} from "../../../model/hobby";
import {HobbyService} from "../../../service/hobby/hobby.service";

@Component({
  selector: 'app-registerprovider',
  templateUrl: './registerprovider.component.html',
  styleUrls: ['./registerprovider.component.scss']
})
export class RegisterproviderComponent implements OnInit {

  formGroup= new FormGroup({
    yearOfBirth: new FormControl(),
    city: new FormControl(),
    country: new FormControl(),
    serviceByProviderList: new FormArray([]),
    imageList: new FormArray([]),
    height: new FormControl(),
    weight: new FormControl(),
    hobbyList: new FormControl(),
    description: new FormControl(),
    condition: new FormControl(),
    link_facebook: new FormControl('')
  })
  serviceByProviderList:string[]=[];
  imageList:string[]=[];
  hobbyList:any[]=[];
  hobbyListGet: Hobby[]=[];


  constructor(
    private registerService: RegisterProviderService,
    private hobbyService: HobbyService,
  ) { }

  ngOnInit(): void {

    this.hobbyService.getAllHobby().subscribe((data)=>{
      this.hobbyListGet=data;
    })

  }



  addService(){
    this.formGroup.value.serviceByProviderList.push(new FormControl())
  }

  addImage(){
    this.formGroup.value.imageList.push(new FormControl())
  }

  public submit(): void {
    this.serviceByProviderList =[];
    this.imageList =[];
    this.hobbyList=[];
    for (let hobby of this.formGroup.value.hobbyList) {
      this.hobbyList.push({"id":hobby})
    }
    for (let ser of this.formGroup.value.serviceByProviderList) {
      this.serviceByProviderList.push(ser.value)
    }
    for (let img of this.formGroup.value.imageList) {
      this.imageList.push(img.value)
    }

    const data = {
      yearOfBirth : this.formGroup.value.yearOfBirth,
      city: this.formGroup.value.city,
      country: this.formGroup.value.country,
      serviceByProviderList: this.serviceByProviderList,
      imageList: this.imageList,
      height: this.formGroup.value.height,
      weight: this.formGroup.value.weight,
      hobbyList: this.hobbyList,
      description: this.formGroup.value.description,
      condition: this.formGroup.value.condition,
      link_facebook: this.formGroup.value.link_facebook
    }
    console.log(this.formGroup)
    console.log("data")
    console.log(JSON.stringify(data));
    this.registerService.registerNewProvider(data).subscribe((data2)=>{
      console.log(data2)
    })
  }
}
