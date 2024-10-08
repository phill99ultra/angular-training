import {Component, computed, signal, Input, Output, output, EventEmitter} from '@angular/core';

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
  @Input({required: true}) id!: string;
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;
  // @Output() isSelected = new EventEmitter();
  isSelected = output<string>();

  get imagePath() {
    return `./assets/users/${this.avatar}`
  };

  public onSelectedUser() {
    this.isSelected.emit(this.id);
  }
}
