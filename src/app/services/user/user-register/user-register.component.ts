import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
@Component({
  selector: 'app-user-register',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css'
})
export class UserRegisterComponent {
  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(form : any) {
    if (this.authService.login(form.email, form.password)) {
      this.router.navigate(['/']);
    } else {
      alert('Invalid credentials');
    }
  }
}
