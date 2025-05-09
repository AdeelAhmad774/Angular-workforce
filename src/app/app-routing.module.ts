import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeManagementComponent } from './employee-management/employee-management.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {path:'', component:DashboardComponent},
  {path:'login', component : LoginComponent} ,
  {path:'main-dashboard', component : MainDashboardComponent,
    children: [
      
      { path: '', component: HomepageComponent },
      {path:'employee-management', component : EmployeeManagementComponent} ,
      ]
  } 

 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
