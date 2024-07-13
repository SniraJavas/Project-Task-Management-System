import { Router, RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import {MaterialModule} from "./material/material.module";
import { RouterModule } from '@angular/router';
import { AuthService } from './service/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    MaterialModule,
    RouterModule, 
    FormsModule,
  CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Task-Management-System';
  constructor(public authService: AuthService) {
  }

  logout() {
    this.authService.logout();
  }
}
