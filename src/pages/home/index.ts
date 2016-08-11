import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomePage } from './home.page';
import { TodosFeatureModule } from '../../features/todos';

const homeRoutes: Routes = [
  {path: '', component: HomePage}
];


@NgModule({
  declarations: [HomePage],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes),
    TodosFeatureModule
  ]
})
export class HomeModule {
}

