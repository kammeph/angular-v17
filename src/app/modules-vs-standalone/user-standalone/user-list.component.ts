import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserDetailComponent } from './user-detail.component';

export type User = {
  id: number;
  name: string;
  email: string;
};

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, UserDetailComponent],
  template: `
    <div>
      <h1>User List Module Based</h1>
      <ul>
        <li *ngFor="let user of users">
          <app-user-detail [user]="user" />
        </li>
      </ul>
    </div>
  `,
  styles: ``,
})
export class UserListComponent {
  public users: User[] = [];

  constructor(private readonly http: HttpClient) {
    this.fetchUsers();
  }

  private fetchUsers(): void {
    this.http.get<User[]>('https://jsonplaceholder.typicode.com/users').subscribe((users) => {
      this.users = users;
    });
  }
}
