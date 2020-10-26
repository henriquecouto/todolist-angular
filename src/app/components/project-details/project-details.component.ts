import { HttpParams } from '@angular/common/http';
import {
  Component,
  ContentChild,
  ElementRef,
  OnInit,
  Renderer2,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import Project from 'src/entities/Project';
import Task from 'src/entities/Task';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
})
export class ProjectDetailsComponent implements OnInit {
  projectName: string = '';
  tasks: Array<Task> = [];

  constructor(private route: ActivatedRoute, private taskService: TaskService) {
    this.loadProjectName();
  }

  ngOnInit(): void {}

  private loadProjectName = () => {
    this.route.paramMap.subscribe((params) => {
      this.projectName = params.get('projectName');
      this.loadTasks();
    });
  };

  private loadTasks = () => {
    this.tasks = [];
    const params = new HttpParams().set('project', this.projectName);
    this.taskService
      .getAll(params)
      .subscribe((response) => response.map((task) => this.tasks.push(task)));
  };

  removeTask = (task: Task) => {};

  makeTaskDone = (taskId: number, status: boolean) => {};
}
