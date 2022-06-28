import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { Piority } from 'src/app/models/piority.model';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-add-or-update',
  templateUrl: './add-or-update.component.html',
  styleUrls: ['./add-or-update.component.scss'],
})
export class AddOrUpdateComponent implements OnInit {
  public formGroup: FormGroup;
  public listPiority: Piority[] = [
    { label: 'Normal', value: 'normal' },
    { label: 'Low', value: 'low' },
    { label: 'High', value: 'high' },
  ];
  public listTodo: Todo[] = [];

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      title: null,
      description: null,
      dueDate: moment(new Date()).format('YYYY-MM-DD'),
      piority: 'normal',
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    // this.listTodo.push(this.formGroup.value);
    // localStorage.setItem('listTodo', JSON.stringify(this.listTodo).toString());
  }
}
