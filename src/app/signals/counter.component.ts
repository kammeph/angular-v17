import { Component, computed, effect, signal } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [IonContent],
  template: `
    <ion-content>
      <button (click)="increment()">Increment</button>
      <p>{{ count }}</p>
    </ion-content>
  `,
})
export class CounterComponent {
  public count = 0;

  constructor() {}

  public increment() {
    this.count = this.count + 1;
  }
}
