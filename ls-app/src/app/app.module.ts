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

import {DragDropModule} from '@angular/cdk/drag-drop';

import { ActivityFilterPipe } from './pipes/activity-filter.pipe';






@NgModule({
  declarations: [
    AppComponent,
    AddActivityComponent,
    ActivitiesComponent,
    ToolBarComponent,
    ActivityFilterPipe
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
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
