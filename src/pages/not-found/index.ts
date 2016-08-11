import { NgModule } from '@angular/core';
import { NotFoundPage } from './not-found.page';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

const notFoundRoutes = [
  {path: 'not-found', component: NotFoundPage}
];

@NgModule({
  declarations: [NotFoundPage],
  imports: [
    CommonModule,
    RouterModule.forChild(notFoundRoutes),
  ]
})
export class NotFoundModule {
}
