/* tslint:disable member-ordering */
import { Injectable } from '@angular/core';


let id = 1;

@Injectable()
export class TodoActions {

  static LOAD = '[Todo] Load todos';
  loadTodos() {
    return {
      type: TodoActions.LOAD
    };
  }

  static LOAD_SUCCESS = '[Todo] Load todos success';
  loadTodosSuccess(todos) {
    return {
      type: TodoActions.LOAD_SUCCESS,
      payload: todos
    };
  }

  static LOAD_FAIL = '[Todo] Load todos fail';
  loadTodosFail(err) {
    return {
      type: TodoActions.LOAD_FAIL,
      payload: err
    };
  }

  static ADD = '[Todo] Add';
  add(title) {
    return {
      type: TodoActions.ADD,
      payload: {
        id: ++id,
        title,
        completed: false
      }
    };
  }

  static TOGGLE = '[Todo] Toggle';
  toggle(todoId) {
    return {
      type: TodoActions.TOGGLE,
      payload: todoId
    };
  }

  static REMOVE = '[Todo] Remove';
  remove(todoId) {
    return {
      type: TodoActions.REMOVE,
      payload: todoId
    };
  }

}
