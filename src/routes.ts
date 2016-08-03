import { provideRouter } from '@angular/router';
import { ComponentResolver } from '@angular/core';
import { RuntimeCompiler } from '@angular/compiler';
import { AsyncComponentResolverService } from './services';

const routes = [
  {
    path: '',
    component(compiler) {
      return System
        .import('./pages/home/home.page')
        .then(module => compiler.resolveComponent(module.HomePageComponent));
    }
  },
  {
    path: '**',
    component(compiler) {
      return System
        .import('./pages/not-found/not-found.page')
        .then(module => compiler.resolveComponent(module.NotFoundPageComponent));
    }
  }
];

export const ROUTER_PROVIDERS = [

  /**
   * provideRouter sets up all of the providers for @angular/router. It accepts
   * an array of routes and a location strategy. By default, it will use `PathLocationStrategy`.
   */
  provideRouter(routes),

  /**
   * Provide a custom ComponentResolver. AsyncComponentResolverService responsible for lazy
   * loading routes.
   */
  {
    provide: ComponentResolver,
    useFactory: (compiler) => new AsyncComponentResolverService(compiler),
    deps: [RuntimeCompiler]
  }
];
