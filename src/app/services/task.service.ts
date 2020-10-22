import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Task from 'src/entities/Task';

const API_URL = 'http://localhost:3000/tasks';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}

  create = (task: Task): Observable<Task> => {
    return this.http.post<Task>(API_URL, task);
  };

  getAll = (): Observable<Task[]> => {
    return this.http.get<Task[]>(
      API_URL + '?isDone=false&_sort=id&_order=desc'
    );
  };

  delete = (taskToRemove: Task): Observable<Task> => {
    return this.http.delete<Task>(API_URL + `/${taskToRemove.id}`);
  };

  update = (id: number, newTask: Task): Observable<Task> => {
    return this.http.put<Task>(API_URL + `/${id}`, newTask);
  };
}
