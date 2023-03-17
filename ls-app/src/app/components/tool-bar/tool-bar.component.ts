import { Component } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent {
  show:boolean = true

  constructor(public accountService:AccountService, private router:Router, private route:ActivatedRoute){}
  
  logOut(){
    localStorage.removeItem('user')
    window.location.replace('')
  }

}
