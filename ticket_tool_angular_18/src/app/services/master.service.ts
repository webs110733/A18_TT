import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  apiUrl: string = "http://freeapi.miniprojectideas.com/api/TicketsNew/";



  constructor(private http: HttpClient) { }

  login(obj:any) {
    //debugger;
    
    return this.http.post(this.apiUrl + "Login",obj);
  }
}
