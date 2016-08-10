import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponents } from './components/header';
import { FooterComponent } from './components/footer';
import { STORE_PROVIDERS } from './app.store';
// import {} from './directives';
import { HomePage } from './pages/home';
// import {} from './pipes';
import { SERVICE_PROVIDERS } from './services';
// import {} from '';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponents,
    FooterComponent,
    HomePage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    NgbModule
  ],
  providers: [
    SERVICE_PROVIDERS,
    STORE_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
