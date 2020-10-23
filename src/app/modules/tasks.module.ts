import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TaskAreaComponent } from 'src/app/components/task-area/task-area.component';
import { TaskListComponent } from 'src/app/components/task-list/task-list.component';
import { CreateTaskComponent } from 'src/app/components/create-task/create-task.component';
import { FilterTasksComponent } from 'src/app/components/filter-tasks/filter-tasks.component';

@NgModule({
  declarations: [
    TaskAreaComponent,
    TaskListComponent,
    CreateTaskComponent,
    FilterTasksComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    TaskAreaComponent,
    TaskListComponent,
    CreateTaskComponent,
    FilterTasksComponent,
  ],
})
export class TasksModule {}
