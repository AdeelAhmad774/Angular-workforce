import { Injectable } from '@angular/core';

import {HttpClient,HttpHeaders} from'@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http:HttpClient) { }
  loginUser(username:string,password:string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    
    return this.http.post(
      `http://192.168.100.96:7182/api/Auth/Login?username=${username}&password=${password}`,
      {},
      { headers }
    );
  }
}
