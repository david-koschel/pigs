import { Routes } from '@angular/router';
import {ProfileListComponent} from './features/profile-list/profile-list.component';
import {UserRegisterComponent} from './features/user-register/user-register.component';
import {LoginComponent} from './features/login/login.component';

export const routes: Routes = [
 {
    path: "register",
    component: UserRegisterComponent
  },
 {
    path: "login",
    component: LoginComponent
  },
  {
    path: 'profiles',
    component: ProfileListComponent
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];
