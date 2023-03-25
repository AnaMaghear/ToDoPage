import {Component, OnInit} from '@angular/core';
import {TodoModel} from "../../model/todo.model";
import {TodosService} from "../../services/todos.service";
import {MatDialog} from "@angular/material/dialog";
import {AddTodoComponent} from "../add-todo/add-todo.component";
import {ThemeService} from "../../services/theme.service";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit{
  public data: TodoModel[] = [];
  constructor(public todosService: TodosService, public themeService: ThemeService, public dialog: MatDialog) {
  }
  ngOnInit() {
    this.todosService.getAll();
  }
  deleteTodo(todoId: number){
    this.todosService.delete(todoId);
  }

  onAddTodo(){

    const dialogRef = this.dialog.open(AddTodoComponent, {
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(() => {
      this.todosService.todos$.subscribe(data => this.data = data)
    });


  }

}
