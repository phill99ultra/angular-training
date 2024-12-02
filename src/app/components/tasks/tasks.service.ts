import {DUMMY_TASKS} from "../../tasks";
import {NewTask} from "./new-task/new-task.model";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class TasksService {
  private tasks = DUMMY_TASKS;

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  public getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  public addTask(taskData: NewTask, userId: string) {
    this.tasks.push({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });
    this.saveTasks();
  }

  public removeTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId );
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
