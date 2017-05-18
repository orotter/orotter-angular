import { Component } from '@angular/core';

@Component({
  selector: 'top-page',
  template: `
<div class="body">
  Top page
</div>
  `,
  styleUrls: ['./top-page.component.scss'],
})
export class TopPageComponent {
  constructor() {}

  // ngOnInit() {
  //     this.sampleService
  //       .getSampleList()
  //       .then(items => this.samples = items);
  //     this.route.params.subscribe(params => {
  //       const id = +params['id'];
  //       this.sampleService
  //         .getSampleById(id)
  //         .then(item => this.sample = item);
  //     });
  // }
}

