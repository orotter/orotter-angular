import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[sampleClickAlert]',
})
export class SampleClickAlertDirective {
  @HostListener('click') onMouseEnter() {
    alert('click!!');
  }
}
