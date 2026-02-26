import { Directive, HostListener, Input } from "@angular/core";

@Directive({
    selector: '[appConfirmDelete]',
    standalone: true
})

export class ConfirmDelete{

    @Input('appConfirmDelete') taskFile: string = ''

    constructor(){}

    @HostListener('click', ['$event']) onClick(event: Event){
        event.preventDefault()
        event.stopImmediatePropagation()

        const confirmed= confirm(`Estas seguro de eliminar la tarea ${this.taskFile}` )
        if(confirmed)
            alert('Eliminado')
    }
}

    

