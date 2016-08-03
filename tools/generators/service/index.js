import { serviceExists } from '../utils';

export default {
  description: 'Add a service',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'todo',
      validate(name) {
        const trimmedName = name.trim();

        return trimmedName.length
          ? (serviceExists(trimmedName) ? 'A service with this name already exists' : true)
          : 'The name is required';
      }
    }
  ],
  actions() {
    return [
      {
        type: 'add',
        path: '../../src/services/{{dashCase name}}.service.ts',
        templateFile: './service/service.hbs',
        abortOnFail: true
      },
      {
        type: 'modify',
        path: '../../src/services/index.ts',
        pattern: /(\/\/ \$1)/gi,
        template: 'import { {{properCase name}}Service } from \'./{{dashCase name}}.service\';\r\n$1'
      },
      {
        type: 'modify',
        path: '../../src/services/index.ts',
        pattern: /(\/\/ \$[2-3])/gi,
        template: ', {{properCase name}}Service\r\n$1'
      }
    ];
  }
};
