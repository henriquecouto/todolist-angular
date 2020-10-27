import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import Task from 'src/entities/Task';

import { TaskListComponent } from './task-list.component';

const mockTasks = [
  new Task({ name: 'hehe', project: 'hehe' }),
  new Task({ name: 'haha', project: 'haha' }),
  new Task({ name: 'haha', project: 'haha' }),
  new Task({ name: 'haha', project: 'haha' }),
  new Task({ name: 'haha', project: 'haha' }),
];

describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskListComponent],
      imports: [CommonModule, HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
    component.tasks = mockTasks;
    fixture.detectChanges();
  });

  it('should create task list', () => {
    expect(component).toBeTruthy();
  });

  it('should tasks are showed', async () => {
    const tasksLength = component.tasks.length;
    const renderedTasksLength = fixture.debugElement.queryAll(
      By.css('.task-item')
    ).length;

    expect(renderedTasksLength).toBe(tasksLength);
  });
});
