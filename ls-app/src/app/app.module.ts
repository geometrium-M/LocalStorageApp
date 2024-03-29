import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddActivityComponent } from './components/add-activity/add-activity.component';
import { ActivitiesComponent } from './components/activities/activities.component';

import {FormsModule,ReactiveFormsModule } from "@angular/forms";
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {ToolBarComponent } from './components/tool-bar/tool-bar.component';

import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import {DragDropModule} from '@angular/cdk/drag-drop';



import { SortByPipe } from './pipes/sort-by.pipe';
import { ActivitiesFilterPipe } from './pipes/activities-filter.pipe';
import { ChartComponent } from './components/chart/chart.component';
import { LoginComponent } from './components/login/login.component';

import * as CanvasJSAngularChart from '../assets/canvasjs.angular.components';
import { ShowListComponent } from './components/show-list/show-list.component';
import { ActivitiesCheckedFilterPipe } from './pipes/activities-checked-filter.pipe';
import { RegisterComponent } from './components/register/register.component';
import { AlertComponent } from './components/alert/alert.component';
import { DeletedActivitiesComponent } from './deleted-activities/deleted-activities.component'
var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;



@NgModule({
  declarations: [
    AppComponent,
    AddActivityComponent,
    ActivitiesComponent,
    ToolBarComponent,
    SortByPipe,
    ActivitiesFilterPipe,
    ChartComponent,
    CanvasJSChart,
    LoginComponent,
    ShowListComponent,
    ActivitiesCheckedFilterPipe,
    RegisterComponent,
    AlertComponent,
    DeletedActivitiesComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    DragDropModule,
    MatIconModule,
    MatProgressBarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
