import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from 'src/app/services/activities.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { AccountService } from 'src/app/services/account.service';




@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {



  listOfPriority = []

  constructor(private accountService: AccountService ,private activitiesService:ActivitiesService){
    console.log('init')
    this.listOfPriority = this.activitiesService.prioritiesValue.priorities
    console.log(this.listOfPriority)  
  }

  ngOnInit(): void {

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
       event.container.data[event.currentIndex].level = event.container.element.nativeElement.id
    }
    this.activitiesService.updateActivitiesList()
  }


  delete(priority,index){
    this.activitiesService.deleteActivity(priority,index)
  }

  update(checkbox,priority,index,value){
    checkbox.checked = !checkbox.checked
    if(!checkbox.checked) this.activitiesService.updateActivity(priority,index,value)
  }

}



