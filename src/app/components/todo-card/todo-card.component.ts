import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TodoModel} from "../../model/todo.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent {
  @Input() todo!: TodoModel;
  @Output() deleteClicked = new EventEmitter<number>();

  constructor(private route: ActivatedRoute, private router: Router) {
  }
  sendDeleteClicked(){
    this.deleteClicked.emit(this.todo?.id);
  }

  onEdit(){
    this.router.navigate([this.todo.id], {relativeTo: this.route})
  }
}
