import {inject, Injectable} from '@angular/core';
import {User} from '../models/user.model';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private router = inject(Router);

  private _isLoggedIn = false;
  private loggedUser: User | undefined;

  get isLoggedIn() {
    return this._isLoggedIn;
  }

  get user() {
    return this.loggedUser;
  }

  login(user: User) {
    this._isLoggedIn = true;
    this.loggedUser = user;
    this.router.navigateByUrl("/profiles");
  }

  logout() {
    this._isLoggedIn = false;
    this.loggedUser = undefined;
    this.router.navigateByUrl("/login");
  }

}
