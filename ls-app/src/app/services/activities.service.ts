import { Injectable } from '@angular/core';
import { IActivity } from '../model/activity';
import { IPriority } from '../model/priority';
import { priorities } from '../data/priorities';
import { BehaviorSubject, Observable, of } from 'rxjs';

import {pr} from '../data/priorities'

import { AccountService } from './account.service';


@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  
private prioritiesSubject: BehaviorSubject<any>;
public priorities: Observable<any>;
  
filter:boolean

constructor(private accountService:AccountService) 
    {
      if(localStorage.hasOwnProperty('priorities')){
        this.prioritiesSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('priorities')!))
      } 
      else {
        this.prioritiesSubject = new BehaviorSubject(pr)
      } 
      this.priorities = this.prioritiesSubject.asObservable();
    }

public get prioritiesValue() {
  return this.prioritiesSubject.value
}

addActivity(activity: IActivity):void {

  let priorityList = this.prioritiesValue

  if(!localStorage.hasOwnProperty('priorities')) {
    priorityList.id = this.accountService.userValue.id
  }  
  const priority = priorityList.priorities.find(p=>p.id === activity.level)

    if(priority) priority.activities.push(activity) 
    localStorage.setItem('priorities', JSON.stringify(priorityList))
  }

deleteActivity(priority,index):void {
  const list = this.prioritiesValue.priorities.find(prList=> prList.value === priority)
  list.activities.splice(index,1)
  localStorage.setItem('priorities', JSON.stringify(this.prioritiesValue))
}

updateActivity(priority, index,value) {
  const list = this.prioritiesValue.priorities.find(prList=> prList.value === priority)
  list.activities[index].description = value
  localStorage.setItem('priorities', JSON.stringify(this.prioritiesValue))
}

updateActivitiesList(list) {

  this.prioritiesValue.priorities = list
  localStorage.setItem('priorities', JSON.stringify(this.prioritiesValue) )
}
  
}

