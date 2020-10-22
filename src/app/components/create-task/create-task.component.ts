import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import Task from 'src/entities/Task';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
})
export class CreateTaskComponent implements OnInit {
  @Input() create: (task: Task) => void;
  taskForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.taskForm = this.formBuilder.group({ taskName: '', projectName: '' });
  }

  ngOnInit() {}

  onSubmitForm = ({ taskName, projectName }) => {
    this.create(new Task({ name: taskName, project: projectName }));
    this.taskForm.reset();
  };
}
