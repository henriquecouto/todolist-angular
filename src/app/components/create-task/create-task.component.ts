import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Project from 'src/entities/Project';
import Task from 'src/entities/Task';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
})
export class CreateTaskComponent implements OnInit {
  @Input() create: (task: Task) => void;
  @Input() projects: Array<Project>;
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
      taskDate: new FormControl(new Date()),
    });
  }

  ngOnInit() {}

  get taskName() {
    return this.taskForm.get('taskName');
  }

  get projectName() {
    return this.taskForm.get('projectName');
  }

  onSubmitForm = ({ taskName, projectName, taskDate }) => {
    if (!this.taskForm.valid) {
      return;
    }

    const date = new Date(taskDate + ' 00:00:00');

    this.create(new Task({ name: taskName, project: projectName, date }));
    this.taskForm.reset();
  };
}
