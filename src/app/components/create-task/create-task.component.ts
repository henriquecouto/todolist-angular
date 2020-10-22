import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Task from 'src/entities/Task';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
})
export class CreateTaskComponent implements OnInit {
  @Input() create: (task: Task) => void;
  taskForm: FormGroup;

  taskValidationMessages = {
    taskName: [
      {
        type: 'required',
        message: 'Você precisa inserir um nome para a tarefa',
      },
    ],
    projectName: [
      { type: 'required', message: 'Você precisa inserir o nome do projeto' },
    ],
  };

  constructor() {
    this.taskForm = new FormGroup({
      taskName: new FormControl('', Validators.required),
      projectName: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {}

  get taskName() {
    return this.taskForm.get('taskName');
  }

  get projectName() {
    return this.taskForm.get('projectName');
  }

  onSubmitForm = ({ taskName, projectName }) => {
    if (!this.taskForm.valid) {
      return;
    }

    this.create(new Task({ name: taskName, project: projectName }));
    this.taskForm.reset();
  };
}
