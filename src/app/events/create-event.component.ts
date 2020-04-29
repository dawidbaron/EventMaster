import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { EventService} from './shared/event.service'

@Component({
    templateUrl: 'create-event.component.html',
    styleUrls: [ 'create-event.component.css']
})
export class CreateEventComponent {
    isDirty:boolean=true
    newEvent
    constructor(private router: Router,private eventService:EventService){

    }
    ngOnInit(){

    }
    saveEvent(formValues){
        this.eventService.saveEvent(formValues)
        this.isDirty=false
        this.router.navigate(['/events'])
        }
    cancel(){
    this.router.navigate(['/events'])
    }
}