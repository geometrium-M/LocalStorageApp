import { Component } from '@angular/core';
import { ChartService } from 'src/app/services/chart.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
  date = new Date()


  chartOptions:any
  toDoPercentage
  donePercentage

  constructor(public chartService:ChartService, public alert:AlertService) {
    
    
    console.log(this.chartService.getPercentage())
    this.chartOptions = this.chartService.getPercentage()


    if(this.chartOptions) {
      this.toDoPercentage = this.chartOptions.data[0].dataPoints[0].y
      this.donePercentage = this.chartOptions.data[0].dataPoints[1].y
    }

    if(!this.chartOptions) this.alert.error('activities not found')

  }
}
