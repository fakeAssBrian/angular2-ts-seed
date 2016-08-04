import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {TodoActions} from '../../actions';
import {TodoSelectors} from '../../selectors';
import {Store} from '@ngrx/store';
import 'rxjs/add/operator/let';

@Component({
  selector: 'home-page',
  template: `
    <h1>home page</h1>
    
    <form [formGroup]="cTF" (ngSubmit)="onSubmit()">
      <div class="form-group" [ngClass]="{'has-danger': cTF.controls.title.dirty && !cTF.controls.title.valid}">
        <input formControlName="title" type="text" class="form-control" placeholder="Todo title">
        <div *ngIf="cTF.controls.title.dirty && !cTF.controls.title.valid">
          <div *ngIf="cTF.controls.title.hasError('required')" class="form-control-feedback">
            Title is required.
          </div>
          <div *ngIf="cTF.controls.title.hasError('minlength')" class="form-control-feedback">
            Title needs to be at least 3 characters long.
          </div>
        </div>
      </div>
      <button type="submit" class="btn btn-primary btn-block">Create todo</button>
    </form>
    
    <br>

    <ul class="list-group">
      <li class="list-group-item" *ngFor="let todo of todos$ | async"
          (click)="toggle(todo)" [ngClass]="{completed: todo.completed}"
      >
        <span>{{todo.title}}</span>
        <button class="close" (click)="remove(todo.id, $event)">×</button>
      </li>
    </ul>
  `,
  styles: [require('./home.page.scss')]
})
export class HomePageComponent implements OnInit {

  /**
   * Create todo form.
   * @type {FormBuilder}
   */
  cTF = null;

  todos$: any;

  constructor(private store: Store<any>, private todoActions: TodoActions,
              private todoSelectors: TodoSelectors, private formBuilder: FormBuilder) {
    this.store = store;
    this.todoActions = todoActions;
    this.todos$ = this.store.let(todoSelectors.getState());
    this.formBuilder = formBuilder;
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.cTF = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  toggle(todo) {
    this.store.dispatch(this.todoActions.toggle(todo));
  }

  remove(todoId, evt) {
    evt.stopPropagation();
    this.store.dispatch(this.todoActions.remove(todoId));
  }

  onSubmit() {
    this.store.dispatch(this.todoActions.addTodo(this.cTF.controls.title.value));

    // there is no way to reset a form yet, wait rc5
    this.createForm();
  }
}
