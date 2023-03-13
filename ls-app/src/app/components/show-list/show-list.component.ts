import { Component, Input, OnInit } from '@angular/core';
import { ActivitiesService } from 'src/app/services/activities.service';
import { IActivity } from 'src/app/model/activity';
import { optionsList } from 'src/app/data/sortList';
import { ActivatedRoute,NavigationEnd,NavigationStart,Router} from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent {
  list:Observable<any>

 checked:any

  constructor(
    private activitiesService:ActivitiesService, 
    private route:ActivatedRoute,
    private router:Router
  ) {}

  ngOnInit() {
    this.router.events.subscribe(event=>{
      if(event instanceof NavigationEnd) {
        this.route.queryParams.subscribe(
          params => {
            this.checked =  params['list']
          }
        )
        console.log(this.checked)
      this.activitiesService.getActivitiesTypeList(this.checked).subscribe((list)=>{
        this.list = list
      })

      }
    })


  }
}
