import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession, EventService } from '../events';

@Component({
  selector: 'nav-bar',
  templateUrl: 'navbar.component.html',
   styleUrls:['./navbar.component.css']
})
export class NavBarComponent {
  searchTerm:string =""
  foundSessions: ISession
  constructor(public auth:AuthService, private eventService:EventService){
    
  }
  searchSessions(searchTerm){
  this.eventService.searchSessions(searchTerm).subscribe(sessions=>{
    this.foundSessions=sessions
    console.log(this.foundSessions)
  })
  }
}
