import { Pipe, PipeTransform} from '@angular/core';
@Pipe({name:'time'})
export class TimePipe implements PipeTransform{
    transform(value:number) :string{
        switch(value){
            case 1: return '11:00-12:30'
            case 2: return '12:30-14:00'
            case 3: return '14:00-15:30'
            case 4: return '15:30-17:00'
            case 5: return '17:00-18:30'
            case 6: return '18:30-20:00'
            
            default: return value.toString();
        }
    }
}