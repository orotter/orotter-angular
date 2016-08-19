import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SampleService } from '@app/shared/services';
import { Sample } from '@app/shared/models';

@Component({
  selector: 'sample-show',
  template: `
<div class="body">
  <a [routerLink]="['/s']">Back</a>
  <div>
    ID: {{ sample?.id }}
  </div>
  <div sample-click-alert>
    Name: {{ sample?.name }}
  </div>
</div>
`,
  providers: [
  ],
  directives: [
  ],
  styles: [require('./sample-show.component.scss')]
})
export class SampleShowComponent {
  constructor(
    private route: ActivatedRoute,
    private sampleService: SampleService
  ) {
  }
  sample: Sample;
  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.sampleService
        .getSampleById(id)
        .then(item => this.sample = item);
    });
  }
}
