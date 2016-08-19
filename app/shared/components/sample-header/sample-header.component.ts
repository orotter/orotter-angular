import { Component } from '@angular/core';

@Component({
    selector: 'sample-header',
    template: `
<header class="global_header">
  Header
</header>
    `,
    styles: [
        require('./sample-header.component.scss')
    ]
})
export class SampleHeaderComponent {
}