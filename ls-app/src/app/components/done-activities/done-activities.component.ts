import { Component } from '@angular/core';
import { ActivitiesService } from '../../services/activities.service';
import { IActivity } from '../../model/activity';
import { optionsList } from 'src/app/data/sortList';


@Component({
  selector: 'app-done-activities',
  templateUrl: './done-activities.component.html',
  styleUrls: ['./done-activities.component.css']
})
export class DoneActivitiesComponent {

  list:IActivity[]
  activitiesFilter = ''
  optionsList = optionsList


  constructor(private activitiesService:ActivitiesService){
    this.list = this.activitiesService.getDoneActivities()
  }

}
