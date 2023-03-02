import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,NgForm, Validators } from '@angular/forms';
import { ILevel } from 'src/app/model/level';
import { levelsList } from 'src/app/data/levels';
import { ActivitiesService } from 'src/app/services/activities.service';
import { IActivity } from 'src/app/model/activity';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.css']
})
export class AddActivityComponent implements OnInit { 

  constructor(
    private fb:FormBuilder, 
    private activitiesService:ActivitiesService,
    private router:Router
    ){}

  form:FormGroup
 
  levels:ILevel[] = levelsList



 ngOnInit(): void {
   this.form = this.fb.group({
    activity:this.fb.control(''),
    selectedLevel:this.fb.control('',[Validators.required])
   })
 }
 
 get selectedLevel() {
  return this.form.get('selectedLevel')
}

 onSubmit(){
  if(this.form.valid) {

    const activity:IActivity = {
      description:this.form.value.activity,
      level:this.form.value.selectedLevel
    }
    this.activitiesService.addActivity(activity)
  this.router.navigate(['activities'])
  }

 

  
 }



}
