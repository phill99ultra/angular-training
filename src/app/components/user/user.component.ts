import {Component, output, input} from '@angular/core';

import {User} from "./user.model";
import {CardComponent} from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CardComponent
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  public user = input<User>();
  public selected = input<boolean>();
  public isSelected = output<string>();

  get imagePath() {
    return `./assets/users/${this.user()!.avatar}`
  };

  public onSelectedUser() {
    this.isSelected.emit(this.user()!.id);
  }
}
