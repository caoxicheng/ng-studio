import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[diyHost]'
})
export class DiyHostDirective {

  constructor(
    public viewContainerRef: ViewContainerRef
  ) { }

}
