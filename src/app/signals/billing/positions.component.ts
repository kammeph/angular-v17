import { Component, input, model } from '@angular/core';
import { Position } from './billing.component';
import { AddPositionComponent } from './add-position.component';

@Component({
  selector: 'app-positions',
  standalone: true,
  imports: [AddPositionComponent],
  template: `
    <app-add-position (addPosition)="onAddPosition($event)" />
    <h4>Positions</h4>
    <ul>
      @for (position of positions(); track $index) {
      <li>{{ position.name }} - {{ position.quantity }} x {{ position.price }}€</li>
      }
    </ul>
  `,
  styles: `
    ul {
        list-style-type: none;
        padding: 0;
    }
  `,
})
export class PositionsComponent {
  public positions = model.required<Position[]>();

  public onAddPosition(position: Position): void {
    this.positions.update((positions) => [...positions, position]);
  }
}
