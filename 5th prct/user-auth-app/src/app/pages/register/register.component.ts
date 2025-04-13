import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  register() {
    const user = { name: this.name, email: this.email, password: this.password };
    this.auth.register(user);
    alert('Registered successfully!');
    this.router.navigate(['/login']);
  }
  
}
