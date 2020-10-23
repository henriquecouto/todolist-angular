import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { TaskAreaComponent } from './components/task-area/task-area.component';

const routes: Routes = [
  { path: '', component: TaskAreaComponent },
  { path: 'project/:projectName', component: ProjectDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
