import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivitiesService } from './services/activities.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ls-app'; 

  constructor(private route:ActivatedRoute, router:Router, public acrivityService: ActivitiesService) {}

  changeListType() {
    this.acrivityService.filter = !this.acrivityService.filter
  }
}
