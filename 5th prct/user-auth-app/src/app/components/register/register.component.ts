import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Register</h2>
    <form (ngSubmit)="register()">
      <input [(ngModel)]="user.name" name="name" placeholder="Name" required />
      <input [(ngModel)]="user.email" name="email" placeholder="Email" required />
      <input [(ngModel)]="user.password" name="password" type="password" placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
    <a routerLink="/login">Already have an account? Login</a>
  `,
})
export class RegisterComponent {
  user = { name: '', email: '', password: '' };

  constructor(private auth: AuthService, private router: Router) {}

  register() {
    this.auth.register(this.user);
    this.router.navigate(['/login']);
  }
}