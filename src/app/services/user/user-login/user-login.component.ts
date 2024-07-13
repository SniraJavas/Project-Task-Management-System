import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(form : any) {
    if (this.authService.login(form.email, form.password)) {
      
      this.router.navigate(['/tasks']);
    } else {
      alert('Invalid credentials');
    }
  }
}
