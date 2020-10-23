import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsAreaComponent } from '../components/projects-area/projects-area.component';
import { ProjectDetailsComponent } from '../components/project-details/project-details.component';
import { AppRoutingModule } from '../app-routing.module';
import { ProjectTaskListComponent } from '../components/project-task-list/project-task-list.component';

@NgModule({
  declarations: [
    ProjectsAreaComponent,
    ProjectDetailsComponent,
    ProjectTaskListComponent,
  ],
  imports: [CommonModule, AppRoutingModule],
  exports: [
    ProjectsAreaComponent,
    ProjectDetailsComponent,
    ProjectTaskListComponent,
  ],
})
export class ProjectsModule {}
