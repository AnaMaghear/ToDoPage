import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoCardComponent } from './components/todo-card/todo-card.component';
import { MatCardModule} from "@angular/material/card";
import { AppRoutingModule } from './app-routing.module';
import { TodosComponent } from './components/todos/todos.component';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoCardComponent,
    TodosComponent,
    EditTodoComponent,
    NotFoundComponent,
    AddTodoComponent
  ],
    imports: [
        BrowserModule,
        MatCardModule,
        AppRoutingModule,
        ReactiveFormsModule,
        MatDialogModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
