import { Component, OnInit } from '@angular/core';
import {DiyItem} from "./model/diy-item";
import {DiyServiceService} from "./service/diy-service.service";

@Component({
  selector: 'app-dynamic-component-loading',
  templateUrl: './dynamic-component-loading.component.html',
  styleUrls: ['./dynamic-component-loading.component.scss']
})
export class DynamicComponentLoadingComponent implements OnInit {

  diys: DiyItem[] =[];

  constructor(
    private diyService: DiyServiceService
  ) { }

  ngOnInit(): void {
    this.diys = this.diyService.getDiys()
  }

}
