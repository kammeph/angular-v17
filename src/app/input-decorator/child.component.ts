import { Component, Input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  template: `<p>{{ text }}</p>`,
  styles: ``,
})
export class ChildComponent {
  @Input({ required: true, alias: 'message' }) public text!: string;
  @Input({ transform: numberAttribute }) public id!: number; // transforming the input from e.g. a route parameter (which is always a string) to a number
}
