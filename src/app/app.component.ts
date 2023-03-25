import {Component, OnInit} from '@angular/core';
import {data} from "./model/todo.mock";
import {TodoModel} from "./model/todo.model";
import {TodosService} from "./services/todos.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'todo-frontend';
}
