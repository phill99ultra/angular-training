import { Component } from '@angular/core';

import {HeaderComponent} from "./components/header/header.component";
import {UserComponent} from "./components/user/user.component";
import {DUMMY_USERS} from "./users";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    UserComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public users = DUMMY_USERS;

  public onSelectUser(id: string) {
    console.log(`Selected user with id ${id}`)
  }
}
