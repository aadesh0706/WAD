import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: any = null;

  register(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  login(email: string, password: string): boolean {
    const stored = localStorage.getItem('user');
    if (!stored) return false;

    const user = JSON.parse(stored);
    if (user.email === email && user.password === password) {
      this.currentUser = user;
      return true;
    }
    return false;
  }

  getUser() {
    return this.currentUser;
  }
}
