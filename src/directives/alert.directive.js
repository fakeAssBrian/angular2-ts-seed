import { Component, Directive, TemplateRef, ViewContainerRef, Injector,
  ComponentFactoryResolver, Renderer } from '@angular/core';

@Component({
  selector: 'alert',
  template: `
    <div class="alert alert-success" role="alert">
      <ng-content></ng-content>
    </div>
  `
})
export class AlertComponent {
}

@Directive({ selector: 'template[alert]' })
export class AlertDirective {

  constructor(
    templateRef: TemplateRef,
    viewContainerRef: ViewContainerRef,
    injector: Injector,
    componentFactoryResolver: ComponentFactoryResolver,
    renderer: Renderer
  ) {
    this.templateRef = templateRef;
    this.viewContainerRef = viewContainerRef;
    this.injector = injector;
    this.componentFactoryResolver = componentFactoryResolver;
    this.renderer = renderer;
  }

  ngOnInit() {
    this._windowFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
    const nodes = this.getContentNodes(this.templateRef);
    this._windowRef = this.viewContainerRef.createComponent(this._windowFactory, 0, this.injector, nodes);
    console.log('This is your AlertComponent instance: ', this._windowRef.instance);
  }

  getContentNodes(content) {
    if (!content) {
      return [];
    } else if (content instanceof TemplateRef) {
      return [this.viewContainerRef.createEmbeddedView(content).rootNodes];
    } else {
      return [[this.renderer.createText(null, `${content}`)]];
    }
  }
}


/*
Gist: https://gist.github.com/tsm91/d9d65e8c688a7ac526e25602a9a086db

Usage:

@Component({
  selector: 'home-page',
  directives: [AlertComponent, AlertDirective],
  precompile: [AlertComponent],
  template: `
    <div>
      <p *ngFor="let alert of alerts">
        <template alert>{{ alert }}</template>
      </p>

      <button class="btn btn-primary" (click)="addAlert()">Add Alert</button>
    </div>
  `
})
export class HomePageComponent {
  alerts = [];

  addAlert() {
    this.alerts.push('This is a dynamically created alert component.');
  }
}
*/
