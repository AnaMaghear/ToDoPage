import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoModel} from "../../model/todo.model";
import {TodosService} from "../../services/todos.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  @Input()todos: TodoModel[] | null = [];
  @Output()deleteClicked = new EventEmitter<number>();
  onDeleteClicked(todoId: number) {
    this.deleteClicked.emit(todoId);
  }

}
