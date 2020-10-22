import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import Task from 'src/entities/Task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
})
export class CreateTaskComponent implements OnInit {
  @Input() create: (task: Task) => void;
  taskForm: FormGroup;

  constructor(
    // private taskService: TaskService,
    private formBuilder: FormBuilder
  ) {
    this.taskForm = this.formBuilder.group({ taskName: '' });
  }

  ngOnInit() {}

  onSubmitForm = ({ taskName }) => {
    this.create(new Task(taskName));
    this.taskForm.reset();
  };
}
