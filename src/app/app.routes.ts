import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { AuthGuard } from '../app/services/auth.guard';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent

    },
    {
        path:'tasks',
        component: TaskListComponent,
        canActivate: [AuthGuard] 

    }
];
