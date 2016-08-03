import { Injectable } from '@angular/core';

@Injectable()
export class AsyncComponentResolverService {

  /**
   * @type {RuntimeCompiler}
   */
  compiler = null;

  constructor(compiler) {
    this.compiler = compiler;
  }

  /**
   * @param {Function} component
   * @returns {*}
   */
  resolveComponent(component) {
    const isAsyncComponent = component.name.endsWith('component') && component.length;

    if (isAsyncComponent) {
      return Promise.resolve(
        component(this.compiler)
          // .catch(err => console.error('Dynamic page loading failed', err))
      );
    }

    try {
      return this.compiler.resolveComponent(component);
    } catch (err) {
      console.error('Synchronously loaded component\'s class name must end with "Component"');
      throw err;
    }
  }

}
