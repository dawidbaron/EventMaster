import { Pipe, PipeTransform} from '@angular/core';
@Pipe({name:'level'})
export class LevelPipe implements PipeTransform{
    transform(value:number) :string{
        switch(value){
            case 1: return 'Classes 1-4 - Primary School'
            case 2: return 'Classes 5-8 - Primary School'
            case 3: return 'High School - basic'
            case 4: return 'High School - extend'
            case 5: return 'Studies - basic'
            case 6: return 'Studies - extend'
            
            default: return value.toString();
        }
    }
}