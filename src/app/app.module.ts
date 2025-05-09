import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ToastrModule } from 'ngx-toastr';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { EmployeeManagementComponent } from './employee-management/employee-management.component';
import { SharedToken } from './Shared/Service/shared-token';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    MainDashboardComponent,
    EmployeeManagementComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
MatMenuModule,
MatFormFieldModule,
MatTableModule,
MatPaginatorModule,
ToastrModule.forRoot({
  positionClass: 'toast-top-right',
}),
NgCircleProgressModule.forRoot({
  radius: 100,
  outerStrokeWidth: 16,
  innerStrokeWidth: 8,
  outerStrokeColor: "#78C000",
  innerStrokeColor: "#C7E596",
  animationDuration: 300,
}),  
  ],
  providers: [SharedToken],
  bootstrap: [AppComponent]
})
export class AppModule { }
