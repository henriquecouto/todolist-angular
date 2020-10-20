import { Component } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo-app-list';
  taskName = '';

  constructor(private taskService: TaskService) {}

  addTask = () => {
    if (!this.taskName) {
      return;
    }

    this.taskService.createTask(this.taskName);
    this.taskName = '';
  };
}
