import { Component, Input, OnInit } from '@angular/core';
import Task from 'src/entities/Task';

@Component({
  selector: 'project-task-list',
  templateUrl: './project-task-list.component.html',
  styleUrls: ['./project-task-list.component.css'],
})
export class ProjectTaskListComponent implements OnInit {
  @Input() tasks: Array<Task>;
  constructor() {}

  ngOnInit(): void {}
}
