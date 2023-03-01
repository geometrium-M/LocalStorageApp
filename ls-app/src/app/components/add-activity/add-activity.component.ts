import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,NgForm, Validators } from '@angular/forms';
import { ILevel } from 'src/app/model/level';
import { levelsList } from 'src/app/data/levels';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.css']
})
export class AddActivityComponent implements OnInit { 

  constructor(private fb:FormBuilder){}

  form:FormGroup
 
  levels:ILevel[] = levelsList



 ngOnInit(): void {
   this.form = this.fb.group({
    activity:this.fb.control(''),
    selectedLevel:this.fb.control('',[Validators.required])
   })
 }

 onSubmit(){
  if(this.form.valid)
  console.log(this.form.value)
 }

 
 get selectedLevel() {
  return this.form.get('selectedLevel')
}

}
