import { Component } from '@angular/core';
import { SampleService } from '@app/shared/services';
import { Sample } from '@app/shared/models';
import {
  Router 
} from '@angular/router';

@Component({
  selector: 'sample-login',
  template: `
<div class="body">
  <h1>Hi! Login page</h1>
  <div>
    <input type="text" [(ngModel)]="username">
    <input type="password" [(ngModel)]="password">
  </div>
  <div>
    <button (click)="loginButtonClicked()">Login</button>
  </div>
</div>
`,
  providers: [
  ]
})
export class SampleLoginComponent {
  constructor(
    private sampleService: SampleService,
    private router: Router,
  ) {
  }
  username: string = "";
  password: string = "";
  ngOnInit() {
  }
  loginButtonClicked() {
      this.sampleService
        .login(this.username, this.password)
        .then(user => {
            this.router.navigate(['/s']);
        });
  }
}
