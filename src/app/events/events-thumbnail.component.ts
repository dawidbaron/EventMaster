import { Component ,Input} from "@angular/core";
import { IEvent } from './shared';
// Komponent do wyswietlania kafelkow z odpowiednimi danymi
@Component({
    selector:'events-thumbnail',
    templateUrl: 'events-thumbnail.component.html',
    styleUrls:['./events-thumbnail.component.css']
})
export class EventsThumbnailComponent{
   @Input() event:IEvent

  // getStartTimeClass(){
       //const isEarlyStart = this.event && this.event.time =='8:00 am';
      // return {green:isEarlyStart, bold:isEarlyStart} LUB
    //  if(this.event && this.event.time == '8:00 am')
      
    //  return ['green','bold']
    //  return []
     // return {color: '#003300','font-weight':'bold'}
      //return {} BEZ STYLE NGSTYLE
  // }
}