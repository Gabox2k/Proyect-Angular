import { AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { clear, error } from 'console';
import { Task } from './modelos/task_interface';
import { TasksService } from './servicios/tasks.service';
import { ApiService } from './servicios/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy{

    tasks: Task[] =[]
    taskUpload: Task[] = []
    private subscription: Subscription

    constructor(private service: TasksService, private serviceApi: ApiService) {
        this.subscription = this.service.taskChanged.subscribe(task =>{
            this.tasks = task
        } )
    }

    ngOnInit(): void {
        this.tasks = this.service.getTask()
        this.serviceApi.loadTask().subscribe(
            data => {
                if(Array.isArray(data)){
                    this.taskUpload = data
                }
            },
            error => {
                console.log("Error al cargar las tareas", error)
            }
        )
    }
    
    ngOnDestroy(): void {
        this.subscription.unsubscribe()
    }

 
    addTask(task: Task): void {
        this.service.addTask(task)
    }

    markTaskCompleted(task: Task): void {
        this.service.completeTask(task.id)
    }

    deleteTask( id: number): void {
        this.service.deleteTask(id)
    }
    
}
