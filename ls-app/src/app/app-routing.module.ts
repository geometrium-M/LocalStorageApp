import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path:'login',
    loadChildren:() => import('./components/login/modules/login.module').then(m=>
      m.LoginModule)
  },
  {
    path:'',
    loadChildren:() => import('./components/add-activity/modules/add-activity.module').then(m=>
      m.AddActivityModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
