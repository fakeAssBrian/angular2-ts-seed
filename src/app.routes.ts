import { provideRouter, Routes } from '@angular/router';
import { ComponentResolver } from '@angular/core';
import { RuntimeCompiler } from '@angular/compiler';
import { AsyncComponentResolverService } from './services';

export const routes: Routes = [
  {
    path: '',
    component: require('./pages/home/home.page').HomePage
    // component(compiler) {
    //   return System
    //     .import('./pages/home')
    //     .then(module => compiler.resolveComponent(module.HomePage));
    // }
  },
  {
    path: '**',
    component: require('./pages/not-found/not-found.page').NotFoundPage
    // component(compiler) {
    //   return System
    //     .import('./pages/not-found')
    //     .then(module => compiler.resolveComponent(module.NotFoundPage));
    // }
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
