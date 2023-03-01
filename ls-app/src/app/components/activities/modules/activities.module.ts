import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { ActivitiesComponent } from "../activities.component";

import {MatCardModule} from '@angular/material/card';

import { ActivitiesRoutingModule } from "./activities-routing.module"



@NgModule ({
    imports : [
        CommonModule,
        MatCardModule,
        ActivitiesRoutingModule
    ],
    declarations: [
      ActivitiesComponent
      
    ],
    providers:[]
})

export class ActivitiesModule { }