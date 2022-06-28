import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  public listTodo: Todo[] = [];

  constructor() {
    if (localStorage.getItem('listTodo') && localStorage.length > 0) {
      this.listTodo = JSON.parse(localStorage.getItem('listTodo') as string);
    }
  }
}
