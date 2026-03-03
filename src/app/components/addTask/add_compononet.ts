import { CommonModule } from "@angular/common";
import { AfterContentInit, Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators, FormsModule } from "@angular/forms";
import { Task } from "../../modelos/task_interface";
import { StatusTaskDirective } from "../../directives/status-task.directive";
import { ConfirmDelete } from "../../directives/confirm_delete";

@Component({
    selector : 'app-addTask',
    templateUrl: "./add_component.html",
    styleUrl: "./add_component.scss",
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule, FormsModule]
})

export class Addcomponent implements OnInit{

    @Output() taskAdded: EventEmitter <Task> = new EventEmitter<Task>()

    numberTask!: number;

   

    tasks: Task[] =[]


    constructor(private fb: FormBuilder){}

    form!: FormGroup

    ngOnInit(): void {
        this.form = this.fb.group({
            title: new FormControl('', [Validators.required, Validators.maxLength(10)])
        })
    }

    sendTaskTitle(): void {
        if(this.form.valid && this.form.get('tilte')?.value !== ''){
            const newTask: Task = {
                id: Math.floor(Math.random() *1000),
                title: this.form.value.title,
                completed: false 
            }

            this.taskAdded.emit(newTask )
            this.form.reset()
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