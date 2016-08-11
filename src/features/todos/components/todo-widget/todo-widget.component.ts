import { Component, OnDestroy } from '@angular/core';
import { TodoEffects } from '../../effects';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
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
export class TodoWidgetComponent implements OnDestroy {
  subscription: Subscription;

  constructor(private todoEffects: TodoEffects, private store: Store<any>) {
    this.injectEffects();
  }

  injectEffects() {
    this.subscription = mergeEffects(this.todoEffects).subscribe(this.store);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
