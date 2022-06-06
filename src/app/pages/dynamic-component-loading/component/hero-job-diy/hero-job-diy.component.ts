import {Component, Input, OnInit} from '@angular/core';
import {DiyComponent} from "../../model/diy.component";

@Component({
  selector: 'app-hero-job-diy',
  templateUrl: './hero-job-diy.component.html',
  styleUrls: ['./hero-job-diy.component.scss']
})
export class HeroJobDiyComponent implements OnInit, DiyComponent {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
