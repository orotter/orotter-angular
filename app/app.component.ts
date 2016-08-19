import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
<sample-header></sample-header>
<main>
  <router-outlet></router-outlet>
</main>
<sample-footer></sample-footer>
`
})
export class AppComponent {
}