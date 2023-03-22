import { Injectable } from '@angular/core';
import { IActivity } from '../model/activity';
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
      let ls = JSON.parse(localStorage.getItem('deleted'))
      console.log(ls)
  
      let userDeleted = ls.find(l=>l.id === this.user.id)
      let idx = ls.indexOf(userDeleted)
      if(userDeleted) {
        userDeleted.activities.forEach(activity=> {
          if (new Date(activity.expire).getTime() < new Date().getTime() ) {
            let i = userDeleted.activities.indexOf(activity)
            userDeleted.activities.splice(i,1)
          }
        })
  
        ls[idx] = userDeleted
        localStorage.setItem('deleted',JSON.stringify(ls))
    
        observer.next(userDeleted.activities)
      }
      else {
        return observer.next([])

      }

      
    }
    else return observer.next([])
  
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
  console.log(list)
}



deleteActivity(priority,index):void {


  const list = this.prioritiesValue.priorities.find(prList=> prList.value === priority)

  console.log(list.activities[index])
  if(localStorage.hasOwnProperty('deleted')) {

    let ls = JSON.parse(localStorage.getItem('deleted'))
    console.log(ls)

    let userDeleted = ls.find(l=>l.id === this.user.id)
    console.log(userDeleted)

    if(userDeleted) {
    let indx = ls.indexOf(userDeleted)
    console.log(indx)
    let ex = list.activities[index]
   
    ex.expire = new Date(ex.date)
    ex.expire.setDate(ex.expire.getDate()+30)

    userDeleted.activities.push(ex)
    console.log(userDeleted.activities)
    console.log(userDeleted)
    ls[indx] = userDeleted
    console.log(ls)
    localStorage.setItem('deleted', JSON.stringify(ls))
    }

    if(!userDeleted) {
      let deleted = JSON.parse(localStorage.getItem('deleted'))
      let ls = []
 
      let arr = {
        id:this.user.id,
        activities:[]
      }
      let ex = list.activities[index]
   
      ex.expire = new Date(ex.date)
      ex.expire.setDate(ex.expire.getDate()+30)

      ls.push(ex)
  
      arr.activities = ls
  
      console.log(arr)
      deleted.push(arr)
      localStorage.setItem('deleted', JSON.stringify(deleted))

    }

    
  }
  else {
    let deleted = []
    let ls = []
 
    let arr = {
      id:this.user.id,
      activities:[]
    }

    let ex = list.activities[index]
    ex.expire = new Date(ex.date)
    console.log(ex.expire)
    
    ex.expire.setDate(ex.expire.getDate()+30)
  ls.push(ex)
    console.log(this.prioritiesValue.priorities)

    arr.activities = ls

    console.log(arr)


    deleted.push(arr)
 
    localStorage.setItem('deleted', JSON.stringify(deleted))
    
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

  delete activity.expire
  let arr = JSON.parse(localStorage.getItem('prioritiesList'))
  let el =  arr.find((item)=>item.id === this.user.id)
  this.prioritiesValue.priorities.find(pr=>pr.id === +activity.level).activities.push(activity)
  arr[arr.indexOf(el)] = this.prioritiesValue
  localStorage.setItem('prioritiesList', JSON.stringify(arr) )

  let del = JSON.parse(localStorage.getItem('deleted'))

  let userDeleted = del.find(l=>l.id === this.user.id)

  userDeleted.activities.splice(index,1)

  del[del.indexOf(userDeleted)] = userDeleted

  localStorage.setItem('deleted', JSON.stringify(del))
}
  
}

