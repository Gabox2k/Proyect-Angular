import { CommonModule } from "@angular/common";
import { AfterContentInit, Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
    selector : 'app-addTask',
    templateUrl: "./add_component.html",
    styleUrl: "./add_component.scss",
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule]
})

export class Addcomponent  implements OnInit{

    numberTask: number = 10

    isActive: boolean = false

    taskActive!: boolean 

    tasks: any[] = ['tarea1', 'tarea2' , 'tarea3']

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
    
}