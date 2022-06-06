import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-template-outlet-example',
  templateUrl: './ng-template-outlet-example.component.html',
  styleUrls: ['./ng-template-outlet-example.component.scss']
})
export class NgTemplateOutletExampleComponent implements OnInit {

  myContext = {
    $implicit: 'world',
    localSk: 'Svet',
    name: '曹熙程'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
