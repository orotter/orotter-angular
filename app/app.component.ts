import { Component, ViewEncapsulation } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { APP_ROUTER_PRECOMPILES } from './app.routes';
import { HeaderComponent, FooterComponent } from './shared';

interface AppState {
  like: number
}

@Component({
  selector: 'app',
  template: `
<div>Sample component</div>
`,
  directives: [
    ROUTER_DIRECTIVES,
    HeaderComponent,
    FooterComponent
  ],
  precompile: APP_ROUTER_PRECOMPILES,
  styles: [require('./app.component.scss')],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  constructor(){
  }
}
