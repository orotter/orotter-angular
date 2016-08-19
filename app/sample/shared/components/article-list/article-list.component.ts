import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '@app/shared/models';
import { LikeIconComponent, DateLabelComponent } from '@app/shared';

@Component({
  selector: 'ons-article-list',
  template: `
<article class="article_list {{layout}}">
  <section class="article_list-section" *ngFor="let article of articleList">
    <a class="article_list_item" (click)="onClick(article)">
      <div class="thumbnail" [class.summary]="summary">
        <div class="cover">TOKYO</div>
        <div class="visual" [style.backgroundImage]="getImageUrlAsCssFormat(article)"></div>
      </div>
      <div class="content" [class.summary]="summary">
        <div class="meta" *ngIf="!summary">
          <ons-date-label class="date" [date]="article?.posted_at"></ons-date-label>
          <span class="good">
            <ons-like-icon width="16"></ons-like-icon>
            {{ article?.likes }}
          </span>
        </div>
        <h1 class="title">{{ article?.title }}</h1>
        <p class="description" *ngIf="!summary">{{ article?.description }}</p>
      </div>
    </a>
  </section>
</article>
  `,
  directives: [ LikeIconComponent, DateLabelComponent ],
  styles: [require('./article-list.component.scss')]
})
export class ArticleListComponent {
  @Input() articleList: Article[];
  @Input() layout: 'row' | 'column';
  @Input() summary: boolean;

  @Output('articleClick') articleClicks = new EventEmitter<Article>();
  onClick(article: Article) {
    this.articleClicks.emit(article);
  }

  getImageUrlAsCssFormat(article: Article) {
    return `url(${article.image.thumb.url})`;
  }
}
