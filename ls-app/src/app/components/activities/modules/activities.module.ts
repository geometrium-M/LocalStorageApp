import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { ActivitiesComponent } from "../activities.component";

import {MatCardModule} from '@angular/material/card';

import { ActivitiesRoutingModule } from "./activities-routing.module"
import { ActivityFilterPipe } from "src/app/pipes/activity-filter.pipe";



@NgModule ({
    imports : [
        CommonModule,
        MatCardModule,
        ActivitiesRoutingModule,
    ],
    declarations: [
      ActivitiesComponent,
      ActivityFilterPipe
    ],
    providers:[]
})

export class ActivitiesModule { }