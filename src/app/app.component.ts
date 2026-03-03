import { AfterViewInit, Component, DoCheck, OnDestroy } from '@angular/core';
import { clear } from 'console';
import { Task } from './modelos/task_interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
    
    tasks: Task[] =[]

    addTask(task: Task): void {
        this.tasks.push(task)
    }

    markTaskCompleted(task: Task): void {
        task.completed= !task.completed
    }

    deleteTask( id: number): void {
        this.tasks = this.tasks.filter((task) => task.id !== id)
    }
    
}
