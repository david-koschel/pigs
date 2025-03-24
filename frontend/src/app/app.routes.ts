import { Routes } from '@angular/router';
import {ProfileListComponent} from './features/profile-list/profile-list.component';
import {UserRegisterComponent} from './features/user-register/user-register.component';
import {LoginComponent} from './features/login/login.component';
import {EventFormComponent} from './features/event-form/event-form.component';

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
    path: 'events',
    component: EventFormComponent
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];
