import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[sample]',
  providers: [
  ]
})
export class SampleDirective {
  @HostListener('click') onMouseEnter() {
    alert('click!!');
  }
  constructor(
  ) {}
}
