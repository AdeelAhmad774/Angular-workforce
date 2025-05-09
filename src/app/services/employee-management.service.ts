import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeManagementService {
  Token = localStorage.getItem('token');
  constructor(private http:HttpClient) {  }
  getEmployeeData(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.Token}`


    });
    return this.http.post('http://192.168.100.96:7182/api/Employee/EmployeeList ',{},
      {headers});
  }
}