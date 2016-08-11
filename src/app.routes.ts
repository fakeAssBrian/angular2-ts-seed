import { NgModuleFactoryLoader } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebpackNgModuleLoader } from './services';

// export const appRoutes: Routes = [
//   {path: '', redirectTo: 'todos', pathMatch: 'full'},
//   {path: '**', redirectTo: 'not-found', pathMatch: 'full'}
// ];

export const appRoutes = [
  {path: '', redirectTo: 'todos', pathMatch: 'full'},
  {
    path: 'asd',
    // Route interface modified at `./node_modules/@angular/router/src/config.d.ts`
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
