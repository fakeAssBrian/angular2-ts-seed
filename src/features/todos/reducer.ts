import { TodoActions } from './actions';

/**
 * @param {Array<{id: number, title: string, completed: boolean}>} todos
 * @param {{type: string, payload: *}} action
 * @returns {*}
 */
export function todoReducer(todos = [], action) {
  switch (action.type) {

    case TodoActions.LOAD_SUCCESS:
      return action.payload;

    case TodoActions.ADD_SUCCESS:
      return [
        action.payload,
        ...todos
      ];

    case TodoActions.TOGGLE_SUCCESS:
      return todos.map(todo => {
        if (todo.id !== action.payload.id) return todo;

        return Object.assign({}, todo, {completed: !todo.completed});
      });

    case TodoActions.REMOVE_SUCCESS:
      return todos.filter(todo => todo.id !== action.payload.id);

    default:
      return todos;

  }
}
