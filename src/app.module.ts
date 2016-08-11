import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponents } from './components/header';
import { FooterComponent } from './components/footer';
import { STORE_PROVIDERS } from './app.store';
import { SERVICE_PROVIDERS } from './services';


/**
 * PAGES
 */
import { appRouting, appRoutingProviders } from './app.routes';
import { HomeModule } from './pages/home';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponents,
    FooterComponent
  ],
  // DIRECTIVES, COMPONENTS, PIPES WINT BE VISIBLE IN ALL IMPORTED MODULES
  imports: [
    BrowserModule,
    NgbModule,
    appRouting,
    HomeModule
  ],
  // PROVIDERS WILL BE VISIBLE IN ALL IMPORTED MODULES
  providers: [
    SERVICE_PROVIDERS,
    STORE_PROVIDERS,
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
