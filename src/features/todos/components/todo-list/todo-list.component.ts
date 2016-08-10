import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { mergeEffects } from '@ngrx/effects';
import 'rxjs/add/operator/let';
import { TodoActions } from '../../actions';
import { TodoSelectors } from '../../selectors';
import { TodoEffects } from '../../effects';

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
              // ALL FUCKING COMPONENTS NEED TODO EFFECTS BUT ONLY NEEDED TO PROVIDE ONCE
              private todoEffects: TodoEffects,
              private todoActions: TodoActions,
              private todoSelectors: TodoSelectors) {
    mergeEffects(todoEffects).subscribe(store);
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
