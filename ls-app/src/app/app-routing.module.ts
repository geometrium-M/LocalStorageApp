import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './components/activities/activities.component';

import { ChartComponent } from './components/chart/chart.component';

import { ShowListComponent } from './components/show-list/show-list.component';


const routes: Routes = [
  {
    path:'',
    component: ActivitiesComponent
  },
  {
    path:'report',
    component:ChartComponent
  },
  {
    path:'list', component:ShowListComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
