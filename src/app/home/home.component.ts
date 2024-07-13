import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MaterialModule} from "../material/material.module";
import { UserLoginComponent } from "../service/user/user-login/user-login.component";
import { UserRegisterComponent } from "../service/user/user-register/user-register.component";
import { TaskListComponent } from "../task-list/task-list.component";
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    MaterialModule,
    UserRegisterComponent,
    UserLoginComponent, TaskListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    constructor(public authService : AuthService){

    }
}
