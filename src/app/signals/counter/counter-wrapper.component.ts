import { Component } from '@angular/core';
import { CounterDisplayComponent } from './counter-display.component';
import { IncrementButtonComponent } from './increment-button.component';

@Component({
  selector: 'app-counter-wrapper',
  standalone: true,
  imports: [CounterDisplayComponent, IncrementButtonComponent],
  template: `
    <div>
      <app-counter-display [count]="count" />
      <app-increment-button [(count)]="count" />
    </div>
  `,
  styles: [],
})
export class CounterWrapperComponent {
  // public count = signal(0);
  public count = 0;
}
