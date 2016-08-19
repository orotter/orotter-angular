import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Article, Comment } from '@app/shared/models';
import { ArticleService } from '@app/shared/services';
import { LogoTextComponent } from '@app/shared/components';

const COMMENT_MAX_LENGTH = 40;

@Component({
  selector: 'ons-comment-form',
  template: `
<form (submit)="sendComment(article?.id, text)" #commentForm="ngForm">
  <textarea class="textarea" [(ngModel)]="text" name="text" required maxlength="${COMMENT_MAX_LENGTH}"></textarea>
  <div class="input-count">{{ text.length }}/${COMMENT_MAX_LENGTH}</div>
  <div class="submit">
    <div class="checkbox">
      <label class="checkbox-label">
        <input type="checkbox">
        <span class="checkbox-text">投稿したコメントは<ons-logo-text></ons-logo-text>に表示されます。</span>
      </label>
    </div>
    <button class="submit-button" type="submit" [disabled]="!commentForm?.form?.valid">Send</button>
  </div>
</form>
`,
  directives: [
    LogoTextComponent
  ],
  styles: [require('./comment-form.component.scss')]
})
export class CommentFormComponent {
  constructor(
    private articleService: ArticleService
  ) {}
  @Input() article: Article;
  @Output('onSentComment') onSentComments = new EventEmitter<Comment>();
  text: string = '';
  commentForm: any;
  ngOnInit() {
  }
  sendComment(article_id: number, text: string) {
    this.articleService.addComment(article_id, text)
      .then(comment => {
        this.onSentComments.emit(comment);
        this.text = '';
      });
  }
}
