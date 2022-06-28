import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { switchMap } from 'rxjs';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.scss'],
})
export class ListTodoComponent implements OnInit {
  @Input() formTodo!: FormGroup;
  public listTodo: Todo[] = [];
  public listChecked: boolean[] = [];
  public isShowBulkAction: boolean = false;
  public listTodoChecked: Todo[] = [];
  public keySearch: FormControl = new FormControl('');

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.listTodo = this.todoService.listTodo;

    this.keySearch.valueChanges
      .pipe(switchMap((value) => this.todoService.search(value)))
      .subscribe((data) => {
        this.listTodo = data;
      });
  }

  onDetailClick(item: any, index: number) {
    this.formTodo.patchValue({
      id: index + 1,
      title: item.title,
      description: item.description,
      dueDate: item.dueDate,
      piority: item.piority,
    });
  }

  onRemoveClick(record: Todo, index: number) {
    this.listTodo.splice(index, 1);
    localStorage.setItem('listTodo', JSON.stringify(this.listTodo).toString());
  }

  onChangeCheckbox(event: any, index: number) {
    this.listChecked[index] = event.target.checked;
    this.isShowBulkAction = this.listChecked.some((item) => item === true);
  }

  onBulkActionRemove() {
    this.listChecked.forEach((item, index) => {
      if (item === true) {
        this.listTodoChecked.push(this.listTodo[index]);
      }
    });
    this.listTodo = this.listTodo.filter(
      (item, index) => !this.listTodoChecked.includes(item)
    );
    localStorage.setItem('listTodo', JSON.stringify(this.listTodo).toString());
  }
}
