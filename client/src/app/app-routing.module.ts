import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientsearchComponent } from './patientsearch/patientsearch.component';
import { HivMonthlyReportComponent } from './hiv-monthly-report/hiv-monthly-report.component';
import { HivPatientsReportComponent } from './hiv-patients-report/hiv-patients-report.component';

const routes: Routes = [
  {path:'search',component:PatientsearchComponent},
  {
    path: 'monthly-report',
    children: [
      {
        path: '', 
        component: HivMonthlyReportComponent
      },
      {
        path: 'patient-list',
        component: HivPatientsReportComponent
      }      
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [HivMonthlyReportComponent]
