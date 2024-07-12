import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import { UserLoginComponent } from "./user-login/user-login.component";
import { UserRegisterComponent } from "./user-register/user-register.component";
import { AuthService } from './service/auth.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule, MatTabsModule, RouterModule, UserLoginComponent, UserRegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Task-Management-System';
  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
