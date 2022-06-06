import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DynamicComponentLoadingComponent} from "./dynamic-component-loading.component";

const routes: Routes = [
  {
    path: '',
    component: DynamicComponentLoadingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicComponentLoadingRoutingModule { }
