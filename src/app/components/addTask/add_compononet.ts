import { AfterContentInit, Component, OnDestroy, OnInit } from "@angular/core";
import { After } from "v8";

@Component({
    selector : 'app-addTask',
    templateUrl: "./add_component.html",
    styleUrl: "./add_component.scss"
})

export class Addcomponent  implements OnDestroy, AfterContentInit{

    

    // ngOnInit(): void {
    //     console.log("Creando desde el ng oninit")
        
    // }

    // constructor(){
    //         console.log("creando desde del el constructor ")
    //     }

    ngOnDestroy(): void {
        console.log("El componente ha sido destruido ")
    }

    ngAfterContentInit(): void {
        console.log("El contenido proyectado ha sido inicializado")
    }
}