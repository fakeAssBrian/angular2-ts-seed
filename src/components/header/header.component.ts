import { Directive, TemplateRef, ContentChild, Component, ElementRef, Renderer, Input, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';

@Directive({ selector: 'template[navbarBrand]' })
class NavbarBrandDirective {
  templateRef: TemplateRef<any>;

  constructor(templateRef: TemplateRef<any>) {
    this.templateRef = templateRef;
  }
}

@Component({
  selector: 'nsa-header',
  template: `
      <div class="collapse hidden-sm-up" [ngbCollapse]="isCollapsed">
        <div class="container bg-inverse p-a-1">
          <ul class="nav navbar-nav">
            <li *ngFor="let navbarMenuItem of navbarMenuItems; let isFirst = first" class="nav-item"
                [routerLinkActive]="navItemActiveCls"
                [routerLinkActiveOptions]="isFirst ? {exact: true} : {exact: false}"
            >
              <a class="nav-link" [routerLink]="navbarMenuItem.route">{{navbarMenuItem.title}}</a>
            </li>
          </ul>
        </div>
      </div>
      <nav class="navbar navbar-dark navbar-fixed-top">
        <div class="container">
          <button class="navbar-toggler hidden-sm-up" type="button" (click)="collapseNavbar(!isCollapsed)">☰</button>
          <div class="collapse navbar-toggleable-xs">

            <a *ngIf="navbarBrand" class="navbar-brand" [routerLink]="navbarBrand.route">{{navbarBrand.title}}</a>

            <template [ngTemplateOutlet]="navbarBrandTmpl?.templateRef"></template>

            <ul class="nav navbar-nav">
              <li *ngFor="let navbarMenuItem of navbarMenuItems; let isFirst = first" class="nav-item"
                  [routerLinkActive]="navItemActiveCls"
                  [routerLinkActiveOptions]="isFirst ? {exact: true} : {exact: false}"
              >
                <a class="nav-link" [routerLink]="navbarMenuItem.route">{{navbarMenuItem.title}}</a>
              </li>
            </ul>

          </div>
        </div>
      </nav>
  `,
  styles: [require('./header.component.scss')]
})
class HeaderComponent implements OnInit, OnDestroy {

  /**
   * @type {{route: string, title: string}}
   */
  @Input() navbarBrand;

  /**
   * @type {{route: string, title: string}}
   */
  @Input() navbarMenuItems;

  /**
   * @type {NavbarBrandDirective}
   */
  @ContentChild(NavbarBrandDirective) navbarBrandTmpl;

  /**
   * @type {string}
   */
  navItemActiveCls = 'active';

  /**
   * @type {boolean}
   */
  isCollapsed = true;

  /**
   * @type {Router}
   */
  router = null;

  /**
   * @type {Renderer}
   */
  renderer = null;

  /**
   * @type {Element}
   */
  rootEl = null;

  /**
   * @type {Function}
   */
  removeOnDocumentClickListener = null;

  /**
   * @type {Observable}
   */
  onNavigationEnd$ = null;

  /**
   * @param {Router} router
   * @param {Renderer} renderer
   * @param {ElementRef} el
   */
  constructor(renderer: Renderer, el: ElementRef, router:Router) {
    this.renderer = renderer;
    this.rootEl = el.nativeElement;
    this.router = router;
  }

  /**
   * Toggles navbar collapsed state.
   */
  collapseNavbar(state) {
    this.isCollapsed = state;
  }

  /**
   * Lifecycle hook of angular2.
   */
  ngOnInit() {
    this.removeOnDocumentClickListener = this.renderer
      .listenGlobal('document', 'click', this.onDocumentClick.bind(this));

    this.onNavigationEnd$ = this.router.events
      .filter(evt => evt instanceof NavigationEnd)
      .subscribe(() => this.collapseNavbar(true));
  }

  /**
   * Document click handler.
   * @param {MouseEvent} evt
   */
  onDocumentClick(evt) {
    const isOffClick = !this.rootEl.contains(evt.target);

    if (isOffClick && !this.isCollapsed) {
      this.collapseNavbar(!this.isCollapsed);
    }
  }

  /**
   * Lifecycle hook of angular2.
   */
  ngOnDestroy() {
    this.removeOnDocumentClickListener();
    this.onNavigationEnd$.unsubscribe();
  }

}

export const HeaderComponents = [HeaderComponent, NavbarBrandDirective];
