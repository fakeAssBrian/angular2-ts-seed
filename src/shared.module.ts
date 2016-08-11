import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

/**
 * Shared module
 * https://angular.io/docs/ts/latest/guide/ngmodule.html#!#_sharedmodule_
 */
@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
    NgbModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [/*UserService*/]
    };
  }
}
