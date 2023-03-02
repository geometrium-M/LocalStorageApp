import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { ActivitiesComponent } from "../activities.component";

import {FormsModule,ReactiveFormsModule } from "@angular/forms";

import {MatCardModule} from '@angular/material/card';

import { ActivitiesRoutingModule } from "./activities-routing.module"
import { ActivityFilterPipe } from "src/app/pipes/activity-filter.pipe";

import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';



@NgModule ({
    imports : [
        CommonModule,
        ActivitiesRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatCheckboxModule,
        MatRadioModule
        
    ],
    declarations: [
      ActivitiesComponent,
      ActivityFilterPipe
    ],
    providers:[]
})

export class ActivitiesModule { }