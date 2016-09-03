import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '@app/shared/shared.module';
import { AppComponent } from './app.component';
import { routing } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }