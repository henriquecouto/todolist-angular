import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TaskAreaComponent } from 'src/app/components/task-area/task-area.component';
import { CreateTaskComponent } from 'src/app/components/create-task/create-task.component';
import { FilterTasksComponent } from 'src/app/components/filter-tasks/filter-tasks.component';
import { TaskListModule } from '../components/task-list/task-list.module';

@NgModule({
  declarations: [TaskAreaComponent, CreateTaskComponent, FilterTasksComponent],
  imports: [CommonModule, ReactiveFormsModule, TaskListModule],
  exports: [TaskAreaComponent, CreateTaskComponent, FilterTasksComponent],
})
export class TasksModule {}
