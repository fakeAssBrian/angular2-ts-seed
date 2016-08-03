import { pageExists } from '../utils';

export default {
  description: 'Add a route',
  prompts: [
    {
      type: 'input',
      name: 'component',
      message: 'Which component should the route show?',
      validate(name) {
        const trimmedName = name.trim();

        return trimmedName.length
          ? (pageExists(name) ? true : `"${name}" page doesn't exist.`)
          : 'The page is required';
      }
    },
    {
      type: 'input',
      name: 'path',
      message: 'Enter the path of the route.',
      default: '/about',
      validate(path) {
        return path.trim().length
          ? true
          : 'path is required';
      }
    }
  ],

  actions() {
    return [{
      type: 'modify',
      path: '../../src/routes.ts',
      pattern: /(\s{\n\s{4}path: '\*\*',)/g,
      templateFile: './route/route.hbs'
    }];
  }
};
