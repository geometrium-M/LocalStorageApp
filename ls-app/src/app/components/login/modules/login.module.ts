import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { LoginComponent } from "../login.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { LoginRoutingModule } from "./login-routing.module";
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';




@NgModule ({
    imports : [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        LoginRoutingModule,
        MatIconModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule
    ],
    declarations: [
      LoginComponent
    ],
    providers:[]
})

export class LoginModule { }