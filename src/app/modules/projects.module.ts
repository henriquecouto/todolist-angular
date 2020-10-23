import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsAreaComponent } from '../components/projects-area/projects-area.component';
import { ProjectDetailsComponent } from '../components/project-details/project-details.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [ProjectsAreaComponent, ProjectDetailsComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [ProjectsAreaComponent, ProjectDetailsComponent],
})
export class ProjectsModule {}
