import { Component } from '@angular/core';
import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';
import { Article } from '@app/shared/models'
import { ArticleService } from '@app/shared/services'
import { ArticleListComponent } from '@app/+articles/shared/components/article-list/article-list.component';
import { ArticleDetailComponent } from '@app/+articles/shared/components/article-detail/article-detail.component';

@Component({
  selector: 'ons-article-show',
  template: `
<div class="back">
  <a class="back-button" [routerLink]="['/a']">&lt; Back</a>
</div>
<div class="body">
  <ons-article-detail class="main" [article]="article"></ons-article-detail>
  <aside class="aside">
    <h2 class="aside-header">最新の記事</h2>
    <ons-article-list [articleList]="top3ArticleList" [layout]="'column'" [summary]="true"></ons-article-list>
  </aside>
</div>
`,
  providers: [
    ArticleService
  ],
  directives: [
    ROUTER_DIRECTIVES,
    ArticleListComponent,
    ArticleDetailComponent
  ],
  styles: [require('./article-show.component.scss')]
})
export class ArticleShowComponent {
  article: Article;
  top3ArticleList: Article[];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = +params['id'];
      this.articleService.getArticleById(id)
        .then(article => this.article = article);
      this.articleService.getArticles()
        .then(articles => this.top3ArticleList = articles.slice(0, 3));
    });
  }
}
