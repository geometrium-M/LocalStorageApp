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
id:any

constructor(private accountService:AccountService) 
    {
      console.log(this.accountService.userValue)

      if(localStorage.hasOwnProperty('prioritiesList')) {
        const list = JSON.parse(localStorage.getItem('prioritiesList'))
        const priorities = list.find((item)=>item.id === this.id)
        if(priorities) {
          this.prioritiesSubject = new BehaviorSubject(priorities)
        } 
        else {
          console.log('not found', accountService.userValue)
          this.prioritiesSubject = new BehaviorSubject(pr)
        }
      }
      else {
        this.prioritiesSubject = new BehaviorSubject(pr)
      }
      this.priorities = this.prioritiesSubject.asObservable();
    }









public get prioritiesValue() {
  return this.prioritiesSubject.value
}

updateId(id) {
  this.id = id
}


addActivity(activity:any):void {
  let priorityList = this.prioritiesValue
  let list =[]

  const priority = priorityList.priorities.find(p=>p.id === activity.level)
  if(priority) priority.activities.push(activity)

  if(!localStorage.hasOwnProperty('prioritiesList')) {
    priorityList.id = this.accountService.userValue.id
    list.push(priorityList)
  }  

  if(localStorage.hasOwnProperty('prioritiesList')) {
    list = JSON.parse(localStorage.getItem('prioritiesList'))
    const priorities = list.find((item)=>item.id === this.accountService.userValue.id)

    if(priorities) {
      const indx = list.indexOf(priorities)
      list[indx] = priorityList
    }
    if(!priorities) {  
      priorityList.id = this.accountService.userValue.id
      list.push(priorityList)
    }

  }
  localStorage.setItem('prioritiesList', JSON.stringify(list))
}



deleteActivity(priority,index):void {
  const list = this.prioritiesValue.priorities.find(prList=> prList.value === priority)
  list.activities.splice(index,1)
  localStorage.setItem('priorities', JSON.stringify(this.prioritiesValue))
}

updateActivity(priority, index,value) {
  
  const list = this.prioritiesValue.priorities.find(prList=> prList.value === priority)
  list.activities[index].description = value
  let arr = JSON.parse(localStorage.getItem('prioritiesList')) 
  let el =  arr.find((item)=>item.id === this.accountService.userValue.id)
  const indx = arr.indexOf(el)
  arr[indx] = this.prioritiesValue
  localStorage.setItem('prioritiesList', JSON.stringify(arr))
}

updateActivitiesList() {
  let arr = JSON.parse(localStorage.getItem('prioritiesList'))
  let el =  arr.find((item)=>item.id === this.accountService.userValue.id)

  const indx = arr.indexOf(el)
  arr[indx] = this.prioritiesValue
  
  localStorage.setItem('prioritiesList', JSON.stringify(arr) )
}
  
}

