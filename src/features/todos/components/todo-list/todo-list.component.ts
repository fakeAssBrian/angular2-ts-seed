import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import 'rxjs/add/operator/let';
import { TodoActions } from '../../actions';
import { TodoSelectors } from '../../selectors';

@Component({
  selector: 'todo-list',
  template: `
    <ul class="list-group">
      <li 
        class="list-group-item" *ngFor="let todo of todos$ | async"
        (click)="toggle(todo)" [ngClass]="{completed: todo.completed}">
        <span>{{todo.title}}</span>
        <button class="close" (click)="remove(todo.id, $event)">×</button>
      </li>
    </ul>
  `,
  styles: [require('./todo-list.component.scss')]
})
export class TodoListComponent {

  todos$: any;

  constructor(private store: Store<any>,
              private todoActions: TodoActions,
              private todoSelectors: TodoSelectors) {
    this.todos$ = this.store.let(todoSelectors.getState());
  }

  toggle(todo) {
    this.store.dispatch(this.todoActions.toggle(todo));
  }

  remove(todoId, evt) {
    evt.stopPropagation();
    this.store.dispatch(this.todoActions.remove(todoId));
  }
}
