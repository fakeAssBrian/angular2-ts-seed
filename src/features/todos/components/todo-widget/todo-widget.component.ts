import { Component } from '@angular/core';
import { TodoEffects } from '../../effects';
import { Store } from '@ngrx/store';
import { mergeEffects } from '@ngrx/effects';

@Component({
  selector: 'todo-widget',
  template: `
    <create-todo></create-todo>
    
    <br>
    
    <todo-list></todo-list>
  `,
  styles: [require('./todo-widget.component.scss')]
})
export class TodoWidgetComponent {
  constructor(private todoEffects: TodoEffects, private store: Store<any>) {
    this.injectEffects();
  }

  injectEffects() {
    mergeEffects(this.todoEffects).subscribe(this.store);
  }
}
