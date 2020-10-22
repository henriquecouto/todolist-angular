import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter-tasks',
  templateUrl: './filter-tasks.component.html',
  styleUrls: ['./filter-tasks.component.css'],
})
export class FilterTasksComponent implements OnInit {
  @Input() filter: (isDone: boolean, order: 'asc' | 'desc') => void;
  filterForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.filterForm = this.formBuilder.group({ isDone: false, order: 'desc' });
  }

  ngOnInit(): void {
    this.onSubmitForm(this.filterForm.value);
  }

  onSubmitForm = ({ isDone, order }) => {
    this.filter(isDone, order);
  };
}
