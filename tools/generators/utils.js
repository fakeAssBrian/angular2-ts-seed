import fs from 'fs';

export function componentExists(component) {
  return fs
      .readdirSync('src/components')
      .indexOf(component.toLowerCase()) >= 0;
}

export function directiveExists(directive) {
  return fs
      .readdirSync('src/directives')
      .indexOf(directive.toLowerCase()) >= 0;
}

export function pipeExists(pipe) {
  return fs
    .readdirSync('src/pipes')
    .some(fileName => fileName.indexOf(pipe.toLowerCase()) >= 0);
}

export function serviceExists(service) {
  return fs
    .readdirSync('src/services')
    .some(fileName => fileName.indexOf(service.toLowerCase()) >= 0);
}

export function pageExists(page) {
  return fs
      .readdirSync('src/pages')
      .indexOf(page.toLowerCase()) >= 0;
}

export function entityExists(entity) {
  const actions = fs.readdirSync('src/actions');
  const reducers = fs.readdirSync('src/reducers');
  const selectors = fs.readdirSync('src/selectors');

  return [...actions, ...reducers, ...selectors]
    .some(fileName => fileName.indexOf(entity.toLowerCase()) >= 0);
}
