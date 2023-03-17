import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { ActivitiesService } from 'src/app/services/activities.service';
import { IActivity } from 'src/app/model/activity';
import { optionsList } from 'src/app/data/sortList';
import { ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent {
  activitiesList = []
  activitiesFilter = ''
  optionsList = optionsList



  constructor(public activitiesService:ActivitiesService) {}

  ngOnInit() {    
    this.activitiesList = this.activitiesService.prioritiesValue.priorities
    console.log(this.activitiesList)
  }
}
  