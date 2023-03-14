import { Injectable } from '@angular/core';
import { IActivity } from '../model/activity';
import { IPriority } from '../model/priority';
import { priorities } from '../data/priorities';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  
 
  priorityList:IPriority[] = priorities
 

  filter:boolean

  constructor() {}


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


  // getActivitiesTypeList(checked:any) {
  //   console.log('service')
  //   this.exList = []
  //   this.priorityList.forEach(priority=>{
  //     priority.activities.forEach(activity=>{
  //       if(checked) {
  //         if(activity.checked) this.exList.push(activity)
  //       }
  //       if(!checked) {
  //         if(!activity.checked) this.exList.push(activity)
  //       }
  //     })
  //   })
   
    
 

  // }



  // getDoneActivities(){

  //  return this.priorityList.filter(item=>item.activities.filter(activity=>activity.checked))


    
  // }

  // getActivitiesType(checked) {
  //   let list = []
  //   this.priorityList.forEach(item=>{
  //     item.activities.forEach(el=>{
  //       if(checked) {
  //         if(el.checked) list.push(el)
  //       }
  //       if(!checked) {
  //         if(!el.checked) list.push(el)

  //       }
  
  //     })
  //   })
  //   return list


  // }

  getPercentage() {
    
    let totalLength = 0
    let toDoLength = 0
    let doneLength = 0

    this.priorityList.forEach(list=>{
      totalLength += list.activities.length
    })

    this.priorityList.forEach(priority=>{
      priority.activities.forEach(activity=>{
        if(activity.checked) toDoLength++
        if(!activity.checked) doneLength++
      })
    }) 


    console.log(doneLength, toDoLength, totalLength)
 
    let toDoPercentage = (toDoLength/totalLength)*100
    let donePercentage = (doneLength/totalLength)*100

  const chartOptions = {
		animationEnabled: true,
		title: {
		  text: "Activities Report"
		},
		data: [{
		  type: "pie",
		  startAngle: -90,
		  indexLabel: "{name}: {y}",
		  yValueFormatString: "#,###.##'%'",
		  dataPoints: [
			{ y: toDoPercentage, name: "to do" },
			{ y: donePercentage, name: "done" }
		  ]
		}]
	}
  return chartOptions	
  }
  
}
