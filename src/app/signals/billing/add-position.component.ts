import { Component, EventEmitter, Output, signal } from '@angular/core';
import { Position } from './billing.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-position',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h4>Add Position</h4>
    <form (ngSubmit)="onSubmit()">
      <label for="name">Position name:</label>
      <input type="text" name="name" id="name" placeholder="Position name" [(ngModel)]="name" />
      <label for="quantity">Quantity:</label>
      <input
        type="number"
        name="quantity"
        id="quantity"
        placeholder="Quantity"
        [(ngModel)]="quantity"
      />
      <label for="price">Price per unit in Euro:</label>
      <input
        type="number"
        name="price"
        id="price"
        placeholder="Price in Euro"
        [(ngModel)]="price"
      />
      <button type="submit">Add</button>
    </form>
  `,
  styles: `
    form {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  `,
})
export class AddPositionComponent {
  @Output()
  public addPosition = new EventEmitter<Position>();

  public name = signal('');
  public quantity = signal(0);
  public price = signal(0);

  public onSubmit(): void {
    this.addPosition.emit({
      name: this.name(),
      quantity: this.quantity(),
      price: this.price(),
    });
  }
}
