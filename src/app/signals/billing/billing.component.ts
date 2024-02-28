import { Component, effect, signal } from '@angular/core';
import { AddPositionComponent } from './add-position.component';
import { PositionsComponent } from './positions.component';
import { BillingInfoComponent } from './billing-info.component';
import { IonContent } from '@ionic/angular/standalone';

export type Position = {
  name: string;
  quantity: number;
  price: number;
};

@Component({
  selector: 'app-billing',
  standalone: true,
  imports: [PositionsComponent, BillingInfoComponent, IonContent],
  template: `
    <ion-content>
      <h1>Billing</h1>
      <app-positions [(positions)]="positions" />
      <app-billing-info [positions]="positions()" />
    </ion-content>
  `,
})
export class BillingComponent {
  public positions = signal<Position[]>(
    localStorage.getItem('positions') ? JSON.parse(localStorage.getItem('positions')!) : []
  );

  constructor() {
    effect(() => {
      localStorage.setItem('positions', JSON.stringify(this.positions()));
    });
  }
}
