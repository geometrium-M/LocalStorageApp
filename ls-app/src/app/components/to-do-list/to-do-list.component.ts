import { Component } from '@angular/core';
import { ActivitiesService } from 'src/app/services/activities.service';
import { IActivity } from 'src/app/model/activity';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent {
  list: IActivity[]
  constructor(private activitiesService:ActivitiesService) {
    this.list = this.activitiesService.getToDoActivities()
  }
}
