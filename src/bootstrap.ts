import { enableProdMode, PLATFORM_DIRECTIVES } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import { disableDeprecatedForms, provideForms, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { NGB_DIRECTIVES } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { STORE_PROVIDERS } from './store';
import { ROUTER_PROVIDERS } from './routes';
import { SERVICE_PROVIDERS } from './services';
import { PIPE_PROVIDERS } from './pipes';

if (IS_PROD) {
  enableProdMode();
}

bootstrap(AppComponent, [

  /**
   * Set up @ngrx/store related providers.
   */
  ...STORE_PROVIDERS,

  /**
   * Set up router related providers.
   */
  ...ROUTER_PROVIDERS,

  /**
   * Set up general service providers.
   */
  ...SERVICE_PROVIDERS,

  /**
   * Set up pipe providers.
   */
  ...PIPE_PROVIDERS,

  /**
   * Set up common directives.
   */
  {
    provide: PLATFORM_DIRECTIVES,
    multi: true,
    useValue: [ROUTER_DIRECTIVES, REACTIVE_FORM_DIRECTIVES, NGB_DIRECTIVES]
  },

  /**
   * Set up http providers.
   */
  ...HTTP_PROVIDERS,

  /**
   * Set up the new forms api and disable the old one.
   */
  disableDeprecatedForms(),
  provideForms()
]);
