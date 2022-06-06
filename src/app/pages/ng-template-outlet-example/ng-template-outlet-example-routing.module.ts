import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NgTemplateOutletExampleComponent} from "./ng-template-outlet-example.component";

const routes: Routes = [
  {
    path: '',
    component: NgTemplateOutletExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgTemplateOutletExampleRoutingModule { }
