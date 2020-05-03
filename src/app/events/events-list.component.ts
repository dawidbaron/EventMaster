import { Component,OnInit } from '@angular/core'
import { EventService } from './shared/event.service';
import { ToastrService} from '../common/toastr.service'
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared';

declare let toastr
@Component({
template: `<div>
<h1>What to see in Warsaw</h1>
<hr/>
    <div class="row">
        <div *ngFor="let event of events" class="col-md-5">
            <events-thumbnail [event]="event"></events-thumbnail>
        </div>
    </div>
    
</div>`
})
export class EventsListComponent implements OnInit{
  events:IEvent[]
  constructor(private eventService:EventService,private toastr: ToastrService,private route:ActivatedRoute )
  {
  }
  // wyswietlanie listy eventow
  ngOnInit(){
    this.events=this.route.snapshot.data['events']
  }
 
}