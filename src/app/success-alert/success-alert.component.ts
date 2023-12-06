import { Component } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: 'success-alert.component.html',
  styleUrl: 'success-alert.component.css'
})

export class SuccessAlertComponent{
  successId: number = 10;
  successStatus: string = 'offline';
  getServerStatus() {
    return this.successStatus;
  }
}
