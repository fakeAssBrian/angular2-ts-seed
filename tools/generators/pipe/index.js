import { pipeExists } from '../utils';

export default {
  description: 'Add a pipe',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'capitalize',
      validate(name) {
        const trimmedName = name.trim();

        return trimmedName.length
          ? (pipeExists(trimmedName) ? 'A pipe with this name already exists' : true)
          : 'The name is required';
      }
    }
  ],
  actions() {
    return [
      {
        type: 'add',
        path: '../../src/pipes/{{dashCase name}}.pipe.ts',
        templateFile: './pipe/pipe.hbs',
        abortOnFail: true
      },
      {
        type: 'modify',
        path: '../../src/pipes/index.ts',
        pattern: /(\/\/ \$1)/gi,
        template: 'import { {{properCase name}}Pipe } from \'./{{dashCase name}}.pipe.ts\';\r\n$1'
      },
      {
        type: 'modify',
        path: '../../src/pipes/index.ts',
        pattern: /(\/\/ \$[2-3])/gi,
        template: ', {{properCase name}}Pipe\r\n$1'
      }
    ];
  }
};
