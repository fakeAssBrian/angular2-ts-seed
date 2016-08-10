import { Component } from '@angular/core';
import { CreateTodoComponent } from '../create-todo';
import { TodoListComponent } from '../todo-list';
import { TodoActions } from '../../actions';
import { TodoSelectors } from '../../selectors';
import { TodoEffects } from '../../effects';
import { TodoService } from '../../model';

@Component({
  selector: 'todo-widget',
  // TODO(tsm): use NgModule
  providers: [TodoEffects, TodoActions, TodoSelectors, TodoService],
  directives: [CreateTodoComponent, TodoListComponent],
  template: `
    <create-todo></create-todo>
    
    <br>
    
    <todo-list></todo-list>
  `,
  styles: [require('./todo-widget.component.scss')]
})
export class TodoWidgetComponent {
}
