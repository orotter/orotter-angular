import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  LoginPageComponent,
  RootPageComponent,
  TopPageComponent
} from './containers';

const routes: Routes = [
  {
    path: '',
    component: RootPageComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 't',
        component: TopPageComponent
      },
      {
        path: 'login',
        component: LoginPageComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
