import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Task } from '../../modelos/task_interface'

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrl: './list-task.component.scss'
})

export class ListTaskComponent{

  @Input('listTask') tasks: Task[] = []

  @Output() TaskCompleted: EventEmitter<Task> = new EventEmitter<Task>()
  @Output() TaskDeleted: EventEmitter<number> = new EventEmitter<number>()

  completedTask(task: Task): void {
    this.TaskCompleted.emit(task)
  }

  deleteTask(id:number): void {
    this.TaskDeleted.emit(id)
  }
  

}
