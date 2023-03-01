import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import {AddActivityComponent } from "../add-activity.component";

import {FormsModule,ReactiveFormsModule } from "@angular/forms";
import {AddActivityRoutingModule} from "./add-activity-routing.module"

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';


@NgModule ({
    imports : [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        AddActivityRoutingModule

  
    ],
    declarations: [
      AddActivityComponent
    
    ],
    providers:[]
})

export class AddActivityModule { }