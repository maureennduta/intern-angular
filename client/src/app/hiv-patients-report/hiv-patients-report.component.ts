import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { Subject } from 'rxjs';
import { MonthlyService } from './../services/monthly-service';
import {  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hiv-patients-report',
  templateUrl: './hiv-patients-report.component.html',
  styleUrls: ['./hiv-patients-report.component.css']
})
export class HivPatientsReportComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  location!: any;
  encounterMonth!: any;
  hivData: any[] = [];
  sub!: any;
  dtTrigger: Subject<any> = new Subject<any>();
  constructor(
    private monthlyService: MonthlyService,private route:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (params:any) => {
        console.log({params});   
         this.hivPatientsReport(params);     
      }
    );
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      lengthMenu: [2, 5, 10, 15],
      dom: 'lrtip',
      destroy: true,
    };
  }

  public hivPatientsReport(params:any): void {
    const location = params.location;
    const month = params.month;
    const status = params.hivStatus;
    this.monthlyService.getHivStatusPatientList(location,month,status).subscribe(
      (data:any) => {
        this.hivData = data;
        this.dtTrigger.next();
      },
      (error:any) => {
        console.log(error);
      }
    );
  }

  DownloadReport() {
    let row: any[] = [];
    let rowD: any[] = [];
    let col = ['Patient Name', 'EncounterDate', 'Location', 'HIV Status','Gender','Age']; // initialization for headers
    let title = 'HIV Patients List'; // title of report
    for (let a = 0; a < this.hivData.length; a++) {
      row.push(this.hivData[a].name);
      row.push(this.hivData[a].encounter_datetime);
      row.push(this.hivData[a].location);
      row.push(this.hivData[a].hiv_status);
      row.push(this.hivData[a].gender);
      row.push(this.hivData[a].age);
      rowD.push(row);
      row = [];
    }
    this.getReport(col, rowD, title);
  }
  getReport(col: any[], rowD: any[], title: any) {
    const totalPagesExp = '{total_pages_count_string}';
    let pdf = new jsPDF('l', 'pt', 'legal');
    pdf.setTextColor(51, 156, 255);
    pdf.text(title + 'Report', 435, 100); //
    pdf.setLineWidth(1.5);
    pdf.line(5, 107, 995, 107);
    var pageContent = function (data: {
      pageCount: string;
      settings: { margin: { left: any } };
    }) {
      var str = 'Page ' + data.pageCount;
      // Total page number plugin only available in jspdf v1.0+
      if (typeof pdf.putTotalPages === 'function') {
        str = str + ' of ' + totalPagesExp;
      }
      pdf.setFontSize(10);
      var pageHeight =
        pdf.internal.pageSize.height || pdf.internal.pageSize.getHeight();
      pdf.text(str, data.settings.margin.left, pageHeight - 10); // showing current page number
    };
    (pdf as any).autoTable(col, rowD, {
      addPageContent: pageContent,
      margin: { top: 110 },
    });

    //for adding total number of pages // i.e 10 etc
    if (typeof pdf.putTotalPages === 'function') {
      pdf.putTotalPages(totalPagesExp);
    }

    pdf.save(title + '.pdf');
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.dtTrigger.unsubscribe();
  }
}
