import { Component } from '@angular/core';
import { ChildComponent } from './child.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule, ChildComponent],
  template: `
    <div>
      <h1>This is my text</h1>
      <app-child [message]="message" />
    </div>
  `,
  styles: ``,
})
export class ParentComponent {
  public message = 'Hello, World!';
}
