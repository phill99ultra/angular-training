import { Component } from '@angular/core';

import {HeaderComponent} from "./components/header/header.component";
import {UserComponent} from "./components/user/user.component";
import {DUMMY_USERS} from "./users";
import {TasksComponent} from "./components/tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    UserComponent,
    TasksComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public users = DUMMY_USERS;
  public selectedUserId = 'u1';

  public get selectedUser() {
    return this.users.find(user => user.id === this.selectedUserId)!
  }

  public onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
