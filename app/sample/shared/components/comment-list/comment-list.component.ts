import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Article, Comment } from '@app/shared/models';
import { DateLabelComponent } from '@app/shared/components';

@Component({
  selector: 'ons-comment-list',
  template: `
<ul>
  <li class="item" *ngFor="let comment of commentList">
    <p class="text">{{ comment?.text }}</p>
    <div class="meta">
      <span class="author">{{ comment?.user?.name }}</span>
      <ons-date-label class="date" [date]="comment?.created_at"></ons-date-label>
    </div>
  </li>
</ul>
  `,
  directives: [ DateLabelComponent ],
  styles: [require('./comment-list.component.scss')]
})
export class CommentListComponent {
  @Input() commentList: Comment[];
}
