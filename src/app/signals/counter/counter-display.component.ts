import { Component, input } from '@angular/core';

@Component({
  selector: 'app-counter-display',
  standalone: true,
  template: ` <h1>{{ count() }}</h1> `,
  styles: [],
})
export class CounterDisplayComponent {
  // @Input({ required: true }) public count!: Signal<number>;
  public count = input.required<number>();
}
