import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-display',
  standalone: true,
  template: ` <h1>{{ count }}</h1> `,
  styles: [],
})
export class CounterDisplayComponent {
  public count: any;
}
