import { NgModule } from '@angular/core';
import { NotFoundPage } from './not-found.page';
import { SharedModule } from '../../shared.module';
import { RouterModule } from '@angular/router';

const notFoundRoutes = [
  {path: '', component: NotFoundPage}
];

@NgModule({
  declarations: [NotFoundPage],
  imports: [
    SharedModule,
    RouterModule.forChild(notFoundRoutes),
  ]
})
export class NotFoundModule {
}
