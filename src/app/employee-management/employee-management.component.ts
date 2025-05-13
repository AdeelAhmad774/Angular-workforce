import { Component } from '@angular/core';
import { EmployeeManagementService } from '../services/employee-management.service';
import { SharedToken } from '../Shared/Service/shared-token';

@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.css'],
  providers: [EmployeeManagementService]
})
export class EmployeeManagementComponent {

  displayedColumns: string[] = ['name', 'email', 'passportNationality', 'visaIssueDate'];
dataSource: any[] = [];


  constructor(
    private employeeManagementService: EmployeeManagementService,
    private sharedToken: SharedToken
  ) {}

  ngOnInit() {
    this.getEmployeeData();
  }

  getEmployeeData() {
    this.employeeManagementService.getEmployeeData().subscribe(
      (response: any) => {
        // console.log('Full response:', response);
  
        const employeeList:any[] = response.result;
  
        
          this.dataSource = employeeList.map(emp => ({
            name: emp.firstName + ' ' + (emp.lastName || ''),
            email: emp.email,
            passportNationality: emp.passportDetail?.nationality || 'N/A',
            visaIssueDate: emp.visaDetail?.issueDate?.split('T')[0] || 'N/A'
          }));
        
      },
      (err: any) => {
        console.error('Error fetching employee data:', err);
      }
    );
  }
  
  
  
}  