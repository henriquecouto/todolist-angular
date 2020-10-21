import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import Task from 'src/entities/Task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
})
export class CreateTaskComponent implements OnInit {
  taskForm: FormGroup;

  constructor(
    private taskService: TaskService,
    private formBuilder: FormBuilder
  ) {
    this.taskForm = this.formBuilder.group({ taskName: '' });
  }

  ngOnInit() {}

  onSubmitForm = ({ taskName }) => {
    this.taskService.createTask(new Task(taskName));
    this.taskForm.reset();
  };
}
