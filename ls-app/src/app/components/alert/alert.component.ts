import { Component } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  constructor(public alert:AlertService, private router:Router) {
  
    this.router.events.subscribe(()=>{
      if(this.router.url !== '/report') this.alert.clear()
    })
  }
}
