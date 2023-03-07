import { Injectable } from '@angular/core';
import { IActivity } from '../model/activity';
import { IPriority } from '../model/priority';
import { priorities } from '../data/priorities';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  
 
  priorityList:IPriority[] = priorities


  addActivity(activity: IActivity):void {

    const priority = this.priorityList.find(p=>p.value === activity.level)
    if(priority) priority.activities.push(activity)
  }

  deleteActivity(activity:IActivity):void {

    const priority = this.priorityList.find(p=>p.value === activity.level)

    if(priority) {
      const toDelete =  priority.activities.find(activ=>activ.description === activity.description && activ.checked === activity.checked)

      if(toDelete) {
        let indx = priority.activities.indexOf(toDelete)
        priority.activities.splice(indx,1)
      }
    } 

    console.log(this.priorityList)

  }
}
