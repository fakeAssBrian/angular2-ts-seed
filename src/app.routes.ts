import { NgModuleFactoryLoader } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebpackNgModuleLoader } from './services/async-component-resolver.service';

export const appRoutes: Routes = [
  {path: '', redirectTo: 'todos', pathMatch: 'full'},
  {path: '**', redirectTo: 'not-found', pathMatch: 'full'}
];

export const appRouting = RouterModule.forRoot(appRoutes);

export const appRoutingProviders = [
  // { provide: NgModuleFactoryLoader, useClass: WebpackNgModuleLoader }
];
