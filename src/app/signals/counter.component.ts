import { Component, computed, effect, signal } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [IonContent],
  template: `
    <ion-content>
      <button (click)="increment()">Increment</button>
      <h1>{{ count() }}</h1>
      <p>{{ doubleCount() }}</p>
    </ion-content>
  `,
})
export class CounterComponent {
  public count = signal(
    localStorage.getItem('count') ? parseInt(localStorage.getItem('count')!, 10) : 0
  );
  public doubleCount = computed(() => this.count() * 2);

  constructor() {
    effect(() => {
      localStorage.setItem('count', this.count().toString());
    });
  }

  public increment() {
    // this.count.set(this.count() + 1);
    this.count.update((count) => count + 1);
  }
}
