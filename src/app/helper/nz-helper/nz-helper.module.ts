import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NzButtonModule} from "ng-zorro-antd/button";

/**
 * 专门用来导入导出nz-zorro的辅助模块
 */
@NgModule({
  imports: [
    NzButtonModule
  ],
  exports: [
    NzButtonModule
  ]
})
export class NzHelperModule { }
