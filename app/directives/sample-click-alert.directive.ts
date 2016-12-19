import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[sample-click-alert]',
  providers: [
  ]
})
export class SampleClickAlertDirective {
  @HostListener('click') onMouseEnter() {
    alert('click!!');
  }
  constructor(
  ) {}
}
