import { Pipe, PipeTransform } from '@angular/core';
import { IActivity } from '../model/activity';

@Pipe({
  name: 'sortBy',
  pure:false
})
export class SortByPipe implements PipeTransform {

  transform(list: IActivity[],string:string): IActivity[] {
    list.sort((a,b)=>{
      if(string === 'priority descending') return b.level - a.level
      if(string === 'priority ascending') return a.level - b.level
      if(string === 'date descending') return new Date(b.date).getTime() - new Date(a.date).getTime()
      if(string === 'date ascending') return new Date(a.date).getTime() - new Date(b.date).getTime()
      else return 0
    })
    return list
  }

}
