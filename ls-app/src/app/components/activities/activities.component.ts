import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from 'src/app/services/activities.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { IPriority } from 'src/app/model/priority';
import { priorities } from 'src/app/data/priorities';
import { AccountService } from 'src/app/services/account.service';




@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {



  listOfPriority = []

  constructor(private activitiesService:ActivitiesService, private accountService: AccountService){
    console.log('comp')

    this.activitiesService.updateId(this.accountService.userValue.id)
    

  
  }


  ngOnInit(): void {
    this.listOfPriority = this.activitiesService.prioritiesValue.priorities
    console.log(this.listOfPriority)


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

    console.log(event.container.data[event.currentIndex])

    console.log(this.listOfPriority)

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



