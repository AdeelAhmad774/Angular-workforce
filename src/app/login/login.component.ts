import { Component } from '@angular/core';
import { LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginServiceService]
})
export class LoginComponent {
  constructor(private loginservice:LoginServiceService){}
public username :string="";
public password:string="";
loginUser(){
  this.loginservice.loginUser(this.username,this.password).subscribe((response:any)=>{
    console.log('Full response:', response); 

    if(response.code === 200){
      console.log("login sucessfully")
     
    }
    else{
      console.log("not login")
    }
  })
}
}

