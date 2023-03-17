import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './components/activities/activities.component';

import { ChartComponent } from './components/chart/chart.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { ShowListComponent } from './components/show-list/show-list.component';

import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [

  {
    path:'', component: ActivitiesComponent, canActivate: [AuthGuard]
  },
  {
    path:'report', component:ChartComponent
  },
  {
    path:'list', component:ShowListComponent
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'register', component: RegisterComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
