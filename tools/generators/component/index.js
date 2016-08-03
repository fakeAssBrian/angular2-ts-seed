import { componentExists } from '../utils';

export default {
  description: 'Add a component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'button',
      validate(name) {
        const trimmedName = name.trim();

        return trimmedName.length
          ? (componentExists(trimmedName) ? 'A component with this name already exists' : true)
          : 'The name is required';
      }
    },
    {
      type: 'input',
      name: 'selector',
      message: 'What should the selector be?',
      default: 'nsa-button',
      validate(selector) {
        return selector.trim().length
          ? true
          : 'The selector is required';
      }
    },
    {
      type: 'confirm',
      name: 'wantCSS',
      default: true,
      message: 'Does it have styling?'
    }
  ],
  actions(data) {
    const actions = [{
      type: 'add',
      path: '../../src/components/{{dashCase name}}/{{dashCase name}}.component.ts',
      templateFile: './component/component.hbs',
      abortOnFail: true
    }];

    // If they want a CSS file, add styles.css
    if (data.wantCSS) {
      actions.push({
        type: 'add',
        path: '../../src/components/{{dashCase name}}/{{dashCase name}}.component.scss',
        templateFile: './component/stylesheet.hbs',
        abortOnFail: true
      });
    }

    return actions;
  }
};
