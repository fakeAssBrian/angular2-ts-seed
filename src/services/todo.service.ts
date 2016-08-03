import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class TodoService {

  http:Http;
  url = 'fixtures/todos.json';

  constructor(http:Http) {
    this.http = http;
  }

  getTodos() {
    return this.http
      .get(this.url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  extractData(res) {
    const body = res.json();
    return body.data || {};
  }

  handleError(err) {
    const errMsg = err.message
      ? err.message
      : err.status ? `${err.status} - ${err.statusText}` : 'Server error';

    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
