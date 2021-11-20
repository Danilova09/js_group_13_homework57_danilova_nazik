import { Component, Input } from '@angular/core';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  @Input() users!: User[];

  getUsers() {
    console.log(this.users);
  }
}
