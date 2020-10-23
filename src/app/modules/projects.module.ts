import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsAreaComponent } from '../components/projects-area/projects-area.component';

@NgModule({
  declarations: [ProjectsAreaComponent],
  imports: [CommonModule],
  exports: [ProjectsAreaComponent],
})
export class ProjectsModule {}
