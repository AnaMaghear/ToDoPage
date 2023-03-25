import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {TodosComponent} from "./components/todos/todos.component";
import {EditTodoComponent} from "./components/edit-todo/edit-todo.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";

const routes: Routes =[
  {path: 'todos', component: TodosComponent},
  {path: 'todos/:id', component: EditTodoComponent},
  {path: '', redirectTo: '/todos', pathMatch: 'full'},
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo: "/not-found"}
]

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule { }
