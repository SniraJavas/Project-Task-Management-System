import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TaskListComponent } from './task-list/task-list.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent

    },
    {
        path:'tasks',
        component: TaskListComponent
    }
];
