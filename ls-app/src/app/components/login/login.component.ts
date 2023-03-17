import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { AccountService } from 'src/app/services/account.service';
import { Router } from '@angular/router';

import { User } from 'src/app/model/user';
import { AlertService } from 'src/app/services/alert.service';
import { ActivitiesService } from 'src/app/services/activities.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder, private accoutService:AccountService, private router:Router, private alert:AlertService, private activitiesService:ActivitiesService){}

  form:FormGroup
  sumbit:boolean

 ngOnInit(): void {
   this.form = this.fb.group({
    userName:this.fb.control('', Validators.required),
    password:this.fb.control('', Validators.required)

   })
 }

 onSubmit() {

  if(this.form.valid) {
    let userName = this.form.value.userName
    let password = this.form.value.password
    let res = this.accoutService.login(userName, password)
    console.log(res)
    this.activitiesService.updateId(this.accoutService.userValue.id)
    
    this.router.navigate([''])
    
 
  
    if(!res) this.alert.error('not exist')
 
  }
  
 }

}
