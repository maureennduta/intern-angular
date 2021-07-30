import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { SettingsService } from "./settings-service";
import { Observable } from "rxjs";

@Injectable()

export class PatientService {
  constructor(
    private httpClient: HttpClient,
    private settingsService: SettingsService
  ) {}
  /**
   * sendGetRequest
   */
  public getBaseURL(): string {
    return this.settingsService.getBaseURL();
  }

  public getPatientByName(searchString: string): Observable<any> {
    const url = this.getBaseURL() + "patient-search";
    console.log("url",url)
    const params = new HttpParams().set("name", searchString);
    return this.httpClient.get<any>(url, { params: params });
  }

  // public getHivPatientReport(location:number,month:number):Observable<any>{
  //   const url = this.getBaseURL() + "patients";
  //   console.log("url",url)
  //   const params = new HttpParams().set("patientsreport", location);
  //   return this.httpClient.get<any>(url, { params: params });
  // }
   

}
//this is the bridge between the two
