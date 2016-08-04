/* tslint:disable member-ordering */
import {Injectable} from '@angular/core';
import {createAction} from 'redux-actions';

@Injectable()
export class TodoActions {

  static LOAD = '[Todo] Load todos';
  loadTodos = createAction(TodoActions.LOAD);

  static LOAD_SUCCESS = '[Todo] Load success';
  loadTodosSuccess = createAction(TodoActions.LOAD_SUCCESS);

  static LOAD_FAIL = '[Todo] Load fail';
  loadTodosFail = createAction(TodoActions.LOAD_FAIL);

  static ADD = '[Todo] Add';
  addTodo = createAction(TodoActions.ADD);

  static ADD_SUCCESS = '[Todo] Add success';
  addTodoSuccess = createAction(TodoActions.ADD_SUCCESS);

  static ADD_FAIL = '[Todo] Add fail';
  addTodoFail = createAction(TodoActions.ADD_FAIL);

  static TOGGLE = '[Todo] Toggle';
  toggle = createAction(TodoActions.TOGGLE);

  static TOGGLE_SUCCESS = '[Todo] Toggle success';
  toggleSuccess = createAction(TodoActions.TOGGLE_SUCCESS);

  static TOGGLE_FAIL = '[Todo] Toggle fail';
  toggleFail = createAction(TodoActions.TOGGLE_FAIL);

  static REMOVE = '[Todo] Remove';
  remove = createAction(TodoActions.REMOVE);

  static REMOVE_SUCCESS = '[Todo] Remove success';
  removeSuccess = createAction(TodoActions.REMOVE_SUCCESS);

  static REMOVE_FAIL = '[Todo] Remove fail';
  removeFail = createAction(TodoActions.REMOVE_FAIL);

}
