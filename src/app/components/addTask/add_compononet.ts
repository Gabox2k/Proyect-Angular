import { CommonModule } from "@angular/common";
import { AfterContentInit, Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Task } from "../../modelos/task_interface";
import { StatusTaskDirective } from "../../directives/status-task.directive";
import { ConfirmDelete } from "../../directives/confirm_delete";

@Component({
    selector : 'app-addTask',
    templateUrl: "./add_component.html",
    styleUrl: "./add_component.scss",
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule, StatusTaskDirective, ConfirmDelete, ConfirmDelete]
})

export class Addcomponent  implements OnInit{

    numberTask!: number;

    isActive: boolean = false

    taskActive!: boolean 

    tasks: Task[] =[
    {
        id: 1,
        title: 'tarea 1',
        completed: false
    }, 

        {
            id: 2,
            title: 'tarea 2',
            completed: false
        },

    {
        id: 3,
        title: 'tarea 3',
        completed: false
    },

    {
        id: 4,
        title: 'tarea 4',
        completed: false
    },

    {
        id: 5,
        title: 'tarea 5',
        completed: false
    },

    {
        id: 6,
        title: 'tarea 6',
        completed: false
    },

    {
        id: 7,
        title: 'tarea 7',
        completed: false
    },

]


    constructor(private fb: FormBuilder){}

    form!: FormGroup

    ngOnInit(): void {
        this.form = this.fb.group({
            title: new FormControl('', [Validators.required, Validators.maxLength(10)])
        })
    }

    sendTaskTitle(): void {
        if(this.form.valid && this.form.get('tilte')?.value !== ''){
            this.taskActive = false
            console.log(this.form.value.title)
        } else {
            this.taskActive = true
        }
    }

    markTakCompleted(task: Task): void{
        task.completed= !task.completed
    }

    delete(id: number): void{
        this.tasks = this.tasks.filter((task) => task.id !== id)
        this.numberTask = this.tasks.length
    }
    
}