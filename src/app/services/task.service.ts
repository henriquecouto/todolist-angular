import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Task from 'src/entities/Task';

const API_URL = 'http://localhost:3000/tasks';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Array<Task> = [];

  constructor(private http: HttpClient) {}

  createTask = (task: Task) => {
    return this.http
      .post<Task>(API_URL, task)
      .subscribe((response) => this.tasks.unshift(response));
  };

  getAllTasks = (): Array<Task> => {
    this.http
      .get<Task[]>(API_URL + '?isDone=false&_sort=id&_order=desc')
      .subscribe((response) => response.map((task) => this.tasks.push(task)));

    return this.tasks;
  };

  deleteTask = (taskToRemove: Task) => {
    this.http.delete(API_URL + `/${taskToRemove.id}`).subscribe(() => {
      const index = this.tasks.findIndex((task) => task.id === taskToRemove.id);
      this.tasks.splice(index, 1);
    });
  };

  setDone = (index: number, status: boolean) => {
    const task = this.tasks.splice(index, 1)[0];
    task.isDone = status;

    this.http.put(API_URL + `/${task.id}`, task).subscribe(() => {
      if (!task.isDone) {
        this.tasks.unshift(task);
      }
    });
  };
}
