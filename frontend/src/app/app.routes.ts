import { Routes } from '@angular/router';
import {UserRegisterComponent} from './features/user-register/user-register.component';

export const routes: Routes = [
  {
    path: "register",
    component: UserRegisterComponent
  },
  {
    path: '**',
    redirectTo: 'register',
    pathMatch: 'full'
  }
];
