import { Component } from '@angular/core';
import { User } from './shared/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'users-app';

  users: User[] = [
    new User('Daisy', 'daisy@gmail.com', true, 'Admin'),
    new User('Joshua', 'Joshua@gmail.com', true, 'Admin'),
  ]

  onNewUser(user: User) {
    this.users.push(user);
  }

}
