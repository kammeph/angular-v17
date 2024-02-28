import { NgModule } from '@angular/core';
import { UserListComponent } from './user-list.component';
import { UserDetailComponent } from './user-detail.component';
import { UserRoutingModule } from './user-routing.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [UserListComponent, UserDetailComponent],
  imports: [CommonModule, HttpClientModule, UserRoutingModule],
})
export class UserModule {}
