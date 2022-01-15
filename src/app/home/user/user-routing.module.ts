import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserpageComponent} from "./userpage/userpage.component";
import {RegisterproviderComponent} from "./registerprovider/registerprovider.component";
import {EditComponent} from "./edit/edit.component";

const routes: Routes = [
  {
    path: '', component: UserpageComponent
  },
  {
    path: 'register', component: RegisterproviderComponent
  },
  {
    path: 'edit', component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
