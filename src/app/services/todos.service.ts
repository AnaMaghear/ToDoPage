import { Injectable } from '@angular/core';
import {TodoModel} from "../model/todo.model";
import {data} from "../model/todo.mock";
import {BehaviorSubject, delay, Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private todosSubject = new BehaviorSubject<TodoModel[]>([]);
  public todos$: Observable<TodoModel[]> = this.todosSubject.asObservable();
  private todos = data;

  getAll(): void{
    this.todosSubject.next(this.todos);
  }

  delete(todoId: number){
    this.todos = this.todos.filter(todo => todo.id != todoId);
    this.todosSubject.next(this.todos);
  }

  addToDo(todo: TodoModel){
    this.todos.push(todo);
    this.todosSubject.next(this.todos);
  }

  newId(){
    return this.todos.length + 1;
  }

  getTodoById(todoId: number){
    let todo = this.todos.find((todo) => todo.id === todoId);
    if(todo != null)
      return todo;
    else throw Error("This id doesn't exist");
  }

  replaceTodo(todoId: number, title: string, description: string, dueDate: Date){
    let todo = this.getTodoById(todoId);
    if(todo) {
      if(title != "")
        todo.title = title;
      if(description != "")
        todo.description = description;
      todo.dueDate = dueDate;
    }
    this.todosSubject.next(this.todos);
  }

}
