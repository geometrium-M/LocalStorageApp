import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './components/activities/activities.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { DoneActivitiesComponent } from './components/done-activities/done-activities.component';
import { ChartComponent } from './components/chart/chart.component';


const routes: Routes = [
  {
    path:'',
    component: ActivitiesComponent
  },
  {
    path:'to-do',
    component: ToDoListComponent
  },
  {
    path:'done',
    component:DoneActivitiesComponent
  },
  {
    path:'report',
    component:ChartComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
