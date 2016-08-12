import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared.module';

import { AppComponent } from './app.component';
import { HeaderComponents } from './components/header';
import { FooterComponent } from './components/footer';
import { STORE_PROVIDERS } from './app.store';
import { SERVICE_PROVIDERS } from './services';
import { StoreLogMonitorComponent } from '@ngrx/store-log-monitor';
import { appRouting, appRoutingProviders } from './app.routes';

/**
 * NgModule
 * https://angular.io/docs/ts/latest/guide/ngmodule.html#!#-ngmodule-properties
 */
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponents,
    FooterComponent,
    IS_DEV ? StoreLogMonitorComponent : []
  ],
  imports: [
    BrowserModule,
    SharedModule.forRoot(),
    appRouting
  ],
  providers: [
    SERVICE_PROVIDERS,
    STORE_PROVIDERS,
    appRoutingProviders
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
}
