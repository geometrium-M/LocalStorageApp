import { Pipe, PipeTransform } from '@angular/core';
import { IActivity } from '../model/activity';
import { IPriority } from '../model/priority';

@Pipe({
  name: 'activitiesCheckedFilter'
})
export class ActivitiesCheckedFilterPipe implements PipeTransform {

  transform(value: IPriority[], checked: boolean): IActivity[] {
    const list:IActivity[] = []
    value.forEach((item)=>{
      item.activities.forEach(activity=>{
        if(checked) {
          if(activity.checked) list.push(activity)
        }
        else {
          if(!activity.checked) list.push(activity)
        }
      })
    })
    return list
  }
}
 