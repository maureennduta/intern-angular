import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private REST_API_SERVER = "http://localhost:3000/";
  constructor() { }
  /**
   * sendGetRequest
   */
  public getBaseURL() {
    return this.REST_API_SERVER;
  }
  
}
//this is the bridge between the two