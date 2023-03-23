import { Component } from '@angular/core';
import { ActivitiesService } from 'src/app/services/activities.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';



@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent  {

  listOfPriority = []

  constructor(private activitiesService:ActivitiesService){
    this.listOfPriority = this.activitiesService.prioritiesValue.priorities
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

  delete(priority:string,index:number){
    this.activitiesService.deleteActivity(priority,index)
  }

  update(checkbox:any,priority:string,index:number,value:string){
    checkbox.checked = !checkbox.checked
    if(!checkbox.checked) this.activitiesService.updateActivity(priority,index,value)
  }

}



