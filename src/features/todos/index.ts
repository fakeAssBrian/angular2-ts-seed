import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TodoWidgetComponent } from './components/todo-widget';
import { CreateTodoComponent } from './components/create-todo';
import { TodoListComponent } from './components/todo-list';
import { TodoActions } from './actions';
import { TodoEffects } from './effects';
import { TodoService } from './model';
import { TodoSelectors } from './selectors';

/**
 * Export todoReducer for store.
 * Later on reducers needs to be injected in the store dynamically.
 */
export { todoReducer } from './reducer';

@NgModule({
  declarations: [TodoWidgetComponent, CreateTodoComponent, TodoListComponent],
  imports: [CommonModule, ReactiveFormsModule, HttpModule],
  providers: [TodoActions, TodoEffects, TodoService, TodoSelectors],
  exports: [TodoWidgetComponent]
})
export class TodosFeatureModule {
}

