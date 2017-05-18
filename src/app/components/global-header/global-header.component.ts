import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'global-header',
  template: `
<header class="GlobalHeader">
  <div class="GlobalHeader-content">
    <div class="GlobalHeader-logo">
      <h1 class="Logo">oRotter</h1>
    </div>
    <div class="GlobalHeader-search">
      <div class="RoundInput RoundInput--primary">
        <input class="RoundInput-input" type="text" placeholder="ユーザーを検索">
        <div class="RoundInput-icon"></div>
      </div>
    </div>
    <div class="GlobalHeader-avatar">
      <div class="Avatar Avatar--small">
        <img class="Avatar-image" src="http://fakeimg.pl/300/">
      </div>
    </div>
    <div class="GlobalHeader-actions">
      <div class="GlobalHeader-action">
        <button class="Button Button--primaryInvert" (click)="logout.emit()">ログアウト</button>
      </div>
    </div>
  </div>
</header>
  `,
  styleUrls: ['./global-header.component.scss'],
})
export class GlobalHeaderComponent {
  @Output() logout = new EventEmitter<any>();
}
