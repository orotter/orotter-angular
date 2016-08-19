import { bootstrap } from '@angular/platform-browser-dynamic';
import { PLATFORM_DIRECTIVES, PLATFORM_PIPES } from '@angular/core';
import { AppComponent } from '@app/app.component';
import { APP_ROUTER_PROVIDERS } from '@app/app.routes'
import { HTTP_PROVIDERS } from '@angular/http';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  disableDeprecatedForms(),
  provideForms(),
  //provideStore({ article: ArticleReducer })
  /* Any directives you want to use globally */
  // {
  //   provide: PLATFORM_DIRECTIVES, useValue: CUSTOM_DIRECTIVES, multi: true
  // },
  /* Any pipes you want to use globally */
  // {
  //   provide: PLATFORM_PIPES, useValue: CUSTOM_PIPE, multi: true
  // }
])
.catch(err => console.error(err));
