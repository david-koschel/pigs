import {inject, Injectable} from '@angular/core';
import {User} from '../models/user.model';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private router = inject(Router);

  private _isLoggedIn: boolean;
  private loggedUser: User | undefined;

  constructor() {
    const existingUser = localStorage.getItem("user")
    if (existingUser) {
      this._isLoggedIn = true;
      this.loggedUser = JSON.parse(existingUser);
    } else {
      this._isLoggedIn = false;
    }
  }

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
    localStorage.setItem("user", JSON.stringify(user))
  }

  logout() {
    this._isLoggedIn = false;
    this.loggedUser = undefined;
    this.router.navigateByUrl("/login");
    localStorage.removeItem("user")
  }

}
