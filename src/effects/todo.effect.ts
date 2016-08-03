/* tslint:disable member-ordering */
import {Injectable} from '@angular/core';
import {Effect, StateUpdates} from '@ngrx/effects';
import { TodoActions } from '../actions';
import { TodoService } from '../services';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TodoEffects {
  constructor(private updates$:StateUpdates<any>, private todoActions:TodoActions, private todoService: TodoService) {
  }

  @Effect() loadTodosOnInit$ = Observable.of(this.todoActions.loadTodos());

  @Effect() loadTodos$ = this.updates$
    .whenAction(TodoActions.LOAD)
    .switchMap(update =>
      this.todoService.getTodos()
      // If successful, dispatch success action with result
        .map(todos => this.todoActions.loadTodosSuccess(todos))
        // If request fails, dispatch failed action
        .catch(() => Observable.of(this.todoActions.loadTodosFail('error :P')))
    );
}
