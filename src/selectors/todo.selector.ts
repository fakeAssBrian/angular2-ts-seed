import { Injectable } from '@angular/core';

@Injectable()
export class TodoSelectors {

  getState() {
    return state$ => state$
      .select(s => s.todos);
  }

}
