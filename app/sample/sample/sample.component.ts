import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { Article, User, Comment } from '@app/shared/models';
import { SampleService } from '@app/shared/services';

@Component({
  selector: 'sample',
  template: `
<div class="body">
  sample
</div>
`,
  providers: [
  ],
  directives: [
    ROUTER_DIRECTIVES,
  ],
  styles: [require('./article-index.component.scss')]
})
export class SampleComponent {
  constructor(
  ) {
  }

  ngOnInit() {
  }
}
