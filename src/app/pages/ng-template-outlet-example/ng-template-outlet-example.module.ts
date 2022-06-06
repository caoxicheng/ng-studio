import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgTemplateOutletExampleRoutingModule } from './ng-template-outlet-example-routing.module';
import { NgTemplateOutletExampleComponent } from './ng-template-outlet-example.component';


@NgModule({
  declarations: [
    NgTemplateOutletExampleComponent
  ],
  imports: [
    CommonModule,
    NgTemplateOutletExampleRoutingModule
  ]
})
export class NgTemplateOutletExampleModule { }
