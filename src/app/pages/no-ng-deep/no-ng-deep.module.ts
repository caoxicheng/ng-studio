import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent, ButtonGroupComponent, NoNgDeepComponent } from './no-ng-deep.component';
import { NoNgDeepRoutingModule } from "./no-ng-deep-routing.module";


@NgModule({
  declarations: [NoNgDeepComponent, ButtonComponent, ButtonGroupComponent],
  imports: [
    CommonModule,
    NoNgDeepRoutingModule
  ]
})
export class NoNgDeepModule { }
