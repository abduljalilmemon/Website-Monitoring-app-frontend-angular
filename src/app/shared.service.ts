import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "http://0.0.0.0:1000";

  constructor(private http:HttpClient) { }

  getWebsiteList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl + '/website');
  }
  addWebsite(val:any){
    return this.http.post(this.APIUrl + '/website', val);
  }
  updateWebsite(val:any){
    return this.http.put(this.APIUrl + '/website', val);
  }
  deleteWebsite(val:any){
    return this.http.delete(this.APIUrl + '/website',{body:val});
  }

  getAllWebsiteNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/website');
  }
}
