import { Component } from '@angular/core';

@Component({
    selector: 'ons-header',
    template: `
<header class="global_header">
  Header
</header>
    `,
    styles: [
        require('./header.component.scss')
    ]
})
export class HeaderComponent {
}