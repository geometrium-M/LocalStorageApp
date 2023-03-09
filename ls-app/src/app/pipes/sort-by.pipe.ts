import { Pipe, PipeTransform } from '@angular/core';
import { IActivity } from '../model/activity';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(value: IActivity[],string:string ): void {
    
    if(string == 'priority') {
      value.sort()


    }

  }

}
