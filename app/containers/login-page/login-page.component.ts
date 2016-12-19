import { Component } from '@angular/core';
import { OrotterService } from '@app/services';
import { Router } from '@angular/router';

@Component({
  selector: 'login-page',
  template: `
<div class="flex page-wrapper">
  <main>
    <div class="Panel">
      <div class="RoundInput">
        <input [(ngModel)]="username" class="RoundInput-input" type="text" placeholder="ユーザー名">
      </div>
      <div class="RoundInput">
        <input [(ngModel)]="password" class="RoundInput-input" type="password" placeholder="パスワード">
      </div>
      <button class="Button Button--primary" (click)="login(username, password)">ログイン</button>
    </div>
  </main>
</div>
`,
  providers: [
  ],
  styles: [require('./login-page.component.scss')]
})
export class LoginPageComponent {
  constructor(
    private router: Router,
    private orotterService: OrotterService,
  ) {
  }
  username: string = 'test';
  password: string = 'testpassword';
  login(username: string, password: string) {
    this.orotterService
      .login(username, password)
      .subscribe(
        this.loginSuccess.bind(this),
        this.loginFail.bind(this)
      );
  }

  loginSuccess() {
    this.router.navigate(['/t']);
  }

  loginFail() {
    console.log('loginFailed');
  }
}
