import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from 'src/app/services/activities.service';
import { IActivity } from 'src/app/model/activity';
import { activitiesList } from 'src/app/data/activities';

import { FormArray, FormBuilder,FormControl,FormGroup } from '@angular/forms';

import * as _ from 'lodash';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { IPriority } from 'src/app/model/priority';

import { priorities } from 'src/app/data/priorities';



@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
  
  form:FormGroup

  completed = true
  completedList:string[] = []

  listOfPriority: IPriority[] = priorities
  activitiesList:any[] = activitiesList

  list1 = ['1','2','3']
  list2 = ['10','20','30']
  list3 = ['111','211','311']

  items = ['firstList', 'secondList', 'thirdList']
  prioritiesIds = []
  ids = ['0','1','2']

  lowList=[]
  mediumList=[]
  highList=[]
  doneList = {
    id:4,
    activities:[]
  }



  constructor(private activitiesService:ActivitiesService, private fb:FormBuilder){
    // this.activitiesService.activitiesList.subscribe(list=>this.activitiesList = list)
 
  }


  ngOnInit(): void {
    this.form = this.fb.group({
      activities:this.fb.array([])
    })
    this.patch()


    this.activitiesList.forEach(item=>{
      if(item.level == 'low') this.lowList.push(item.description)
      if(item.level == 'medium') this.mediumList.push(item.description)
      if(item.level == 'high') this.highList.push(item.description)
    })
    console.log(this.lowList, this.mediumList, this.highList)

    this.listOfPriority.forEach(priority=> {
      if(priority.value === 'low') priority.activities = this.lowList
      if(priority.value === 'medium') priority.activities = this.mediumList
      if(priority.value === 'high') priority.activities = this.highList
    })
    console.log(this.listOfPriority)
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



  cdkDropListConnectedTo() {
   return this.listOfPriority.map(x=>`${x.id}`)
  }

 
  drop(event: CdkDragDrop<any[]|any>) {    
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
        transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
        // if(event.container.element.nativeElement.id == '0') event.container.data[event.currentIndex].level = 'low'
        // if(event.container.element.nativeElement.id == '1') event.container.data[event.currentIndex].level = 'medium'
        // if(event.container.element.nativeElement.id == '2') event.container.data[event.currentIndex].level = 'high'

        console.log(event.container.data[event.currentIndex])
    }
  }
  

 
  
}



