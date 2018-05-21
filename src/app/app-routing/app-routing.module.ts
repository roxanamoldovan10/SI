import { AttendanceComponent } from './../attendance/attendance.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from './../register/register.component';
import { DashboardComponent } from './../dashboard/dashboard.component';
import { CodeComponent } from '../code/code.component';
import { RegisterPresentComponent } from './../register-present/register-present.component';
import { TeacherComponent } from '../teacher/teacher.component';

const routes: Routes = [
  { path: 'app-login', component: LoginComponent },
  { path: 'app-register', component: RegisterComponent },
  { path: 'app-dashboard', component: DashboardComponent },
  { path: 'app-code', component: CodeComponent },
  { path: 'app-register-present', component: RegisterPresentComponent },
  { path: 'app-attendance', component: AttendanceComponent},
  { path: 'app-teacher', component: TeacherComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}