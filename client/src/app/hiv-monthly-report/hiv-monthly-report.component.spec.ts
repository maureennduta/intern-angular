import { MonthlyService } from './../services/monthly-service';
import { Subject } from 'rxjs';
import { DataTablesModule } from 'angular-datatables';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HivMonthlyReportComponent } from './hiv-monthly-report.component';

describe('HivMonthlyReportComponent', () => {
  let component: HivMonthlyReportComponent;
  let fixture: ComponentFixture<HivMonthlyReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HivMonthlyReportComponent ],
      providers:[MonthlyService],
      imports:[DataTablesModule,Subject,RouterTestingModule]
    })
    .compileComponents();
    fixture = TestBed.createComponent(HivMonthlyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
//angular creates an instance of Monthly service and injects it into the component under test


});
