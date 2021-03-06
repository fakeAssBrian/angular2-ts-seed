import { Component } from '@angular/core';

import './styles/main.scss';

@Component({
  selector: 'nsa-app',
  template: `

    <!-- Header -->
    <nsa-header
      class="pos-f-t"
      [navbarMenuItems]="navbarMenuItems">
      <!--[navbarBrand]="{ title: 'ng2-es-seed', route: '/' }"-->

      <template navbarBrand>
        <a routerLink="/" class="navbar-brand">
          <img class="logo" src="static/images/angular-logo.png" alt="logo">
        </a>
      </template>

    </nsa-header>

    <!-- Page content -->
    <div class="main-container container">

      <router-outlet></router-outlet>

    </div>

    <!-- Footer -->
    <nsa-footer class="footer"></nsa-footer>

    <ngrx-store-log-monitor *ngIf="IS_DEV" toggleCommand="ctrl-t"></ngrx-store-log-monitor>
  `,
  styles: [require('./app.component.scss')]
})
export class AppComponent {
  IS_DEV = IS_DEV;

  navbarMenuItems = [{
    title: 'Home',
    route: '/'
  }, {
    title: '404',
    route: '/asd'
  }];
}
