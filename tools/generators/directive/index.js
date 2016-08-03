import { directiveExists } from '../utils';

export default {
  description: 'Add a directive',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'tooltip',
      validate(name) {
        const trimmedName = name.trim();

        return trimmedName.length
          ? (directiveExists(trimmedName) ? 'A directive with this name already exists' : true)
          : 'The name is required';
      }
    },
    {
      type: 'input',
      name: 'selector',
      message: 'What should the selector be?',
      default: '[nsa-tooltip]',
      validate(selector) {
        return selector.trim().length
          ? true
          : 'The selector is required';
      }
    }
  ],
  actions(data) {
    return [{
      type: 'add',
      path: '../../src/directives/{{dashCase name}}/{{dashCase name}}.directive.ts',
      templateFile: './directive/directive.hbs',
      abortOnFail: true
    }];
  }
};
