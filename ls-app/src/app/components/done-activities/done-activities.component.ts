import { Component } from '@angular/core';
import { ActivitiesService } from '../../services/activities.service';
import { IActivity } from '../../model/activity';


@Component({
  selector: 'app-done-activities',
  templateUrl: './done-activities.component.html',
  styleUrls: ['./done-activities.component.css']
})
export class DoneActivitiesComponent {

  list:IActivity[]

  constructor(private activitiesService:ActivitiesService){
    this.list = this.activitiesService.getDoneActivities()
  }

}
