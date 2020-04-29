import {Component} from '@angular/core'
import { EventService } from '../shared/event.service'
import { ActivatedRoute}from '@angular/router'
import { IEvent } from '../shared'
//Komponent odpowiadający za szczegóły po klinieciu danego eventu
@Component({
    templateUrl:'./events-details.component.html',
    styleUrls:['./events-details.component.css']
})
export class EventsDetailsComponent {
    event:IEvent
    constructor(private eventService:EventService,private route:ActivatedRoute)
    {

    }
ngOnInit()
{
this.event=this.eventService.getEvent(+this.route.snapshot.params['id'])
}
}