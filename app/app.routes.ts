import { provideRouter, RouterConfig } from '@angular/router';
import { ArticleIndexComponent } from '@app/+articles/article-index/article-index.component';
import { ArticleShowComponent } from '@app/+articles/article-show/article-show.component';

export const routes: RouterConfig = [
  { path: '', component: ArticleIndexComponent },
  { path: 'a', component: ArticleIndexComponent },
  { path: 'a/:id', component: ArticleShowComponent },
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];

export const APP_ROUTER_PRECOMPILES = [
  ArticleIndexComponent,
  ArticleShowComponent
];
