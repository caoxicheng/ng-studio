import {Component, Input, OnInit} from '@angular/core';
import {DiyComponent} from "../../model/diy.component";

@Component({
  selector: 'app-hero-profile',
  templateUrl: './hero-profile.component.html',
  styleUrls: ['./hero-profile.component.scss']
})
export class HeroProfileComponent implements OnInit, DiyComponent {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
