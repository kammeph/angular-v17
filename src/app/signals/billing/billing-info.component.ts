import { Component, computed, effect, input, signal } from '@angular/core';
import { Position } from './billing.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-billing-info',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h4>Billing Info</h4>
    <select name="taxRate" id="taxRate" [(ngModel)]="taxRate">
      <option value="7">7%</option>
      <option value="19">19%</option>
    </select>
    <p>Total: {{ total() }}€</p>
    <p>Tax: {{ tax() }}€</p>
    <p>Total with tax: {{ totalWithTax() }}€</p>
  `,
})
export class BillingInfoComponent {
  public positions = input.required<Position[]>();
  public taxRate = signal(
    localStorage.getItem('taxRate') ? JSON.parse(localStorage.getItem('taxRate')!) : 19
  );

  constructor() {
    effect(() => {
      localStorage.setItem('taxRate', JSON.stringify(this.taxRate()));
    });
  }

  public total = computed(() => {
    return this.positions().reduce((acc, position) => {
      return acc + position.quantity * position.price;
    }, 0);
  });

  public tax = computed(() => {
    return (this.total() * this.taxRate()) / 100;
  });

  public totalWithTax = computed(() => {
    return this.total() + this.tax();
  });
}
