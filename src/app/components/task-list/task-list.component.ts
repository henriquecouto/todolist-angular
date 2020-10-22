import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Task from 'src/entities/Task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  @Input() tasks: Array<Task>;
  @Input() remove: (task: Task) => void;
  @Input() makeDone: (taskId: number, status: boolean) => void;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}
}
