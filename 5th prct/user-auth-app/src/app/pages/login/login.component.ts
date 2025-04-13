import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    const success = this.auth.login(this.email, this.password);
    if (success) {
      alert('Login Successful!');
      this.router.navigate(['/profile']);
    } else {
      alert('Invalid credentials');
    }
  }
  
}
