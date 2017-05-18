import { Component } from '@angular/core';
import { OrotterService } from '@app/services';
import { Router } from '@angular/router';

@Component({
  selector: 'root-page',
  template: `
<global-header (logout)="logout()"></global-header>
<main class="page-wrapper flex">
  <router-outlet></router-outlet>
</main>
  `,
  styleUrls: ['./root-page.component.scss'],
})
export class RootPageComponent {
  constructor(
    private router: Router,
    private orotterService: OrotterService,
  ) {}

  logout() {
    this.orotterService
      .logout()
      .subscribe(this.logoutSuccess.bind(this));
  }

  logoutSuccess() {
    this.router.navigate(['/login']);
  }
}

