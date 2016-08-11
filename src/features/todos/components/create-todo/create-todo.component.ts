import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TodoActions } from '../../actions';

@Component({
  selector: 'create-todo',
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <div class="form-group" [ngClass]="{'has-danger': form.controls.title.dirty && !form.controls.title.valid}">
        <input formControlName="title" type="text" class="form-control" placeholder="Todo title">
        <div *ngIf="form.controls.title.dirty && !form.controls.title.valid">
          <div *ngIf="form.controls.title.hasError('required')" class="form-control-feedback">
            Title is required.
          </div>
          <div *ngIf="form.controls.title.hasError('minlength')" class="form-control-feedback">
            Title needs to be at least 3 characters long.
          </div>
        </div>
      </div>
      <button type="submit" class="btn btn-primary btn-block">Create todo</button>
    </form>
  `,
  styles: [require('./create-todo.component.scss')]
})
export class CreateTodoComponent implements OnInit {

  form: any;

  constructor(private store: Store<any>,
              private todoActions: TodoActions,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  onSubmit() {
    this.store.dispatch(this.todoActions.addTodo(this.form.controls.title.value));

    // TODO(tsm): there is no way to reset a form yet, wait rc5
    this.createForm();
  }
}
