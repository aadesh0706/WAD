import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  // Register a new user (this is just storing data in localStorage for simplicity)
  register(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  // Login (check if the entered credentials match with stored user data)
  login(email: string, password: string): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user.email === email && user.password === password) {
      localStorage.setItem('loggedIn', 'true');
      return true;
    }
    return false;
  }

  // Check if the user is logged in
  isLoggedIn(): boolean {
    return localStorage.getItem('loggedIn') === 'true';
  }

  // Get current user data
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user') || '{}');
  }

  // Log out the user
  logout() {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('user');
  }
}
