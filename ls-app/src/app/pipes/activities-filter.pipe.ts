import { Pipe, PipeTransform } from '@angular/core';
import { IActivity } from '../model/activity';

@Pipe({
  name: 'activitiesFilter',
  pure:false
})
export class ActivitiesFilterPipe implements PipeTransform {

  transform(activityList: IActivity[], filterString:string): IActivity[] {
    if(activityList.length === 0 || !filterString) {
      return activityList;
    }
    const filteredActivities:IActivity[] = []

    for (const activity of activityList ) {
      if(activity.description.toLowerCase().includes(filterString.toLowerCase())) {
        filteredActivities.push(activity)
      }
    }
   return filteredActivities;
 
  }

}
