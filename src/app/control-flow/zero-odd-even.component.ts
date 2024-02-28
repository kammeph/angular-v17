import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';

type Post = {
  id: number;
  title: string;
  body: string;
};

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, IonContent],
  template: `
    <ion-content>
      <input type="number" [(ngModel)]="num" />
      @if (num == 0) {
      <p>{{ num }} is Zero</p>
      } @else if (num % 2 == 0) {
      <p>{{ num }} is Even</p>
      } @else {
      <p>{{ num }} is Odd</p>
      }
    </ion-content>
  `,
  styles: ``,
})
export class ZeroOddEvenComponent {
  public num = 0;
}
