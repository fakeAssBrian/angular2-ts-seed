import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { TodosFeatureModule } from '../../features/todos';

const homeRoutes = [
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

