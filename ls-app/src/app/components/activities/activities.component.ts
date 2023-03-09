import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from 'src/app/services/activities.service';
import * as _ from 'lodash';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { IPriority } from 'src/app/model/priority';
import { IActivity } from 'src/app/model/activity';


@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {



  listOfPriority: IPriority[] 

  constructor(private activitiesService:ActivitiesService){
   this.listOfPriority = this.activitiesService.priorityList
  }


  ngOnInit(): void {}


  showCompleted() {
    // let completed = []
    // this.listOfPriority.forEach(item=>{
    // item.activities.forEach(el=>{
    //   if(el.checked) completed.push(el.description)
    // })
    // })
    //  console.log(completed)
    this.activitiesService.getDoneActivities()
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
        if(event.container.element.nativeElement.id == '0') event.container.data[event.currentIndex].level = 'low'
        if(event.container.element.nativeElement.id == '1') event.container.data[event.currentIndex].level = 'medium'
        if(event.container.element.nativeElement.id == '2') event.container.data[event.currentIndex].level = 'high'

        console.log(event.container.data[event.currentIndex], event.container)
    }
  }


  delete(priority,index){
    this.activitiesService.deleteActivity(priority,index)
  }

  update(checkbox,priority,index,value){
    checkbox.checked = !checkbox.checked
    if(!checkbox.checked) this.activitiesService.updateActivity(priority,index,value)
  }
  

 
  
}



