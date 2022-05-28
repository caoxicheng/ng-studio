import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelloPageRoutingModule } from './hello-page-routing.module';
import { HelloPageComponent } from './hello-page.component';


@NgModule({
  declarations: [
    HelloPageComponent
  ],
  imports: [
    CommonModule,
    HelloPageRoutingModule
  ]
})
export class HelloPageModule { }
