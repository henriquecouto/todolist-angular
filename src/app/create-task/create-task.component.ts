import { Component, OnInit } from '@angular/core';
import Task from 'src/entities/Task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
})
export class CreateTaskComponent implements OnInit {
  taskName = '';

  constructor(private taskService: TaskService) {}

  ngOnInit() {}

  addTask = () => {
    if (!this.taskName) {
      return;
    }

    this.taskService.createTask(new Task(this.taskName));
    this.taskName = '';
  };
}
