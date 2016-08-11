import { NgModule } from '@angular/core';
import { NotFoundPage } from './not-found.page';
import { SharedModule } from '../../shared.module';
import { RouterModule, Routes } from '@angular/router';

const notFoundRoutes: Routes = [
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
