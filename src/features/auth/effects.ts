/* tslint:disable member-ordering */
import { Injectable } from '@angular/core';
import { Effect, StateUpdates } from '@ngrx/effects';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';

@Injectable()
export class DummyEffects {
  constructor(private updates$: StateUpdates<any>) {
  }

  @Effect() someEffect$2 = this.updates$
    .whenAction('[DummyEffects]')
    .do(params => console.log(params));

}
