/* tslint:disable member-ordering */
import {Injectable} from '@angular/core';
import {Effect, StateUpdates, toPayload} from '@ngrx/effects';
import {TodoActions} from '../actions';
import {TodoService} from '../services';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TodoEffects {
  constructor(private updates$: StateUpdates<any>, private todoActions: TodoActions, private todoService: TodoService) {
  }

  @Effect() loadTodosOnInit$ = Observable.of(this.todoActions.loadTodos());

  @Effect() loadTodos$ = this.updates$
    .whenAction(TodoActions.LOAD)
    .switchMap(update =>
      this.todoService.getTodos()
        .map(todos => this.todoActions.loadTodosSuccess(todos))
        .catch(() => Observable.of(this.todoActions.loadTodosFail('error :P')))
    );

  @Effect() addTodo$ = this.updates$
    .whenAction(TodoActions.ADD)
    .map(toPayload)
    .switchMap(title =>
      this.todoService.addTodo(title)
        .map(todo => this.todoActions.addTodoSuccess(todo))
        .catch(() => Observable.of(this.todoActions.addTodoFail('error :P')))
    );

  @Effect() toggleTodo$ = this.updates$
    .whenAction(TodoActions.TOGGLE)
    .map(toPayload)
    .switchMap(todo =>
      this.todoService.toggleTodo(todo)
        .map(todo => this.todoActions.toggleSuccess(todo))
        .catch(() => Observable.of(this.todoActions.toggleFail('error :P')))
    );

  @Effect() removeTodo$ = this.updates$
    .whenAction(TodoActions.REMOVE)
    .map(toPayload)
    .switchMap(todoId =>
      this.todoService.removeTodo(todoId)
        .map(todoId => this.todoActions.removeSuccess(todoId))
        .catch(() => Observable.of(this.todoActions.removeFail('error :P')))
    );
}
