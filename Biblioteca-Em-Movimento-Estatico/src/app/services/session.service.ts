import { Injectable } from '@angular/core';
import { USERS } from './Data';
import { User } from '../interfaces/user';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(
    private api: ApiService
  ) { }

  login(username: string, password: string) {
    const observable = this.api.login({username, password});

    observable.subscribe(user => {
        if (user.body) {
          this.setUser(user.body);
        }
      });

    return observable;
  }

  changePassword(email: string) {
    const observable = this.api.changePassword(email);

    observable.subscribe(user => {
        if (user.body) {
          this.setUser(user.body);
        }
      });

    return observable;
  }

  logout() {
    localStorage.removeItem('USER');
  }

  isAuthenticated() {
    const user = this.getUser();
    return (user) ? true : false;
  }

  setUser(user: User) {
    localStorage.setItem('USER', JSON.stringify(user));
  }
  
  getUser() {
    return JSON.parse(localStorage.getItem('USER'));
  }
}
