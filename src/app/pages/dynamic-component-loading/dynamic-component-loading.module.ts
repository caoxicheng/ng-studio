import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicComponentLoadingRoutingModule } from './dynamic-component-loading-routing.module';
import { DynamicComponentLoadingComponent } from './dynamic-component-loading.component';
import { DiyHostDirective } from './directive/div-host/diy-host.directive';
import { DiyBannerComponent } from './component/diy-banner/diy-banner.component';
import { HeroJobDiyComponent } from './component/hero-job-diy/hero-job-diy.component';
import { HeroProfileComponent } from './component/hero-profile/hero-profile.component';
import {DiyServiceService} from "./service/diy-service.service";


@NgModule({
  declarations: [
    DynamicComponentLoadingComponent,
    DiyHostDirective,
    DiyBannerComponent,
    HeroJobDiyComponent,
    HeroProfileComponent
  ],
  imports: [
    CommonModule,
    DynamicComponentLoadingRoutingModule
  ],
  providers: [
    DiyServiceService
  ]
})
export class DynamicComponentLoadingModule { }
