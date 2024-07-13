import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/tasks/task.service';
import { Task } from '../../models/task';
import { CommonModule } from '@angular/common';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CdkDropList, CdkDrag, CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [];
  
  constructor(private taskService: TaskService){
        
  }

  ngOnInit(): void {
     this.getTasks();
  }

  getTasks(){
    this.taskService.getTasks().subscribe({
        next : (tasks) =>{
          console.log(tasks);
          return this.tasks = tasks;
        },
        error(err) {
          console.error('Error fetching users:', err);
        },
    });
  }

  drop(event: CdkDragDrop<Task[]>) {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }
}
