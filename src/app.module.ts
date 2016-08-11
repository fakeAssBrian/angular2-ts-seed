import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponents } from './components/header';
import { FooterComponent } from './components/footer';
import { STORE_PROVIDERS } from './app.store';
import { SERVICE_PROVIDERS } from './services';
import { appRouting, appRoutingProviders } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponents,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    appRouting
  ],
  providers: [
    SERVICE_PROVIDERS,
    STORE_PROVIDERS,
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
