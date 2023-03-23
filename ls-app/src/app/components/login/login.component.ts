import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { AccountService } from 'src/app/services/account.service';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb:FormBuilder, 
    private accoutService:AccountService, 
    private router:Router, 
    private alert:AlertService){}

  form:FormGroup

 ngOnInit(): void {
   this.form = this.fb.group({
    userName:this.fb.control('', Validators.required),
    password:this.fb.control('', Validators.required)

   })
 }

 onSubmit() {

  if(this.form.valid) {
    let userName = this.form.value.userName.trim()
    let password = this.form.value.password.trim()
    let res = this.accoutService.login(userName, password)

    if(res) this.router.navigate([''])
    if(!res) this.alert.error('Incorrect username or password.')
  }
 }
}
