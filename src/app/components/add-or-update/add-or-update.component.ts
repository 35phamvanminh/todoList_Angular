import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { Piority } from 'src/app/models/piority.model';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-add-or-update',
  templateUrl: './add-or-update.component.html',
  styleUrls: ['./add-or-update.component.scss'],
})
export class AddOrUpdateComponent implements OnInit {
  @Input() formTodo!: FormGroup;
  public minDateDefault: string = moment(new Date()).format('YYYY-MM-DD');
  public listPiority: Piority[] = [
    { label: 'Normal', value: 'normal' },
    { label: 'Low', value: 'low' },
    { label: 'High', value: 'high' },
  ];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  get id() {
    return this.formTodo.get('id') as FormControl;
  }

  get dueDate() {
    return this.formTodo.get('dueDate') as FormControl;
  }

  onAdd() {
    this.todoService.listTodo.push(this.formTodo.value);
    localStorage.setItem(
      'listTodo',
      JSON.stringify(this.todoService.listTodo).toString()
    );
    this.formTodo.patchValue({
      title: null,
      description: null,
    });
  }

  onUpdate() {
    this.todoService.listTodo.splice(this.id.value - 1, 1, this.formTodo.value);
    localStorage.setItem(
      'listTodo',
      JSON.stringify(this.todoService.listTodo).toString()
    );
    this.id.setValue(null);
    this.formTodo.patchValue({
      title: null,
      description: null,
      dueDate: moment(new Date()).format('YYYY-MM-DD'),
      piority: 'normal',
    });
  }
}
