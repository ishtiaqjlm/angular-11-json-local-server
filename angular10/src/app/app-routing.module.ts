import { NgModule } from '@angular/core';
import { Route,RoutingModules } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EmployeeComponents } from './employee/employee-components';
import { DepartmentComponents } from './department/department-components';

const:routes:Routes=[
  (path:'employee',component:EmployeeComponents),
  (path:'department',component:DepartmentComponents),
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)],
    CommonModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
