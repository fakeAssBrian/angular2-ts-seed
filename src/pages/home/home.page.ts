/* tslint:disable component-class-suffix */
import { Component } from '@angular/core';
import { TodoWidgetComponent } from '../../features/todos';

@Component({
  selector: 'home-page',
  directives: [TodoWidgetComponent],
  template: `
    <h1>home page</h1>
    
    <todo-widget></todo-widget>
  `,
  styles: [require('./home.page.scss')]
})
export class HomePage {
}
