import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivitiesService } from '../services/activities.service';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-deleted-activities',
  templateUrl: './deleted-activities.component.html',
  styleUrls: ['./deleted-activities.component.css']
})
export class DeletedActivitiesComponent {
  list:any
  constructor(private activitiesService:ActivitiesService, private router:Router, private alert:AlertService){
    this.activitiesService.assignValue().subscribe((list)=>this.list = list)

    if(!this.list.length) {console.log('empty') 
    this.alert.deletedmessage('deleted list is empty')}
    console.log(this.list)
  }

  restore(item,index){
    this.activitiesService.restore(item,index)

    this.router.navigate([''])


  }

}