import {Component, inject, input, output, signal} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NewTask} from "./new-task.model";
import {TasksService} from "../tasks.service";

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  private tasksService = inject(TasksService);

  public close = output();
  public title = signal('');
  public summary = signal('');
  public date = signal('');
  public userId = input<string>('');

  public onCancel() {
    this.close.emit();
  }

  public onSubmit() {
   this.tasksService.addTask({
     title: this.title(),
     summary: this.summary(),
     date: this.date(),
   }, this.userId());
   this.close.emit();
  }
}
