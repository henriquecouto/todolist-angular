import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo-app-list';
  taskName = '';
  taskList = [];

  addTask() {
    if (!this.taskName) {
      return;
    }

    this.taskList.push(this.taskName);
    this.taskName = '';
    console.log(this.taskList);
  }

  removeTask(index: number) {
    this.taskList.splice(index, 1);
  }
}
