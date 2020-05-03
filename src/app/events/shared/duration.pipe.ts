import { Pipe, PipeTransform} from '@angular/core';
@Pipe({name:'duration'})
export class DurationPipe implements PipeTransform{
    transform(value:number) :string{
        switch(value){
            case 1: return 'Every Monday'
            case 2: return 'Every Tuesday'
            case 3: return 'Every Wednesday'
            case 4: return 'Every Thursday'
            case 5: return 'Every Friday'
            case 6: return 'Every Saturday'
            
            default: return value.toString();
        }
    }
}