import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.scss'],
})
export class ListTodoComponent implements OnInit {
  public listTodo: Todo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.listTodo = this.todoService.listTodo;
  }

  onDetailClick(index: number) {}
}
