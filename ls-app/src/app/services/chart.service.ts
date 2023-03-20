import { Injectable } from '@angular/core';
import { AccountService } from './account.service';
import { ActivitiesService } from './activities.service';
import {IPriority} from "../model/priority"
import { compare } from '../helpers/date.methods';


@Injectable({
  providedIn: 'root'
})
export class ChartService {
  
  totalLength = 0
  toDoLength = 0
  doneLength = 0


  activitiesList:IPriority[]

  constructor(private activitiesService: ActivitiesService ) {
    this.activitiesList = this.activitiesService.prioritiesValue.priorities
    console.log(this.activitiesList)

  }

  getPercentage() {
    this.totalLength = 0
    this.toDoLength = 0
    this.doneLength = 0
    
      this.activitiesList.forEach(list=>{
        list.activities.forEach(activity=>{
          if(compare(activity.date))
          
          this.totalLength++
          if(compare(activity.date) && !activity.checked)
          this.toDoLength++
          if(compare(activity.date) && activity.checked)
          this.doneLength++

        })
      })

      if(this.totalLength === 0 ) return false

    let toDoPercentage = this.toDoLength > 0 ? (this.toDoLength/this.totalLength)*100 : 0
    let donePercentage = this.doneLength > 0 ? (this.doneLength/this.totalLength)*100 : 0

    console.log(donePercentage)

      
    const chartOptions = {
    	animationEnabled: true,
    	title: {},
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

