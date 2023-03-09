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

  deleteActivity(priority,index):void {
    const list = this.priorityList.find(prList=> prList.value === priority)
    list.activities.splice(index,1)
  }

  updateActivity(priority, index,value) {
    const list = this.priorityList.find(prList=> prList.value === priority)
    list.activities[index].description = value
  } 

  getDoneActivities(){
    let completed = []
    this.priorityList.forEach(item=>{
      item.activities.forEach(el=>{
        if(el.checked) completed.push(el)
      })
    })
    return completed
  }

  getToDoActivities() {
    let toDo = []
    this.priorityList.forEach(item=>{
      item.activities.forEach(el=>{
        if(!el.checked) toDo.push(el)
      })
    })
    return toDo
  }
}
