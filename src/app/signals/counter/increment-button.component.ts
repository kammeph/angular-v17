import { Component, model } from '@angular/core';

@Component({
  selector: 'app-increment-button',
  standalone: true,
  template: ` <button (click)="increment()">Increment</button> `,
  styles: [],
})
export class IncrementButtonComponent {
  // @Input() public count!: Signal<number>;
  // @Output() public countChange = new EventEmitter<number>();

  public count = model.required<number>();

  public increment() {
    // this.countChange.emit(this.count() + 1);
    // this.count.set(this.count() + 1);
    this.count.update((count) => count + 1);
  }
}
