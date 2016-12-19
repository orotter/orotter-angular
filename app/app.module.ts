import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import * as Containers from './containers';
import * as Components from './components';
import * as Services from './services';

const ALL_CONTAINERS = [
  Containers.LoginPageComponent,
  Containers.TopPageComponent,
  Containers.RootPageComponent
];

const ALL_COMPONENTS = [
  Components.GlobalHeaderComponent,
];

const ALL_SERVICES = [
  Services.OrotterService
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    ...ALL_CONTAINERS,
    ...ALL_COMPONENTS
  ],
  providers: [
    ...ALL_SERVICES
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }