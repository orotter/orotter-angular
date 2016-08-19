import { Component } from '@angular/core';
import { SampleService } from '@app/shared/services';
import { Sample } from '@app/shared/models';

@Component({
  selector: 'sample-index',
  template: `
<div class="body">
  <ul>
    <li *ngFor="let sample of samples">
      <a [routerLink]="['/s', sample?.id]">
        {{ sample | sample }}
      </a>
    </li>
  </ul>
</div>
`,
  providers: [
  ],
  styles: [require('./sample-index.component.scss')]
})
export class SampleIndexComponent {
  constructor(
    private sampleService: SampleService
  ) {
  }
  samples: Sample[];
  ngOnInit() {
    this.sampleService
      .getSampleList()
      .then(items => this.samples = items);
  }
}
