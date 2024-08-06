import {Component, computed, signal, Input} from '@angular/core';

import {DUMMY_USERS} from "../../users";

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;
  public selectedUser = signal(DUMMY_USERS[randomIndex]);
  get imagePath() {
    return `./assets/users/${this.avatar}`
  };

  public onSelectedUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
