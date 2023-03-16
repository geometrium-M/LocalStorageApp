import { Component } from '@angular/core';
import { ActivitiesService } from 'src/app/services/activities.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {

  chartOptions:any
  totalList:number = 1
  toDoPercentage
  donePercentage
  constructor(private activitiesService:ActivitiesService) {



    console.log(this.chartOptions.data[0].dataPoints)
    this.toDoPercentage = this.chartOptions.data[0].dataPoints[0].y
    this.donePercentage = this.chartOptions.data[0].dataPoints[1].y
 
    console.log(this.toDoPercentage)


  }
}
