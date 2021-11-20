import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {
  @Output() newUser = new EventEmitter<User>();
  @ViewChild('nameInput') nameInput!: ElementRef;
  @ViewChild('emailInput') emailInput!: ElementRef;
  @ViewChild('checkboxActiveInput') checkboxActiveInput!: ElementRef;
  @ViewChild('selectRole') selectRole!: ElementRef;

  createUser() {
    const name = this.nameInput.nativeElement.value;
    const email = this.emailInput.nativeElement.value;
    const active = this.checkboxActiveInput.nativeElement.checked;
    const role = this.selectRole.nativeElement.value;
    const user = new User(name, email, active, role);
    console.log(user);
    this.newUser.emit(user);
  }

}
