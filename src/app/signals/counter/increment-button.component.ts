import { Component, EventEmitter, Input, Output, Signal, model } from '@angular/core';

@Component({
  selector: 'app-increment-button',
  standalone: true,
  template: ` <button (click)="increment()">Increment</button> `,
  styles: [],
})
export class IncrementButtonComponent {
  public increment() {}
}
