
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { PatientService } from './services/patient-service';
import { MonthlyService } from './services/monthly-service';
import { DataTablesModule } from 'angular-datatables';

import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { PatientsearchComponent } from './patientsearch/patientsearch.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HivMonthlyReportComponent } from './hiv-monthly-report/hiv-monthly-report.component';
import { HivPatientsReportComponent } from './hiv-patients-report/hiv-patients-report.component';

 
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PatientsearchComponent,
    HivMonthlyReportComponent,
    HivPatientsReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule, 
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    MatPaginatorModule,
    MatSortModule,
    NgbModule,
    DataTablesModule    
  ],
  providers: [
    PatientService,
    MonthlyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
