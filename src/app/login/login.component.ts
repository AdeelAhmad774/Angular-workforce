import { Component } from '@angular/core';
import { LoginServiceService } from '../services/login-service.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MatFormFieldControl} from '@angular/material/form-field';
import { SharedToken } from '../Shared/Service/shared-token';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginServiceService]
})
export class LoginComponent {
  constructor(private loginservice:LoginServiceService,private toastr: ToastrService,private router:Router,private sharedToken:SharedToken){}
public username :string="";
public password:string="";
loginUser() {
  this.loginservice.loginUser(this.username, this.password).subscribe({
    next: (response: any) => {
      console.log('Full response:', response);

      if (response.code === 200) {
        this.toastr.success('Login Successful!', 'Success');
        const tokenData = response.responseData;  
        this.sharedToken.setToken(tokenData); // Store the token using SharedToken service
       
       
        
        this.router.navigate(['/main-dashboard']);
      } else {
        this.toastr.error(response.message || 'Login failed.', 'Error');
      }
    },
    error: (err) => {
      console.error(err);
      this.toastr.error('Server error. Please try again later.', 'Error');
    }
  })
}
}

