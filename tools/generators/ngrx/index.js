import { entityExists } from '../utils';

export default {
  description: 'Create action, reducer, selector for ngrx.',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your entity?',
      default: 'todo2',
      validate(name) {
        const trimmedName = name.trim();

        return trimmedName.length
          ? (entityExists(trimmedName) ? 'The entity name already exists' : true)
          : 'The name is required';
      }
    }
  ],
  actions(data) {
    return [
      // Actions
      {
        type: 'add',
        path: '../../src/actions/{{dashCase name}}.action.ts',
        templateFile: './ngrx/action.hbs',
        abortOnFail: true
      },
      {
        type: 'modify',
        path: '../../src/actions/index.ts',
        pattern: /(\/\/ \$1)/gi,
        template: 'import { {{properCase name}}Actions } from \'./{{dashCase name}}.action.ts\';\r\n$1'
      },
      {
        type: 'modify',
        path: '../../src/actions/index.ts',
        pattern: /(\/\/ \$[2-3])/gi,
        template: ', {{properCase name}}Actions\r\n$1'
      },
      // Reducers
      {
        type: 'add',
        path: '../../src/reducers/{{dashCase name}}.reducer.ts',
        templateFile: './ngrx/reducer.hbs',
        abortOnFail: true
      },
      {
        type: 'modify',
        path: '../../src/reducers/index.ts',
        pattern: /(\/\/ \$1)/gi,
        template: 'import { {{camelCase name}}Reducer } from \'./{{dashCase name}}.reducer.ts\';\r\n$1'
      },
      {
        type: 'modify',
        path: '../../src/reducers/index.ts',
        pattern: /(\/\/ \$2)/gi,
        template: ', {{camelCase name}}s: {{camelCase name}}Reducer\r\n$1'
      },
      // Selectors
      {
        type: 'add',
        path: '../../src/selectors/{{dashCase name}}.selector.ts',
        templateFile: './ngrx/selector.hbs',
        abortOnFail: true
      },
      {
        type: 'modify',
        path: '../../src/selectors/index.ts',
        pattern: /(\/\/ \$1)/gi,
        template: 'import { {{properCase name}}Selectors } from \'./{{dashCase name}}.selector.ts\';\r\n$1'
      },
      {
        type: 'modify',
        path: '../../src/selectors/index.ts',
        pattern: /(\/\/ \$[2-3])/gi,
        template: ', {{properCase name}}Selectors\r\n$1'
      }
    ];
  }
};
