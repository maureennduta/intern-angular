import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { SettingsService } from "./settings-service";
import { Observable } from "rxjs";

@Injectable()

export class MonthlyService {
  constructor(
    private httpClient: HttpClient,
    private settingsService: SettingsService
  ) {}
  public getBaseURL(): string {
    return this.settingsService.getBaseURL();
  }

  public getMonth(monthString: string): Observable<any> {
    const url = this.getBaseURL() + "monthly";
    console.log("url",url)
    const params = new HttpParams().set("month", monthString);
    return this.httpClient.get<any>(url, { params: params });
  }

  public getHivStatusPatientList(location:number,month:string,status:string): Observable<any>{
     const url =this.getBaseURL() + "monthly-status-report/patient-list";
     const params = new HttpParams().set("month", month)
     .set("location",location)
     .set("status",status);
     return this.httpClient.get(url,{params: params});
  }
}
//this is the bridge between frontend and backend
