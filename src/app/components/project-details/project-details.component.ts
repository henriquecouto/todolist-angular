import { HttpParams } from '@angular/common/http';
import {
  Component,
  ContentChild,
  ElementRef,
  OnInit,
  Renderer2,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import Project from 'src/entities/Project';
import Task from 'src/entities/Task';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
})
export class ProjectDetailsComponent implements OnInit {
  // @ContentChild('projectName', { read: ElementRef }) hRef: ElementRef;

  projectName: string = '';
  tasks: Array<Task> = [];

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService // private renderer: Renderer2
  ) {
    this.loadProjectName();
  }

  ngOnInit(): void {
    this.loadTasks();
    console.log(this.projectName);
  }

  // ngAfterContentInit() {
  //   this.renderer.setStyle(
  //     this.hRef.nativeElement,
  //     'background-color',
  //     'yellow'
  //   );
  // }

  ngOnChanges(): void {
    // this.loadTasks();
  }

  private loadProjectName = () => {
    this.route.paramMap.subscribe((params) => {
      this.projectName = params.get('projectName');
    });
  };

  private loadTasks = () => {
    if (this.projectName) {
      const params = new HttpParams().set('project', this.projectName);
      this.taskService
        .getAll(params)
        .subscribe((response) => response.map((task) => this.tasks.push(task)));
    }
  };
}
