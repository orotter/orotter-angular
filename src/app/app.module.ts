import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppComponents } from './components';
import { AppContainers } from './containers';
import { AppDirectives } from './directives';
import { AppPipes } from './pipes';
import { AppServices } from './services';

@NgModule({
  declarations: [
    AppComponent,
    AppComponents,
    AppContainers,
    AppDirectives,
    AppPipes,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [
    AppServices,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
