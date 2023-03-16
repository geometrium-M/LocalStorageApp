import { Injectable } from '@angular/core';
import { AccountService } from './account.service';
import { ActivitiesService } from './activities.service';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  activitiesList:[]

  constructor(private activitiesService: ActivitiesService ) {
    this.activitiesList = this.activitiesService.prioritiesValue.priorities
    console.log(this.activitiesList)
   }

  getPercentage() {
    
    //   let totalLength = 0
    //   let toDoLength = 0
    //   let doneLength = 0
  
    //   this.activitiesList.forEach(list=>{
    //     totalLength += list.activities.length
    //   })
  
    //   this.priorityList.forEach(priority=>{
    //     priority.activities.forEach(activity=>{
    //       if(activity.checked) toDoLength++
    //       if(!activity.checked) doneLength++
    //     })
    //   }) 
  
  
    //   console.log(doneLength, toDoLength, totalLength)
   
    //   let toDoPercentage = (toDoLength/totalLength)*100
    //   let donePercentage = (doneLength/totalLength)*100
  
    // const chartOptions = {
    // 	animationEnabled: true,
    // 	title: {
    // 	  text: "Activities Report"
    // 	},
    // 	data: [{
    // 	  type: "pie",
    // 	  startAngle: -90,
    // 	  indexLabel: "{name}: {y}",
    // 	  yValueFormatString: "#,###.##'%'",
    // 	  dataPoints: [
    // 		{ y: toDoPercentage, name: "to do" },
    // 		{ y: donePercentage, name: "done" }
    // 	  ]
    // 	}]
    // }
    // return chartOptions	
    // }
}
}
