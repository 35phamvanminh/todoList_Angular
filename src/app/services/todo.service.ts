import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';
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

  search(query?: string): Observable<any> {
    return of(this.listTodo).pipe(
      map((data) =>
        data.filter((item: any) =>
          item.title.toLowerCase().includes(query?.toLowerCase())
        )
      )
    );
  }
}
