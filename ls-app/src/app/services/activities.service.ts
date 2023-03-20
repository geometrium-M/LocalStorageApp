import { Injectable } from '@angular/core';
import { IActivity } from '../model/activity';
import { IPriority } from '../model/priority';
import { priorities } from '../data/priorities';
import { BehaviorSubject, Observable, of } from 'rxjs';

import {pr} from '../data/priorities'

import { AccountService } from './account.service';
import { IUser } from '../model/user';



@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  
private prioritiesSubject: BehaviorSubject<any>;
public priorities: Observable<any>;


  
filter:boolean

user:IUser


constructor(private accountService:AccountService) {



this.accountService.userV.subscribe(us=>this.user = us)
console.log(this.user)

console.log(accountService.userV)
      if(localStorage.hasOwnProperty('prioritiesList')) {
        const list = JSON.parse(localStorage.getItem('prioritiesList'))
        this.accountService.userV.subscribe(item=> {
          const priorities = list.find(item1=>item1.id === item?.id)
          if(priorities) this.prioritiesSubject = new BehaviorSubject(priorities)
          else this.prioritiesSubject = new BehaviorSubject(pr)
        })
       
      }
      else {
        this.prioritiesSubject = new BehaviorSubject(pr)
      }
      this.priorities = this.prioritiesSubject.asObservable();
      
    }

public get prioritiesValue() {
  return this.prioritiesSubject.value
}

assignValue() {
  const deletedList = new Observable((observer)=> {
    if(localStorage.hasOwnProperty('deleted')) {
      observer.next(JSON.parse(localStorage.getItem('deleted')))
    }
    else return observer.next()
  
  } )
  return deletedList
 
}




addActivity(activity:IActivity):void {
  let priorityList = this.prioritiesValue
  let list =[]

  const priority = priorityList.priorities.find(p=>p.id === activity.level)
  if(priority) priority.activities.push(activity)

  if(!localStorage.hasOwnProperty('prioritiesList')) {
    priorityList.id = this.user.id
    list.push(priorityList)
  }  

  if(localStorage.hasOwnProperty('prioritiesList')) {
    list = JSON.parse(localStorage.getItem('prioritiesList'))
    const priorities = list.find((item)=>item.id === this.user.id)

    if(priorities) {
      const indx = list.indexOf(priorities)
      list[indx] = priorityList
    }
    if(!priorities) {  
      priorityList.id = this.user.id
      list.push(priorityList)
    }
  }
  localStorage.setItem('prioritiesList', JSON.stringify(list))
}



deleteActivity(priority,index):void {
  // const list = this.prioritiesValue.priorities.find(prList=> prList.value === priority)
  // list.activities.splice(index,1)
  // localStorage.setItem('prioritiesList', JSON.stringify(this.prioritiesValue))
  



  const list = this.prioritiesValue.priorities.find(prList=> prList.value === priority)

  console.log(list.activities[index])
  if(localStorage.hasOwnProperty('deleted')) {
    let ls = JSON.parse(localStorage.getItem('deleted'))

    ls.push(list.activities[index])
    localStorage.setItem('deleted', JSON.stringify(ls))
  }
  else {
    let arr = []
    arr.push(list.activities[index])
    localStorage.setItem('deleted', JSON.stringify(arr))
    
  }


  list.activities.splice(index,1)
  
  let arr = JSON.parse(localStorage.getItem('prioritiesList')) 
  let el =  arr.find((item)=>item.id === this.user.id)
  const indx = arr.indexOf(el)
  arr[indx] = this.prioritiesValue
  localStorage.setItem('prioritiesList', JSON.stringify(arr))

}

updateActivity(priority, index,value) {
  
  const list = this.prioritiesValue.priorities.find(prList=> prList.value === priority)
  list.activities[index].description = value
  let arr = JSON.parse(localStorage.getItem('prioritiesList')) 
  let el =  arr.find((item)=>item.id === this.user.id)
  const indx = arr.indexOf(el)
  arr[indx] = this.prioritiesValue
  localStorage.setItem('prioritiesList', JSON.stringify(arr))
}

updateActivitiesList() {
  let arr = JSON.parse(localStorage.getItem('prioritiesList'))
  let el =  arr.find((item)=>item.id === this.user.id)

  const indx = arr.indexOf(el)
  arr[indx] = this.prioritiesValue
  
  localStorage.setItem('prioritiesList', JSON.stringify(arr) )
}

restore(activity,index) {
  let arr = JSON.parse(localStorage.getItem('prioritiesList'))
  let el =  arr.find((item)=>item.id === this.user.id)
  const indx = arr.indexOf(el)


 this.prioritiesValue.priorities.find(pr=>pr.id === activity.level).activities.push(activity)

  console.log(this.prioritiesValue.priorities)
  arr[indx] = this.prioritiesValue

  localStorage.setItem('prioritiesList', JSON.stringify(arr) )


  let del = JSON.parse(localStorage.getItem('deleted'))
  del.splice(index,1)
  console.log(del)
  localStorage.setItem('deleted', JSON.stringify(del))
  
}
  
}

