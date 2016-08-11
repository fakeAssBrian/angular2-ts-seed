import { NgModuleFactoryLoader } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WebpackNgModuleLoader } from './services';

const appRoutes = [
  {
    path: '',
    loadChildren(compiler) {
      return System
        .import('./pages/home')
        .then(module => compiler.compileModuleAsync(module.HomeModule));
    }
  },
  {
    path: 'asd',
    loadChildren(compiler) {
      return System
        .import('./pages/not-found')
        .then(module => compiler.compileModuleAsync(module.NotFoundModule));
    }
  }
];

export const appRouting = RouterModule.forRoot(appRoutes);

export const appRoutingProviders = [
  { provide: NgModuleFactoryLoader, useClass: WebpackNgModuleLoader }
];
