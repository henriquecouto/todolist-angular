import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Task from 'src/entities/Task';
import { environment } from 'src/environments/environment';

const API_URL = environment.BASE_API_URL + '/tasks';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}

  create = (task: Task): Observable<Task> => {
    return this.http.post<Task>(API_URL, task);
  };

  getAll = (): Observable<Task[]> => {
    const params = new HttpParams()
      .set('isDone', String(false))
      .set('_sort', 'id')
      .set('_order', 'desc');

    return this.http.get<Task[]>(API_URL, { params });
  };

  delete = (taskToRemove: Task): Observable<Task> => {
    return this.http.delete<Task>(API_URL + `/${taskToRemove.id}`);
  };

  update = (id: number, newTask: Task): Observable<Task> => {
    return this.http.put<Task>(API_URL + `/${id}`, newTask);
  };
}
