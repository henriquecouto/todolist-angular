import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Task from 'src/entities/Task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  tasks: Array<Task> = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getAllTasks();
  }

  remove = (task: Task) => {
    this.taskService.deleteTask(task);
  };

  makeDone = (index: number, status: boolean) => {
    this.taskService.setDone(index, status);
  };
}
