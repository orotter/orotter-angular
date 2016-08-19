import { Component, OnInit } from '@angular/core';

type MenuType = 'Category' | 'Period';
namespace MenuType {
  export const Category: MenuType = 'Category';
  export const Period: MenuType = 'Period';
}

@Component({
    selector: 'ons-search-menu',
    template: `
<nav class="search_menu">
  <div class="global">
    <ul class="global-list">
      <li class="global-list-item">
        <a class="global-list-button" [ngClass]="{ 'on': menuOpenState?.Category }" (click)="onMenuClick('Category')">カテゴリー</a>
      </li>
      <li class="global-list-item">
        <a class="global-list-button" [ngClass]="{ 'on': menuOpenState?.Period }" (click)="onMenuClick('Period')">期間</a>
      </li>
    </ul>
  </div>

  <div class="local">
    <div class="category search_menu_slide" *ngIf="menuOpenState.Category">
      <ul class="local-list">
        <li class="local-list-item"><a class="local-list-button">BS事業本部(99999)</a></li>
        <li class="local-list-item"><a class="local-list-button">CD事業本部(99999)</a></li>
        <li class="local-list-item"><a class="local-list-button">国際事業本部(99999)</a></li>
        <li class="local-list-item"><a class="local-list-button">社長室(99999)</a></li>
        <li class="local-list-item"><a class="local-list-button">管理本部(99999)</a></li>
        <li class="local-list-item"><a class="local-list-button">新入社員紹介(99999)</a></li>
        <li class="local-list-item"><a class="local-list-button">北海道(99999)</a></li>
        <li class="local-list-item"><a class="local-list-button">東京(99999)</a></li>
        <li class="local-list-item"><a class="local-list-button">中部(99999)</a></li>
        <li class="local-list-item"><a class="local-list-button">西日本(99999)</a></li>
        <li class="local-list-item"><a class="local-list-button">宮崎(99999)</a></li>
        <li class="local-list-item"><a class="local-list-button">大連(99999)</a></li>
        <li class="local-list-item"><a class="local-list-button">ベトナム(99999)</a></li>
        <li class="local-list-item"><a class="local-list-button">マレーシア(99999)</a></li>
        <li class="local-list-item"><a class="local-list-button">シンガポール(99999)</a></li>
        <li class="local-list-item"><a class="local-list-button">台湾(99999)</a></li>
      </ul>
    </div>
    <div class="period search_menu_slide" *ngIf="menuOpenState.Period">
      <ul class="local-list">
        <li class="local-list-item"><a class="local-list-button">過去3ヶ月(99999)</a></li>
        <li class="local-list-item"><a class="local-list-button">最後の6ヶ月(99999)</a></li>
        <li class="local-list-item"><a class="local-list-button">去年(99999)</a></li>
      </ul>
    </div>
  </div>

  <div class="status"><p><span>CD事業本部</span>／<span>過去3ヶ月</span>の記事</p></div>
</nav>
    `,
    styles: [require('./search-menu.component.scss')]
})
export class SearchMenuComponent implements OnInit {
  menuOpenState: {
    Category: boolean;
    Period: boolean;
  }

  ngOnInit() {
    this.menuOpenState = {
      Category: false,
      Period: false
    }
  }

  onMenuClick(type: MenuType) {
    this.menuOpenState[type] = !this.menuOpenState[type];
  }
}