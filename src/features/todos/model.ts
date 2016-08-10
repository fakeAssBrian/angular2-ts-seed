import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { TodoEntity as Todo } from './entities';
import { random } from 'lodash';
import { ConfigService } from '../../services';

@Injectable()
export class TodoService {

  url = this.configService.apiUrl + '/todos';

  constructor(private http: Http, private configService: ConfigService) {
  }

  getTodos(): Observable<Todo[]> {
    const params: URLSearchParams = new URLSearchParams();
    params.set('_sort', 'createdAt');
    params.set('_order', 'DESC');

    return this.http
      .get(this.url, {search: params})
      .map(res => res.json())
      .catch(this.handleError);
  }

  addTodo(title: string): Observable<Todo> {
    let body = JSON.stringify({
      title,
      completed: false,
      userId: random(0, 9)
    });
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this.http.post(this.url, body, options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  toggleTodo(todo): Observable<Todo> {
    let body = JSON.stringify({completed: !todo.completed});
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this.http.patch(`${this.url}/${todo.id}`, body, options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  removeTodo(todoId: number): Observable<Todo> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this.http.delete(`${this.url}/${todoId}`, options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  handleError(err: any) {
    const errMsg = err.message
      ? err.message
      : err.status ? `${err.status} - ${err.statusText}` : 'Server error';

    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
