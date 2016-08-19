import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { 
  // Components
  SampleFooterComponent,
  SampleHeaderComponent,
  // Directives
  SampleClickAlertDirective,
  // Pipes
  SamplePipe,
  // Services
  SampleService
} from './'

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [
    SampleFooterComponent,
    SampleHeaderComponent,
    SampleClickAlertDirective,
    SamplePipe
  ],
  providers: [
    SampleService
  ],
  exports: [
    SampleFooterComponent,
    SampleHeaderComponent,
    SampleClickAlertDirective,
    SamplePipe
  ]
})
export class SharedModule { }