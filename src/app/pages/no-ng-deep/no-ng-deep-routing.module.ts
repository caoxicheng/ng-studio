import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoNgDeepComponent } from "./no-ng-deep.component";

const routes: Routes = [
  {
    path: '',
    component: NoNgDeepComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoNgDeepRoutingModule { }
