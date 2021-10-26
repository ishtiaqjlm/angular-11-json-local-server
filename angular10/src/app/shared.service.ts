import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observeable } from 'RxJS';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl   ='localhost:5658/api';
  readonly PhotoUrl ='localhost:5658/photo';
  constructor(private http:HttpClient) { }

  getDeptList():Observeable<any[]>{
    return this.http.get<any>(this.APIUrl+'/department');
  }  
  addDepartment(val:any){
    return this.http.post<any>(this.APIUrl+'/department',val);
  } 
  updateDepartment(val:any){
    return this.http.post<any>(this.APIUrl+'/department',val);
  } 
  deleteDepartment(val:any){
    return this.http.post<any>(this.APIUrl+'/department'+val);
  }  
  getEmpList():Observeable<any[]>{
    return this.http.get<any>(this.APIUrl+'/employee');
  }  
  addEmployee(val:any){
    return this.http.post<any>(this.APIUrl+'/employee',val);
  } 
  updateEmployee(val:any){
    return this.http.post<any>(this.APIUrl+'/employee',val);
  } 
  deleteEmployee(val:any){
    return this.http.post<any>(this.APIUrl+'/employee'+val);
  }  
  UploadPhoto(val:any){
    return this.http.post<any>(this.APIUrl+'/employee/SendFile',val);
  }
  getAllDepartmentNames():Observeable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Employee/getAllDepartmentNames');
  }
}
