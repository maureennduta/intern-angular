import { PatientService } from './../services/patient-service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DataTablesModule } from 'angular-datatables';
import { PatientsearchComponent } from './patientsearch.component';


describe('PatientsearchComponent', () => {
  let component: PatientsearchComponent;
  let fixture: ComponentFixture<PatientsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientsearchComponent ],
      providers:[PatientService],
      imports:[DataTablesModule,RouterTestingModule]
    })
    .compileComponents();
    fixture = TestBed.createComponent(PatientsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
//angular creates an instance of Monthly service and injects it into the component under test


  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
