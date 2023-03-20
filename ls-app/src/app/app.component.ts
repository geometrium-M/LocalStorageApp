import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActivitiesService } from './services/activities.service';
import { AccountService } from './services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ls-app'; 

  constructor(public activityService: ActivitiesService, public accoutService:AccountService, public router:Router ) {
    console.log(accoutService.userValue)
  }

  changeListType() {
    this.activityService.filter = !this.activityService.filter

    console.log(this.activityService.filter)
  }
  showToDo() {
    this.activityService.filter = false
    console.log(this.activityService.filter)
  }
  showDone() {
    this.activityService.filter = true
    console.log(this.activityService.filter)
  }


  check() {
    console.log(this.router.url)
    
    // if(!(this.router.url === '/report')) {
    //   this.alert.clear()
      
    //  }
  }
}
