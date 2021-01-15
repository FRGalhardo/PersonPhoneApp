import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = "http://localhost:5000/api"

  constructor(private http:HttpClient) { }

  getPersonPhoneList(): Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/PersonPhone');
  }

  addPersonPhone(val:any){
    return this.http.post(this.APIUrl+'/PersonPhone', val);
  }

  updatePersonPhone(val:any){
    return this.http.put(this.APIUrl+'/PersonPhone', val);
  }

  deletePersonPhone(val:any){
    return this.http.delete(this.APIUrl+'/PersonPhone', val);
  }

  getPhoneNumberTypeList(): Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/PhoneNumberType');
  }

  addPhoneNumberType(val:any){
    return this.http.post(this.APIUrl+'/PhoneNumberType', val);
  }

  updatePhoneNumberType(val:any){
    return this.http.put(this.APIUrl+'/PhoneNumberType', val);
  }

  deletePhoneNumberType(val:any){
    return this.http.delete(this.APIUrl+'/PhoneNumberType', val);
  }

  getAllPersonPhone():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/PersonPhone/GetAllDepartamentName');
  }
}
