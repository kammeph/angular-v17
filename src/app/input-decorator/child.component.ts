import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  template: `<p>{{ text }}</p>`,
  styles: ``,
})
export class ChildComponent {
  @Input() public text!: string;
}
