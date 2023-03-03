import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from 'src/app/services/activities.service';
import { IActivity } from 'src/app/model/activity';
import { activitiesList } from 'src/app/data/activities';

import { FormArray, FormBuilder,FormControl,FormGroup } from '@angular/forms';

import * as _ from 'lodash';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';



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

  list1 = ['1','2','3']
  list2 = ['10','20','30']
  list3 = ['111','211','311']

  items = ['firstList', 'secondList', 'thirdList']

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

  // drop(event: CdkDragDrop<string[]>) {
  //   console.log(event);

  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //     console.log(event.container.data)
  //   } else {
  //     transferArrayItem(event.previousContainer.data,
  //       event.container.data,
  //       event.previousIndex,
  //       event.currentIndex);
  //       console.log(event.currentIndex)
  //   }
  // }

  cdkDropListConnectedTo(priority) {
    let dropList =[]
    this.listOfPriority.forEach(item=>{
      if(item != priority) dropList.push(item)
    })

    return dropList

  }

  cdkDropListData(level) {
    let list = []

    this.activitiesList.forEach(item=>{
      if(item.level != level) list.push(item)
    })

    return list
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.activitiesList, event.previousIndex, event.currentIndex);
  }

  
  drop1(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
 
  
}



