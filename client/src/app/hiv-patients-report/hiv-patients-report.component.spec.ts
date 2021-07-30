import { MonthlyService } from './../services/monthly-service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Subject } from 'rxjs';
import { DataTablesModule } from 'angular-datatables';
import { HivPatientsReportComponent } from './hiv-patients-report.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('HivPatientsReportComponent', () => {
  let component: HivPatientsReportComponent;
  let fixture: ComponentFixture<HivPatientsReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HivPatientsReportComponent ]
    })
    .compileComponents();
  });
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HivPatientsReportComponent ],
      providers:[MonthlyService],
      imports:[DataTablesModule,Subject,RouterTestingModule]
    })
    .compileComponents();
    fixture = TestBed.createComponent(HivPatientsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  });



  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

