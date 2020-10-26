import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
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

  removeTask = (task: Task) => {
    this.taskService.delete(task);
  };

  handleTaskDone = (taskId: number, status: boolean) => {
    const index = this.tasks.findIndex((task) => task.id === taskId);
    const newTask = this.tasks[index];
    newTask.isDone = status;

    this.taskService.update(taskId, newTask).subscribe();
  };
}
