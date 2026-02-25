import { AfterViewInit, Component, DoCheck, OnDestroy } from '@angular/core';
import { clear } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements DoCheck{

    // ngAfterViewInit(): void {
    //   console.log("Ha sido incializada la vista del componente y las vistas de los hijos ")
    // }

    // Destruido: boolean = true

    // contador:  number
    // intervalo: any

    // constructor(){
    //   this.contador = 10
    //   this.intervalo = setInterval(()=> {
    //     this.contador--
    //     if(this.contador === 0) {
    //       clearInterval(this.intervalo)
    //       this.Destruido = false
    //     }
    //   }, 100)
    // }

    value: number = 0
    previousValue: number = 0
    ChangeDetected: boolean = false

    updateValue(): void {
      this.value++
      setInterval(()=> {
        this.ChangeDetected = false
      }, 1000)
    }

  ngDoCheck(): void {
    if(this.value !== this.previousValue)
      this.ChangeDetected = true 
    this.previousValue = this.value
  }
}
