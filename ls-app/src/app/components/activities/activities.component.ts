import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from 'src/app/services/activities.service';
import { IActivity } from 'src/app/model/activity';



@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  listOfPriority: string[] = ['Low', 'Medium', 'High', 'Critical']
  activitiesList:IActivity[]

  constructor(private activitiesService:ActivitiesService){}


  ngOnInit(): void {
    this.activitiesService.activitiesList.subscribe(list=>this.activitiesList = list)
  }

}
