import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public formTodo: FormGroup;
  title = 'todoList';
  constructor(private fb: FormBuilder) {
    this.formTodo = this.fb.group({
      id: null,
      title: [null, Validators.required],
      description: null,
      dueDate: moment(new Date()).format('YYYY-MM-DD'),
      piority: 'normal',
    });
  }
}
