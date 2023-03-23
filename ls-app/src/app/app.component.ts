import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActivitiesService } from './services/activities.service';
import { AccountService } from './services/account.service';
import { Router } from '@angular/router';
import { IUser } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ls-app'; 

  user:IUser

  constructor(public activityService: ActivitiesService, public accountService:AccountService, public router:Router ) {
    this.accountService.userV.subscribe(us=>this.user = us)

  }

  changeListType() {
    this.activityService.filter = !this.activityService.filter
  }
  showToDo() {
    this.activityService.filter = false
  }
  
  showDone() {
    this.activityService.filter = true
  }

}
