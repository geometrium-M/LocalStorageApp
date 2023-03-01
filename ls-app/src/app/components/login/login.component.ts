import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder){}

  form:FormGroup

 ngOnInit(): void {
   this.form = this.fb.group({
    login:this.fb.control(''),
    password:this.fb.control('')

   })
 }

}
