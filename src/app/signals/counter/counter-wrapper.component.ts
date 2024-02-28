import { Component, signal } from '@angular/core';
import { CounterDisplayComponent } from './counter-display.component';
import { IncrementButtonComponent } from './increment-button.component';

@Component({
  selector: 'app-counter-wrapper',
  standalone: true,
  imports: [CounterDisplayComponent, IncrementButtonComponent],
  template: `
    <div>
      <app-counter-display />
      <app-increment-button />
    </div>
  `,
  styles: [],
})
export class CounterWrapperComponent {}
