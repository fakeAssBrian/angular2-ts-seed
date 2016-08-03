import { Component } from '@angular/core';

@Component({
  selector: 'nsa-footer',
  template: `
    <div class="container">
      <span>Place sticky footer content here.</span>
    </div>
  `,
  styles: [require('./footer.component.scss')]
})
export class FooterComponent {
}
