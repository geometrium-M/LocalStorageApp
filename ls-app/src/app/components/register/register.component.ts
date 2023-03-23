import { Component,OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { AccountService } from 'src/app/services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  constructor(private fb:FormBuilder, private accountService:AccountService, private router:Router){}

  form:FormGroup


  ngOnInit() {
    this.form = this.fb.group({
        firstName: this.fb.control('',Validators.required),
        lastName: this.fb.control('',Validators.required),
        userName: this.fb.control('',Validators.required),
        password: this.fb.control('',Validators.required),
        id:this.fb.control('')
    });
  }

  onSubmit() {
    this.form.get('id').setValue(Date.now())
    console.log(this.form.value)
    if(this.form.valid) {
      this.accountService.register(this.form.value)
      this.router.navigate([''])
    }
  }
}
