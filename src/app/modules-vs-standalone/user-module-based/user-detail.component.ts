import { Component, Input } from '@angular/core';
import { User } from './user-list.component';

@Component({
  selector: 'app-user-detail',
  template: `<p>{{ user.name }}: {{ user.email }}</p>`,
  styles: ``,
})
export class UserDetailComponent {
  @Input() public user!: User;
}
