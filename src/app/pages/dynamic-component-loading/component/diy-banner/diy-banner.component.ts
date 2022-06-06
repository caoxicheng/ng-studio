import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {DiyHostDirective} from "../../directive/div-host/diy-host.directive";
import {DiyComponent} from "../../model/diy.component";
import {DiyItem} from "../../model/diy-item";

@Component({
  selector: 'app-diy-banner',
  templateUrl: './diy-banner.component.html',
  styleUrls: ['./diy-banner.component.scss']
})
export class DiyBannerComponent implements OnInit, OnDestroy {

  @Input() diys: DiyItem[] = [];

  currentDiyIndex = -1;

  @ViewChild(DiyHostDirective, { static: true }) diyHost!: DiyHostDirective;

  interval: number | undefined;

  constructor() { }

  ngOnInit(): void {
    this.loadComponent();
    this.getDiys();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentDiyIndex = (this.currentDiyIndex + 1) % this.diys.length;
    const diyItem = this.diys[this.currentDiyIndex];

    const viewContainerRef = this.diyHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<DiyComponent>(diyItem.component);
    componentRef.instance.data = diyItem.data;
  }

  getDiys() {
    this.interval = window.setInterval(() => {
      this.loadComponent();
    }, 3000);
  }
}
