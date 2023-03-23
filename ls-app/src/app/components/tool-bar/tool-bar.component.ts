import { Component } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/model/user';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent {
  show:boolean = true
  user:any

  constructor(public accountService:AccountService, private router:Router, private route:ActivatedRoute){
    this.accountService.userV.subscribe(us=>this.user = us)
console.log(this.user)
  }
  
  logOut(){
    localStorage.removeItem('user')
    window.location.replace('')
  }

}
