import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks: Array<string> = [];
  constructor() {}

  createTask = (task: string) => {
    this.tasks.push(task);
    console.log(this.tasks);
  };

  getTasks = () => {
    return this.tasks;
  };

  deleteTask = (index: number) => {
    this.tasks.splice(index, 1);
  };

  clearTasks = () => {
    this.tasks = [];
    return this.tasks;
  };
}
