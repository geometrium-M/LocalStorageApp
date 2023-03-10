import { Component } from '@angular/core';
import { ActivitiesService } from 'src/app/services/activities.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {

  chartOptions:any
  totalList:number = 0
  toDoList:number = 0
  doneList:number = 0
  constructor(private activitiesService:ActivitiesService) {

    this.chartOptions = this.activitiesService.getPercentage()
    this.totalList = this.activitiesService.totalList
    this.toDoList = this.activitiesService.toDoList
    this.doneList = this.activitiesService.doneList
  }
}
