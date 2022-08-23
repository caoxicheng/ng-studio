import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  template: '<button><ng-content></ng-content></button>',
  styles: [
    `
      button {
        background-color: var(--button-background, tomato);
      }
    `
  ]
})
export class ButtonComponent {}

@Component({
  selector: 'app-button-group',
  template: `
    <ng-content></ng-content>
  `
})
export  class ButtonGroupComponent {}

@Component({
  selector: 'app-no-ng-deep',
  template: `
    <app-button-group>
      <app-button>Submit</app-button>
      <app-button>Cancel</app-button>
    </app-button-group>
  `,
  styles: [
    `
      :host{
        --button-background: blue;
      }
    `
  ]

})
export class NoNgDeepComponent {}
