import { Component, Input } from '@angular/core';
import { Article, Comment } from '@app/shared/models';
import { LikeButtonComponent, DateLabelComponent } from '@app/shared/components';
import { CommentFormComponent } from '@app/+articles/shared/components/comment-form/comment-form.component'
import { CommentListComponent } from '@app/+articles/shared/components/comment-list/comment-list.component'
import { styleVars } from '@app/shared/styles';

@Component({
  selector: 'ons-article-detail',
  template: `
<div>
  <ons-date-label class="date" [style.color]="dateColor" [date]="article?.posted_at"></ons-date-label>
  <h1 class="title">{{ article?.title }}</h1>
  <div class="visual">
    <img [src]="article?.image?.url" />
  </div>
  <p class="description">{{ article?.description }}</p>
  <section class="actions">
    <ons-like-button [article]="article"></ons-like-button>
  </section>
  <section class="comment">
    <header class="comment-header">
      コメント&nbsp;{{ article?.comments?.length }}件
    </header>
    <ons-comment-form class="comment-form" [article]="article" (onSentComment)="onSentComment($event)"></ons-comment-form>
    <ons-comment-list [commentList]="article?.comments"></ons-comment-list>
  </section>
</div>
  `,
  providers: [
  ],
  directives: [
    LikeButtonComponent,
    CommentListComponent,
    CommentFormComponent,
    DateLabelComponent
  ],
  styles: [require('./article-detail.component.scss')]
})
export class ArticleDetailComponent {
  @Input() article: Article;
  dateColor: string = styleVars.blue;
  onSentComment(comment: Comment) {
    this.article.comments.unshift(comment);
  }
}
