import { Pipe, PipeTransform } from '@angular/core';
import { IActivity } from '../model/activity';

@Pipe({
  name: 'sortBy',
  pure:false
})
export class SortByPipe implements PipeTransform {

  transform(list: IActivity[],string:string): IActivity[] {
    list.sort((a,b)=>{
      if(string === 'priority desc') return b.level - a.level
      if(string === 'priority asc') return a.level - b.level
      if(string === 'date desc') return b.date.getTime() - a.date.getTime()
      if(string === 'date asc') return a.date.getTime() - b.date.getTime()
      else return 0
    })
    return list
  }

}
