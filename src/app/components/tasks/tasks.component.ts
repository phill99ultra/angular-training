import {Component, inject, input} from '@angular/core';
import {TaskComponent} from "./task/task.component";
import {NewTaskComponent} from "./new-task/new-task.component";
import {NewTask} from "./new-task/new-task.model";
import {TasksService} from "./tasks.service";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    TaskComponent,
    NewTaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  private tasksService = inject(TasksService);

  public userId = input<string>('');
  public name = input<string>('');
  public isAddingTask = false;

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId());
  }

  public onAddNewTask() {
    this.isAddingTask = true;
  }

  public onCloseNewTask() {
    this.isAddingTask = false;
  }
}
