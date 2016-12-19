import { 
  Routes,
  RouterModule 
} from '@angular/router';
import * as Containers from './containers';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '',
    component: Containers.RootPageComponent,
    children: [
      { path: 't', component: Containers.TopPageComponent }
    ]
  },
  { path: 'login', component: Containers.LoginPageComponent }
];

export const routing = RouterModule.forRoot(routes);