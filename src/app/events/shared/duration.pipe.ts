import { Pipe, PipeTransform} from '@angular/core';
@Pipe({name:'duration'})
export class DurationPipe implements PipeTransform{
    transform(value:number) :string{
        switch(value){
            case 1: return '45min'
            case 2: return '1 Hour'
            case 3: return '1,5Hour'
            case 4: return '3 Hour'
            case 5: return '1 Day'
            case 6: return '3 Days'
            case 5: return '1 Week'
            
            default: return value.toString();
        }
    }
}