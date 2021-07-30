import { Component, OnInit,ViewChild } from '@angular/core';
import { PatientService } from '../services/patient-service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-patientsearch',
  templateUrl: './patientsearch.component.html',
  styleUrls: ['./patientsearch.component.css'],
})
export class PatientsearchComponent implements OnInit {
  public searchString = '';
  patients : any;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  selectedPatient: any;
  @ViewChild(DataTableDirective,{static: false})
  dtElement!: DataTableDirective;
  isDtInitialized: boolean = false;

  constructor(private patientService: PatientService) {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      lengthMenu: [2, 5, 10, 15],
      dom: 'lrtip',
      destroy:true
    };
   this.dtTrigger.next();
  }
  public searchPatient(): void {
    if (this.searchString.length !==0)
    this.patientService.getPatientByName(this.searchString).subscribe(      
      (result) => {
        this.patients=result;
        console.log('Patient is',this.searchString);
        console.log('result', result);
        this.dtTrigger.next();
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
  // ngAfterViewInit(): void {
  //   this.dtTrigger.next();
  // }

  onChange(event:any){
    this.searchString = event;
    this.searchPatient();

  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.dtTrigger.next();
    });
    
  }
}
