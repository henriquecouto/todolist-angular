import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import Task from 'src/entities/Task';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo-app-list';
  tasks: Array<Task> = [];

  constructor(private taskService: TaskService) {}

  loadTasks = (isDone: boolean, order: 'asc' | 'desc') => {
    const params = new HttpParams()
      .set('isDone', String(isDone))
      .set('_sort', 'id')
      .set('_order', order);

    this.taskService
      .getAll(params)
      .subscribe((response) => (this.tasks = response));
  };

  createTask = (task: Task) => {
    this.taskService
      .create(task)
      .subscribe((response) => this.tasks.unshift(response));
  };

  removeTask = (taskToRemove: Task) => {
    this.taskService.delete(taskToRemove).subscribe(() => {
      const index = this.tasks.findIndex((task) => task.id === taskToRemove.id);
      this.tasks.splice(index, 1);
    });
  };

  handleTaskDone = (taskId: number, status: boolean) => {
    const index = this.tasks.findIndex((task) => task.id === taskId);
    const newTask = this.tasks.splice(index, 1)[0];
    newTask.isDone = status;

    this.taskService.update(taskId, newTask).subscribe(() => {
      if (!newTask.isDone) {
        this.tasks.unshift(newTask);
      }
    });
  };
}
