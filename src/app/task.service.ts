import { Injectable } from '@angular/core';
import Task from 'src/entities/Task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks: Array<Task> = [];

  createTask = (task: Task) => {
    this.tasks.unshift(task);
  };

  getAllTasks = () => {
    return this.tasks;
  };

  deleteTask = (index: number) => {
    this.tasks.splice(index, 1);
  };

  clearTasks = () => {
    this.tasks = [];
    return this.tasks;
  };

  setDone = (index: number, status: boolean) => {
    const task = this.tasks.splice(index, 1)[0];
    task.isDone = status;

    if (!task.isDone) {
      this.tasks.unshift(task);
    } else {
      this.tasks.push(task);
    }
  };
}
