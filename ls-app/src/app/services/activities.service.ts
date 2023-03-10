import { Injectable } from '@angular/core';
import { IActivity } from '../model/activity';
import { IPriority } from '../model/priority';
import { priorities } from '../data/priorities';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  
 
  priorityList:IPriority[] = priorities
  totalList:number = 0
  toDoList:number = 0
  doneList:number = 0 



  addActivity(activity: IActivity):void {

    const priority = this.priorityList.find(p=>p.id === activity.level)
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

  getPercentage() {
    
    this.totalList = 0
    this.priorityList.forEach(list=>{
      this.totalList += list.activities.length
    })

    this.toDoList = this.getToDoActivities().length
    this.doneList = this.getDoneActivities().length
 
    let calc1 = (this.toDoList/this.totalList)*100
    let calc2 = (this.doneList/this.totalList)*100

  const chartOptions = {
		animationEnabled: true,
		title: {
		  text: "Activities"
		},
		data: [{
		  type: "pie",
		  startAngle: -90,
		  indexLabel: "{name}: {y}",
		  yValueFormatString: "#,###.##'%'",
		  dataPoints: [
			{ y: calc1, name: "to do" },
			{ y: calc2, name: "Electronics" }
		  ]
		}]
	}
  return chartOptions	
  }
  
}
