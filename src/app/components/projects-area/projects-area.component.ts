import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import Project from 'src/entities/Project';

@Component({
  selector: 'app-projects-area',
  templateUrl: './projects-area.component.html',
  styleUrls: ['./projects-area.component.css'],
})
export class ProjectsAreaComponent implements OnInit {
  projects: Array<Project> = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getAllProjects().subscribe((response) => {
      response.map((task) => {
        if (!this.projects.find((project) => project.name === task.project)) {
          this.projects.push(new Project(task.project));
        }
      });
    });
  }
}
