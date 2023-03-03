import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from 'src/app/services/activities.service';
import { IActivity } from 'src/app/model/activity';
import { activitiesList } from 'src/app/data/activities';

import { FormArray, FormBuilder,FormControl,FormGroup } from '@angular/forms';

import * as _ from 'lodash';



@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
  
  form:FormGroup

  completed = true
  completedList:string[] = []

  listOfPriority: string[] = ['Low', 'Medium', 'High']
  activitiesList:IActivity[] = activitiesList


  constructor(private activitiesService:ActivitiesService, private fb:FormBuilder){
    // this.activitiesService.activitiesList.subscribe(list=>this.activitiesList = list)
 
  }


  ngOnInit(): void {
    this.form = this.fb.group({
      activities:this.fb.array([])
    })
    this.patch()
  }

  patch() {
    const activitiesControl = <FormArray>this.form.get('activities');
    this.activitiesList.forEach(activity=>{
      activitiesControl.push(this.patchValues(activity.description,activity.level, activity.checked))

    })
  }

  patchValues(description:string, level:string, checked:boolean) {
    return this.fb.group({
      description:[description],
      level:[level],
      checked:[checked]
    })

  }

  showCompleted() {
  
    this.form.value.activities.forEach((activity:IActivity)=>{
      if(activity.checked) {
        this.completedList.push(activity.description)
      }})
      console.log(this.completedList)
      this.completed = true
  }
 
  
}



